/* Forge app. Plain JS, no build step, works from file:// (no fetch). */
(function () {
  'use strict';
  var P = window.FORGE_PLATFORMS || {};

  // Platforms planned but not yet loaded. Loaded data files override entries with the same id.
  var CATALOG = [
    { id: 'gmt800', name: 'GMT800', title: 'Silverado, Sierra, Tahoe, Yukon', years: '1999–2007', make: 'Chevrolet / GMC' },
    { id: 'f150-2004-2014', name: 'F-150', title: 'Ford F-150 11th and 12th gen', years: '2004–2014', make: 'Ford' },
    { id: 'ram1500-2009-2018', name: 'Ram 1500', title: 'Ram 1500 4th gen (DS)', years: '2009–2018', make: 'Ram' },
    { id: 'gmt900-2007-2014', name: 'GMT900', title: 'Silverado, Sierra, Tahoe, Yukon, Escalade', years: '2007–2014', make: 'Chevrolet / GMC / Cadillac' },
    { id: 'tacoma-2005-2023', name: 'Tacoma', title: 'Toyota Tacoma, 2nd and 3rd gen', years: '2005–2023', make: 'Toyota' },
    { id: 'wrangler-jk-jl', name: 'Wrangler', title: 'Jeep Wrangler JK and JL', years: '2007–present', make: 'Jeep' },
    { id: 'mustang-s197-s550', name: 'Mustang', title: 'Ford Mustang S197 and S550', years: '2005–2023', make: 'Ford' },
    { id: 'camaro-2010-2015', name: 'Camaro', title: 'Chevrolet Camaro 5th gen', years: '2010–2015', make: 'Chevrolet' },
    { id: 'civic-2006-2021', name: 'Civic', title: 'Honda Civic 8th, 9th and 10th gen', years: '2006–2021', make: 'Honda' },
    { id: 'wrx-2015-2021', name: 'WRX', title: 'Subaru WRX (VA), with STI notes', years: '2015–2021', make: 'Subaru' },
    { id: 'miata', name: 'Miata', title: 'Mazda MX-5 Miata', years: 'Multiple gens', make: 'Mazda' },
    { id: 'bmw-3', name: '3 Series', title: 'BMW 3 Series', years: 'Multiple gens', make: 'BMW' }
  ];

  var CONF = {
    'verified': ['Verified', 'b-verified', 'Source page opened and states it'],
    'verified-secondary': ['Verified', 'b-verified', 'Verified on a secondary page (wiki, blog or retailer)'],
    'forum': ['Forum-reported', 'b-forum', "An owner's claim in a thread that was opened and read"],
    'video': ['Video-reported', 'b-video', 'Video title, channel, date and description confirmed; video not watched'],
    'unconfirmed': ['Unconfirmed', 'b-unconfirmed', 'Search extract only, or the page would not load'],
    'unknown': ['Unknown', 'b-unknown', 'No usable source found']
  };
  var TABS = [['overview', 'Overview'], ['wheels', 'Wheels & tires'], ['parts', 'Parts & deals'], ['problems', 'Problems'], ['guides', 'DIY & swaps'], ['tips', 'Owner tips']];
  var KEY = 'forge.builds.v2', OLDKEY = 'forge.build.v1';
  var app = document.getElementById('app');
  var state = { q: '', gq: '', cat: 'all', stance: null, mineOnly: false };

  // ---------- utils ----------
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function money(n) { return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function badge(c, extraTitle) {
    if (!c) return '';
    var list = Array.isArray(c) ? c : [c], seen = {}, out = '';
    list.forEach(function (k) { var d = CONF[k] || CONF.unknown; if (seen[d[0]]) return; seen[d[0]] = 1; out += '<span class="b ' + d[1] + '" title="' + esc(d[2] + (k === 'verified-secondary' ? '' : '')) + '">' + d[0] + (k === 'verified-secondary' ? ' · 2nd' : '') + '</span>'; });
    return out;
  }
  function badges(o) { return '<span class="badges">' + badge(o.conf) + (o.disputed ? '<span class="b b-disputed" title="Sources or owners disagree">Disputed</span>' : '') + '</span>'; }
  function srcs(list, note) {
    if ((!list || !list.length) && !note) return '';
    return '<div class="src">' + (note ? esc(note) + (list && list.length ? ' · ' : '') : '') + (list || []).map(function (s) { return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a>'; }).join(' · ') + '</div>';
  }
  function table(t, opts) {
    opts = opts || {};
    var dis = t.disputedRows || [];
    var h = '<div class="tbl-wrap"><table><thead><tr>' + t.columns.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>';
    t.rows.forEach(function (r, i) {
      h += '<tr' + (dis.indexOf(i) > -1 ? ' class="disputed"' : '') + '>' + r.map(function (c, j) {
        var isConf = (Array.isArray(c) ? c.length && c.every(function (k) { return CONF[k]; }) : CONF[c]) && t.columns[j] && /confidence/i.test(t.columns[j]);
        var cell = isConf ? badge(c) : esc(c);
        if (j === 0 && dis.indexOf(i) > -1) cell += ' <span class="b b-disputed">Disputed</span>';
        if (j === 0 && t.rowSrc && t.rowSrc[i]) cell += ' <a class="small" href="' + esc(t.rowSrc[i]) + '" target="_blank" rel="noopener">source</a>';
        return '<td' + (opts.numCol === j ? ' class="num"' : '') + '>' + cell + '</td>';
      }).join('') + '</tr>';
    });
    h += '</tbody></table></div>';
    if (t.note) h += '<p class="tbl-note">' + esc(t.note) + '</p>';
    if (t.conf || t.src) h += '<div class="src">' + badge(t.conf) + ' ' + (t.src || []).map(function (s) { return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a>'; }).join(' · ') + '</div>';
    return h;
  }
  function toast(msg) { var t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove('show'); }, 1800); }
  var CHEV = '<svg class="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';

  // ---------- build sheet storage ----------
  // One build per platform: { current: platformId, builds: { platformId: { photo, items } } }
  function loadStore() {
    var st = null;
    try { st = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { }
    if (!st || !st.builds) {
      st = { current: Object.keys(P)[0] || '', builds: {} };
      try { var old = JSON.parse(localStorage.getItem(OLDKEY) || 'null'); if (old && old.items) { var op = old.platform || st.current; st.builds[op] = { photo: old.photo || '', items: old.items }; st.current = op; } } catch (e) { }
    }
    if (!P[st.current]) st.current = Object.keys(P)[0] || '';
    return st;
  }
  var store = loadStore();
  function buildFor(pid) { if (!store.builds[pid]) store.builds[pid] = { photo: '', items: [] }; return store.builds[pid]; }
  var build = buildFor(store.current);
  function useBuild(pid) { if (!P[pid]) return; store.current = pid; build = buildFor(pid); }
  function saveBuild() { try { localStorage.setItem(KEY, JSON.stringify(store)); return true; } catch (e) { toast('Could not save (storage full). Try a smaller photo.'); return false; } }
  function updateCount() { var n = build.items.reduce(function (a, i) { return a + (i.qty || 1); }, 0); document.getElementById('buildCount').textContent = n; }

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
  function fitSummary(f) {
    var bits = [];
    if (f.years) bits.push('<b>Years</b> ' + esc(f.years));
    if (f.models && f.models.length) bits.push('<b>Models</b> ' + esc(f.models.join(', ')));
    if (f.drive && f.drive.length) bits.push('<b>Drive</b> ' + esc(f.drive.join(', ')));
    if (f.cab) bits.push('<b>Cab</b> ' + esc(f.cab));
    if (f.engines) bits.push('<b>Engine</b> ' + esc(f.engines.join(', ')));
    if (f.position) bits.push('<b>Position</b> ' + esc(f.position));
    if (f.trans) bits.push('<b>Trans</b> ' + esc(f.trans));
    if (f.steering) bits.push('<b>Steering</b> ' + esc(f.steering));
    if (f.min_wheel) bits.push('<b>Min wheel</b> ' + esc(f.min_wheel));
    if (f.notes) bits.push(esc(f.notes));
    return bits.join(' · ');
  }
  function fitBadge(f) {
    if (f.hunter_fit === true) return '<span class="b b-fit" title="' + esc(f.hunter_note || 'Listed as fitting the saved truck') + '">Fits my truck</span>';
    if (f.hunter_fit === false) return '<span class="b b-unknown">Not my cab/year</span>';
    if (typeof f.hunter_fit === 'string') return '<span class="b b-unknown" title="' + esc(f.hunter_fit) + '">' + esc(f.hunter_fit.length > 22 ? 'Check fit' : f.hunter_fit) + '</span>';
    return '';
  }
  function partCard(pid, part, featured) {
    var lp = listedPrice(part), added = inBuild(part.id, pid);
    var offers = part.offers.slice().sort(function (a, b) { return (a.price == null) - (b.price == null) || a.price - b.price; });
    var h = '<article class="card part' + (featured ? ' feature' : '') + '" id="part-' + esc(part.id) + '">';
    if (featured) h += '<div class="flag">' + esc(featured) + '</div>';
    h += '<div class="part-top"><div><div class="brand">' + esc(part.brand) + (part.part_number ? ' · ' + esc(part.part_number) : '') + '</div><div class="name">' + esc(part.name) + '</div></div>';
    h += '<div class="price-big">' + (lp ? money(lp.price) + (lp.unit && lp.unit !== 'listing' ? '<small>per ' + esc(lp.unit) + '</small>' : '') + '<small>' + (lp.verified ? 'best verified' : 'unverified price') + '</small>' : '<small>no verified price</small>') + '</div></div>';
    var fs = fitSummary(part.fitment || {});
    h += '<div class="fitline">' + '<span class="badges">' + fitBadge(part.fitment || {}) + '<span class="b b-unknown">' + esc(part.category) + '</span></span>' + (fs ? '<div style="margin-top:4px">' + fs + '</div>' : '') + '</div>';
    if (part.fitment && part.fitment.hunter_note) h += '<div class="part-note">' + esc(part.fitment.hunter_note) + '</div>';
    if (part.notes) h += '<div class="part-note">' + esc(part.notes) + '</div>';
    h += '<div class="offers">';
    offers.forEach(function (o) {
      var best = isBest(part, o);
      h += '<div class="offer' + (best ? ' best' : '') + '"><span class="s"><a href="' + esc(o.url) + '" target="_blank" rel="noopener">' + esc(o.seller) + '</a></span><span class="p">' + (o.price != null ? money(o.price) : 'n/a') + '</span>' +
        '<span class="meta">' + (best ? '<span class="b b-best">Best</span>' : '') + '<span class="b ' + (o.status === 'verified' ? 'b-verified' : 'b-unverified') + '">' + (o.status === 'verified' ? 'Verified' : 'Unverified') + '</span>checked ' + esc(o.checked) + (o.price_unit && o.price_unit !== 'listing' ? ' · per ' + esc(o.price_unit) : '') + (o.shipping_note ? ' · ship: ' + esc(o.shipping_note) : '') + (o.source_note ? ' · ' + esc(o.source_note) : '') + '</span></div>';
    });
    h += '</div><div class="part-actions"><span class="small dim">' + (part.source === 'master-guide' ? 'From master guide' : 'From deals check') + '</span><button class="btn btn-sm ' + (added ? 'added' : 'btn-primary') + '" data-add="' + esc(part.id) + '" data-pid="' + esc(pid) + '">' + (added ? 'In build ✓' : '+ Add to build') + '</button></div>';
    return h + '</article>';
  }
  function miniParts(pid, p, ids) {
    if (!ids || !ids.length) return '';
    return '<div class="mini-parts">' + ids.map(function (id) {
      var part = partById(p, id); if (!part) return '';
      var lp = listedPrice(part);
      return '<span class="mini"><a href="#/p/' + pid + '/parts/' + esc(id) + '">' + esc(part.brand + ' ' + (part.part_number || '')) + '</a><span class="mp">' + (lp ? money(lp.price) : 'n/a') + '</span><button title="Add to build" data-add="' + esc(id) + '" data-pid="' + esc(pid) + '">' + (inBuild(id, pid) ? '✓' : '+') + '</button></span>';
    }).join('') + '</div>';
  }

  // ---------- home ----------
  var ADVICE = {
    wheels: 'Start with bolt pattern, center bore and offset for your platform, then match tire size to your stance (stock, leveled, lifted or lowered). Forge platform pages list owner-reported combos with confidence labels.',
    suspension: 'Decide the stance first. Leveling and lifts change tire clearance and alignment; drops often need drop shocks, a C-notch past about 3 inches rear, and minimum wheel sizes.',
    engine: 'Popular swaps depend on the platform. Check the computer, wiring, fuel system and transmission limits before buying a donor engine, and budget for a tune.',
    exterior: 'Front-end swaps are rarely just a grille and bumper. Lights, hood, fenders and brackets usually come along.',
    maintenance: 'Look up the common problems list for your platform first. Many known failures have a cheap documented fix.',
    interior: 'Seat and dash swaps across years often need harness changes. Check connector differences before buying.'
  };
  function renderHome() {
    var loaded = Object.keys(P).map(function (k) { return P[k]; });
    var ids = {}; loaded.forEach(function (p) { ids[p.id] = 1; });
    var list = loaded.map(function (p) { return { id: p.id, name: p.name, title: p.title, years: p.years, make: p.make, live: true }; })
      .concat(CATALOG.filter(function (c) { return !ids[c.id]; }));
    var h = '<div class="wrap"><section class="hero"><div class="eyebrow">Pick your platform</div><h1>Build it right <em>the first time.</em></h1><p class="lede">' + loaded.length + ' trucks and cars, from the GMT800 to the WRX. Popular parts with checked prices, wheel and tire fitment by stance, common failures and their fixes, and step-by-step DIY and swap guides. Every fact links to its source.</p>' +
      '<label class="search" style="margin-top:16px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg><input id="gq" type="search" placeholder="Search all ' + loaded.length + ' platforms: part numbers, codes, sizes…" value="' + esc(state.gq || '') + '" autocomplete="off"></label><div id="gres"></div></section>';
    var soon = list.filter(function (c) { return !c.live; });
    h += '<section><div class="sec-head"><h2>Platforms</h2><span class="small dim">' + loaded.length + ' platforms</span></div><div class="plats">';
    list.forEach(function (c) {
      if (c.live) h += '<a class="plat live" href="#/p/' + esc(c.id) + '/overview"><div class="code">' + esc(c.make || '') + '</div><div class="nm">' + esc(c.name) + '</div><div class="yr">' + esc(c.title) + '</div><div class="yr mono">' + esc(c.years) + '</div></a>';
    });
    h += '</div>' + (soon.length ? '<p class="small dim" style="margin-top:12px">More platforms coming: ' + esc(soon.map(function (c) { return c.title; }).join(', ')) + '.</p>' : '') + '</section>';
    h += '<section><div class="grid g2"><div class="card"><h2>Your vehicle</h2><p class="muted small" style="margin-top:0">Add a photo to your build sheet. It stays on this device.</p>' + photoBox() + '<div class="soon-btns">' + soonButtons() + '</div></div>';
    h += '<div class="card"><h2>Quick advice</h2><div class="row"><div><label class="l" for="advMod">What are you planning?</label><select id="advMod"><option value="wheels">Wheels and tires</option><option value="suspension">Lift, level or lower</option><option value="engine">Engine swap or power</option><option value="exterior">Exterior and front-end swaps</option><option value="maintenance">Fix a known problem</option><option value="interior">Interior</option></select></div></div><div class="advice-out notice" id="advOut"></div></div></div></section>';
    h += '<section class="steps-how"><h2>How it works</h2><div class="grid g3"><div class="card"><h3>Pick your platform</h3><p class="muted small">Years, engines, axles and what changed year to year.</p></div><div class="card"><h3>Check fitment and fixes</h3><p class="muted small">Stance tables, common failures, torque specs and swap notes, each with a confidence label.</p></div><div class="card"><h3>Build your list</h3><p class="muted small">Add parts with the best checked price and watch the running total.</p></div></div></section>';
    h += '<section><h2>Where to buy</h2><div class="grid g3">' + storeCard('RockAuto', 'Huge catalog, low prices. Shipping is added per warehouse at checkout.', 'https://www.rockauto.com') + storeCard('Summit Racing', 'Major performance retailer.', 'https://www.summitracing.com') + storeCard('AmericanTrucks', 'Truck-focused; many listings ship free.', 'https://www.americantrucks.com') + storeCard('eBay Motors', 'Used and rare parts. Compatibility tables can be wrong.', 'https://www.ebay.com/b/eBay-Motors/6000') + storeCard('Amazon', 'Prefer "ships from and sold by Amazon" or the brand store.', 'https://www.amazon.com') + storeCard('JEGS', 'Performance retailer, 60+ years in business.', 'https://www.jegs.com') + '</div></section></div>';
    app.innerHTML = h;
    var sel = document.getElementById('advMod'), out = document.getElementById('advOut');
    function adv() { out.textContent = ADVICE[sel.value]; }
    sel.addEventListener('change', adv); adv();
    bindPhoto();
    var gq = document.getElementById('gq'), gres = document.getElementById('gres');
    function gdraw() { state.gq = gq.value; gres.innerHTML = renderGlobalSearch(gq.value); }
    gq.addEventListener('input', gdraw); if (gq.value) gdraw();
  }
  function renderGlobalSearch(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return '';
    var names = {}; TABS.forEach(function (t) { names[t[0]] = t[1]; });
    var total = 0, h = '';
    Object.keys(P).forEach(function (pid) {
      var p = P[pid];
      var hits = searchIndex(pid, p).filter(function (it) { return terms.every(function (t) { return it.hay.indexOf(t) > -1; }); });
      if (!hits.length) return;
      total += hits.length;
      h += '<div class="ggroup"><div class="sec-head" style="margin-top:14px"><h3 style="margin:0">' + esc(p.name) + ' <span class="small dim" style="font-weight:500">' + esc(p.years) + '</span></h3><a class="small" href="#/p/' + pid + '/overview" data-gq="' + esc(q) + '">' + hits.length + ' result' + (hits.length > 1 ? 's' : '') + ' →</a></div><div class="grid">' +
        hits.slice(0, 3).map(function (it) { return '<a class="card hit" href="#/p/' + pid + '/' + it.tab + (it.anchor ? '/' + encodeURIComponent(it.anchor) : '') + '"><div class="sect">' + esc(names[it.tab]) + '</div><h3 style="margin:4px 0">' + hl(it.title, terms) + '</h3><div class="small muted">' + hl(snippet(it.text, terms), terms) + '</div></a>'; }).join('') + '</div></div>';
    });
    if (!total) return '<div class="card empty" style="margin-top:12px">Nothing matched across platforms. Try a part number, a code like P0332, or a size like 285/55R20.</div>';
    return '<p class="small dim" style="margin-top:10px">' + total + ' results across platforms. Open a platform to see all of them.</p>' + h;
  }
  function storeCard(n, d, u) { return '<a class="card hit" href="' + u + '" target="_blank" rel="noopener"><h3>' + esc(n) + '</h3><p class="muted small" style="margin:0">' + esc(d) + '</p></a>'; }
  function photoBox() { return '<label class="photo" id="photoBox"><input type="file" accept="image/*" id="photoIn">' + (build.photo ? '<img src="' + build.photo + '" alt="Your vehicle">' : '<span>Tap to add a photo<br><span class="small dim">JPG or PNG</span></span>') + '</label>' + (build.photo ? '<button class="btn btn-sm" id="photoClear" style="margin-top:8px">Remove photo</button>' : ''); }
  function soonButtons() { return '<button class="btn" disabled>Identify a part from a photo <span class="b">Coming soon</span></button><button class="btn" disabled>Generate AI preview <span class="b">Coming soon</span></button>'; }
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

  // ---------- platform ----------
  function factList(items) {
    return '<div class="facts">' + items.map(function (f) { return '<div class="fact"><div class="lbl">' + esc(f.label) + '</div><div>' + esc(f.text) + ' ' + badges(f) + srcs(f.src) + '</div></div>'; }).join('') + '</div>';
  }
  function tabOverview(pid, p) {
    var o = p.overview, h = '';
    h += '<section><div class="notice"><div class="legend"><span class="small">Confidence:</span>' + badge('verified') + badge('forum') + badge('video') + badge('unconfirmed') + '<span class="b b-disputed">Disputed</span></div><div class="small" style="margin-top:6px">Data compiled ' + esc(p.compiled) + '. Prices checked ' + esc(p.pricesChecked) + '.</div></div></section>';
    h += '<section><h2>Read first: corrections and conflicts</h2>' + p.conflicts.map(function (c) { return '<div class="card conflict' + (c.disputed ? '' : ' plain') + '" style="margin-bottom:8px"><h3>' + esc(c.topic) + ' ' + badges(c) + '</h3><div class="small">' + esc(c.text) + '</div>' + srcs(c.src) + '</div>'; }).join('') + '</section>';
    h += '<section><h2>Models and years</h2>' + factList(o.facts) + '</section>';
    h += '<section><h2>Year-by-year changes</h2><ul class="tl">' + o.yearChanges.map(function (y) { return '<li><span class="yr">' + esc(y.year) + '</span>' + esc(y.text) + ' ' + badges(y) + srcs(y.src) + '</li>'; }).join('') + '</ul></section>';
    h += '<section><h2>Engines (factory ratings)</h2>' + table(o.engines) + '</section>';
    h += '<section><h2>Transmissions</h2>' + factList(o.transmissions) + '</section>';
    h += '<section><h2>Factory axles</h2>' + table(o.axles) + '<div style="margin-top:10px">' + factList(o.axleNotes) + '</div></section>';
    (o.extraTables || []).forEach(function (t) { h += '<section><h2>' + esc(t.title) + '</h2>' + table(t.table) + '</section>'; });
    if (o.mpg) h += '<section><h2>Real-world MPG (owners)</h2>' + table(o.mpg) + '</section>';
    if (p.unknowns) h += '<section><h2>Still unknown</h2><div class="card"><ul class="small muted" style="margin:0;padding-left:18px">' + p.unknowns.map(function (u) { return '<li>' + esc(u) + '</li>'; }).join('') + '</ul></div></section>';
    return h;
  }
  function tabWheels(pid, p) {
    var w = p.wheels, h = '';
    h += '<section><h2>Base specs</h2>' + table(w.specs) + '</section>';
    h += '<section><h2>Stock sizes</h2>' + table(w.stock) + '</section>';
    var st = w.stances; var cur = state.stance && st.some(function (s) { return s.id === state.stance; }) ? state.stance : st[0].id;
    h += '<section><h2>Fitment by stance</h2><div class="seg" role="tablist">' + st.map(function (s) { return '<button data-stance="' + s.id + '" class="' + (s.id === cur ? 'on' : '') + '">' + esc(s.title) + '</button>'; }).join('') + '</div>';
    st.forEach(function (s) {
      h += '<div class="stance' + (s.id === cur ? '' : ' hide') + '" data-stance-panel="' + s.id + '"><div class="card" style="margin-bottom:10px"><h3>' + esc(s.title) + ' <span class="muted" style="font-weight:500">· ' + esc(s.subtitle) + '</span> ' + badges(s) + '</h3><div class="small muted">' + esc(s.note || '') + '</div>' + srcs(s.src) + srcs(s.noteSrc) + '</div>';
      if (s.rows.length) {
        var low = s.rows[0].drop !== undefined;
        h += '<div class="tbl-wrap"><table><thead><tr>' + (low ? '<th>' + esc(s.colDrop || 'Drop') + '</th><th>' + esc(s.colVehicle || 'Truck') + '</th>' : '') + '<th>Wheel</th><th>Tire</th><th>Result</th><th>Confidence</th></tr></thead><tbody>';
        s.rows.forEach(function (r) {
          var sl = r.src || s.src || [];
          h += '<tr' + (r.disputed ? ' class="disputed"' : '') + '>' + (low ? '<td class="num">' + esc(r.drop) + '</td><td>' + esc(r.truck || '') + '</td>' : '') + '<td class="num">' + esc(r.wheel) + '</td><td class="num">' + esc(r.tire) + '</td><td>' + esc(r.fit) + (sl.length ? ' <a class="small" href="' + esc(sl[0].url) + '" target="_blank" rel="noopener">source</a>' : '') + '</td><td>' + badges(r) + '</td></tr>';
        });
        h += '</tbody></table></div>';
      }
      h += '</div>';
    });
    h += '</section>';
    (p.featuredParts || []).filter(function (f) { return f.tab === 'wheels'; }).forEach(function (f) { var fp = partById(p, f.id); if (fp) h += '<section><h2>' + esc(f.heading || 'Featured') + '</h2>' + partCard(pid, fp, f.label) + '</section>'; });
    if (w.extraFacts && w.extraFacts.items && w.extraFacts.items.length) h += '<section><h2>' + esc(w.extraFacts.title) + '</h2>' + factList(w.extraFacts.items) + '</section>';
    h += '<section><h2>TPMS</h2>' + factList(w.tpms) + '</section>';
    return h;
  }
  function tabParts(pid, p, focus) {
    var cats = p.partCategories.filter(function (c) { return p.parts.some(function (x) { return x.category === c; }); });
    var h = '<section><div class="sec-head"><h2>Popular parts and deals</h2><span class="small dim">' + p.parts.length + ' parts</span></div>';
    h += '<p class="small muted" style="margin-top:0">Best = lowest verified listed price. Shipping excluded unless the seller says free. RockAuto adds shipping at checkout. Prices checked ' + esc(p.pricesChecked) + ' and they change.</p>';
    h += '<div class="cat-chips"><button class="chip' + (state.cat === 'all' ? ' on' : '') + '" data-cat="all">All</button>' + (p.myVehicle && p.parts.some(function (x) { return x.fitment && x.fitment.hunter_fit === true; }) ? '<button class="chip' + (state.mineOnly ? ' on' : '') + '" data-mine="1">Fits my truck</button>' : '') + cats.map(function (c) { return '<button class="chip' + (state.cat === c ? ' on' : '') + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>'; }).join('') + '</div>';
    var feat = {}; (p.featuredParts || []).forEach(function (f) { feat[f.id] = f.label; });
    var shown = cats.filter(function (c) { return state.cat === 'all' || state.cat === c; });
    shown.forEach(function (c) {
      var items = p.parts.filter(function (x) { return x.category === c && (!state.mineOnly || (x.fitment && x.fitment.hunter_fit === true)); });
      if (!items.length) return;
      h += '<h3 class="h-sub">' + esc(c) + ' · ' + items.length + '</h3><div class="grid g3">' + items.map(function (x) { return partCard(pid, x, feat[x.id] || (focus === x.id ? 'Linked part' : '')); }).join('') + '</div>';
    });
    h += '</section>';
    if (p.sellers && p.sellers.length) h += '<section><h2>Seller notes</h2><div class="grid g2">' + p.sellers.map(function (s) { return '<div class="card"><h3>' + esc(s.name) + '</h3><div class="small muted">' + esc(s.notes) + '</div><div class="small" style="margin-top:6px"><span class="dim">Returns:</span> ' + esc(s.returns) + '</div><div class="small"><span class="dim">Affiliate:</span> ' + esc(s.affiliate) + '</div></div>'; }).join('') + '</div></section>';
    return h;
  }
  function tabProblems(pid, p) {
    return '<section><h2>Common problems</h2>' + p.problems.map(function (x) {
      return '<details class="acc" id="prob-' + esc(x.id) + '"><summary><div><h3 style="margin:0">' + esc(x.title) + '</h3><div class="small muted">' + esc(x.symptoms) + '</div><div style="margin-top:6px">' + badges(x) + (x.years ? ' <span class="small dim">' + esc(x.years) + '</span>' : '') + '</div></div>' + CHEV + '</summary><div class="body"><dl class="kv"><dt>Symptom</dt><dd>' + esc(x.symptoms) + '</dd>' + (x.cause ? '<dt>Cause</dt><dd>' + esc(x.cause) + '</dd>' : '') + '<dt>Fix</dt><dd>' + esc(x.fix) + '</dd></dl>' + (x.confNote ? '<div class="small dim" style="margin-top:8px">' + esc(x.confNote) + '</div>' : '') + (x.parts && x.parts.length ? '<div class="h-sub">Parts</div>' + miniParts(pid, p, x.parts) : '') + (x.guide ? '<p class="small"><a href="#/p/' + pid + '/guides/' + esc(x.guide) + '">Open the step-by-step guide</a></p>' : '') + srcs(x.src) + '</div></details>';
    }).join('') + '</section>';
  }
  function guideBlock(pid, p, g, open) {
    var h = '<details class="acc" id="guide-' + esc(g.id) + '"' + (open ? ' open' : '') + '><summary><div><h3 style="margin:0">' + esc(g.title) + '</h3>' + (g.summary ? '<div class="small muted">' + esc(g.summary) + '</div>' : '') + '<div style="margin-top:6px">' + badges(g) + ' <span class="small dim">' + (g.steps.length ? g.steps.length + ' steps' : '') + (g.torque ? (g.steps.length ? ' · ' : '') + 'torque table' : '') + '</span></div></div>' + CHEV + '</summary><div class="body">';
    if (g.steps.length) h += '<ol class="steps">' + g.steps.map(function (s) { return '<li>' + esc(s.text) + ((s.conf && s.conf !== g.conf) || s.disputed ? ' ' + badges({ conf: s.conf && s.conf !== g.conf ? s.conf : null, disputed: s.disputed }) : '') + '</li>'; }).join('') + '</ol>';
    if (g.torque) h += '<div class="h-sub">Torque specs</div>' + table(g.torque, { numCol: 1 });
    if (g.parts && g.parts.length) h += '<div class="h-sub">Parts for this job</div>' + miniParts(pid, p, g.parts);
    h += '<div class="h-sub">Sources</div>' + srcs(g.src);
    return h + '</div></details>';
  }
  function tabGuides(pid, p, focus) {
    var diy = p.guides.filter(function (g) { return g.type === 'diy'; }), sw = p.guides.filter(function (g) { return g.type === 'swap'; });
    return '<section><h2>DIY guides</h2>' + diy.map(function (g) { return guideBlock(pid, p, g, focus === g.id); }).join('') + '</section><section><h2>Swap guides</h2>' + sw.map(function (g) { return guideBlock(pid, p, g, focus === g.id); }).join('') + '</section>';
  }
  function tabTips(pid, p) {
    var h = '<section><h2>Owner tips</h2><div class="grid g2">' + p.tips.map(function (t) { return '<div class="card tip"><span class="dot"></span><div><div>' + esc(t.text) + '</div><div style="margin-top:6px">' + badges(t) + '</div>' + srcs(t.src) + '</div></div>'; }).join('') + '</div></section>';
    if (p.dyno) h += '<section><h2>Owner dyno results</h2>' + table(p.dyno) + '</section>';
    if (p.videos) h += '<section><h2>Videos</h2><p class="small muted" style="margin-top:0">Title, channel and date confirmed. Videos were not watched, so only the description is used.</p><div class="grid g2">' + p.videos.map(function (v) { return '<a class="card vid" href="' + esc(v.url) + '" target="_blank" rel="noopener"><div class="t">' + esc(v.title) + '</div><div class="small muted">' + esc(v.channel) + (v.date ? ' · ' + esc(v.date) : '') + '</div><div class="small" style="margin-top:6px">' + esc(v.note) + '</div><div style="margin-top:6px">' + badge('video') + '</div></a>'; }).join('') + '</div></section>';
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
    p.parts.forEach(function (x) { var lp = listedPrice(x); add('parts', x.id, x.brand + ' ' + (x.part_number || '') + ' · ' + x.name, x.category + ' · ' + (lp ? money(lp.price) + ' at ' + lp.seller : 'no verified price') + ' · ' + JSON.stringify(x.fitment || {}).replace(/[{}"\[\]]/g, ' ') + ' ' + (x.notes || ''), null); });
    p.problems.forEach(function (x) { add('problems', x.id, x.title, x.symptoms + ' · ' + x.cause + ' · ' + x.fix, x); });
    p.guides.forEach(function (g) { add('guides', g.id, (g.type === 'swap' ? 'Swap: ' : 'DIY: ') + g.title, g.summary + ' ' + g.steps.map(function (s) { return s.text; }).join(' ') + ' ' + (g.torque ? g.torque.rows.map(function (r) { return r.join(' '); }).join(' ') : ''), g); });
    p.tips.forEach(function (t) { add('tips', '', 'Tip', t.text, t); });
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
    if (text.length <= 220 || i < 0) return text.length > 220 ? text.slice(0, 220) + '…' : text;
    var st = Math.max(0, i - 80); return (st ? '…' : '') + text.slice(st, st + 220) + '…';
  }
  function renderSearch(pid, p) {
    var terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    var hits = searchIndex(pid, p).filter(function (it) { return terms.every(function (t) { return it.hay.indexOf(t) > -1; }); });
    var names = {}; TABS.forEach(function (t) { names[t[0]] = t[1]; });
    var h = '<section><div class="sec-head"><h2>Results for “' + esc(state.q) + '”</h2><span class="small dim">' + hits.length + ' found</span></div>';
    if (!hits.length) return h + '<div class="card empty">Nothing matched. Try a part number, a code like P0332, a size like 285/55R20, or a word like "knock".</div></section>';
    h += '<div class="grid">' + hits.slice(0, 80).map(function (it) {
      return '<a class="card hit" href="#/p/' + pid + '/' + it.tab + (it.anchor ? '/' + encodeURIComponent(it.anchor) : '') + '" data-clearq="1"><div class="sect">' + esc(names[it.tab]) + '</div><h3 style="margin:4px 0">' + hl(it.title, terms) + '</h3><div class="small muted">' + hl(snippet(it.text, terms), terms) + '</div>' + (it.conf ? '<div style="margin-top:6px">' + badges(it.conf) + '</div>' : '') + '</a>';
    }).join('') + '</div>';
    if (hits.length > 80) h += '<p class="small dim">Showing the first 80. Add another word to narrow it down.</p>';
    return h + '</section>';
  }

  // ---------- platform shell ----------
  function renderPlatform(pid, tab, focus) {
    var p = P[pid];
    if (!p) { var c = CATALOG.filter(function (x) { return x.id === pid; })[0]; app.innerHTML = '<div class="wrap"><section class="hero"><div class="eyebrow">Coming soon</div><h1>' + esc(c ? c.title : pid) + '</h1><p class="lede">This platform has no data file loaded yet.</p><p><a class="btn" href="#/">Back to platforms</a></p></section></div>'; return; }
    if (!TABS.some(function (t) { return t[0] === tab; })) tab = 'overview';
    var h = '<div class="wrap phead"><div class="eyebrow">' + esc(p.make) + ' · ' + esc(p.years) + '</div><h1>' + esc(p.name) + ' <span class="muted" style="font-weight:500">' + esc(p.title) + '</span></h1><p class="lede small">' + esc(p.tagline) + '</p>' + (p.myVehicle ? '<div class="mine"><b>' + esc(p.myVehicle.label) + ':</b> ' + esc(p.myVehicle.text) + '</div>' : '') +
      ((p.safetyAlerts || []).length ? '<div class="safety-wrap" role="alert">' + p.safetyAlerts.map(function (x) { return '<details class="safety"' + (tab === 'overview' ? ' open' : '') + '><summary class="safety-h">⚠ Safety: ' + esc(x.title) + ' ' + badges(x) + '</summary><div class="small" style="margin-top:4px">' + esc(x.text) + '</div>' + srcs(x.src) + '</details>'; }).join('') + (tab === 'overview' ? '' : '<div class="small dim" style="margin-top:4px">Tap a safety item to read it. Full text is open on Overview.</div>') + '</div>' : '') +
      '<label class="search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg><input id="q" type="search" placeholder="Search ' + esc(p.name) + ': parts, codes, sizes, torque…" value="' + esc(state.q) + '" autocomplete="off"></label></div>';
    h += '<div class="tabs-bar"><div class="wrap"><nav class="tabs" id="tabs">' + TABS.map(function (t) { return '<a class="tab' + (t[0] === tab && !state.q ? ' on' : '') + '" href="#/p/' + pid + '/' + t[0] + '" data-clearq="1">' + t[1] + '</a>'; }).join('') + '</nav></div></div>';
    h += '<div class="wrap" id="pbody"></div>';
    app.innerHTML = h;
    var body = document.getElementById('pbody');
    function draw() {
      if (state.q.trim()) body.innerHTML = renderSearch(pid, p);
      else body.innerHTML = ({ overview: tabOverview, wheels: tabWheels, parts: tabParts, problems: tabProblems, guides: tabGuides, tips: tabTips })[tab](pid, p, focus);
      Array.prototype.forEach.call(document.querySelectorAll('#tabs .tab'), function (a) { a.classList.toggle('on', !state.q.trim() && a.getAttribute('href').split('/').pop() === tab); });
    }
    draw();
    var q = document.getElementById('q');
    q.addEventListener('input', function () { state.q = q.value; draw(); });
    var on = document.querySelector('#tabs .tab.on'); if (on && on.scrollIntoView) on.scrollIntoView({ block: 'nearest', inline: 'center' });
    if (focus) {
      if (tab === 'wheels') { state.stance = focus; draw(); setStance(focus); }
      var el = document.getElementById((tab === 'parts' ? 'part-' : tab === 'problems' ? 'prob-' : tab === 'guides' ? 'guide-' : '') + focus);
      if (el) { if (el.tagName === 'DETAILS') el.open = true; setTimeout(function () { el.scrollIntoView({ block: 'start' }); window.scrollBy(0, -120); }, 30); }
    } else window.scrollTo(0, 0);
  }
  function setStance(id) {
    state.stance = id;
    Array.prototype.forEach.call(document.querySelectorAll('[data-stance]'), function (b) { b.classList.toggle('on', b.getAttribute('data-stance') === id); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-stance-panel]'), function (d) { d.classList.toggle('hide', d.getAttribute('data-stance-panel') !== id); });
  }

  // ---------- build sheet ----------
  function renderBuild() {
    var ids = Object.keys(P);
    useBuild(P[store.current] ? store.current : ids[0]);
    var p = P[store.current];
    var total = 0, unverified = 0, unpriced = 0;
    build.items.forEach(function (i) { if (i.price == null) unpriced++; else { total += i.price * (i.qty || 1); if (!i.verified) unverified++; } });
    var h = '<div class="wrap"><section class="phead"><div class="eyebrow">Build sheet</div><h1>My ' + esc(p ? p.name : '') + ' build</h1><p class="lede small">Each platform keeps its own build, saved on this device. Totals use listed prices from the checked date; shipping and tax not included.</p></section><div class="build-grid">';
    h += '<div><div class="card"><label class="l" for="bPlat">Platform</label><select id="bPlat">' + ids.map(function (k) { return '<option value="' + esc(k) + '"' + (k === store.current ? ' selected' : '') + '>' + esc(P[k].name + ' · ' + P[k].years + ' (' + buildFor(k).items.length + ' parts)') + '</option>'; }).join('') + CATALOG.filter(function (c) { return !P[c.id]; }).map(function (c) { return '<option disabled>' + esc(c.title + ' (coming soon)') + '</option>'; }).join('') + '</select>';
    h += '<div style="margin-top:14px">' + photoBox() + '</div><div class="soon-btns">' + soonButtons() + '</div></div></div>';
    h += '<div class="card"><div class="sec-head"><h2 style="margin:0">Parts</h2>' + (p ? '<a class="btn btn-sm" href="#/p/' + esc(store.current) + '/parts">+ Browse parts</a>' : '') + '</div>';
    if (!build.items.length) h += '<div class="empty">No parts yet. Open ' + (p ? esc(p.name) : 'a platform') + ' and tap <b>Add to build</b> on any part card.</div>';
    build.items.forEach(function (i, n) {
      h += '<div class="line-item"><div><div class="nm">' + esc(i.name) + '</div><div class="meta"><span class="mono">' + esc(i.brand + (i.pn ? ' · ' + i.pn : '')) + '</span>' + (i.price != null ? (i.verified ? '<span class="b b-verified">Verified</span>' : '<span class="b b-unverified">Unverified</span>') : '<span class="b b-unknown">No price</span>') + (i.seller ? '<a href="' + esc(i.url) + '" target="_blank" rel="noopener">' + esc(i.seller) + '</a>' : '') + (i.unit && i.unit !== 'listing' ? '<span>per ' + esc(i.unit) + '</span>' : '') + '</div></div>' +
        '<div class="pr">' + (i.price != null ? money(i.price * (i.qty || 1)) : 'n/a') + '</div><div class="meta"><span class="qty"><button data-q="' + n + '" data-d="-1" aria-label="Less">−</button><span>' + (i.qty || 1) + '</span><button data-q="' + n + '" data-d="1" aria-label="More">+</button></span></div><div style="text-align:right"><button class="btn btn-sm" data-rm="' + n + '">Remove</button></div></div>';
    });
    h += '<div class="total"><span>Total listed</span><span class="amt">' + money(total) + '</span></div>';
    h += '<div class="small dim">' + build.items.length + ' parts' + (unverified ? ' · ' + unverified + ' with unverified prices' : '') + (unpriced ? ' · ' + unpriced + ' without a price' : '') + '</div>';
    if (build.items.length) h += '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-sm" id="bCopy">Copy list</button><button class="btn btn-sm" id="bClear">Clear build</button></div>';
    h += '<p class="notice" style="margin-top:14px"><b>Verify before buying.</b> Prices change. Confirm fitment for your cab, bed, drive and year with the seller.</p></div></div></div>';
    app.innerHTML = h;
    bindPhoto();
    document.getElementById('bPlat').addEventListener('change', function (e) { useBuild(e.target.value); saveBuild(); updateCount(); renderBuild(); });
    var cp = document.getElementById('bCopy');
    if (cp) cp.addEventListener('click', function () {
      var txt = 'Forge build: ' + (p ? p.name : '') + '\n' + build.items.map(function (i) { return '- ' + i.brand + ' ' + (i.pn || '') + ' ' + i.name + ' x' + (i.qty || 1) + ': ' + (i.price != null ? money(i.price * (i.qty || 1)) : 'n/a') + ' (' + i.seller + ')'; }).join('\n') + '\nTotal listed: ' + money(total);
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { toast('Copied'); }, function () { toast('Copy not available here'); }); else toast('Copy not available here');
    });
    var cl = document.getElementById('bClear');
    if (cl) cl.addEventListener('click', function () { if (confirm('Remove all parts from this build?')) { build.items = []; saveBuild(); updateCount(); renderBuild(); } });
  }

  // ---------- events + router ----------
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-add],[data-cat],[data-mine],[data-stance],[data-q],[data-rm],[data-clearq],[data-gq]') : null;
    if (!t) return;
    if (t.hasAttribute('data-add')) {
      e.preventDefault(); e.stopPropagation();
      var r = addToBuild(t.getAttribute('data-pid'), t.getAttribute('data-add'));
      var id = t.getAttribute('data-add');
      var apid = t.getAttribute('data-pid');
      Array.prototype.forEach.call(document.querySelectorAll('[data-add="' + id + '"]'), function (b) {
        if (b.classList.contains('btn')) { b.className = 'btn btn-sm ' + (inBuild(id, apid) ? 'added' : 'btn-primary'); b.textContent = inBuild(id, apid) ? 'In build ✓' : '+ Add to build'; }
        else b.textContent = inBuild(id, apid) ? '✓' : '+';
      });
      return r;
    }
    if (t.hasAttribute('data-cat')) { state.cat = t.getAttribute('data-cat'); rerender(); return; }
    if (t.hasAttribute('data-mine')) { state.mineOnly = !state.mineOnly; rerender(); return; }
    if (t.hasAttribute('data-stance')) { setStance(t.getAttribute('data-stance')); return; }
    if (t.hasAttribute('data-q')) { var it = build.items[+t.getAttribute('data-q')]; it.qty = Math.max(1, (it.qty || 1) + (+t.getAttribute('data-d'))); saveBuild(); updateCount(); renderBuild(); return; }
    if (t.hasAttribute('data-rm')) { build.items.splice(+t.getAttribute('data-rm'), 1); saveBuild(); updateCount(); renderBuild(); return; }
    if (t.hasAttribute('data-clearq')) { state.q = ''; }
    if (t.hasAttribute('data-gq')) { state.q = t.getAttribute('data-gq'); }
  });
  var lastY = 0;
  function rerender() { lastY = window.scrollY; route(true); window.scrollTo(0, lastY); }
  function route(keepScroll) {
    var parts = (location.hash.replace(/^#\/?/, '') || '').split('/').map(decodeURIComponent);
    Array.prototype.forEach.call(document.querySelectorAll('[data-nav]'), function (a) { a.classList.toggle('on', (parts[0] || 'home') === a.getAttribute('data-nav') || (!parts[0] && a.getAttribute('data-nav') === 'home')); });
    if (parts[0] === 'p' && parts[1]) {
      if (P[parts[1]] && store.current !== parts[1]) { useBuild(parts[1]); saveBuild(); updateCount(); }
      renderPlatform(parts[1], parts[2] || 'overview', keepScroll === true ? null : parts[3]);
      if (keepScroll !== true && !parts[3]) window.scrollTo(0, 0);
      return;
    }
    if (parts[0] === 'build') { renderBuild(); if (keepScroll !== true) window.scrollTo(0, 0); return; }
    renderHome(); if (keepScroll !== true) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', function () { route(); });
  updateCount();
  route();
})();
