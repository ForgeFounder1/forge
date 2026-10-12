/* Forge app. Plain JS, no build step, works from file:// (no fetch). */
(function () {
  'use strict';
  var P = window.FORGE_PLATFORMS || {};

  // Platforms planned but not yet loaded. Loaded data files override entries with the same id.
  var CATALOG = [
    { id: 'miata', name: 'Miata', title: 'Mazda MX-5 Miata', years: 'Multiple gens', make: 'Mazda' },
    { id: 'bmw-3', name: '3 Series', title: 'BMW 3 Series', years: 'Multiple gens', make: 'BMW' }
  ];

  var CONF = {
    'verified': ['Verified', 'c-ok', 'Source page opened and states it'],
    'verified-secondary': ['Verified', 'c-ok', 'Verified on a secondary page (wiki, blog or retailer)'],
    'forum': ['Forum-reported', 'c-forum', "An owner's claim in a thread that was opened and read"],
    'video': ['Video-reported', 'c-video', 'Video title, channel, date and description confirmed; video not watched'],
    'unconfirmed': ['Unconfirmed', 'c-warn', 'Search extract only, or the page would not load'],
    'unknown': ['Unknown', 'c-dim', 'No usable source found']
  };
  // Sections of a platform. Ids are kept from the old tab routes so links still work.
  var SECTIONS = [
    ['parts', 'Parts'], ['problems', 'Problems and fixes'], ['guides', 'DIY and swap guides'],
    ['wheels', 'Wheels and tires'], ['overview', 'Specs and years'], ['tips', 'Owner tips']
  ];
  var SNAME = {}; SECTIONS.forEach(function (s) { SNAME[s[0]] = s[1]; });
  var KEY = 'forge.builds.v2', OLDKEY = 'forge.build.v1';
  var app = document.getElementById('app');
  var state = { q: '', gq: '', pq: '', sort: 'price-asc', stance: null, mineOnly: false };

  // ---------- utils ----------
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function money(n) { return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function badge(c) {
    if (!c) return '';
    var list = Array.isArray(c) ? c : [c], seen = {}, out = '';
    list.forEach(function (k) { var d = CONF[k] || CONF.unknown; if (seen[d[0]]) return; seen[d[0]] = 1; out += '<span class="cf ' + d[1] + '" title="' + esc(d[2]) + '">' + d[0] + (k === 'verified-secondary' ? ' (2nd)' : '') + '</span>'; });
    return out;
  }
  function badges(o) { return '<span class="cfs">' + badge(o.conf) + (o.disputed ? '<span class="flag-disputed" title="Sources or owners disagree">Disputed</span>' : '') + '</span>'; }
  function links(list) { return (list || []).map(function (s) { return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a>'; }).join(' · '); }
  function srcs(list, note) {
    if ((!list || !list.length) && !note) return '';
    return '<div class="src">' + (note ? esc(note) + (list && list.length ? ' · ' : '') : '') + links(list) + '</div>';
  }
  // Tips: new shape {text, source_url, source_name, confidence, date_checked, disputed?} or legacy {text, conf, src, disputed?}
  function tipList(list) {
    return '<ul class="tips">' + (list || []).map(function (t) {
      var src = t.source_url ? [{ label: t.source_name || 'Source', url: t.source_url }] : t.src;
      var note = t.date_checked ? 'checked ' + t.date_checked : '';
      return '<li><div>' + esc(t.text) + '</div><div class="tip-m">' + badges({ conf: t.confidence || t.conf, disputed: t.disputed }) + srcs(src, note) + '</div></li>';
    }).join('') + '</ul>';
  }
  function tipBlock(title, list) { return list && list.length ? '<h2 class="h2">' + title + '</h2>' + tipList(list) : ''; }
  function table(t, opts) {
    opts = opts || {};
    var dis = t.disputedRows || [];
    var h = '<div class="tbl-wrap"><table><thead><tr>' + t.columns.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>';
    t.rows.forEach(function (r, i) {
      h += '<tr' + (dis.indexOf(i) > -1 ? ' class="disputed"' : '') + '>' + r.map(function (c, j) {
        var isConf = (Array.isArray(c) ? c.length && c.every(function (k) { return CONF[k]; }) : CONF[c]) && t.columns[j] && /confidence/i.test(t.columns[j]);
        var cell = isConf ? badge(c) : esc(c);
        if (j === 0 && dis.indexOf(i) > -1) cell += ' <span class="flag-disputed">Disputed</span>';
        if (j === 0 && t.rowSrc && t.rowSrc[i]) cell += ' <a class="small" href="' + esc(t.rowSrc[i]) + '" target="_blank" rel="noopener">source</a>';
        return '<td' + (opts.numCol === j ? ' class="num"' : '') + '>' + cell + '</td>';
      }).join('') + '</tr>';
    });
    h += '</tbody></table></div>';
    if (t.note) h += '<p class="tbl-note">' + esc(t.note) + '</p>';
    if (t.conf || t.src) h += '<div class="src">' + badge(t.conf) + ' ' + links(t.src) + '</div>';
    return h;
  }
  function toast(msg) { var t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove('show'); }, 1800); }
  var CHEV = '<svg class="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
  var SEARCH_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';
  function row(href, title, sub, right, cls) {
    return '<a class="row' + (cls ? ' ' + cls : '') + '" href="' + href + '"><span class="row-main"><span class="row-t">' + title + '</span>' + (sub ? '<span class="row-s">' + sub + '</span>' : '') + '</span>' + (right ? '<span class="row-r">' + right + '</span>' : '') + CHEV + '</a>';
  }
  function crumb(pid, p, items) {
    return '<nav class="crumb" aria-label="Breadcrumb"><a href="#/p/' + pid + '">' + esc(p.name) + '</a>' + items.map(function (it) { return '<span>/</span>' + (it[1] ? '<a href="' + it[1] + '">' + esc(it[0]) + '</a>' : '<b>' + esc(it[0]) + '</b>'); }).join('') + '</nav>';
  }
  function fold(title, body, open, meta) {
    return '<details class="fold"' + (open ? ' open' : '') + '><summary><span>' + esc(title) + (meta ? ' <span class="dim small">' + esc(meta) + '</span>' : '') + '</span>' + CHEV + '</summary><div class="fold-b">' + body + '</div></details>';
  }

  // ---------- storage: builds + garage ----------
  // { current: platformId, garage: [platformId], builds: { platformId: { photo, items } } }
  function loadStore() {
    var st = null;
    try { st = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { }
    if (!st || !st.builds) {
      st = { current: '', builds: {} };
      try { var old = JSON.parse(localStorage.getItem(OLDKEY) || 'null'); if (old && old.items) { var op = old.platform || Object.keys(P)[0]; st.builds[op] = { photo: old.photo || '', items: old.items }; st.current = op; } } catch (e) { }
    }
    if (!st.garage) st.garage = Object.keys(st.builds).filter(function (k) { return P[k] && st.builds[k].items && st.builds[k].items.length; });
    st.garage = st.garage.filter(function (k) { return P[k]; });
    if (!P[st.current]) st.current = st.garage[0] || '';
    if (!st.veh) st.veh = {};
    return st;
  }
  var store = loadStore();
  function buildFor(pid) { if (!store.builds[pid]) store.builds[pid] = { photo: '', items: [] }; return store.builds[pid]; }
  var build = buildFor(store.current || '_none');
  function useBuild(pid) { if (!P[pid]) return; store.current = pid; build = buildFor(pid); }
  // Saving is explicit only (Save to My Garage). v = { year, make, model, cab, drive, engine, engineShort } or {} for platform-only.
  function saveVehicle(pid, v) { if (!P[pid]) return; if (store.garage.indexOf(pid) < 0) store.garage.push(pid); store.veh[pid] = v || {}; useBuild(pid); saveBuild(); updateCount(); }
  function isSaved(pid) { return store.garage.indexOf(pid) > -1; }
  function vehLabel(pid) { var v = store.veh[pid] || {}; return v.year ? [v.year, v.model, v.engineShort].filter(Boolean).join(' ') : ''; }
  function vehDetail(pid) { var v = store.veh[pid] || {}; return [v.cab, v.bed, v.drive, v.engine].filter(Boolean).join(' · '); }
  function saveBuild() { try { localStorage.setItem(KEY, JSON.stringify(store)); return true; } catch (e) { toast('Could not save (storage full). Try a smaller photo.'); return false; } }
  function updateCount() { var n = P[store.current] ? build.items.reduce(function (a, i) { return a + (i.qty || 1); }, 0) : 0; Array.prototype.forEach.call(document.querySelectorAll('[data-count]'), function (e) { e.textContent = n ? n : ''; }); }

  // ---------- parts helpers ----------
  function partById(p, id) { for (var i = 0; i < p.parts.length; i++) if (p.parts[i].id === id) return p.parts[i]; return null; }
  function isBest(part, o) { var b = part.best_offer; return !!(b && b.price != null && o.price === b.price && o.seller === b.seller && o.url === b.url); }
  // Price used for the build total: the best verified offer; else the lowest listed (flagged unverified).
  function listedPrice(part) {
    if (part.best_offer && part.best_offer.price != null) return { price: part.best_offer.price, seller: part.best_offer.seller, url: part.best_offer.url, verified: true, unit: unitOf(part, part.best_offer) };
    var priced = part.offers.filter(function (o) { return o.price != null; }).sort(function (a, b) { return a.price - b.price; });
    var v = priced.filter(function (o) { return o.status === 'verified'; });
    var o = v[0] || priced[0];
    return o ? { price: o.price, seller: o.seller, url: o.url, verified: o.status === 'verified', unit: o.price_unit } : null;
  }
  function unitOf(part, b) { for (var i = 0; i < part.offers.length; i++) { var o = part.offers[i]; if (o.seller === b.seller && o.url === b.url) return o.price_unit; } return null; }
  function inBuild(id, pid) { var b = pid ? buildFor(pid) : build; return b.items.some(function (i) { return i.id === id; }); }
  function addToBuild(pid, partId) {
    var p = P[pid], part = partById(p, partId); if (!part) return;
    if (store.current !== pid) useBuild(pid);
    if (inBuild(partId)) { build.items = build.items.filter(function (i) { return i.id !== partId; }); saveBuild(); updateCount(); toast('Removed from build'); return 'removed'; }
    var lp = listedPrice(part);
    build.items.push({ id: partId, platform: pid, name: part.name, brand: part.brand, pn: part.part_number, price: lp ? lp.price : null, seller: lp ? lp.seller : '', url: lp ? lp.url : '', verified: lp ? lp.verified : false, unit: lp ? lp.unit || '' : '', qty: 1, added: new Date().toISOString().slice(0, 10) });
    saveBuild(); updateCount(); toast('Added to build sheet'); return 'added';
  }
  function addBtn(pid, id, big) {
    var a = inBuild(id, pid);
    return '<button class="btn ' + (big ? '' : 'btn-sm ') + (a ? 'added' : 'btn-primary') + '" data-add="' + esc(id) + '" data-pid="' + esc(pid) + '">' + (a ? 'In build' : 'Add to build') + '</button>';
  }
  function fitRows(f) {
    var r = [];
    if (f.years) r.push(['Years', f.years]);
    if (f.models && f.models.length) r.push(['Models', f.models.join(', ')]);
    if (f.drive && f.drive.length) r.push(['Drive', f.drive.join(', ')]);
    if (f.cab) r.push(['Cab', f.cab]);
    if (f.bed) r.push(['Bed', f.bed]);
    if (f.engines) r.push(['Engine', f.engines.join(', ')]);
    if (f.position) r.push(['Position', f.position]);
    if (f.trans) r.push(['Trans', f.trans]);
    if (f.steering) r.push(['Steering', f.steering]);
    if (f.min_wheel) r.push(['Min wheel', f.min_wheel]);
    if (f.notes) r.push(['Notes', f.notes]);
    return r;
  }
  function fitLabel(f) {
    if (f.hunter_fit === true) return '<span class="fit-yes" title="' + esc(f.hunter_note || 'Listed as fitting the saved truck') + '">Fits my truck</span>';
    if (f.hunter_fit === false) return '<span class="fit-no">Not my cab/year</span>';
    if (typeof f.hunter_fit === 'string') return '<span class="fit-no" title="' + esc(f.hunter_fit) + '">' + esc(f.hunter_fit.length > 22 ? 'Check fit' : f.hunter_fit) + '</span>';
    return '';
  }
  function priceCell(part) {
    var lp = listedPrice(part);
    if (!lp) return '<span class="price na">No price</span>';
    return '<span class="price">' + money(lp.price) + '</span>' + (lp.unit && lp.unit !== 'listing' ? '<span class="price-u">each</span>' : '') + (lp.verified ? '' : '<span class="price-u c-warn">unverified</span>');
  }
  function partRow(pid, part, flag) {
    var f = part.fitment || {};
    var sub = '<span class="mono">' + esc(part.brand) + (part.part_number ? ' ' + esc(part.part_number) : '') + '</span>' + (fitBadge(pid, part) ? ' · ' + fitBadge(pid, part) : (fitLabel(f) ? ' · ' + fitLabel(f) : '')) + (flag ? ' · <span class="accent">' + esc(flag) + '</span>' : '') + (inBuild(part.id, pid) ? ' · <span class="accent">In build</span>' : '');
    return row('#/p/' + pid + '/parts/' + encodeURIComponent(part.id), esc(part.name), sub, priceCell(part), 'part-row');
  }
  function miniParts(pid, p, ids) {
    if (!ids || !ids.length) return '';
    return '<div class="rows">' + ids.map(function (id) { var part = partById(p, id); return part ? partRow(pid, part) : ''; }).join('') + '</div>';
  }

  // ---------- garage (home) ----------
  var ADVICE = {
    wheels: 'Start with bolt pattern, center bore and offset for your platform, then match tire size to your stance (stock, leveled, lifted or lowered). Forge platform pages list owner-reported combos with confidence labels.',
    suspension: 'Decide the stance first. Leveling and lifts change tire clearance and alignment; drops often need drop shocks, a C-notch past about 3 inches rear, and minimum wheel sizes.',
    engine: 'Popular swaps depend on the platform. Check the computer, wiring, fuel system and transmission limits before buying a donor engine, and budget for a tune.',
    exterior: 'Front-end swaps are rarely just a grille and bumper. Lights, hood, fenders and brackets usually come along.',
    maintenance: 'Look up the common problems list for your platform first. Many known failures have a cheap documented fix.',
    interior: 'Seat and dash swaps across years often need harness changes. Check connector differences before buying.'
  };
  function vehicleList(hrefFn) {
    var groups = {}, order = [];
    Object.keys(P).forEach(function (k) { var m = P[k].make; if (!groups[m]) { groups[m] = []; order.push(m); } groups[m].push(P[k]); });
    order.sort();
    return order.map(function (m) {
      return '<div class="grp"><div class="grp-h">' + esc(m) + '</div><div class="rows">' + groups[m].map(function (p) {
        return row(hrefFn(p.id), esc(p.name) + ' <span class="yrs">' + esc(p.years) + '</span>', esc(p.title), store.garage.indexOf(p.id) > -1 ? '<span class="dim small">In garage</span>' : '');
      }).join('') + '</div></div>';
    }).join('') + '<p class="small dim">Coming later: ' + esc(CATALOG.filter(function (c) { return !P[c.id]; }).map(function (c) { return c.title; }).join(', ')) + '.</p>';
  }
  // ---------- vehicle selector: Make > Year > Model > Cab > Drive > Engine ----------
  var SEL = (window.FORGE_SELECTOR || []).filter(function (r) { return P[r.pid]; });
  function uniq(a) { var o = []; a.forEach(function (x) { if (o.indexOf(x) < 0) o.push(x); }); return o; }
  function selEngines(r, year, cab) { return r.engines.filter(function (e) { return year >= e.years[0] && year <= e.years[1] && (!e.cabs || !cab || e.cabs.indexOf(cab) > -1); }); }
  // path: [make, year, model, cab, drive, engine]; '-' marks a skipped step.
  function selState(path) {
    var st = { make: path[0], year: path[1] ? +path[1] : null, model: path[2], cab: path[3], bed: path[4], drive: path[5], engine: path[6] };
    var rows = SEL, steps = [];
    function step(key, title, opts, fmt) { steps.push({ key: key, title: title, opts: opts, fmt: fmt }); }
    step('make', 'Make', uniq(SEL.map(function (r) { return r.make; })).sort());
    if (!st.make) return { st: st, steps: steps, at: 0 };
    rows = rows.filter(function (r) { return r.make === st.make; });
    var years = []; rows.forEach(function (r) { for (var y = r.years[0]; y <= r.years[1]; y++) if (years.indexOf(y) < 0) years.push(y); }); years.sort(function (a, b) { return b - a; });
    step('year', 'Year', years);
    if (!st.year) return { st: st, steps: steps, at: 1 };
    rows = rows.filter(function (r) { return st.year >= r.years[0] && st.year <= r.years[1]; });
    step('model', 'Model', uniq(rows.map(function (r) { return r.model; })));
    if (!st.model) return { st: st, steps: steps, at: 2 };
    var r = rows.filter(function (x) { return x.model === st.model; })[0];
    if (!r) return { st: st, steps: steps, at: 2 };
    var cabs = r.cabs || [];
    step('cab', 'Cab', cabs);
    if (cabs.length && (!st.cab || st.cab === '-')) return { st: st, steps: steps, at: 3, row: r };
    if (!cabs.length) st.cab = '';
    var beds = (r.beds && r.beds[st.cab]) || [];
    step('bed', 'Bed length', beds);
    if (beds.length > 1 && (!st.bed || st.bed === '-')) return { st: st, steps: steps, at: 4, row: r };
    st.bed = beds.length === 1 ? beds[0] : (beds.indexOf(st.bed) > -1 ? st.bed : '');
    var drives = r.drives || [];
    step('drive', 'Drive', drives);
    if (drives.length > 1 && (!st.drive || st.drive === '-')) return { st: st, steps: steps, at: 5, row: r };
    if (drives.length === 1) st.drive = drives[0]; else if (!drives.length) st.drive = '';
    var eng = selEngines(r, st.year, st.cab);
    step('engine', 'Engine', eng.map(function (e) { return e.label; }));
    if (eng.length > 1 && (!st.engine || st.engine === '-')) return { st: st, steps: steps, at: 6, row: r };
    var e = eng.length === 1 ? eng[0] : eng.filter(function (x) { return x.label === st.engine; })[0];
    st.engine = e ? e.label : ''; st.engineShort = e ? e.short : '';
    return { st: st, steps: steps, at: 7, row: r };
  }
  function selHref(path) { return '#/garage/add' + (path.length ? '/' + path.map(function (x) { return encodeURIComponent(x == null || x === '' ? '-' : x); }).join('/') : ''); }
  function renderPicker(path) {
    path = (path || []).filter(function (x) { return x !== ''; });
    var S = selState(path), st = S.st;
    var chosen = [st.make, st.year, st.model, st.cab, st.bed, st.drive, st.engine];
    var h = '<div class="wrap narrow"><header class="page-h"><h1>Choose your vehicle</h1><p class="lede">Pick make, year, model and engine. Only vehicles Forge has data for are listed.</p></header>';
    // breadcrumb of chosen steps (each links back to that step)
    var bc = []; for (var i = 0; i < Math.min(S.at, 7); i++) { var v = chosen[i]; if (v && v !== '-') bc.push('<a href="' + selHref(path.slice(0, i)) + '">' + esc(String(v)) + '</a>'); }
    h += '<nav class="crumb sel-crumb" aria-label="Your choices"><a href="#/garage/add">Start over</a>' + (bc.length ? ' › ' + bc.join(' › ') : '') + '</nav>';
    if (S.at < 7) {
      var s = S.steps[S.at];
      var pre = path.slice(0, S.at); while (pre.length < S.at) pre.push('-');
      h += '<h2 class="h2">' + esc(s.title) + '</h2><div class="rows sel-list' + (s.key === 'year' ? ' sel-years' : '') + '">' + s.opts.map(function (o) { return row(selHref(pre.concat([o])), esc(String(o)), ''); }).join('') + '</div>';
    } else {
      var r = S.row, p = P[r.pid];
      var v = { year: st.year, make: st.make, model: st.model, cab: st.cab || '', bed: st.bed || '', drive: st.drive || '', engine: st.engine || '', engineShort: st.engineShort || '' };
      state.pendingVeh = { pid: r.pid, v: v };
      h += '<div class="veh-current"><div class="eyebrow">Your vehicle</div><div class="veh-name">' + esc([v.year, v.make, v.model].join(' ')) + '</div><div class="muted">' + esc([v.cab, v.bed, v.drive, v.engine].filter(Boolean).join(' · ')) + '</div>';
      h += '<p class="small">Forge platform: <b>' + esc(p.name) + '</b> ' + esc(p.years) + ' · ' + esc(p.title) + '</p>';
      h += '<div class="btn-row"><button class="btn btn-primary" data-savesel="1">Save to My Garage</button><a class="btn" href="#/p/' + r.pid + '">Browse without saving</a></div></div>';
    }
    h += '<p class="small"><a href="#/browse">Browse all platforms</a></p>';
    app.innerHTML = h + '</div>';
  }
  function renderBrowse() {
    var h = '<div class="wrap narrow"><header class="page-h"><h1>All platforms</h1><p class="lede">Browsing does not save a vehicle. Use Save to My Garage on a platform, or <a href="#/garage/add">choose your vehicle</a>.</p></header>';
    h += vehicleList(function (id) { return '#/p/' + id; });
    app.innerHTML = h + '</div>';
  }

  // ---------- fitment check against the saved vehicle ----------
  var CABKEY = { regular: /regular|standard|\bstd\b|single|\breg\b/i, extended: /extended|\bext\b|extra|supercab|quad|access|double/i, crew: /crew/i };
  function cabKey(c) { c = (c || '').toLowerCase(); if (/supercrew|crew/.test(c)) return 'crew'; if (/regular/.test(c)) return 'regular'; if (/extended|supercab|quad/.test(c)) return 'extended'; return ''; }
  function yearRanges(t) {
    var out = [], m, re = /(\d{4}|\b\d{2})\s*[-–]\s*(\d{4}|\d{2})\b|\b(\d{4})\b/g;
    function y(x) { x = +x; return x < 100 ? (x > 50 ? 1900 + x : 2000 + x) : x; }
    while ((m = re.exec(t))) { if (m[1]) out.push([y(m[1]), y(m[2])]); else out.push([+m[3], +m[3]]); }
    if (/classic/i.test(t)) out.push([2007, 2007]);
    return out;
  }
  // Categories where drive, cab or bed usually change the part. Elsewhere a missing value is not a reason to check.
  var NEED = { drive: /suspension|steering|brake|drivetrain|axle|lift|exhaust|wheel|tire/i, cab: /suspension|exhaust|rust|bed|tonneau|liner|rocker|step/i, bed: /exhaust|bed|tonneau|liner/i };
  function catUses(p, cat, key) { return NEED[key].test(cat || '') && p.parts.some(function (x) { return x.category === cat && x.fitment && x.fitment[key]; }); }
  // returns { r: 'fits' | 'no' | 'check' | '', why: [] }
  function fitFor(pid, part) {
    var v = store.veh[pid]; if (!isSaved(pid) || !v || !v.year) return { r: '', why: [] };
    var p = P[pid], f = part.fitment || {}, no = [], chk = [];
    if (f.years) { var rg = yearRanges(String(f.years)); if (!rg.length) chk.push('years: ' + f.years); else if (!rg.some(function (a) { return v.year >= a[0] && v.year <= a[1]; })) no.push('years ' + f.years); }
    else chk.push('no year range listed');
    if (v.drive) {
      if (f.drive && f.drive.length) { if (f.drive.indexOf(v.drive) < 0) no.push('drive ' + f.drive.join('/')); }
      else if (catUses(p, part.category, 'drive') || /2WD|4WD|AWD|4x4|4x2/i.test(JSON.stringify(f) + (part.name || ''))) chk.push('drive not listed');
    }
    if (v.cab) {
      var k = cabKey(v.cab);
      if (f.cab) {
        var c = String(f.cab);
        if (/\ball\b/i.test(c)) { } else if (CABKEY[k] && CABKEY[k].test(c)) { } else if (Object.keys(CABKEY).some(function (o) { return CABKEY[o].test(c); })) no.push('cab: ' + c); else chk.push('cab: ' + c);
      } else if (catUses(p, part.category, 'cab')) chk.push('cab not listed');
    }
    if (v.bed) {
      var bt = [f.bed, f.cab].filter(Boolean).join(' '), mine = /long|8 ft/i.test(v.bed) ? 'long' : 'short';
      var sayS = /short|\bSB\b|6\.5|5\.8|5 ft 7|6 ft 4|78\.7|119|143\.5/i.test(bt), sayL = /long|\bLB\b|(?<![\d.])8 ?(ft|')|133|157\.5/i.test(bt);
      if (f.bed && /\ball\b/i.test(f.bed)) { } else if (sayS || sayL) { if ((mine === 'short' && !sayS) || (mine === 'long' && !sayL)) no.push('bed: ' + bt); }
      else if (catUses(p, part.category, 'bed')) chk.push('bed length not listed');
    }
    if (v.model && f.models && f.models.length) {
      var m = f.models.join(' '), hd = /HD|2500|3500/.test(v.model), mHd = /HD|2500|3500/.test(m), m15 = /1500/.test(m);
      if (hd && m15 && !mHd) no.push('1500 only'); if (!hd && /1500/.test(v.model) && mHd && !m15) no.push('HD only');
    }
    if (v.engineShort && f.engines && f.engines.length) {
      var num = (v.engineShort.match(/\d\.\d/) || [''])[0], es = f.engines.join(' ');
      if (num && es.indexOf(num) < 0) { if (f.engines.every(function (x) { return /^\s*\d\.\d/.test(x); })) no.push('engine ' + es); else chk.push('engine: ' + es); }
    }
    return { r: no.length ? 'no' : chk.length ? 'check' : 'fits', why: no.length ? no : chk };
  }
  function fitBadge(pid, part) {
    var x = fitFor(pid, part); if (!x.r) return '';
    var t = { fits: ['fit-yes', 'Fits'], no: ['fit-x', "Doesn't fit"], check: ['fit-check', 'Check fitment'] }[x.r];
    return '<span class="' + t[0] + '" title="' + esc(x.why.join('; ')) + '">' + t[1] + '</span>';
  }
  function renderGarage() {
    if (!store.garage.length) return renderPicker([]);
    var cur = isSaved(store.current) ? store.current : store.garage[0];
    var p = P[cur];
    var h = '<div class="wrap narrow"><header class="page-h"><h1>My garage</h1></header>';
    h += '<label class="search">' + SEARCH_ICON + '<input id="gq" type="search" placeholder="Search all platforms: part numbers, codes, sizes" value="' + esc(state.gq || '') + '" autocomplete="off" aria-label="Search all platforms"></label><div id="gres"></div>';
    h += '<div id="gbody">';
    h += '<div class="veh-current"><div class="eyebrow">Current vehicle</div><div class="veh-name">' + (vehLabel(cur) ? esc(vehLabel(cur)) : esc(p.name) + ' <span class="yrs">' + esc(p.years) + '</span>') + '</div><div class="muted">' + esc(vehDetail(cur) ? vehDetail(cur) + ' · ' + p.name : p.title) + '</div>' + (p.myVehicle ? '<div class="mine"><b>' + esc(p.myVehicle.label) + ':</b> ' + esc(p.myVehicle.text) + '</div>' : '') + '<a class="btn btn-primary" href="#/p/' + cur + '">Open ' + esc(p.name) + '</a></div>';
    h += sectionMenu(cur, p);
    var others = store.garage.filter(function (k) { return k !== cur; });
    h += '<h2 class="h2">Saved vehicles</h2><div class="rows">' + store.garage.map(function (k) {
      var n = buildFor(k).items.length;
      return '<div class="row row-split"><a class="row-main" href="#/pick/' + k + '"><span class="row-t">' + (vehLabel(k) ? esc(vehLabel(k)) : esc(P[k].name) + ' <span class="yrs">' + esc(P[k].years) + '</span>') + (k === cur ? ' <span class="accent small">Current</span>' : '') + '</span><span class="row-s">' + esc(vehLabel(k) ? P[k].name + (vehDetail(k) ? ' · ' + vehDetail(k) : '') : P[k].title) + (n ? ' · ' + n + ' parts in build' : '') + '</span></a><button class="link-btn" data-unpark="' + k + '">Remove</button></div>';
    }).join('') + '<a class="row row-add" href="#/garage/add"><span class="row-main"><span class="row-t">Add a vehicle</span></span>' + CHEV + '</a></div><p class="small"><a href="#/browse">Browse all platforms</a></p>';
    h += '<h2 class="h2">More</h2>';
    h += fold('Planning advice', '<label class="l" for="advMod">What are you planning?</label><select id="advMod"><option value="wheels">Wheels and tires</option><option value="suspension">Lift, level or lower</option><option value="engine">Engine swap or power</option><option value="exterior">Exterior and front-end swaps</option><option value="maintenance">Fix a known problem</option><option value="interior">Interior</option></select><p class="advice" id="advOut"></p>');
    h += fold('Where to buy', '<div class="rows">' + [['RockAuto', 'Huge catalog, low prices. Shipping is added per warehouse at checkout.', 'https://www.rockauto.com'], ['Summit Racing', 'Major performance retailer.', 'https://www.summitracing.com'], ['AmericanTrucks', 'Truck-focused; many listings ship free.', 'https://www.americantrucks.com'], ['eBay Motors', 'Used and rare parts. Compatibility tables can be wrong.', 'https://www.ebay.com/b/eBay-Motors/6000'], ['Amazon', 'Prefer "ships from and sold by Amazon" or the brand store.', 'https://www.amazon.com'], ['JEGS', 'Performance retailer, 60+ years in business.', 'https://www.jegs.com']].map(function (s) { return '<a class="row" href="' + s[2] + '" target="_blank" rel="noopener"><span class="row-main"><span class="row-t">' + s[0] + '</span><span class="row-s">' + s[1] + '</span></span></a>'; }).join('') + '</div>');
    h += fold('How Forge labels facts', '<p class="small">Every fact links to its source and carries a label: ' + badge('verified') + ', ' + badge('forum') + ', ' + badge('video') + ', ' + badge('unconfirmed') + ' or ' + badge('unknown') + '. Conflicting sources are marked <span class="flag-disputed">Disputed</span> and shown side by side.</p>');
    h += '</div></div>';
    app.innerHTML = h;
    var sel = document.getElementById('advMod'), out = document.getElementById('advOut');
    function adv() { out.textContent = ADVICE[sel.value]; }
    sel.addEventListener('change', adv); adv();
    var gq = document.getElementById('gq'), gres = document.getElementById('gres'), gbody = document.getElementById('gbody');
    function gdraw() { state.gq = gq.value; gres.innerHTML = renderGlobalSearch(gq.value); gbody.style.display = gq.value.trim() ? 'none' : ''; }
    gq.addEventListener('input', gdraw); if (gq.value) gdraw();
  }
  function renderGlobalSearch(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return '';
    var total = 0, h = '';
    Object.keys(P).forEach(function (pid) {
      var p = P[pid];
      var hits = searchIndex(pid, p).filter(function (it) { return terms.every(function (t) { return it.hay.indexOf(t) > -1; }); });
      if (!hits.length) return;
      total += hits.length;
      h += '<div class="ggroup"><div class="grp-h grp-split"><span>' + esc(p.name) + ' <span class="yrs">' + esc(p.years) + '</span></span><a href="#/p/' + pid + '/search" data-gq="' + esc(q) + '">All ' + hits.length + '</a></div><div class="rows">' +
        hits.slice(0, 3).map(function (it) { return hitRow(pid, it, terms); }).join('') + '</div></div>';
    });
    if (!total) return '<p class="empty">Nothing matched across platforms. Try a part number, a code like P0332, or a size like 285/55R20.</p>';
    return '<p class="small dim">' + total + ' results across platforms.</p>' + h;
  }
  function hitHref(pid, it) { return '#/p/' + pid + '/' + it.tab + (it.anchor ? '/' + encodeURIComponent(it.anchor) : ''); }
  function hitRow(pid, it, terms) {
    return '<a class="row hit" href="' + hitHref(pid, it) + '"><span class="row-main"><span class="eyebrow">' + esc(SNAME[it.tab]) + '</span><span class="row-t">' + hl(it.title, terms) + '</span><span class="row-s">' + hl(snippet(it.text, terms), terms) + '</span></span>' + CHEV + '</a>';
  }
  function photoBox() { return '<label class="photo" id="photoBox"><input type="file" accept="image/*" id="photoIn">' + (build.photo ? '<img src="' + build.photo + '" alt="Your vehicle">' : '<span>Add a photo of your vehicle<br><span class="small dim">JPG or PNG, stays on this device</span></span>') + '</label>' + (build.photo ? '<button class="link-btn" id="photoClear">Remove photo</button>' : ''); }
  function bindPhoto() {
    var inp = document.getElementById('photoIn'); if (!inp) return;
    inp.addEventListener('change', function () {
      var f = inp.files && inp.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        var img = new Image();
        img.onload = function () {
          var max = 1000, s = Math.min(1, max / Math.max(img.width, img.height));
          var c = document.createElement('canvas'); c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          build.photo = c.toDataURL('image/jpeg', 0.82);
          if (!saveBuild()) build.photo = '';
          route();
        };
        img.onerror = function () { toast('Could not read that image'); };
        img.src = r.result;
      };
      r.readAsDataURL(f);
    });
    var clr = document.getElementById('photoClear');
    if (clr) clr.addEventListener('click', function (e) { e.preventDefault(); build.photo = ''; saveBuild(); route(); });
  }

  // ---------- platform screens ----------
  function counts(p) {
    var cats = p.partCategories.filter(function (c) { return p.parts.some(function (x) { return x.category === c; }); });
    var diy = p.guides.filter(function (g) { return g.type === 'diy'; }).length;
    var bp = '';
    (p.wheels.specs.rows || []).forEach(function (r) { if (!bp && /bolt/i.test(r[0])) bp = r[1]; });
    return {
      parts: p.parts.length + ' parts in ' + cats.length + ' categories',
      problems: p.problems.length + ' known problems, search by symptom',
      guides: diy + ' DIY, ' + (p.guides.length - diy) + ' swaps, with torque specs',
      wheels: (bp ? 'Bolt pattern ' + bp + ' · ' : '') + p.wheels.stances.length + ' stances',
      overview: 'Engines, axles, year changes' + (p.conflicts.length ? ', ' + p.conflicts.length + ' corrections' : ''),
      tips: p.tips.length + ' tips' + ((p.videos || []).length ? ', ' + p.videos.length + ' videos' : '')
    };
  }
  function tipsName(p) { return p.tipsTitle || SNAME.tips; }
  function sectionMenu(pid, p) {
    var c = counts(p);
    return '<div class="rows menu">' + SECTIONS.map(function (s) { return row('#/p/' + pid + '/' + s[0], s[0] === 'tips' ? esc(tipsName(p)) : s[1], esc(c[s[0]])); }).join('') + '</div>';
  }
  function safetyBlock(p, home) {
    var a = p.safetyAlerts || [];
    if (!a.length) return '';
    var items = a.map(function (x) { return '<details><summary><span><b>Safety</b> ' + esc(x.title) + '</span>' + CHEV + '</summary><div class="safety-b">' + esc(x.text) + ' ' + badges(x) + srcs(x.src) + '</div></details>'; }).join('');
    if (home || a.length === 1) return '<div class="safety" role="alert">' + items + '</div>';
    return '<div class="safety" role="alert"><details class="safety-all"><summary><span><b>Safety</b> ' + a.length + ' notices for the ' + esc(p.name) + ': ' + esc(a.map(function (x) { return x.title.split(/[:(]/)[0].trim(); }).join('; ')) + '</span>' + CHEV + '</summary><div class="safety-list">' + items + '</div></details></div>';
  }
  function platformHome(pid, p) {
    var b = buildFor(pid), tot = 0; b.items.forEach(function (i) { if (i.price != null) tot += i.price * (i.qty || 1); });
    var h = '<header class="page-h"><div class="eyebrow">' + esc(p.make) + ' · ' + esc(p.years) + '</div><h1>' + esc(p.name) + '</h1><p class="sub">' + esc(p.title) + '</p><p class="lede">' + esc(p.tagline) + '</p>' + (p.myVehicle ? '<div class="mine"><b>' + esc(p.myVehicle.label) + ':</b> ' + esc(p.myVehicle.text) + '</div>' : '') + '</header>';
    h += isSaved(pid) ? '<p class="small saved-note">In My Garage' + (vehLabel(pid) ? ': ' + esc(vehLabel(pid)) : '') + ' · <a href="#/garage/add">Change vehicle</a></p>' : '<div class="btn-row save-row"><button class="btn btn-primary" data-save="' + esc(pid) + '">Save to My Garage</button><a class="btn" href="#/garage/add">Pick year, model and engine</a></div>';
    h += safetyBlock(p, true);
    h += '<label class="search">' + SEARCH_ICON + '<input id="q" type="search" placeholder="Search ' + esc(p.name) + ': parts, codes, sizes, torque" value="' + esc(state.q) + '" autocomplete="off" aria-label="Search this platform"></label>';
    h += '<div id="pres"></div><div id="pmenu">' + sectionMenu(pid, p);
    h += '<div class="rows menu" style="margin-top:12px">' + row('#/build', 'Build sheet', b.items.length ? b.items.length + ' parts · ' + money(tot) + ' listed' : 'No parts yet') + '</div>';
    h += '<p class="small dim meta-line">Data compiled ' + esc(p.compiled) + '. Prices checked ' + esc(p.pricesChecked) + '.</p></div>';
    return h;
  }
  function factList(items) {
    return '<dl class="facts">' + items.map(function (f) { return '<dt>' + esc(f.label) + '</dt><dd>' + esc(f.text) + ' ' + badges(f) + srcs(f.src) + '</dd>'; }).join('') + '</dl>';
  }
  function secHead(pid, p, title, extra) {
    return crumb(pid, p, [[title]]) + '<header class="page-h sm"><h1>' + esc(title) + '</h1>' + (extra || '') + '</header>' + safetyBlock(p, false);
  }
  function tabOverview(pid, p) {
    var o = p.overview, h = secHead(pid, p, SNAME.overview);
    h += '<h2 class="h2">Models and years</h2>' + factList(o.facts);
    if (p.conflicts.length) h += fold('Read first: corrections and conflicts', p.conflicts.map(function (c) { return '<div class="item"><div class="item-t">' + esc(c.topic) + ' ' + badges(c) + '</div><div>' + esc(c.text) + '</div>' + srcs(c.src) + '</div>'; }).join(''), false, p.conflicts.length + '');
    h += fold('Year-by-year changes', '<ul class="tl">' + o.yearChanges.map(function (y) { return '<li><span class="yr">' + esc(y.year) + '</span><span>' + esc(y.text) + ' ' + badges(y) + srcs(y.src) + '</span></li>'; }).join('') + '</ul>', false, o.yearChanges.length + '');
    h += fold('Engines (factory ratings)', table(o.engines));
    h += fold('Transmissions', factList(o.transmissions));
    h += fold('Factory axles', table(o.axles) + factList(o.axleNotes));
    (o.extraTables || []).forEach(function (t) { h += fold(t.title, table(t.table)); });
    if (o.mpg) h += fold('Real-world MPG (owners)', table(o.mpg));
    if (p.unknowns) h += fold('Still unknown', '<ul class="plain">' + p.unknowns.map(function (u) { return '<li>' + esc(u) + '</li>'; }).join('') + '</ul>', false, p.unknowns.length + '');
    return h;
  }
  function tabWheels(pid, p) {
    var w = p.wheels, h = secHead(pid, p, SNAME.wheels);
    h += '<h2 class="h2">Base specs</h2>' + table(w.specs);
    h += '<h2 class="h2">Stock sizes</h2>' + table(w.stock);
    var st = w.stances; var cur = state.stance && st.some(function (s) { return s.id === state.stance; }) ? state.stance : st[0].id;
    h += '<h2 class="h2">Fitment by stance</h2><div class="seg" role="tablist">' + st.map(function (s) { return '<button role="tab" data-stance="' + s.id + '" class="' + (s.id === cur ? 'on' : '') + '">' + esc(s.title) + '</button>'; }).join('') + '</div>';
    st.forEach(function (s) {
      h += '<div class="stance' + (s.id === cur ? '' : ' hide') + '" data-stance-panel="' + s.id + '"><p class="stance-sub"><b>' + esc(s.title) + '</b> · ' + esc(s.subtitle) + ' ' + badges(s) + '</p>' + (s.note ? '<p class="small muted">' + esc(s.note) + '</p>' : '') + srcs(s.src) + srcs(s.noteSrc);
      if (s.rows.length) {
        var low = s.rows[0].drop !== undefined;
        h += '<div class="tbl-wrap stack"><table><thead><tr>' + (low ? '<th>' + esc(s.colDrop || 'Drop') + '</th><th>' + esc(s.colVehicle || 'Truck') + '</th>' : '') + '<th>Wheel</th><th>Tire</th><th>Result</th><th>Confidence</th></tr></thead><tbody>';
        s.rows.forEach(function (r) {
          var sl = r.src || s.src || [];
          h += '<tr' + (r.disputed ? ' class="disputed"' : '') + '>' + (low ? '<td class="num" data-l="' + esc(s.colDrop || 'Drop') + '">' + esc(r.drop) + '</td><td data-l="' + esc(s.colVehicle || 'Truck') + '">' + esc(r.truck || '') + '</td>' : '') + '<td class="num" data-l="Wheel">' + esc(r.wheel) + '</td><td class="num" data-l="Tire">' + esc(r.tire) + '</td><td data-l="Result"><span>' + esc(r.fit) + (sl.length ? ' <a class="small" href="' + esc(sl[0].url) + '" target="_blank" rel="noopener">source</a>' : '') + '</span></td><td data-l="Label">' + badges(r) + '</td></tr>';
        });
        h += '</tbody></table></div>';
      }
      h += '</div>';
    });
    var feat = (p.featuredParts || []).filter(function (f) { return f.tab === 'wheels'; });
    feat.forEach(function (f) { var fp = partById(p, f.id); if (fp) h += '<h2 class="h2">' + esc(f.heading || 'Featured') + '</h2><div class="rows">' + partRow(pid, fp, f.label) + '</div>'; });
    if (w.extraFacts && w.extraFacts.items && w.extraFacts.items.length) h += fold(w.extraFacts.title, factList(w.extraFacts.items));
    h += fold('TPMS', factList(w.tpms));
    return h;
  }
  function partCats(p) { return p.partCategories.filter(function (c) { return p.parts.some(function (x) { return x.category === c; }); }); }
  function sortParts(list) {
    var pr = function (x) { var l = listedPrice(x); return l ? l.price : null; };
    return list.slice().sort(function (a, b) {
      if (state.sort === 'name') return a.name.localeCompare(b.name);
      var A = pr(a), B = pr(b);
      if (A == null || B == null) return (A == null) - (B == null);
      return state.sort === 'price-desc' ? B - A : A - B;
    });
  }
  function hasMine(p) { return !!(p.myVehicle && p.parts.some(function (x) { return x.fitment && x.fitment.hunter_fit === true; })); }
  function tabParts(pid, p, focus) {
    if (focus && partById(p, focus)) return partDetail(pid, p, partById(p, focus));
    var cats = partCats(p);
    var ci = focus && /^cat-\d+$/.test(focus) ? +focus.slice(4) : (focus === 'all' ? -1 : null);
    if (ci === null) {
      var h = secHead(pid, p, 'Parts', '<p class="lede">' + p.parts.length + ' parts with checked prices. Prices checked ' + esc(p.pricesChecked) + '.</p>');
      var feat = (p.featuredParts || []).filter(function (f) { return f.tab !== 'wheels' && partById(p, f.id); });
      if (feat.length) h += '<h2 class="h2">Featured</h2><div class="rows">' + feat.map(function (f) { return partRow(pid, partById(p, f.id), f.label); }).join('') + '</div>';
      h += '<h2 class="h2">Categories</h2><div class="rows">' + cats.map(function (c, i) {
        var items = p.parts.filter(function (x) { return x.category === c; });
        var lows = items.map(function (x) { var l = listedPrice(x); return l ? l.price : null; }).filter(function (v) { return v != null; });
        return row('#/p/' + pid + '/parts/cat-' + i, esc(c), items.length + ' part' + (items.length > 1 ? 's' : ''), lows.length ? '<span class="dim small">from</span> <span class="price">' + money(Math.min.apply(null, lows)) + '</span>' : '');
      }).join('') + row('#/p/' + pid + '/parts/all', 'All parts', p.parts.length + ' parts') + '</div>';
      if (p.sellers && p.sellers.length) h += fold('Seller notes', p.sellers.map(function (s) { return '<div class="item"><div class="item-t">' + esc(s.name) + '</div><div class="small">' + esc(s.notes) + '</div><div class="small dim">Returns: ' + esc(s.returns) + ' · Affiliate: ' + esc(s.affiliate) + '</div></div>'; }).join(''));
      return h;
    }
    var title = ci === -1 ? 'All parts' : cats[ci];
    var useSel = !!vehLabel(pid);
    var items = p.parts.filter(function (x) { return (ci === -1 || x.category === title) && (!state.mineOnly || (useSel ? fitFor(pid, x).r !== 'no' : (x.fitment && x.fitment.hunter_fit === true))); });
    var fc = { fits: 0, check: 0, no: 0 }; if (useSel) p.parts.forEach(function (x) { if (ci === -1 || x.category === title) fc[fitFor(pid, x).r]++; });
    var h2 = crumb(pid, p, [['Parts', '#/p/' + pid + '/parts'], [title]]) + '<header class="page-h sm"><h1>' + esc(title) + '</h1></header>' + safetyBlock(p, false);
    h2 += '<div class="toolbar"><label class="sel"><span>Sort</span><select id="sortSel"><option value="price-asc"' + (state.sort === 'price-asc' ? ' selected' : '') + '>Price: low to high</option><option value="price-desc"' + (state.sort === 'price-desc' ? ' selected' : '') + '>Price: high to low</option><option value="name"' + (state.sort === 'name' ? ' selected' : '') + '>Name</option></select></label>' + (useSel || hasMine(p) ? '<button class="chip' + (state.mineOnly ? ' on' : '') + '" data-mine="1" aria-pressed="' + state.mineOnly + '">Fits my vehicle</button>' : '') + '<span class="dim small count">' + items.length + ' shown</span></div>';
    if (useSel) h2 += '<p class="small fit-sum">For your ' + esc(vehLabel(pid)) + ': <span class="fit-yes">' + fc.fits + ' fit</span> · <span class="fit-check">' + fc.check + ' check fitment</span> · <span class="fit-x">' + fc.no + " don't fit</span>" + (state.mineOnly ? ' (hidden)' : '') + '</p>';
    if (ci === -1 && state.sort === 'name') h2 += '<div class="rows">' + sortParts(items).map(function (x) { return partRow(pid, x); }).join('') + '</div>';
    else if (ci === -1) cats.forEach(function (c) { var it = items.filter(function (x) { return x.category === c; }); if (it.length) h2 += '<div class="grp-h">' + esc(c) + '</div><div class="rows">' + sortParts(it).map(function (x) { return partRow(pid, x); }).join('') + '</div>'; });
    else h2 += items.length ? '<div class="rows">' + sortParts(items).map(function (x) { return partRow(pid, x); }).join('') + '</div>' : '<p class="empty">No parts match. Turn off the filter to see all.</p>';
    h2 += '<p class="small dim">Price shown is the lowest verified listed price on ' + esc(p.pricesChecked) + '. Shipping excluded unless the seller says free.</p>';
    return h2;
  }
  function partDetail(pid, p, part) {
    var ci = partCats(p).indexOf(part.category);
    var lp = listedPrice(part), f = part.fitment || {};
    var used = p.problems.filter(function (x) { return (x.parts || []).indexOf(part.id) > -1; }).map(function (x) { return ['problems', x.id, x.title]; })
      .concat(p.guides.filter(function (g) { return (g.parts || []).indexOf(part.id) > -1; }).map(function (g) { return ['guides', g.id, g.title]; }));
    var feat = (p.featuredParts || []).filter(function (x) { return x.id === part.id; })[0];
    var h = crumb(pid, p, [['Parts', '#/p/' + pid + '/parts'], [part.category, '#/p/' + pid + '/parts/cat-' + ci]]);
    h += '<article class="detail" id="part-' + esc(part.id) + '"><div class="eyebrow mono">' + esc(part.brand) + (part.part_number ? ' · ' + esc(part.part_number) : '') + '</div><h1 class="d-title">' + esc(part.name) + '</h1>' + (feat ? '<p class="accent small">' + esc(feat.label) + '</p>' : '');
    h += '<div class="buybar"><div><div class="price-big">' + (lp ? money(lp.price) : 'n/a') + (lp && lp.unit && lp.unit !== 'listing' ? ' <small>per ' + esc(lp.unit) + '</small>' : '') + '</div><div class="small dim">' + (lp ? (lp.verified ? 'Best verified price' : 'Unverified price') + ' at ' + esc(lp.seller) : 'No verified price') + '</div></div>' + addBtn(pid, part.id, true) + '</div>';
    h += safetyBlock(p, false);
    h += '<h2 class="h2">Where to buy</h2><div class="offers">' + part.offers.slice().sort(function (a, b) { return (a.price == null) - (b.price == null) || a.price - b.price; }).map(function (o) {
      var best = isBest(part, o);
      return '<div class="offer' + (best ? ' best' : '') + '"><div class="offer-top"><a href="' + esc(o.url) + '" target="_blank" rel="noopener">' + esc(o.seller) + '</a><span class="price">' + (o.price != null ? money(o.price) : 'n/a') + '</span></div><div class="small dim">' + (best ? '<span class="accent">Best price</span> · ' : '') + '<span class="' + (o.status === 'verified' ? 'c-ok' : 'c-warn') + '">' + (o.status === 'verified' ? 'Verified' : 'Unverified') + '</span> · checked ' + esc(o.checked) + (o.price_unit && o.price_unit !== 'listing' ? ' · per ' + esc(o.price_unit) : '') + (o.shipping_note ? ' · ship: ' + esc(o.shipping_note) : '') + (o.source_note ? ' · ' + esc(o.source_note) : '') + '</div></div>';
    }).join('') + '</div>';
    var fr = fitRows(f);
    var fx = fitFor(pid, part);
    if (fx.r) h += '<h2 class="h2">Your vehicle</h2><p>' + fitBadge(pid, part) + ' <span class="small muted">' + esc(vehLabel(pid)) + (fx.why.length ? ' · ' + esc(fx.why.join('; ')) : ' · year, drive, cab and engine match the listing') + '</span></p>' + (fx.r === 'check' ? '<p class="small dim">The listing does not say enough to confirm. Check with the seller before buying.</p>' : '');
    h += '<h2 class="h2">Fitment</h2>' + (fitLabel(f) ? '<p>' + fitLabel(f) + (f.hunter_note ? ' <span class="small muted">' + esc(f.hunter_note) + '</span>' : '') + '</p>' : '') + (fr.length ? '<dl class="facts">' + fr.map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('') + '</dl>' : '<p class="small dim">No fitment details listed. Check with the seller.</p>') + (f.fit_src ? '<p class="small dim">' + f.fit_src.map(function (x) { return esc(x.fields.join(', ')) + ' from <a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.label) + '</a>'; }).join('; ') + '</p>' : '');
    if (part.notes) h += '<h2 class="h2">Notes</h2><p>' + esc(part.notes) + '</p>';
    h += tipBlock('Owner tips', part.tips);
    if (used.length) h += '<h2 class="h2">Used in</h2><div class="rows">' + used.map(function (u) { return row('#/p/' + pid + '/' + u[0] + '/' + encodeURIComponent(u[1]), esc(u[2]), u[0] === 'problems' ? 'Problem' : 'Guide'); }).join('') + '</div>';
    h += '<p class="small dim">' + esc(part.category) + ' · ' + (part.source === 'master-guide' ? 'From master guide' : 'From deals check') + '</p></article>';
    return h;
  }
  function tabProblems(pid, p, focus) {
    var x = focus && p.problems.filter(function (y) { return y.id === focus; })[0];
    if (x) {
      var h = crumb(pid, p, [['Problems', '#/p/' + pid + '/problems']]) + '<article class="detail" id="prob-' + esc(x.id) + '"><h1 class="d-title">' + esc(x.title) + '</h1><p>' + badges(x) + (x.years ? ' <span class="small dim">' + esc(x.years) + '</span>' : '') + '</p>' + safetyBlock(p, false);
      h += '<dl class="kv"><dt>Symptom</dt><dd>' + esc(x.symptoms) + '</dd>' + (x.cause ? '<dt>Cause</dt><dd>' + esc(x.cause) + '</dd>' : '') + '<dt>Fix</dt><dd>' + esc(x.fix) + '</dd></dl>';
      if (x.confNote) h += '<p class="small dim">' + esc(x.confNote) + '</p>';
      if (x.guide) { var g = p.guides.filter(function (y) { return y.id === x.guide; })[0]; h += '<div class="rows">' + row('#/p/' + pid + '/guides/' + encodeURIComponent(x.guide), 'Step-by-step guide', g ? esc(g.title) : '') + '</div>'; }
      h += tipBlock('Owner tips', x.tips);
      if (x.parts && x.parts.length) h += '<h2 class="h2">Parts for this fix</h2>' + miniParts(pid, p, x.parts);
      h += '<h2 class="h2">Sources</h2>' + srcs(x.src);
      return h + '</article>';
    }
    var h2 = secHead(pid, p, SNAME.problems);
    h2 += '<label class="search">' + SEARCH_ICON + '<input id="pq" type="search" placeholder="Describe the symptom: misfire, clunk, leak, code" value="' + esc(state.pq) + '" autocomplete="off" aria-label="Search problems by symptom"></label><div id="plist"></div>';
    return h2;
  }
  function problemRows(pid, p) {
    var terms = state.pq.toLowerCase().split(/\s+/).filter(Boolean);
    var list = p.problems.filter(function (x) { var hay = (x.title + ' ' + x.symptoms + ' ' + (x.cause || '') + ' ' + (x.years || '')).toLowerCase(); return terms.every(function (t) { return hay.indexOf(t) > -1; }); });
    if (!list.length) return '<p class="empty">No problem matches that. Try fewer words, or search the whole platform from its home screen.</p>';
    return '<p class="small dim">' + list.length + ' of ' + p.problems.length + '</p><div class="rows">' + list.map(function (x) {
      return row('#/p/' + pid + '/problems/' + encodeURIComponent(x.id), hl(x.title, terms), '<span class="clamp">' + hl(x.symptoms, terms) + '</span>' + (x.years ? '<span class="dim"> · ' + esc(x.years) + '</span>' : '') + (x.disputed ? ' <span class="flag-disputed">Disputed</span>' : ''), '');
    }).join('') + '</div>';
  }
  function tabGuides(pid, p, focus) {
    var g = focus && p.guides.filter(function (y) { return y.id === focus; })[0];
    if (g) {
      var h = crumb(pid, p, [['Guides', '#/p/' + pid + '/guides']]) + '<article class="detail" id="guide-' + esc(g.id) + '"><div class="eyebrow">' + (g.type === 'swap' ? 'Swap guide' : 'DIY guide') + '</div><h1 class="d-title">' + esc(g.title) + '</h1>' + (g.summary ? '<p class="lede">' + esc(g.summary) + '</p>' : '') + '<p>' + badges(g) + '</p>' + safetyBlock(p, false);
      if (g.steps.length) h += '<h2 class="h2">Steps</h2><ol class="steps">' + g.steps.map(function (s) { return '<li><span>' + esc(s.text) + ((s.conf && s.conf !== g.conf) || s.disputed ? ' ' + badges({ conf: s.conf && s.conf !== g.conf ? s.conf : null, disputed: s.disputed }) : '') + '</span></li>'; }).join('') + '</ol>';
      if (g.torque) h += '<h2 class="h2">Torque specs</h2>' + table(g.torque, { numCol: 1 });
      h += tipBlock('Owner tips', g.tips);
      if (g.parts && g.parts.length) h += '<h2 class="h2">Parts for this job</h2>' + miniParts(pid, p, g.parts);
      h += '<h2 class="h2">Sources</h2>' + srcs(g.src);
      return h + '</article>';
    }
    var h2 = secHead(pid, p, SNAME.guides);
    [['diy', 'DIY'], ['swap', 'Swaps']].forEach(function (t) {
      var list = p.guides.filter(function (y) { return y.type === t[0]; });
      if (!list.length) return;
      h2 += '<h2 class="h2">' + t[1] + '</h2><div class="rows">' + list.map(function (y) {
        var meta = [y.steps.length ? y.steps.length + ' steps' : '', y.torque ? 'torque table' : '', y.parts && y.parts.length ? y.parts.length + ' parts' : ''].filter(Boolean).join(' · ');
        return row('#/p/' + pid + '/guides/' + encodeURIComponent(y.id), esc(y.title), (meta ? esc(meta) : '') + (y.disputed ? ' <span class="flag-disputed">Disputed</span>' : ''), '');
      }).join('') + '</div>';
    });
    return h2;
  }
  function tabTips(pid, p) {
    var h = secHead(pid, p, tipsName(p));
    if (p.tipsTitle) h += '<p class="small muted">General maintenance and longevity. Tips about a specific part are on that part\'s page.</p>';
    h += tipList(p.tips);
    if (p.dyno) h += fold('Owner dyno results', table(p.dyno));
    if (p.videos) h += fold('Videos', '<p class="small muted">Title, channel and date confirmed. Videos were not watched, so only the description is used.</p><div class="rows">' + p.videos.map(function (v) { return '<a class="row" href="' + esc(v.url) + '" target="_blank" rel="noopener"><span class="row-main"><span class="row-t">' + esc(v.title) + '</span><span class="row-s">' + esc(v.channel) + (v.date ? ' · ' + esc(v.date) : '') + '</span><span class="row-s">' + esc(v.note) + '</span><span>' + badge('video') + '</span></span></a>'; }).join('') + '</div>', false, p.videos.length + '');
    return h;
  }

  // ---------- search ----------
  function searchIndex(pid, p) {
    if (p._idx) return p._idx;
    var I = [], o = p.overview;
    function add(tab, anchor, title, text, conf) { I.push({ tab: tab, anchor: anchor || '', title: title, text: text, conf: conf, hay: (title + ' ' + text).toLowerCase() }); }
    p.conflicts.forEach(function (c) { add('overview', '', 'Conflict: ' + c.topic, c.text, c); });
    o.facts.concat(o.transmissions, o.axleNotes).forEach(function (f) { add('overview', '', f.label, f.text, f); });
    o.yearChanges.forEach(function (y) { add('overview', '', 'Year ' + y.year, y.text, y); });
    o.engines.rows.forEach(function (r) { add('overview', '', r[0], r.slice(1).join(' · '), o.engines); });
    o.axles.rows.forEach(function (r) { add('overview', '', r[0], r.slice(1).join(' · '), o.axles); });
    p.wheels.specs.rows.concat(p.wheels.stock.rows).forEach(function (r) { add('wheels', '', r[0], r.slice(1).join(' · '), p.wheels.specs); });
    p.wheels.stances.forEach(function (s) { s.rows.forEach(function (r) { add('wheels', s.id, s.title + ': ' + r.wheel + ' with ' + r.tire, (r.drop ? r.drop + ' ' + (r.truck || '') + ' · ' : '') + r.fit, r); }); });
    ((p.wheels.extraFacts || {}).items || []).forEach(function (f) { add('wheels', '', p.wheels.extraFacts.title + ': ' + f.label, f.text, f); });
    p.wheels.tpms.forEach(function (f) { add('wheels', '', 'TPMS: ' + f.label, f.text, f); });
    p.parts.forEach(function (x) { var lp = listedPrice(x); add('parts', x.id, x.brand + ' ' + (x.part_number || '') + ' · ' + x.name, x.category + ' · ' + (lp ? money(lp.price) + ' at ' + lp.seller : 'no verified price') + ' · ' + JSON.stringify(x.fitment || {}, function (k, v) { return k === 'fit_src' ? undefined : v; }).replace(/[{}"\[\]]/g, ' ') + ' ' + (x.notes || '') + ' ' + (x.tips || []).map(function (t) { return t.text; }).join(' '), null); });
    p.problems.forEach(function (x) { add('problems', x.id, x.title, x.symptoms + ' · ' + x.cause + ' · ' + x.fix + ' ' + (x.tips || []).map(function (t) { return t.text; }).join(' '), x); });
    p.guides.forEach(function (g) { add('guides', g.id, (g.type === 'swap' ? 'Swap: ' : 'DIY: ') + g.title, g.summary + ' ' + g.steps.map(function (s) { return s.text; }).join(' ') + ' ' + (g.torque ? g.torque.rows.map(function (r) { return r.join(' '); }).join(' ') : ''), g); });
    p.tips.forEach(function (t) { add('tips', '', 'Tip', t.text, { conf: t.confidence || t.conf }); });
    (p.videos || []).forEach(function (v) { add('tips', '', 'Video: ' + v.title, v.channel + ' · ' + v.note, { conf: 'video' }); });
    p._idx = I; return I;
  }
  function hl(text, terms) {
    var s = esc(text);
    terms.forEach(function (t) { if (t.length < 2) return; var re = new RegExp('(' + esc(t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'); s = s.replace(re, '<mark>$1</mark>'); });
    return s;
  }
  function snippet(text, terms) {
    var lo = text.toLowerCase(), i = -1;
    for (var k = 0; k < terms.length && i < 0; k++) i = lo.indexOf(terms[k]);
    if (text.length <= 160 || i < 0) return text.length > 160 ? text.slice(0, 160) + '…' : text;
    var st = Math.max(0, i - 60); return (st ? '…' : '') + text.slice(st, st + 160) + '…';
  }
  function renderSearch(pid, p) {
    var terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    var hits = searchIndex(pid, p).filter(function (it) { return terms.every(function (t) { return it.hay.indexOf(t) > -1; }); });
    var h = '<p class="small dim">' + hits.length + ' results in ' + esc(p.name) + '</p>';
    if (!hits.length) return h + '<p class="empty">Nothing matched. Try a part number, a code like P0332, a size like 285/55R20, or a word like "knock".</p>';
    var by = {}; hits.forEach(function (it) { (by[it.tab] = by[it.tab] || []).push(it); });
    SECTIONS.forEach(function (s) { if (by[s[0]]) h += '<div class="grp-h">' + (s[0] === 'tips' ? esc(tipsName(p)) : s[1]) + ' · ' + by[s[0]].length + '</div><div class="rows">' + by[s[0]].slice(0, 30).map(function (it) { return hitRow(pid, it, terms); }).join('') + '</div>'; });
    return h;
  }

  // ---------- platform shell ----------
  function renderPlatform(pid, tab, focus) {
    var p = P[pid];
    if (!p) { app.innerHTML = '<div class="wrap narrow"><header class="page-h"><h1>Not available yet</h1><p class="lede">This platform has no data file loaded yet.</p><p><a class="btn" href="#/">Back to garage</a></p></header></div>'; return; }
    if (tab === 'search') { state.q = state.q || ''; tab = ''; }
    var fn = { overview: tabOverview, wheels: tabWheels, parts: tabParts, problems: tabProblems, guides: tabGuides, tips: tabTips }[tab];
    app.innerHTML = '<div class="wrap narrow" id="pbody">' + (fn ? fn(pid, p, focus) : platformHome(pid, p)) + '</div>';
    if (!fn) {
      var q = document.getElementById('q'), pres = document.getElementById('pres'), menu = document.getElementById('pmenu');
      var draw = function () { state.q = q.value; var on = !!q.value.trim(); pres.innerHTML = on ? renderSearch(pid, p) : ''; menu.style.display = on ? 'none' : ''; };
      q.addEventListener('input', draw); if (state.q) draw();
    }
    if (tab === 'problems' && !focus) {
      var pq = document.getElementById('pq'), pl = document.getElementById('plist');
      var pd = function () { state.pq = pq.value; pl.innerHTML = problemRows(pid, p); };
      pq.addEventListener('input', pd); pd();
    }
    var ss = document.getElementById('sortSel'); if (ss) ss.addEventListener('change', function () { state.sort = ss.value; rerender(); });
    if (tab === 'wheels' && focus) setStance(focus);
  }
  function setStance(id) {
    state.stance = id;
    Array.prototype.forEach.call(document.querySelectorAll('[data-stance]'), function (b) { b.classList.toggle('on', b.getAttribute('data-stance') === id); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-stance-panel]'), function (d) { d.classList.toggle('hide', d.getAttribute('data-stance-panel') !== id); });
  }

  // ---------- build sheet ----------
  function renderBuild() {
    var ids = Object.keys(P);
    if (!P[store.current]) { app.innerHTML = '<div class="wrap narrow"><header class="page-h"><h1>Build sheet</h1><p class="lede">Choose a vehicle first. Each vehicle keeps its own build.</p></header><a class="btn btn-primary" href="#/garage/add">Choose your vehicle</a></div>'; return; }
    var p = P[store.current];
    var total = 0, unverified = 0, unpriced = 0;
    build.items.forEach(function (i) { if (i.price == null) unpriced++; else { total += i.price * (i.qty || 1); if (!i.verified) unverified++; } });
    var h = '<div class="wrap narrow"><header class="page-h"><div class="eyebrow">Build sheet</div><h1>My ' + esc(p.name) + ' build</h1></header>';
    h += '<label class="sel block"><span>Vehicle</span><select id="bPlat">' + ids.map(function (k) { return '<option value="' + esc(k) + '"' + (k === store.current ? ' selected' : '') + '>' + esc(P[k].name + ' · ' + P[k].years + ' (' + buildFor(k).items.length + ' parts)') + '</option>'; }).join('') + '</select></label>';
    h += '<div class="total"><span>Total listed</span><span class="amt">' + money(total) + '</span></div>';
    h += '<div class="small dim">' + build.items.length + ' parts' + (unverified ? ' · ' + unverified + ' with unverified prices' : '') + (unpriced ? ' · ' + unpriced + ' without a price' : '') + ' · shipping and tax not included</div>';
    if (!build.items.length) h += '<p class="empty">No parts yet. Open <a href="#/p/' + esc(store.current) + '/parts">' + esc(p.name) + ' parts</a> and tap Add to build.</p>';
    h += '<div class="rows lines">';
    build.items.forEach(function (i, n) {
      h += '<div class="line-item"><div class="li-main"><a class="nm" href="#/p/' + esc(store.current) + '/parts/' + encodeURIComponent(i.id) + '">' + esc(i.name) + '</a><div class="small dim"><span class="mono">' + esc(i.brand + (i.pn ? ' ' + i.pn : '')) + '</span> · ' + (i.price != null ? (i.verified ? '<span class="c-ok">Verified</span>' : '<span class="c-warn">Unverified</span>') : 'No price') + (i.seller ? ' · <a href="' + esc(i.url) + '" target="_blank" rel="noopener">' + esc(i.seller) + '</a>' : '') + (i.unit && i.unit !== 'listing' ? ' · per ' + esc(i.unit) : '') + '</div></div>' +
        '<div class="li-side"><div class="price">' + (i.price != null ? money(i.price * (i.qty || 1)) : 'n/a') + '</div><div class="li-ctl"><span class="qty"><button data-q="' + n + '" data-d="-1" aria-label="Less">−</button><span>' + (i.qty || 1) + '</span><button data-q="' + n + '" data-d="1" aria-label="More">+</button></span><button class="link-btn" data-rm="' + n + '">Remove</button></div></div></div>';
    });
    h += '</div>';
    h += '<div class="btn-row"><a class="btn" href="#/p/' + esc(store.current) + '/parts">Browse parts</a>' + (build.items.length ? '<button class="btn" id="bCopy">Copy list</button><button class="btn" id="bClear">Clear build</button>' : '') + '</div>';
    h += '<p class="note"><b>Verify before buying.</b> Prices change. Confirm fitment for your cab, bed, drive and year with the seller.</p>';
    h += '<h2 class="h2">Vehicle photo</h2>' + photoBox();
    h += '<p class="small dim">Planned: identify a part from a photo, and a preview of parts on your vehicle.</p></div>';
    app.innerHTML = h;
    bindPhoto();
    document.getElementById('bPlat').addEventListener('change', function (e) { useBuild(e.target.value); saveBuild(); updateCount(); renderBuild(); });
    var cp = document.getElementById('bCopy');
    if (cp) cp.addEventListener('click', function () {
      var txt = 'Forge build: ' + p.name + '\n' + build.items.map(function (i) { return '- ' + i.brand + ' ' + (i.pn || '') + ' ' + i.name + ' x' + (i.qty || 1) + ': ' + (i.price != null ? money(i.price * (i.qty || 1)) : 'n/a') + ' (' + i.seller + ')'; }).join('\n') + '\nTotal listed: ' + money(total);
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { toast('Copied'); }, function () { toast('Copy not available here'); }); else toast('Copy not available here');
    });
    var cl = document.getElementById('bClear');
    if (cl) cl.addEventListener('click', function () { if (confirm('Remove all parts from this build?')) { build.items = []; saveBuild(); updateCount(); renderBuild(); } });
  }

  // ---------- chrome: top bar + bottom tabs ----------
  function updateChrome(parts) {
    var cur = P[store.current] ? store.current : '';
    var veh = document.getElementById('vehBtn');
    var lbl = cur && vehLabel(cur);
    veh.innerHTML = cur ? '<span class="veh-l">' + (isSaved(cur) ? 'Vehicle' : 'Browsing') + '</span><span class="veh-v">' + (lbl ? esc(lbl) : esc(P[cur].name) + ' <span class="yrs">' + esc(P[cur].years) + '</span>') + '</span>' : '<span class="veh-v">Choose vehicle</span>';
    veh.setAttribute('href', cur ? '#/garage/add' : '#/garage/add');
    var active = 'garage';
    if (parts[0] === 'build') active = 'build';
    else if (parts[0] === 'p') active = { parts: 'parts', problems: 'fix', guides: 'guides' }[parts[2]] || 'garage';
    Array.prototype.forEach.call(document.querySelectorAll('[data-tab]'), function (a) {
      var t = a.getAttribute('data-tab');
      var href = t === 'garage' ? (cur && parts[0] === 'p' && !parts[2] ? '#/' : (cur && parts[0] !== 'p' ? '#/' : (cur ? '#/p/' + cur : '#/'))) : t === 'build' ? '#/build' : (cur ? '#/p/' + cur + '/' + { parts: 'parts', fix: 'problems', guides: 'guides' }[t] : '#/garage/add');
      if (t === 'garage') href = '#/';
      a.setAttribute('href', href);
      a.classList.toggle('on', t === active);
      if (t === active) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  // ---------- events + router ----------
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-save],[data-savesel],[data-add],[data-mine],[data-stance],[data-q],[data-rm],[data-gq],[data-unpark]') : null;
    if (!t) return;
    if (t.hasAttribute('data-save')) { var sp = t.getAttribute('data-save'); saveVehicle(sp, store.veh[sp] || {}); toast('Saved to My Garage'); rerender(); return; }
    if (t.hasAttribute('data-savesel') && state.pendingVeh) { saveVehicle(state.pendingVeh.pid, state.pendingVeh.v); toast('Saved to My Garage'); location.hash = '#/p/' + state.pendingVeh.pid; return; }
    if (t.hasAttribute('data-add')) {
      e.preventDefault(); e.stopPropagation();
      var id = t.getAttribute('data-add'), apid = t.getAttribute('data-pid');
      addToBuild(apid, id);
      Array.prototype.forEach.call(document.querySelectorAll('[data-add="' + id + '"]'), function (b) { var a = inBuild(id, apid); b.className = 'btn ' + (b.classList.contains('btn-sm') ? 'btn-sm ' : '') + (a ? 'added' : 'btn-primary'); b.textContent = a ? 'In build' : 'Add to build'; });
      return;
    }
    if (t.hasAttribute('data-mine')) { state.mineOnly = !state.mineOnly; rerender(); return; }
    if (t.hasAttribute('data-stance')) { setStance(t.getAttribute('data-stance')); return; }
    if (t.hasAttribute('data-q')) { var it = build.items[+t.getAttribute('data-q')]; it.qty = Math.max(1, (it.qty || 1) + (+t.getAttribute('data-d'))); saveBuild(); updateCount(); renderBuild(); return; }
    if (t.hasAttribute('data-rm')) { build.items.splice(+t.getAttribute('data-rm'), 1); saveBuild(); updateCount(); renderBuild(); return; }
    if (t.hasAttribute('data-unpark')) {
      var k = t.getAttribute('data-unpark'); store.garage = store.garage.filter(function (x) { return x !== k; }); delete store.veh[k];
      if (store.current === k) { store.current = store.garage[0] || ''; build = buildFor(store.current || '_none'); }
      saveBuild(); updateCount(); route(); return;
    }
    if (t.hasAttribute('data-gq')) { state.q = t.getAttribute('data-gq'); }
  });
  function rerender() { var y = window.scrollY; route(true); window.scrollTo(0, y); }
  var lastHash = null;
  function route(keep) {
    var parts = (location.hash.replace(/^#\/?/, '') || '').split('/').map(decodeURIComponent);
    if (parts[0] === 'pick' && P[parts[1]]) { useBuild(parts[1]); saveBuild(); updateCount(); location.replace('#/p/' + parts[1]); return; }
    if (parts[0] === 'p' && P[parts[1]] && store.current !== parts[1]) { useBuild(parts[1]); saveBuild(); updateCount(); }
    if (location.hash !== lastHash && keep !== true) { if (!(parts[0] === 'p' && parts[2] === 'problems' && !parts[3] && (lastHash || '').indexOf('/problems/') > -1)) state.pq = ''; var samePid = (lastHash || '').split('/')[2] === parts[1]; if (parts[2] !== 'search' && !(parts[0] === 'p' && !parts[2] && samePid)) state.q = ''; }
    lastHash = location.hash;
    updateChrome(parts);
    if (parts[0] === 'p' && parts[1]) renderPlatform(parts[1], parts[2] || '', parts[3]);
    else if (parts[0] === 'build') renderBuild();
    else if (parts[0] === 'garage' && parts[1] === 'add') renderPicker(parts.slice(2));
    else if (parts[0] === 'browse') renderBrowse();
    else renderGarage();
    if (keep !== true) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', function () { route(); });
  updateCount();
  route();
})();
