/* Forge platform data: wrangler-jk-jl. Built by scripts/build_app_*.js, then scripts/expand/integrate.py (catalog meta, reference, gap-fill guides). Schema: app/DATA-FORMAT.md */
window.FORGE_PLATFORMS = window.FORGE_PLATFORMS || {};
window.FORGE_PLATFORMS["wrangler-jk-jl"] = {
 "schemaVersion": 1,
 "id": "wrangler-jk-jl",
 "name": "Wrangler",
 "title": "Jeep Wrangler JK and JL",
 "years": "2007–present",
 "yearsNote": "JK = 2007–2018. JL = 2018–present. Same 5x5 bolt pattern; different lug threads, torque and steering hardware",
 "kind": "truck",
 "make": "Jeep",
 "models": [
  "Wrangler JK 2007–2018 (2-door, Unlimited 4-door; Sport, Sahara, Rubicon)",
  "Wrangler JL 2018–present (Sport, Sahara, Rubicon, 4xe, Rubicon 392, Xtreme Recon)"
 ],
 "tagline": "Death wobble, damper and track bar recalls up front. Then 35s, 37s and the backspacing that makes them fit.",
 "compiled": "2026-10-11",
 "pricesChecked": "2026-10-11",
 "safetyAlerts": [
  {
   "title": "JL steering damper shimmy (\"death wobble\"): CSN V41 and TSB 23-079-23",
   "text": "CSN V41 (a customer satisfaction notification, not a safety recall) replaced the front steering damper on about 192,000 2018–19 JL. Symptom: sustained shake or shimmy, more noticeable above 55 mph after a bump and below 40°F. TSB 23-079-23 (Jun 28 2023) covers 2018–2020 JL and 2020 JT built on or before Aug 11 2020: cause \"air trapped in the steering damper\", part CCUKV411AD (JL), damper warranty extended to 8 years / 90,000 mi. Check your VIN with a dealer.",
   "conf": "verified",
   "src": [
    {
     "label": "FCA CSN V41 (steering damper)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2019/MC-10169208-9999.pdf"
    },
    {
     "label": "TSB 23-079-23 (steering damper)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2023/MC-10241128-9999.pdf"
    }
   ]
  },
  {
   "title": "JL front track bar bracket weld: recall 18V-675 (FCA UA5)",
   "text": "About 18,055 LHD 2018–19 JL built May 7–Aug 21 2018. The bracket can separate from the frame and reduce steering response. Dealers inspect and repair the welds (estimated 3 hours). Check your VIN.",
   "conf": "verified",
   "src": [
    {
     "label": "Recall 18V-675 (track bar bracket)",
     "url": "https://static.nhtsa.gov/odi/rcl/2018/RCAK-18V675-4983.pdf"
    }
   ]
  },
  {
   "title": "JK death wobble: violent front-end shimmy after a bump at speed",
   "text": "Worn or loose front steering and suspension joints: track bar bushings and bolts, ball joints, tie rod and drag link ends, steering box mount. Usually more than one part. Inspect each joint, re-torque the JK track bar to 125 ft-lb (169 N·m) at ride height, replace worn parts. NHTSA declined a formal defect investigation of 2005–10 Wranglers (402 complaints as of Mar 21, 2012; read via search highlight only).",
   "conf": [
    "verified-secondary",
    "video",
    "unconfirmed"
   ],
   "src": [
    {
     "label": "2012 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
    },
    {
     "label": "Salty Gears: Death Wobble FIXED (video)",
     "url": "https://www.youtube.com/watch?v=CaEjxA9mD5o"
    },
    {
     "label": "IronRockOffRoad: fix death wobble (video)",
     "url": "https://www.youtube.com/watch?v=RXwDgok4bOU"
    }
   ]
  },
  {
   "title": "4xe high-voltage battery fire: park outside, don't charge",
   "text": "23V-787 (FCA 89A): 32,125 2021–23 JL PHEV. 25V-741 (FCA 68C): 2020–2025 Wrangler 4xe, supersedes 24V-720 and 23V-787. A press release (search highlight, Unconfirmed) said the remedy was not yet available at announcement. Check your VIN.",
   "conf": "verified",
   "src": [
    {
     "label": "Recall 23V-787",
     "url": "https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V787-6678.pdf"
    },
    {
     "label": "NHTSA recalls API (2024)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2024"
    }
   ]
  }
 ],
 "conflicts": [
  {
   "topic": "Lug nuts differ by generation",
   "text": "JK: 1/2\"-20 UNF, 60° cone, 19 mm socket; 95 ft-lb (130 N·m) in OM08/10/12, 100 ft-lb (135 N·m) in OM14/16; FSM12 range 115–215 N·m (85–159 ft-lb). JL: M14x1.5, 22 mm socket, 130 ft-lb (176 N·m). Use the manual for your model year.",
   "conf": [
    "verified",
    "verified-secondary"
   ],
   "disputed": true,
   "src": [
    {
     "label": "2012 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2012-wrangler.pdf"
    },
    {
     "label": "2016 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2016-wrangler.pdf"
    },
    {
     "label": "2018 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2018-wrangler.pdf"
    },
    {
     "label": "2012 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
    }
   ]
  },
  {
   "topic": "JK 3.6 spark plug",
   "text": "FSM12: 1.0 mm gap and 18 N·m (14 ft-lb), plug RER8ZWYCB4. OM12: same plug at 1.1 mm (0.043 in); generic OM text gives 15–25 ft-lb. JL mirror: 1.10 mm and 20 N·m. Possibly different spec generations; match the year.",
   "conf": [
    "verified",
    "verified-secondary"
   ],
   "disputed": true,
   "src": [
    {
     "label": "2012 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
    },
    {
     "label": "2012 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2012-wrangler.pdf"
    },
    {
     "label": "lemon-manuals quick lookups (2018 JK / 2019 JL)",
     "url": "https://lemon-manuals.la/"
    }
   ]
  },
  {
   "topic": "3.8 spark plug torque",
   "text": "FSM07: 17.5 N·m (13 ft-lb). A search summary said 16 N·m. Kept the FSM value.",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "2007 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2007%20Wrangler%20JK%20Factory%20Service%20Manual/site/"
    }
   ]
  },
  {
   "topic": "JL 2.0T rating",
   "text": "268 hp in BR18 vs 270 hp in BR20 and later.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2018 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2018-wrangler.pdf"
    },
    {
     "label": "2020 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2020-wrangler.pdf"
    }
   ]
  },
  {
   "topic": "JL coolant capacity",
   "text": "OM18 vs OM22 differ (3.6L: 10.7 vs 13.4 qt; 2.0L: 9.9 vs 12 qt). Use the manual for your model year.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2018 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2018-wrangler.pdf"
    },
    {
     "label": "2022 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2022-wrangler.pdf"
    }
   ]
  },
  {
   "topic": "JL axle lube",
   "text": "OM18 says 75W-85 GL-5. The LM19JL mirror says 80W-90 and uses JK axle names (186FBI/216RBI/226RBI); the mirror is probably stale. Use the owner's manual.",
   "conf": [
    "verified",
    "verified-secondary"
   ],
   "disputed": true,
   "src": [
    {
     "label": "2018 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2018-wrangler.pdf"
    },
    {
     "label": "lemon-manuals quick lookups (2018 JK / 2019 JL)",
     "url": "https://lemon-manuals.la/"
    }
   ]
  },
  {
   "topic": "3.6L oil grade",
   "text": "OM12 (JK) says 5W-30; the 2018 JK mirror says 5W-20; JL says 0W-20. Use the grade on the oil-fill cap.",
   "conf": [
    "verified",
    "verified-secondary"
   ],
   "disputed": true,
   "src": [
    {
     "label": "2012 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2012-wrangler.pdf"
    },
    {
     "label": "lemon-manuals quick lookups (2018 JK / 2019 JL)",
     "url": "https://lemon-manuals.la/"
    },
    {
     "label": "2018 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2018-wrangler.pdf"
    }
   ]
  },
  {
   "topic": "OEM wheel backspacing",
   "text": "wheeloffset.net lists 7.5x17 ET44 as 5.48 in; the formula (width + 1)/2 + offset gives ≈5.98 in (and ≈6.23 in for JL 20x8). Rim width vs bead-flange measurement. Stock JK/JL wheels sit roughly 5.5–6 in deep; aftermarket \"Jeep\" wheels are usually 4.5–5 in.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "wheeloffset.net Wrangler",
     "url": "https://wheeloffset.net/"
    }
   ]
  },
  {
   "topic": "NV241 vs NV231",
   "text": "Quadratec's 2011 page names the case NV241 in prose but NV231 in its table. Treat the table as a typo.",
   "conf": "verified",
   "src": [
    {
     "label": "Quadratec 2011 JK specs",
     "url": "https://www.quadratec.com/c/reference/2011-jeep-wrangler-jk-specs"
    }
   ]
  },
  {
   "topic": "JK 37s",
   "text": "RC 3.5\" is rated to 35 only; TeraFlex 4\" to 37 (≤4.5\" BS); Clayton says 37 at 4.5\". A dealer service writer said 35s rub on a TeraFlex 2.5\"; owners disputed it.",
   "conf": [
    "verified",
    "forum"
   ],
   "disputed": true,
   "src": [
    {
     "label": "Rough Country 69430 (JK 3.5\")",
     "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-694c"
    },
    {
     "label": "Quadratec TeraFlex 4\" JK",
     "url": "https://www.quadratec.com/products/16194_040X_PG.htm"
    },
    {
     "label": "Clayton Off Road lift/tire chart",
     "url": "https://claytonoffroad.com/blogs/news/lift-height-and-tire-size-combinations"
    },
    {
     "label": "JKOwners 35s on 2.5\"",
     "url": "https://www.jkowners.com/threads/35-tires-wont-work-even-with-a-2-5-lift.177434/"
    }
   ]
  },
  {
   "topic": "JL front LCA angle",
   "text": "The forum copy of the Mopar instructions prints \"140 + 145° | 103 +50°\" (internal typo). MetalCloak prints 103 ft-lb + 145°. Use +145°.",
   "conf": [
    "verified",
    "forum"
   ],
   "disputed": true,
   "src": [
    {
     "label": "MetalCloak JL torque specs (cites FSM)",
     "url": "https://metalcloak.com/blog/jeep-jl-wrangler-torque-specs"
    },
    {
     "label": "JLwranglerforums torque specs (Mopar lift instructions)",
     "url": "https://www.jlwranglerforums.com/forum/threads/torque-specs.115633/"
    }
   ]
  },
  {
   "topic": "Non-Rubicon JL rear axle (M200 vs M220)",
   "text": "Yukon kit titles say non-Rubicon JL uses D30 (M186) front and D35 (M200) rear. Some non-Rubicon builds (Sahara, max-tow, EcoDiesel) get an M220 rear; a forum poster says \"the diesel comes with d44's\". Unresolved by any factory document.",
   "conf": [
    "verified",
    "forum"
   ],
   "disputed": true,
   "src": [
    {
     "label": "JLwranglerforums 37s backspacing",
     "url": "https://www.jlwranglerforums.com/forum/threads/non-rubicon-w-37s-and-2-5-3-inch-lift-what-is-your-backspacing.118662/"
    }
   ]
  },
  {
   "topic": "3.8L oil and coolant wording",
   "text": "OM08: 6 qt with filter, 13 qt coolant. SPEC11: \"6.0 qt plus filter\", 13.36 qt coolant.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2008 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2008-wrangler.pdf"
    },
    {
     "label": "FCA 2011 Wrangler Unlimited spec sheet",
     "url": "https://www.wranglerforum.com/attachments/2011-jk-specs-pdf.4553258/"
    }
   ]
  }
 ],
 "overview": {
  "facts": [
   {
    "label": "Generations",
    "text": "JK = 2007–2018. JL = 2018–present. Sections and tables are labelled JK or JL wherever facts differ.",
    "conf": "verified",
    "src": []
   },
   {
    "label": "JK axles",
    "text": "Sport/Sahara: Dana 30 front (186 mm) and Dana 44 rear (226 mm). Rubicon: Dana 44 front (216 mm) and Dana 44 rear. FSM12 226RBI: ring gear 226 mm (8.89 in), ratios 3.21, 3.73, 4.10.",
    "conf": [
     "verified",
     "verified-secondary"
    ],
    "src": [
     {
      "label": "Quadratec 2011 JK specs",
      "url": "https://www.quadratec.com/c/reference/2011-jeep-wrangler-jk-specs"
     },
     {
      "label": "2012 JK FSM (jdmfsm mirror)",
      "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
     }
    ]
   },
   {
    "label": "JL axles",
    "text": "Rubicon: \"Dana 44 heavy-duty axles with Tru-Lok front and rear.\" Xtreme Recon / Rubicon 35\" packages: \"Dana M210 wide HD tube front axle\" and \"Dana M220 wide rear axle\". Non-Rubicon: brochure says only \"Dana axles\"; Yukon kit titles say D30 (M186) front and D35 (M200) rear (disputed for some builds).",
    "conf": "verified",
    "disputed": true,
    "src": [
     {
      "label": "2022 Wrangler brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2022-wrangler.pdf"
     },
     {
      "label": "JLwranglerforums 37s backspacing",
      "url": "https://www.jlwranglerforums.com/forum/threads/non-rubicon-w-37s-and-2-5-3-inch-lift-what-is-your-backspacing.118662/"
     }
    ]
   },
   {
    "label": "JK stock tires",
    "text": "P225/75R16 (Sport); 255/75R17 (Rubicon, about 32 in; SPEC11 lists an LT255/75R17 option); P255/70R18 (Sahara); 245/75R17 on some packages.",
    "conf": "verified",
    "src": [
     {
      "label": "2016 Wrangler brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2016-wrangler.pdf"
     },
     {
      "label": "FCA 2011 Wrangler Unlimited spec sheet",
      "url": "https://www.wranglerforum.com/attachments/2011-jk-specs-pdf.4553258/"
     },
     {
      "label": "wheeloffset.net Wrangler",
      "url": "https://wheeloffset.net/"
     }
    ]
   },
   {
    "label": "JL stock tires",
    "text": "P245/75R17 (Sport); P255/70R18 (Sahara); LT285/70R17 (Rubicon, about 33 in); P275/55R20; 255/60R20 and 275/55R20 (2024); LT315/70R17C 113/110S (Xtreme Recon / 392, about 35 in). OM22 mentions a jack lift block for 35 in tires.",
    "conf": "verified",
    "src": [
     {
      "label": "2022 Wrangler brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2022-wrangler.pdf"
     },
     {
      "label": "2024 Wrangler brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2024-wrangler.pdf"
     },
     {
      "label": "2022 Wrangler Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2022-wrangler.pdf"
     }
    ]
   },
   {
    "label": "Lowered",
    "text": "No sourced lowering kits or drop fitment for JK or JL. Wranglers are essentially never lowered, so there is no lowered stance here.",
    "conf": "verified",
    "src": []
   }
  ],
  "engines": {
   "columns": [
    "Gen",
    "Engine",
    "Years",
    "Output",
    "Notes",
    "Confidence"
   ],
   "rows": [
    [
     "JK (2007–18)",
     "3.8L EGH OHV V6 (pushrod, iron block, alloy heads, 9.6:1)",
     "2007–2011",
     "202 hp @ 5,200 / 237 lb-ft @ 4,000",
     "SPEC11; Quadratec 2011",
     "verified"
    ],
    [
     "JK (2007–18)",
     "3.6L Pentastar ERB DOHC V6",
     "2012–2018",
     "285 hp @ 6,400 / 260 lb-ft @ 4,800",
     "BR12, BR16",
     "verified"
    ],
    [
     "JK (2007–18)",
     "2.8L CRD diesel",
     "Export only",
     "n/a for US",
     "FSM12 has a 2.8L section; not sold in the US",
     "verified-secondary"
    ],
    [
     "JL (2018–)",
     "2.0L Turbo I-4 (eTorque mild hybrid)",
     "2018–",
     "270 hp / 295 lb-ft (BR20/22); BR18 says 268 hp",
     "Paired with the 8-speed automatic",
     "verified"
    ],
    [
     "JL (2018–)",
     "3.6L Pentastar V6 (ESS, optional eTorque)",
     "2018–",
     "285 hp / 260 lb-ft",
     "6MT or 8AT (BR20)",
     "verified"
    ],
    [
     "JL (2018–)",
     "3.0L EcoDiesel V6",
     "in BR22 lineup",
     "260 hp / 442 lb-ft",
     "EPA 22 city / 29 hwy; \"range of up to 530 highway miles\"",
     "verified"
    ],
    [
     "JL (2018–)",
     "4xe (2.0T PHEV)",
     "2021–",
     "375 hp / 470 lb-ft",
     "BR22",
     "verified"
    ],
    [
     "JL (2018–)",
     "6.4L 392 Hemi V8",
     "2021–",
     "470 hp / 470 lb-ft",
     "BR22",
     "verified"
    ]
   ],
   "src": [
    {
     "label": "FCA 2011 Wrangler Unlimited spec sheet",
     "url": "https://www.wranglerforum.com/attachments/2011-jk-specs-pdf.4553258/"
    },
    {
     "label": "Quadratec 2011 JK specs",
     "url": "https://www.quadratec.com/c/reference/2011-jeep-wrangler-jk-specs"
    },
    {
     "label": "2012 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2012-wrangler.pdf"
    },
    {
     "label": "2016 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2016-wrangler.pdf"
    },
    {
     "label": "2018 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2018-wrangler.pdf"
    },
    {
     "label": "2020 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2020-wrangler.pdf"
    },
    {
     "label": "2022 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2022-wrangler.pdf"
    },
    {
     "label": "2012 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
    }
   ],
   "disputedRows": [
    3
   ]
  },
  "transmissions": [
   {
    "label": "JK 2007–2011",
    "text": "NSG370 6-speed manual or 42RLE 4-speed automatic.",
    "conf": "verified",
    "src": [
     {
      "label": "FCA 2011 Wrangler Unlimited spec sheet",
      "url": "https://www.wranglerforum.com/attachments/2011-jk-specs-pdf.4553258/"
     }
    ]
   },
   {
    "label": "JK 2012–2018",
    "text": "6-speed manual or 5-speed automatic (BR16). The W5A580 code is not printed in the brochure.",
    "conf": [
     "verified",
     "unconfirmed"
    ],
    "src": [
     {
      "label": "2016 Wrangler brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2016-wrangler.pdf"
     }
    ]
   },
   {
    "label": "JK transfer cases",
    "text": "Command-Trac NV241 with 2.72:1 low on Sport/Sahara; Rock-Trac with 4.0:1 low on Rubicon. Transfer case fluid ATF+4 (OM12).",
    "conf": "verified",
    "src": [
     {
      "label": "FCA 2011 Wrangler Unlimited spec sheet",
      "url": "https://www.wranglerforum.com/attachments/2011-jk-specs-pdf.4553258/"
     },
     {
      "label": "2016 Wrangler brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2016-wrangler.pdf"
     },
     {
      "label": "2012 Wrangler Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2012-wrangler.pdf"
     }
    ]
   },
   {
    "label": "JL",
    "text": "6-speed manual and 8-speed automatic. OM18: \"Mopar ZF 8&9 Speed ATF\" for the automatic; ATF+4 for the manual and transfer case.",
    "conf": "verified",
    "src": [
     {
      "label": "2018 Wrangler Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2018-wrangler.pdf"
     }
    ]
   }
  ],
  "axles": {
   "columns": [
    "Gen",
    "Years / trans",
    "Sport / Sahara",
    "Rubicon / other"
   ],
   "rows": [
    [
     "JK (2007–18)",
     "2011 (2007–11 3.8L) 6MT NSG370",
     "3.21 std, 3.73 opt",
     "4.10"
    ],
    [
     "JK (2007–18)",
     "2011 4AT 42RLE",
     "3.73",
     "4.10"
    ],
    [
     "JK (2007–18)",
     "2016 (2012–18 3.6L) 6MT",
     "3.21 std, 3.73 opt",
     "4.10 std"
    ],
    [
     "JK (2007–18)",
     "2016 5AT",
     "3.21 std, 3.73 opt",
     "3.73 std, 4.10 opt"
    ],
    [
     "JK (2007–18)",
     "2007",
     "Unconfirmed (search summary: 3.21 or 4.10 manual; 4.10 auto)",
     "n/s"
    ],
    [
     "JL (2018–)",
     "Sport/Sahara base (2.0T or 3.6L, 6MT/8AT)",
     "3.45",
     "n/a"
    ],
    [
     "JL (2018–)",
     "Available (e.g., BR22, BR24 trims)",
     "3.73",
     "3.73"
    ],
    [
     "JL (2018–)",
     "Rubicon std / optional on others",
     "4.10 optional",
     "4.10 std"
    ],
    [
     "JL (2018–)",
     "Xtreme Recon 35\" / Rubicon 392",
     "n/a",
     "4.56 (\"without 4.88\")"
    ],
    [
     "JL (2018–)",
     "Rubicon option",
     "n/a",
     "4.88 (\"100:1 crawl ratio\")"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "FCA 2011 Wrangler Unlimited spec sheet",
     "url": "https://www.wranglerforum.com/attachments/2011-jk-specs-pdf.4553258/"
    },
    {
     "label": "2016 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2016-wrangler.pdf"
    },
    {
     "label": "2020 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2020-wrangler.pdf"
    },
    {
     "label": "2022 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2022-wrangler.pdf"
    },
    {
     "label": "2024 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2024-wrangler.pdf"
    }
   ],
   "disputedRows": [
    4
   ],
   "note": "SPEC11: trailer-tow package \"not available with 3.21 axle ratio\"."
  },
  "axleNotes": [],
  "extraTables": [
   {
    "title": "JK capacities",
    "table": {
     "columns": [
      "Item",
      "Value",
      "Source"
     ],
     "rows": [
      [
       "Fuel",
       "18.5–18.6 gal (2-door), 22.5 gal (4-door)",
       "OM08, OM12"
      ],
      [
       "3.8L oil",
       "6 qt with filter, SAE 5W-20 (SPEC11: \"6.0 qt plus filter\")",
       "OM08"
      ],
      [
       "3.8L coolant",
       "13 qt (SPEC11: 13.36 qt)",
       "OM08"
      ],
      [
       "3.6L oil",
       "6 qt with filter; grade 5W-30 (OM12) vs 5W-20 (2018 mirror)",
       "OM12, OM16"
      ],
      [
       "3.6L coolant",
       "10.5 qt",
       "OM12, OM16"
      ],
      [
       "Front diff, D30 186FBI",
       "2.10 pt",
       "LM18JK (mirror)"
      ],
      [
       "Front diff, D44 216",
       "2.70 pt",
       "LM18JK (mirror)"
      ],
      [
       "Rear diff, D44 226RBI",
       "4.75 pt (75W-140 synthetic with trailer tow; limited-slip needs 4 oz additive)",
       "LM18JK (mirror)"
      ],
      [
       "Manual trans",
       "1.60 qt",
       "LM18JK (mirror)"
      ],
      [
       "Auto trans (2018)",
       "ATF+4, service fill 5.30 qt",
       "LM18JK (mirror)"
      ],
      [
       "Transfer case",
       "ATF+4",
       "OM12"
      ]
     ],
     "conf": [
      "verified",
      "verified-secondary"
     ],
     "src": [
      {
       "label": "2008 Wrangler Owner's Manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2008-wrangler.pdf"
      },
      {
       "label": "2012 Wrangler Owner's Manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2012-wrangler.pdf"
      },
      {
       "label": "2016 Wrangler Owner's Manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2016-wrangler.pdf"
      },
      {
       "label": "FCA 2011 Wrangler Unlimited spec sheet",
       "url": "https://www.wranglerforum.com/attachments/2011-jk-specs-pdf.4553258/"
      },
      {
       "label": "lemon-manuals quick lookups (2018 JK / 2019 JL)",
       "url": "https://lemon-manuals.la/"
      }
     ],
     "disputedRows": [
      1,
      2,
      3
     ]
    }
   },
   {
    "title": "JL capacities",
    "table": {
     "columns": [
      "Item",
      "Value",
      "Source"
     ],
     "rows": [
      [
       "Fuel",
       "18.5 gal (2-door) / 21.5 gal (4-door); 2022: 17.5 / 21.5 gal",
       "OM18, OM22"
      ],
      [
       "2.0L and 3.6L oil",
       "5 qt with filter. 2.0L: 5W-30 full synthetic; 3.6L: 0W-20",
       "OM18"
      ],
      [
       "3.0L diesel oil",
       "9 qt",
       "OM22"
      ],
      [
       "2.0L coolant",
       "9.9 qt (OM18) / 12 qt (OM22)",
       "OM18, OM22"
      ],
      [
       "3.6L coolant",
       "10.7 qt (OM18) / 13.4 qt (OM22)",
       "OM18, OM22"
      ],
      [
       "3.0L diesel coolant",
       "14.8 qt",
       "OM22"
      ],
      [
       "Intercooler / MGU / PPU loops",
       "Listed separately",
       "OM18, OM22"
      ],
      [
       "Axles",
       "75W-85 GL-5; Trac-Lok needs friction modifier",
       "OM18"
      ],
      [
       "8AT",
       "Service fill 5.30 qt; overhaul 9.50 qt",
       "LM19JL (mirror)"
      ],
      [
       "6MT",
       "2.35 qt ATF+4",
       "LM19JL (mirror)"
      ],
      [
       "Transfer case",
       "1.69 pt ATF+4",
       "LM19JL (mirror)"
      ],
      [
       "M220 rear",
       "3.06 pt (e-locker) / 2.87 pt (Trac-Lok): Unconfirmed, search summary",
       "n/s"
      ]
     ],
     "conf": [
      "verified",
      "verified-secondary"
     ],
     "src": [
      {
       "label": "2018 Wrangler Owner's Manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2018-wrangler.pdf"
      },
      {
       "label": "2022 Wrangler Owner's Manual",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2022-wrangler.pdf"
      },
      {
       "label": "lemon-manuals quick lookups (2018 JK / 2019 JL)",
       "url": "https://lemon-manuals.la/"
      }
     ],
     "disputedRows": [
      3,
      4,
      7,
      11
     ]
    }
   },
   {
    "title": "Engine quick specs (LM19JL mirror)",
    "table": {
     "columns": [
      "Item",
      "JL 3.6L",
      "JL 2.0T"
     ],
     "rows": [
      [
       "Spark plug gap",
       "0.043 in (1.10 mm)",
       "0.024–0.025 in (0.60–0.65 mm)"
      ],
      [
       "Spark plug torque",
       "15 ft-lb (20 N·m)",
       "14 ft-lb (19 N·m)"
      ],
      [
       "Flexplate",
       "70 ft-lb (95 N·m), crisscross",
       "81 ft-lb (110 N·m)"
      ],
      [
       "Fuel pressure",
       "58 ± 3 psi",
       "58 ± 3 psi"
      ],
      [
       "Radiator cap",
       "18–21 psi",
       "18–21 psi"
      ]
     ],
     "conf": "verified-secondary",
     "src": [
      {
       "label": "lemon-manuals quick lookups (2018 JK / 2019 JL)",
       "url": "https://lemon-manuals.la/"
      }
     ]
    }
   }
  ],
  "yearChanges": [
   {
    "year": "2007",
    "text": "JK launches with the 3.8L. Recall 07V-291: TIPM software could let the engine stall.",
    "conf": "verified",
    "src": [
     {
      "label": "NHTSA recalls API (2007)",
      "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2007"
     }
    ]
   },
   {
    "year": "2011",
    "text": "Interior refresh, new steering wheel with controls, larger hardtop glass.",
    "conf": "verified",
    "src": [
     {
      "label": "Quadratec 2011 JK specs",
      "url": "https://www.quadratec.com/c/reference/2011-jeep-wrangler-jk-specs"
     }
    ]
   },
   {
    "year": "2012",
    "text": "Pentastar 3.6L and 5-speed automatic. BR12: \"40 percent increase in horsepower\".",
    "conf": "verified",
    "src": [
     {
      "label": "2012 Wrangler brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2012-wrangler.pdf"
     }
    ]
   },
   {
    "year": "2014",
    "text": "JK owner's manual lug-nut spec changes from 95 to 100 ft-lb.",
    "conf": "verified",
    "src": [
     {
      "label": "2014 Wrangler Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2014-wrangler.pdf"
     }
    ]
   },
   {
    "year": "2013–2016",
    "text": "JK TPMS frequency change (2007–2012 generally 315 MHz; 2013+ 433 MHz; 2009–10 either).",
    "conf": "unconfirmed",
    "src": []
   },
   {
    "year": "2018",
    "text": "JL launches. OM18 lists the eTorque (MGU) coolant loops.",
    "conf": "verified",
    "src": [
     {
      "label": "2018 Wrangler Owner's Manual",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2018-wrangler.pdf"
     }
    ]
   },
   {
    "year": "2020",
    "text": "EcoDiesel in the lineup (BR22; 2020 intro year is common knowledge, Unconfirmed). Recalls 22V-767 and 23V-263 cover the 3.0L high-pressure fuel pump.",
    "conf": [
     "verified",
     "unconfirmed"
    ],
    "src": [
     {
      "label": "2022 Wrangler brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2022-wrangler.pdf"
     },
     {
      "label": "NHTSA recalls API (2022)",
      "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2022"
     }
    ]
   },
   {
    "year": "2021",
    "text": "4xe and 392 arrive. 4xe recall population starts with 2020–21 builds (25V-741 covers 2020–2025 4xe).",
    "conf": "verified",
    "src": [
     {
      "label": "2022 Wrangler brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2022-wrangler.pdf"
     },
     {
      "label": "NHTSA recalls API (2021)",
      "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2021"
     }
    ]
   },
   {
    "year": "June 2021",
    "text": "JL TPMS supplier change (Schrader to Continental).",
    "conf": "unconfirmed",
    "src": []
   },
   {
    "year": "2024",
    "text": "Refresh. BR24 lists new tire packages (255/70R18 General AT, 275/55R20 General AT).",
    "conf": "verified",
    "src": [
     {
      "label": "2024 Wrangler brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2024-wrangler.pdf"
     }
    ]
   }
  ],
  "mpg": {
   "columns": [
    "Vehicle",
    "Setup",
    "MPG",
    "Confidence"
   ],
   "rows": [
    [
     "JKU 3.6 automatic",
     "35s, 4.88s",
     "About 15–16 at 75 mph (~3,000 rpm)",
     "forum"
    ],
    [
     "2021 Gladiator 8AT",
     "35s, 4.10s",
     "Low 16s at 70+ mph; 17–18 at 60",
     "forum"
    ],
    [
     "Heavy Jeep",
     "37s",
     "13.5 average",
     "forum"
    ],
    [
     "3.8 JK",
     "Stock (EPA)",
     "15 city / 19 hwy",
     "verified"
    ],
    [
     "EcoDiesel JL",
     "Stock (EPA)",
     "22 / 29",
     "verified"
    ],
    [
     "2.0T and 3.6 JL",
     "Brochure graphic",
     "22/24 and 19/23 (pairing read from layout; approximate)",
     "verified"
    ]
   ],
   "src": [
    {
     "label": "JK-Forum 360470",
     "url": "https://www.jk-forum.com/forums/modified-jk-tech-2/age-old-question-mpg-specific-3-6-jku-auto-4-88-gears-35s-360470/"
    },
    {
     "label": "Quadratec 2011 JK specs",
     "url": "https://www.quadratec.com/c/reference/2011-jeep-wrangler-jk-specs"
    },
    {
     "label": "2022 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2022-wrangler.pdf"
    }
   ]
  }
 },
 "wheels": {
  "specs": {
   "columns": [
    "Item",
    "JK (2007–2018)",
    "JL (2018–present)"
   ],
   "rows": [
    [
     "Bolt pattern",
     "5x127 (5x5 in)",
     "5x127 (5x5 in)"
    ],
    [
     "Center bore",
     "71.5 mm",
     "71.5 mm"
    ],
    [
     "Lug thread",
     "1/2\"-20 UNF, 60° cone seat, 19 mm socket",
     "M14x1.5, 22 mm socket"
    ],
    [
     "Lug torque",
     "95 ft-lb (130 N·m) in OM08/10/12; 100 ft-lb (135 N·m) in OM14/16. FSM12 range 115–215 N·m (85–159 ft-lb); spare 54–108 N·m (40–80 ft-lb)",
     "130 ft-lb (176 N·m)"
    ],
    [
     "Spare carrier (tailgate)",
     "n/s",
     "59 ft-lb (80 N·m)"
    ],
    [
     "OEM wheels",
     "7x16 ET50; 7x16 ET44; 7.5x17 ET44 (255/75R17, 245/75R17); 7.5x18 ET44 (255/70R18); 8x18 ET40; 8.5x19 ET40; 9x20 ET35",
     "7.5x17 ET44 (245/75R17), 7.5x18 ET44 (255/70R18), 8x20 ET44 (275/55R20). Rubicon LT285/70R17 offset not captured"
    ],
    [
     "OEM backspacing",
     "wheeloffset: 5.48 in (7.5x17); formula ≈5.98 in",
     "wheeloffset: 5.48 / 5.73 in; formula ≈5.98 in (17x7.5), ≈6.23 in (20x8)"
    ],
    [
     "Lug nuts",
     "Thread differs from JL: use JK nuts",
     "Thread differs from JK: use JL nuts"
    ]
   ],
   "conf": [
    "verified",
    "verified-secondary"
   ],
   "src": [
    {
     "label": "wheeloffset.net Wrangler",
     "url": "https://wheeloffset.net/"
    },
    {
     "label": "2008 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2008-wrangler.pdf"
    },
    {
     "label": "2014 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2014-wrangler.pdf"
    },
    {
     "label": "2016 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2016-wrangler.pdf"
    },
    {
     "label": "2018 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2018-wrangler.pdf"
    },
    {
     "label": "2012 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
    },
    {
     "label": "Rough Country 67700 (JL 2.5\")",
     "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-676c"
    }
   ],
   "disputedRows": [
    3,
    6
   ],
   "note": "Same 5x5 pattern and bore, but different lug threads and torque. Wheels interchange on pattern; use the right nuts and torque for your generation."
  },
  "stock": {
   "columns": [
    "Gen / trim",
    "Tire",
    "Approx. diameter"
   ],
   "rows": [
    [
     "JK Sport",
     "P225/75R16",
     "n/s"
    ],
    [
     "JK Rubicon",
     "255/75R17 (LT255/75R17 option)",
     "about 32 in"
    ],
    [
     "JK Sahara",
     "P255/70R18",
     "n/s"
    ],
    [
     "JK (some packages)",
     "245/75R17",
     "n/s"
    ],
    [
     "JL Sport",
     "P245/75R17",
     "n/s"
    ],
    [
     "JL Sahara",
     "P255/70R18",
     "n/s"
    ],
    [
     "JL Rubicon",
     "LT285/70R17",
     "about 33 in"
    ],
    [
     "JL",
     "P275/55R20",
     "n/s"
    ],
    [
     "JL (2024)",
     "255/60R20, 275/55R20; 255/70R18 General AT",
     "n/s"
    ],
    [
     "JL Xtreme Recon / 392",
     "LT315/70R17C 113/110S",
     "about 35 in"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "FCA 2011 Wrangler Unlimited spec sheet",
     "url": "https://www.wranglerforum.com/attachments/2011-jk-specs-pdf.4553258/"
    },
    {
     "label": "wheeloffset.net Wrangler",
     "url": "https://wheeloffset.net/"
    },
    {
     "label": "2016 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2016-wrangler.pdf"
    },
    {
     "label": "2022 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2022-wrangler.pdf"
    },
    {
     "label": "2024 Wrangler brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/jeep/2024-wrangler.pdf"
    }
   ]
  },
  "stances": [
   {
    "id": "jk-35",
    "title": "JK lifted 3.5\" (35s)",
    "subtitle": "Rough Country 69430, JK 4-door, $749.95 base with N3",
    "conf": "verified",
    "src": [
     {
      "label": "Rough Country 69430 (JK 3.5\")",
      "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-694c"
     }
    ],
    "note": "JK only. Claims up to 35x12.50. Control arm drop brackets and rear coil correction plates (10°). 2012–2018 need an exhaust modification to clear the front driveshaft (SKU 1030). On automatics the oversize factory front shaft can rub the pan at heavy articulation. BS computed as (W+1)/2 + ET/25.4.",
    "rows": [
     {
      "wheel": "17x9 ET0 (5.00 in BS)",
      "tire": "35x12.50R17",
      "fit": "Popular",
      "conf": "verified"
     },
     {
      "wheel": "17x9 ET-12 (4.53 in BS)",
      "tire": "35x12.50R17",
      "fit": "Listed",
      "conf": "verified"
     },
     {
      "wheel": "17x8.5 ET0 / +1 (4.75 / 4.79 in BS)",
      "tire": "35x12.50R17",
      "fit": "Listed",
      "conf": "verified"
     },
     {
      "wheel": "17x9 ET0 / +1 (5.00 / 5.04 in BS)",
      "tire": "315/70R17",
      "fit": "Listed",
      "conf": "verified"
     },
     {
      "wheel": "18x10 ET-18 / -19 / -25 (4.79 / 4.75 / 4.52 in BS)",
      "tire": "35x12.50R18",
      "fit": "Stance 2.0",
      "conf": "verified"
     },
     {
      "wheel": "20x10 ET-18 / -19 / -25",
      "tire": "35x12.50R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x10 ET-44 (3.77 in BS)",
      "tire": "35x12.50R20",
      "fit": "Trimming required",
      "conf": "verified"
     }
    ]
   },
   {
    "id": "jk-37",
    "title": "JK 37s and owner reports",
    "subtitle": "TeraFlex 4\" (1151400), Clayton chart, JKOwners thread",
    "conf": [
     "verified",
     "forum"
    ],
    "disputed": true,
    "src": [
     {
      "label": "Quadratec TeraFlex 4\" JK",
      "url": "https://www.quadratec.com/products/16194_040X_PG.htm"
     },
     {
      "label": "Clayton Off Road lift/tire chart",
      "url": "https://claytonoffroad.com/blogs/news/lift-height-and-tire-size-combinations"
     },
     {
      "label": "JKOwners 35s on 2.5\"",
      "url": "https://www.jkowners.com/threads/35-tires-wont-work-even-with-a-2-5-lift.177434/"
     }
    ],
    "note": "TeraFlex 4\": \"allow you to run up to a 37\" tire (aftermarket wheels with 4.5\" backspacing or less are required).\" Driveshaft mods \"highly recommended\" on 4-door JKs; adjustable control arms required; 4–6 h install. Clayton (all JK): 1.5\" → 31–33\", 2.5\" → 33–35\", 3.5\" → 35–36\", 4.5\" → 37\". For 37s: 3.5–4.5 in of lift, ≤4.5 in BS, flat or high-clearance fenders and bump stop tuning, adjustable arms on 4\"+, regear to 4.88 or 5.13 (owner advice). A dealer service writer said 35s rub on a TeraFlex 2.5\"; owners disputed it.",
    "rows": [
     {
      "wheel": "Aftermarket ≤4.5 in BS",
      "tire": "37\"",
      "fit": "TeraFlex 4\" rating",
      "conf": "verified"
     },
     {
      "wheel": "Aftermarket 4.5 in BS, or stock + spacers",
      "tire": "35s on 2.5\" lift",
      "fit": "Widely reported to work; bump stop extensions often added",
      "conf": "forum"
     },
     {
      "wheel": "Stock flares, 3\" bump stops",
      "tire": "35s on 2.5\" lift",
      "fit": "Works (one owner)",
      "conf": "forum"
     },
     {
      "wheel": "Flat flares, pinch-seam trim",
      "tire": "35s, no lift",
      "fit": "Works (one owner)",
      "conf": "forum"
     },
     {
      "wheel": "Stock wheels + 1.5\" spacers",
      "tire": "35x12.5R17 on RK 2.5\", 2\" bump stops, 4.88s (2012 JKU)",
      "fit": "No rubbing",
      "conf": "forum"
     },
     {
      "wheel": "n/s",
      "tire": "35s",
      "fit": "Common contact: factory air dam at full lock, and rock rails",
      "conf": "forum"
     },
     {
      "wheel": "Flat fenders, pinch-seam trim, 2.5–4\" bump stops",
      "tire": "Up to 40s on 2.5\" (one poster)",
      "fit": "Outlier, not a spec",
      "conf": "forum",
      "disputed": true
     }
    ]
   },
   {
    "id": "jl-25",
    "title": "JL lifted 2.5\" (35s)",
    "subtitle": "Rough Country 67700 spacer lift, $199.95; with N3 shocks (67730) $369.95",
    "conf": "verified",
    "src": [
     {
      "label": "Rough Country 67700 (JL 2.5\")",
      "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-676c"
     }
    ],
    "note": "JL only. Fits gas and EcoDiesel; does NOT fit 392 (coil rate). \"35\" tires will clear, but rubbing may occur with extreme articulation.\" On factory wheels with 35s, check front tire to lower control arm and sway-bar link clearance.",
    "rows": [
     {
      "wheel": "17x9 ET0 (5.00 in BS)",
      "tire": "35x12.50R17",
      "fit": "Popular",
      "conf": "verified"
     },
     {
      "wheel": "17x9 ET-12 / +1 / +18 / +20 (4.53 / 5.04 / 5.71 / 5.79 in BS)",
      "tire": "35x12.50R17",
      "fit": "Listed",
      "conf": "verified"
     },
     {
      "wheel": "Factory 17",
      "tire": "35x12.50R17",
      "fit": "1.5\" spacer",
      "conf": "verified"
     },
     {
      "wheel": "Factory 18",
      "tire": "35x12.50R18",
      "fit": "1.5\" spacer",
      "conf": "verified"
     },
     {
      "wheel": "17x9 ET0 / +1 / -12",
      "tire": "315/70R17, 305/70R17, 285/75R17",
      "fit": "Listed",
      "conf": "verified"
     },
     {
      "wheel": "20x10 ET-18 / -19",
      "tire": "35x12.50R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x10 ET-25 (4.52 in BS)",
      "tire": "35x12.50R20",
      "fit": "Listed",
      "conf": "verified"
     },
     {
      "wheel": "20x10 ET-18 / -19 / -25",
      "tire": "295/60R20",
      "fit": "Minor trimming (some)",
      "conf": "verified"
     }
    ]
   },
   {
    "id": "jl-rubi-25",
    "title": "JL Rubicon 2.5\" (35s and 37s)",
    "subtitle": "TeraFlex Performance Spacer Lift with shock extensions, $459.98",
    "conf": [
     "verified",
     "forum"
    ],
    "src": [
     {
      "label": "TeraFlex JL Rubicon 2.5\" spacer",
      "url": "https://teraflex.com/jl-4dr-rubicon-2-5-performance-spacer-lift-kit-shock-extensions.html"
     },
     {
      "label": "Wayalife 37s flex test",
      "url": "https://www.wayalife.com/threads/flex-test-will-37s-clear-a-jl-rubicon-running-2-5-of-lift-without-rubbing.52509/"
     },
     {
      "label": "JLwranglerforums 37s backspacing",
      "url": "https://www.jlwranglerforums.com/forum/threads/non-rubicon-w-37s-and-2-5-3-inch-lift-what-is-your-backspacing.118662/"
     }
    ],
    "note": "JL Rubicon 4-door. Requires aftermarket wheels with 4.75\" backspacing or less, or offset wheel adapters (#1057000) on stock wheels. Plastic-bumper models must remove the bumper-to-fender splash guards for 35\"+. Caster correction recommended but not required. RK lift heights are referenced to Rubicon springs, so an RK \"2.5\" is about 3.5\" on a Sport (forum).",
    "rows": [
     {
      "wheel": "≤4.75\" BS",
      "tire": "35\"",
      "fit": "2\" front and 2\" rear bump stop extensions (included)",
      "conf": "verified"
     },
     {
      "wheel": "≤4.75\" BS",
      "tire": "37\"",
      "fit": "2.5\" front and 3\" rear bump stop extensions plus shims (included)",
      "conf": "verified"
     },
     {
      "wheel": "KMC XD231 beadlocks, 4.75\" BS",
      "tire": "37x13.50 Cooper STT Pro (EVO 2.5\", JLUR)",
      "fit": "No street rub at full lock; off-road the rear tires mangled the rear liners and fronts brushed the fender trim. Fixed by removing the lower bumper liner bracket and heat-gun reshaping the rear liner",
      "conf": "forum"
     },
     {
      "wheel": "AR172 17x9 ET-12 (4.53\" BS)",
      "tire": "37s KO2 (2022 JLU diesel Sport, Mopar lift)",
      "fit": "No rub turning; not tested off-road",
      "conf": "forum"
     }
    ]
   },
   {
    "id": "jl-35",
    "title": "JL lifted 3.5\"+",
    "subtitle": "Rough Country 66830, JLU 2018–23, $799.95 with N3",
    "conf": [
     "verified",
     "forum"
    ],
    "disputed": true,
    "src": [
     {
      "label": "Rough Country 66830 (JLU 3.5\")",
      "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-668c"
     },
     {
      "label": "Clayton Off Road lift/tire chart",
      "url": "https://claytonoffroad.com/blogs/news/lift-height-and-tire-size-combinations"
     },
     {
      "label": "JLwranglerforums 37s backspacing",
      "url": "https://www.jlwranglerforums.com/forum/threads/non-rubicon-w-37s-and-2-5-3-inch-lift-what-is-your-backspacing.118662/"
     }
    ],
    "note": "Rated up to 35 in. Does not fit EcoDiesel, Rubicon, 392 or 4xe. \"An aftermarket driveshaft is HIGHLY RECOMMENDED for … any Jeep JL lift kit 3.5\" or taller\" (RC shaft SKU 5090.1A). Clayton (JL/JT): Rubicon 1.5\" → 35, 2.5\" → 37, 3.5\" → up to 39; Sport/Sahara 1.5\" → 33, 2.5\" → 35, 3.5\" → up to 37. Owner: \"Lots of people running +25 (5.73 BS) with 37s… 0 (4.75) would be better.\"",
    "rows": [
     {
      "wheel": "22x10 ET-18 / -19 / -25",
      "tire": "35x12.50R22",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "22x12 ET-44",
      "tire": "35x12.50R22",
      "fit": "Trimming required",
      "conf": "verified"
     },
     {
      "wheel": "4.75\" BS (non-Rubicon, 2\" Dynatrac, ~3\" net)",
      "tire": "315/70R17",
      "fit": "Slight fender rub on factory flares; none after Rubicon flares",
      "conf": "forum"
     },
     {
      "wheel": "4.5\" BS (Rubicon, 3.5\" MetalCloak)",
      "tire": "37x12.50",
      "fit": "Works",
      "conf": "forum"
     },
     {
      "wheel": "3.5\" BS (Rubicon, RK suspension)",
      "tire": "37x12.5",
      "fit": "Destroyed the inner fenders under flex",
      "conf": "forum",
      "disputed": true
     }
    ]
   }
  ],
  "tpms": [
   {
    "label": "JK",
    "text": "Sensor on each wheel through the valve-stem hole, a Wireless Control Module (WCM) and a yellow telltale. A sensor goes in the spare if the Jeep has a matching full-size spare. Tuners can turn TPMS off (Superchips Flashcal 3571 lists \"TPMS On/Off\").",
    "conf": [
     "verified-secondary",
     "verified"
    ],
    "src": [
     {
      "label": "2012 JK FSM (jdmfsm mirror)",
      "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
     },
     {
      "label": "JustForJeeps Flashcal 3571",
      "url": "https://www.justforjeeps.com/jk-flashcal.html"
     }
    ]
   },
   {
    "label": "JK frequency",
    "text": "2007–2012 generally 315 MHz; 2013+ 433 MHz; 2009–10 can be either. A \"JL wheels on JK TPMS issue\" thread exists (snippet only).",
    "conf": "unconfirmed",
    "src": [
     {
      "label": "wranglerforum JL wheels on JK TPMS",
      "url": "https://www.wranglerforum.com/threads/jl-wheels-on-jk-tpms-issue.2442945/"
     }
    ]
   },
   {
    "label": "JL",
    "text": "433 MHz. Pre-June 2021 commonly Schrader 29093 (supersedes 20398); post-June 2021 Continental, e.g., Mopar 68339096AB. A thread reports 2024 sensors not working on a 2018.",
    "conf": "unconfirmed",
    "src": [
     {
      "label": "JLwranglerforums 2024 sensors on 2018",
      "url": "https://www.jlwranglerforums.com/forum/threads/tpms-sensors-from-2024-jl-not-working-on-2018-jl.144931/"
     }
    ]
   },
   {
    "label": "JL recall 25V-527 (2024–25)",
    "text": "A pinched remote-start antenna cable can keep the TPMS light from illuminating.",
    "conf": "verified",
    "src": [
     {
      "label": "NHTSA recalls API (2025)",
      "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2025"
     }
    ]
   }
  ]
 },
 "problems": [
  {
   "id": "jl-damper",
   "title": "JL: Steering shimmy (\"death wobble\"), damper CSN V41 / TSB 23-079-23",
   "years": "2018–2020 JL (2020 JT)",
   "symptoms": "Sustained shake or shimmy, more noticeable above 55 mph after a bump and below 40°F",
   "cause": "\"Air trapped in the steering damper\" (TSB 23-079-23); NHTSA PE19-012 resume says V41 addressed air in the damper base valve (search highlight only)",
   "fix": "CSN V41 (not a safety recall): about 192,000 2018–19 JL had the front steering damper replaced. TSB 23-079-23 (Jun 28 2023): 2018–2020 JL and 2020 JT built on or before Aug 11 2020; part CCUKV411AD (JL); damper warranty extended to 8 years / 90,000 mi. Check your VIN. Aftermarket example video: \"Jeep Wrangler JL Bilstein B8 5100 Series Steering Damper Review & Install\" (title only).",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "FCA CSN V41 (steering damper)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2019/MC-10169208-9999.pdf"
    },
    {
     "label": "TSB 23-079-23 (steering damper)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2023/MC-10241128-9999.pdf"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=8KW01QtMm_M"
    }
   ],
   "guide": "jl-steering",
   "tips": [
    {
     "text": "After the V41 damper recall, check that the new damper is not upside down: the sticker arrow labeled front should be on the bottom pointing at the front bumper. Dealer instructions say an upside-down damper will not work properly and can be damaged.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/steering-damper-recall-and-death-wobble.36187/",
     "source_name": "JLwranglerforums.com: Steering damper recall and death wobble",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "TSB 02-003-19 replaces the front track bar (68394087AA LHD) for wander on JLs built Oct 15, 2017 to Jan 22, 2019, but it says not to use it for a sustained shake or shimmy, which falls under V41. Have the sway bar link torque checked at the same visit.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/new-tsb-jl-2018-2019-vehicle-wanders-requires-constant-small-steering-corrections-new-track-bar.33643/",
     "source_name": "JLwranglerforums.com: New TSB JL 2018 2019: Vehicle wanders requires constant small steering corrections - New Track Bar",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jl-trackbar",
   "title": "JL: Front track bar bracket weld, recall 18V-675 (FCA UA5)",
   "years": "LHD 2018–19 JL built May 7–Aug 21 2018 (about 18,055)",
   "symptoms": "Reduced steering response",
   "cause": "Bracket welds can separate from the frame",
   "fix": "Dealers inspect and repair the welds (estimated 3 hours). Check your VIN.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "Recall 18V-675 (track bar bracket)",
     "url": "https://static.nhtsa.gov/odi/rcl/2018/RCAK-18V675-4983.pdf"
    }
   ],
   "guide": "jl-steering",
   "tips": [
    {
     "text": "Read the 3-digit frame build date on the driver side outer frame rail: below 126 or above 156 needs nothing. In range, the dealer cleans both front track bar bracket welds, writes the last 3 VIN digits on the bracket, and photographs the inboard and outboard welds with the wheel turned full left.",
     "source_url": "https://static.nhtsa.gov/odi/rcl/2018/RCRIT-18V675-4839.pdf",
     "source_name": "NHTSA: Safety Recall UA5 / NHTSA 18V-675 Track Bar Weld",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "An early JLUR owner whose welds had porosity and slag said the dealer re-welds looked as bad as the robot welds, and FCA agreed to a replacement after reviewing photos. Photograph the welds yourself before and after any repair.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/track-bar-frame-weld-issue-recall-updated-with-official-ua5-recall-notice-w-repair-procedure.16255/page-9",
     "source_name": "JLwranglerforums.com: Track bar frame weld issue recall! [Updated with official UA5 recall notice w/ repair procedure]",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jk-wobble",
   "title": "JK: \"Death wobble\"",
   "years": "2007–2018 JK",
   "symptoms": "Violent front-end shimmy after a bump at speed",
   "cause": "Worn or loose front steering and suspension joints: track bar bushings and bolts, ball joints, tie rod and drag link ends, steering box mount. Usually more than one part (\"rarely caused by just one thing\"; \"almost never one single item\")",
   "fix": "Inspect each joint. Re-torque the track bar to the FSM value of 125 ft-lb (169 N·m) at ride height. Replace worn parts. Many owners add a frame-side brace (e.g., Synergy 8069-04). Check in order: track bar, ball joints, tie rod and drag link, steering box. NHTSA declined a formal defect investigation of 2005–10 Wranglers (402 complaints as of Mar 21, 2012; read via search highlight only).",
   "parts": [
    "steer-synergy-8069"
   ],
   "conf": [
    "verified-secondary",
    "video"
   ],
   "src": [
    {
     "label": "2012 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
    },
    {
     "label": "Salty Gears: Death Wobble FIXED (video)",
     "url": "https://www.youtube.com/watch?v=CaEjxA9mD5o"
    },
    {
     "label": "IronRockOffRoad: fix death wobble (video)",
     "url": "https://www.youtube.com/watch?v=RXwDgok4bOU"
    },
    {
     "label": "NHTSA answers to Reps. Eshoo/Waxman (search highlight only)",
     "url": "https://www.autosafety.org/wp-content/uploads/import/Eshoo%20Waxman%20QA.pdf"
    }
   ],
   "guide": "jk-front",
   "tips": [
    {
     "text": "To find slop, have a helper turn the wheel back and forth with the engine off while you watch both track bar ends; you should see almost no movement. Then jack the axle onto stands and lever a shovel under each tire, watching where the C meets the knuckle near the upper ball joint.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/death-wobble-track-bar-350847/page2/",
     "source_name": "JK-Forum: Death Wobble and Track Bar",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "If the track bar holes are wallowed out, owners fit the Northridge 9/16 in bolt upgrade kit and weld in 1/2 in washers checked to slide fully onto the bolt. Replace original ball joints too, since a friend's wobble only stopped after both fixes.",
     "source_url": "https://www.jk-forum.com/forums/stock-jk-tech-12/death-wobble-ball-joints-steering-stabilizer-348773/",
     "source_name": "JK-Forum: Death Wobble, ball joints, steering stabilizer",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Track bar bolts take 125 ft-lb. A 2.5 in lift drops JK caster from about 4.2 to the 3.4 to 3.5 degree range, so if torque is right and steering is still loose, add AEV brackets, a one-piece bracket, or adjustable lower arms.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/2-5-rough-country-jku-minimal-problems-349455/",
     "source_name": "JK-Forum: 2.5 rough country on jku, minimal problems",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A pry bar test can miss ball joints that are worn enough to lose preload without flopping; in this case two shops passed them and the wobble only stopped after Spicer ball joints went in (about a 6 hour shop job). Rebalance or swap in a friend's wheels and check caster before that teardown.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/how-to-beat-death-wobble-an-algorithm-to-diagnose-the-issue.62313/",
     "source_name": "JLwranglerforums.com: How to Beat Death Wobble! (An Algorithm to Diagnose The Issue)",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jk-airbag",
   "title": "JK: Clockspring / airbag light, plus airbag recalls",
   "years": "2007–2016",
   "symptoms": "Airbag warning light",
   "cause": "Dust-contaminated clockspring (16V-290); Takata-type passenger inflators",
   "fix": "16V-290: 2007–10 JK built Mar 2 2006–Aug 13 2010, driver airbag may not deploy. 11V-528 and 13V-176: 2008–12 RHD. 16V-288: 2011–16 RHD. 24V-196: 2016 RHD. Inflator recalls 16V-352 (2007–12), 18V-021 (2010–13, high-humidity states), 19V-018 (2010–16). Check your VIN.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA recalls API (2010)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2010"
    },
    {
     "label": "NHTSA recalls API (2016)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2016"
    }
   ],
   "tips": [
    {
     "text": "An intermittent airbag light and chime on a JK is usually the clockspring; the writer paid a dealer $550 once and did the second one himself in about an hour for about $200 in parts. Disconnect the battery negative and wait for the airbag capacitor to drain, and use a 90 degree dental pick to release the three airbag clips.",
     "source_url": "https://www.jk-forum.com/forums/jk-write-ups-39/clockspring-replacement-273201/",
     "source_name": "JK-Forum: Clockspring Replacement",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Order 5156106AD; it superseded 5156106AC. One 2009 owner received 68193280AB instead and found it identical side by side at the dealer.",
     "source_url": "https://www.jk-forum.com/forums/stock-jk-tech-12/clockspring-325563/",
     "source_name": "JK-Forum: Clockspring",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jk-tipm",
   "title": "JK: TIPM stall (2007)",
   "years": "2007",
   "symptoms": "Engine stall",
   "cause": "TIPM software",
   "fix": "Recall 07V-291.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA recalls API (2007)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2007"
    }
   ],
   "tips": [
    {
     "text": "The 2007 stall fix was Safety Recall G25, a TIPM reflash, not a hardware replacement. Check whether G25 was ever done on a 2007 before chasing stall or no-start parts.",
     "source_url": "https://www.jk-forum.com/forums/stock-jk-tech-12/safety-recall-g25-reprogram-tipm-12258/",
     "source_name": "JK-Forum: Safety Recall G25(reprogram TIPM)",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jk-38-oil",
   "title": "JK: 3.8L oil consumption",
   "years": "2007–2011",
   "symptoms": "Anywhere from 1 qt per 1,500 mi to 2.5 qt per oil change",
   "cause": "One owner says a dealer described \"low friction piston rings\" as the cause. Rings installed upside down: search summary only (Unconfirmed)",
   "fix": "Start a dealer oil-consumption test. Replace the PCV valve. Try a thicker oil (5W-30 or 10W-30). Run a leak-down test to check the rings.",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "JK-Forum 3.8 oil burners",
     "url": "https://www.jk-forum.com/forums/stock-jk-tech-12/2007-3-8-oil-burners-271292/"
    }
   ],
   "tips": [
    {
     "text": "A former ASE master tech lists the usual 3.8 improvements: a fresh PCV valve, moving up to a thicker oil, and checking for leaking intake manifold gaskets. One owner burning a quart every 1,200 to 1,500 miles still showed 184 to 187 psi compression on all cylinders, so a good compression test does not rule out consumption.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/2010-jk-burning-oil-my-thoughts-after-some-testing-314592/",
     "source_name": "JK-Forum: 2010 JK Burning Oil, my thoughts after some testing.",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Owners went from 5W-20 to 5W-30, 10W-30, and some 10W-40 in warm climates. One who did change his PCV said it was not the fix, so check the level at every fill-up, as one owner was found 3 quarts low.",
     "source_url": "https://www.jk-forum.com/forums/stock-jk-tech-12/2007-3-8-oil-burners-271292/",
     "source_name": "JK-Forum: 2007 3.8 oil burners",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "jk-36-head",
   "title": "JK: 3.6L left cylinder head",
   "years": "2012 JK and select 2013 JK",
   "symptoms": "Ticking, misfire, P0300/P0302/P0304/P0306; leak-down threshold ≥25% (symptom list Unconfirmed; only page 1 read)",
   "cause": "Left cylinder head",
   "fix": "FCA warranty bulletin D-14-12 (X56), June 10 2014: extended warranty on the 3.6L left cylinder head, 10 yr / 150,000 mi from in-service date.",
   "parts": [],
   "conf": [
    "verified",
    "unconfirmed"
   ],
   "src": [
    {
     "label": "FCA D-14-12",
     "url": "https://static.nhtsa.gov/odi/tsbs/2014/MC-10069161-0335.pdf"
    }
   ],
   "tips": [
    {
     "text": "The X56 extended warranty covers the left cylinder head on 2012 to 2013 JK 3.6 engines built on or before July 25, 2012, only when P0300, P0302, P0304 or P0306 is set. The dealer runs a leak-down test before replacing the head.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2014/SB-10062952-0335.pdf",
     "source_name": "NHTSA: Chrysler TSB 09-002-14 MIL Illumination P0300, P0302, P0304 or P0306 (X56 Warranty Extension)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Loud top-end ticking with no codes is not X56; owners point to worn rocker arm bearings and say pull the valve gear to check. X56 needs one of the misfire codes plus 25 percent or more leak-down.",
     "source_url": "https://www.jk-forum.com/forums/stock-jk-tech-12/2012-cylinder-head-warranty-356036/",
     "source_name": "JK-Forum: 2012 cylinder head warranty",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jk-oil-cooler",
   "title": "JK: 3.6L oil filter housing / oil cooler leak",
   "years": "2012–2018",
   "symptoms": "Oil leak (may look like it is \"on the bellhousing\", not the rear main seal); cracked housings, leaking O-rings, sensor failures",
   "cause": "Housing design. 2012–13 original style; 2014–16 updated style with a different filter; 2017–18 changed the oil pressure sender",
   "fix": "Replace the housing (under the intake manifold). Dorman sells an aluminum replacement, 926-876. One owner was quoted $150 part MSRP (2014). Video: \"How to Replace Oil Filter Housing & Cooler 2006-2018 Jeep Wrangler JK\" (TRQ). FSM12: filter housing bolts 12 N·m (106 in-lb) in sequence; filter cap 25 N·m (18 ft-lb).",
   "parts": [],
   "conf": [
    "forum",
    "video"
   ],
   "src": [
    {
     "label": "wranglerforum oil cooler mega thread",
     "url": "https://www.wranglerforum.com/threads/2014-2018-jk-oil-cooler-housing-mega-thread.698297/"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=0-dMgSrO7kI"
    }
   ],
   "confNote": "Moderator summary: \"known issue affecting thousands of 2012+ JKs.\"",
   "guide": "jk-36",
   "tips": [
    {
     "text": "Buy the latest Mopar housing for a 2014 to 2016 JK (68596317AB): it drops the figure 8 seals for two separate seals with a web between the ports. While it is apart, replace the short heater hose under the manifold, the oil temp and pressure sensors, the PCV valve and the plugs.",
     "source_url": "https://www.wranglerforum.com/threads/changing-oil-filter-housing-what-else-do-i-need-to-do.2467358/",
     "source_name": "Jeep Wrangler Forum: Changing Oil filter housing , what else do I need to do?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The blue Fel-Pro ES73012 seals do not fit the Dorman 926-876 or OEM housings after 2013; owners use OEM 68191356AA black seals or Fel-Pro ES73248. One owner's Dorman seals failed after 10,000 miles, while another reports 2 years with no leaks, so owners disagree on Dorman.",
     "source_url": "https://www.wranglerforum.com/threads/which-seals-did-you-use-with-the-dorman-oil-filter-housing-926-876.2465798/",
     "source_name": "Jeep Wrangler Forum: Which seals did you use with the Dorman Oil Filter Housing (926-876)?",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    },
    {
     "text": "A tech who did 50+ of these says the leak is the seals after the plastic housing warps, and he coats every seal with a thin layer of Ultra Black RTV. He also warns that shops overtighten the filter cap.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/is-this-real-mopar-releases-an-all-aluminum-oil-cooler-housing.162111/page-2",
     "source_name": "JLwranglerforums.com: Is this real?  Mopar releases an all aluminum oil cooler housing?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On a 2012-18 JK, an oil leak \"on the bellhousing\" may be the oil cooler housing, not the rear main seal. Check the housing before quoting a rear main.",
     "source_url": "https://www.wranglerforum.com/threads/2014-2018-jk-oil-cooler-housing-mega-thread.698297/",
     "source_name": "wranglerforum oil cooler mega thread",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jk-recalls",
   "title": "JK: Other recalls",
   "years": "2007–2017",
   "symptoms": "Varies",
   "cause": "Varies",
   "fix": "09V-436: 2007–08 automatics built without a transmission fluid temperature sensor. 10V-236: 2007–10 front brake tube contact. 11V-145: 2010–11 axle fastener torque degradation. 13V-234: 2012–13 3.6L automatic power steering hose. 14V-631: 2011–13 heated mirror connector corrosion. 16V-734: 2016–17 front impact sensor wiring. 16V-849: 2017 fuel tank control valve. 18V-098: 2017 brake switch.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA recalls API (2010)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2010"
    },
    {
     "label": "NHTSA recalls API (2013)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2013"
    },
    {
     "label": "NHTSA recalls API (2017)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2017"
    }
   ]
  },
  {
   "id": "jl-clutch",
   "title": "JL: Manual clutch pressure plate overheat / fire risk",
   "years": "2018–2023 JL manual (2020–23 JT)",
   "symptoms": "Clutch odor, slippage or cluster messages before failure",
   "cause": "Pressure plate overheating",
   "fix": "20V-124 (W12): about 36,750 2018–20 JL and 2020 JT; protective hose sleeve, wire harness reroute, clutch inspection. 21V-028: 2018–21 JL / 2020–21 JT. 23V-116 (19A): about 69,200 2018–23 JL and 2020–23 JT. 24V-572: stall software for some 2021 JL/JT already remedied under 23V-116.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "Recall 20V-124",
     "url": "https://static.nhtsa.gov/odi/rcl/2020/RCRIT-20V124-1465.pdf"
    },
    {
     "label": "Recall 23V-116",
     "url": "https://static.nhtsa.gov/odi/rcl/2023/RCRIT-23V116-7715.pdf"
    },
    {
     "label": "NHTSA recalls API (2021)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2021"
    }
   ],
   "tips": [
    {
     "text": "Recall 19A (NHTSA 23V-116) covers about 69,200 manual JL and JT trucks whose pressure plate can overheat and fracture. Warning signs before failure are clutch smell, slipping and cluster messages.",
     "source_url": "https://static.nhtsa.gov/odi/rcl/2023/RCRIT-23V116-7715.pdf",
     "source_name": "NHTSA: Safety Recall 19A / NHTSA 23V-116 Manual Transmission Clutch",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A 2021 manual JL on 35s went into limp mode on the trail in 4L after the 19A software. A dealer told a re-geared owner to set tire and gear back to stock with JScan before the flash and restore them afterward.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/jl-clutch-recall-results-in-limp-mode.151819/",
     "source_name": "JLwranglerforums.com: JL clutch recall results in limp mode",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "After any clutch work, run the PCM Clutch Replacement EEPROM Reset (in JScan under adaptation, vehicle maintenance); without it the Jeep is held to 30 mph with \"Service Transmission\" and no codes. The message can also appear after a battery disconnect.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/evic-displays-service-transmission-service-procedure-for-jl-jt-with-manual-transmission.128371/",
     "source_name": "JLwranglerforums.com: EVIC Displays: SERVICE TRANSMISSION - Service Procedure for JL/JT with Manual Transmission",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jl-4xe",
   "title": "JL 4xe: High-voltage battery fire (park outside)",
   "years": "2020–2025 4xe",
   "symptoms": "Fire risk",
   "cause": "High-voltage battery",
   "fix": "23V-787 (FCA 89A): 32,125 2021–23 JL PHEV; don't charge, park outside. 25V-741 (FCA 68C): 2020–2025 4xe, supersedes 24V-720 and 23V-787 (a press release, search highlight only, said the remedy was not yet available at announcement). Related: 22V-768 / 23V-303 (HV battery 200-amp fuse fasteners) and 22V-865 (loss of communication causing engine shutdown). Check your VIN.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "Recall 23V-787",
     "url": "https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V787-6678.pdf"
    },
    {
     "label": "NHTSA recalls API (2024)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2024"
    }
   ],
   "tips": [
    {
     "text": "The 68C recall visit runs a diagnostic and software updates first, and the battery is the only part physically replaced if it fails. Plan to leave the Jeep all day and ask for a loaner, as the dealer offered one.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/safety-recall-68c-25v-741-fix-available-for-high-voltage-battery-in-4xe-phev.161162/",
     "source_name": "JLwranglerforums.com: Safety recall  68C / 25V-741 - fix available for High Voltage Battery in 4xe (PHEV)",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jl-hpfp",
   "title": "JL EcoDiesel: High-pressure fuel pump",
   "years": "2020–2023 3.0L",
   "symptoms": "Engine stall",
   "cause": "HPFP failure",
   "fix": "Recalls 22V-767 (2020–22) and 23V-263 (2021–23).",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA recalls API (2022)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2022"
    },
    {
     "label": "NHTSA recalls API (2023)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2023"
    }
   ],
   "tips": [
    {
     "text": "The 3.0 EcoDiesel uses the Bosch CP4. Owners keep the tank above 1/4, change the fuel filter on schedule, add a lubricity additive, and pull over right away if the water-in-fuel light comes on.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/cp4-fuel-pump.59449/",
     "source_name": "JLwranglerforums.com: CP4 Fuel Pump",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jl-recalls",
   "title": "JL: Other recalls",
   "years": "2018–2025",
   "symptoms": "Varies",
   "cause": "Varies",
   "fix": "18V-231: 2018 rear underbody ladder rail corrosion; rear seat mount can loosen. 18V-343: 2018 intermediate steering shaft weld. 19V-201: 2019 steering column stub shaft. 20V-042: 2020 left lower control arm bracket weld. 21V-665: 2020 2.0L fuel supply line connector. 23V-191: 2020–22 frame stud can puncture the fuel tank in a crash. 24V-652: 2018–24 instrument cluster short. 24V-676: 2018–24 camera / CHMSL harness short. 26V-363: 2021–25 electro-hydraulic power steering pump wiring can overheat (fire risk). 25V-527: 2024–25 TPMS light (pinched remote-start antenna cable).",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA recalls API (2018)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2018"
    },
    {
     "label": "NHTSA recalls API (2020)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2020"
    },
    {
     "label": "NHTSA recalls API (2024)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=jeep&model=wrangler&modelYear=2024"
    }
   ]
  }
 ],
 "guides": [
  {
   "id": "wheels",
   "type": "diy",
   "title": "Lug nuts: JK vs JL",
   "summary": "Same 5x5 pattern, different threads and torque.",
   "conf": "verified",
   "src": [
    {
     "label": "2012 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2012-wrangler.pdf"
    },
    {
     "label": "2016 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2016-wrangler.pdf"
    },
    {
     "label": "2018 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2018-wrangler.pdf"
    },
    {
     "label": "2012 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
    }
   ],
   "steps": [
    {
     "text": "JK: 1/2\"-20 UNF, 60° cone, 19 mm socket. 95 ft-lb (130 N·m) per OM08/10/12; 100 ft-lb (135 N·m) per OM14/16. Use the manual for your year.",
     "disputed": true
    },
    {
     "text": "JL: M14x1.5, 22 mm socket, 130 ft-lb (176 N·m). Spare carrier (tailgate) 59 ft-lb (80 N·m)."
    },
    {
     "text": "Spacers vs new wheels: 1.5\" spacers on factory wheels are the cheap path to 35s; use hub-centric spacers.",
     "conf": "forum"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "JK",
     "JL"
    ],
    "rows": [
     [
      "Lug nuts",
      "95 ft-lb (2008–12 OMs) / 100 ft-lb (2014–16 OMs); FSM 85–159 ft-lb",
      "130 ft-lb (176 N·m)"
     ],
     [
      "Spare",
      "FSM 40–80 ft-lb (54–108 N·m)",
      "Carrier 59 ft-lb (80 N·m)"
     ]
    ],
    "disputedRows": [
     0
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "JK studs are 1/2-20 and JL studs are 14x1.5, so JK lug nuts will not go on a JL. If you move JK aftermarket wheels to a JL, the big factory JL nuts may not fit the wheel holes; use thinner 14x1.5 spline nuts.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/jl-vs-jk-lug-nut-specs.21369/",
     "source_name": "JLwranglerforums.com: JL vs JK lug nut specs",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "1.5 in hub-centric spacers on JK/JL factory wheels are the cheap path to 35s; use hub-centric, not lug-centric, spacers.",
     "source_url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-676c",
     "source_name": "Rough Country 67700 (JL 2.5\")",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jk-front",
   "type": "diy",
   "title": "JK front suspension and track bar (FSM12)",
   "summary": "Torque suspension fasteners at ride height.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2012 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
    }
   ],
   "steps": [
    {
     "text": "Track bar frame nut and axle bolt: 169 N·m (125 ft-lb). Getting this right matters for death wobble."
    },
    {
     "text": "Torque suspension fasteners at ride height (FSM caution)."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "N·m",
     "ft-lb"
    ],
    "rows": [
     [
      "Shock upper nut",
      "27",
      "20"
     ],
     [
      "Shock lower nut",
      "88",
      "65"
     ],
     [
      "Lower arm axle bracket nut (OE)",
      "159",
      "117"
     ],
     [
      "Lower arm axle nut with caster-adjust kit",
      "85",
      "63"
     ],
     [
      "Lower arm frame bracket nut",
      "159",
      "117"
     ],
     [
      "Upper arm axle and frame bolts",
      "102",
      "75"
     ],
     [
      "Upper and lower ball joint nuts",
      "95",
      "70"
     ],
     [
      "Sway bar retainer bolts",
      "61",
      "45"
     ],
     [
      "Sway link upper nut / lower bolt",
      "90 / 85",
      "66 / 63"
     ],
     [
      "Track bar frame nut / axle bolt",
      "169",
      "125"
     ],
     [
      "Hub/bearing bolts",
      "102",
      "75"
     ],
     [
      "Hub/bearing axle nut",
      "136",
      "100"
     ],
     [
      "Jounce cup bolt",
      "42",
      "31"
     ]
    ]
   },
   "parts": [
    "steer-synergy-8069"
   ],
   "tips": [
    {
     "text": "After any JK lift, loosen every control arm and track bar bolt with the Jeep on the ground, rock it side to side and front to back, then torque the lowers, track bars and rear uppers to 125 ft-lb and the front uppers to 75 ft-lb.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/noises-after-installing-rough-country-2-5-spacer-lift-289067/",
     "source_name": "JK-Forum: Noises after installing Rough Country 2.5\" spacer lift",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jk-rear-steer",
   "type": "diy",
   "title": "JK rear suspension and steering (FSM12)",
   "summary": "Factory values (mirror).",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2012 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
    }
   ],
   "steps": [
    {
     "text": "Steering: Pitman arm nut 265 N·m / 195 ft-lb. Drag link to Pitman 105 / 77; to knuckle 85 / 63. Tie rod ends 85 / 63. Adjuster clamps: drag link 35 / 26, tie rod 46 / 34. Damper to axle and tie rod 68 / 50; damper bracket 50 / 37. Gear-to-frame 118 / 87; gear adjuster locknut 65 / 48. Steering wheel nut 43 / 32. Intermediate shaft pinch bolts 54 / 40."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "N·m",
     "ft-lb"
    ],
    "rows": [
     [
      "Rear shock upper bolts / lower nut",
      "57 / 88",
      "37 / 65"
     ],
     [
      "Rear lower arm axle and frame",
      "159",
      "117"
     ],
     [
      "Rear upper arm axle bracket bolt",
      "169",
      "125"
     ],
     [
      "Rear upper arm frame bracket bolt",
      "159",
      "117"
     ],
     [
      "Rear sway bar retainer bolts",
      "70",
      "52"
     ],
     [
      "Rear sway link nut/bolt",
      "102",
      "75"
     ],
     [
      "Rear sway bar to link nut",
      "90",
      "66"
     ],
     [
      "Rear track bar frame nut / axle bolt",
      "169",
      "125"
     ],
     [
      "Pitman arm nut",
      "265",
      "195"
     ],
     [
      "Gear-to-frame bolts",
      "118",
      "87"
     ],
     [
      "Steering damper to axle and tie rod",
      "68",
      "50"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "jk-axle-brakes",
   "type": "diy",
   "title": "JK driveline, axles and brakes (FSM12)",
   "summary": "Regear values for D30/D44.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2012 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=yl81Qn1A9ZE"
    }
   ],
   "steps": [
    {
     "text": "Pinion bearing preload (D44s): 1–2.2 N·m (10–20 in-lb) on original bearings; 2.2–4.5 N·m (20–40 in-lb) on new bearings."
    },
    {
     "text": "Rotors: front 302 mm with 16-in wheels, 332 mm with 17-in wheels; rear 316 mm. Minimum thickness 26.4 mm front, 10.4 mm rear."
    },
    {
     "text": "Video: \"Regearing the Jeep JK with Ian Johnson\" (Yukon Gear & Axle).",
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
      "Front driveshaft: axle flange / transfer case flange",
      "121 N·m (89 ft-lb) / 20 N·m (15 ft-lb)"
     ],
     [
      "Rear driveshaft, both flanges",
      "20 N·m (15 ft-lb)"
     ],
     [
      "D30 (186FBI) cover / fill plug",
      "41/30 / 34/25"
     ],
     [
      "D30 bearing caps / ring gear",
      "61/45 / 108/80"
     ],
     [
      "D30 pinion nut",
      "217–542 N·m (160–400 ft-lb) range"
     ],
     [
      "D30 axle nut",
      "136/100"
     ],
     [
      "D44 front (216FBI) bearing caps / ring gear",
      "108/80 / 136/100"
     ],
     [
      "D44 front pinion nut",
      "217–271 (160–200)"
     ],
     [
      "D44 rear (226RBI) bearing caps",
      "108/80"
     ],
     [
      "D44 rear ring gear",
      "100 N·m + 90°"
     ],
     [
      "D44 rear pinion nut",
      "217–271 (160–200)"
     ],
     [
      "D44 rear axle retainer nuts",
      "61/45"
     ],
     [
      "Caliper bolts, front and rear",
      "35 N·m / 26 ft-lb"
     ],
     [
      "Front / rear caliper adapter",
      "136/100 / 105/77"
     ],
     [
      "Banjo bolts front / rear",
      "32/24 / 31/23"
     ]
    ]
   },
   "parts": [
    "gear-yukon-ygk068",
    "locker-arb-rd116"
   ],
   "tips": [
    {
     "text": "Extend the axle, transfer case and auto trans breathers with 1/4 in fuel hose, clamps and tees for under $30 in about an hour, leaving slack above the rear diff for droop. Skip the 6-speed manual breather, which runs up by the shifter boot.",
     "source_url": "https://www.jk-forum.com/forums/jk-write-ups-39/how-diy-jk-wrangler-breather-hose-extensions-%2430-327415/",
     "source_name": "JK-Forum: HOW-TO: DIY JK Wrangler Breather Hose Extensions for $30",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A 2018 JK 2-door with only a 2 in lift developed a coast shudder and clunk under 30 mph that turned out to be the rear driveshaft Rzeppa joint. Owners say 2-door shafts are finicky after any lift and replace them with 1310 u-joint shafts.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/jk-2-door-rear-end-driveline-issue-357418/",
     "source_name": "JK-Forum: JK 2-door rear end or driveline issue",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jk-36",
   "type": "diy",
   "title": "JK 3.6L Pentastar (FSM12)",
   "summary": "Head bolts, phasers, plugs.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2012 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2012%20Wrangler%20JK%20Factory%20Service%20Manual/site/index.html"
    },
    {
     "label": "2012 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2012-wrangler.pdf"
    }
   ],
   "steps": [
    {
     "text": "Head bolts, 9-step: 30 N·m (22 ft-lb), 45 N·m (33), +75°, +50°. Loosen all in reverse order. Then 30 N·m, 45 N·m, +70°, +70°."
    },
    {
     "text": "Cam phaser oil control valves 150 N·m (110 ft-lb) with phaser locks 10202 installed. Crank damper 40 N·m + 105° (30 ft-lb + 105°) using holder 10198."
    },
    {
     "text": "Spark plugs: FSM 18 N·m (14 ft-lb), gap 1.0 mm (0.040 in), RER8ZWYCB4. OM12 lists 1.1 mm (0.043 in) and generic 15–25 ft-lb. Use the FSM value.",
     "disputed": true
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Head bolts",
      "30 N·m → 45 N·m → +75° → +50°; loosen all; 30 → 45 → +70° → +70°"
     ],
     [
      "Cam phaser oil control valves",
      "150 N·m (110 ft-lb)"
     ],
     [
      "Crank damper bolt",
      "40 N·m + 105° (30 ft-lb + 105°)"
     ],
     [
      "Oil filter cap",
      "25 N·m (18 ft-lb)"
     ],
     [
      "Oil filter housing bolts",
      "12 N·m (106 in-lb), in sequence"
     ],
     [
      "Oil pan M8 / lower pan",
      "25 N·m (18 ft-lb) / 11 N·m (97 in-lb)"
     ],
     [
      "Oil pump sprocket bolt (T45)",
      "25 N·m"
     ],
     [
      "Chain guide/tensioner T30 bolts",
      "12 N·m"
     ],
     [
      "Spark plugs",
      "18 N·m (14 ft-lb); gap 1.0 mm"
     ],
     [
      "Knock sensor",
      "21 N·m / 15 ft-lb"
     ],
     [
      "Coil bolts",
      "8 N·m (71 in-lb)"
     ]
    ],
    "disputedRows": [
     8
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "When replacing the 3.6 oil filter housing, owners use low-strength purple Loctite on the low-torque housing bolts, since high-strength thread locker can pull threads on removal. Do the spark plugs and any leaking valve covers while the intake is off.",
     "source_url": "https://www.wranglerforum.com/threads/changing-oil-filter-housing-what-else-do-i-need-to-do.2467358/",
     "source_name": "Jeep Wrangler Forum: Changing Oil filter housing , what else do I need to do?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jk-38",
   "type": "diy",
   "title": "JK 3.8L EGH (FSM07)",
   "summary": "Head bolt check after the ¼ turn.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2007 JK FSM (jdmfsm mirror)",
     "url": "https://www.jdmfsm.info/Auto/Other/Jeep/Jeep%20Wrangler%20JK/2007%20Wrangler%20JK%20Factory%20Service%20Manual/site/"
    },
    {
     "label": "2008 Wrangler Owner's Manual",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/jeep/2008-wrangler.pdf"
    }
   ],
   "steps": [
    {
     "text": "Head bolts: 61 N·m (45 ft-lb), 88 N·m (65), 88 N·m again, then +¼ turn. Torque after the ¼ turn should be over 122 N·m (90 ft-lb); if not, replace the bolt."
    },
    {
     "text": "Spark plugs 17.5 N·m (13 ft-lb), RE14PLP5, gap 0.048–0.053 in (OM08 says 0.050 in). A search summary claimed 16 N·m.",
     "disputed": true
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Head bolts",
      "61 N·m → 88 N·m → 88 N·m → +¼ turn (>122 N·m / 90 ft-lb after)"
     ],
     [
      "Spark plugs",
      "17.5 N·m (13 ft-lb)"
     ],
     [
      "Exhaust manifold bolts",
      "23 N·m (200 in-lb)"
     ],
     [
      "Lower intake",
      "23 N·m (200 in-lb)"
     ],
     [
      "Upper intake",
      "12 N·m (105 in-lb)"
     ],
     [
      "Oil drain plug",
      "27 N·m (20 ft-lb)"
     ],
     [
      "Flexplate",
      "88 N·m (65 ft-lb)"
     ],
     [
      "Oil filter",
      "20 N·m (15 ft-lb)"
     ]
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "A ticking on cold start on a 3.8 JK is often a cracked driver-side exhaust manifold; remove two bolts and a nut to slide off the heat shield and the crack is visible on top.",
     "source_url": "https://www.jk-forum.com/forums/stock-jk-tech-12/jk-makes-tinging-noise-when-i-first-start-up-279840/",
     "source_name": "JK-Forum: JK makes tinging noise when i first start up",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Manifold bolt heads can snap on the 3.8; use new M8x1.25x30 manifold-to-head bolts, Mopar 06507938AA, rather than reusing the old ones.",
     "source_url": "https://www.jk-forum.com/forums/stock-jk-tech-12/exhaust-manifold-hardwear-230887/",
     "source_name": "JK-Forum: exhaust manifold hardwear?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jl-steering",
   "type": "diy",
   "title": "JL front suspension, steering and track bar",
   "summary": "Many JL fasteners are torque plus angle.",
   "conf": [
    "verified",
    "forum"
   ],
   "src": [
    {
     "label": "MetalCloak JL torque specs (cites FSM)",
     "url": "https://metalcloak.com/blog/jeep-jl-wrangler-torque-specs"
    },
    {
     "label": "JLwranglerforums torque specs (Mopar lift instructions)",
     "url": "https://www.jlwranglerforums.com/forum/threads/torque-specs.115633/"
    },
    {
     "label": "lemon-manuals quick lookups (2018 JK / 2019 JL)",
     "url": "https://lemon-manuals.la/"
    },
    {
     "label": "TSB 23-079-23 (steering damper)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2023/MC-10241128-9999.pdf"
    }
   ],
   "steps": [
    {
     "text": "Track bar frame nut and axle bolt: 70 N·m + 115° (52 ft-lb + 115°). Not the JK 125 ft-lb."
    },
    {
     "text": "Front LCA: MetalCloak prints 103 ft-lb + 145°; the forum copy prints \"+50°\" (typo). Use +145°.",
     "disputed": true
    },
    {
     "text": "Pitman nut 250 N·m (184 ft-lb): do not reuse."
    },
    {
     "text": "Steering damper: covered under TSB 23-079-23 where eligible (2018–2020 JL built on or before Aug 11 2020).",
     "conf": "verified"
    },
    {
     "text": "Hub nut 100 ft-lb (136 N·m) also confirmed by LM19JL.",
     "conf": "verified-secondary"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Front lower control arm front and rear nuts",
      "140 N·m + 145° (103 ft-lb + 145°)"
     ],
     [
      "Front upper arm front nut",
      "55 N·m + 185°"
     ],
     [
      "Front upper arm rear bolt",
      "50 N·m + 135°"
     ],
     [
      "Front track bar frame nut and axle bolt",
      "70 N·m + 115° (52 ft-lb + 115°)"
     ],
     [
      "Lower ball joint nut",
      "20 N·m initial, 45 N·m final"
     ],
     [
      "Upper ball joint nut",
      "75 N·m / 55 ft-lb"
     ],
     [
      "Front shock lower / upper",
      "100 / 110 N·m (74 / 81 ft-lb)"
     ],
     [
      "Front sway bar bolts",
      "63 N·m"
     ],
     [
      "Front sway link upper / lower",
      "93 / 80 N·m"
     ],
     [
      "Hub bolts / hub nut",
      "102 / 136 N·m (75 / 100 ft-lb)"
     ],
     [
      "Rear lower arm bolts and nuts",
      "100 N·m + 50°"
     ],
     [
      "Rear upper arm front bolt / rear nut",
      "100 N·m + 80° / + 65°"
     ],
     [
      "Rear track bar frame nut / axle bolt",
      "100 N·m + 30° / + 60°"
     ],
     [
      "Rear shock upper / lower",
      "110 / 100 N·m"
     ],
     [
      "Rear sway link upper / lower",
      "90 / 80 N·m"
     ],
     [
      "Steering gear bolts",
      "133 N·m (99 ft-lb)"
     ],
     [
      "Pitman nut (do not reuse)",
      "250 N·m (184 ft-lb)"
     ],
     [
      "Drag link at Pitman / knuckle",
      "105 / 64 N·m"
     ],
     [
      "Tie rod end at knuckle",
      "64 N·m"
     ],
     [
      "Adjuster clamps",
      "46 N·m"
     ],
     [
      "Steering damper bolt (axle) / nut (tie rod)",
      "80 N·m"
     ],
     [
      "Damper bracket nut",
      "75 N·m"
     ]
    ],
    "disputedRows": [
     0
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "TSB 08-074-20 for JL wander replaces the steering gear and requires new steering gear frame bolts and a new I-shaft pinch bolt. Lifted Jeeps still within factory alignment specs qualify, but early JLs built before Jan 22, 2019 also need the latest track bar.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2020/MC-10184767-9999.pdf",
     "source_name": "NHTSA: Chrysler TSB 08-074-20 REV. D",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A clink over speed bumps on a JL was loose sway link nuts at 60 ft-lb spec. Replace link nuts once removed or use blue Loctite, because reused nuts tend to back off.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/loose-sway-bar-end-links-after-road-trip.131429/",
     "source_name": "JLwranglerforums.com: Loose sway bar end links after road trip",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A low-speed front clunk that goes away with the sway bar disconnected was a loose driver-side quick-disconnect pin on TeraFlex links. Check the disconnect pins before paying for a front end inspection.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/solved-clunk-in-front-end-when-sway-bar-connected.101732/",
     "source_name": "JLwranglerforums.com: Solved: Clunk in front end when sway bar connected",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "jl-engine",
   "type": "diy",
   "title": "JL engine quick specs and regear",
   "summary": "Mirror data; JL engine internals not found.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "lemon-manuals quick lookups (2018 JK / 2019 JL)",
     "url": "https://lemon-manuals.la/"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=hTUZpCBkjHE"
    }
   ],
   "steps": [
    {
     "text": "3.6L: plug gap 0.043 in (1.10 mm), 15 ft-lb (20 N·m); flexplate 70 ft-lb (95 N·m) crisscross. 2.0T: gap 0.024–0.025 in (0.60–0.65 mm), 14 ft-lb (19 N·m); flexplate 81 ft-lb (110 N·m)."
    },
    {
     "text": "JL 3.6 head bolt and phaser procedures not found; the JK FSM12 3.6 procedure is not confirmed to apply to the JL \"Pentastar Upgrade\".",
     "conf": "unconfirmed"
    },
    {
     "text": "Regear video: \"How to Re-Gear A Jeep Gladiator/Wrangler JL Axle!\" (JK Gear and Gadgets). Tools listed: shop press, dial indicator, inch-lb beam wrench, 32 mm socket; Revolution Gear 5.13 kits.",
     "conf": "video"
    }
   ],
   "torque": {
    "columns": [
     "Item",
     "JL 3.6L",
     "JL 2.0T"
    ],
    "rows": [
     [
      "Spark plug torque",
      "15 ft-lb (20 N·m)",
      "14 ft-lb (19 N·m)"
     ],
     [
      "Spark plug gap",
      "0.043 in (1.10 mm)",
      "0.024–0.025 in (0.60–0.65 mm)"
     ],
     [
      "Flexplate",
      "70 ft-lb (95 N·m)",
      "81 ft-lb (110 N·m)"
     ]
    ]
   },
   "parts": [
    "gear-yukon-ygk068",
    "gear-yukon-jl-nonrubi",
    "tune-flashcal-jl"
   ],
   "tips": [
    {
     "text": "On the JL 3.6, owners suggest replacing the oil filter housing with the new-design Mopar part when the plugs are due, since the job is 80 percent the same. Do not overtighten the filter cap, which can crack the housing.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/plastic-oil-filter-oil-cooler-housing.173404/",
     "source_name": "JLwranglerforums.com: plastic oil-filter/oil-cooler housing",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-hemi-jk",
   "type": "swap",
   "title": "Hemi swap (JK)",
   "summary": "AEV kits; engine and trans not included.",
   "conf": [
    "verified",
    "unconfirmed"
   ],
   "src": [
    {
     "label": "Quadratec AEV 6.4 kit",
     "url": "https://www.quadratec.com/products/51109_1012_T.htm"
    },
    {
     "label": "DragTek JK Hemi",
     "url": "https://dragtekperformance.com/07-18-jkjku-conversion-parts"
    }
   ],
   "steps": [
    {
     "text": "AEV conversion kits: 5.7 for 07–10 and 6.4 for 12–18. 6.4 kits add a \"$450 core charge for the intake.\" A plug-and-play harness is included. No kit price shown."
    },
    {
     "text": "DragTek \"JK HEMI STAGE 1\" basic install components $839.99 (listed $899.99)."
    },
    {
     "text": "Turnkey $34–40k: search summary only.",
     "conf": "unconfirmed"
    }
   ],
   "torque": null,
   "parts": [
    "swap-dragtek-hemi"
   ],
   "tips": [
    {
     "text": "Moving a V8 into a JK puts about 430 lb more on the front axle, and AEV says stock springs drop about 1 in. Plan new front springs with the swap.",
     "source_url": "https://www.aev-conversions.com/wp-content/uploads/2011/12/AEV30231AD-Hemi-Builder-2012-plus-1-1.pdf",
     "source_name": "AEV: Hemi Builder installation instructions, 2012+ JK",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-ls-jk",
   "type": "swap",
   "title": "LS / LT swap (JK)",
   "summary": "Novak and Wicked Wrench kits.",
   "conf": "verified",
   "src": [
    {
     "label": "Novak JK V8 kit",
     "url": "https://www.novak-adapt.com/catalog/turnkey-powertrains/jk-v8-swap-kit.html"
    },
    {
     "label": "Wicked Wrench LT kit",
     "url": "https://wickedwrenchmotorsports.com/products/jeep-jkjku-lt-genv-install-kit"
    }
   ],
   "steps": [
    {
     "text": "Novak JK V8 kit (Gen III/IV, 4L60E): mounts, transmission adapter, etc. Foundation $1,783 / Essential $3,274 / Complete $3,570 (configured)."
    },
    {
     "text": "Gen V LT: Wicked Wrench JK/JKU LT install kit $1,049.99 (variants $1,069.99–$1,089.99). Integration harness \"from $2,400\": search only."
    },
    {
     "text": "Cummins R2.8: store page returned an empty shell; \"$10,098.99\" and \"$28,500 complete\" are search summaries.",
     "conf": "unconfirmed"
    }
   ],
   "torque": null,
   "parts": [
    "swap-novak-ls",
    "swap-ww-lt"
   ],
   "tips": [
    {
     "text": "An LC9 5.3 JK swap ran 210 F on the highway on a 50 F day with the stock radiator; RPM Extreme says the stock 3.8 radiator is \"just\" enough for a 5.3 and recommends an aluminum radiator on every swap. The Jeep gauge also lags well behind the GM ECU temperature.",
     "source_url": "https://www.jkowners.com/threads/ls-gurus-please-help-trouble-shoot-wiring.258762/",
     "source_name": "JKOwners Forum: LS Gurus, please help trouble shoot wiring",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Experienced builders say a first-time JK LS swap takes 1 to 1.5 months, and one took 4 months waiting on parts and kit support. Bag and label every bolt you remove.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/ls-swap-318619/",
     "source_name": "JK-Forum: LS Swap",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-8hp-jk",
   "type": "swap",
   "title": "8-speed (ZF 8HP) swap, 2012–18 JK 3.6L",
   "summary": "ATS complete kit.",
   "conf": "verified",
   "src": [
    {
     "label": "ATS 8HP kit",
     "url": "https://atsdiesel.com/products/ats-8hp-transmission-complete-conversion-kit-for-2012-2018-jeep-3-6l-sahara-sport-rubicon"
    }
   ],
   "steps": [
    {
     "text": "ATS complete kit with transmission $9,600.00."
    },
    {
     "text": "BP4WD kit-only $2,184: search only.",
     "conf": "unconfirmed"
    }
   ],
   "torque": null,
   "parts": [
    "swap-ats-8hp"
   ],
   "tips": [
    {
     "text": "A JK owner who swapped an 8-speed behind a V8 moved the transfer case back about 3 in and needed new driveshafts, since stock shafts cannot be reliably shortened. He was warned not to tune ZF transmission settings in HP Tuners without real knowledge.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/8-speed-behind-3-6-a-356436/",
     "source_name": "JK-Forum: 8 Speed behind a 3.6",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-big-tires",
   "type": "swap",
   "title": "Big tires: driveshaft, gears, lockers (JK and JL)",
   "summary": "What 3.5\"+ and 35–37s need.",
   "conf": [
    "verified",
    "forum"
   ],
   "src": [
    {
     "label": "Rough Country 69430 (JK 3.5\")",
     "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-694c"
    },
    {
     "label": "Rough Country 66830 (JLU 3.5\")",
     "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-668c"
    },
    {
     "label": "Quadratec TeraFlex 4\" JK",
     "url": "https://www.quadratec.com/products/16194_040X_PG.htm"
    }
   ],
   "steps": [
    {
     "text": "JK 2012–18 at 3.5\"+: expect an exhaust crossover change to clear the front driveshaft; automatics can hit the pan with the oversize front shaft."
    },
    {
     "text": "JL 3.5\"+: budget for a front CV driveshaft."
    },
    {
     "text": "Regear to 4.56, 4.88 or 5.13 for 35–37s (owner advice; gearing not stated by the lift makers).",
     "conf": "forum"
    },
    {
     "text": "Lockers: JK Rubicon D44 uses 35-spline axles, so ARB RD157, not RD116 (search summary).",
     "conf": "unconfirmed"
    },
    {
     "text": "Recalibrate the speedo after tire/gear changes (Superchips Flashcal 3571 / 3571-JL)."
    }
   ],
   "torque": null,
   "parts": [
    "ds-tomwoods-jk",
    "ds-adams-jl",
    "gear-yukon-ygk068",
    "gear-yukon-jl-nonrubi",
    "locker-arb-rd116",
    "locker-arb-jl-m186",
    "tune-flashcal-jk",
    "tune-flashcal-jl"
   ],
   "tips": [
    {
     "text": "After a regear, take it easy for 500 miles with varied speeds and no full throttle or shock loads, then change the gear oil. Shops have owners drive about 15 miles, let the diffs cool fully, and repeat.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/break-period-after-regear-138395/",
     "source_name": "JK-Forum: Break-in Period after Regear????",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On a 4 in lifted automatic JK the front driveshaft boot gets torn by the transmission pan at high articulation, and a 3 in lift hit at full droop. Owners also tore the rear boot on the factory EVAP skid.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/can-2012-driveshaft-boot-get-torn-2-5-3-lift-208618/",
     "source_name": "JK-Forum: Can a 2012 Driveshaft boot get torn with the 2.5-3\" lift?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Rubicon JL fenders hold more tire than Sport/Sahara fenders; owners swap in Rubicon flares to stop rubbing.",
     "source_url": "https://claytonoffroad.com/blogs/news/lift-height-and-tire-size-combinations",
     "source_name": "Clayton Off Road lift/tire chart",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  }
 ],
 "tipsTitle": "Vehicle health tips",
 "tips": [
  {
   "text": "After deep water or wet mud, pull the diff fill plug and look at the oil on your finger; if it is milky at all, change it. One owner changes both diffs and the transfer case yearly anyway.",
   "source_url": "https://www.jk-forum.com/forums/jk-talk-26/change-fluids-after-wheeling-19043/",
   "source_name": "JK-Forum: Change fluids after wheeling?",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "Keep a 50 to 250 ft-lb torque wrench and recheck the track bar bolts (125 ft-lb) after any lift or trail day; owners say these Jeeps do not tolerate bolts that are only \"tight\". One friend's Jeep only stopped wobbling at about 165 ft-lb because the holes had ovaled, and welded washers were the real fix.",
   "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/death-wobble-happened-me-tonight-349337/",
   "source_name": "JK-Forum: Death Wobble happened to me tonight",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "On any 3.6, watch for coolant loss and oil in the engine valley or down the bell housing, the signs of a leaking oil filter housing. One owner found the cause was the seals between the cooler and the block.",
   "source_url": "https://www.jlwranglerforums.com/forum/threads/plastic-oil-filter-oil-cooler-housing.173404/",
   "source_name": "JLwranglerforums.com: plastic oil-filter/oil-cooler housing",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "EcoDiesel owners avoid running the tank below 1/4 and run a lubricity additive (Hot Shot's EDT or Diesel Kleen are named) because air and low-lubricity ULSD are what kill the CP4 pump.",
   "source_url": "https://www.jlwranglerforums.com/forum/threads/cp4-fuel-pump.59449/",
   "source_name": "JLwranglerforums.com: CP4 Fuel Pump",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  }
 ],
 "dyno": {
  "columns": [
   "Vehicle",
   "Result",
   "Notes",
   "Confidence"
  ],
  "rows": [
   [
    "Stock 2.0T JL (automatic, DynoJet, 4th gear), Mishimoto",
    "227 whp / 264 wtq",
    "Same dyno showed the 3.6L JL \"pretty close\" on whp (3.6 car had heavier wheels/tires). Mishimoto: hp matches a 15% drivetrain loss; torque looks underrated",
    "forum"
   ],
   [
    "Stock 3.6 JL",
    "About 225 rwhp",
    "Search summary only",
    "unconfirmed"
   ],
   [
    "Stock 2.0T (Superchips figure)",
    "231 hp / 310 lb-ft",
    "Search summary only",
    "unconfirmed"
   ]
  ],
  "src": [
   {
    "label": "JLwranglerforums Mishimoto dyno",
    "url": "https://www.jlwranglerforums.com/forum/threads/mishimotos-2-0l-turbo-jl-wrangler-first-ever-dyno-runs-vs-3-6l-pentastar.14270/"
   }
  ]
 },
 "videos": [
  {
   "title": "Death Wobble FIXED: Complete Diagnosis & Repair on a 2016 Jeep JK",
   "channel": "Salty Gears Off Road",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=CaEjxA9mD5o",
   "note": "Title, channel and description confirmed; not watched in full."
  },
  {
   "title": "How To Fix Death Wobble in Your Jeep! The Ultimate Guide",
   "channel": "IronRockOffRoad",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=RXwDgok4bOU",
   "note": "Title, channel and description confirmed; not watched in full."
  },
  {
   "title": "How to Replace Oil Filter Housing & Cooler 2006-2018 Jeep Wrangler JK",
   "channel": "TRQ",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=0-dMgSrO7kI",
   "note": "Title, channel and description confirmed; not watched in full."
  },
  {
   "title": "Regearing the Jeep JK with Ian Johnson",
   "channel": "Yukon Gear & Axle",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=yl81Qn1A9ZE",
   "note": "Title, channel and description confirmed; not watched in full."
  },
  {
   "title": "How to Re-Gear A Jeep Gladiator/Wrangler JL Axle!",
   "channel": "JK Gear and Gadgets",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=hTUZpCBkjHE",
   "note": "Title, channel and description confirmed; not watched in full."
  },
  {
   "title": "Jeep Wrangler JL Bilstein B8 5100 Series Steering Damper Review & Install",
   "channel": "n/s",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=8KW01QtMm_M",
   "note": "Title only; content Unconfirmed."
  },
  {
   "title": "Jeep JL Wrangler with 37 Inch Tires and a 2.5 Inch Lift - Does it RUB the Fenders",
   "channel": "Wayalife",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=WxcOtkbKX04",
   "note": "Title, channel and description confirmed; not watched in full."
  },
  {
   "title": "Will 37s Fit on a 2.5\" Lift? Rough Country Jeep JL Install & Test!",
   "channel": "Back yard Steve",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=8HCbmDkxhWQ",
   "note": "Title and description only."
  }
 ],
 "unknowns": [
  "JL engine internals (3.6 \"upgrade\" head bolts and phaser bolt; 2.0T head; 392 and EcoDiesel torque tables). No accessible JL FSM found.",
  "JK transfer case fluid capacity and the 2007–2010 auto fluid capacity (W5A580 / 42RLE).",
  "JL front axle fluid capacity (M186/M210) and the M220 capacity (snippet only).",
  "2007 axle ratios from a factory document.",
  "JL Rubicon LT285/70R17 OEM wheel offset.",
  "TPMS frequencies and part numbers by year (search summary only).",
  "Non-Rubicon JL rear axle (M200 vs M220): unresolved.",
  "Prices still unverified: Cummins R2.8 crate, turnkey Hemi swaps, Holley Flashcal pricing, Discount Tire KO2, Tom Wood's JL shaft, RC 2-door JL 3.5\" kit ($1,299.95 search), BP4WD 8HP kit-only, Wicked Wrench LT harness.",
  "Bestop tops, interior parts (seats, stereos), tail lights, grilles and cargo products: not priced.",
  "Dyno numbers for the 392, 4xe and EcoDiesel; tuned 3.6 figures.",
  "Death wobble NHTSA PDF (autosafety.org) and the ODI PE19-012 resume: read only via search highlights. Hemi/392 kit for a non-392 JL: no kit page opened."
 ],
 "sellers": [],
 "partCategories": [
  "Lift Kits",
  "Steering",
  "Wheels & Tires",
  "Gears, Lockers & Driveshafts",
  "Bumpers & Fenders",
  "Lighting",
  "Exhaust & Intake",
  "Tuners",
  "Swap Parts",
  "Engine",
  "Ignition",
  "Fuel System",
  "Cooling",
  "HVAC",
  "Electrical",
  "Brakes",
  "Suspension",
  "Drivetrain",
  "Body",
  "Interior",
  "Filters & Fluids"
 ],
 "parts": [
  {
   "id": "lift-rc-67700",
   "platform": "Wrangler JK/JL",
   "category": "Lift Kits",
   "name": "2.5\" spacer lift",
   "brand": "Rough Country",
   "part_number": "67700 / 67730",
   "fitment": {
    "years": "2018–23 JL",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Gas and EcoDiesel; not 392"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 199.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-676c",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "$369.95 with N3 shocks (67730)"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 199.95,
    "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-676c",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On a JL the front brake line has a middle bracket on the control arm that leaves the line too short at full droop with the 2.5 in spacers; the installer bent it open and removed it so the line has slack. Be careful not to cut or kink the soft line while doing it.",
     "source_url": "https://www.youtube.com/watch?v=54iBUR32Fmo",
     "source_name": "YouTube (ExtremeTerrain): Jeep Wrangler JL Rough Country 2.5 in. Spacer Suspension Lift Kit w/ N3 Shocks Review & Install",
     "confidence": "video",
     "date_checked": "2026-10-11"
    },
    {
     "text": "In the rear, cut the locating nipple off the factory spring isolator with side cutters so it sits flush on the spacer, and torque the upper rear shock bolts to 81 ft-lb before refitting the trim piece.",
     "source_url": "https://www.youtube.com/watch?v=54iBUR32Fmo",
     "source_name": "YouTube (ExtremeTerrain): Jeep Wrangler JL Rough Country 2.5 in. Spacer Suspension Lift Kit w/ N3 Shocks Review & Install",
     "confidence": "video",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Open the kit and test-fit the supplied rear sway link bolts before you take the Jeep apart: one owner got bolts too big for the M12 link holes and had to run to a hardware store mid-install.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/heads-up-2-5-rough-country-lift-spacer-kit.55500/",
     "source_name": "JLwranglerforums.com: Heads up 2.5\" rough country lift spacer kit",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The kit puts bent sway links in the front and straight links in the rear, the opposite of the factory layout. Owners confirm the instructions are right and the straight rear links work fine.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/rough-countrys-2-5-lift-the-instructions-seem-wrong-you-agree.12479/",
     "source_name": "JLwranglerforums.com: Rough Country's 2.5\" lift...The Instructions Seem wrong, you agree?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "lift-rc-69430",
   "platform": "Wrangler JK/JL",
   "category": "Lift Kits",
   "name": "3.5\" coil lift with N3",
   "brand": "Rough Country",
   "part_number": "69430",
   "fitment": {
    "years": "JK",
    "models": [
     "Wrangler JK"
    ],
    "drive": [],
    "cab": "4-door",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 749.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-694c",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "M1 $889.95, V2 $1,069.95, M1R $1,249.95"
    }
   ],
   "notes": "2012–2018 need exhaust mod (SKU 1030) to clear the front driveshaft.",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 749.95,
    "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-694c",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A 2016 JKU owner got a steering wobble over bumps above 40 mph after the RC 3.5 in kit. Replies say loosen every control arm and track bar bolt and retorque only with the Jeep on its wheels at ride height, and note that fixed lower arms leave caster non-adjustable at the alignment rack.",
     "source_url": "https://www.wranglerforum.com/threads/jk-3-5-lift-rough-country-wobble.1649665/",
     "source_name": "Jeep Wrangler Forum: JK 3.5 lift Rough Country wobble",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "JK 2012-18 with 3.5 in of lift or more: expect to change the exhaust crossover to clear the front driveshaft. On automatics the larger front shaft can hit the transmission pan.",
     "source_url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-694c",
     "source_name": "Rough Country 69430 (JK 3.5\")",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "lift-rc-66830",
   "platform": "Wrangler JK/JL",
   "category": "Lift Kits",
   "name": "3.5\" control-arm-drop lift with N3",
   "brand": "Rough Country",
   "part_number": "66830",
   "fitment": {
    "years": "2018–23 JLU",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "4-door",
    "engines": [],
    "position": "",
    "notes": "Not EcoDiesel, Rubicon, 392 or 4xe"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 799.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-668c",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "M1 $939.95, V2 $1,119.95, M1R $1,299.95"
    }
   ],
   "notes": "Aftermarket driveshaft highly recommended.",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 799.95,
    "url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-668c",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "If a JL shakes on the highway after the RC 3.5 in lift and 35s, recheck the torque on every suspension bolt first; one member has seen the RC sway links arrive or work loose because of how they are built. Owners then point to low caster, not a missing steering stabilizer, for floaty steering.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/rough-country-lift-and-shaking.77991/",
     "source_name": "JLwranglerforums.com: Rough country lift and shaking",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Owners warn that 3.5 in of lift on a JL drives poorly without geometry correction: caster drops too low and the axles shift (driver side in front, passenger side in rear) unless the kit includes drop brackets or longer arms and adjustable track bars. Budget for that up front rather than springs and shocks alone.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/deciding-on-a-2-5-or-3-5-inch-rc-lift-kit-or-am-i.132641/",
     "source_name": "JLwranglerforums.com: Deciding on a 2.5 or 3.5 inch RC Lift Kit. Or am I?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "JL with 3.5 in of lift or more: budget for a front CV driveshaft.",
     "source_url": "https://www.roughcountry.com/product/configurable/jeep-suspension-lift-kit-668c",
     "source_name": "Rough Country 66830 (JLU 3.5\")",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "lift-tf-4-jk",
   "platform": "Wrangler JK/JL",
   "category": "Lift Kits",
   "name": "4\" lift, no shocks",
   "brand": "TeraFlex",
   "part_number": "1151400",
   "fitment": {
    "years": "JK",
    "models": [
     "Wrangler JK"
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
     "price": 1312.98,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.quadratec.com/products/16194_040X_PG.htm",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "MSRP $1,444.98"
    }
   ],
   "notes": "Up to 37\" with ≤4.5\" backspacing; adjustable control arms required.",
   "best_offer": {
    "seller": "Quadratec",
    "price": 1312.98,
    "url": "https://www.quadratec.com/products/16194_040X_PG.htm",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Owners who bought only the 4 in springs were told to add an adjustable front track bar and rear track bar bracket, longer sway links, brake line extensions, and caster correction (adjustable arms or AEV/RC brackets) before driving it; expect another $100 to $200 at minimum.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/4-inch-teraflex-lift-263485/",
     "source_name": "JK-Forum: 4 Inch TeraFlex Lift",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "lift-tf-25-jlr",
   "platform": "Wrangler JK/JL",
   "category": "Lift Kits",
   "name": "2.5\" Performance Spacer Lift with shock extensions",
   "brand": "TeraFlex",
   "part_number": "n/s",
   "fitment": {
    "years": "JL",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "4-door",
    "engines": [],
    "position": "",
    "notes": "Rubicon"
   },
   "offers": [
    {
     "seller": "TeraFlex (manufacturer)",
     "price": 459.98,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://teraflex.com/jl-4dr-rubicon-2-5-performance-spacer-lift-kit-shock-extensions.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "Requires ≤4.75\" backspacing or adapters #1057000.",
   "best_offer": {
    "seller": "TeraFlex (manufacturer)",
    "price": 459.98,
    "url": "https://teraflex.com/jl-4dr-rubicon-2-5-performance-spacer-lift-kit-shock-extensions.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Fit the rear bump stop extensions last, or you will have to pull them back off to get a torque wrench on the rear upper control arm bolts. Have hex sockets for the long bump stop bolts, 18, 21 and 24 mm sockets, and a long torque wrench for the JL front lower arms at 190 ft-lb (thread is a TeraFlex ST2 coil kit that shares this hardware).",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/installing-a-teraflex-2-5-in-sport-st2-lift-w-falcon-sp2-3-1-shocks.49001/",
     "source_name": "JLwranglerforums.com: Installing a Teraflex 2.5 in Sport ST2 lift W/Falcon SP2 3.1 shocks",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A 4xe owner who added this kit with adjustable lower arms and track bar took about 7 hours. The longer rear sway links hit the inner balance weights on stock Rubicon wheels, so he flipped the link mounts for clearance.",
     "source_url": "https://www.northridge4x4.com/part/2-5in-lifts/1365210-teraflex-2-5in-performance-spacer-lift-kit/reviews",
     "source_name": "Northridge4x4: All Reviews About Teraflex 2.5in Performance Spacer Lift Kit",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "TeraFlex spacers can be stacked, and front and rear JL spacers interchange between 2-door and 4-door. One owner whose front sat low added a 1/2 in front spacer from TeraFlex to get level.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/what-is-the-difference-between-the-2-door-and-4-door-version-of-terraflex-2-5-spacer-lift-w-shock-extension.61130/",
     "source_name": "JLwranglerforums.com: What is the difference between the 2-door and 4-door version of Terraflex 2.5 Spacer lift w/ Shock extension",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "JL Rubicon spacer lifts with 37s depend on bump stops and rear liners: TeraFlex specifies 2.5 in front and 3 in rear bump stops, and one owner heat-formed the rear liners for clearance.",
     "source_url": "https://teraflex.com/jl-4dr-rubicon-2-5-performance-spacer-lift-kit-shock-extensions.html",
     "source_name": "TeraFlex JL Rubicon 2.5\" spacer",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "steer-synergy-8069",
   "platform": "Wrangler JK/JL",
   "category": "Steering",
   "name": "Front track bar and sector shaft brace",
   "brand": "Synergy",
   "part_number": "8069-04",
   "fitment": {
    "years": "JK",
    "models": [
     "Wrangler JK"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Synergy (manufacturer)",
     "price": 335,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.synergymfg.com/synergy-jeep-jk-jku-front-track-bar-and-sector-shaft-brace.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Synergy (manufacturer)",
    "price": 335,
    "url": "https://www.synergymfg.com/synergy-jeep-jk-jku-front-track-bar-and-sector-shaft-brace.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On 2012 and later JKs that keep the stock track bar, the 9/16 in bolt will not pass through the track bar bushing, so use the M14-2.0 bolt in the kit. Support the steering box as you pull the last box bolt, and use blue Loctite on the box bolts.",
     "source_url": "https://www.synergymfg.com/pdf/PPM-8069-V4_INST.pdf",
     "source_name": "Synergy Manufacturing: PPM 8069 JK front trackbar brace / sector shaft brace installation instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Torque the 4 steering box bolts to 70 ft-lb, the 7/16 in brace bolts to 50 ft-lb, the track bar bolt to 125 ft-lb and the pitman arm nut to 150 ft-lb. Put anti-seize on the sector shaft threads before installing the brace.",
     "source_url": "https://www.synergymfg.com/pdf/PPM-8069-V4_INST.pdf",
     "source_name": "Synergy Manufacturing: PPM 8069 JK front trackbar brace / sector shaft brace installation instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "An owner on 37s said the track bar brace cured a steering clunk from worn frame mount holes, but the front sway bar slightly rubbed the brace even after re-centering the axle. Check sway bar clearance after install.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/synergy-jeep-jk-front-track-bar-sector-shaft-brace-kit-290974/",
     "source_name": "JK-Forum: Synergy Jeep JK Front Track Bar & Sector Shaft Brace Kit",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "wheel-method-mr305",
   "platform": "Wrangler JK/JL",
   "category": "Wheels & Tires",
   "name": "MR305 NV 17x8.5 ET0 (4.75\" BS), each",
   "brand": "Method",
   "part_number": "MR30578550500",
   "fitment": {
    "years": "JK/JL",
    "models": [
     "Wrangler JK",
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Wheels Below Retail",
     "price": 315,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.wheelsbelowretail.com/products/nv-black-mr30578550500",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Each"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Wheels Below Retail",
    "price": 315,
    "url": "https://www.wheelsbelowretail.com/products/nv-black-mr30578550500",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "wheel-method-mr701",
   "platform": "Wrangler JK/JL",
   "category": "Wheels & Tires",
   "name": "MR701 Bronze 17x9 -12 (4.53\" BS), each",
   "brand": "Method",
   "part_number": "MR70179050912N",
   "fitment": {
    "years": "JL",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ExtremeTerrain",
     "price": 425.7,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.extremeterrain.com/method-race-jeep-wrangler-jl-mr701-bronze-wheel-17x9-mr70179050912n.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Each"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "ExtremeTerrain",
    "price": 425.7,
    "url": "https://www.extremeterrain.com/method-race-jeep-wrangler-jl-mr701-bronze-wheel-17x9-mr70179050912n.html",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "tire-bfg-ko2-35",
   "platform": "Wrangler JK/JL",
   "category": "Wheels & Tires",
   "name": "All-Terrain T/A KO2 35x12.50R17LT E, each",
   "brand": "BFGoodrich",
   "part_number": "n/s",
   "fitment": {
    "years": "JK/JL",
    "models": [
     "Wrangler JK",
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ExtraBrake",
     "price": 293.24,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://extrabrake.com/tire/246620-",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Each. Discount Tire ($403) rendered no price: Unconfirmed"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "ExtraBrake",
    "price": 293.24,
    "url": "https://extrabrake.com/tire/246620-",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Owners running load range E 35s on Wranglers land between 26 and 30 psi on the street after chalk testing, well below the sidewall max. One runs 28 psi on the road and airs down to 18 psi for beach and trail.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/25-psi-on-35-bfg-ko2s-load-range-e.155831/",
     "source_name": "JLwranglerforums.com: 25 psi on 35\" BFG KO2s  load range E",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A 35x12.50 KO2 measured 34.25 in but read about 10 percent fast at that setting; the owner had to enter 33.5 in for the speedo to match GPS. Calibrate by GPS or a chalk-mark rollout rather than the sidewall size.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/adjusting-tire-size-flashpaq-337263/",
     "source_name": "JK-Forum: Adjusting tire size with flashpaq",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "gear-yukon-ygk068",
   "platform": "Wrangler JK/JL",
   "category": "Gears, Lockers & Driveshafts",
   "name": "Rubicon D44 front and rear 4.88 gear package (ring and pinion + master install kits)",
   "brand": "Yukon",
   "part_number": "YGK068",
   "fitment": {
    "years": "JL Rubicon",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Yukon (manufacturer)",
     "price": 1042.89,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.yukongear.com/products/ygk068",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Same price at Randys"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Yukon (manufacturer)",
    "price": 1042.89,
    "url": "https://www.yukongear.com/products/ygk068",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "One owner who put Yukon gears in a JL says they developed a noise at 55 to 60 mph starting around 7,000 to 10,000 miles, which Yukon tech support called common, and he would buy Dana Spicer next time. Another member reports thousands of trouble-free miles on Yukons after careful heat-cycle break-in.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/gears-yukon-or-dana.131064/page-2",
     "source_name": "JLwranglerforums.com: Gears - Yukon or Dana.",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    },
    {
     "text": "A faint decel whine at 20 to 30 mph after a JL regear will not go away on its own; members say it is usually a .002 to .005 in pinion shim error and the installer should recheck backlash and pattern. Ask for the lash numbers and pattern photos.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/do-yukon-gears-quiet-down-post-break-in.120508/",
     "source_name": "JLwranglerforums.com: Do yukon gears quiet down post break in?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "gear-yukon-jl-nonrubi",
   "platform": "Wrangler JK/JL",
   "category": "Gears, Lockers & Driveshafts",
   "name": "Non-Rubicon D30 M186 / D35 M200 4.88 gear and kit package",
   "brand": "Yukon",
   "part_number": "n/s",
   "fitment": {
    "years": "JL non-Rubicon",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "East Coast Gear Supply",
     "price": 743.91,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://eastcoastgearsupply.com/i-23994490-yukon-complete-gear-and-kit-package-for-jl-jeep-non-rubicon-d35-m200-rear-d30-m186-front-4-88-gear-ratio.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "Confirm your rear axle (M200 vs M220) first.",
   "best_offer": {
    "seller": "East Coast Gear Supply",
    "price": 743.91,
    "url": "https://eastcoastgearsupply.com/i-23994490-yukon-complete-gear-and-kit-package-for-jl-jeep-non-rubicon-d35-m200-rear-d30-m186-front-4-88-gear-ratio.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "One owner who put Yukon gears in a JL says they developed a noise at 55 to 60 mph starting around 7,000 to 10,000 miles, which Yukon tech support called common, and he would buy Dana Spicer next time. Another member reports thousands of trouble-free miles on Yukons after careful heat-cycle break-in.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/gears-yukon-or-dana.131064/page-2",
     "source_name": "JLwranglerforums.com: Gears - Yukon or Dana.",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    },
    {
     "text": "A faint decel whine at 20 to 30 mph after a JL regear will not go away on its own; members say it is usually a .002 to .005 in pinion shim error and the installer should recheck backlash and pattern. Ask for the lash numbers and pattern photos.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/do-yukon-gears-quiet-down-post-break-in.120508/",
     "source_name": "JLwranglerforums.com: Do yukon gears quiet down post break in?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "locker-arb-rd116",
   "platform": "Wrangler JK/JL",
   "category": "Gears, Lockers & Driveshafts",
   "name": "Air Locker, Dana 44 30-spline, 3.92+",
   "brand": "ARB",
   "part_number": "RD116",
   "fitment": {
    "years": "D44 30-spline",
    "models": [
     "Wrangler JK",
     "Wrangler JL"
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
     "price": 1299.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://store.arbusa.com/air-locker-differential-dana-44-30-spl-3-92-uprd116/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "JK Rubicon D44 is reportedly 35-spline (RD157), search summary only.",
   "best_offer": {
    "seller": "ARB USA",
    "price": 1299.95,
    "url": "https://store.arbusa.com/air-locker-differential-dana-44-30-spl-3-92-uprd116/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Each Air Locker comes with its own solenoid, but you need the ARB compressor manifold kit to mount the solenoids, and the manifold has holes for exactly two. If your compressor already runs a sway bar disconnect solenoid, plan where the third solenoid will go.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/arb-max-connects.108201/",
     "source_name": "JLwranglerforums.com: ARB max connects?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "locker-arb-jl-m186",
   "platform": "Wrangler JK/JL",
   "category": "Gears, Lockers & Driveshafts",
   "name": "Air Locker, JL Sport front M186 (27-spline, 3.73+)",
   "brand": "ARB",
   "part_number": "n/s",
   "fitment": {
    "years": "JL Sport",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "Front",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Poly Performance",
     "price": 1299.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.polyperformance.com/arb-jeep-wrangler-jl-sport-front-air-locker-m186-dana-30-27-spl-3-73-up",
     "checked": "2026-10-11",
     "status": "unverified",
     "source_note": "From price; page shows ARB variants $1,049–$1,499.95; exact variant not isolated"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Poly Performance",
    "price": 1299.95,
    "url": "https://www.polyperformance.com/arb-jeep-wrangler-jl-sport-front-air-locker-m186-dana-30-27-spl-3-73-up",
    "status": "unverified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Each Air Locker comes with its own solenoid, but you need the ARB compressor manifold kit to mount the solenoids, and the manifold has holes for exactly two. If your compressor already runs a sway bar disconnect solenoid, plan where the third solenoid will go.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/arb-max-connects.108201/",
     "source_name": "JLwranglerforums.com: ARB max connects?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "ds-tomwoods-jk",
   "platform": "Wrangler JK/JL",
   "category": "Gears, Lockers & Driveshafts",
   "name": "Front 1350 CV driveshaft",
   "brand": "Tom Wood's",
   "part_number": "n/s",
   "fitment": {
    "years": "JK",
    "models": [
     "Wrangler JK"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Tom Wood's (4xshaft.com)",
     "price": 769,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://4xshaft.com/products/jk-front-1350-drive-shaft",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Tom Wood's (4xshaft.com)",
    "price": 769,
    "url": "https://4xshaft.com/products/jk-front-1350-drive-shaft",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A Tom Woods JK shaft has five grease points: three u-joint zerks, the slip joint, and a hidden fitting for the double cardan centering ball that usually needs the shaft dropped and a needle injector. A squeak from the double cardan was that dry centering ball (thread covers the 1310 shaft with the same double cardan layout).",
     "source_url": "https://www.jk-forum.com/forums/jk-write-ups-39/greasing-tom-woods-driveshafts-205345/",
     "source_name": "JK-Forum: Greasing Tom Woods Driveshafts",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Get a thin-wall 1-5/16 in socket and RTV for the yoke splines before you start; one owner did it in about 2 hours and knocked the yokes off with a rubber mallet. Owners disagree on caster: some run 6 degrees for steering return, others say it puts too much angle on the shaft and causes vibration.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/tom-woods-front-drive-shaft-install-170539/",
     "source_name": "JK-Forum: Tom Woods Front Drive Shaft Install",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "ds-adams-jl",
   "platform": "Wrangler JK/JL",
   "category": "Gears, Lockers & Driveshafts",
   "name": "Front 1350 CV driveshaft, Extreme Duty (OEM flange)",
   "brand": "Adams",
   "part_number": "n/s",
   "fitment": {
    "years": "JL Rubicon/Sahara/Sport",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Adams (manufacturer)",
     "price": 799.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.adamsdriveshaftoffroad.com/products/adams-driveshaft-jl-rubicon-front-1350-cv-driveshaft-oem-flange-style-extreme-duty-series",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Adams (manufacturer)",
    "price": 799.95,
    "url": "https://www.adamsdriveshaftoffroad.com/products/adams-driveshaft-jl-rubicon-front-1350-cv-driveshaft-oem-flange-style-extreme-duty-series",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The Adams 1350 Extreme Duty front shaft has non-greaseable u-joints, but the slip yoke and the half CV at the transfer case need regular grease, more often if you run full-time 4WD. Plan skid plate access to those zerks.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/front-driveshaft-on-metal-cloak-3-5-lift.81079/page-2",
     "source_name": "JLwranglerforums.com: Front Driveshaft on Metal Cloak 3.5\" Lift",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A 392 owner with Adams 1350 shafts and 6.2 degrees of caster had highway vibration that grew past 70 mph. Replies say with a double cardan at the transfer case the pinion must point straight at the shaft, so high caster fights pinion angle; get the shaft balance checked too.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/aftermarket-driveshaft-mega-thread%E2%80%A6buyer-beware.88097/",
     "source_name": "JLwranglerforums.com: Aftermarket Driveshaft Mega Thread…Buyer Beware",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "bumper-sb-xrc-jk",
   "platform": "Wrangler JK/JL",
   "category": "Bumpers & Fenders",
   "name": "XRC Gen2 front bumper",
   "brand": "Smittybilt",
   "part_number": "76807",
   "fitment": {
    "years": "JK",
    "models": [
     "Wrangler JK"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ExtremeTerrain",
     "price": 813.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.extremeterrain.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price verified on the product page; the guide did not record its full URL, so this links to the store"
    },
    {
     "seller": "Smittybilt (manufacturer)",
     "price": 739.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.smittybilt.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price verified on the product page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Smittybilt (manufacturer)",
    "price": 739.99,
    "url": "https://www.smittybilt.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Owners like the build quality but it is heavy; with a winch one JK sagged about 1 in up front. Plan on coil spacers or heavier front springs if you add a winch.",
     "source_url": "https://www.jk-forum.com/forums/jk-talk-26/smittybilt-xrc-gen-ii-front-bumper-315589/page9/",
     "source_name": "JK-Forum: Smittybilt XRC Gen II Front Bumper",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "bumper-sb-xrc-jl",
   "platform": "Wrangler JK/JL",
   "category": "Bumpers & Fenders",
   "name": "XRC front bumper",
   "brand": "Smittybilt",
   "part_number": "77806",
   "fitment": {
    "years": "JL",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ExtremeTerrain",
     "price": 569.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.extremeterrain.com/smittybilt-jeep-wrangler-xrc-front-bumper-77806.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "ExtremeTerrain",
    "price": 569.99,
    "url": "https://www.extremeterrain.com/smittybilt-jeep-wrangler-xrc-front-bumper-77806.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Factory halogen fogs and harness drop into the JL XRC Gen2 (77807), but owners coming off the factory steel bumper could not reuse the LED fogs; one used Inspired Engineering Black Cube pods with a plug-in adapter for the OE harness. Owners swapping from the plastic bumper reused LED fogs fine.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/smittybilt-xrc-gen2-front-bumper.19943/",
     "source_name": "JLwranglerforums.com: Smittybilt XRC Gen2 Front Bumper",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Get a second person to lift it onto the frame; owners call the install easy but the bumper heavy.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/smittybilt-xrc-gen2-front-bumper.19943/page-3",
     "source_name": "JLwranglerforums.com: Smittybilt XRC Gen2 Front Bumper",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "bumper-rr-spartan",
   "platform": "Wrangler JK/JL",
   "category": "Bumpers & Fenders",
   "name": "Spartan High-Clearance front bumper with Overrider",
   "brand": "Rugged Ridge",
   "part_number": "11548.41",
   "fitment": {
    "years": "JL/JT",
    "models": [
     "Wrangler JL",
     "Gladiator JT"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Rugged Ridge (manufacturer)",
     "price": 659.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://ruggedridge.com/p/rugged-ridge-spartan-front-bumper/rgr-11548-41/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rugged Ridge (manufacturer)",
    "price": 659.99,
    "url": "https://ruggedridge.com/p/rugged-ridge-spartan-front-bumper/rgr-11548-41/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The Rugged Ridge overrider bolts on with the same bolts that hold the bumper shell to the frame. Install it before the shell goes on: one owner adding it later could not fit a T45 Torx socket behind the bar (thread covers the RR Venator, which uses the same overrider mounting).",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/installed-rugged-ridge-venator-bumper.84763/page-2",
     "source_name": "JLwranglerforums.com: Installed Rugged Ridge Venator Bumper",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "fender-bushwacker-jk",
   "platform": "Wrangler JK/JL",
   "category": "Bumpers & Fenders",
   "name": "Flat Style fender flares",
   "brand": "Bushwacker",
   "part_number": "10919-07",
   "fitment": {
    "years": "JK",
    "models": [
     "Wrangler JK"
    ],
    "drive": [],
    "cab": "2-door",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Quadratec",
     "price": 449.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.quadratec.com/products/12506_4442_07.htm",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Quadratec",
    "price": 449.99,
    "url": "https://www.quadratec.com/products/12506_4442_07.htm",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Trim the inner liners by installing them untrimmed, tracing the body edge with a grease pen, then cutting once with tin shears. Owners who cut freehand went too short and the liner flaps; install on a warm day because the adhesive grabs much better.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/bushwacker-flat-fender-installation-tip-tricks-221681/",
     "source_name": "JK-Forum: Bushwacker Flat Fender Installation Tip or Tricks",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "fender-rr-maxterrain",
   "platform": "Wrangler JK/JL",
   "category": "Bumpers & Fenders",
   "name": "Max-Terrain flat fender flares",
   "brand": "Rugged Ridge",
   "part_number": "n/s",
   "fitment": {
    "years": "JL",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Rugged Ridge (manufacturer)",
     "price": 779.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://ruggedridge.com/p/rugged-ridge-max-terrain-fender-flares/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rugged Ridge (manufacturer)",
    "price": 779.99,
    "url": "https://ruggedridge.com/p/rugged-ridge-max-terrain-fender-flares/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Disconnect both the primary and secondary batteries before install because the flares have integrated LED lights. The OE inner liners are trimmed and reused with the supplied trim foam set 1/4 in from the edge.",
     "source_url": "https://www.quadratec.com/sites/default/files/installation_instructions/MaxTerrain.pdf",
     "source_name": "Rugged Ridge: Max Terain Flares, JL installation instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "One member said a trail buddy's Max-Terrain flares faded and cracked in the sun within 3 weeks; the buyer replied he would switch to MetalCloak if that happened.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/are-37s-silly-to-consider-with-just-the-max-terrain-flares.56941/",
     "source_name": "JLwranglerforums.com: Are 37's silly to consider with just the max terrain flares?",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    },
    {
     "text": "Owners who reused the trimmed OE liners thought it looked messy and planned aftermarket inner fender liners; one had trouble lining up the passenger bracket and another had a mangled light plug on the driver side.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/max-terrain-fender-flare-set-f-r-18-20-jl-jlu.49228/page-6",
     "source_name": "JLwranglerforums.com: Max Terrain Fender Flare Set, F & R; 18-20 JL/JLU",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "light-jws-jk",
   "platform": "Wrangler JK/JL",
   "category": "Lighting",
   "name": "8700 Evolution J2 headlights, pair",
   "brand": "J.W. Speaker",
   "part_number": "8700",
   "fitment": {
    "years": "JK",
    "models": [
     "Wrangler JK"
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
     "price": 639.51,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.quadratec.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price verified on the product page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Quadratec",
    "price": 639.51,
    "url": "https://www.quadratec.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "After install the headlights must be aimed on a level surface against a wall using tape lines. On ECE versions a separate red lead must be connected, so confirm which version you bought before wiring.",
     "source_url": "https://www.jwspeaker.com/wp-content/uploads/Model-8700-EVO-J2-Instruction-sheet.pdf",
     "source_name": "J.W. Speaker: Model 8700 EVO J2 instruction sheet",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "light-jws-jl",
   "platform": "Wrangler JK/JL",
   "category": "Lighting",
   "name": "8700 J2 headlights, pair + JL mount kit",
   "brand": "J.W. Speaker",
   "part_number": "8700",
   "fitment": {
    "years": "JL 18–20 / JT",
    "models": [
     "Wrangler JL",
     "Gladiator JT"
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
     "price": 1080.2,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.quadratec.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price verified on the product page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Quadratec",
    "price": 1080.2,
    "url": "https://www.quadratec.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A 2021 JLU owner found the JL mount kit cans only adjust vertically and could not find any horizontal adjustment, and the kit arrived loose with no instructions; download the JW Speaker instructions before starting.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/jw-speaker-headlights.150752/",
     "source_name": "JLwranglerforums.com: JW Speaker Headlights",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "exh-mf-19386",
   "platform": "Wrangler JK/JL",
   "category": "Exhaust & Intake",
   "name": "Rock Crawler cat-back",
   "brand": "MagnaFlow",
   "part_number": "19386",
   "fitment": {
    "years": "JL",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "3.6"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ExtremeTerrain",
     "price": 806,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.extremeterrain.com/magnaflow-rock-crawler-catback-exhaust-2018-36l-jl.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "ExtremeTerrain",
    "price": 806,
    "url": "https://www.extremeterrain.com/magnaflow-rock-crawler-catback-exhaust-2018-36l-jl.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A JLUR owner got heavy cabin drone from about 2,100 to 3,000 rpm, right at cruise. His fix was to have a shop weld the stock resonator back in ahead of the MagnaFlow muffler (about $200), which he says removed the drone.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/the-magic-rock-crawler-exhaust-option.21217/",
     "source_name": "JLwranglerforums.com: THE Magic Rock Crawler Exhaust Option",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "An early buyer on a JL found the 4-door extension pipe about 2 to 3 in too long and could not hang the tailpipe; check fit before final tightening and be ready to cut it.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/magnaflow-rock-crawler-arrived-today.13700/",
     "source_name": "JLwranglerforums.com: Magnaflow Rock Crawler Arrived Today",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "exh-mf-19592",
   "platform": "Wrangler JK/JL",
   "category": "Exhaust & Intake",
   "name": "Overland cat-back",
   "brand": "MagnaFlow",
   "part_number": "19592",
   "fitment": {
    "years": "JL",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "3.6"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "MagnaFlow (manufacturer)",
     "price": 949,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.magnaflow.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price verified on the product page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "MagnaFlow (manufacturer)",
    "price": 949,
    "url": "https://www.magnaflow.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "It does not fit the 3.6 eTorque even though MagnaFlow support told one buyer it would: the muffler hits the 48V battery coolant lines and the resonator hits the battery skid. The product page Q&A confirms no eTorque fit.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/magnaflow-overland-series-cat-back-performance-exhaust-system-fits-3-6-etorque.101243/",
     "source_name": "JLwranglerforums.com: MagnaFlow Overland Series Cat-Back Performance Exhaust System Fits 3.6 eTorque",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "intake-afe-75-76217",
   "platform": "Wrangler JK/JL",
   "category": "Exhaust & Intake",
   "name": "Momentum GT Pro-GUARD 7 cold air intake, black",
   "brand": "aFe",
   "part_number": "75-76217",
   "fitment": {
    "years": "JL",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "3.6"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ExtremeTerrain",
     "price": 435,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.extremeterrain.com/afe-momentum-gt-pro-guard-7-cold-airtake-black-2018-36l-jl.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "ExtremeTerrain",
    "price": 435,
    "url": "https://www.extremeterrain.com/afe-momentum-gt-pro-guard-7-cold-airtake-black-2018-36l-jl.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Use a jeweler's screwdriver to release the intake air temp sensor clip; one owner broke it. You must loosen the breather tube to pull the filter, and the dry filter is easier to clean than the oiled one if you see dust.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/afe-momentum-gt-cold-air-intake-youtube-review.15395/",
     "source_name": "JLwranglerforums.com: aFe Momentum GT Cold Air Intake YouTube Review",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Several JL owners got a recurring check engine light after this install, and the replacement valve aFe sent one owner did not fix it. Mopar CAI instructions call for disconnecting all negative battery cables during install, which one owner credits for no lights.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/check-engine-code-after-afe-momentum-cold-air-intake-install.53800/",
     "source_name": "JLwranglerforums.com: Check Engine code after afe momentum cold air intake install.",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "intake-kn-63-1566",
   "platform": "Wrangler JK/JL",
   "category": "Exhaust & Intake",
   "name": "63 Series AirCharger kit",
   "brand": "K&N",
   "part_number": "63-1566",
   "fitment": {
    "years": "2012-2018",
    "models": [
     "Wrangler JK"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "3.6"
    ],
    "position": "",
    "notes": "Fitment re-checked 2026-10-11: K&N lists 63-1566 for Jeep Wrangler V6-3.6L (knfilters.com/63-1566-performance-air-intake-system); Quadratec lists 2012-2018 JK 2-door and Unlimited, 3.6L. The previously listed 63-1561 is K&N's Ram 1500/2500/3500 5.7 Hemi kit and does not fit."
   },
   "offers": [
    {
     "seller": "Quadratec",
     "price": 367.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.quadratec.com/p/kn/63-series-aircharger-performance-intake-system-Jeep-wrangler-jk-36l-63-1566",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price and 2012-2018 JK 3.6 fitment on page 2026-10-11"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Quadratec",
    "price": 367.99,
    "url": "https://www.quadratec.com/p/kn/63-series-aircharger-performance-intake-system-Jeep-wrangler-jk-36l-63-1566",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "3.6 JK owners report no felt power gain and at most about 0.4 mpg from K&N filtration; the real benefit is not buying paper filters. If you wheel, clean it often, since a dirty oiled filter can restrict more than a dirty paper one.",
     "source_url": "https://www.jk-forum.com/forums/stock-jk-tech-12/using-k-n-air-filter-3-6-engine-294927/",
     "source_name": "JK-Forum: Using a K&N air filter with the 3.6 engine",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tune-flashcal-jk",
   "platform": "Wrangler JK/JL",
   "category": "Tuners",
   "name": "Flashcal 3571 (speedo/gear recal, TPMS on/off)",
   "brand": "Superchips",
   "part_number": "3571",
   "fitment": {
    "years": "JK",
    "models": [
     "Wrangler JK"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "JustForJeeps",
     "price": 278.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.justforjeeps.com/jk-flashcal.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "JustForJeeps",
    "price": 278.95,
    "url": "https://www.justforjeeps.com/jk-flashcal.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Newer Flashcal updates no longer let a JK lower the TPMS warning pressure; the only option is the separately downloaded TPMS Offroad function, which shuts TPMS off entirely. The wording is backwards: you enable TPMS Offroad to disable the warnings.",
     "source_url": "https://www.jk-forum.com/forums/modified-jk-tech-2/superchips-flashcal-tire-pressure-326142/",
     "source_name": "JK-Forum: Superchips Flashcal...Tire pressure.?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tune-flashcal-jl",
   "platform": "Wrangler JK/JL",
   "category": "Tuners",
   "name": "Flashcal 3571-JL",
   "brand": "Superchips",
   "part_number": "3571-JL",
   "fitment": {
    "years": "2018–24 JL",
    "models": [
     "Wrangler JL"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Off Road Warehouse",
     "price": 349.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.offroadwarehouse.com/product/superchips-flashcal-for-2018-2024-jeep-wrangler-jl-3571-jl",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Holley's own $305.95 was Cloudflare-blocked: Unconfirmed"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Off Road Warehouse",
    "price": 349.95,
    "url": "https://www.offroadwarehouse.com/product/superchips-flashcal-for-2018-2024-jeep-wrangler-jl-3571-jl",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On a JL 6-speed, one shop found a Superchips calibrator tire change put the Jeep in limp mode with a \"Service Transmission\" message and 9 TCM codes. Manual JL owners should have JScan or a dealer option ready before changing tire settings.",
     "source_url": "https://www.jlwranglerforums.com/forum/threads/evic-displays-service-transmission-service-procedure-for-jl-jt-with-manual-transmission.128371/",
     "source_name": "JLwranglerforums.com: EVIC Displays: SERVICE TRANSMISSION - Service Procedure for JL/JT with Manual Transmission",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-novak-ls",
   "platform": "Wrangler JK/JL",
   "category": "Swap Parts",
   "name": "JK V8 swap kit (Foundation)",
   "brand": "Novak",
   "part_number": "n/s",
   "fitment": {
    "years": "JK",
    "models": [
     "Wrangler JK"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Novak (manufacturer)",
     "price": 1783,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.novak-adapt.com/catalog/turnkey-powertrains/jk-v8-swap-kit.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Essential $3,274 / Complete $3,570 (configured)"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Novak (manufacturer)",
    "price": 1783,
    "url": "https://www.novak-adapt.com/catalog/turnkey-powertrains/jk-v8-swap-kit.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A 2010 JKRU owner using the Novak LS kit with an NSG370 had a miswired MAF connector, no dash temp reading, throttle and ABS lights, and a lagging tach from the emulator, and got little help from Novak. Both MoTech and RPM Extreme helped him on the forum, and he ended by saying he would not recommend the Novak kit.",
     "source_url": "https://www.jkowners.com/threads/ls-gurus-please-help-trouble-shoot-wiring.258762/",
     "source_name": "JKOwners Forum: LS Gurus, please help trouble shoot wiring",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-ats-8hp",
   "platform": "Wrangler JK/JL",
   "category": "Swap Parts",
   "name": "8HP complete conversion kit with transmission",
   "brand": "ATS Diesel",
   "part_number": "n/s",
   "fitment": {
    "years": "2012–18 JK 3.6L",
    "models": [
     "Wrangler JK"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ATS (manufacturer)",
     "price": 9600,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://atsdiesel.com/products/ats-8hp-transmission-complete-conversion-kit-for-2012-2018-jeep-3-6l-sahara-sport-rubicon",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "ATS (manufacturer)",
    "price": 9600,
    "url": "https://atsdiesel.com/products/ats-8hp-transmission-complete-conversion-kit-for-2012-2018-jeep-3-6l-sahara-sport-rubicon",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "swap-ww-lt",
   "platform": "Wrangler JK/JL",
   "category": "Swap Parts",
   "name": "JK/JKU Gen V LT install kit",
   "brand": "Wicked Wrench",
   "part_number": "n/s",
   "fitment": {
    "years": "JK",
    "models": [
     "Wrangler JK"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Wicked Wrench (manufacturer)",
     "price": 1049.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://wickedwrenchmotorsports.com/products/jeep-jkjku-lt-genv-install-kit",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Higher variants $1,069.99–$1,089.99"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Wicked Wrench (manufacturer)",
    "price": 1049.99,
    "url": "https://wickedwrenchmotorsports.com/products/jeep-jkjku-lt-genv-install-kit",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "swap-dragtek-hemi",
   "platform": "Wrangler JK/JL",
   "category": "Swap Parts",
   "name": "JK HEMI STAGE 1 basic install components",
   "brand": "DragTek",
   "part_number": "n/s",
   "fitment": {
    "years": "2007–18 JK/JKU",
    "models": [
     "Wrangler JK"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "DragTek (manufacturer)",
     "price": 839.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://dragtekperformance.com/07-18-jkjku-conversion-parts",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Listed $899.99"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "DragTek (manufacturer)",
    "price": 839.99,
    "url": "https://dragtekperformance.com/07-18-jkjku-conversion-parts",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Any JK Hemi swap needs a rear-sump oil pan and pickup, and the torque-to-yield main cap bolt must always be replaced with a new one. A 6.4 Hemi must run premium only; AEV suggests running a tank of premium before starting the swap (AEV Hemi builder instructions, same engine prep as any JK Hemi kit).",
     "source_url": "https://www.aev-conversions.com/wp-content/uploads/2011/12/AEV30231AD-Hemi-Builder-2012-plus-1-1.pdf",
     "source_name": "AEV: Hemi Builder installation instructions, 2012+ JK",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  }
 ],
 "catalog": {
  "note": "Repair parts are RockAuto catalog picks (Economy, OE, Premium options per part type) read on the catalog pages of the representative vehicles linked here. Fitment comes from the listing notes for those vehicles only, so other years, trims and cabs show Check fitment.",
  "vehicles": [
   "https://www.rockauto.com/en/catalog/jeep,2012,wrangler,3.6l+v6,1503367",
   "https://www.rockauto.com/en/catalog/jeep,2019,wrangler,3.6l+v6,3443725"
  ],
  "generated": "2026-10-18",
  "files": [
   {
    "file": "data/parts/wrangler-jk-jl/0.js",
    "category": "Engine",
    "count": 221,
    "types": 53,
    "from": null,
    "bytes": 170273
   },
   {
    "file": "data/parts/wrangler-jk-jl/1.js",
    "category": "Ignition",
    "count": 37,
    "types": 9,
    "from": null,
    "bytes": 30036
   },
   {
    "file": "data/parts/wrangler-jk-jl/2.js",
    "category": "Fuel System",
    "count": 38,
    "types": 19,
    "from": null,
    "bytes": 31146
   },
   {
    "file": "data/parts/wrangler-jk-jl/3.js",
    "category": "Cooling",
    "count": 48,
    "types": 16,
    "from": null,
    "bytes": 36918
   },
   {
    "file": "data/parts/wrangler-jk-jl/4.js",
    "category": "HVAC",
    "count": 49,
    "types": 14,
    "from": null,
    "bytes": 38605
   },
   {
    "file": "data/parts/wrangler-jk-jl/5.js",
    "category": "Electrical",
    "count": 140,
    "types": 60,
    "from": null,
    "bytes": 115272
   },
   {
    "file": "data/parts/wrangler-jk-jl/6.js",
    "category": "Brakes",
    "count": 198,
    "types": 38,
    "from": null,
    "bytes": 172671
   },
   {
    "file": "data/parts/wrangler-jk-jl/7.js",
    "category": "Steering",
    "count": 77,
    "types": 17,
    "from": null,
    "bytes": 57724
   },
   {
    "file": "data/parts/wrangler-jk-jl/8.js",
    "category": "Suspension",
    "count": 102,
    "types": 16,
    "from": null,
    "bytes": 86116
   },
   {
    "file": "data/parts/wrangler-jk-jl/9.js",
    "category": "Drivetrain",
    "count": 242,
    "types": 79,
    "from": null,
    "bytes": 232655
   },
   {
    "file": "data/parts/wrangler-jk-jl/10.js",
    "category": "Body",
    "count": 277,
    "types": 81,
    "from": null,
    "bytes": 239495
   },
   {
    "file": "data/parts/wrangler-jk-jl/11.js",
    "category": "Lighting",
    "count": 68,
    "types": 14,
    "from": null,
    "bytes": 61398
   },
   {
    "file": "data/parts/wrangler-jk-jl/12.js",
    "category": "Interior",
    "count": 22,
    "types": 11,
    "from": null,
    "bytes": 19115
   },
   {
    "file": "data/parts/wrangler-jk-jl/13.js",
    "category": "Filters & Fluids",
    "count": 69,
    "types": 25,
    "from": null,
    "bytes": 55722
   },
   {
    "file": "data/parts/wrangler-jk-jl/14.js",
    "category": "Exhaust & Intake",
    "count": 86,
    "types": 26,
    "from": null,
    "bytes": 74863
   }
  ],
  "count": 1674
 }
};
