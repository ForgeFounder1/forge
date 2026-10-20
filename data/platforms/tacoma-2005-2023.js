/* Forge platform data: tacoma-2005-2023. Built by scripts/build_app_*.js, then scripts/expand/integrate.py (catalog meta, reference, gap-fill guides). Schema: app/DATA-FORMAT.md */
window.FORGE_PLATFORMS = window.FORGE_PLATFORMS || {};
window.FORGE_PLATFORMS["tacoma-2005-2023"] = {
 "schemaVersion": 1,
 "id": "tacoma-2005-2023",
 "name": "Tacoma",
 "title": "Toyota Tacoma, 2nd and 3rd gen",
 "years": "2005–2023",
 "yearsNote": "G2 = 2005–2015 (N220–N270). G3 = 2016–2023 (N300). G2 2WD non-PreRunner and X-Runner are 5-lug",
 "kind": "truck",
 "make": "Toyota",
 "models": [
  "Tacoma G2 2005–2015 (2WD, PreRunner, 4WD, X-Runner, T/X Baja, TRD Pro)",
  "Tacoma G3 2016–2023 (SR, SR5, TRD Sport, TRD Off-Road, Limited, TRD Pro, Trail Edition)"
 ],
 "tagline": "Two generations, two wheel standards on the 2nd gen. Check your hub before you buy wheels.",
 "compiled": "2026-10-11",
 "pricesChecked": "2026-10-11",
 "conflicts": [
  {
   "topic": "Not every 2nd gen is 6-lug",
   "text": "wheeloffset.net lists 6×139.7 for every 1999–2022 Tacoma. carsandcollectibles lists 2WD non-PreRunner and X-Runner as 5×114.3; wheel-size shows the 2012 2.7 2WD on a 15×6 ET34 wheel. 2WD non-PreRunner trucks and the X-Runner are 5-lug. All 3rd gen trucks are 6×139.7. Check the hub before buying wheels.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "wheeloffset.net Tacoma hub bore",
     "url": "https://wheeloffset.net/hubbore/toyota/tacoma/"
    },
    {
     "label": "carsandcollectibles bolt patterns",
     "url": "https://www.carsandcollectibles.com/bolt-patterns/vehicles/toyota-tacoma.html"
    },
    {
     "label": "wheel-size 2012 Tacoma",
     "url": "https://www.wheel-size.com/size/toyota/tacoma/2012/"
    }
   ]
  },
  {
   "topic": "G2 wheel-nut torque",
   "text": "OM06/OM08/OM10: \"113 N·m (11.5 kgf·m, 85 ft·lbf)\". OM12/OM14 and every G3 OM: \"113 N·m … 83 ft·lbf\". Same metric value; 113 N·m = 83.3 lb-ft. The 2007 FSM axle and suspension tables also print 113 N·m / 83 lb-ft. Use 83 lb-ft (113 N·m).",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2006 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2006-tacoma.pdf"
    },
    {
     "label": "2012 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
    },
    {
     "label": "2007 Tacoma repair manual (FSM mirror)",
     "url": "https://lemon-manuals.la/Honda/2007/Fit%20Sport%2C%20Automatic/Repair%20and%20Diagnosis/External%20Pages/Different%20car/Section%203%20%28Service%20Specifications%29/"
    }
   ]
  },
  {
   "topic": "1GR-FE oil capacity (with filter)",
   "text": "OM06/OM08: 5.8 L (6.1 qt). OM10/OM12/OM14: 4WD & PreRunner 5.5 qt (5.2 L); 2WD (non-PreRunner) 4.8 qt (4.5 L). Later manuals split by drivetrain and list less. Fill to the dipstick; use the manual for your year.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2006 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2006-tacoma.pdf"
    },
    {
     "label": "2012 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
    }
   ]
  },
  {
   "topic": "1GR-FE exhaust manifold torque",
   "text": "FSM07 (Tacoma): 21 N·m (16 lb-ft). FJ Cruiser 1GR manual: 30 N·m (22 lb-ft). Use the Tacoma value, 21 N·m.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2007 Tacoma repair manual (FSM mirror)",
     "url": "https://lemon-manuals.la/Honda/2007/Fit%20Sport%2C%20Automatic/Repair%20and%20Diagnosis/External%20Pages/Different%20car/Section%203%20%28Service%20Specifications%29/"
    },
    {
     "label": "2007 FJ Cruiser 1GR-FE torque (cross-check)",
     "url": "https://www.purefjcruiser.com/docs/2007%20Toyota%20FJ%20Cruiser%20Repair%20Manual/Service%20Specifications/1GR-FE%20Engine%20Mechanical/003000.pdf"
    }
   ]
  },
  {
   "topic": "Spark plug torque",
   "text": "1GR-FE: 20 N·m (15 lb-ft). 2TR-FE: 18 N·m (13 lb-ft). 2GR-FKS: 18 N·m (13 lb-ft). A search extract claimed 20 N·m for 2GR-FKS; a how-to site said 13 lb-ft for the 1GR. Use the factory figure for your engine.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2007 Tacoma repair manual (FSM mirror)",
     "url": "https://lemon-manuals.la/Honda/2007/Fit%20Sport%2C%20Automatic/Repair%20and%20Diagnosis/External%20Pages/Different%20car/Section%203%20%28Service%20Specifications%29/"
    },
    {
     "label": "Tacoma 2016+ repair manual (ttguide mirror)",
     "url": "https://www.ttguide.net/toyota-tacoma-2015-2018-service-manual-171.html"
    }
   ]
  },
  {
   "topic": "Spark plug gap",
   "text": "G2 OMs: 1.1 mm (0.043 in). G3 OMs: 0.8 mm (0.031 in). Both: \"Do not adjust gap\" on iridium plugs. Different plugs per generation. Don't gap either.",
   "conf": "verified",
   "src": [
    {
     "label": "2012 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
    },
    {
     "label": "2018 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2018-tacoma.pdf"
    }
   ]
  },
  {
   "topic": "Crank pulley bolt",
   "text": "1GR-FE: 250 N·m (185 lb-ft). 2TR-FE: 260 N·m (192). 2GR-FKS (FSM-G3 oil-pump page): 260 N·m (192 lb-ft). A secondary list gave 250 N·m for 2GR-FKS. Use 260 N·m for the 2GR-FKS.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2007 Tacoma repair manual (FSM mirror)",
     "url": "https://lemon-manuals.la/Honda/2007/Fit%20Sport%2C%20Automatic/Repair%20and%20Diagnosis/External%20Pages/Different%20car/Section%203%20%28Service%20Specifications%29/"
    },
    {
     "label": "Tacoma 2016+ repair manual (ttguide mirror)",
     "url": "https://www.ttguide.net/toyota-tacoma-2015-2018-service-manual-171.html"
    }
   ]
  },
  {
   "topic": "G3 \"Taco tick\" bulletin",
   "text": "T-SB-0115-22 (Dec 2022) lists 2016–2023 Tacoma. Rev1 (Mar 6, 2023) excludes Tacoma. A tuning-shop article says a later Rev2 restored Tacoma; Rev2 was not opened. Unconfirmed; ask the dealer to check TIS by VIN.",
   "conf": [
    "verified",
    "unconfirmed"
   ],
   "disputed": true,
   "src": [
    {
     "label": "T-SB-0115-22",
     "url": "https://static.nhtsa.gov/odi/tsbs/2022/MC-10230385-9999.pdf"
    },
    {
     "label": "T-SB-0115-22 Rev1",
     "url": "https://static.nhtsa.gov/odi/tsbs/2023/MC-10234314-9999.pdf"
    }
   ]
  },
  {
   "topic": "G2 5-lug backspacing",
   "text": "wheel-size (2012): 15×6 ET34 = 4.84\" backspacing. wheeloffset.net (2005): same wheel 4.34\". 4.84\" matches the usual formula; wheeloffset appears to use bead-seat width. Measure your wheel.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "wheel-size 2012 Tacoma",
     "url": "https://www.wheel-size.com/size/toyota/tacoma/2012/"
    },
    {
     "label": "wheeloffset.net Tacoma hub bore",
     "url": "https://wheeloffset.net/hubbore/toyota/tacoma/"
    }
   ]
  },
  {
   "topic": "RC 3\" lift: cutting?",
   "text": "Rough Country 74530 page: Features say \"no cutting or drilling required\"; the Fitment Notes and description say \"requires minor cutting\" (and drilling). Plan for minor cutting.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "Rough Country 74530",
     "url": "https://www.roughcountry.com/product/configurable/toyota-suspension-lift-kit-745c"
    }
   ]
  },
  {
   "topic": "Rear U-bolt torque (G2)",
   "text": "FSM07: rear spring U-bolt 50 N·m (37 lb-ft), 2WD and 4WD/PreRunner. Lower than many owners expect; don't substitute a forum number.",
   "conf": "verified",
   "src": [
    {
     "label": "2007 Tacoma repair manual (FSM mirror)",
     "url": "https://lemon-manuals.la/Honda/2007/Fit%20Sport%2C%20Automatic/Repair%20and%20Diagnosis/External%20Pages/Different%20car/Section%203%20%28Service%20Specifications%29/"
    }
   ]
  },
  {
   "topic": "First-gen threads dropped",
   "text": "Two TacomaWorld MPG threads (4.56 vs 4.88; \"MPG on 33s\") were in the 1st Gen (1995–2004) subforum, and an Expedition Portal \"3rd Gener's with 4.88's\" thread was about 3rd-gen 4Runners. Not used.",
   "conf": "verified",
   "src": []
  },
  {
   "topic": "T-SB-0016-13 scope",
   "text": "A search extract claimed T-SB-0016-13 was extended to 2016–17. The opened bulletin covers 2005–2013 only. No G3 driveshaft-clunk bulletin was found.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "T-SB-0016-13 Rev2",
     "url": "https://static.nhtsa.gov/odi/tsbs/2013/SB-10061331-2273.pdf"
    }
   ]
  }
 ],
 "overview": {
  "facts": [
   {
    "label": "Generations",
    "text": "G2 = 2005–2015 (N220–N270, \"2nd gen\"). G3 = 2016–2023 (N300, \"3rd gen\"). Sections are split by generation wherever the facts differ.",
    "conf": "verified",
    "src": []
   },
   {
    "label": "Trims (G2)",
    "text": "Base, PreRunner, X-Runner (2005–2013 per wheel-size), SR5, TRD Sport, TRD Off-Road, TRD T/X Baja, TRD Pro (2015). T/X Baja and TRD Pro carry a 1-inch factory lift.",
    "conf": [
     "verified",
     "verified-secondary"
    ],
    "src": [
     {
      "label": "wheel-size 2012 Tacoma",
      "url": "https://www.wheel-size.com/size/toyota/tacoma/2012/"
     },
     {
      "label": "Rough Country 743",
      "url": "https://www.roughcountry.com/product/toyota-leveling-lift-kit-743"
     }
    ]
   },
   {
    "label": "Trims (G3)",
    "text": "SR, SR5, TRD Sport, TRD Off-Road, Limited, TRD Pro, Trail Edition (2021+ per carsandcollectibles).",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "carsandcollectibles bolt patterns",
      "url": "https://www.carsandcollectibles.com/bolt-patterns/vehicles/toyota-tacoma.html"
     }
    ]
   },
   {
    "label": "Recommended oil",
    "text": "G2 (OM12): 0W-20 for the 2TR-FE, 5W-30 for the 1GR-FE. G3 (OM18): 0W-20 (5W-20 allowed temporarily). OM12: using more than 1.1 qt per 600 miles, see a dealer.",
    "conf": "verified",
    "src": [
     {
      "label": "2012 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
     },
     {
      "label": "2018 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2018-tacoma.pdf"
     }
    ]
   },
   {
    "label": "Fuel tank",
    "text": "21.1 gal (G2 and G3).",
    "conf": "verified",
    "src": [
     {
      "label": "2012 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
     },
     {
      "label": "2018 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2018-tacoma.pdf"
     }
    ]
   }
  ],
  "engines": {
   "columns": [
    "Gen",
    "Engine",
    "Output (brochure)",
    "Notes"
   ],
   "rows": [
    [
     "G2 (2005–15)",
     "2.7 L 2TR-FE I4 DOHC 16v VVT-i",
     "159 hp @ 5200 / 180 lb-ft @ 3800",
     "BR08/BR12/BR14/BR15"
    ],
    [
     "G2 (2005–15)",
     "4.0 L 1GR-FE V6 DOHC 24v VVT-i",
     "236 hp @ 5200 / 266 lb-ft @ 4000",
     "BR08–BR15"
    ],
    [
     "G3 (2016–23)",
     "2.7 L 2TR-FE I4",
     "159 hp @ 5200 / 180 lb-ft @ 3800",
     "BR16–BR23"
    ],
    [
     "G3 (2016–23)",
     "3.5 L 2GR-FKS V6 DOHC, direct + port injection, Atkinson-cycle",
     "278 hp @ 6000 / 265 lb-ft @ 4600",
     "Bore × stroke 94.0 × 83.0 mm; CR 11.8 (BR16/BR18)"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "2008 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2008-tacoma.pdf"
    },
    {
     "label": "2012 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2012-tacoma.pdf"
    },
    {
     "label": "2014 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2014-tacoma.pdf"
    },
    {
     "label": "2015 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2015-tacoma.pdf"
    },
    {
     "label": "2016 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2016-tacoma.pdf"
    },
    {
     "label": "2018 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2018-tacoma.pdf"
    },
    {
     "label": "2020 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2020-tacoma.pdf"
    },
    {
     "label": "2023 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2023-tacoma.pdf"
    }
   ]
  },
  "transmissions": [
   {
    "label": "G2",
    "text": "4-speed auto (A340E) on the 2.7 (to 2012 per OM12); 5-speed auto (A750E/A750F) on the V6; 5-speed manual (R155/R155F) on the 2.7; 6-speed manual (RA60/RA60F) on the V6. Codes from the FSM07 spec index.",
    "conf": "verified",
    "src": [
     {
      "label": "2008 Tacoma brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2008-tacoma.pdf"
     },
     {
      "label": "2012 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
     },
     {
      "label": "2007 Tacoma repair manual (FSM mirror)",
      "url": "https://lemon-manuals.la/Honda/2007/Fit%20Sport%2C%20Automatic/Repair%20and%20Diagnosis/External%20Pages/Different%20car/Section%203%20%28Service%20Specifications%29/"
     }
    ]
   },
   {
    "label": "G3",
    "text": "6-speed automatic (AC60E) on both engines; 6-speed manual (RC62F) on the V6; 5-speed manual on the 2.7 early on (BR16/BR18 list \"2.7 … 5-speed manual\"; BR20 lists only 6AT for the 2.7).",
    "conf": "verified",
    "src": [
     {
      "label": "2016 Tacoma brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2016-tacoma.pdf"
     },
     {
      "label": "2018 Tacoma brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2018-tacoma.pdf"
     },
     {
      "label": "2020 Tacoma brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2020-tacoma.pdf"
     }
    ]
   },
   {
    "label": "ATF",
    "text": "G2 4-speed: Toyota ATF Type T-IV, 10.8 qt. G2 5-speed: ATF WS, 11.3 qt (no tow pkg) / 11.5 qt (tow pkg). G3: ATF WS, 2TR 9.2 qt; 2GR 10.6 qt (no tow) / 10.8 qt (tow). All \"reference\" capacities.",
    "conf": "verified",
    "src": [
     {
      "label": "2012 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
     },
     {
      "label": "2018 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2018-tacoma.pdf"
     }
    ]
   }
  ],
  "axles": {
   "columns": [
    "Gen",
    "Engine / trans",
    "2WD",
    "4WD / PreRunner"
   ],
   "rows": [
    [
     "G2",
     "2.7 manual",
     "3.31",
     "4.10"
    ],
    [
     "G2",
     "2.7 automatic",
     "3.58",
     "3.58 (PreRunner) / 4.10 (4WD)"
    ],
    [
     "G2",
     "4.0 V6 manual",
     "3.15 (X-Runner, 6MT)",
     "3.73"
    ],
    [
     "G2",
     "4.0 V6 automatic",
     "n/a",
     "3.73"
    ],
    [
     "G3",
     "2.7 automatic",
     "4.30",
     "4.30"
    ],
    [
     "G3",
     "2.7 manual (2016, 5MT)",
     "3.909 (BR16 only)",
     "3.909 (BR16 only)"
    ],
    [
     "G3",
     "3.5 V6 automatic",
     "3.909",
     "3.909"
    ],
    [
     "G3",
     "3.5 V6 manual (6MT)",
     "4.30",
     "4.30"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "2008 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2008-tacoma.pdf"
    },
    {
     "label": "2010 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2010-tacoma.pdf"
    },
    {
     "label": "2012 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2012-tacoma.pdf"
    },
    {
     "label": "2014 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2014-tacoma.pdf"
    },
    {
     "label": "2015 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2015-tacoma.pdf"
    },
    {
     "label": "2016 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2016-tacoma.pdf"
    },
    {
     "label": "2018 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2018-tacoma.pdf"
    },
    {
     "label": "2020 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2020-tacoma.pdf"
    },
    {
     "label": "2022 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2022-tacoma.pdf"
    },
    {
     "label": "2023 Tacoma brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2023-tacoma.pdf"
    },
    {
     "label": "2006 4×2 brochure (Ken Garff)",
     "url": "https://pictures.dealer.com/kengarffhamertoyota/06_tacoma_4x2.pdf"
    }
   ],
   "note": "G2 from BR12 (same pattern BR08, BR10, BR14, BR15 and the 2006 4×2 brochure). G3 brochures list one ratio per engine/trans. 2005 and 2007 brochures not found: Unconfirmed for those years."
  },
  "axleNotes": [
   {
    "label": "Transfer case (4WD)",
    "text": "1.00 / 2.57 (G2 BR08, BR10; G3 all years).",
    "conf": "verified",
    "src": [
     {
      "label": "2008 Tacoma brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2008-tacoma.pdf"
     },
     {
      "label": "2016 Tacoma brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2016-tacoma.pdf"
     }
    ]
   },
   {
    "label": "G3 rear axles",
    "text": "BD20D (8.75 in per Nitro's listing; non-locker) and BD22A / BD22AN (BD22AN = with e-locker), named in FSM-G3 and recalls.",
    "conf": [
     "verified",
     "verified-secondary"
    ],
    "src": [
     {
      "label": "Tacoma 2016+ repair manual (ttguide mirror)",
      "url": "https://www.ttguide.net/toyota-tacoma-2015-2018-service-manual-171.html"
     },
     {
      "label": "Nitro gear package",
      "url": "https://unit1203.com/products/nitro-gear-axle-16-23-tacoma-8-75-gear-package-kit"
     }
    ]
   }
  ],
  "extraTables": [
   {
    "title": "Fluids and capacities (OMs)",
    "table": {
     "columns": [
      "Item",
      "G2 (OM12 / OM14)",
      "G3 (OM18 / OM20 / OM22)"
     ],
     "rows": [
      [
       "Engine oil, with filter",
       "2TR: 6.1 qt (5.8 L). 1GR: 5.5 qt 4WD/PreRunner, 4.8 qt 2WD",
       "2TR: 6.2 qt (5.9 L). 2GR: 6.1 qt no tow pkg, 6.2 qt tow pkg"
      ],
      [
       "Engine oil, without filter",
       "2TR 5.4 qt; 1GR 5.2 qt (4WD/PR) / 4.4 qt (2WD)",
       "2TR 5.8 qt; 2GR 5.9 qt"
      ],
      [
       "Coolant",
       "2TR 9.1 qt (AT) / 9.2 (MT); 1GR 10.1 qt (AT) / 10.3 (MT)",
       "2TR 9.1 (AT) / 9.2 (MT); 2GR 10.5 qt (AT, no tow) / 11.1 (AT, tow) / 10.1 (MT, no tow) / 10.8 (MT, tow)"
      ],
      [
       "Coolant type",
       "Toyota Super Long Life (or equivalent HOAT, no silicate/amine/nitrite/borate)",
       "same"
      ],
      [
       "Front diff (4WD)",
       "1.59 qt (1.50 L)",
       "1.6 qt (1.5 L)"
      ],
      [
       "Rear diff",
       "3.66 qt 2WD (non-PR); 3.12 qt 4WD & PreRunner",
       "AT: 3.1 / 3.22 / 4.0 / 4.2 qt by model code and locker; MT: 4.0 qt"
      ],
      [
       "Diff oil",
       "Toyota Genuine Differential Gear Oil LT 75W-85 GL-5",
       "same"
      ],
      [
       "Transfer case",
       "1.1 qt, GL-4/GL-5 75W-90",
       "1.1 qt, Toyota Transfer Gear Oil LF, 75W"
      ],
      [
       "Manual trans",
       "2TR 2WD 2.7 qt / 4WD 2.3 qt; 1GR 1.9 qt; GL-4/GL-5 75W-90",
       "2.6 qt, Toyota MT gear oil GL-3 (GL-4) 75W-90"
      ],
      [
       "Brake/clutch fluid",
       "DOT 3 / SAE J1703",
       "same"
      ],
      [
       "Fuel tank",
       "21.1 gal",
       "21.1 gal"
      ],
      [
       "Spark plugs",
       "2TR DENSO SK20HR11; 1GR DENSO K20HR-U11 / NGK LFR6C11; gap 1.1 mm",
       "2TR DENSO FK20HR-A8; 2GR DENSO FK20HBR8; gap 0.8 mm"
      ],
      [
       "Wheel nuts",
       "83 lb-ft (113 N·m) (OM06–OM10 print 85)",
       "83 lb-ft (113 N·m)"
      ]
     ],
     "conf": "verified",
     "src": [
      {
       "label": "2012 Tacoma Owner's Manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
      },
      {
       "label": "2014 Tacoma Owner's Manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2014-tacoma.pdf"
      },
      {
       "label": "2018 Tacoma Owner's Manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2018-tacoma.pdf"
      },
      {
       "label": "2020 Tacoma Owner's Manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2020-tacoma.pdf"
      },
      {
       "label": "2022 Tacoma Owner's Manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2022-tacoma.pdf"
      }
     ]
    }
   }
  ],
  "yearChanges": [
   {
    "year": "2005",
    "text": "G2 launch. TPMS in some 2005 configurations (listed \"With TPMS\" and \"Without TPMS\"). OM06 describes a TPMS that monitors all tires including the spare.",
    "conf": "verified",
    "src": [
     {
      "label": "carsandcollectibles bolt patterns",
      "url": "https://www.carsandcollectibles.com/bolt-patterns/vehicles/toyota-tacoma.html"
     },
     {
      "label": "2006 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2006-tacoma.pdf"
     }
    ]
   },
   {
    "year": "2005–2008",
    "text": "OMs give lug torque as 85 lb-ft (rounding; 113 N·m = 83 lb-ft).",
    "conf": "verified",
    "src": [
     {
      "label": "2006 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2006-tacoma.pdf"
     }
    ]
   },
   {
    "year": "2009+",
    "text": "Per a customtacos member, the APR X-1 tuner didn't support 2009 trucks; MAPECU2 did (2010 post).",
    "conf": "forum",
    "src": [
     {
      "label": "customtacos 1GR stock rwhp",
      "url": "https://www.customtacos.com/threads/1gr-fe-stock-rwtq-rwhp.142057/"
     }
    ]
   },
   {
    "year": "2012",
    "text": "G2 facelift: new hood, grille, headlights and bumper; fenders unchanged. Owner manual oil table now split 2WD vs 4WD/PreRunner.",
    "conf": "verified",
    "src": [
     {
      "label": "2012 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
     }
    ]
   },
   {
    "year": "2016",
    "text": "G3 launch. 2GR-FKS V6, 6AT AC60E, 6MT on V6. Rear axle recall H0G (2016–17 BD20D).",
    "conf": "verified",
    "src": [
     {
      "label": "2016 Tacoma brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/toyota/2016-tacoma.pdf"
     }
    ]
   },
   {
    "year": "2017–2023",
    "text": "Rear-axle noise bulletins (T-SB-0023-19, T-SB-0013-18, T-SB-0045-23). See Problems.",
    "conf": "verified",
    "src": []
   }
  ],
  "mpg": null
 },
 "wheels": {
  "specs": {
   "columns": [
    "Item",
    "G2 2005–15 6-lug (4WD, PreRunner)",
    "G2 2005–15 5-lug (2WD non-PreRunner, X-Runner)",
    "G3 2016–23 (all)"
   ],
   "rows": [
    [
     "Bolt pattern",
     "6×139.7 (6×5.5)",
     "5×114.3 (5×4.5)",
     "6×139.7"
    ],
    [
     "Hub bore",
     "106.1 mm",
     "60.1 mm (wheeloffset 2005 page; checkfitment labels it \"Candidate\", not OEM-verified)",
     "106.1 mm"
    ],
    [
     "Lug thread",
     "M12×1.5 nuts",
     "M12×1.5 (wheeloffset lists one thread for all)",
     "M12×1.5"
    ],
    [
     "Lug torque",
     "83 lb-ft (113 N·m)",
     "83 lb-ft (113 N·m)",
     "83 lb-ft (113 N·m)"
    ],
    [
     "Lift/level kits in this guide",
     "Rough Country 743, 74530, 747.20 (G2)",
     "None: RC kits exclude 5-lug; no 5-lug lift source opened",
     "Rough Country 743, 74530, 75820"
    ],
    [
     "Interchange",
     "6-lug wheels fit G3 pattern and bore",
     "Does NOT take 6-lug Tacoma wheels. No practical 5-to-6-lug conversion (Unconfirmed, search extract)",
     "Same pattern and bore as G2 6-lug"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "wheeloffset.net Tacoma hub bore",
     "url": "https://wheeloffset.net/hubbore/toyota/tacoma/"
    },
    {
     "label": "carsandcollectibles bolt patterns",
     "url": "https://www.carsandcollectibles.com/bolt-patterns/vehicles/toyota-tacoma.html"
    },
    {
     "label": "wheel-size 2012 Tacoma",
     "url": "https://www.wheel-size.com/size/toyota/tacoma/2012/"
    },
    {
     "label": "wheel-size 2019 Tacoma",
     "url": "https://www.wheel-size.com/size/toyota/tacoma/2019/"
    },
    {
     "label": "2012 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
    },
    {
     "label": "2018 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2018-tacoma.pdf"
    }
   ],
   "disputedRows": [
    0,
    1
   ],
   "note": "wheeloffset.net wrongly lists every Tacoma as 6-lug. Check your hub before buying wheels."
  },
  "stock": {
   "columns": [
    "Gen / trim",
    "Tire",
    "Wheel",
    "Offset / backspacing",
    "Placard (F/R)"
   ],
   "rows": [
    [
     "G2 5-lug 2WD",
     "P215/70R15 97S",
     "15×6JJ",
     "ET34 / 123 mm (4.84\"); wheeloffset says 4.34\"",
     "29/32 psi (OM06); 30/33 (OM12)"
    ],
    [
     "G2",
     "P245/75R16 109S",
     "16×7J/JJ",
     "ET30 / 132 mm (5.20\")",
     "29/29 (OM06); 30/30 (OM12)"
    ],
    [
     "G2",
     "P265/70R16 111T",
     "16×7JJ",
     "ET30 / 132 mm",
     "29/32"
    ],
    [
     "G2",
     "P265/65R17 110S",
     "17×7½JJ",
     "ET30 / 138 mm (5.43\")",
     "29/29"
    ],
    [
     "G2 (2012+)",
     "P265/60R18 109H",
     "18×7.5J",
     "ET25 / 133 mm",
     "30 psi"
    ],
    [
     "G2 X-Runner (5-lug)",
     "P255/45R18 99V",
     "18×8JJ",
     "backspacing 144 mm (5.67\")",
     "35/35"
    ],
    [
     "G3",
     "P245/75R16 109S",
     "16×7J",
     "ET25 / 127 mm (5.00\")",
     "32 psi"
    ],
    [
     "G3",
     "265/70R16 112T",
     "16×7J",
     "ET25 / 127 mm",
     "30 psi"
    ],
    [
     "G3",
     "P265/65R17 110S",
     "17×7½J",
     "ET30 / 138 mm (5.43\")",
     "29 psi"
    ],
    [
     "G3",
     "P265/60R18 109H",
     "18×7½J",
     "ET30 / 138 mm",
     "29 psi"
    ],
    [
     "G3 (non-OE options, wheel-size)",
     "265/70R16 117S (TRD Pro-style)",
     "16×7 ET13; 16×7.5 ET10; 17×7 ET4",
     "as listed",
     "n/s"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "2006 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2006-tacoma.pdf"
    },
    {
     "label": "2012 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
    },
    {
     "label": "2018 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2018-tacoma.pdf"
    },
    {
     "label": "2020 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2020-tacoma.pdf"
    },
    {
     "label": "wheel-size 2012 Tacoma",
     "url": "https://www.wheel-size.com/size/toyota/tacoma/2012/"
    },
    {
     "label": "wheel-size 2019 Tacoma",
     "url": "https://www.wheel-size.com/size/toyota/tacoma/2019/"
    },
    {
     "label": "wheeloffset.net Tacoma hub bore",
     "url": "https://wheeloffset.net/hubbore/toyota/tacoma/"
    }
   ],
   "disputedRows": [
    0
   ]
  },
  "stances": [
   {
    "id": "leveled",
    "title": "Leveled (6-lug)",
    "subtitle": "Rough Country 743, 2\" composite spacer, 2005–2023, $49.95",
    "conf": "verified",
    "src": [
     {
      "label": "Rough Country 743",
      "url": "https://www.roughcountry.com/product/toyota-leveling-lift-kit-743"
     }
    ],
    "note": "Not for 5-lug trucks (G2 2WD non-PreRunner, X-Runner), T/X Baja or TRD Pro (1\" factory lift). RC says up to 32\" tires. No trimming unless noted.",
    "rows": [
     {
      "wheel": "Factory 17s",
      "tire": "265/70R17",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "17×8.5 +18/+20",
      "tire": "31×10.50R17",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "17×9 0/+1",
      "tire": "245/70, 255/65, 265/65, 265/70R17",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "18×9 0/+1",
      "tire": "265/60R18",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "18×9 0/+1",
      "tire": "265/65R18",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "20×9 0/+1",
      "tire": "245/55, 265/50, 265/55R20, 32×11.50R20",
      "fit": "No trim",
      "conf": "verified"
     }
    ]
   },
   {
    "id": "lift-3",
    "title": "Lifted 3\" (6-lug)",
    "subtitle": "Rough Country 74530, 2005–2023, from $259.95 (red spacer $269.95)",
    "conf": "verified",
    "disputed": true,
    "src": [
     {
      "label": "Rough Country 74530",
      "url": "https://www.roughcountry.com/product/configurable/toyota-suspension-lift-kit-745c"
     }
    ],
    "note": "Strut spacers + 2\" rear blocks + N3 shocks. Page contradicts itself on cutting; plan for minor cutting. A carrier-bearing drop (1776BOX1) is advised with a 2-piece driveshaft. Not for 5-lug trucks (G2 2WD non-PreRunner, X-Runner), T/X Baja or TRD Pro (1\" factory lift).",
    "rows": [
     {
      "wheel": "Factory 16s",
      "tire": "285/75R16",
      "fit": "With 0.25\" spacer",
      "conf": "verified"
     },
     {
      "wheel": "Factory 17s",
      "tire": "285/70R17",
      "fit": "With 0.25\" spacer",
      "conf": "verified"
     },
     {
      "wheel": "17×8.5 / 17×9 at 0/+1 (and -12 on 17×9)",
      "tire": "265/70R17",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "17×8.5 / 17×9 at 0/+1 (and -12 on 17×9)",
      "tire": "285/70R17",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "18×8.5 0/+1",
      "tire": "265/65, 275/65R18",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "18×8.5 0/+1",
      "tire": "285/65R18",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "18×9 0/+1/-12",
      "tire": "275/65R18",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "18×9 0/+1/-12",
      "tire": "265/65 and 285/65R18",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "20×9 0/+1/-12",
      "tire": "285/55R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "20×10 -18/-19/-25",
      "tire": "265/55R20",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "22×10 -18/-19/-25",
      "tire": "285/45R22",
      "fit": "No trim",
      "conf": "verified"
     }
    ]
   },
   {
    "id": "lift-6-g3",
    "title": "Lifted 6\" (G3)",
    "subtitle": "Rough Country 75820, 2016–2023, from $1,149.95 (N3 $1,499.95; M1 $1,759.95; Vertex $3,199.95)",
    "conf": "verified",
    "src": [
     {
      "label": "Rough Country 75820",
      "url": "https://www.roughcountry.com/product/configurable/toyota-suspension-lift-kit-75820c"
     }
    ],
    "note": "G3 only. Lifted knuckles, front and rear crossmembers, fabricated blocks. Requires cutting and drilling. Factory wheels will not work (backspacing hits the knuckles). Not for TRD Pro / T/X Baja / 5-lug.",
    "rows": [
     {
      "wheel": "17×8.5 0/+1; 17×9 -12/0/+1",
      "tire": "33×12.50R17, 285/70R17",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "18×8.5 / 18×9",
      "tire": "33×12.50R18, 285/65, 275/65, 305/60R18",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "20×9",
      "tire": "285/55, 305/55, 33×12.50R20",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "20×10 -18/-19/-25",
      "tire": "285/55, 305/55, 33×12.50R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "22×10",
      "tire": "305/45R22",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "22×10",
      "tire": "33×12.50R22",
      "fit": "Minor trimming",
      "conf": "verified"
     }
    ]
   },
   {
    "id": "lift-6-g2",
    "title": "Lifted 6\" (G2 6-lug)",
    "subtitle": "Rough Country 747.20, 2005–2015, from $1,049.95 (N3 747.23 $1,399.95; M1 74740 $1,659.95)",
    "conf": "verified",
    "src": [
     {
      "label": "Rough Country 747.20",
      "url": "https://www.roughcountry.com/product/configurable/toyota-suspension-lift-kit-747c"
     }
    ],
    "note": "G2 6-lug only. Lifted knuckles, crossmembers, fabricated blocks; \"up to 33x12.50\". Requires cutting and drilling; factory wheels won't work; not for TRD Pro, T/X Baja or 5-lug.",
    "rows": [
     {
      "wheel": "17×8.5 0/+1; 17×9 -12/0/+1",
      "tire": "33×12.50R17, 285/70R17",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "18×8.5 / 18×9",
      "tire": "33×12.50R18, 285/65, 275/65, 305/60R18",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "20×9",
      "tire": "285/55, 305/55, 33×12.50R20",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "20×10 -18/-19/-25",
      "tire": "everything listed",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "22×10",
      "tire": "305/45R22",
      "fit": "No trim",
      "conf": "verified"
     },
     {
      "wheel": "22×10",
      "tire": "33×12.50R22",
      "fit": "Minor trimming",
      "conf": "verified"
     }
    ]
   }
  ],
  "tpms": [
   {
    "label": "G2",
    "text": "2005 offered with and without TPMS. OM06 system monitors all tires including the spare. Replacing a TPMS valve/transmitter requires dealer ID registration (OM12).",
    "conf": "verified",
    "src": [
     {
      "label": "carsandcollectibles bolt patterns",
      "url": "https://www.carsandcollectibles.com/bolt-patterns/vehicles/toyota-tacoma.html"
     },
     {
      "label": "2006 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2006-tacoma.pdf"
     },
     {
      "label": "2012 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
     }
    ]
   },
   {
    "label": "G3 initialize (OM18)",
    "text": "Set cold pressures → ignition ON → press and hold the TPMS reset switch until the light blinks slowly 3 times → drive ~25 mph+ for ~10 minutes. Initialize after rotations and tire-size changes. FSM: new grommet and valve core every install; valve nut 4.0 N·m (35 in-lb); then \"Register Transmitter ID\".",
    "conf": "verified",
    "src": [
     {
      "label": "2018 Tacoma Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2018-tacoma.pdf"
     },
     {
      "label": "Tacoma 2016+ repair manual (ttguide mirror)",
      "url": "https://www.ttguide.net/toyota-tacoma-2015-2018-service-manual-171.html"
     }
    ]
   },
   {
    "label": "Sensor part numbers",
    "text": "G2 42607-04010/-04011 and 42607-06011/-06012; G3 42607-04020. 315 MHz. Search extracts only.",
    "conf": "unconfirmed",
    "src": []
   },
   {
    "label": "Lowered fitment",
    "text": "G3 lowered owner fitment and G2 2/3 and 3/4 drop tire/wheel results: not found. Lowering kits are priced on Parts.",
    "conf": "unknown",
    "src": []
   }
  ]
 },
 "problems": [
  {
   "id": "frame-rust",
   "title": "G2: Frame rust",
   "years": "2005–2010",
   "symptoms": "Perforation of the frame, especially in salt states",
   "cause": "Corrosion",
   "fix": "Class settlement approved May 21, 2017: frames meeting the Rust Perforation Standard got replacement at no cost (Warranty Enhancement ZH6). Frames that passed got Corrosion Resistant Compound under LSC H0F, only in 20 cold-climate states + DC; CRC application ended May 20/21, 2019 (the two Toyota documents give both dates). Toyota CRC kit P/N 00289-T00KT-DS (inside frame 712AM wax, outside Noxudol 300S). Videos on checking a frame: \"RUST Damage! How to check your Toyota frame.\" (JDesigns); \"Toyota Frames, What to Know Part 1.\" (Rustless Rides).",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "ZH6 policy",
     "url": "https://static.oemdtc.com/NHTSA-PDFs/MC-10132689-9999.pdf"
    },
    {
     "label": "Toyota 2017 notice",
     "url": "https://static.nhtsa.gov/odi/tsbs/2017/MC-10132683-9999.pdf"
    },
    {
     "label": "H0F tech instructions",
     "url": "https://static.nhtsa.gov/odi/tsbs/2017/MC-10152149-9999.pdf"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=HhiJN6h0sRs"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=mGshg8C2wLc"
    }
   ],
   "tips": [
    {
     "text": "Under LSC K0D, dealers in cold-climate states inspect 2011-2017 Tacoma frames and apply corrosion-resistant compound or plugs free; that step is required to keep CSP ZKA frame replacement coverage, which runs 12 years from first use. A 2015-2017 truck can still be inside that window in 2026.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2019/MC-10169416-9999.pdf",
     "source_name": "NHTSA: Toyota LSC K0D Frame Corrosion Resistant Compound remedy notice",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Owners prefer oily coatings like Fluid Film or Woolwax over POR15 or paint because they wick into the sandwiched frame seams where salt water collects. Apply in warm weather so it creeps, and wear a respirator when spraying.",
     "source_url": "https://www.tacomaworld.com/threads/some-questions-about-different-types-of-frame-rust-prevention-gen-2-5-frame-warranty.781133/",
     "source_name": "Tacoma World: Some questions about different types of frame rust prevention & Gen 2.5 frame warranty",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "leaf-spring",
   "title": "G2: Rear leaf spring fracture",
   "years": "2005–2011 PreRunner & 4×4 (built Sept 14, 2004 – Dec 6, 2010)",
   "symptoms": "Rear leaf spring fracture",
   "cause": "Springs sit above the axle on PreRunner and 4×4; 2WD trucks use the same spring below the axle, so Toyota says the problem doesn't occur there",
   "fix": "Recall E02 / NHTSA 14V-604 (710,711 vehicles per the Dec 17, 2014 amendment): dealers replace the rear leaf spring assemblies with improved ones.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA 14V-604",
     "url": "https://static.nhtsa.gov/odi/rcl/2014/RCORRD-14V604-9403.pdf"
    }
   ],
   "tips": [
    {
     "text": "Recall E02 still applies if your truck already got 4-leaf springs under harsh-ride bulletin TSB-0359-10. Make the dealer install the 04005-34404 springs the recall specifies for those trucks, not the standard 04005-34304; one owner's 34304s went flat into negative arch within weeks.",
     "source_url": "https://www.tacomaworld.com/threads/leaf-spring-tsb-vs-recall.581476/",
     "source_name": "Tacoma World: Leaf spring TSB vs recall",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Dealers vary on doing the leaf spring recall with an add-a-leaf installed; one did it without hesitation once told up front. Ask for your old springs back so you can move the add-a-leaf over afterward.",
     "source_url": "https://www.tacomaworld.com/threads/rear-leaf-spring-recall-question-please-2009-lifted.681406/",
     "source_name": "Tacoma World: Rear Leaf Spring Recall Question Please (2009 Lifted)",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "idler",
   "title": "G2: Idler pulley / serpentine belt noise",
   "years": "2005–2015",
   "symptoms": "Belt/idler noise; high-mileage alternators and water pumps \"going out\"",
   "cause": "n/s",
   "fix": "No Toyota bulletin found. DIY videos: \"Belt and Idler Replacement + Bearing Inspection Tip$ and Trick$\" (KFlo Tacoma Tutorials); \"How to Replace Serpentine Belt Idler Pulley 2005-2015 Toyota Tacoma 2.7L L4\" (TRQ). 1GR idler pulley No.1 / No.2: 54 N·m (40 lb-ft) / 39 N·m (29 lb-ft); belt tensioner 36 N·m (27 lb-ft).",
   "parts": [],
   "conf": [
    "forum",
    "unconfirmed"
   ],
   "src": [
    {
     "label": "customtacos 1GR stock rwhp",
     "url": "https://www.customtacos.com/threads/1gr-fe-stock-rwtq-rwhp.142057/"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=ZKq3FBsvFsI"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=GGEHggztiVU"
    }
   ],
   "confNote": "Forum-reported only; Unconfirmed as a pattern.",
   "tips": [
    {
     "text": "2.7 OEM numbers: tensioner pulley 16603-0P030 (possibly 16603-75010 later), block idler 16603-31040 (was 31030), A/C idler 88440-25070; Gates are 36173, 36174 and 36614. On 2005-07 trucks aftermarket bottom idlers can rub, and Gates says to use hardware kit 91051 with its spacers.",
     "source_url": "https://www.tacomaworld.com/threads/2trfe-idler-pulleys-and-tensioner-part-numbers.667372/",
     "source_name": "Tacoma World: 2TRFE Idler Pulleys and Tensioner Part Numbers",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "If the belt walks or misaligns with good tension, the tensioner arm bushing may be worn, not just a pulley. One owner replaced the full Gates tensioner, all 3 idlers and a Gatorback belt in 2.5 hours by moving the A/C compressor (4 bolts) to reach the tensioner's 5 bolts.",
     "source_url": "https://www.tacomaworld.com/threads/idler-pulley-replacement-how-to.267263/",
     "source_name": "Tacoma World: Idler Pulley Replacement. How to:",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "driveshaft-clunk",
   "title": "G2: Rear driveshaft clunk, \"bump from behind\"",
   "years": "2005–2013 4WD automatics (A340F, A750F) built before the bulletin's production-change VINs",
   "symptoms": "Clunk/thunk from the rear",
   "cause": "Rear propeller shaft",
   "fix": "T-SB-0016-13 Rev2: replace the rear propeller shaft assembly with the improved part (37100-0422x / 37100-0436x by wheelbase). Covered under the 5 yr / 60k powertrain warranty, so out of coverage on every truck today.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "T-SB-0016-13 Rev2",
     "url": "https://static.nhtsa.gov/odi/tsbs/2013/SB-10061331-2273.pdf"
    }
   ],
   "tips": [
    {
     "text": "No 2nd gen came with a slip yoke grease fitting, so the clunk fix means pulling the rear shaft apart and greasing the splines; one owner did it every 10k miles before a shop drilled in a fitting for $50. Mark every piece so it goes back in the same phase.",
     "source_url": "https://www.tacomaworld.com/threads/2nd-gen-tacoma-slip-yoke-grease-fitting.263428/",
     "source_name": "Tacoma World: 2nd Gen Tacoma Slip Yoke Grease Fitting",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On a 1st gen with the same style rear slip yoke, the splines had almost no grease even with zerks greased every oil change. Cleaning it out and coating the splines with Ford XG-8 PTFE lubricant ended the stop-and-go thuds; the owner plans to repeat it periodically.",
     "source_url": "https://www.tacomaworld.com/threads/slip-yoke-binding-corrected-thank-you-timmy.634445/",
     "source_name": "Tacoma World: Slip Yoke Binding - Corrected - Thank you Timmy",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "diff-leak",
   "title": "G3: Rear differential carrier leak (BD20D)",
   "years": "2016–2017 (built Aug 18, 2015 – Mar 24, 2017; BD20D carrier only)",
   "symptoms": "Leak, noise, loss of drive, in some cases seizure",
   "cause": "Sealing-surface variation can let the carrier nuts loosen",
   "fix": "Recall H0G / 17V-285 (227,732 vehicles). If dry, retorque the original nuts to 18 ft-lb; if leaking, new gasket + 10 new nuts at 28 ft-lb (37 N·m). Don't reuse old nuts at the new torque. If less than 2.0 L of oil drains out, the carrier is replaced.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA 17V-285 report",
     "url": "https://static.nhtsa.gov/odi/rcl/2017/RCLRPT-17V285-1791.PDF"
    },
    {
     "label": "17V-285 remedy",
     "url": "https://static.nhtsa.gov/odi/rcl/2017/RCRIT-17V285-0775.pdf"
    }
   ],
   "guide": "g3-chassis",
   "tips": [
    {
     "text": "Recall H0G (2016-17): if the carrier joint is dry, only retorque the original carrier nuts to 18 ft-lb and replace nothing. If it leaks, fit a new gasket and 10 new nuts at 28 ft-lb, and if under 2.0 L of oil drains out the carrier itself is replaced.",
     "source_url": "https://static.nhtsa.gov/odi/rcl/2017/RCRIT-17V285-0775.pdf",
     "source_name": "NHTSA: Toyota Safety Recall H0G technical instructions, rear differential carrier gasket",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "shift-quality",
   "title": "G3: Shift hunting, harsh 1-2, delayed engagement",
   "years": "2016–2017 3.5 6AT",
   "symptoms": "Delayed P-D / R-D engagement; harsh 1-2; delayed upshift on cruise; \"busy shift-like hunting\" at highway speed on slight grades; cold 3-4 flare after a long soak",
   "cause": "Calibration",
   "fix": "T-SB-0077-16 Rev1: ECM reflash (op code TC1601, 0.4 h). Covered under the Federal Emission Warranty, 8 yr / 80k. An OTT-tuned 2020 owner wrote \"No more gear hunting\" after an aftermarket tune (forum-reported).",
   "parts": [
    "tune-ay-ott",
    "tune-yotawerx"
   ],
   "conf": "verified",
   "src": [
    {
     "label": "T-SB-0077-16",
     "url": "https://static.nhtsa.gov/odi/tsbs/2016/MC-10132910-9999.pdf"
    },
    {
     "label": "TacomaWorld OTT thread",
     "url": "https://www.tacomaworld.com/threads/overland-torque-tune-ott-by-overland-tailor.759590/"
    }
   ],
   "tips": [
    {
     "text": "T-SB-0077-16 reflashes 2016-17 3.5 automatics for delayed P-to-D engagement, harsh 1-2, slow upshifts on cruise and highway gear hunting. It is covered by the Federal Emission Warranty, 8 years/80,000 miles, so ask the dealer to check your calibration.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2016/MC-10132910-9999.pdf",
     "source_name": "NHTSA: Toyota T-SB-0077-16, ECM Calibration: Shift Feeling Enhancements",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "decel-vibe",
   "title": "G3: Driveline vibration on decel, 10–30 mph",
   "years": "2016–2019 4WD 6AT",
   "symptoms": "Vibration on decel at 10–30 mph",
   "cause": "Driveline",
   "fix": "T-SB-0071-19 (supersedes T-SB-0171-16). 4WD automatics only. Does not apply if the truck has an aftermarket lift or leveling kit. Toyota warns not to use the bulletin's spring part on manuals or PreRunners.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "T-SB-0071-19",
     "url": "https://static.nhtsa.gov/odi/tsbs/2019/MC-10162793-9999.pdf"
    }
   ],
   "tips": [
    {
     "text": "T-SB-0124-20 fixes 30-10 mph decel vibration with revised rear leaf springs on automatic trucks only, and not if the truck has any lift or leveling kit. On a 4WD, the test is to remove the rear driveshaft and drive in 4WD High; if the vibration stays, it is not the rear driveline.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2022/MC-10227899-9999.pdf",
     "source_name": "NHTSA: Toyota T-SB-0124-20, Driveline Vibration Under Deceleration Between 30-10 mph",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A 2019 owner removed about 95% of the decel vibration with a Tom Woods one-piece rear driveshaft, and argues the two-piece shaft is the root cause. Others got the bulletin springs from the dealer, with mixed results.",
     "source_url": "https://www.tacomaworld.com/threads/poll-30-10-mph-vibration-automatic-trucks-stock-height.748639/page-5",
     "source_name": "Tacoma World: Poll, 30-10 MPH Vibration, Automatic Trucks, Stock Height",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    },
    {
     "text": "After new axle shafts did not last, one owner fixed about 95% of his vibration with road-force balancing, new rear drums (the biggest change) and Bilstein 5100 rear shocks replacing the worn stock shocks at under 30k miles.",
     "source_url": "https://www.tacomaworld.com/threads/oh-no-tsb-0171-16-driveline-vibration.463992/page-43",
     "source_name": "Tacoma World: oh no....TSB-0171-16 Driveline vibration",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Toyota's T-SB-0071-19 driveline fix is void on lifted or leveled trucks. If a G3 4WD automatic has the decel vibration, get the bulletin done before leveling.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2019/MC-10162793-9999.pdf",
     "source_name": "T-SB-0071-19",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "brake-noise",
   "title": "G3: Rear noise/vibration while braking",
   "years": "2017–2019 (BD20)",
   "symptoms": "Rear noise/vibration while braking",
   "cause": "Excess clearance between the brake drum and axle drum flange",
   "fix": "T-SB-0023-19 Rev1: repair per bulletin (rear axle work).",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "T-SB-0023-19",
     "url": "https://static.nhtsa.gov/odi/tsbs/2019/MC-10162253-9999.pdf"
    }
   ],
   "tips": [
    {
     "text": "T-SB-0023-19 covers 2017-19 trucks with the BD20 rear axle that shudder or click while braking: measure the axle drum flange in three places, and if it reads 107.946-108.000 mm the axle is replaced. Ask for the measurement before accepting drum turning as the fix.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2019/MC-10162253-9999.pdf",
     "source_name": "NHTSA: Toyota T-SB-0023-19, Rear Vibration or Noise While Braking",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Several 2016-18 owners had braking vibration at a few thousand miles from rear drums that were too tight or out of round from the factory. Dealers fixed it under warranty by adjusting or replacing the drums; one needed a second visit for clicking afterward.",
     "source_url": "https://www.tacomaworld.com/threads/rear-drums-causing-vibration-now-clicking-after-fix.569789/",
     "source_name": "Tacoma World: Rear drums causing vibration - now clicking after fix",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "whine",
   "title": "G3: Rear whine ~50 mph (Double Cab)",
   "years": "2016–2023 Double Cab",
   "symptoms": "Rear whine around 50 mph",
   "cause": "Driveline resonance",
   "fix": "T-SB-0013-18 Rev1 (2016–2018 Double Cab 4WD with BD22): install pad and dynamic damper (op SU1701, 1.0 h; P/N 51229-04010). T-SB-0045-23 (2019–2023 Double Cab): same fix (op BD2302, 1.0 h; 51229-04010), basic warranty 3 yr / 36k.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "T-SB-0013-18",
     "url": "https://static.nhtsa.gov/odi/tsbs/2018/MC-10149973-9999.pdf"
    },
    {
     "label": "T-SB-0045-23",
     "url": "https://static.nhtsa.gov/odi/tsbs/2023/MC-10241402-9999.pdf"
    }
   ],
   "tips": [
    {
     "text": "T-SB-0045-23 covers a rear whine around 50 mph on 2019-23 Double Cabs, caused by diff vibration carried into the body; the fix is a pad and frame dynamic damper, not a new diff. It is covered only within the 3 year/36,000 mile basic warranty.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2023/MC-10241402-9999.pdf",
     "source_name": "NHTSA: Toyota T-SB-0045-23, Whine Noise from Rear of Vehicle",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Check the rear diff level first: pull the fill plug and feel for oil with a fingertip. One owner's was 3/4 quart low from the factory.",
     "source_url": "https://www.tacomaworld.com/threads/rear-diff-whistle-slight-howl.795429/",
     "source_name": "Tacoma World: Rear diff whistle/slight howl.",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Two owners said a rear diff oil change (one used Red Line 75W-85 at 30k) made the whine go away. Another had the whole diff replaced under warranty for metal in the oil and the new one still whined.",
     "source_url": "https://www.tacomaworld.com/threads/confirmation-on-rear-diff-whine.858207/",
     "source_name": "Tacoma World: Confirmation on Rear Diff Whine",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "taco-tick",
   "title": "G3: \"Taco tick\" vacuum-pump knock at idle (2GR-FKS)",
   "years": "2016–2023 (applicability disputed)",
   "symptoms": "Knock/tick at idle",
   "cause": "Vacuum pump",
   "fix": "T-SB-0115-22 (Dec 22, 2022) lists Tacoma 2016–2023; repair is the vacuum pump. Rev1 (Mar 6, 2023) removed Tacoma. A later Rev2 reportedly restored Tacoma but was not opened. Ask the dealer to check TIS by VIN.",
   "parts": [],
   "conf": [
    "verified",
    "unconfirmed"
   ],
   "src": [
    {
     "label": "T-SB-0115-22",
     "url": "https://static.nhtsa.gov/odi/tsbs/2022/MC-10230385-9999.pdf"
    },
    {
     "label": "T-SB-0115-22 Rev1",
     "url": "https://static.nhtsa.gov/odi/tsbs/2023/MC-10234314-9999.pdf"
    }
   ],
   "disputed": true,
   "tips": [
    {
     "text": "A clatter behind the normal injector tick, loudest at the rear passenger side behind the camshaft, is the vacuum pump covered by T-SB-0115-22 (new pump 29300-31050). Trucks with crawl control have no vacuum pump, which is why many owners say the noise is normal.",
     "source_url": "https://www.tacomaworld.com/threads/engine-ticking-knocking.794152/",
     "source_name": "Tacoma World: Engine ticking/knocking",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "One owner's pump knocked only after pressing the brakes and never on a cold start without touching them; the dealer replicated it by driving a few miles, then braking at idle. Bring videos, and note the bulletin repair is covered only within 3 years/36k miles.",
     "source_url": "https://www.tacomaworld.com/threads/vacuum-pump-noise-tsb.793633/",
     "source_name": "Tacoma World: Vacuum Pump Noise TSB",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The bulletin's test: tee a vacuum gauge into the pump-to-booster hose and pinch the booster side with coolant at 14-140 F; it applies only if the pump makes at least 25.6 inHg. Check for vacuum leaks before the pump is condemned.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2022/MC-10230385-9999.pdf",
     "source_name": "NHTSA: Toyota bulletin, Knocking Noise From Vacuum Pump at Idle",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "ifs-clunk",
   "title": "G3: IFS / driveshaft clunk",
   "years": "G3",
   "symptoms": "Clunk",
   "cause": "n/s",
   "fix": "Videos (title only): \"Tacoma IFS Clunk? ECGS Bushing to the Rescue\" (Into the Still); \"2017 Tacoma Drive Shaft Clunks\" (2rawww). No G3 driveshaft-clunk bulletin found; T-SB-0016-13 covers 2005–2013 only.",
   "parts": [],
   "conf": "video",
   "src": [
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=aIYPMTJDxlw"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=tkuVHIzQXt0"
    }
   ],
   "tips": [
    {
     "text": "A shop owner on the thread says they see LCA cam bolts come loose after lifts and alignments, so he goes past 130 ft-lb or retorques them after a couple of weeks. Check those bolts first when a front clunk shows up after suspension work.",
     "source_url": "https://www.tacomaworld.com/threads/torque-lcas-at-ride-height-or-on-the-stand.855058/",
     "source_name": "Tacoma World: Torque LCAs at ride height or on the stand?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  }
 ],
 "guides": [
  {
   "id": "wheels",
   "type": "diy",
   "title": "Wheels, lugs and TPMS (G2 6-lug, G2 5-lug, G3)",
   "summary": "83 lb-ft (113 N·m) on every Tacoma.",
   "conf": "verified",
   "src": [
    {
     "label": "2012 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2012-tacoma.pdf"
    },
    {
     "label": "2018 Tacoma Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/toyota/2018-tacoma.pdf"
    },
    {
     "label": "2007 Tacoma repair manual (FSM mirror)",
     "url": "https://lemon-manuals.la/Honda/2007/Fit%20Sport%2C%20Automatic/Repair%20and%20Diagnosis/External%20Pages/Different%20car/Section%203%20%28Service%20Specifications%29/"
    },
    {
     "label": "Tacoma 2016+ repair manual (ttguide mirror)",
     "url": "https://www.ttguide.net/toyota-tacoma-2015-2018-service-manual-171.html"
    }
   ],
   "steps": [
    {
     "text": "Wheel nuts: 113 N·m (83 lb-ft). OM06–OM10 print 85 lb-ft; same metric value, rounding only.",
     "disputed": true
    },
    {
     "text": "G2 2WD non-PreRunner and X-Runner are 5×114.3; G2 4WD/PreRunner and all G3 are 6×139.7."
    },
    {
     "text": "G3 TPMS: hold the reset switch until the light blinks slowly 3 times, then drive ~25 mph+ for ~10 minutes. G2: dealer ID registration for new sensors."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Wheel nuts (all)",
      "113 N·m (83 lb-ft)"
     ],
     [
      "TPMS valve nut (G3)",
      "4.0 N·m (35 in-lb)"
     ]
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "Toyota hubs are 106.1 mm and most aftermarket wheels are 108 mm, so they need rings or a lug-centric balance. Owners argue whether rings matter, since the lugs do the centering on a lug-centric wheel.",
     "source_url": "https://www.tacomaworld.com/threads/hub-centric-rings-and-lugs-for-new-aftermarket-wheels.682901/",
     "source_name": "Tacoma World: Hub Centric Rings and Lugs for New Aftermarket Wheels",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    },
    {
     "text": "A 2015 owner reused his stock alloy lug nuts on 17x7 4Runner TRD Pro wheels and moved the TPMS sensors over with no issues. Budget a fifth sensor if you want the spare monitored.",
     "source_url": "https://www.tacomaworld.com/threads/using-stock-lug-nuts-with-trd-pro-wheels.567504/",
     "source_name": "Tacoma World: Using stock lug nuts with TRD Pro wheels?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "1gr",
   "type": "diy",
   "title": "1GR-FE 4.0 V6 fastener table (G2, FSM07)",
   "summary": "Factory engine torque.",
   "conf": "verified",
   "src": [
    {
     "label": "2007 Tacoma repair manual (FSM mirror)",
     "url": "https://lemon-manuals.la/Honda/2007/Fit%20Sport%2C%20Automatic/Repair%20and%20Diagnosis/External%20Pages/Different%20car/Section%203%20%28Service%20Specifications%29/"
    },
    {
     "label": "2007 FJ Cruiser 1GR-FE torque (cross-check)",
     "url": "https://www.purefjcruiser.com/docs/2007%20Toyota%20FJ%20Cruiser%20Repair%20Manual/Service%20Specifications/1GR-FE%20Engine%20Mechanical/003000.pdf"
    }
   ],
   "steps": [
    {
     "text": "Head bolts: oil threads; replace any stretched/deformed bolt."
    },
    {
     "text": "The FJ Cruiser table matches except the exhaust manifold (FJ 30 N·m); use the Tacoma 21 N·m.",
     "disputed": true
    },
    {
     "text": "Video: \"How To Change Spark Plugs on a 2nd Gen Tacoma! (2005-2015)\" (OutdoorTaco).",
     "conf": "video"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Cylinder head bolts (8 per bank, 10 mm bi-hex)",
      "36 N·m (27 lb-ft) → +180°; LH 14 mm-head bolts 30 N·m (22 lb-ft)"
     ],
     [
      "Camshaft bearing caps",
      "10 mm head 9.0 N·m (80 in-lb); 12 mm head 24 N·m (18 lb-ft)"
     ],
     [
      "Camshaft timing gear (VVT) / sprocket",
      "100 N·m (74 lb-ft)"
     ],
     [
      "Chain tensioner No.1 / No.2 / No.3",
      "10 / 19 / 19 N·m"
     ],
     [
      "Idle gear No.1",
      "60 N·m (44 lb-ft)"
     ],
     [
      "Timing cover to head/block",
      "23 N·m (17 lb-ft)"
     ],
     [
      "Spark plug",
      "20 N·m (15 lb-ft)"
     ],
     [
      "Ignition coil",
      "10 N·m (7 lb-ft)"
     ],
     [
      "Crank pulley",
      "250 N·m (185 lb-ft)"
     ],
     [
      "Main caps, 12-point",
      "61 N·m (45 lb-ft) → +90°; 12 mm-head side bolts 25 N·m (18 lb-ft)"
     ],
     [
      "Rod caps",
      "25 N·m (18 lb-ft) → +90°"
     ],
     [
      "Flywheel / drive plate",
      "83 N·m (61 lb-ft)"
     ],
     [
      "Intake manifold to head",
      "26 N·m (19 lb-ft)"
     ],
     [
      "Surge tank to intake",
      "28 N·m (21 lb-ft)"
     ],
     [
      "Exhaust manifold",
      "21 N·m (16 lb-ft)"
     ],
     [
      "Oil pan drain plug",
      "40 N·m (30 lb-ft)"
     ],
     [
      "Oil pan bolts",
      "10 mm head 10 N·m; 12 mm head 21 N·m"
     ],
     [
      "Belt tensioner",
      "36 N·m (27 lb-ft)"
     ],
     [
      "Idler pulley No.1 / No.2",
      "54 N·m (40 lb-ft) / 39 N·m (29 lb-ft)"
     ],
     [
      "Water pump",
      "9.0 N·m (A) / 23 N·m (B)"
     ],
     [
      "Engine mount bracket to block / insulator to frame",
      "43 N·m (31) / 38 N·m (28)"
     ],
     [
      "Knock sensor",
      "20 N·m (15 lb-ft)"
     ]
    ],
    "disputedRows": [
     14
    ]
   },
   "parts": []
  },
  {
   "id": "2tr",
   "type": "diy",
   "title": "2TR-FE 2.7 I4 fastener table (G2 and G3, FSM07)",
   "summary": "Same engine both generations.",
   "conf": "verified",
   "src": [
    {
     "label": "2007 Tacoma repair manual (FSM mirror)",
     "url": "https://lemon-manuals.la/Honda/2007/Fit%20Sport%2C%20Automatic/Repair%20and%20Diagnosis/External%20Pages/Different%20car/Section%203%20%28Service%20Specifications%29/"
    }
   ],
   "steps": [
    {
     "text": "Spark plug is 18 N·m (13 lb-ft), not the 1GR's 20 N·m."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Cylinder head",
      "39 N·m (29 lb-ft) → +90° → +90°"
     ],
     [
      "Main (crank bearing) caps",
      "39 N·m (29 lb-ft) → +90°"
     ],
     [
      "Rod caps",
      "25 N·m (18 lb-ft) → +90°"
     ],
     [
      "Cam timing gear (both cams)",
      "78 N·m (58 lb-ft)"
     ],
     [
      "Cam bearing caps",
      "bolt A 12 N·m (9); others 16 N·m (11)"
     ],
     [
      "Spark plug",
      "18 N·m (13 lb-ft)"
     ],
     [
      "Crank pulley",
      "260 N·m (192 lb-ft)"
     ],
     [
      "Flywheel",
      "27 N·m (20 lb-ft) → +90°; drive plate 74 N·m (55 lb-ft)"
     ],
     [
      "Exhaust manifold",
      "36 N·m (27 lb-ft)"
     ],
     [
      "Oil pan / strainer",
      "26 N·m (19 lb-ft)"
     ],
     [
      "Drain plug",
      "38 N·m (28 lb-ft)"
     ],
     [
      "Oil filter (cartridge housing)",
      "17 N·m (13 lb-ft)"
     ],
     [
      "Timing cover",
      "bolt A 46 N·m (34); others 21 N·m (15)"
     ],
     [
      "Balance shaft driven gears",
      "36 N·m (26 lb-ft)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "2gr",
   "type": "diy",
   "title": "2GR-FKS 3.5 V6 (G3, FSM-G3)",
   "summary": "Factory pages; head bolts not found.",
   "conf": "verified",
   "src": [
    {
     "label": "Tacoma 2016+ repair manual (ttguide mirror)",
     "url": "https://www.ttguide.net/toyota-tacoma-2015-2018-service-manual-171.html"
    }
   ],
   "steps": [
    {
     "text": "Cylinder head bolts: a secondary spec site gives 36 N·m → +90° → +90° (14 mm bolts 30 N·m). The FSM-G3 head-install page wasn't found.",
     "conf": "unconfirmed"
    },
    {
     "text": "Flywheel/drive plate: 83 N·m (61 lb-ft) is listed with a 30 N·m row on the same step; read the page."
    },
    {
     "text": "Video: \"16-23 Toyota Tacoma 3.5 V6 - Spark Plug Replacement Without Removing the Intake Manifold.\" (Automotive Insight).",
     "conf": "video"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec",
     "FSM page"
    ],
    "rows": [
     [
      "Spark plug",
      "18 N·m (13 lb-ft)",
      "862"
     ],
     [
      "Ignition coil",
      "10 N·m (7 lb-ft)",
      "862"
     ],
     [
      "Intake manifold to heads; surge tank; stays",
      "21 N·m (15 lb-ft)",
      "871"
     ],
     [
      "Exhaust manifold nuts (4 per side, in sequence)",
      "21 N·m (15 lb-ft)",
      "813"
     ],
     [
      "Exhaust manifold stays to trans",
      "40 N·m (30 lb-ft)",
      "813"
     ],
     [
      "Front pipe nuts / bolts",
      "54 N·m (40) / 48 N·m (35)",
      "813"
     ],
     [
      "Crank pulley",
      "260 N·m (192 lb-ft)",
      "887"
     ],
     [
      "Oil pan bolts",
      "10 / 21 N·m by bolt",
      "887"
     ],
     [
      "Head plugs: No.1 & No.3 / No.2",
      "44 N·m (32) / 80 N·m (59)",
      "791"
     ],
     [
      "Engine mount insulator nuts A / B",
      "72 N·m (53) / 50 N·m (37)",
      "799"
     ],
     [
      "Flywheel/drive plate (8 bolts, in steps)",
      "83 N·m (61 lb-ft)",
      "799"
     ],
     [
      "Cylinder head bolts (Unconfirmed)",
      "36 N·m → +90° → +90° (14 mm bolts 30 N·m)",
      "toyota-specs.com extract"
     ]
    ],
    "disputedRows": [
     11
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "Owners torque the filter housing to 18 ft-lb and its drain plug to 10 ft-lb. If loosening the 3/8 in drive plug spins the housing, give it one sharp hit on the end of the ratchet; a threaded MotivX drain tool replaces the push-in plastic adapter.",
     "source_url": "https://www.tacomaworld.com/threads/how-to-use-the-oil-filter-drain-on-a-3rd-gen.799092/",
     "source_name": "Tacoma World: How to Use the Oil Filter Drain on a 3rd Gen",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Drain the pan first, then thread the plastic drain adapter (with a hose) fully into the housing; a small trickle means it is not seated. Pull the side clip back rather than removing it.",
     "source_url": "https://www.tacomaworld.com/threads/oil-filter-removal-3rd-gen-toyota.655716/",
     "source_name": "Tacoma World: oil filter removal 3rd gen toyota",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "g2-chassis",
   "type": "diy",
   "title": "G2 chassis torque (FSM07): 2WD vs 4WD/PreRunner",
   "summary": "Tighten pivots only at ride height.",
   "conf": "verified",
   "src": [
    {
     "label": "2007 Tacoma repair manual (FSM mirror)",
     "url": "https://lemon-manuals.la/Honda/2007/Fit%20Sport%2C%20Automatic/Repair%20and%20Diagnosis/External%20Pages/Different%20car/Section%203%20%28Service%20Specifications%29/"
    }
   ],
   "steps": [
    {
     "text": "Tighten the upper/lower arm pivots and shock lower nut only after lowering the truck and bouncing it to settle the suspension."
    },
    {
     "text": "Rear U-bolts are 50 N·m (37 lb-ft), lower than many owners expect."
    },
    {
     "text": "Videos: \"How to Replace Lower Ball Joints 2005-2015 Toyota Tacoma\" (TRQ); \"How To Replace Lower Ball Joints On A 2nd Gen Tacoma\" (OutdoorTaco).",
     "conf": "video"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "2WD",
     "4WD & PreRunner"
    ],
    "rows": [
     [
      "Upper ball joint to knuckle (new nut)",
      "110 N·m (81 lb-ft)",
      "110 N·m (81 lb-ft)"
     ],
     [
      "Upper arm to frame (final, at ride height)",
      "82 N·m (60 lb-ft)",
      "115 N·m (85 lb-ft)"
     ],
     [
      "Lower ball joint attachment to lower arm",
      "140 N·m (103 lb-ft)",
      "140 N·m (103 lb-ft)"
     ],
     [
      "Lower ball joint attachment to knuckle",
      "160 N·m (118 lb-ft)",
      "160 N·m (118 lb-ft)"
     ],
     [
      "Lower arm to crossmember (final, at ride height)",
      "210 N·m (155 lb-ft)",
      "135 N·m (100 lb-ft)"
     ],
     [
      "Coilover upper nuts (3)",
      "64 N·m (47 lb-ft)",
      "64 N·m (47 lb-ft)"
     ],
     [
      "Strut top nut (support to shock)",
      "27 N·m (20 lb-ft)",
      "27 N·m (20 lb-ft)"
     ],
     [
      "Shock lower to lower arm (final)",
      "83 N·m (61 lb-ft)",
      "83 N·m (61 lb-ft)"
     ],
     [
      "Sway bar link to knuckle",
      "n/a",
      "70 N·m (52 lb-ft)"
     ],
     [
      "Tie-rod end to knuckle",
      "49 N·m (36 lb-ft)",
      "91 N·m (67 lb-ft)"
     ],
     [
      "Tie-rod lock nut",
      "55.5 N·m (41 lb-ft)",
      "55.5 N·m (41 lb-ft)"
     ],
     [
      "Front axle hub nut (4WD)",
      "n/a",
      "235 N·m (173 lb-ft)"
     ],
     [
      "Hub to knuckle",
      "80 N·m (59 lb-ft)",
      "80 N·m (59 lb-ft)"
     ],
     [
      "Front wheel adjusting nut (2WD)",
      "275 N·m (203 lb-ft)",
      "n/a"
     ],
     [
      "Front caliper",
      "caliper mounting to knuckle 108 N·m (80 lb-ft); caliper to mounting 36.3 N·m (27 lb-ft)",
      "caliper to knuckle 123 N·m (91 lb-ft)"
     ],
     [
      "Brake hose/tube to caliper",
      "flexible hose 30 N·m (22 lb-ft)",
      "brake tube 15 N·m (11 lb-ft)"
     ],
     [
      "Steering knuckle to front axle hub (2WD)",
      "199 N·m (147 lb-ft)",
      "n/a"
     ],
     [
      "Sway bar link to lower arm (2WD)",
      "69 N·m (51 lb-ft)",
      "n/a"
     ],
     [
      "Bleeder",
      "11 N·m (8 lb-ft)",
      "11 N·m (8 lb-ft)"
     ],
     [
      "Rear axle shaft/backing plate to housing",
      "36 N·m (27 lb-ft)",
      "36 N·m (27 lb-ft)"
     ],
     [
      "Rear U-bolts",
      "50 N·m (37 lb-ft)",
      "50 N·m (37 lb-ft)"
     ],
     [
      "Leaf spring eye / shackle / shackle to frame",
      "120 N·m (89 lb-ft)",
      "120 N·m (89 lb-ft)"
     ],
     [
      "Rear shock lower / upper",
      "100 N·m (74) / 20 N·m (15)",
      "100 N·m (74) / 20 N·m (15)"
     ],
     [
      "Wheels",
      "113 N·m (83 lb-ft)",
      "113 N·m (83 lb-ft)"
     ]
    ]
   },
   "parts": [
    "lev-rc-743",
    "lift-rc-74530"
   ],
   "tips": [
    {
     "text": "A 2011 PreRunner rode bouncy and stiff after new lower arms, and owners pointed to bolts torqued at full droop binding the bushings. Torque LCA pivot bolts with the truck on the ground at ride height.",
     "source_url": "https://www.tacomaworld.com/threads/harsh-ride-after-new-lca-install.713742/",
     "source_name": "Tacoma World: Harsh ride after new LCA install",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "g3-chassis",
   "type": "diy",
   "title": "G3 chassis torque (FSM-G3)",
   "summary": "Includes BD20D carrier nuts (recall H0G).",
   "conf": "verified",
   "src": [
    {
     "label": "Tacoma 2016+ repair manual (ttguide mirror)",
     "url": "https://www.ttguide.net/toyota-tacoma-2015-2018-service-manual-171.html"
    }
   ],
   "steps": [
    {
     "text": "BD20D carrier nuts: Type A 25 N·m (18 lb-ft), Type B 37 N·m (27 lb-ft), matching recall H0G 18 → 28 lb-ft."
    },
    {
     "text": "Video: \"ICON Leveling Kit Install On Your 2016-2023 Tacoma\" (Yota Xpedition).",
     "conf": "video"
    },
    {
     "text": "A leveling kit or lift voids the T-SB-0071-19 driveline fix on 4WD automatics."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec",
     "FSM page"
    ],
    "rows": [
     [
      "Upper ball joint nut (new nut + clip)",
      "110 N·m (81 lb-ft)",
      "1082"
     ],
     [
      "Lower ball joint attachment to knuckle (2 bolts)",
      "160 N·m (118 lb-ft)",
      "1082 / 1399"
     ],
     [
      "Lower ball joint attachment to lower arm (new nut + cotter)",
      "140 N·m (103 lb-ft)",
      "1399"
     ],
     [
      "Lower arm to frame, final",
      "front 183 N·m (135 lb-ft) / rear 188 N·m (139 lb-ft)",
      "1399"
     ],
     [
      "Coilover upper nuts",
      "64 N·m (47 lb-ft)",
      "1406"
     ],
     [
      "Strut top nut (new support nut)",
      "27 N·m (20 lb-ft)",
      "1406"
     ],
     [
      "Shock lower nut, final",
      "83 N·m (61 lb-ft)",
      "1399 / 1406"
     ],
     [
      "Sway bar link to knuckle",
      "70 N·m (52 lb-ft)",
      "1082 / 1406"
     ],
     [
      "Tie-rod end",
      "91 N·m (67 lb-ft)",
      "1082 / 1335"
     ],
     [
      "Front axle hub nut (4WD)",
      "235 N·m (173 lb-ft)",
      "1082 / 1335"
     ],
     [
      "Front caliper to knuckle",
      "123 N·m (91 lb-ft)",
      "1082"
     ],
     [
      "Brake tube bracket / brake tube",
      "29 N·m / 15 N·m",
      "1082"
     ],
     [
      "Rear axle shaft w/ backing plate (4 nuts)",
      "45 N·m (33 lb-ft)",
      "1090"
     ],
     [
      "Rear carrier nuts, BD20D",
      "Type A 25 N·m (18 lb-ft); Type B 37 N·m (27 lb-ft)",
      "1284"
     ],
     [
      "Rear carrier nuts, BD22AN (e-locker)",
      "45 N·m (33 lb-ft)",
      "1293"
     ],
     [
      "Front diff mounts No.1 / No.2 / No.3",
      "186 / 160 / 108 N·m (138 / 118 / 80 lb-ft)",
      "1329"
     ],
     [
      "TPMS valve nut",
      "4.0 N·m (35 in-lb)",
      "1452"
     ],
     [
      "Wheels",
      "113 N·m (83 lb-ft)",
      "all"
     ]
    ]
   },
   "parts": [
    "lev-rc-743",
    "lift-rc-74530",
    "lift-rc-75820"
   ],
   "tips": [
    {
     "text": "After a 6112 install, torque the LCA frame bolts and the lower shock bolt with the truck on the ground, not at droop, so the rubber bushings are not twisted. The 2023 owner got the rear LCA bolts to 139 ft-lb, and a popular video's 103 ft-lb figure is lower than the 135 ft-lb most threads quote.",
     "source_url": "https://www.tacomaworld.com/threads/torque-lcas-at-ride-height-or-on-the-stand.855058/",
     "source_name": "Tacoma World: Torque LCAs at ride height or on the stand?",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "swap-gears",
   "type": "swap",
   "title": "Regear for big tires (and lockers)",
   "summary": "Kits priced 2026-10-11.",
   "conf": "verified",
   "src": [
    {
     "label": "Nitro 16–23 package",
     "url": "https://unit1203.com/products/nitro-gear-axle-16-23-tacoma-8-75-gear-package-kit"
    }
   ],
   "steps": [
    {
     "text": "G3: Nitro 8.75\" front + rear gear package. G2 with factory locker (8\"/8\" IFS): 4.88 front + rear gears and master kits. Front: ARB RD111 8\" IFS Air Locker (3.91 & up), 2005–2023."
    },
    {
     "text": "Videos (title only): \"Why You NEED to Regear Your Toyota Tacoma! Benefits, 4.88 vs 5.29s, and FAQs.\" (Mountain Yotas); \"How to Choose Your Tacoma Gears 4.88 or 5.29? Re-gear Explained. | Nitro Gears\" (TacomaBeast).",
     "conf": "video"
    },
    {
     "text": "G3 regear MPG: no G3 thread opened.",
     "conf": "unknown"
    }
   ],
   "torque": null,
   "parts": [
    "gear-nitro-g3",
    "gear-488-g2",
    "locker-arb-rd111"
   ],
   "tips": [
    {
     "text": "Gears alone do not change the speedometer on these trucks because speed is read from the ABS wheel sensors; only tire size does. A tune's gear and tire fields will not fix it either; use a standalone calibrator module.",
     "source_url": "https://www.tacomaworld.com/threads/speedometer-calibration-after-regear.691705/",
     "source_name": "Tacoma World: Speedometer calibration after regear",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-sc",
   "type": "swap",
   "title": "Supercharger (Magnuson)",
   "summary": "TVS1900 for G3, MP90 for G2.",
   "conf": "verified",
   "src": [
    {
     "label": "TacomaWorld Magnuson mega thread",
     "url": "https://www.tacomaworld.com/threads/magnuson-supercharger-mega-thread-for-2016-tacoma-unboxing-install-diy-dyno-video.693562/"
    }
   ],
   "steps": [
    {
     "text": "Owner (2018 TRD OR AT): 13 hours total. The crank bolt was so tight a 450 ft-lb impact wouldn't break it; he recommends 600 ft-lb+.",
     "conf": "forum"
    },
    {
     "text": "His Injen intake was not compatible; he went back to stock/TRD. Magnuson pulley bolt is 15/16\" (OEM 22 mm). Fuel rail torque he used: 18 ft-lb.",
     "conf": "forum"
    },
    {
     "text": "Before the install: 244 whp / 235 wtq (DynoJet) with OVTune, Injen intake, 285/75R16 KO2.",
     "conf": "forum"
    },
    {
     "text": "Videos (title only): \"Supercharged 3rd Gen Toyota Tacoma | Unboxing, Installation & Tune\" (TacomaBeast); \"3rd Gen Tacoma Magnuson SuperCharger INSTALL!\" (YotaMafia).",
     "conf": "video"
    }
   ],
   "torque": null,
   "parts": [
    "sc-magnuson-tvs1900",
    "sc-magnuson-mp90"
   ],
   "tips": [
    {
     "text": "Before supercharging a high-mileage 3.5, owners say to do compression and leak-down tests and want leak-down under 25%.",
     "source_url": "https://www.tacomaworld.com/threads/magnuson-supercharger-upgrades-and-limitations.710536/",
     "source_name": "Tacoma World: Magnuson Supercharger Upgrades and Limitations",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-front",
   "type": "swap",
   "title": "G2 front-end swap (2005–2011 → 2012–2015 face)",
   "summary": "\"Pretty much all or nothing\".",
   "conf": "forum",
   "src": [
    {
     "label": "TacomaWorld 597308",
     "url": "https://www.tacomaworld.com/threads/05-11-tacoma-front-end-conversion-complete-list.597308/"
    }
   ],
   "steps": [
    {
     "text": "Fenders do not change (same 2005–2015)."
    },
    {
     "text": "You need the 2012–15 hood (different body lines), hood scoop insert, hood latch support, headlights, lower headlight brackets, bumper and flares, inner/outer upper and lower bumper brackets (with rivets), reinforcement bar and upper center support, upper/lower grille, fillers."
    },
    {
     "text": "Owner's cost: \"around $1500\" including paint, mostly aftermarket parts. An 05–11 bumper won't line up with 12–15 lights/grille."
    }
   ],
   "torque": null,
   "parts": [],
   "tips": [
    {
     "text": "Fenders do not change from 2005-2015, so the swap is hood with scoop insert and latch support, headlights, lower headlight brackets, bumper, flares, grilles, fillers and reinforcement bar with inner and outer brackets. Painted parts are the bumper and flares, hood and scoop, headlight fillers and grille surround.",
     "source_url": "https://www.tacomaworld.com/threads/05-11-tacoma-front-end-conversion-complete-list.597308/",
     "source_name": "Tacoma World: 05-11 Tacoma Front End Conversion Complete List",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The old bumper mounts work, but you need the 2012-15 bumper reinforcement 52131-04010 with its new inner and outer brackets, which are riveted on; nuts and bolts worked fine for one owner. The flares need clips 75392-35200.",
     "source_url": "https://www.tacomaworld.com/threads/how-to-convert-05-11-tacoma-to-12-15-tacoma.772450/",
     "source_name": "Tacoma World: How to Convert 05-11' Tacoma to 12-15' Tacoma",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-brakes",
   "type": "swap",
   "title": "G2 front brake upgrade: 2010+ 4Runner 14WA calipers",
   "summary": "About 8% shorter stops in one owner's test.",
   "conf": "forum",
   "src": [
    {
     "label": "TacomaWorld 4Runner BBK",
     "url": "https://www.tacomaworld.com/threads/completed-5th-gen-4runner-bbk-upgrade-for-2nd-gen-tacomas.504234/"
    }
   ],
   "steps": [
    {
     "text": "Stock G2: 13WG caliper, 319 mm × 28 mm rotor, 45 mm pistons. 4Runner: 14WA, 338 mm × 31.8 mm rotor, 48 mm pistons."
    },
    {
     "text": "Needs 4Runner backing plates (47781-60140 / 47782-60140) and 17-inch wheels (stock 16s don't clear; TRD Sport 17s reportedly need a 1\" spacer)."
    },
    {
     "text": "40 mph rolling stops went from 61–62 ft to 57 ft (~8%). Parts sourced for \"$4-500\". Some 14WB calipers need sleeving."
    },
    {
     "text": "Stock lines work on an unlifted truck; lifted trucks may want +2\" lines."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "G2 4WD/PreRunner caliper to knuckle (stock, FSM07)",
      "123 N·m (91 lb-ft)"
     ]
    ],
    "conf": "verified",
    "src": [
     {
      "label": "2007 Tacoma repair manual (FSM mirror)",
      "url": "https://lemon-manuals.la/Honda/2007/Fit%20Sport%2C%20Automatic/Repair%20and%20Diagnosis/External%20Pages/Different%20car/Section%203%20%28Service%20Specifications%29/"
     }
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "The 14WA swap requires 17 in wheels (stock TRD Sport 17s needed a 1 in spacer), 4Runner backing plates 47781-60140 and 47782-60140, and the 338 mm rotors; pads are the same as the Tacoma calipers. One build measured about 8% shorter 40 mph stops, and gusseted spindles may need the backing plates trimmed.",
     "source_url": "https://www.tacomaworld.com/threads/completed-5th-gen-4runner-bbk-upgrade-for-2nd-gen-tacomas.504234/",
     "source_name": "Tacoma World: COMPLETED 5th Gen 4Runner BBK upgrade for 2nd Gen Tacomas",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On the G2 4Runner brake swap, stock lines work on an unlifted truck; lifted trucks may want +2\" lines.",
     "source_url": "https://www.tacomaworld.com/threads/completed-5th-gen-4runner-bbk-upgrade-for-2nd-gen-tacomas.504234/",
     "source_name": "TacomaWorld 4Runner BBK",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-reardisc",
   "type": "swap",
   "title": "Rear drum-to-disc conversion",
   "summary": "SOS kits for 5-lug and 6-lug.",
   "conf": "verified",
   "src": [
    {
     "label": "SOS X-Runner kit",
     "url": "https://sosperformance.com/products/rear-disc-conversion-fits-x-runner-2005-2015"
    },
    {
     "label": "SOS 6-lug backing plate kit",
     "url": "https://sosperformance.com/products/rear-disc-conversion-backing-plate-kit-2005-2023-tacoma-6-lug"
    }
   ],
   "steps": [
    {
     "text": "SOS TR12.2XR fits 2005–2015 X-Runner and 2WD (5-lug). SOS TR.PBKTA parking-brake/backing-plate kit fits 2005–2023 6-lug."
    },
    {
     "text": "Video (title only): \"Tacoma Rear Disc Brake Conversion - S.O.S Performance\" (SeanS54).",
     "conf": "video"
    }
   ],
   "torque": null,
   "parts": [
    "brake-sos-xr",
    "brake-sos-pbkta"
   ],
   "tips": [
    {
     "text": "A cheaper route than the full SOS kit is its hardware-only kit plus RockAuto calipers, brackets, rotors and lines, plus four Toyota parking brake parts (47613-60020 x2, 47612-60020, 47611-60020).",
     "source_url": "https://www.tacomaworld.com/threads/rear-disc-conversion-information.536765/",
     "source_name": "Tacoma World: Rear Disc Conversion Information",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-ls",
   "type": "swap",
   "title": "LS into a G2 (completed build)",
   "summary": "5.3 Gen III + 4L60E in a 2006.",
   "conf": "forum",
   "src": [
    {
     "label": "TacomaWorld 661391",
     "url": "https://www.tacomaworld.com/threads/munkeywrenchs-2nd-gen-ls-swap.661391/"
    }
   ],
   "steps": [
    {
     "text": "2003 Silverado 5.3 Gen III + 4L60E, bought as a complete swap with harness, ECU, TAC and pedal. Owner says \"about 30hp over stock\" and that the 1GR is physically bigger than the LS."
    },
    {
     "text": "Mounts: LSX Innovations plates with custom 3/8\" steel stands; the GM trans mount fit the stock Toyota crossmember."
    },
    {
     "text": "Wiring: reworked GM harness per LT1swap (4 fuses, 2 relays); Toyota body harness/PCM kept. Tach needed a 1 kΩ resistor and still reads oddly above 4,500 rpm; speedo works from Toyota ABS sensors. A/C and heat weren't connected yet."
    }
   ],
   "torque": null,
   "parts": [],
   "tips": [
    {
     "text": "A 2006 got a 2003 Silverado 5.3 and 4L60E; the LSX Innovations adjustable mounts were about 1.5 in too short, so he kept their plates and welded up 3/8 in steel mounts, and the GM trans mount fit the stock Toyota crossmember. He reports only about 30 hp over the stock 4.0, so do it for durability or potential, not instant power.",
     "source_url": "https://www.tacomaworld.com/threads/munkeywrenchs-2nd-gen-ls-swap.661391/",
     "source_name": "Tacoma World: MunkeyWrench's 2nd Gen LS swap",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "DIY swappers put parts at roughly $3,000-7,000 (one was $4,000 in), while shop quotes in the thread ranged from $10,000 to $25,000. Plan for a full GM drivetrain, wiring, ECU and tune.",
     "source_url": "https://www.tacomaworld.com/threads/thinking-about-an-ls-swap.604316/",
     "source_name": "Tacoma World: Thinking about an LS swap",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "swap-diesel",
   "type": "swap",
   "title": "1GD-FTV 2.8 diesel into a G3 (shop conversion)",
   "summary": "Diesel Toys.",
   "conf": "verified",
   "src": [
    {
     "label": "Diesel Toys",
     "url": "https://www.dieseltoys.com/2016-2023-tacoma"
    }
   ],
   "steps": [
    {
     "text": "2016–2023 Tacoma 1GD-FTV powertrain $24,000.00; conversion installation package $17,500.00."
    },
    {
     "text": "FAQ: 100–120 labor hours; \"$30-35k for a completed conversion\"; deposit $18–20k."
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "swap-5to6",
   "type": "swap",
   "title": "G2 5-lug to 6-lug",
   "summary": "No practical conversion.",
   "conf": "unconfirmed",
   "src": [],
   "steps": [
    {
     "text": "TacomaWorld members say frame, suspension, hubs, axles, brakes and driveshaft differ; buy a 6-lug truck or use wheel adapters. Threads surfaced only in a search extract and weren't opened.",
     "conf": "unconfirmed"
    }
   ],
   "torque": null,
   "parts": []
  }
 ],
 "tipsTitle": "Vehicle health tips",
 "tips": [
  {
   "text": "To check the 3rd gen auto, add a quart of WS through the 24 mm fill plug (29 ft-lb), jump OBD pins 4 and 13, start it, shift P-S-P, then N-D for 6 seconds until D shows for 2 seconds. When D comes back (about 8 minutes) pull the 5 mm overflow plug until it trickles and refit with crush washer 35178-30010 at 15 ft-lb; stop if D starts blinking.",
   "source_url": "https://www.tacomaworld.com/threads/3rd-gen-automatic-transmission-fluid-level-check-diy.547455/",
   "source_name": "Tacoma World: 3rd Gen Automatic Transmission Fluid Level Check DIY",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "If only a trickle comes out when you pull the overflow plug, the transmission is more than a quart low; add another quart and redo the check once the exhaust cools. That owner's normally shifting 2018 was about 1/3 quart low.",
   "source_url": "https://www.tacomaworld.com/threads/3rd-gen-automatic-transmission-fluid-level-check-diy.547455/",
   "source_name": "Tacoma World: 3rd Gen Automatic Transmission Fluid Level Check DIY",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "The stock rear diff breather is one-way, so a hot axle dunked in water pulls water in past the seals; after a crossing halfway up the tire, change the rear diff oil. The front diff, transmission and transfer case breathers already run up into the engine bay with two-way valves.",
   "source_url": "https://www.tacomaworld.com/threads/breather-locations-on-2nd-gens.435663/",
   "source_name": "Tacoma World: Breather locations on 2nd gens",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "The factory rear breather sits about 18 in off the ground, so owners extend it with a two-way fitting to the bed cubby (it has a drain hole) or behind the driver taillight. Some warn the taillight pocket has an open wiring hole and prefer the cubby.",
   "source_url": "https://www.tacomaworld.com/threads/rear-differential-breather-relocation.704979/",
   "source_name": "Tacoma World: REAR DIFFERENTIAL BREATHER RELOCATION",
   "confidence": "forum",
   "date_checked": "2026-10-11",
   "disputed": true
  },
  {
   "text": "On the 2.7, replace the failure-prone coolant bypass hose with metal pipe 16268-75130 and gasket 16258-75021. A near-identical pipe with a center mounting bracket is the wrong part.",
   "source_url": "https://www.tacomaworld.com/threads/part-number-coolant-bypass-pipe-2006-2-7l.605819/",
   "source_name": "Tacoma World: Part number ,coolant bypass pipe,2006 2.7L?",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "If a 2.7 slowly loses coolant with no puddle, look for dry pink crust at the bypass pipe near the dipstick and at the small upward nipple at the firewall end that feeds the throttle body hose; that nipple tends to crack. Move the hoses gently while checking.",
   "source_url": "https://www.tacomaworld.com/threads/coolant-magically-vanishing-2-7l-2tr-fe.798482/",
   "source_name": "Tacoma World: Coolant magically vanishing 2.7L 2tr-fe",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "Owners who keep salt-state frames clean wash and dry the frame, spray inside the boxed rails, and reapply every fall; one uses 2-3 quarts through an applicator gun plus cans for doors and tailgate. Keep it off brakes, exhaust, belts and soft rubber.",
   "source_url": "https://www.tacomaworld.com/threads/using-fluid-film.760731/",
   "source_name": "Tacoma World: Using Fluid Film",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  }
 ],
 "dyno": {
  "columns": [
   "Truck",
   "Result (rear-wheel)",
   "Notes",
   "Confidence"
  ],
  "rows": [
   [
    "G2 stock 2005 X-Runner (URD, DynoJet)",
    "205 rwhp (500 mi); 209 (~15k); 207 (California DynoJet)",
    "A stock 4th-gen 4Runner made 209 and 204",
    "forum"
   ],
   [
    "G2 1GR-FE stock, typical range",
    "180–210 rwhp, 220–240 rwtq",
    "One member's range",
    "forum"
   ],
   [
    "G2 2006 double cab long bed 4×4 on 33s",
    "189 rwhp stock → 201 with headers/exhaust (second cats removed) → 210 with K&N (206 after battery reset)",
    "\"Max torque was exactly the same.\" Owner guessed ~1 mpg better. Quoted from Toyotanation",
    "forum"
   ],
   [
    "G2 with JBA shorties + K&N + Magnaflow",
    "214.82 rwhp / 229.66 rwtq (DynoJet)",
    "No stock baseline",
    "forum"
   ],
   [
    "G3 2018 TRD OR AT, OVTune, Injen intake, 285/75R16 KO2",
    "244 whp / 235 wtq (DynoJet)",
    "Before a Magnuson install",
    "forum"
   ],
   [
    "OTT stock-vs-tune runs (G2 and G3)",
    "Not captured",
    "Numbers are in images",
    "unknown"
   ]
  ],
  "src": [
   {
    "label": "customtacos 1GR stock rwhp",
    "url": "https://www.customtacos.com/threads/1gr-fe-stock-rwtq-rwhp.142057/"
   },
   {
    "label": "customtacos JBA headers dyno",
    "url": "https://www.customtacos.com/threads/06-w-jba-headers-intake-dyno.64819/"
   },
   {
    "label": "TacomaWorld Magnuson mega thread",
    "url": "https://www.tacomaworld.com/threads/magnuson-supercharger-mega-thread-for-2016-tacoma-unboxing-install-diy-dyno-video.693562/"
   },
   {
    "label": "TacomaWorld OTT thread",
    "url": "https://www.tacomaworld.com/threads/overland-torque-tune-ott-by-overland-tailor.759590/"
   }
  ]
 },
 "videos": [
  {
   "title": "RUST Damage! How to check your Toyota frame.",
   "channel": "JDesigns",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=HhiJN6h0sRs",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "Toyota Frames, What to Know Part 1.",
   "channel": "Rustless Rides",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=mGshg8C2wLc",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "Belt and Idler Replacement + Bearing Inspection Tip$ and Trick$",
   "channel": "KFlo Tacoma Tutorials",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=ZKq3FBsvFsI",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "How to Replace Serpentine Belt Idler Pulley 2005-2015 Toyota Tacoma 2.7L L4",
   "channel": "TRQ",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=GGEHggztiVU",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "How To Change Spark Plugs on a 2nd Gen Tacoma! (2005-2015)",
   "channel": "OutdoorTaco",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=u9F2Rh3aMcc",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "How to Replace Lower Ball Joints 2005-2015 Toyota Tacoma",
   "channel": "TRQ",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=6HoIOsqQ82I",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "How To Replace Lower Ball Joints On A 2nd Gen Tacoma",
   "channel": "OutdoorTaco",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=Jgoziim3S0E",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "ICON Leveling Kit Install On Your 2016-2023 Tacoma",
   "channel": "Yota Xpedition",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=jKYFtirJjPw",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "16-23 Toyota Tacoma 3.5 V6 - Spark Plug Replacement Without Removing the Intake Manifold.",
   "channel": "Automotive Insight",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=zrOfNMM5MoQ",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "Tacoma IFS Clunk? ECGS Bushing to the Rescue",
   "channel": "Into the Still",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=aIYPMTJDxlw",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "2017 Tacoma Drive Shaft Clunks",
   "channel": "2rawww",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=tkuVHIzQXt0",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "Why You NEED to Regear Your Toyota Tacoma! Benefits, 4.88 vs 5.29s, and FAQs.",
   "channel": "Mountain Yotas",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=LNjrC1D1Vhs",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "How to Choose Your Tacoma Gears 4.88 or 5.29? Re-gear Explained. | Nitro Gears",
   "channel": "TacomaBeast",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=9DA2M3G7pqs",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "Supercharged 3rd Gen Toyota Tacoma | Unboxing, Installation & Tune",
   "channel": "TacomaBeast",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=8Wrk-o5qhSI",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "3rd Gen Tacoma Magnuson SuperCharger INSTALL!",
   "channel": "YotaMafia",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=V85PKUOM1H4",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  },
  {
   "title": "Tacoma Rear Disc Brake Conversion - S.O.S Performance",
   "channel": "SeanS54",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=JLB0f7b3A2s",
   "note": "Title and channel confirmed via oEmbed; content not reviewed."
  }
 ],
 "unknowns": [
  "2GR-FKS cylinder head bolt torque (only head removal on the mirror; secondary 36 N·m + 90° + 90° is Unconfirmed).",
  "2005 and 2007 axle ratios (no brochure found).",
  "Taco-tick bulletin T-SB-0115-22 Rev2 for Tacoma (not opened).",
  "Real-world MPG (Fuelly blocks automated access); G3 regear MPG.",
  "OTT and stock G3 dyno sheets (numbers are in images).",
  "G3 lowered fitment results; G2 2/3 and 3/4 drop tire and wheel results.",
  "Prices: Flowmaster Flow FX (G3), Katzkin seats (only option prices shown), a stereo/head unit.",
  "TPMS sensor part numbers (search extracts only).",
  "A G3 driveshaft-clunk bulletin, if any.",
  "G2 X-Runner suspension specifics and 2.7 2WD 5-lug lift options (RC kits exclude 5-lug)."
 ],
 "sellers": [],
 "partCategories": [
  "Suspension & Stance",
  "Exhaust",
  "Intake & Tuning",
  "Forced Induction",
  "Gears, Lockers & Brakes",
  "Lighting",
  "Exterior",
  "Bed & Tonneau",
  "Interior",
  "Engine",
  "Ignition",
  "Fuel System",
  "Cooling",
  "HVAC",
  "Electrical",
  "Brakes",
  "Steering",
  "Drivetrain",
  "Body",
  "Filters & Fluids"
 ],
 "parts": [
  {
   "id": "lev-rc-743",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "2\" leveling kit (composite spacer)",
   "brand": "Rough Country",
   "part_number": "743",
   "fitment": {
    "years": "2005–2023",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Not 5-lug, T/X Baja or TRD Pro"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 49.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/toyota-leveling-lift-kit-743",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 49.95,
    "url": "https://www.roughcountry.com/product/toyota-leveling-lift-kit-743",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Owners say strut-top spacers on worn stock struts make the ride worse, and a shop-installed 3 in RC spacer kit on a 2nd gen was called extremely stiff a year later. Check the shocks' mileage before blaming the spacer, and plan real struts if you want ride quality.",
     "source_url": "https://www.tacomaworld.com/threads/2nd-gen-tacoma-4x2-w-3-rough-country-lift.853642/",
     "source_name": "Tacoma World: 2nd gen Tacoma 4x2 w/ 3\" Rough Country Lift",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "lift-rc-74530",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "3\" lift (strut spacers, 2\" rear blocks, N3 shocks)",
   "brand": "Rough Country",
   "part_number": "74530",
   "fitment": {
    "years": "2005–2023",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Not 5-lug, T/X Baja or TRD Pro"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 259.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/configurable/toyota-suspension-lift-kit-745c",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "From price; red spacer $269.95"
    }
   ],
   "notes": "Page contradicts itself on cutting; plan for minor cutting.",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 259.95,
    "url": "https://www.roughcountry.com/product/configurable/toyota-suspension-lift-kit-745c",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A 3 in spacer-and-block kit on stock struts and springs gave a 2008 PreRunner a very harsh ride; owners say that is normal for spacer lifts, not a wrong kit. RC lists it as 4WD because it includes front diff drop spacers, which a PreRunner simply leaves out.",
     "source_url": "https://www.tacomaworld.com/threads/installed-3-lift-but-ride-became-stiff-due-to-wrong-kit.842823/",
     "source_name": "Tacoma World: Installed 3\" lift but ride became stiff due to wrong kit",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Rough Country advises a carrier bearing drop on 3 in lifted trucks with a two-piece driveshaft; order the spacer with the kit.",
     "source_url": "https://www.roughcountry.com/product/configurable/toyota-suspension-lift-kit-745c",
     "source_name": "Rough Country 74530",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "lift-rc-75820",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "6\" suspension lift",
   "brand": "Rough Country",
   "part_number": "75820",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Factory wheels will not work"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 1149.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/configurable/toyota-suspension-lift-kit-75820c",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "From price; N3 $1,499.95; M1 $1,759.95; Vertex $3,199.95"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 1149.95,
    "url": "https://www.roughcountry.com/product/configurable/toyota-suspension-lift-kit-75820c",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A 2019 on the RC 6 in kit with -38 offset wheels had steering wheel jerk over bumps even after alignment. Owners said it needs far more caster from upgraded UCAs, while RC and the dealer told the owner UCAs were only needed on the 3 in kit.",
     "source_url": "https://www.tacomaworld.com/threads/3rd-gen-6-lift-issue.814834/",
     "source_name": "Tacoma World: 3rd gen 6\" lift issue!",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "lift-rc-747",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "6\" suspension lift",
   "brand": "Rough Country",
   "part_number": "747.20",
   "fitment": {
    "years": "2005–2015 (G2)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "6-lug only; factory wheels won't work"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 1049.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/configurable/toyota-suspension-lift-kit-747c",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "From price; N3 747.23 $1,399.95; M1 74740 $1,659.95"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 1049.95,
    "url": "https://www.roughcountry.com/product/configurable/toyota-suspension-lift-kit-747c",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "susp-bilstein-6112",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "6112 front + 5100 rear kit",
   "brand": "Bilstein",
   "part_number": "47-309975 / 24-186728",
   "fitment": {
    "years": "2005–2023",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "6-lug only"
   },
   "offers": [
    {
     "seller": "1Source Off-Road",
     "price": 899.88,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.1sourceoffroad.com/shop/p/47-309975-24-186728-bilstein-6112-strut-and-coil-spring-suspension-kit-with-rear-5100-series-shock-absorbers-for-2005-2023-toyota-tacoma-6-lug-2as77",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "List $958.00"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "1Source Off-Road",
    "price": 899.88,
    "url": "https://www.1sourceoffroad.com/shop/p/47-309975-24-186728-bilstein-6112-strut-and-coil-spring-suspension-kit-with-rear-5100-series-shock-absorbers-for-2005-2023-toyota-tacoma-6-lug-2as77",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On a 3rd gen the 6/5 clip setting gave about 2 in of front lift; one owner found 4/5 only gave 1.5 in and moved back up. For driver-side lean, others run even clips plus a 1/4 in driver spacer, and if a bumper or winch is coming, order the 650 lb spring before install.",
     "source_url": "https://www.tacomaworld.com/threads/6112-what-clip-setting-on-3rd-gen-for-2.558154/",
     "source_name": "Tacoma World: 6112 - What clip setting on 3rd gen for 2\"?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Rental parts-store spring compressors were too fat to let the 6112 body slide through once the spring was compressed, so the owner had to install with a poor seat on the spring. Buy the coilovers pre-assembled or use a compressor made for coilovers.",
     "source_url": "https://www.tacomaworld.com/threads/3rd-gen-bilstein-6112-5160-review.456173/",
     "source_name": "Tacoma World: 3rd Gen Bilstein 6112/5160 review",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "susp-ome-1203k",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "BP-51 2\" kit, front 2\"/0–330 lb, rear 0\"",
   "brand": "ARB / Old Man Emu",
   "part_number": "1203K",
   "fitment": {
    "years": "2005–2023",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ARB USA",
     "price": 3309.7,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://store.arbusa.com/bp-51-2-suspension-kit-for-tacoma-2005-23-front-2in-0-330lb-rear-0in-0lb-1203k/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "ARB USA",
    "price": 3309.7,
    "url": "https://store.arbusa.com/bp-51-2-suspension-kit-for-tacoma-2005-23-front-2in-0-330lb-rear-0in-0lb-1203k/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "ARB's BP-51 preload chart for the Tacoma is 10 mm with no accessories, 15 mm with an ARB bumper and 20 mm with bumper and winch. ARB says preload is only for constant added weight; cranking it for ride height makes the ride harsher and cuts front travel.",
     "source_url": "https://arbusa.com/news/how-to-adjust-bp-51-preload",
     "source_name": "ARB USA: How to Adjust BP-51 Preload",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On a 2017 install the printed steps for the rear lower shock carrier extensions were wrong: finger-tighten the shock at the top first, mock up the lower extension on the stock mount, push the lower eye in, then tighten everything.",
     "source_url": "https://www.tacomaworld.com/threads/ome-bp-51-review-on-3rd-gen.485741/",
     "source_name": "Tacoma World: OME BP-51 Review on 3rd Gen",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The front coilovers ship at the 20 mm setting; with no front weight one owner's truck topped out constantly. Dropping to 5 mm still gave about 2 in of front lift (a friend at 10 mm kept about 3 in), and BajaKits UCAs kept caster in spec even though OME does not require them.",
     "source_url": "https://www.tacomaworld.com/threads/ome-bp-51-install-report-and-height-adjustment.476085/",
     "source_name": "Tacoma World: OME BP-51 Install Report and Height Adjustment",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "susp-ome-1205k",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "BP-51 2\" kit, rear 2\"/660 lb",
   "brand": "ARB / Old Man Emu",
   "part_number": "1205K",
   "fitment": {
    "years": "2005–2023",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ARB USA",
     "price": 4259.25,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://store.arbusa.com/bp-51-2-suspension-kit-for-tacoma-2005-23-front-2in-0-330lb-rear-2in-660lb-1205k/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "ARB USA",
    "price": 4259.25,
    "url": "https://store.arbusa.com/bp-51-2-suspension-kit-for-tacoma-2005-23-front-2in-0-330lb-rear-2in-660lb-1205k/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "ARB's BP-51 preload chart for the Tacoma is 10 mm with no accessories, 15 mm with an ARB bumper and 20 mm with bumper and winch. ARB says preload is only for constant added weight; cranking it for ride height makes the ride harsher and cuts front travel.",
     "source_url": "https://arbusa.com/news/how-to-adjust-bp-51-preload",
     "source_name": "ARB USA: How to Adjust BP-51 Preload",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On a 2017 install the printed steps for the rear lower shock carrier extensions were wrong: finger-tighten the shock at the top first, mock up the lower extension on the stock mount, push the lower eye in, then tighten everything.",
     "source_url": "https://www.tacomaworld.com/threads/ome-bp-51-review-on-3rd-gen.485741/",
     "source_name": "Tacoma World: OME BP-51 Review on 3rd Gen",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The front coilovers ship at the 20 mm setting; with no front weight one owner's truck topped out constantly. Dropping to 5 mm still gave about 2 in of front lift (a friend at 10 mm kept about 3 in), and BajaKits UCAs kept caster in spec even though OME does not require them.",
     "source_url": "https://www.tacomaworld.com/threads/ome-bp-51-install-report-and-height-adjustment.476085/",
     "source_name": "Tacoma World: OME BP-51 Install Report and Height Adjustment",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "susp-toytec-boss",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "Boss 2.5 system (2–3\" lift)",
   "brand": "ToyTec",
   "part_number": "n/s",
   "fitment": {
    "years": "2005+",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ToyTec (manufacturer)",
     "price": 3202.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://toyteclifts.com/toytec-boss-2-5-series-performance-suspension-system-2-3-lift-kit-for-2005-2023-tacoma",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Page JSON; configurable"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "ToyTec (manufacturer)",
    "price": 3202.95,
    "url": "https://toyteclifts.com/toytec-boss-2-5-series-performance-suspension-system-2-3-lift-kit-for-2005-2023-tacoma",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The Boss 2.5 front uses a 700 lb spring versus 600 lb on Kings, and owners warn it rides stiff without a bumper or winch up front, more so if you preload it for lift. One shop on the thread bills 7 hours at $150/hr for a comparable coilover kit, including setting ride height.",
     "source_url": "https://www.tacomaworld.com/threads/toytec-boss-2-0-vs-2-5.753912/",
     "source_name": "Tacoma World: Toytec Boss 2.0 vs 2.5",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "low-djm-3-3",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "3\" front / 3\" rear complete lowering kit with shocks",
   "brand": "DJM",
   "part_number": "n/s",
   "fitment": {
    "years": "2005–2014",
    "models": [
     "Tacoma"
    ],
    "drive": [
     "2WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "DJM: not PreRunner"
   },
   "offers": [
    {
     "seller": "DJM (manufacturer)",
     "price": 977.01,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://djmsuspension.com/product/2005-2014-toyota-tacoma-3-inch-front-3-inch-rear-complete-lowering-kit-shocks-included-2/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "DJM (manufacturer)",
    "price": 977.01,
    "url": "https://djmsuspension.com/product/2005-2014-toyota-tacoma-3-inch-front-3-inch-rear-complete-lowering-kit-shocks-included-2/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Running a 4 in rear block on a 5-lug 2nd gen without a frame C-notch means constant bottoming. Owners grind off the 4 rivets holding the factory bump stop for about another 1/2 in, and the welder who did one notch charged half the labor because the stops were already removed.",
     "source_url": "https://www.tacomaworld.com/threads/djm-3-4-install-qs.861316/",
     "source_name": "Tacoma World: DJM 3/4 install Qs",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "After a DJM 3/4 drop, front binding at full lock turned out to be the stock 14 in wheels catching their balance weights, and the rear sat on the bump stops until they were cut down. The owner also found the DJM shocks bouncy and planned low-profile stops plus a notch.",
     "source_url": "https://www.tacomaworld.com/threads/djm-lowering-kit-issues.733382/",
     "source_name": "Tacoma World: DJM Lowering kit issues",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "low-djm-rk2806-3",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "3\" rear lowering kit",
   "brand": "DJM",
   "part_number": "RK2806-3",
   "fitment": {
    "years": "2005–2014",
    "models": [
     "Tacoma"
    ],
    "drive": [
     "2WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Lowriders.ca",
     "price": 466.81,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.lowriders.ca/i-23901095-rk2806-3-djm-suspension-3-inch-rear-lowering-kit-2005-2014-tacoma-2wd.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Lowriders.ca",
    "price": 466.81,
    "url": "https://www.lowriders.ca/i-23901095-rk2806-3-djm-suspension-3-inch-rear-lowering-kit-2005-2014-tacoma-2wd.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Running a 4 in rear block on a 5-lug 2nd gen without a frame C-notch means constant bottoming. Owners grind off the 4 rivets holding the factory bump stop for about another 1/2 in, and the welder who did one notch charged half the labor because the stops were already removed.",
     "source_url": "https://www.tacomaworld.com/threads/djm-3-4-install-qs.861316/",
     "source_name": "Tacoma World: DJM 3/4 install Qs",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "low-djm-2806-34",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "Complete 3\" front / 4\" rear lowering kit with shocks",
   "brand": "DJM",
   "part_number": "DJM2806-3/4",
   "fitment": {
    "years": "2005–2014",
    "models": [
     "Tacoma"
    ],
    "drive": [
     "2WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Beefcake Racing",
     "price": 977.01,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.beefcakeracing.com/djm-suspension-complete-lowering-kit-w-shocks-3-front-4-rear-2005-2014-tacoma-djm2806-3-4/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Beefcake Racing",
    "price": 977.01,
    "url": "https://www.beefcakeracing.com/djm-suspension-complete-lowering-kit-w-shocks-3-front-4-rear-2005-2014-tacoma-djm2806-3-4/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Running a 4 in rear block on a 5-lug 2nd gen without a frame C-notch means constant bottoming. Owners grind off the 4 rivets holding the factory bump stop for about another 1/2 in, and the welder who did one notch charged half the labor because the stops were already removed.",
     "source_url": "https://www.tacomaworld.com/threads/djm-3-4-install-qs.861316/",
     "source_name": "Tacoma World: DJM 3/4 install Qs",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "After a DJM 3/4 drop, front binding at full lock turned out to be the stock 14 in wheels catching their balance weights, and the rear sat on the bump stops until they were cut down. The owner also found the DJM shocks bouncy and planned low-profile stops plus a notch.",
     "source_url": "https://www.tacomaworld.com/threads/djm-lowering-kit-issues.733382/",
     "source_name": "Tacoma World: DJM Lowering kit issues",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "low-tr-2037",
   "platform": "Tacoma",
   "category": "Suspension & Stance",
   "name": "2\" front / 3.5\" rear lowering kit (Base/SR5)",
   "brand": "n/s",
   "part_number": "TR-2037",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "LCE Performance",
     "price": 587.02,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.lceperformance.com/rear-lowering-kit-2-3-5-front-rear-2016-2023-tacoma/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    },
    {
     "seller": "Suspension Superstore",
     "price": 599.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://suspensionsuperstore.com/2016-2023-toyota-tacoma-base-sr5-2f-3-5r-lowering-kit-tr-2037",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Same page also shows $649.99"
    }
   ],
   "notes": "Contents: shock sleeves, billet spring perches, U-bolts, axle flip perches, lower shock mounts, sway-bar spacers, rear shackles, bump stops.",
   "best_offer": {
    "seller": "LCE Performance",
    "price": 587.02,
    "url": "https://www.lceperformance.com/rear-lowering-kit-2-3-5-front-rear-2016-2023-tacoma/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "exh-magnaflow-19293",
   "platform": "Tacoma",
   "category": "Exhaust",
   "name": "Street Series cat-back",
   "brand": "MagnaFlow",
   "part_number": "19293",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "3.5"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "MagnaFlow (manufacturer)",
     "price": 1058,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.magnaflow.com/products/19293-magnaflow-2016-2023-toyota-tacoma-3-5l-street-series-cat-back-performance-exhaust-system-19293",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "MagnaFlow (manufacturer)",
    "price": 1058,
    "url": "https://www.magnaflow.com/products/19293-magnaflow-2016-2023-toyota-tacoma-3-5l-street-series-cat-back-performance-exhaust-system-19293",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Several 3rd gen owners pulled the MagnaFlow Street cat-back within a week for in-cab drone, one saying you could not hold a conversation around town; MBRP owners reported drone at 1,500-3,000 rpm and 65 mph in 6th. One owner who also had a 2nd gen MagnaFlow liked it there.",
     "source_url": "https://www.tacomaworld.com/threads/exhaust-choice-magnaflow-vs-mbrp.536017/",
     "source_name": "Tacoma World: Exhaust choice? Magnaflow vs. MBRP",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "exh-magnaflow-19585",
   "platform": "Tacoma",
   "category": "Exhaust",
   "name": "Overland Series cat-back",
   "brand": "MagnaFlow",
   "part_number": "19585",
   "fitment": {
    "years": "2005–2015 (G2)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "4.0"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "MagnaFlow (manufacturer)",
     "price": 1099,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.magnaflow.com/products/19585-magnaflow-r-2005-2015-toyota-tacoma-4-0l-overland-seriestm-cat-back-performance-exhaust-system-19585",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "MagnaFlow (manufacturer)",
    "price": 1099,
    "url": "https://www.magnaflow.com/products/19585-magnaflow-r-2005-2015-toyota-tacoma-4-0l-overland-seriestm-cat-back-performance-exhaust-system-19585",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "exh-borla-140680",
   "platform": "Tacoma",
   "category": "Exhaust",
   "name": "S-Type cat-back",
   "brand": "Borla",
   "part_number": "140680",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "3.5"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Borla (manufacturer)",
     "price": 838.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.borla.com/products/toyota-tacoma-cat-back-exhaust-system-140680",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Page also lists other variants $719.99–$899.99"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Borla (manufacturer)",
    "price": 838.99,
    "url": "https://www.borla.com/products/toyota-tacoma-cat-back-exhaust-system-140680",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A 2016 TRD Sport owner swapped to the Borla S-Type after four weeks of MagnaFlow drone on every downshift (and weld spatter on the muffler). He reported the Borla deeper outside, better built and without the cabin drone.",
     "source_url": "https://www.tacomaworld.com/threads/sound-clip-borla-s-type-cat-back-exhaust-system-for-2016-2017-tacoma.470166/",
     "source_name": "Tacoma World: *SOUND CLIP* Borla S-Type cat-back exhaust system for 2016-2017 Tacoma",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "intake-kn-63-9039",
   "platform": "Tacoma",
   "category": "Intake & Tuning",
   "name": "63 Series AirCharger intake",
   "brand": "K&N",
   "part_number": "63-9039",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "3.5"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ExtremeTerrain",
     "price": 367.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.extremeterrain.com/k-n-series-63-aircharger-cold-airtake-1619-35l-tacoma.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "ExtremeTerrain",
    "price": 367.99,
    "url": "https://www.extremeterrain.com/k-n-series-63-aircharger-cold-airtake-1619-35l-tacoma.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A 2016 3.5 owner got lean codes on both banks, confirmed on the dealer's Techstream even at idle, until he refit the stock airbox; K&N would not take a return and told him to reinstall and call tech support. Another owner reported months on an aFe intake with no codes.",
     "source_url": "https://www.tacomaworld.com/threads/k-n-63-series-causes-lean-condition-and-cel.461783/",
     "source_name": "Tacoma World: K&N 63 series causes lean condition and CEL",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "intake-kn-63-9025",
   "platform": "Tacoma",
   "category": "Intake & Tuning",
   "name": "Performance air intake",
   "brand": "K&N",
   "part_number": "63-9025",
   "fitment": {
    "years": "2005–2011",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "4.0"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Snake River Performance",
     "price": 367.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.snakeriverperformance.com/k-n-63-9025-performance-air-intake-system-for-2005-2014-toyota-tacoma-4-0l-oiled/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Snake River Performance",
    "price": 367.99,
    "url": "https://www.snakeriverperformance.com/k-n-63-9025-performance-air-intake-system-for-2005-2014-toyota-tacoma-4-0l-oiled/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "For a 2005-2011 4.0, the 57-9025 keeps the stock airbox while the 63-9025 replaces it with a tube to the throttle body; neither heat shield fully seals, so both pull hot engine-bay air. Owners say expect more intake sound, not measurable power or mpg.",
     "source_url": "https://www.tacomaworld.com/threads/k-n-performance-intake.727512/",
     "source_name": "Tacoma World: K&N Performance Intake",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "intake-kn-63-9037",
   "platform": "Tacoma",
   "category": "Intake & Tuning",
   "name": "Performance air intake",
   "brand": "K&N",
   "part_number": "63-9037",
   "fitment": {
    "years": "2012–2015",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "4.0"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Snake River Performance",
     "price": 367.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.snakeriverperformance.com/k-n-63-9037-performance-air-intake-system-for-2012-2015-toyota-tacoma-4-0l-oiled/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Snake River Performance",
    "price": 367.99,
    "url": "https://www.snakeriverperformance.com/k-n-63-9037-performance-air-intake-system-for-2012-2015-toyota-tacoma-4-0l-oiled/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "tune-ay-ott",
   "platform": "Tacoma",
   "category": "Intake & Tuning",
   "name": "OTT torque tune (NA)",
   "brand": "AY Tuning",
   "part_number": "n/s",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "3.5",
     "2.7"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AY Tuning",
     "price": 460,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://aytuning.com/products/2016-2022-3-5l-tacoma-overland-torque-tune",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AY Tuning",
    "price": 460,
    "url": "https://aytuning.com/products/2016-2022-3-5l-tacoma-overland-torque-tune",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On a stock 2021 TRD Sport, the Medium and Spicy throttle maps were jerky from a stop and spun the tires; Lite/Mild felt close to stock pedal with the smoother, higher-rpm shifting and no highway gear hunting. Start mild, because the tuner can step the throttle map down later.",
     "source_url": "https://www.tacomaworld.com/threads/ott-tune-review-lite-vs-mild-vs-medium-vs-spicy.827767/",
     "source_name": "Tacoma World: OTT Tune Review: Lite vs Mild vs Medium vs Spicy",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Owners who started on Medium/Spicy found it took constant effort to drive smoothly and had the tuner reflash them to Mild/Medium, which several call the best all-round setting. If Drive still shifts in a way you dislike, use S4 to hold gears.",
     "source_url": "https://www.tacomaworld.com/threads/ott-tune-flavors-set-up-experience.829755/",
     "source_name": "Tacoma World: OTT tune flavors + set up + experience",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Manual 3rd gens need their own calibration. One 2020 TRD Pro 6MT owner tried OVTune, KDMax, Coyoza and OTT and preferred OTT, so confirm the tuner has a manual-transmission file before buying.",
     "source_url": "https://www.tacomaworld.com/threads/overland-torque-tune-ott-by-overland-tailor.759590/",
     "source_name": "TacomaWorld OTT thread",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tune-yotawerx",
   "platform": "Tacoma",
   "category": "Intake & Tuning",
   "name": "ECU tune",
   "brand": "YotaWerx",
   "part_number": "n/s",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Marlin Crawler",
     "price": 450,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.marlincrawler.com/product/yotawerx-ecu-tune-for-2016-2023-tacoma/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Marlin Crawler",
    "price": 450,
    "url": "https://www.marlincrawler.com/product/yotawerx-ecu-tune-for-2016-2023-tacoma/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "tune-tunedyota-ott",
   "platform": "Tacoma",
   "category": "Intake & Tuning",
   "name": "OTT tune",
   "brand": "Tuned Yota",
   "part_number": "n/s",
   "fitment": {
    "years": "2005+",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Tuned Yota",
     "price": 450,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://tunedyota.com/toyota-tacoma-ott-tune",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Range $450–$950 (page JSON); low end shown"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Tuned Yota",
    "price": 450,
    "url": "https://tunedyota.com/toyota-tacoma-ott-tune",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On a stock 2021 TRD Sport, the Medium and Spicy throttle maps were jerky from a stop and spun the tires; Lite/Mild felt close to stock pedal with the smoother, higher-rpm shifting and no highway gear hunting. Start mild, because the tuner can step the throttle map down later.",
     "source_url": "https://www.tacomaworld.com/threads/ott-tune-review-lite-vs-mild-vs-medium-vs-spicy.827767/",
     "source_name": "Tacoma World: OTT Tune Review: Lite vs Mild vs Medium vs Spicy",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Owners who started on Medium/Spicy found it took constant effort to drive smoothly and had the tuner reflash them to Mild/Medium, which several call the best all-round setting. If Drive still shifts in a way you dislike, use S4 to hold gears.",
     "source_url": "https://www.tacomaworld.com/threads/ott-tune-flavors-set-up-experience.829755/",
     "source_name": "Tacoma World: OTT tune flavors + set up + experience",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Manual 3rd gens need their own calibration. One 2020 TRD Pro 6MT owner tried OVTune, KDMax, Coyoza and OTT and preferred OTT, so confirm the tuner has a manual-transmission file before buying.",
     "source_url": "https://www.tacomaworld.com/threads/overland-torque-tune-ott-by-overland-tailor.759590/",
     "source_name": "TacomaWorld OTT thread",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "sc-magnuson-tvs1900",
   "platform": "Tacoma",
   "category": "Forced Induction",
   "name": "TVS1900 3.5 V6 supercharger system",
   "brand": "Magnuson",
   "part_number": "01-19-35-005-BL",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "2GR-FKS"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Magnuson (manufacturer)",
     "price": 7495,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://magnusonsuperchargers.com/products/01-19-35-005-bl",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Magnuson (manufacturer)",
    "price": 7495,
    "url": "https://magnusonsuperchargers.com/products/01-19-35-005-bl",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On a high-mileage 2GR-FKS (the asker was past 170k), run a static and running compression test plus a leak-down test before boosting; owners want leak-down under 25%. A smaller pulley later also needs intake and exhaust flow, possibly fuel pump, injectors and colder plugs, and a tune.",
     "source_url": "https://www.tacomaworld.com/threads/magnuson-supercharger-upgrades-and-limitations.710536/",
     "source_name": "Tacoma World: Magnuson Supercharger Upgrades and Limitations",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Magnuson on a G3: budget a 600 ft-lb or stronger impact for the crank bolt, and check your intake: an Injen intake was not compatible for one owner.",
     "source_url": "https://www.tacomaworld.com/threads/magnuson-supercharger-mega-thread-for-2016-tacoma-unboxing-install-diy-dyno-video.693562/",
     "source_name": "TacomaWorld Magnuson mega thread",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "sc-magnuson-mp90",
   "platform": "Tacoma",
   "category": "Forced Induction",
   "name": "MP90 4.0 V6 supercharger system",
   "brand": "Magnuson",
   "part_number": "01-90-40-007-BL",
   "fitment": {
    "years": "2005–2015 (G2)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "1GR-FE"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Magnuson (manufacturer)",
     "price": 6595,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://magnusonsuperchargers.com/products/01-90-40-007-bl",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Magnuson (manufacturer)",
    "price": 6595,
    "url": "https://magnusonsuperchargers.com/products/01-90-40-007-bl",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "If a 2012+ 4.0 ECU already has an N/A tune or the TSB update flashed, the Bully Dog, TRD supercharger or HPTuners supercharger calibration cannot be loaded on it. One 2015 manual owner needed a VIN-matched replacement ECU, so check this before buying the kit used.",
     "source_url": "https://www.tacomaworld.com/threads/need-help-magnuson-supercharger-calibration-and-tuning.749251/",
     "source_name": "Tacoma World: Need help Magnuson supercharger calibration and tuning !!!!!!!",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The supercharger belt on a 2nd gen 4.0 Magnuson is Dayco 21-2973, which can be hard to find. Owners use the Bando 5PK1790 (about $17) as a direct replacement, so keep a spare on long trips.",
     "source_url": "https://www.tacomaworld.com/threads/magnuson-supercharger-drive-belt-2nd-gen-needed.838296/",
     "source_name": "Tacoma World: Magnuson Supercharger drive belt 2nd gen needed",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "gear-nitro-g3",
   "platform": "Tacoma",
   "category": "Gears, Lockers & Brakes",
   "name": "8.75\" gear package (front + rear)",
   "brand": "Nitro Gear & Axle",
   "part_number": "n/s",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Unit 1203",
     "price": 1650,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://unit1203.com/products/nitro-gear-axle-16-23-tacoma-8-75-gear-package-kit",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Unit 1203",
    "price": 1650,
    "url": "https://unit1203.com/products/nitro-gear-axle-16-23-tacoma-8-75-gear-package-kit",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On the 3rd gen Toyota 8 in rear with a Nitro set, the installer targets 14-17 in-lb pinion bearing preload on new bearings and 0.006-0.009 in backlash, set with the third member's spanner nuts. Loctite and torque the ring gear and carrier cap bolts, follow the gear maker's break-in, then change the oil.",
     "source_url": "https://www.youtube.com/watch?v=vegkZZfcFWo",
     "source_name": "YouTube: Nitro Gear 4.88 Install on 3rd gen Tacoma (Victory 4x4)",
     "confidence": "video",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A TRD Off-Road leaked at the pinion seal a week after a 4.88 regear and again after the seal was replaced. Owners blamed setup tolerances, so make sure the shop uses the gear maker's specs, and check the diff breather while you are under there.",
     "source_url": "https://www.tacomaworld.com/threads/issues-with-regear-install-4-88.546169/",
     "source_name": "Tacoma World: Issues with regear install 4.88",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "gear-488-g2",
   "platform": "Tacoma",
   "category": "Gears, Lockers & Brakes",
   "name": "4.88 gear package, front + rear gears and master kits (factory locker, 8\"/8\" IFS)",
   "brand": "n/s",
   "part_number": "n/s",
   "fitment": {
    "years": "2005+ with factory locker",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "SOR Jeep and Truck",
     "price": 1075.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.sorjeepandtruck.com/product/toyota_tacoma_2005_and_factory_locker_88ifs_488_gear_package_front_and_rear_gears_and_master",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "MAP"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "SOR Jeep and Truck",
    "price": 1075.99,
    "url": "https://www.sorjeepandtruck.com/product/toyota_tacoma_2005_and_factory_locker_88ifs_488_gear_package_front_and_rear_gears_and_master",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "locker-arb-rd111",
   "platform": "Tacoma",
   "category": "Gears, Lockers & Brakes",
   "name": "8\" IFS Air Locker (3.91 & up)",
   "brand": "ARB",
   "part_number": "RD111",
   "fitment": {
    "years": "2005–2023",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "Front",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ExtremeTerrain",
     "price": 1299.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.extremeterrain.com/arb-tacoma-toyota-8-inch-ifs-air-locker-differential-for-391-up-gear-ratio-rd111.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "ExtremeTerrain",
    "price": 1299.95,
    "url": "https://www.extremeterrain.com/arb-tacoma-toyota-8-inch-ifs-air-locker-differential-for-391-up-gear-ratio-rd111.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The RD111 is for 3.91 and numerically higher gears and fits the same 8 in front clamshell in every 4x4 since 2005 (2016+ adds an oil temperature sensor). One DIYer upgraded the bulkhead O-rings to -006 (McMaster 8297T116) and the seal housing quad rings to -136 (6540K237), and warns some ARB manual steps for the newest bulkhead are best not followed.",
     "source_url": "https://www.tacomaworld.com/threads/front-arb-air-locker-diy-install-thread.692979/",
     "source_name": "Tacoma World: Front ARB Air Locker DIY & Install Thread",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Install the compressor before the truck goes to the gear shop and leave the air line coiled and capped at the frame, so the shop can connect it and leak-test the locker. ARB line is about 5 mm push-to-connect, so carry a union or two for trail repairs.",
     "source_url": "https://www.tacomaworld.com/threads/arb-locker-arb-compressor.666716/",
     "source_name": "Tacoma World: ARB Locker + ARB Compressor",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "brake-sos-xr",
   "platform": "Tacoma",
   "category": "Gears, Lockers & Brakes",
   "name": "TR12.2XR rear disc conversion",
   "brand": "SOS Performance",
   "part_number": "TR12.2XR",
   "fitment": {
    "years": "2005–2015 (G2)",
    "models": [
     "Tacoma"
    ],
    "drive": [
     "2WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "X-Runner and 2WD (5-lug)"
   },
   "offers": [
    {
     "seller": "SOS Performance (manufacturer)",
     "price": 999.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://sosperformance.com/products/rear-disc-conversion-fits-x-runner-2005-2015",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "From price; options to $1,219.97"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "SOS Performance (manufacturer)",
    "price": 999.99,
    "url": "https://sosperformance.com/products/rear-disc-conversion-fits-x-runner-2005-2015",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A past owner of the SOS rear disc kit said it worked, but parts he broke on the trail were expensive to replace and he would not buy it again. Before converting, owners suggest cleaning the drums and putting anti-seize where the shoes touch the backing plate.",
     "source_url": "https://www.tacomaworld.com/threads/3rd-gen-drum-brake-nonsense.817830/",
     "source_name": "Tacoma World: 3rd Gen Drum Brake Nonsense",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "brake-sos-pbkta",
   "platform": "Tacoma",
   "category": "Gears, Lockers & Brakes",
   "name": "TR.PBKTA parking-brake/backing-plate kit for rear disc conversion",
   "brand": "SOS Performance",
   "part_number": "TR.PBKTA",
   "fitment": {
    "years": "2005–2023",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "6-lug only"
   },
   "offers": [
    {
     "seller": "SOS Performance (manufacturer)",
     "price": 674.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://sosperformance.com/products/rear-disc-conversion-backing-plate-kit-2005-2023-tacoma-6-lug",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "From price; to $799.99"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "SOS Performance (manufacturer)",
    "price": 674.99,
    "url": "https://sosperformance.com/products/rear-disc-conversion-backing-plate-kit-2005-2023-tacoma-6-lug",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The SOS hardware kit (backing plates and e-brake cables) was about $340 in 2018, and the calipers, brackets, rotors and lines came to about $300 at RockAuto. From the dealer you also need 47613-60020 (x2), 47612-60020 and 47611-60020 for the parking brake struts and actuators.",
     "source_url": "https://www.tacomaworld.com/threads/rear-disc-conversion-information.536765/",
     "source_name": "Tacoma World: Rear Disc Conversion Information",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "light-morimoto-lf2-530",
   "platform": "Tacoma",
   "category": "Lighting",
   "name": "XB Evo LED headlights",
   "brand": "Morimoto",
   "part_number": "LF2-530",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Morimoto (manufacturer)",
     "price": 1649,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.morimotohid.com/16-23-Tacoma-xb-evo-headlights",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Morimoto (manufacturer)",
    "price": 1649,
    "url": "https://www.morimotohid.com/16-23-Tacoma-xb-evo-headlights",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "3rd gens came with three headlight types (halogen, halogen with LED DRL, full LED), which is why owners disagree about extra harnesses. A TRD Sport with factory LED DRLs should plug straight in without the adapters; if DRLs work but turn signals hyperflash, a look-alike connector is plugged into the wrong socket.",
     "source_url": "https://www.tacomaworld.com/threads/morimoto-xb-headlights-wiring-kerfuffle.833952/",
     "source_name": "Tacoma World: Morimoto XB headlights wiring kerfuffle",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "If the XB DRLs come on at 4 am with the truck off, the fuse tap is on the EFI fuse, which gets power when the ECU runs its after-shutdown tests. Move the tap to a fuse that is only live with the key on.",
     "source_url": "https://www.tacomaworld.com/threads/help-with-morimoto-xb-led-headlights.722440/",
     "source_name": "Tacoma World: Help with Morimoto XB LED headlights",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "light-morimoto-lf2-530y",
   "platform": "Tacoma",
   "category": "Lighting",
   "name": "XB Evo Hybrid headlights",
   "brand": "Morimoto",
   "part_number": "LF2-530Y",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Quadratec",
     "price": 1299,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.quadratec.com/p/morimoto/xb-evo-hybrid-headlights-toyota-tacoma-lf2-530y",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Quadratec",
    "price": 1299,
    "url": "https://www.quadratec.com/p/morimoto/xb-evo-hybrid-headlights-toyota-tacoma-lf2-530y",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "3rd gens came with three headlight types (halogen, halogen with LED DRL, full LED), which is why owners disagree about extra harnesses. A TRD Sport with factory LED DRLs should plug straight in without the adapters; if DRLs work but turn signals hyperflash, a look-alike connector is plugged into the wrong socket.",
     "source_url": "https://www.tacomaworld.com/threads/morimoto-xb-headlights-wiring-kerfuffle.833952/",
     "source_name": "Tacoma World: Morimoto XB headlights wiring kerfuffle",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "If the XB DRLs come on at 4 am with the truck off, the fuse tap is on the EFI fuse, which gets power when the ECU runs its after-shutdown tests. Move the tap to a fuse that is only live with the key on.",
     "source_url": "https://www.tacomaworld.com/threads/help-with-morimoto-xb-led-headlights.722440/",
     "source_name": "Tacoma World: Help with Morimoto XB LED headlights",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "light-morimoto-lf529",
   "platform": "Tacoma",
   "category": "Lighting",
   "name": "XB Hybrid LED headlights (white)",
   "brand": "Morimoto",
   "part_number": "LF529",
   "fitment": {
    "years": "2012–2015",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Morimoto (manufacturer)",
     "price": 1219,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.morimotohid.com/white-tacoma-12-15-xb-hybrid-led-headlights",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Morimoto (manufacturer)",
    "price": 1219,
    "url": "https://www.morimotohid.com/white-tacoma-12-15-xb-hybrid-led-headlights",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "tail-diode-g3",
   "platform": "Tacoma",
   "category": "Lighting",
   "name": "LED tail lights (pair)",
   "brand": "Diode Dynamics",
   "part_number": "n/s",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Diode Dynamics (manufacturer)",
     "price": 599,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.diodedynamics.com/2016-2023-toyota-tacoma-led-tail-lights-pair-2.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Diode Dynamics (manufacturer)",
    "price": 599,
    "url": "https://www.diodedynamics.com/2016-2023-toyota-tacoma-led-tail-lights-pair-2.html",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "tail-morimoto-g2",
   "platform": "Tacoma",
   "category": "Lighting",
   "name": "XB LED tail lights",
   "brand": "Morimoto",
   "part_number": "n/s",
   "fitment": {
    "years": "2005–2015 (G2)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "4x4TruckLEDs",
     "price": 469,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.4x4truckleds.com/morimoto-xb-led-tail-lights-for-2005-2015-toyota-tacoma/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "4x4TruckLEDs",
    "price": 469,
    "url": "https://www.4x4truckleds.com/morimoto-xb-led-tail-lights-for-2005-2015-toyota-tacoma/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "bumper-arb-summit",
   "platform": "Tacoma",
   "category": "Exterior",
   "name": "Summit front bumper kit",
   "brand": "ARB",
   "part_number": "3423160K",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Off Road Elements",
     "price": 2493.85,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.offroadelements.com/arb-summit-front-bumper-kit-tacoma-2016-2023/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Off Road Elements",
    "price": 2493.85,
    "url": "https://www.offroadelements.com/arb-summit-front-bumper-kit-tacoma-2016-2023/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "bumper-c4-overland",
   "platform": "Tacoma",
   "category": "Exterior",
   "name": "Overland front bumper",
   "brand": "C4 Fabrication",
   "part_number": "1200-3116-30",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Off Road Elements",
     "price": 1608,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.offroadelements.com/c4-fabrication-overland-front-bumper-tacoma-2016-2023/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "From price"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Off Road Elements",
    "price": 1608,
    "url": "https://www.offroadelements.com/c4-fabrication-overland-front-bumper-tacoma-2016-2023/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "C4's steps: trim the fender flare flush with the fender edge (mark it with masking tape) and paint the exposed fender black, then move the power steering cooler back on the supplied brackets. The third PS line bolt in the passenger wheel well is removed and not reused, and extra 1/2 in x 1 1/2 in bolts go into the frame crossmember corners.",
     "source_url": "https://www.tacomaworld.com/threads/c4-fab-16-overland-series-front-bumper-installation-instructions.445309/",
     "source_name": "Tacoma World: C4 FAB '16+ Overland Series front bumper installation instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "bumper-cbi-adventure",
   "platform": "Tacoma",
   "category": "Exterior",
   "name": "Moab 2.0 Adventure front bumper (steel/aluminum; side brackets extra)",
   "brand": "CBI Offroad",
   "part_number": "n/s",
   "fitment": {
    "years": "2005–2015 (G2)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "CBI Offroad (manufacturer)",
     "price": 1475,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://cbioffroadfab.com/product/toyota-moab-2-0-adventure-series-bumper-2005-2015/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Range $1,475.00–$2,200.00"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "CBI Offroad (manufacturer)",
    "price": 1475,
    "url": "https://cbioffroadfab.com/product/toyota-moab-2-0-adventure-series-bumper-2005-2015/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The Moab 2.0 comes with pre-drilled 1/2 in holes on 12 in centers that took a 28 in light bar with bottom-mount feet. The lower mount sandwiches between the sway bar and the frame, so soak the sway bar and tow loop bolts first; one installer snapped a coupler and found the tow loop bolts nearly seized.",
     "source_url": "https://www.tacomaworld.com/threads/cbi-moab-2-0-front-bumper-question.626978/",
     "source_name": "Tacoma World: CBI Moab 2.0 front bumper question?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "bumper-cbi-baja",
   "platform": "Tacoma",
   "category": "Exterior",
   "name": "Moab 2.0 Baja front bumper",
   "brand": "CBI Offroad",
   "part_number": "n/s",
   "fitment": {
    "years": "2005–2015 (G2)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Rebel Off Road",
     "price": 1350,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://rebeloffroad.com/cbi-toyota-tacoma-moab-2-0-baja-front-bumper-2005-2015/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "From price"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rebel Off Road",
    "price": 1350,
    "url": "https://rebeloffroad.com/cbi-toyota-tacoma-moab-2-0-baja-front-bumper-2005-2015/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The Moab 2.0 comes with pre-drilled 1/2 in holes on 12 in centers that took a 28 in light bar with bottom-mount feet. The lower mount sandwiches between the sway bar and the frame, so soak the sway bar and tow loop bolts first; one installer snapped a coupler and found the tow loop bolts nearly seized.",
     "source_url": "https://www.tacomaworld.com/threads/cbi-moab-2-0-front-bumper-question.626978/",
     "source_name": "Tacoma World: CBI Moab 2.0 front bumper question?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "grille-trd-pro",
   "platform": "Tacoma",
   "category": "Exterior",
   "name": "Genuine TRD Pro grille",
   "brand": "Toyota",
   "part_number": "n/s",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "The Yota Garage",
     "price": 499.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://theyotagarage.com/trd-pro-grille-genuine-oem-2016-2023-toyota-tacoma",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "The Yota Garage",
    "price": 499.99,
    "url": "https://theyotagarage.com/trd-pro-grille-genuine-oem-2016-2023-toyota-tacoma",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On a 2018+ truck with TSS, use the 2018 Pro grille PT228-35180 with the radar garnish 53141-35060. A 2016-17 grille (PT228-35170) also works because its lower radar section is a removable insert; one owner moved the radar with no errors and no recalibration.",
     "source_url": "https://www.tacomaworld.com/threads/2018-trd-pro-grille-w-tss-p-radar-info-diy.530769/",
     "source_name": "Tacoma World: 2018 TRD PRO Grille w/ TSS-P Radar Info/DIY",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Clean Sensor errors after a Pro grille swap usually come from snow, ice or water getting between the garnish and the radar. Keep the garnish tight and the harness secured (a longer harness is sold for the Pro grille); shimming the top screw with washers made one owner's errors worse.",
     "source_url": "https://www.tacomaworld.com/threads/tss-garnish-adjustment-for-pro-grill.699721/",
     "source_name": "Tacoma World: TSS garnish adjustment for pro grill",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tonneau-bak-mx4-g3",
   "platform": "Tacoma",
   "category": "Bed & Tonneau",
   "name": "BAKFlip MX4 hard folding tonneau",
   "brand": "BAK",
   "part_number": "n/s",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "5'1\" bed $1,249.99; 6'2\" bed $1,299.99"
   },
   "offers": [
    {
     "seller": "Yota Xpedition",
     "price": 1249.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://yotaxpedition.com/products/bakflip-mx4-tonneau-cover-tacoma-2016-2023",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "5'1\" bed; 6'2\" is $1,299.99"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Yota Xpedition",
    "price": 1249.99,
    "url": "https://yotaxpedition.com/products/bakflip-mx4-tonneau-cover-tacoma-2016-2023",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Do not overtighten the two clamps that hold the cover to the rails; one owner cracked the panel. Enlarging the bed's drain holes to 3/4 in with a step bit gave a tight fit for the drain tubes and kept the bed dry.",
     "source_url": "https://www.tacomaworld.com/threads/bakflip-tonneau-covers-drill-drain-holes.439683/page-2",
     "source_name": "Tacoma World: BAKFlip tonneau covers: Drill drain holes?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Owners agree every MX4 leaks some at the front and tailgate corners, but water dripping at the panel seams is not universal; reinstalling fixed it for some. One owner with heavy seam leaks got BAK to replace the top but not the rails.",
     "source_url": "https://www.tacomaworld.com/threads/bakflip-mx4-leaking-at-the-seams-normal.733809/",
     "source_name": "Tacoma World: Bakflip MX4 leaking at the seams normal?",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "int-wt-floorliner-g3",
   "platform": "Tacoma",
   "category": "Interior",
   "name": "FloorLiner",
   "brand": "WeatherTech",
   "part_number": "n/s",
   "fitment": {
    "years": "2016–2023 (G3)",
    "models": [
     "Tacoma"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Yota Xpedition",
     "price": null,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://yotaxpedition.com/products/floorliner-tacoma-2016-2023",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "$128.95–$234.90 by row/cab; $212.90 front+rear set price shown. Pick your variant"
    }
   ],
   "notes": "",
   "best_offer": null,
   "source": "master-guide"
  }
 ],
 "catalog": {
  "note": "Repair parts are RockAuto catalog picks (Economy, OE, Premium options per part type) read on the catalog pages of the representative vehicles linked here. Fitment comes from the listing notes for those vehicles only, so other years, trims and cabs show Check fitment.",
  "vehicles": [
   "https://www.rockauto.com/en/catalog/toyota,2008,tacoma,4.0l+v6,1441488",
   "https://www.rockauto.com/en/catalog/toyota,2018,tacoma,3.5l+v6,3441741"
  ],
  "generated": "2026-10-11",
  "files": [
   {
    "file": "data/parts/tacoma-2005-2023/0.js",
    "category": "Engine",
    "count": 154,
    "types": 41,
    "from": null,
    "bytes": 108365
   },
   {
    "file": "data/parts/tacoma-2005-2023/1.js",
    "category": "Ignition",
    "count": 37,
    "types": 6,
    "from": null,
    "bytes": 28085
   },
   {
    "file": "data/parts/tacoma-2005-2023/2.js",
    "category": "Fuel System",
    "count": 43,
    "types": 13,
    "from": null,
    "bytes": 29537
   },
   {
    "file": "data/parts/tacoma-2005-2023/3.js",
    "category": "Cooling",
    "count": 68,
    "types": 15,
    "from": null,
    "bytes": 49022
   },
   {
    "file": "data/parts/tacoma-2005-2023/4.js",
    "category": "HVAC",
    "count": 56,
    "types": 14,
    "from": null,
    "bytes": 42731
   },
   {
    "file": "data/parts/tacoma-2005-2023/5.js",
    "category": "Electrical",
    "count": 177,
    "types": 57,
    "from": null,
    "bytes": 149605
   },
   {
    "file": "data/parts/tacoma-2005-2023/6.js",
    "category": "Brakes",
    "count": 164,
    "types": 26,
    "from": null,
    "bytes": 145007
   },
   {
    "file": "data/parts/tacoma-2005-2023/7.js",
    "category": "Steering",
    "count": 47,
    "types": 13,
    "from": null,
    "bytes": 37200
   },
   {
    "file": "data/parts/tacoma-2005-2023/8.js",
    "category": "Drivetrain",
    "count": 166,
    "types": 48,
    "from": null,
    "bytes": 147724
   },
   {
    "file": "data/parts/tacoma-2005-2023/9.js",
    "category": "Body",
    "count": 194,
    "types": 61,
    "from": null,
    "bytes": 153271
   },
   {
    "file": "data/parts/tacoma-2005-2023/10.js",
    "category": "Lighting",
    "count": 40,
    "types": 7,
    "from": null,
    "bytes": 31023
   },
   {
    "file": "data/parts/tacoma-2005-2023/11.js",
    "category": "Interior",
    "count": 21,
    "types": 10,
    "from": null,
    "bytes": 17804
   },
   {
    "file": "data/parts/tacoma-2005-2023/12.js",
    "category": "Filters & Fluids",
    "count": 64,
    "types": 20,
    "from": null,
    "bytes": 52737
   },
   {
    "file": "data/parts/tacoma-2005-2023/13.js",
    "category": "Exhaust",
    "count": 96,
    "types": 17,
    "from": null,
    "bytes": 74239
   },
   {
    "file": "data/parts/tacoma-2005-2023/14.js",
    "category": "Suspension & Stance",
    "count": 103,
    "types": 17,
    "from": null,
    "bytes": 83611
   }
  ],
  "count": 1430
 }
};
