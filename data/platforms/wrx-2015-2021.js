/* Forge platform data: wrx-2015-2021. Built by scripts/build_app_*.js, then scripts/expand/integrate.py (catalog meta, reference, gap-fill guides). Schema: app/DATA-FORMAT.md */
window.FORGE_PLATFORMS = window.FORGE_PLATFORMS || {};
window.FORGE_PLATFORMS["wrx-2015-2021"] = {
 "schemaVersion": 1,
 "id": "wrx-2015-2021",
 "name": "WRX",
 "title": "Subaru WRX (VA), with STI notes",
 "years": "2015–2021",
 "yearsNote": "VA WRX (FA20DIT) 2015–2021; STI (EJ257) notes split out",
 "kind": "car",
 "make": "Subaru",
 "models": [
  "WRX 2015–2021 (2.0 FA20DIT, 6MT or CVT)",
  "WRX STI 2015–2021 (2.5 EJ257, 6MT TY85)"
 ],
 "tagline": "Flush fitment, Accessport stages, and the engine-failure limits to respect.",
 "compiled": "2026-10-11",
 "pricesChecked": "2026-10-11",
 "safetyAlerts": [
  {
   "title": "FA20DIT rod-bearing failure (WRX)",
   "text": "The big one: a knock, then metal in the pan, often starting at the #3 rod journal. One shop reported five failures, all on stock, untuned cars with 7,000 km oil changes. No Subaru bulletin exists; causes are community theories (oil starvation, low oil level, fuel dilution, high low-rpm torque). Check the dipstick every fill-up, run 5W-30 synthetic (the factory spec) at 3–5k mi intervals, and don't lug under boost.",
   "conf": "forum",
   "src": [
    {
     "label": "diag.net FA20 #3 rod bearing thread (guide gave no URL)",
     "url": "https://diag.net/"
    },
    {
     "label": "HP Academy FA20 oiling thread (guide gave no URL)",
     "url": "https://www.hpacademy.com/"
    },
    {
     "label": "ClubWRX (guide gave no URL)",
     "url": "https://www.clubwrx.net/"
    }
   ]
  },
  {
   "title": "Tuning limits",
   "text": "Keep tuned wheel torque at about 300 lb-ft or less: JM Automotive caps its tunes there \"to help protect the weak rods\" (Verified). Community \"safe stock-block\" figures of 320–350 whp / 325–350 wtq are Unconfirmed. CVT: keep tuned torque around 300 lb-ft or less and avoid repeated launches (Forum-reported). Run the right octane for the map and monitor DAM/feedback knock.",
   "conf": [
    "verified",
    "forum",
    "unconfirmed"
   ],
   "src": [
    {
     "label": "JM Automotive FA20 mod guide",
     "url": "https://jmautomn.com/mod-guides/2015-wrx-fa20-mod-guide/"
    }
   ]
  },
  {
   "title": "Ringland failure (WRX LSPI; STI EJ257)",
   "text": "Cast pistons crack at the ringland from detonation or pre-ignition: blow-by, oil burning, a low-compression cylinder (often #4 on the EJ257). WRX: Service Program WQW-58 reflashed 2015 WRXs built 2014-01-17 to 2014-09-26 for pre-ignition. STI: 2019+ got stronger pistons. Diagnose with compression and leak-down tests.",
   "conf": [
    "verified",
    "forum"
   ],
   "src": [
    {
     "label": "Subaru WQW-58",
     "url": "https://static.nhtsa.gov/odi/tsbs/2021/MC-10187322-0001.pdf"
    },
    {
     "label": "comeanddriveit.com ringland article (guide gave no URL)",
     "url": "https://comeanddriveit.com/"
    },
    {
     "label": "Subaru 2019 STI press release",
     "url": "https://media.subaru.com/pressrelease/1374/"
    }
   ]
  }
 ],
 "conflicts": [
  {
   "topic": "STI bore and compression",
   "text": "Owner's manual 99.5 mm and 8.2:1; 2020 spec sheet 99.6 mm and 8.1:1. Both factory; unresolved.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2021 WRX/STI owner's manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2021-wrx.pdf"
    },
    {
     "label": "2020 WRX STI spec sheet",
     "url": "https://subarumedia.iconicweb.com/mediasite/specs/3._2020_WRX_STI_Specs.pdf"
    }
   ]
  },
  {
   "topic": "STI peak torque band",
   "text": "2015 sheet \"290 @ 4,000\"; 2020 sheet \"290 @ 4,000–5,200\". A real revision for the 310-hp engine.",
   "conf": "verified",
   "src": [
    {
     "label": "2015 WRX/STI spec sheet",
     "url": "https://sube.net/media/pdfs/wrx/2015_WRXSTI_specs.pdf"
    },
    {
     "label": "2020 WRX STI spec sheet",
     "url": "https://subarumedia.iconicweb.com/mediasite/specs/3._2020_WRX_STI_Specs.pdf"
    }
   ]
  },
  {
   "topic": "Oil drain plug torque",
   "text": "Service manual 41.7 N·m / 30.8 lb-ft vs subaru-specs.com 29 lb-ft (40 N·m). Use the manual.",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "2020 WRX service manual mirror (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Subaru/2020/"
    }
   ]
  },
  {
   "topic": "Rear shock lower bolt",
   "text": "Manual 85 N·m / 62.7 lb-ft vs FactionFab coilover instructions 88.5 lb-ft (snippet). Use the manual for OEM-style mounts, the coilover maker's figure for its hardware.",
   "conf": [
    "verified-secondary",
    "unconfirmed"
   ],
   "disputed": true,
   "src": [
    {
     "label": "2020 WRX service manual mirror (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Subaru/2020/"
    }
   ]
  },
  {
   "topic": "\"Stage 2\" definition",
   "text": "COBB's legacy Stage 2 was turbo-back exhaust; NexGen Stage 2 is intake + FMIC + solenoid. Forum \"stage 2\" usually means downpipe. Always state the parts.",
   "conf": [
    "verified",
    "forum"
   ],
   "disputed": true,
   "src": [
    {
     "label": "COBB map notes",
     "url": "https://cobbtuning.atlassian.net/wiki/spaces/PRS/pages/1154154583"
    },
    {
     "label": "COBB AP3-SUB-004 release notes",
     "url": "https://static.cobbtuning.com/support/releasenotes/AP3-SUB-004.html"
    }
   ]
  },
  {
   "topic": "WRX oil grade (resolved)",
   "text": "Service-manual Fluids table specifies 5W-30 synthetic for the 2.0 L. The diag.net shop running 5W-20 was off-spec.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2020 WRX service manual mirror (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Subaru/2020/"
    }
   ]
  },
  {
   "topic": "Clutch kit split (resolved)",
   "text": "Split at VIN J*806877 (230 mm to 240 mm facing, TSB 03-79-18R). Retailer \"2018–2021\" labels are approximate; early-2018 cars take the 230 mm kit.",
   "conf": "verified",
   "src": [
    {
     "label": "Subaru TSB 03-79-18R",
     "url": "https://static.nhtsa.gov/odi/tsbs/2018/MC-10150946-9999.pdf"
    }
   ]
  },
  {
   "topic": "Stock WRX whp",
   "text": "197.7 (PREracing, Unconfirmed) to 213 (Mishimoto) to ~235 (search synthesis). Use ~210–215 whp on a Dynojet-type.",
   "conf": [
    "verified",
    "unconfirmed"
   ],
   "disputed": true,
   "src": [
    {
     "label": "Mishimoto engineering report",
     "url": "https://mishimoto.com/mwdownloads/download/link/id/260"
    }
   ]
  },
  {
   "topic": "TR580 vs TR690",
   "text": "CVT bulletins name TR580 and TR690 for other models; the VA WRX CVT is TR690 in the service-manual index (forum source). No chain-slip bulletin opened lists the VA WRX.",
   "conf": "forum",
   "src": []
  }
 ],
 "overview": {
  "facts": [
   {
    "label": "Scope",
    "text": "VA WRX 2015–2021 with STI notes. The 2022 VB (FA24) is out of scope; 2018 Type RA and 2019 S209 are outside the core scope.",
    "conf": "verified",
    "src": [
     {
      "label": "2015 WRX press kit",
      "url": "https://media.subaru.com/newsrelease.do?id=519"
     }
    ]
   },
   {
    "label": "Fuel",
    "text": "WRX: 91 AKI recommended; 87 allowed with less performance. STI: 91 AKI minimum, 93 recommended (owner's manual \"93 AKI or higher\", 91 allowed).",
    "conf": "verified",
    "src": [
     {
      "label": "2018 WRX/STI owner's manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2018-wrx.pdf"
     },
     {
      "label": "2021 WRX/STI owner's manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2021-wrx.pdf"
     }
    ]
   },
   {
    "label": "AWD",
    "text": "WRX 6MT: viscous-coupling center diff, 50:50. WRX CVT: VTD planetary center diff + transfer clutch, 45:55. STI: multi-mode DCCD, helical LSD front, Torsen rear, 41:59; 2018+ DCCD fully electronic.",
    "conf": "verified",
    "src": [
     {
      "label": "2015 WRX spec sheet",
      "url": "https://subarumedia.iconicweb.com/mediasite/specs/2015_WRX_specs.pdf"
     },
     {
      "label": "2020 WRX STI spec sheet",
      "url": "https://subarumedia.iconicweb.com/mediasite/specs/3._2020_WRX_STI_Specs.pdf"
     }
    ]
   },
   {
    "label": "Dimensions",
    "text": "Wheelbase 104.3 in (both). STI curb weight 3,415–3,514 lb (2020).",
    "conf": "verified",
    "src": [
     {
      "label": "2020 WRX STI spec sheet",
      "url": "https://subarumedia.iconicweb.com/mediasite/specs/3._2020_WRX_STI_Specs.pdf"
     }
    ]
   },
   {
    "label": "Alternator",
    "text": "WRX 130 A; STI 110 A.",
    "conf": "verified",
    "src": [
     {
      "label": "2021 WRX/STI owner's manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2021-wrx.pdf"
     }
    ]
   }
  ],
  "engines": {
   "columns": [
    "Item",
    "WRX (FA20DIT)",
    "STI (EJ257)"
   ],
   "rows": [
    [
     "Engine",
     "2.0 L DOHC flat-4, direct injection, twin-scroll turbo, TMIC, chain-driven cams, D-AVCS",
     "2.5 L DOHC flat-4, port injection, belt-driven cams, D-AVCS, TMIC"
    ],
    [
     "Bore x stroke",
     "86.0 x 86.0 mm",
     "99.5 x 79.0 mm (owner's manual) / 99.6 x 79.0 (2020 sheet)"
    ],
    [
     "Compression",
     "10.6:1",
     "8.2:1 (owner's manual) / 8.1:1 (2020 sheet)"
    ],
    [
     "Output",
     "268 hp @ 5,600; 258 lb-ft @ 2,000–5,200 (every year)",
     "2015–18: 305 hp @ 6,000, 290 lb-ft @ 4,000. 2019–21: 310 hp @ 6,000, 290 lb-ft @ 4,000–5,200"
    ],
    [
     "Peak boost (factory)",
     "15.9 psi",
     "14.7 psi (2015, Unconfirmed) / 16.2 psi (2020 sheet)"
    ],
    [
     "Redline",
     "6,700 rpm (6MT), 6,500 (CVT)",
     "n/s"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "2015 WRX spec sheet",
     "url": "https://subarumedia.iconicweb.com/mediasite/specs/2015_WRX_specs.pdf"
    },
    {
     "label": "2015 WRX press kit",
     "url": "https://media.subaru.com/newsrelease.do?id=519"
    },
    {
     "label": "2020 WRX STI spec sheet",
     "url": "https://subarumedia.iconicweb.com/mediasite/specs/3._2020_WRX_STI_Specs.pdf"
    },
    {
     "label": "2021 WRX/STI owner's manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2021-wrx.pdf"
    }
   ],
   "disputedRows": [
    1,
    2,
    4
   ]
  },
  "transmissions": [
   {
    "label": "WRX",
    "text": "6MT (TY75) or Sport Lineartronic CVT (TR690-family \"High Torque\", 6/8-step manual mode). TY75/TR690 labels from a service-manual index (forum source).",
    "conf": [
     "verified",
     "forum"
    ],
    "src": [
     {
      "label": "2015 WRX spec sheet",
      "url": "https://subarumedia.iconicweb.com/mediasite/specs/2015_WRX_specs.pdf"
     }
    ]
   },
   {
    "label": "STI",
    "text": "6MT TY85 only. 2019: 3rd gear revised from 1.521 to 1.590.",
    "conf": "verified",
    "src": [
     {
      "label": "2020 WRX STI spec sheet",
      "url": "https://subarumedia.iconicweb.com/mediasite/specs/3._2020_WRX_STI_Specs.pdf"
     },
     {
      "label": "Subaru 2019 STI press release",
      "url": "https://media.subaru.com/pressrelease/1374/"
     }
    ]
   }
  ],
  "axles": {
   "columns": [
    "Gear",
    "WRX 6MT",
    "WRX CVT (6-step)",
    "WRX CVT (8-step S#)",
    "STI 2015–18",
    "STI 2019–21"
   ],
   "rows": [
    [
     "1",
     "3.454",
     "3.505",
     "3.505",
     "3.636",
     "3.636"
    ],
    [
     "2",
     "1.947",
     "2.238",
     "2.405",
     "2.235",
     "2.235"
    ],
    [
     "3",
     "1.296",
     "1.641",
     "1.855",
     "1.521",
     "1.590"
    ],
    [
     "4",
     "0.972",
     "1.194",
     "1.544",
     "1.137",
     "1.137"
    ],
    [
     "5",
     "0.780",
     "0.880",
     "1.258",
     "0.971",
     "0.971"
    ],
    [
     "6",
     "0.666",
     "0.611",
     "1.032",
     "0.756",
     "0.756"
    ],
    [
     "7 / 8",
     "n/a",
     "n/a",
     "0.856 / 0.716",
     "n/a",
     "n/a"
    ],
    [
     "R",
     "3.636",
     "2.345",
     "n/s",
     "3.545",
     "3.545"
    ],
    [
     "Final drive",
     "4.111",
     "3.900",
     "3.900",
     "3.900",
     "3.900"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "2015 WRX spec sheet",
     "url": "https://subarumedia.iconicweb.com/mediasite/specs/2015_WRX_specs.pdf"
    },
    {
     "label": "2015 WRX/STI spec sheet",
     "url": "https://sube.net/media/pdfs/wrx/2015_WRXSTI_specs.pdf"
    },
    {
     "label": "2020 WRX STI spec sheet",
     "url": "https://subarumedia.iconicweb.com/mediasite/specs/3._2020_WRX_STI_Specs.pdf"
    }
   ]
  },
  "axleNotes": [],
  "extraTables": [
   {
    "title": "Fluids and capacities",
    "table": {
     "columns": [
      "Fluid",
      "WRX",
      "STI"
     ],
     "rows": [
      [
       "Engine oil, with filter",
       "5.4 US qt (5.1 L); without filter 5.2 qt",
       "4.5 US qt (4.3 L); without filter 4.2 qt"
      ],
      [
       "Oil grade",
       "SAE 5W-30 synthetic specified (5W-40 conventional only as emergency top-up)",
       "5W-30 synthetic required (5W-40 conventional only as top-up)"
      ],
      [
       "Manual trans oil",
       "3.5 qt, GL-5 75W-90 (Subaru Extra MT)",
       "4.3 qt, GL-5 75W-90 / Extra MT"
      ],
      [
       "Front diff (CVT only)",
       "1.5 qt GL-5 75W-90",
       "n/a"
      ],
      [
       "Rear diff",
       "0.8 qt GL-5 75W-90",
       "1.1 qt"
      ],
      [
       "CVT fluid",
       "13.1 qt total, SUBARU High Torque CVT Fluid",
       "n/a"
      ],
      [
       "A/C",
       "1.05 lb R-134a; 3.55 oz DH-PR oil",
       "n/s"
      ],
      [
       "Coolant",
       "8.6 qt (6MT) / 8.8 qt (CVT), Subaru Super Coolant",
       "8.2 qt"
      ],
      [
       "Power steering",
       "Electric (none)",
       "0.7 qt ATF (hydraulic rack)"
      ],
      [
       "Fuel tank",
       "15.9 gal",
       "15.9 gal"
      ],
      [
       "Spark plugs",
       "NGK ILKAR8H6, gap 0.50–0.55 mm, 17.5 N·m (12.9 lb-ft)",
       "NGK SILFR6A (Type RA: ILFR7H); manual lists ILFR7H, gap 0.5–0.6 mm, 21 N·m (15.5 lb-ft)"
      ]
     ],
     "conf": [
      "verified",
      "verified-secondary"
     ],
     "src": [
      {
       "label": "2018 WRX/STI owner's manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2018-wrx.pdf"
      },
      {
       "label": "2021 WRX/STI owner's manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2021-wrx.pdf"
      },
      {
       "label": "2020 WRX service manual mirror (lemon-manuals)",
       "url": "https://lemon-manuals.org.ua/Subaru/2020/"
      }
     ]
    }
   }
  ],
  "yearChanges": [
   {
    "year": "2015",
    "text": "All-new VA. 235/45R17 on 17x8 standard; 245/40R18 on 18x8.5 on Limited/Premium options. CVT optional.",
    "conf": "verified",
    "src": [
     {
      "label": "2015 WRX press kit",
      "url": "https://media.subaru.com/newsrelease.do?id=519"
     }
    ]
   },
   {
    "year": "2016",
    "text": "CVT TCM logic change at VIN G*825251 (cold-slip fix).",
    "conf": "verified",
    "src": [
     {
      "label": "Subaru TSB 16-98-16",
      "url": "https://static.nhtsa.gov/odi/tsbs/2016/SB-10084141-0699.pdf"
     }
    ]
   },
   {
    "year": "2018",
    "text": "Refresh: new fascia, revised suspension and EPS; 6MT new synchro design and smoother clutch take-up. WRX Premium Performance Package (Recaro, red calipers, JURID pads). STI: 19-in wheels (245/35R19), Brembo 6-piston front / 2-piston rear monoblocks with drilled rotors (13.4 in F, 12.8 in R), fully electronic DCCD. Mid-2018 (VIN J*806877) clutch grows 230 → 240 mm.",
    "conf": "verified",
    "src": [
     {
      "label": "Subaru 2018 refresh press release",
      "url": "https://media.subaru.com/pressrelease/1067/1/"
     },
     {
      "label": "2020 WRX STI spec sheet",
      "url": "https://subarumedia.iconicweb.com/mediasite/specs/3._2020_WRX_STI_Specs.pdf"
     }
    ]
   },
   {
    "year": "2019",
    "text": "STI 310 hp (new intake, high-flow exhaust, ECU retune, stronger pistons); 3rd gear 1.590. Series.Gray: 250 units.",
    "conf": "verified",
    "src": [
     {
      "label": "Subaru 2019 STI press release",
      "url": "https://media.subaru.com/pressrelease/1374/"
     }
    ]
   },
   {
    "year": "2021",
    "text": "Last VA. The 2022 VB uses the FA24 (out of scope).",
    "conf": "verified",
    "src": [
     {
      "label": "2015 WRX press kit",
      "url": "https://media.subaru.com/newsrelease.do?id=519"
     }
    ]
   }
  ],
  "mpg": {
   "columns": [
    "Year",
    "WRX 6MT",
    "WRX CVT",
    "STI 6MT"
   ],
   "rows": [
    [
     "2015",
     "21/28/24",
     "19/25/21",
     "17/23/19"
    ],
    [
     "2018",
     "21/27/23",
     "18/24/21",
     "17/22/19"
    ],
    [
     "2021",
     "20/27/23",
     "18/24/21",
     "16/22/18"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "fueleconomy.gov",
     "url": "https://www.fueleconomy.gov/"
    }
   ],
   "note": "EPA city / hwy / combined."
  }
 },
 "wheels": {
  "specs": {
   "columns": [
    "Spec",
    "Value",
    "Confidence"
   ],
   "rows": [
    [
     "Bolt pattern",
     "5x114.3 (WRX and STI, 2015+)",
     "forum"
    ],
    [
     "Lug thread",
     "M12x1.25",
     "verified-secondary"
    ],
    [
     "Hub bore",
     "56.1 mm",
     "forum"
    ],
    [
     "Lug torque",
     "120 N·m / 88.5 lb-ft (manual rounds to 89)",
     "verified"
    ],
    [
     "OEM offset",
     "+55 (18x8.5 / 19x8.5); 17x8 +55 (Forum-reported)",
     "forum"
    ],
    [
     "Tire pressure",
     "33 psi F / 32 psi R",
     "verified"
    ]
   ],
   "src": [
    {
     "label": "2018 WRX/STI owner's manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2018-wrx.pdf"
    },
    {
     "label": "2021 WRX/STI owner's manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2021-wrx.pdf"
    },
    {
     "label": "2020 WRX service manual mirror (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Subaru/2020/"
    },
    {
     "label": "ThreePiece.us VA fitment guide (blog)",
     "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
    }
   ],
   "note": "Bolt pattern, bore and OEM offset come from the ThreePiece blog."
  },
  "stock": {
   "columns": [
    "Model",
    "Wheel",
    "Tire"
   ],
   "rows": [
    [
     "WRX 17",
     "17x8",
     "235/45R17 94W"
    ],
    [
     "WRX/STI 18",
     "18x8.5",
     "245/40R18 97W"
    ],
    [
     "STI 19 (2018+)",
     "19x8.5",
     "245/35R19 89W"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "2018 WRX/STI owner's manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2018-wrx.pdf"
    },
    {
     "label": "2021 WRX/STI owner's manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2021-wrx.pdf"
    }
   ]
  },
  "stances": [
   {
    "id": "flush",
    "title": "Flush",
    "subtitle": "The 18x9.5 +38 to +40 baseline",
    "conf": "forum",
    "src": [
     {
      "label": "ThreePiece.us VA fitment guide (blog)",
      "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
     }
    ],
    "note": "18x9.5 +38 to +40 with 245/40 or 255/35 is the flush baseline. 265/35 means rolling or camber when lowered. ThreePiece.us is a blog, so its rows are Forum-reported.",
    "rows": [
     {
      "drop": "MCA coilovers, no roll",
      "truck": "Clears",
      "wheel": "18x9.5 +38 (the default)",
      "tire": "245/40R18",
      "fit": "Near-flush, no rub",
      "conf": "forum",
      "src": [
       {
        "label": "ThreePiece.us VA fitment guide (blog)",
        "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
       }
      ]
     },
     {
      "drop": "~0.75 in drop (ISC springs)",
      "truck": "n/s",
      "wheel": "18x9.5 +40",
      "tire": "255/35R18",
      "fit": "No rub",
      "conf": "forum",
      "src": [
       {
        "label": "ThreePiece.us VA fitment guide (blog)",
        "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
       }
      ]
     },
     {
      "drop": "BC coilovers",
      "truck": "Clears",
      "wheel": "18x9.5 +38",
      "tire": "255/35R18",
      "fit": "Rear fender roll needed at that height",
      "conf": "forum",
      "src": [
       {
        "label": "ThreePiece.us VA fitment guide (blog)",
        "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
       }
      ]
     },
     {
      "drop": "Stock suspension",
      "truck": "n/s",
      "wheel": "18x9.5 +38",
      "tire": "255/35R18",
      "fit": "Fitment Industries gallery",
      "conf": "unconfirmed",
      "src": []
     },
     {
      "drop": "Stock (COBB wheel)",
      "truck": "n/s",
      "wheel": "18x9.5 +40 (COBB ST-01)",
      "tire": "n/s",
      "fit": "Listed by COBB/RSD",
      "conf": "verified",
      "src": [
       {
        "label": "RallySport Direct",
        "url": "https://www.rallysportdirect.com/"
       }
      ]
     }
    ],
    "colDrop": "Height / mods",
    "colVehicle": "Brembo"
   },
   {
    "id": "aggressive",
    "title": "Aggressive",
    "subtitle": "Wider tire, camber, rolled fenders",
    "conf": "forum",
    "src": [
     {
      "label": "ThreePiece.us VA fitment guide (blog)",
      "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
     }
    ],
    "note": "VA fenders are metal and roll normally; the front lip is a stiff \"U\" shape, more likely to pull than fold. Rear is multilink: use adjustable rear lower control arms plus toe arms, not camber plates. ThreePiece.us is a blog, so its rows are Forum-reported.",
    "rows": [
     {
      "drop": "Coilovers, roll/pull",
      "truck": "Non-Brembo only",
      "wheel": "18x9.5 +39 (dished TSW)",
      "tire": "265/35R18",
      "fit": "OK with work",
      "conf": "forum",
      "src": [
       {
        "label": "ThreePiece.us VA fitment guide (blog)",
        "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
       }
      ]
     },
     {
      "drop": "Coilovers + adjustable rear arms, rolled/pulled",
      "truck": "Clears",
      "wheel": "18x10 +35",
      "tire": "265/35R18",
      "fit": "Aggressive flush; camber needed",
      "conf": "forum",
      "src": [
       {
        "label": "ThreePiece.us VA fitment guide (blog)",
        "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
       }
      ]
     }
    ],
    "colDrop": "Height / mods",
    "colVehicle": "Brembo"
   },
   {
    "id": "stance",
    "title": "Stance",
    "subtitle": "Stretch, low offset, air",
    "conf": "forum",
    "src": [
     {
      "label": "ThreePiece.us VA fitment guide (blog)",
      "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
     }
    ],
    "note": "10.5-in wheels are for stance or widebody builds. ThreePiece.us is a blog, so its rows are Forum-reported.",
    "rows": [
     {
      "drop": "Coilovers, rolled",
      "truck": "Spacer for Brembo",
      "wheel": "19x9.5 +22",
      "tire": "225/35R19 (stretch)",
      "fit": "Slight rub turning",
      "conf": "forum",
      "src": [
       {
        "label": "ThreePiece.us VA fitment guide (blog)",
        "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
       }
      ]
     },
     {
      "drop": "Static on Raceland, roll+pull",
      "truck": "Spacer may be needed",
      "wheel": "18x9.5 +12",
      "tire": "215/40R18 (stretch)",
      "fit": "Stance",
      "conf": "forum",
      "src": [
       {
        "label": "ThreePiece.us VA fitment guide (blog)",
        "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
       }
      ]
     },
     {
      "drop": "Air Lift Performance + adjustable arms",
      "truck": "Clears",
      "wheel": "18x10.5 +21",
      "tire": "235/40R18",
      "fit": "Stance/bagged; no rub aired up",
      "conf": "forum",
      "src": [
       {
        "label": "ThreePiece.us VA fitment guide (blog)",
        "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
       }
      ]
     }
    ],
    "colDrop": "Height / mods",
    "colVehicle": "Brembo"
   }
  ],
  "extraFacts": {
   "title": "Brake clearance",
   "items": [
    {
     "label": "Base WRX",
     "text": "The floating caliper clears the most.",
     "conf": "forum",
     "src": [
      {
       "label": "ThreePiece.us VA fitment guide (blog)",
       "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
      }
     ]
    },
    {
     "label": "4/2-pot Brembo (2015–17 STI, upper WRX trims)",
     "text": "Pokes out 3–5 mm more than the 2018+ 6-pot. Some wheels clear the 6-pot but not the 4-pot; a small slip-on spacer fixes marginal cases.",
     "conf": "forum",
     "src": [
      {
       "label": "ThreePiece.us VA fitment guide (blog)",
       "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
      }
     ]
    },
    {
     "label": "2018+ STI 6/2-pot Brembo",
     "text": "Generally needs 18s minimum; few 17s fit (ADV.1 AV06, Method 501/502, Sparco Terra). Rotors 13.4 in front, 12.8 in rear (2020 sheet).",
     "conf": [
      "forum",
      "verified"
     ],
     "src": [
      {
       "label": "ThreePiece.us VA fitment guide (blog)",
       "url": "https://threepiece.us/blog/20152021-va-wrx-sti-wheel-fitment-guide/"
      },
      {
       "label": "2020 WRX STI spec sheet",
       "url": "https://subarumedia.iconicweb.com/mediasite/specs/3._2020_WRX_STI_Specs.pdf"
      }
     ]
    },
    {
     "label": "Alignment after lowering",
     "text": "Front camber from the strut camber bolt or coilover plates. Factory alignment values were not readable as text. Common street-flush targets of about −1.5° front / −1.5° rear are Forum-reported. EyeSight cars need lane-keep learning and VDC midpoint resets.",
     "conf": [
      "forum",
      "verified-secondary"
     ],
     "src": [
      {
       "label": "2020 WRX service manual mirror (lemon-manuals)",
       "url": "https://lemon-manuals.org.ua/Subaru/2020/"
      }
     ]
    }
   ]
  },
  "tpms": [
   {
    "label": "TPMS",
    "text": "Not covered in the source guide.",
    "conf": "unknown",
    "src": []
   }
  ]
 },
 "problems": [
  {
   "id": "rod-bearing",
   "title": "WRX: FA20DIT rod-bearing failure",
   "years": "2015–21 WRX",
   "symptoms": "Knock, then metal in the pan, often from the #3 rod journal spreading to #2",
   "cause": "Not settled: oil starvation / marginal oil pump at high rpm, low oil level from consumption, DI fuel dilution, high low-rpm torque from aggressive tunes",
   "fix": "No Subaru bulletin. Mitigation: check the dipstick every fill-up; 5W-30 at 3–5k mi (5W-40 for track is common but outside the factory spec); avoid lugging under boost; keep tuned wheel torque ≈300 lb-ft or less. Fix: IAG closed-deck short block $6,999.99–7,329.98; used/reman long blocks about $4–7k installed (Unconfirmed). Videos: \"Subaru WRX; FA20 DIT Engine Tear Down. Rod Bearing Failure.\"; \"Rebuilding a 2015 Subaru WRX FA20DIT engine\".",
   "parts": [
    "iag-shortblock"
   ],
   "conf": [
    "forum",
    "verified"
   ],
   "src": [
    {
     "label": "diag.net FA20 #3 rod bearing thread (guide gave no URL)",
     "url": "https://diag.net/"
    },
    {
     "label": "HP Academy FA20 oiling thread (guide gave no URL)",
     "url": "https://www.hpacademy.com/"
    },
    {
     "label": "ClubWRX (guide gave no URL)",
     "url": "https://www.clubwrx.net/"
    },
    {
     "label": "JM Automotive FA20 mod guide",
     "url": "https://jmautomn.com/mod-guides/2015-wrx-fa20-mod-guide/"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=kcyr940Ufjc"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=_oFK5HoryMA"
    }
   ]
  },
  {
   "id": "ringland-wrx",
   "title": "WRX: Ringland failure / LSPI",
   "years": "2015–21 WRX (WQW-58: 2015 built 2014-01-17 to 2014-09-26)",
   "symptoms": "Blow-by, crankcase pressure, oil burning, low compression",
   "cause": "Cast hypereutectic pistons crack from knock or pre-ignition; DI makes the FA20DIT LSPI-prone",
   "fix": "Service Program WQW-58: ECM reflash for spark knock (pre-ignition), plus boost-control changes at WOT and fuel cut near empty. COBB v200+ OTS maps include the Subaru pre-ignition updates. Prevention: right octane for the map, conservative map or protune, monitor DAM/feedback knock, no lugging.",
   "parts": [
    "cobb-ap3"
   ],
   "conf": [
    "verified",
    "forum"
   ],
   "src": [
    {
     "label": "Subaru WQW-58",
     "url": "https://static.nhtsa.gov/odi/tsbs/2021/MC-10187322-0001.pdf"
    },
    {
     "label": "Subaru WQW-58 (2016)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2016/MC-10120961-9999.pdf"
    },
    {
     "label": "COBB map notes",
     "url": "https://cobbtuning.atlassian.net/wiki/spaces/PRS/pages/1154154583"
    },
    {
     "label": "comeanddriveit.com ringland article (guide gave no URL)",
     "url": "https://comeanddriveit.com/"
    }
   ],
   "tips": [
    {
     "text": "Service Program WQW-58 covers some 2015 WRXs built January 17 to September 26, 2014: pre-ignition under high load can cause rough idle, engine noise, eroded plugs and engine damage, and the fix is an ECM reflash. Have a dealer run a coverage inquiry on the VIN, especially on a used early car.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2016/MC-10120961-9999.pdf",
     "source_name": "Subaru Service Program WQW-58: ECM reprogramming (2015 WRX, 2014-15 Forester 2.0 DIT)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "ringland-sti",
   "title": "STI: EJ257 ringland failure",
   "years": "2015–21 STI (2019+ stronger pistons)",
   "symptoms": "Low compression, often #4; oil burning",
   "cause": "Detonation from bad fuel, lean tunes, or an oil-starved #4",
   "fix": "Diagnose with compression and leak-down. A cracked ringland means a short-block rebuild with forged pistons. 2019+ STI got stronger pistons from the factory.",
   "parts": [],
   "conf": [
    "forum",
    "verified"
   ],
   "src": [
    {
     "label": "comeanddriveit.com ringland article (guide gave no URL)",
     "url": "https://comeanddriveit.com/"
    },
    {
     "label": "Subaru 2019 STI press release",
     "url": "https://media.subaru.com/pressrelease/1374/"
    }
   ],
   "tips": [
    {
     "text": "A cracked EJ257 ringland can hide behind mild signs: an uneven, stumbling cold start, rough idle, occasional morning white smoke and steady puffs of smoke from the open oil cap at idle. One 2008 STI showed 60 psi and 90 percent leakdown on #4 against about 140 psi and 6 to 8 percent elsewhere.",
     "source_url": "https://www.iwsti.com/threads/possible-ringland-issue-failed-compression-test-4-low.175528/",
     "source_name": "IW STi Forum: Possible Ringland Issue - Failed Compression Test #4 Low",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Owners and tuners say get a compression and leakdown test (about $200 at a dealer) before going Stage 2, and while still under warranty; a shop refused to fit this owner's downpipe after seeing the blow-by. After an engine replacement, make sure the old oil cooler is not reused, since it holds metal.",
     "source_url": "https://www.iwsti.com/threads/possible-ringland-issue-failed-compression-test-4-low.175528/",
     "source_name": "IW STi Forum: Possible Ringland Issue - Failed Compression Test #4 Low",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "sti-bearing",
   "title": "STI: Rod bearings and oil pickup",
   "years": "2015–21 STI",
   "symptoms": "Spun rod bearing",
   "cause": "Oil starvation or low oil, plus the known EJ cracked oil-pickup-tube weld",
   "fix": "Owners upgrade the pickup and add a baffled pan. Check the oil level often; EJ257s consume oil.",
   "parts": [],
   "conf": [
    "forum",
    "unconfirmed"
   ],
   "src": [],
   "tips": [
    {
     "text": "Killer B says the EJ25 oil pickup part number has not changed since 2006, and owners still treat a stronger pickup (and pan baffle) as a while-you-are-in-there item at a 60,000 mile service on VA STIs. Others think the failure is rarer on newer cars, and warn not to use so much pan sealant that it clogs the pickup.",
     "source_url": "https://www.iwsti.com/threads/oil-pickup-tube-upgrade-2015-stis.326955/",
     "source_name": "IW STi Forum: Oil Pickup Tube Upgrade 2015+ STIs",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "cvt",
   "title": "WRX: CVT cold slip and warranty",
   "years": "2015–21 WRX CVT",
   "symptoms": "Inconsistent shifting or slipping feel after a cold start",
   "cause": "TCM logic",
   "fix": "TSB 16-98-16 (2015–16): TCM reprogram; production fix from VIN G*825251. TSB 16-107-17R put the 2015 WRX CVT on a 10 yr/100k extension, now expired. Chain-slip/judder bulletins do not list the VA WRX. Tuned: keep torque around 300 lb-ft or less, avoid repeated launches, change CVTF ~every 30k under hard use (Forum-reported). 13.1 qt total; a drain-and-fill exchanges only part.",
   "parts": [],
   "conf": [
    "verified",
    "forum"
   ],
   "src": [
    {
     "label": "Subaru TSB 16-98-16",
     "url": "https://static.nhtsa.gov/odi/tsbs/2016/SB-10084141-0699.pdf"
    },
    {
     "label": "Subaru TSB 16-107-17R",
     "url": "https://static.nhtsa.gov/odi/tsbs/2021/MC-10187317-0001.pdf"
    }
   ],
   "tips": [
    {
     "text": "On 2015-16 WRX CVTs, a slipping feel or inconsistent shifting under moderate throttle before warm-up is addressed by TCM reflash 16-98-16, followed by clearing and relearning AT learning data. Ask the dealer for it if your car was built before VIN G*825251.",
     "source_url": "https://subaru.oemdtc.com/346/tcm-reprogramming-file-availability-to-address-inconsistent-shifting-slipping-concerns-when-cold-2015-2016-subaru-wrx/",
     "source_name": "Subaru TSB 16-98-16: TCM reprogramming, inconsistent shifting/slipping when cold (2015-2016 WRX)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The 2015 WRX CVT is covered by Subaru's extension to 10 years or 100,000 miles from the warranty start date. If you paid for a CVT repair earlier, Subaru offered reimbursement through cvtclaim.subaru.com.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2021/MC-10187319-0001.pdf",
     "source_name": "Subaru of America: CVT Warranty Extension announcement (includes 2015 WRX)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tob",
   "title": "WRX: Throw-out bearing",
   "years": "2015–17 WRX",
   "symptoms": "Chirp or squeal with the pedal released",
   "cause": "Riding the clutch could seize the bearing",
   "fix": "SIB 03-82-18R: release bearing grease changed to a more heat-resistant type.",
   "parts": [],
   "conf": [
    "verified",
    "forum"
   ],
   "src": [
    {
     "label": "Subaru SIB 03-82-18R",
     "url": "https://static.oemdtc.com/TSB/MC-10179416-0001.pdf"
    }
   ],
   "tips": [
    {
     "text": "Subaru changed the 2015-17 WRX release bearing (new part 30502AA160, in production from VIN H9824973) to cure a chirp after a cold start that fades within 2 to 3 minutes. When the clutch is done, inspect the fork pivot, pivot ball and operating rod for wear and grease them with Nichimoly N-130 or Subaru 000041000.",
     "source_url": "https://static.oemdtc.com/NHTSA-PDFs/MC-10237271-0001.pdf",
     "source_name": "Subaru Service Bulletin: Clutch Release Bearing Design Change (2015-2017 WRX)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Subaru says resting your foot on the clutch pedal for long periods overheats the release bearing grease and can seize the bearing, so keep your foot off the pedal at lights. Use grease sparingly on the input shaft splines to avoid contaminating the disc.",
     "source_url": "https://static.oemdtc.com/TSB/MC-10179416-0001.pdf",
     "source_name": "Subaru Service Information Bulletin: Clutch Release (Throw-Out) Bearing Design Change (2015-2017 WRX)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "clutch-split",
   "title": "WRX: Clutch size change and slip",
   "years": "2015–21 WRX 6MT",
   "symptoms": "Stock clutch slips after Stage 2/E85",
   "cause": "Mid-2018 clutch redesign",
   "fix": "TSB 03-79-18R: from VIN J*806877 a new flywheel (12342AA170, yellow paint mark), facing enlarged 230 → 240 mm, matching disc and cover. Order clutch kits by VIN; never mix a 230 mm clutch with a 240 mm flywheel. Many owners remove or drill the clutch delay valve (Forum-reported).",
   "parts": [
    "clutch-exedy-s1",
    "clutch-action-1os"
   ],
   "conf": [
    "verified",
    "forum"
   ],
   "src": [
    {
     "label": "Subaru TSB 03-79-18R",
     "url": "https://static.nhtsa.gov/odi/tsbs/2018/MC-10150946-9999.pdf"
    }
   ],
   "tips": [
    {
     "text": "From VIN J*806877 (mid-2018) the WRX flywheel (12342AA170, yellow paint mark), cover and disc went from 230 to 240 mm facings. Older cars can switch only as a full set, and Subaru says never resurface the flywheel.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2018/MC-10150946-9999.pdf",
     "source_name": "Subaru TSB 03-79-18R: Updating clutch system parts (2015-2018 WRX)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "If a fresh clutch slips in 2nd and 3rd under boost, owners say bleed the whole hydraulic system first; one 2015 fix was just that. A friend's 2017 slipped almost immediately because it was driven hard before break-in and the disc glazed.",
     "source_url": "https://www.clubwrx.net/threads/2015-wrx-new-clutch-slipping-when-accelerating.134615938/",
     "source_name": "ClubWRX: 2015 WRX New Clutch Slipping When Accelerating",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "recalls",
   "title": "Recalls",
   "years": "2015–21",
   "symptoms": "Varies",
   "cause": "Varies",
   "fix": "16V-162: 2015–16 WRX (built 2015-04-10 to 2015-10-21) turbo air-intake duct can crack, causing a stall. 17V-625: 2015 WRX/STI with trunk subwoofer, cargo can damage wiring. 21V-587 (WRG-21): 2018–19 WRX (built 2018-04-20 to 2018-11-01; 10,606 units) fuel pump impeller can deform, causing a stall or no-start. 22V-522: 2015–2021 WRX back-up light switch corrosion. Check your VIN.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA recalls API (2015)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=subaru&model=wrx&modelYear=2015"
    },
    {
     "label": "NHTSA recalls API (2018)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=subaru&model=wrx&modelYear=2018"
    },
    {
     "label": "NHTSA recalls API (2021)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=subaru&model=wrx&modelYear=2021"
    },
    {
     "label": "WRG-21",
     "url": "https://static.nhtsa.gov/odi/rcl/2021/RCRIT-21V587-9534.pdf"
    }
   ]
  },
  {
   "id": "other",
   "title": "Other owner-reported items",
   "years": "2015–21",
   "symptoms": "A/C compressor noise; intake-valve carbon; drivetrain \"buck\"",
   "cause": "DI (no port injection) carbon; soft diff/trans mounts",
   "fix": "Walnut blasting at high mileage; Whiteline/Perrin inserts. The FB-engine oil-consumption bulletins do not apply to the FA20DIT (Unconfirmed).",
   "parts": [
    "whiteline-driveline",
    "perrin-trans-mount"
   ],
   "conf": [
    "forum",
    "unconfirmed"
   ],
   "src": [],
   "tips": [
    {
     "text": "For a creak from the clutch pedal on a 2015 WRX, TSB 12-190-15 traces it to two metal layers in the pedal bracket moving; the fix is a new pedal assembly with its 9 fasteners torqued to 17 ft-lb in sequence and new clevis pins.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2015/SB-10093628-2280.pdf",
     "source_name": "Subaru TSB 12-190-15: Elimination of Creaking Sound from Clutch Pedal Assembly",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  }
 ],
 "guides": [
  {
   "id": "torque",
   "type": "diy",
   "title": "Chassis and engine torque (2020 WRX 6MT manual)",
   "summary": "Tighten bushing bolts at curb weight, wheels loaded.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2020 WRX service manual mirror (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Subaru/2020/"
    },
    {
     "label": "2021 WRX/STI owner's manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/subaru/2021-wrx.pdf"
    }
   ],
   "steps": [
    {
     "text": "Front lower-arm-to-crossmember, rear lateral-link and crossmember-to-body bolts: in diagram only, not readable as text.",
     "conf": "unknown"
    },
    {
     "text": "Oil drain plug: subaru-specs.com says 29 lb-ft; use the manual's 41.7 N·m.",
     "disputed": true
    },
    {
     "text": "STI-specific torque sheet not captured beyond flywheel and plugs.",
     "conf": "unknown"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "N·m",
     "lb-ft"
    ],
    "rows": [
     [
      "Wheel nuts (M12x1.25)",
      "120",
      "88.5 (manual rounds to 89)"
     ],
     [
      "Front axle nut",
      "220",
      "162"
     ],
     [
      "Rear axle nut",
      "190",
      "140"
     ],
     [
      "Hub unit bolts, front / rear",
      "95 / 85",
      "70.1 / 62.7"
     ],
     [
      "Front strut mount to body (top nuts)",
      "20",
      "14.8"
     ],
     [
      "Front strut to knuckle (camber bolt + nut)",
      "155",
      "114.3"
     ],
     [
      "Brake hose bracket to strut",
      "33",
      "24.3"
     ],
     [
      "Front ball joint to knuckle",
      "50",
      "36.9"
     ],
     [
      "Front stabilizer link",
      "60",
      "44.3"
     ],
     [
      "Front stabilizer bushing clamp",
      "25",
      "18.4"
     ],
     [
      "Front caliper body (floating 2-pot, base WRX)",
      "27",
      "19.9"
     ],
     [
      "Front brake hose to caliper",
      "26",
      "19.2"
     ],
     [
      "Front Brembo 4-pot caliper to knuckle",
      "120",
      "88.5"
     ],
     [
      "Rear shock, upper",
      "30",
      "22.1"
     ],
     [
      "Rear shock, lower",
      "85",
      "62.7"
     ],
     [
      "Rear upper arm to subframe / to axle housing",
      "90 / 80",
      "66.4 / 59"
     ],
     [
      "Rear trailing link",
      "110",
      "81.1"
     ],
     [
      "Rear stabilizer clamp / link",
      "30 / 38",
      "22.1 / 28"
     ],
     [
      "Engine oil drain plug (new gasket)",
      "41.7",
      "30.8"
     ],
     [
      "Spark plugs, FA20DIT / EJ257",
      "17.5 / 21",
      "12.9 / 15.5"
     ],
     [
      "Flywheel, FA20DIT 6MT",
      "30 + 30–35°",
      "22.1 + angle"
     ],
     [
      "Flywheel, EJ257",
      "75",
      "55.3"
     ],
     [
      "CVT drive plate",
      "30 + 30–35°",
      "22.1 + angle"
     ],
     [
      "Starter",
      "50",
      "37"
     ],
     [
      "Radiator cap rating",
      "14–18 psi",
      "n/a"
     ],
     [
      "Tie-rod end castle nut (then up to 60° more to align cotter pin)",
      "27",
      "19.9"
     ],
     [
      "Engine mount to front crossmember",
      "60",
      "44.3"
     ],
     [
      "Parking-brake cable/EPB harness nuts at front lateral link",
      "18",
      "13.3"
     ]
    ],
    "disputedRows": [
     14,
     18
    ]
   },
   "parts": []
  },
  {
   "id": "oil",
   "type": "diy",
   "title": "Oil change (WRX)",
   "summary": "5.4 qt 5W-30 synthetic; check the dipstick often.",
   "conf": [
    "forum",
    "verified-secondary"
   ],
   "src": [
    {
     "label": "2020 WRX service manual mirror (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Subaru/2020/"
    }
   ],
   "steps": [
    {
     "text": "17 mm drain; filter under the passenger-side front. Open the filler cap first for a quick drain.",
     "conf": "forum"
    },
    {
     "text": "5.4 qt with filter, 5W-30 synthetic. Drain plug 41.7 N·m (30.8 lb-ft) with a new gasket."
    },
    {
     "text": "Rod-bearing protection: check the level every fill-up; 3–5k mi intervals are the community norm.",
     "conf": "forum"
    }
   ],
   "torque": null,
   "parts": [],
   "tips": [
    {
     "text": "1A Auto torques the 2015-18 WRX drain plug to 31 ft-lb, and fills, runs the engine a few seconds and rechecks the dipstick. The filter is reached from above, so you can lower the car after draining.",
     "source_url": "https://www.1aauto.com/how-to-perform-oil-change-2015-18-subaru-wrx/video/49302",
     "source_name": "1A Auto (video): How to Perform Oil Change 2015-18 Subaru WRX",
     "confidence": "video",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "plugs",
   "type": "diy",
   "title": "Spark plugs (FA20DIT)",
   "summary": "Only 12.9 lb-ft.",
   "conf": [
    "forum",
    "verified-secondary"
   ],
   "src": [
    {
     "label": "2020 WRX service manual mirror (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Subaru/2020/"
    }
   ],
   "steps": [
    {
     "text": "The boxer layout means removing the intake duct and the battery/airbox on the respective sides.",
     "conf": "forum"
    },
    {
     "text": "NGK ILKAR8H6, gap 0.50–0.55 mm, 17.5 N·m (12.9 lb-ft)."
    },
    {
     "text": "Tuned cars commonly shorten intervals to 30k.",
     "conf": "forum"
    }
   ],
   "torque": null,
   "parts": [],
   "tips": [
    {
     "text": "On the boxer coil connectors, do not push the release lever, which gets brittle and snaps; ease the retainer up with a right-angle pick and slide the plug off. A double-swivel plug socket, or a short extension swapped for a longer one partway, clears the frame rails.",
     "source_url": "https://www.iwsti.com/threads/how-to-spark-plugs.266247/",
     "source_name": "IW STi Forum: How-To Spark Plugs (EJ257 STI)",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "coilovers",
   "type": "diy",
   "title": "Coilover install",
   "summary": "Front 2 knuckle bolts + 3 top nuts; rear from the trunk.",
   "conf": [
    "forum",
    "verified-secondary"
   ],
   "src": [
    {
     "label": "2020 WRX service manual mirror (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Subaru/2020/"
    }
   ],
   "steps": [
    {
     "text": "Front: 2 knuckle bolts + 3 top nuts. Mark the camber bolt before removal.",
     "conf": "forum"
    },
    {
     "text": "Rear: remove the trunk side trim for the upper nuts, plus the lower shock bolt.",
     "conf": "forum"
    },
    {
     "text": "Align afterward; EyeSight cars need the lane-keep learning reset and VDC midpoint reset."
    },
    {
     "text": "Rear camber: multilink, so use adjustable rear lower control arms plus toe arms (COBB RLCAs $345)."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Front strut to knuckle",
      "155 N·m (114.3 lb-ft)"
     ],
     [
      "Front strut top nuts",
      "20 N·m (14.8 lb-ft)"
     ],
     [
      "Rear shock upper / lower",
      "30 / 85 N·m (22.1 / 62.7 lb-ft)"
     ]
    ]
   },
   "parts": [
    "coil-bc-br",
    "cobb-rlca"
   ],
   "tips": [
    {
     "text": "Front on a 2015+ WRX: unbolt the brake line (12 mm) and unclip the ABS wire, pull the two 19 mm lower bolts, then the 12 mm top-hat nuts while holding the strut so it does not drop. Measure ride height hub center to fender arch on the ground, stay inside the coilover maker's min and max, and check clearance before driving.",
     "source_url": "https://images.rallysportdirect.com/image/upload/v1597069942/rsd_instructions/Coilover_Install_Instructions_v3.0.pdf",
     "source_name": "FactionFab: F-Spec / FR-Spec / FL-Spec coilover installation instructions v3.0",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "accessport",
   "type": "diy",
   "title": "COBB Accessport install and maps",
   "summary": "Marry, save stock ROM, flash OTS.",
   "conf": "verified",
   "src": [
    {
     "label": "COBB map notes",
     "url": "https://cobbtuning.atlassian.net/wiki/spaces/PRS/pages/1154154583"
    },
    {
     "label": "COBB AP3-SUB-004 release notes",
     "url": "https://static.cobbtuning.com/support/releasenotes/AP3-SUB-004.html"
    },
    {
     "label": "RallySport Direct",
     "url": "https://www.rallysportdirect.com/"
    }
   ],
   "steps": [
    {
     "text": "Marry the device, save the stock ROM, flash OTS (~3 min). Keep the AP to un-marry before dealer visits."
    },
    {
     "text": "AP3-SUB-004 covers 2015–21 WRX (6MT and CVT), 2015–21 STI and 2014–18 Forester XT."
    },
    {
     "text": "Current VA WRX OTS maps (fw 1.7.4.2): Stage1 v400, Stage1+SF, Stage1+BigSF, Stage1+Redline (v400), NexGen Stage2+Redline / +SF (v401), NexGen Stage1+FlexFuel, NexGen Stage2+FlexFuel (6MT). Variants: Boost Select, LWG/HWG, ACN91, Economy, Valet. Built for E10; on E0 run the 91/ACN91 map and datalog."
    },
    {
     "text": "v200+ maps: real-time switching, adjustable launch control and flat-foot shifting, Subaru pre-ignition update merged in. Stage 0, 1 and 1+ are CARB-exempt via the Accessport."
    },
    {
     "text": "CVT: COBB says its CVT maps change launch control only, no transmission-logic changes (Forum-reported). COBB supports Stage 1, 1+ and NexGen Stage 2 on CVT.",
     "conf": "forum"
    }
   ],
   "torque": null,
   "parts": [
    "cobb-ap3"
   ],
   "tips": [
    {
     "text": "DAM starting near 0.69 at every engine start on a 2015+ WRX is normal; COBB says that is the factory reset value and it learns back up as you drive. Some 2015+ intakes have no filter stop, and a filter pushed on too far makes the car run rich, so check it before chasing a tune issue.",
     "source_url": "https://www.cobbtuning.com/subaru-knock-monitoring-and-dit-knock-logic-changes/",
     "source_name": "COBB Tuning: Subaru Knock Monitoring and DIT DAM Strategy Changes",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "stages",
   "type": "swap",
   "title": "Tuning stages and real gains",
   "summary": "State the parts, not the stage number.",
   "conf": [
    "verified",
    "forum"
   ],
   "src": [
    {
     "label": "COBB map notes",
     "url": "https://cobbtuning.atlassian.net/wiki/spaces/PRS/pages/1154154583"
    },
    {
     "label": "JM Automotive FA20 mod guide",
     "url": "https://jmautomn.com/mod-guides/2015-wrx-fa20-mod-guide/"
    },
    {
     "label": "DSPORT 2017 STI test",
     "url": "https://dsportmag.com/the-tech/test-n-tune/test-tune-2017-subaru-wrx-sti-intake-and-tune-beefs-up-the-ej257/"
    }
   ],
   "steps": [
    {
     "text": "Stage 1: stock airbox, stock or COBB cat-back, stock catted downpipe, 91/93 map. Gains (6MT, 91): +10–20 whp / +20–35 wtq (93: +15–25 / +30–45). CVT: +10–15 / +25–35 (93: +15–20 / +30–40) (retailer summary of COBB notes)."
    },
    {
     "text": "Stage 1+FF: CAN Gateway Flex Fuel kit (2015–18: 343650; 2018–21: 344650), fuel pressure kit 344750. ~19.0 psi peak tapering to the 6,900 rpm tuned redline."
    },
    {
     "text": "Legacy COBB Stage 2 = turbo-back exhaust; NexGen Stage 2 = AP + SF intake + FMIC + pipe kit + NexGen boost solenoid (no downpipe). Forum \"stage 2\" usually means downpipe + intake + tune.",
     "disputed": true
    },
    {
     "text": "JM Automotive (load dyno, uncorrected): stock 181/210 → Stage 1 202.5/241.5 → Stage 1+E85 267/294 → Stage 2 228.8/250.1 → Stage 2+E85 290.4/291.4 → FP Blue+E85 316/289.8."
    },
    {
     "text": "The stock TMIC heat-soaks (130–150 °F by 6,500 rpm), so an intercooler is the best Stage 2 part. E85 is the biggest gain per dollar but needs a flex kit and upgraded LPFP. On full E85 with a bigger turbo, the stock HPFP and injectors are at their limit."
    },
    {
     "text": "Keep tuned wheel torque ≈300 lb-ft or less on the stock block (JM)."
    },
    {
     "text": "Other tuners: Delicious Tuning remote protune ($495 in 2017), EcuTek, RomRaider/FastMod.",
     "conf": "forum"
    }
   ],
   "torque": null,
   "parts": [
    "cobb-ap3",
    "cobb-s2-sf",
    "cobb-s1-ff",
    "grimm-fmic"
   ],
   "tips": [
    {
     "text": "COBB says an axle-back or cat-back does not need a map change on the WRX; the J-pipe (downpipe) is the exhaust part that does. Watch boost, AF Learning 1 (within about plus or minus 8 percent), DAM, fine knock learning and intake temperature on any stage.",
     "source_url": "https://www.cobbtuning.com/subaru-knock-monitoring-and-dit-knock-logic-changes/",
     "source_name": "COBB Tuning: Subaru Knock Monitoring and DIT DAM Strategy Changes",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On the stock FA20DIT block, keep a tune at or below about 300 lb-ft at the wheels.",
     "source_url": "https://jmautomn.com/mod-guides/2015-wrx-fa20-mod-guide/",
     "source_name": "JM Automotive FA20 mod guide",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "When asking for a map or advice, list the parts you have, not a \"stage\": COBB and forum stage names do not match.",
     "source_url": "https://cobbtuning.atlassian.net/wiki/spaces/PRS/pages/1154154583",
     "source_name": "COBB map notes",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "sti-swap",
   "type": "swap",
   "title": "STI 6MT (TY85) into a WRX",
   "summary": "Expensive; ratio match matters.",
   "conf": [
    "unconfirmed",
    "forum"
   ],
   "src": [],
   "steps": [
    {
     "text": "STI trans, matching rear diff/ratio (WRX 4.111 vs STI 3.900), driveshaft, axles, shifter/linkage, starter, slave, clutch/flywheel; R160 retained only if splines/ratio match."
    },
    {
     "text": "$5–6k+ parts, $1.5–2.5k labor; real reports $7.2–9.1k, shop-built up to $12–14k."
    },
    {
     "text": "CVT to 6MT: full pedal box, trans, driveline, wiring/ECU (TCM delete), clutch hydraulics. Seldom done.",
     "conf": "forum"
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "engine-swaps",
   "type": "swap",
   "title": "Built FA20DIT, FA24 swap, bigger turbo",
   "summary": "Big-power paths.",
   "conf": [
    "verified",
    "unconfirmed"
   ],
   "src": [
    {
     "label": "RallySport Direct",
     "url": "https://www.rallysportdirect.com/"
    },
    {
     "label": "JM Automotive FA20 mod guide",
     "url": "https://jmautomn.com/mod-guides/2015-wrx-fa20-mod-guide/"
    }
   ],
   "steps": [
    {
     "text": "IAG closed-deck 1000-bhp short block: $6,999.99+.",
     "conf": "verified"
    },
    {
     "text": "FA24 into VA WRX: iBR FA24 swap kit $1,699.99 (kit only) + engine + custom tune (Patterson listing).",
     "conf": "unconfirmed"
    },
    {
     "text": "Bigger turbo (e.g., FP Blue): needs Stage 2 + E85 + LPFP; HPFP for full E85; protune.",
     "conf": "verified"
    },
    {
     "text": "EJ257 into WRX: not practical.",
     "conf": "unconfirmed"
    }
   ],
   "torque": null,
   "parts": [
    "iag-shortblock"
   ]
  }
 ],
 "tipsTitle": "Vehicle health tips",
 "tips": [
  {
   "text": "Keep your foot off the clutch pedal at lights and in traffic; Subaru says long periods of pedal pressure overheat the release bearing grease on 2015-17 WRXs and can seize the bearing.",
   "source_url": "https://static.oemdtc.com/TSB/MC-10179416-0001.pdf",
   "source_name": "Subaru Service Information Bulletin: Clutch Release (Throw-Out) Bearing Design Change (2015-2017 WRX)",
   "confidence": "verified",
   "date_checked": "2026-10-11"
  },
  {
   "text": "Before adding power, and before the powertrain warranty ends, pay for a compression and leakdown test; owners note a cracked ringland can run for months with only a rough idle and smoke from the oil cap.",
   "source_url": "https://www.iwsti.com/threads/possible-ringland-issue-failed-compression-test-4-low.175528/",
   "source_name": "IW STi Forum: Possible Ringland Issue - Failed Compression Test #4 Low",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "If you run an Accessport, keep DAM, feedback knock, fine knock learning, AF Learning 1 and intake temperature on screen; switch to a lower-octane or LWG map and change fuel stations if knock keeps showing at full throttle.",
   "source_url": "https://www.cobbtuning.com/subaru-knock-monitoring-and-dit-knock-logic-changes/",
   "source_name": "COBB Tuning: Subaru Knock Monitoring and DIT DAM Strategy Changes",
   "confidence": "verified",
   "date_checked": "2026-10-11"
  }
 ],
 "dyno": {
  "columns": [
   "Car",
   "Number",
   "Dyno / notes",
   "Confidence"
  ],
  "rows": [
   [
    "2015 WRX 6MT",
    "213 whp / 244 wtq (5-pull average); 210/235 after ECU learning",
    "Mishimoto engineering report",
    "verified"
   ],
   [
    "2015 WRX",
    "197.7 whp / 228 wtq on 92-oct E10",
    "PREracing (snippet)",
    "unconfirmed"
   ],
   [
    "2015–21 WRX",
    "181 hp / 210 lb-ft uncorrected Mustang-type (reads 20–25% low vs a Dynojet)",
    "JM Automotive",
    "verified"
   ],
   [
    "2017 STI",
    "264.62 whp @ 5,600 / 262.8 lb-ft @ 3,300, 16.62 psi",
    "DSPORT Dynojet 424xLC2",
    "verified"
   ],
   [
    "2017 STI, AP + Delicious Tuning protune",
    "264.6 → 276.5 whp, 262.8 → 289.4 wtq (19.3 psi); + COBB SF intake 281.4 whp",
    "DSPORT",
    "verified"
   ],
   [
    "WRX CVT",
    "CVT \"pretty much matches\" 6MT stock, +30–40 hp/tq when tuned",
    "Moto East blog",
    "forum"
   ]
  ],
  "src": [
   {
    "label": "Mishimoto engineering report",
    "url": "https://mishimoto.com/mwdownloads/download/link/id/260"
   },
   {
    "label": "JM Automotive FA20 mod guide",
    "url": "https://jmautomn.com/mod-guides/2015-wrx-fa20-mod-guide/"
   },
   {
    "label": "DSPORT 2017 STI test",
    "url": "https://dsportmag.com/the-tech/test-n-tune/test-tune-2017-subaru-wrx-sti-intake-and-tune-beefs-up-the-ej257/"
   },
   {
    "label": "Moto East CVT results",
    "url": "https://moto-east.com/main/2015-wrx-cvt-results/"
   }
  ],
  "disputedRows": [
   0,
   1,
   2
  ],
  "note": "Use ~210–215 whp on a Dynojet-type as the stock WRX figure."
 },
 "videos": [
  {
   "title": "Subaru WRX; FA20 DIT Engine Tear Down. Rod Bearing Failure.",
   "channel": "n/s",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=kcyr940Ufjc",
   "note": "Cited by title; not watched."
  },
  {
   "title": "Rebuilding a 2015 Subaru WRX FA20DIT engine",
   "channel": "n/s",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=_oFK5HoryMA",
   "note": "Cited by title; not watched."
  },
  {
   "title": "300+ whp VA build",
   "channel": "n/s",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=zWzFGCfTuL0",
   "note": "Cited by title; not watched."
  }
 ],
 "unknowns": [
  "Front lower-arm, crossmember and rear lateral-link bolt torque (diagram-only in the mirror); factory alignment numbers (image tables).",
  "Exact CVTF part number for VA (fluid name confirmed: SUBARU High Torque CVT Fluid).",
  "STI-specific torque sheet (only flywheel and plug values captured).",
  "A COBB-published stock-vs-OTS dyno sheet for VA WRX.",
  "Root cause of FA20DIT rod-bearing failures: no Subaru bulletin; community theories only.",
  "Prices for COBB downpipe and standalone flex kit, and Killer B/EJ pickup prices (STI).",
  "TPMS not covered in the source guide.",
  "RallySport Direct prices came from its catalog feed; links go to the store home."
 ],
 "sellers": [],
 "partCategories": [
  "Tuning",
  "Intake & Intercooler",
  "Exhaust",
  "Suspension",
  "Drivetrain",
  "Lighting & Aero",
  "Engine",
  "Wheels & Tires",
  "Fuel System",
  "Cooling",
  "Electrical",
  "Steering",
  "Interior",
  "Filters & Fluids"
 ],
 "parts": [
  {
   "id": "cobb-ap3",
   "platform": "WRX 2015–2021",
   "category": "Tuning",
   "name": "Accessport V3",
   "brand": "COBB",
   "part_number": "AP3-SUB-004",
   "fitment": {
    "years": "2015–21 WRX/STI, 2014–18 FXT",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 770,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "$693–775 elsewhere (Unconfirmed).",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 770,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On a 2015+ WRX, a DAM dip below 1.0 is expected because the DIT knock logic is more reactive, and how long it takes to climb back says nothing about how bad the event was. Worry when DAM is down and feedback knock is beyond about -2.5 degrees at full boost and wide open throttle.",
     "source_url": "https://www.cobbtuning.com/subaru-knock-monitoring-and-dit-knock-logic-changes/",
     "source_name": "COBB Tuning: Subaru Knock Monitoring and DIT DAM Strategy Changes",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "If knock shows up on an off-the-shelf map, COBB suggests dropping to the map for the next lower octane or an LWG (lower boost) version, and filling at top tier stations. Check for worn MAF or front O2 sensors and boost leaks next.",
     "source_url": "https://www.cobbtuning.com/subaru-knock-monitoring-and-dit-knock-logic-changes/",
     "source_name": "COBB Tuning: Subaru Knock Monitoring and DIT DAM Strategy Changes",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "cobb-s2-sf",
   "platform": "WRX 2015–2021",
   "category": "Tuning",
   "name": "NexGen Stage 2 Power Package w/ SF Intake",
   "brand": "COBB",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 2565,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 2565,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "cobb-s1-ff",
   "platform": "WRX 2015–2021",
   "category": "Tuning",
   "name": "Stage 1 CAN Flex Fuel Power Package",
   "brand": "COBB",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–17 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 1970,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 1970,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "cobb-s2-ff",
   "platform": "WRX 2015–2021",
   "category": "Tuning",
   "name": "NexGen Stage 2 + CAN Flex Fuel (SF intake)",
   "brand": "COBB",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–17 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 3900,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 3900,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "cobb-s1p-sti",
   "platform": "WRX 2015–2021",
   "category": "Tuning",
   "name": "Stage 1+ Power Package w/ AP",
   "brand": "COBB",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–18 STI",
    "models": [
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 1265,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 1265,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "grimm-stealthbox",
   "platform": "WRX 2015–2021",
   "category": "Intake & Intercooler",
   "name": "StealthBox intake",
   "brand": "GrimmSpeed",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–18 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 425,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 425,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Slide the filter only 1 in onto the intake tube (mark it if there is no stopper); the filter has an integrated velocity stack and the MAF reads wrong if it goes further. You have to pull the passenger radiator fan (two 10 mm bolts) for access, so remember to reconnect its harness.",
     "source_url": "https://manuzoid.com/manuals/p14Be-GrimmSpeed%20StealthBox%20Intake%20-%2015-21%20Subaru%20WRX%20Installation%20guide",
     "source_name": "GrimmSpeed: Installing the 2015+ WRX StealthBox Intake (install guide)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "GrimmSpeed says the intake needs a tune and that off-the-shelf maps not written for this intake are not approved, so line up a protune before you install it. Expect 45 to 60 minutes.",
     "source_url": "https://manuzoid.com/manuals/p14Be-GrimmSpeed%20StealthBox%20Intake%20-%2015-21%20Subaru%20WRX%20Installation%20guide",
     "source_name": "GrimmSpeed: Installing the 2015+ WRX StealthBox Intake (install guide)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "mst-cai",
   "platform": "WRX 2015–2021",
   "category": "Intake & Intercooler",
   "name": "Cold air intake",
   "brand": "MST",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 619,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 619,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "grimm-fmic",
   "platform": "WRX 2015–2021",
   "category": "Intake & Intercooler",
   "name": "FMIC kit, silver core",
   "brand": "GrimmSpeed",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 1639,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Black core $1,749. Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 1639,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The stock top-mount intercooler heat-soaks; an intercooler is the most useful Stage 2 part to buy.",
     "source_url": "https://jmautomn.com/mod-guides/2015-wrx-fa20-mod-guide/",
     "source_name": "JM Automotive FA20 mod guide",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "grimm-tmic",
   "platform": "WRX 2015–2021",
   "category": "Intake & Intercooler",
   "name": "TMIC w/ splitter",
   "brand": "GrimmSpeed",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–18 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 899,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 899,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "perrin-fmic-core",
   "platform": "WRX 2015–2021",
   "category": "Intake & Intercooler",
   "name": "Large FMIC core",
   "brand": "Perrin",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 846.6,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 846.6,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "grimm-cp",
   "platform": "WRX 2015–2021",
   "category": "Intake & Intercooler",
   "name": "TMIC charge pipe",
   "brand": "GrimmSpeed",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 319,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 319,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "mishimoto-dp",
   "platform": "WRX 2015–2021",
   "category": "Exhaust",
   "name": "Catted downpipe",
   "brand": "Mishimoto",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 798.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 798.95,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Budget about 2 hours: you unplug both O2 sensors (22 mm), pull the water pump brackets and swap the two lower subframe bolts for the supplied 15 mm ones. Torque the four turbo-to-downpipe nuts to 28 to 32 ft-lb, then fully tighten the three brackets.",
     "source_url": "https://www.carmodsaustralia.com.au/assets/brochures/MMDP-WRX-15C.pdf",
     "source_name": "Mishimoto: 2015 Subaru WRX/STI downpipe parts list and installation guide",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "invidia-dp",
   "platform": "WRX 2015–2021",
   "category": "Exhaust",
   "name": "Catted downpipe w/ 2 bungs (manual)",
   "brand": "Invidia",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX 6MT",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 1247.54,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 1247.54,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "grimm-jpipe",
   "platform": "WRX 2015–2021",
   "category": "Exhaust",
   "name": "Catted J-pipe",
   "brand": "GrimmSpeed",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 829,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "unverified",
     "source_note": "V2 GESI $999.99; Unconfirmed. Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": null,
   "source": "master-guide"
  },
  {
   "id": "mbrp-catback",
   "platform": "WRX 2015–2021",
   "category": "Exhaust",
   "name": "3 in single-exit T304 cat-back",
   "brand": "MBRP",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 759.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 759.99,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Reuse the factory flange bolts and springs and make sure the bolt shoulder passes through the new flange hole; leave everything loose until the whole system is hung. Line each band clamp edge up with the joint, torque the clamps to about 45 lb-ft working front to rear, and recheck after 30 to 60 miles.",
     "source_url": "https://mbrpexhauststore.com/product_images/uploaded_images/instructions/S4803.pdf",
     "source_name": "MBRP: S4803 cat-back installation instructions, 2015+ WRX/STI",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "remark-r1",
   "platform": "WRX 2015–2021",
   "category": "Exhaust",
   "name": "R1-Spec stainless cat-back",
   "brand": "Remark",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 1095,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Range $1,095–1,295; lowest shown. Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 1095,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "corsa-sport",
   "platform": "WRX 2015–2021",
   "category": "Exhaust",
   "name": "Sport quad cat-back, black tips",
   "brand": "Corsa",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 1928.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 1928.99,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "coil-bc-br",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "BR coilovers (VA2)",
   "brand": "BC Racing",
   "part_number": "BR",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "BC Racing (springrates)",
     "price": 1195,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://bc.springrates.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "BC Racing (springrates)",
    "price": 1195,
    "url": "https://bc.springrates.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "coil-factionfab",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "FL-Spec / FR-Spec V2 coilovers",
   "brand": "FactionFab",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 1150,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "FL-Spec $1,150 / FR-Spec V2 $1,350; lowest shown. Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 1150,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Set preload before install: spring seat snug with no compression, then wind it up until there is a 4 mm gap (about one wrench thickness) to the lock collar, and only snug the collars. On a 2015+ WRX the FR-Spec front ranges about 12.875 to 15.75 in hub center to fender (stock is 15.75 in), and it needs an alignment after every height change.",
     "source_url": "https://images.rallysportdirect.com/image/upload/v1597069942/rsd_instructions/Coilover_Install_Instructions_v3.0.pdf",
     "source_name": "FactionFab: F-Spec / FR-Spec / FL-Spec coilover installation instructions v3.0",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Front camber bolt goes in the top hole of the lower mount, with both bolts entering from the rear; on FR-Spec the top-hat slots sit parallel to the firewall. FactionFab torques: top hat nuts 14.5 ft-lb, lower mount nuts 129 ft-lb, brake line bracket 23.6 ft-lb, camber plate bolts 16.2 ft-lb.",
     "source_url": "https://images.rallysportdirect.com/image/upload/v1597069942/rsd_instructions/Coilover_Install_Instructions_v3.0.pdf",
     "source_name": "FactionFab: F-Spec / FR-Spec / FL-Spec coilover installation instructions v3.0",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "coil-hr-rss",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "RSS coilovers",
   "brand": "H&R",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 1692,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 1692,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "coil-kw",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "V1 / V3 coilovers",
   "brand": "KW",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 2414,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "V1 $2,414 / V3 $3,894; lowest shown. Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 2414,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "coil-ohlins",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "Road & Track coilovers",
   "brand": "Ohlins",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 2900,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 2900,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "coil-feal",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "1-way / 2-way coilovers",
   "brand": "Feal",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 1999,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "From $1,999 (1-way) / $4,549 (2-way). Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 1999,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "spring-ast",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "20 mm lowering springs",
   "brand": "AST",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 292.32,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 292.32,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "eibach-proplus",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "Pro-Plus (Pro-Kit + sway bars)",
   "brand": "Eibach",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 963,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 963,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The Pro-Kit springs in the Pro-Plus drop a 2015+ WRX about 0.8 in (front wheel center to fender 14.6 to 13.8 in) on the OE dampers and bump stops. Eibach notes the rear needs its 5.67660K camber kit to bring rear camber back to factory spec, so budget for it with the alignment.",
     "source_url": "https://eibach.com/product-releases/pro-kit-2015-subaru-wrx",
     "source_name": "Eibach: New Product Release, Pro-Kit 2015+ Subaru WRX (7727.140)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Eibach's front bar reuses the OE end links, brackets and hardware: note which way the OE bar sat and fit the new one the same way, slide the end links in first to hold it, and grease the supplied bushings. Plan about 1 hour on a hoist.",
     "source_url": "https://eibach.com/storage/instructions/D3285.pdf",
     "source_name": "Eibach: Anti-Roll-Kit 7727.310 front bar installation instructions, 2015 WRX (D3285)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "perrin-26-front",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "26 mm front sway bar",
   "brand": "Perrin",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 267.75,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 267.75,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "faction-26-front",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "26 mm front sway bar",
   "brand": "FactionFab",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 280,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 280,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "kartboy-links",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "Front end links",
   "brand": "Kartboy",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 145,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 145,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Torque the links with the suspension loaded, on ramps or with a jack under the control arm, so the bushings are not preloaded; use Kartboy spacers or washers to get the links as close to vertical as possible. Hold the old ball stud with a 5 mm Allen key, and on rusty cars expect to need a cutoff wheel.",
     "source_url": "https://www.blingstrom.com/diy-project/2021/4/12/kartboy-front-endlink-install-aluminum-means-lightweight-right",
     "source_name": "Blingstrom: Kartboy front endlink install",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "cobb-rlca",
   "platform": "WRX 2015–2021",
   "category": "Suspension",
   "name": "Adjustable rear lower control arm set (camber)",
   "brand": "COBB",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 345,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 345,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Install the subframe bolt first, then the shock bolt, and leave both loose; set the camber cam bolt to the middle of its range with the curved washer edges toward the arm. COBB says tow or drive straight to an alignment, since the car is not safe on the street until it is aligned.",
     "source_url": "https://cobbtuning.atlassian.net/wiki/spaces/PRS/pages/2638413825/VA+WRX,+WRX+STI+Rear+Lower+Control+Arms",
     "source_name": "COBB Tuning: VA WRX, WRX STI Rear Lower Control Arms install instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Unbolting the rear sway bar (two 12 mm bolts) or at least loosening it makes refitting the arms much easier, and on cars with auto-levelling headlights unhook the ride height sensor from the arm first.",
     "source_url": "https://cobbtuning.atlassian.net/wiki/spaces/PRS/pages/2638413825/VA+WRX,+WRX+STI+Rear+Lower+Control+Arms",
     "source_name": "COBB Tuning: VA WRX, WRX STI Rear Lower Control Arms install instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "whiteline-driveline",
   "platform": "WRX 2015–2021",
   "category": "Drivetrain",
   "name": "Essential driveline bushing kit",
   "brand": "Whiteline",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 364.4,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 364.4,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "perrin-trans-mount",
   "platform": "WRX 2015–2021",
   "category": "Drivetrain",
   "name": "Transmission support (MT)",
   "brand": "Perrin",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX 6MT",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 264,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 264,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Unclip the rear O2 sensor wire from the transmission crossmember before lowering the jack, or you can damage the sensor. Fit the mount with the arrows on the feet toward the front and the logo facing rearward, and torque the four mount-to-transmission bolts to 26 ft-lb.",
     "source_url": "https://files.cdn-files-a.com/uploads/4756979/normal_6233142af1926.pdf",
     "source_name": "PERRIN Performance: Transmission Mount for WRX/STI installation instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Expect more NVH everywhere, especially at high load in 1st and 2nd, and some whine under load in 1st to 3rd is normal. Clunks or clicks on the test drive mean recheck every bolt; use a small pry bar rather than forcing crossmember bolts to line up.",
     "source_url": "https://files.cdn-files-a.com/uploads/4756979/normal_6233142af1926.pdf",
     "source_name": "PERRIN Performance: Transmission Mount for WRX/STI installation instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "sti-shifter",
   "platform": "WRX 2015–2021",
   "category": "Drivetrain",
   "name": "OEM STI short-throw shifter (fits WRX)",
   "brand": "Subaru",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX 6MT",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 349.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 349.95,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The factory short-throw for the 15+ WRX is C1010VA000; the STI one (C1010FG600) does not fit. It shortens throw in the linkage and keeps stock lever height, so some owners add an aftermarket handle on top of it for a shorter throw.",
     "source_url": "https://www.iwsti.com/threads/short-throw-shifter-difference.288869/",
     "source_name": "IW STi Forum: Short Throw Shifter Difference",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Owners who tried both say the factory short throw is only a subtle change and still feels loose; aftermarket shifter bushings and a shift stop (for side play on the 1-2 shift) do more for feel. The 15+ 6MT WRX shifter assembly is more involved to swap than earlier cars.",
     "source_url": "https://www.clubwrx.net/threads/2015-16-wrx-factory-short-throw-shifter-vs-aftermarket.134538066/",
     "source_name": "ClubWRX: 2015-16 WRX Factory Short Throw Shifter vs. Aftermarket?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "clutch-exedy-s1",
   "platform": "WRX 2015–2021",
   "category": "Drivetrain",
   "name": "Stage 1 organic clutch (230 mm era)",
   "brand": "Exedy",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–17 WRX (check VIN split J*806877)",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 344,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 344,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "clutch-action-1os",
   "platform": "WRX 2015–2021",
   "category": "Drivetrain",
   "name": "Stage 1 1OS clutch",
   "brand": "Action Clutch",
   "part_number": "1OS",
   "fitment": {
    "years": "2018–21 WRX (check VIN split J*806877)",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Black Ops Auto Works",
     "price": 582.21,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.blackopsautoworks.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Black Ops Auto Works",
    "price": 582.21,
    "url": "https://www.blackopsautoworks.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "hel-line",
   "platform": "WRX 2015–2021",
   "category": "Drivetrain",
   "name": "Stainless clutch line",
   "brand": "HEL",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX 6MT",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 52.92,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 52.92,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "When bleeding after a braided clutch line swap on a VA, keep the shared reservoir topped right up; one owner kept pulling air because the clutch feed sits near the top of the reservoir internally. The intercooler has to come off for access, and if the first quarter of pedal travel still feels dead, adjust the pedal (the 10 mm lock nut is easier with the gas pedal removed).",
     "source_url": "https://www.iwsti.com/threads/steel-braided-clutch-line-install-tips.301114/",
     "source_name": "IW STi Forum: Steel braided clutch line Install tips",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "olm-yspec",
   "platform": "WRX 2015–2021",
   "category": "Lighting & Aero",
   "name": "Y-Spec LED taillights",
   "brand": "OLM",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 499,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 499,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "olm-hikari",
   "platform": "WRX 2015–2021",
   "category": "Lighting & Aero",
   "name": "Hikari LED headlights (15–17 / 18–21 base & Premium)",
   "brand": "OLM",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 699,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 699,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "apr-gtc300",
   "platform": "WRX 2015–2021",
   "category": "Lighting & Aero",
   "name": "GTC-300 61 in wing",
   "brand": "APR",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 2129,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Listed as $2,129+. Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 2129,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "olm-s208-lip",
   "platform": "WRX 2015–2021",
   "category": "Lighting & Aero",
   "name": "S208-style CF lip",
   "brand": "OLM",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–17",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 519,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 519,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "cobb-st01",
   "platform": "WRX 2015–2021",
   "category": "Wheels & Tires",
   "name": "ST-01 wheel 18x9.5 +40 (each)",
   "brand": "COBB",
   "part_number": "ST-01",
   "fitment": {
    "years": "2015–21",
    "models": [
     "WRX",
     "STI"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 360,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Per wheel. Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 360,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "iag-shortblock",
   "platform": "WRX 2015–2021",
   "category": "Engine",
   "name": "1000 BHP closed-deck FA20DIT short block",
   "brand": "IAG",
   "part_number": "n/s",
   "fitment": {
    "years": "2015–21 WRX",
    "models": [
     "WRX"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "RallySport Direct",
     "price": 6999.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.rallysportdirect.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Range $6,999.99–7,329.98; lowest shown. Price from the RallySport Direct catalog feed; the guide did not record the product URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "RallySport Direct",
    "price": 6999.99,
    "url": "https://www.rallysportdirect.com/",
    "status": "verified"
   },
   "source": "master-guide"
  }
 ],
 "catalog": {
  "index": "data/parts/wrx-2015-2021/index.js",
  "indexBytes": 19832,
  "note": "Repair parts are RockAuto catalog picks (Economy, OE, Premium options per part type) read on the catalog pages of the representative vehicles linked here. Fitment comes from the listing notes for those vehicles only, so other years, trims and cabs show Check fitment.",
  "vehicles": [
   "https://www.rockauto.com/en/catalog/subaru,2017,wrx,2.0l+h4+turbocharged,3435521"
  ],
  "generated": "2026-10-18",
  "files": [
   {
    "file": "data/parts/wrx-2015-2021/0.js",
    "category": "Engine",
    "count": 46,
    "types": 23,
    "from": null,
    "bytes": 32225
   },
   {
    "file": "data/parts/wrx-2015-2021/1.js",
    "category": "Fuel System",
    "count": 10,
    "types": 7,
    "from": null,
    "bytes": 7443
   },
   {
    "file": "data/parts/wrx-2015-2021/2.js",
    "category": "Cooling",
    "count": 15,
    "types": 7,
    "from": null,
    "bytes": 10259
   },
   {
    "file": "data/parts/wrx-2015-2021/3.js",
    "category": "Electrical",
    "count": 23,
    "types": 10,
    "from": null,
    "bytes": 17199
   },
   {
    "file": "data/parts/wrx-2015-2021/4.js",
    "category": "Steering",
    "count": 1,
    "types": 1,
    "from": null,
    "bytes": 936
   },
   {
    "file": "data/parts/wrx-2015-2021/5.js",
    "category": "Drivetrain",
    "count": 2,
    "types": 1,
    "from": null,
    "bytes": 1650
   },
   {
    "file": "data/parts/wrx-2015-2021/6.js",
    "category": "Interior",
    "count": 2,
    "types": 2,
    "from": null,
    "bytes": 1717
   },
   {
    "file": "data/parts/wrx-2015-2021/7.js",
    "category": "Filters & Fluids",
    "count": 6,
    "types": 4,
    "from": null,
    "bytes": 5415
   },
   {
    "file": "data/parts/wrx-2015-2021/8.js",
    "category": "Exhaust",
    "count": 19,
    "types": 10,
    "from": null,
    "bytes": 14105
   }
  ],
  "count": 124
 }
};
