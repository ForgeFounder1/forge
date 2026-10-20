/* Forge platform data: f150-2004-2014. Built by scripts/build_app_*.js, then scripts/expand/integrate.py (catalog meta, reference, gap-fill guides). Schema: app/DATA-FORMAT.md */
window.FORGE_PLATFORMS = window.FORGE_PLATFORMS || {};
window.FORGE_PLATFORMS["f150-2004-2014"] = {
 "schemaVersion": 1,
 "id": "f150-2004-2014",
 "name": "F-150",
 "title": "Ford F-150, 11th and 12th gen",
 "years": "2004–2014",
 "yearsNote": "11th gen (P221) 2004–08, excluding the 2004 Heritage; 12th gen (P415) 2009–14, including the 2010–14 SVT Raptor",
 "kind": "truck",
 "make": "Ford",
 "models": [
  "F-150 11th gen (P221) 2004–08: Regular Cab, SuperCab, SuperCrew",
  "F-150 12th gen (P415) 2009–14: Regular Cab, SuperCab, SuperCrew",
  "SVT Raptor 2010–14",
  "Special models: Harley-Davidson, King Ranch, FX2/FX4, Foose Edition, Saleen S331, Lariat Limited, Limited, Tremor"
 ],
 "tagline": "Two generations of Ford half-ton: 3V Tritons, then Coyote and EcoBoost.",
 "compiled": "2026-10-11",
 "pricesChecked": "2026-10-11",
 "conflicts": [
  {
   "topic": "Coyote spark-plug torque",
   "text": "The 2014 WSM 303-07C procedure says 14 N·m (124 lb-in). The 303-01C torque table in the same PDF says 15 N·m (133 lb-in). Both are Ford. Use 14–15 N·m and don't go over.",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "2014 WSM 5.0 sections PDF (factory doc, secondary host)",
     "url": "https://www.todomecanica.com/component/k2/download/8906_645a965db4708dc163ba0fe65252655d.html"
    }
   ]
  },
  {
   "topic": "Ford Performance phaser spec is for the 4.6 3V",
   "text": "Ford Performance sheet M-6550-3V (40 N·m + 90°) covers 4.6L 3V camshafts. It matches the 5.4 3V WSM figure, but it isn't the F-150 document.",
   "conf": "verified",
   "src": [
    {
     "label": "Ford Performance M-6550-3V sheet",
     "url": "https://performanceparts.ford.com/download/instructionsheets/fordinstshtm-6550-3v.pdf"
    }
   ]
  },
  {
   "topic": "\"5.4 dyno\" thread is a 10th gen",
   "text": "The f150online \"dyno'd the truck today\" thread is from March 2003, so that truck is a 2V 5.4, not a 3V. Kept in Owner tips only as context.",
   "conf": "forum",
   "src": [
    {
     "label": "f150online",
     "url": "https://www.f150online.com/forums/v8-engines/110664-dyno-d-truck-today.html"
    }
   ]
  },
  {
   "topic": "Wheel-nut torque units",
   "text": "Both sources say 150 lb-ft. The 2011 Owner's Guide gives the metric value as 200 N·m. The 2004 WSM table, as quoted on a forum, says 204 N·m. 150 lb-ft is about 203 N·m. Torque to 150 lb-ft.",
   "conf": [
    "verified-secondary",
    "forum"
   ],
   "disputed": true,
   "src": [
    {
     "label": "2011 Owner's Guide p.347",
     "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
    },
    {
     "label": "f150online (2004 WSM quote)",
     "url": "https://www.f150online.com/forums/suspension/452050-04-08-front-end-torque-specs-needed.html"
    }
   ]
  },
  {
   "topic": "Lower ball-joint nut differs by generation",
   "text": "2004 WSM (forum quote): 150 N·m (111 lb-ft). 2014 WSM 4WD: 175 N·m (129 lb-ft). These are different generations, so don't mix them.",
   "conf": [
    "verified-secondary",
    "forum"
   ],
   "src": [
    {
     "label": "f150online (2004 WSM quote)",
     "url": "https://www.f150online.com/forums/suspension/452050-04-08-front-end-torque-specs-needed.html"
    },
    {
     "label": "2014 WSM 204-01B PDF (factory doc, secondary host)",
     "url": "https://www.f150ecoboost.net/attachments/2011-2014-f150-work-shop-manual-204-01b-front-suspension-4wd-pdf.202244/"
    }
   ]
  },
  {
   "topic": "Spark-plug \"33 lb-ft\" is a removal figure",
   "text": "TSB 08-7-6 gives about 33 lb-ft (45 N·m) as the expected removal effort on the 3V. It is not an installation torque. The 2006 WSM install torque is 34 N·m (25 lb-ft), with no lube on the threads.",
   "conf": "verified",
   "src": [
    {
     "label": "TSB 08-7-6",
     "url": "https://www.fordservicecontent.com/Ford_Content/pubs/content/~WT/~MUS~LEN/3637/tsb08-07-06.htm"
    },
    {
     "label": "2006 WSM excerpt PDF (factory doc, secondary host)",
     "url": "https://qualityservicemanual.com/sites/default/files/Pages%20from%202006-F150-Mark-LT.pdf"
    }
   ]
  },
  {
   "topic": "TSB 08-7-6: warm or cold?",
   "text": "An older bulletin (06-5-9, per aa1car) said remove plugs warm. TSB 08-7-6 says remove them only at room temperature. RepairPal still prints \"warm\". Ford's newer bulletin wins: remove them cold.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "TSB 08-7-6",
     "url": "https://www.fordservicecontent.com/Ford_Content/pubs/content/~WT/~MUS~LEN/3637/tsb08-07-06.htm"
    },
    {
     "label": "aa1car spark plugs",
     "url": "https://www.aa1car.com/library/ford_broken_spark_plug_problem.htm"
    }
   ]
  },
  {
   "topic": "HDPP rear axle size",
   "text": "11th gen: resolved. The 2006 Owner's Guide lists a 10.25-inch axle (6.9 pt) next to the 8.8/9.75, which matches Wikipedia's 11th-gen HDPP \"10.25-inch rear axle\". 12th gen: still open. An f150forum owner says HDPP trucks use a 7-lug 9.75 with thicker tubes, and the 2009 and 2010 guides list only \"8.8/9.75\". That fits the owner's claim but doesn't prove it.",
   "conf": [
    "verified-secondary",
    "forum"
   ],
   "disputed": true,
   "src": [
    {
     "label": "Wikipedia, F-Series 11th gen",
     "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
    },
    {
     "label": "2006 Owner's Guide (factory doc, secondary host)",
     "url": "https://carmanual.org/OwnersManual/ford/2006_ford_f-150.pdf"
    },
    {
     "label": "f150forum rear end size",
     "url": "https://www.f150forum.com/f38/2013-f-150-rear-end-size-504945/"
    }
   ]
  },
  {
   "topic": "Which 12th-gen trucks got the 9.75 rear axle",
   "text": "Owners disagree. One poster says the 8.8 was standard and the 9.75 \"not the norm\". Another says the 9.75 was standard for the generation. A third says the 3.7 V6 got the 8.8 and every other engine (5.0, 3.5 EB, 6.2) got the 9.75. Check the cover shape: squarish = 8.8, wider on one side = 9.75.",
   "conf": "forum",
   "disputed": true,
   "src": [
    {
     "label": "f150forum rear end size",
     "url": "https://www.f150forum.com/f38/2013-f-150-rear-end-size-504945/"
    }
   ]
  },
  {
   "topic": "Grille interchange, 09–12 vs 13–14",
   "text": "One poster says all 2009–14 grilles interchange except the Raptor's. Another says the complete grille with shell swaps, but the inner inserts differ because the shell radius is different. Treat whole-assembly swaps as fine and insert-only swaps as not fitting.",
   "conf": "forum",
   "disputed": true,
   "src": [
    {
     "label": "f150forum grille interchange",
     "url": "https://www.f150forum.com/f2/grill-interchange-12-xlt-504392/"
    }
   ]
  },
  {
   "topic": "7-lug HDPP years (and pattern)",
   "text": "One owner says HDPP 7-lug was 2010–2014 only. Another says HDPP has been available since 2004. Wikipedia confirms 17\" seven-lug steel wheels on the 11th-gen HDPP, so 7-lug HDPP exists in both generations. checkfitment lists 2004–14 HDPP as 7x150, 87.1 mm, M14x2.0, but marks that row \"candidate\" (one source, not two).",
   "conf": [
    "forum",
    "verified-secondary"
   ],
   "disputed": true,
   "src": [
    {
     "label": "f150forum 7-lug wheels",
     "url": "https://www.f150forum.com/f38/7-lug-wheels-whats-whole-story-484189/"
    },
    {
     "label": "Wikipedia, F-Series 11th gen",
     "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
    },
    {
     "label": "checkfitment 7x150",
     "url": "https://checkfitment.com/bolt-pattern/7x150/"
    }
   ]
  },
  {
   "topic": "DJM 3/5 kit price",
   "text": "A search summary said $894.54. The DJM page shows $966.10. The page wins.",
   "conf": "verified",
   "src": [
    {
     "label": "DJM",
     "url": "https://djmsuspension.com/product/2004-2008-ford-f-150-2wd-3-inch-front-5-inch-rear-complete-lowering-kit-shocks-included/"
    }
   ]
  },
  {
   "topic": "SCT X4 price",
   "text": "A search summary said $399. AmericanTrucks shows $419.00 (11–14 5.0 page and the 97–08 page).",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "AmericanTrucks 11–14 5.0",
     "url": "https://www.americantrucks.com/sct-sf4-x4-power-flash-tuner-1114-50.html"
    },
    {
     "label": "AmericanTrucks 97–08",
     "url": "https://www.americantrucks.com/sct-sf4-x4-f150-tuner-9714.html"
    }
   ]
  },
  {
   "topic": "TruXedo TruXport 04–08 8 ft",
   "text": "A search summary said $359.99. The Stage 3 page shows $379.99.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "Stage 3",
     "url": "https://www.stage3motorsports.com/278601-04-08-f150-8ft-bed-truxedo-truxport-tonneau.html"
    }
   ]
  },
  {
   "topic": "Ranch Hand Summit part number",
   "text": "A search query used \"FSF091BL1\". The real part is FSF09HBL1. Two retailers show $1,744.95 and $1,867.95.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "truckbedcentral",
     "url": "https://truckbedcentral.com/products/ranch-hand-summit-front-bumper-for-2009-2014-ford-f-150-fsf09hbl1"
    },
    {
     "label": "bumperstock",
     "url": "https://bumperstock.com/products/ranch-hand-fsf09hbl1-ford-f150-2009-2014-summit-front-bumper"
    }
   ]
  },
  {
   "topic": "K&N part numbers",
   "text": "K&N 63-2581 is a 2011–13 5.0 part, not a fit for 04–08. The 04–08 5.4 part is 57-2556.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "Apocalypse Performance",
     "url": "https://apocalypseperformance.com/k-n-04-ford-f150-v8-5-4l-performance-intake-kit-57-2556/"
    }
   ]
  },
  {
   "topic": "Bilstein 24-186735",
   "text": "This is a GM front 5100 shock, not an F-150 part. Search results mixed it in; it's excluded here.",
   "conf": "unconfirmed",
   "src": []
  },
  {
   "topic": "5.4 3V plug gap",
   "text": "The 2007 Owner Guide prints 0.040-0.050 in; the 2010 Owner Guide prints 0.039-0.043 in. Both are Ford. The 3V gap is not adjustable, so use the plug as supplied.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2007 F-150 Owner Guide (carmanual.org)",
     "url": "https://carmanual.org/OwnersManual/ford/2007_ford_f-150.pdf"
    }
   ]
  },
  {
   "topic": "Belt tensioner bolt (2011-14)",
   "text": "WSM 414-00 lists 48 N·m (35 lb-ft) for all engines; WSM 303-05 lists 25 N·m (18 lb-ft) on the 3.5/3.7/6.2 and 47 N·m (35 lb-ft) on the 5.0. 303-05 is the belt's own, engine-specific section: use it, and treat 414-00's value as the 5.0 figure.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2014 WSM 303-05/303-06 Accessory Drive and Starting",
     "url": "https://www.f150ecoboost.net/attachments/2011-2014-f150-workshop-manual-accessory-drive-chapter-303-05-pdf.195767/"
    },
    {
     "label": "2014 WSM 414-00 Charging System",
     "url": "https://www.f150ecoboost.net/attachments/2011-2014-work-shop-manual-414-00-charging-system-alternator-generator-pdf.199878/"
    }
   ]
  },
  {
   "topic": "Brake fluid name (2014)",
   "text": "The Owner Guide says DOT 4 LV; the WSM says DOT 3 or WSS-M6C65-A1 (the DOT 4 LV spec). Compatible; prefer DOT 4 LV.",
   "conf": "verified",
   "src": [
    {
     "label": "2014 F-150 Owner Guide (carmanual.org)",
     "url": "https://carmanual.org/OwnersManual/ford/2014_ford_f-150.pdf"
    },
    {
     "label": "2014 WSM 206-00 Brake System General Information",
     "url": "https://www.f150ecoboost.net/attachments/brake-system-%E2%80%93-general-information-pdf.194078/"
    }
   ]
  },
  {
   "topic": "Recall 24V-444 number",
   "text": "Recall 24V-444 is Ford 24S37; a search summary that called it 24S36 is wrong.",
   "conf": "verified",
   "src": [
    {
     "label": "Ford 24S37 recall page",
     "url": "https://www.ford.com/support/how-tos/recall/recalls-and-faqs/24s37-f-150-2014-transmission-sudden-downshift-recall/"
    },
    {
     "label": "NHTSA 24V-444 Part 573",
     "url": "https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V444-2781.PDF"
    }
   ]
  }
 ],
 "overview": {
  "facts": [
   {
    "label": "Coverage",
    "text": "11th gen (P221) MY2004–2008, excluding the 2004 \"Heritage\" (a 10th-gen carryover). 12th gen (P415) MY2009–2014, including the 2010–14 SVT Raptor. Super Duty (F-250 and up) is a separate platform.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     },
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     }
    ]
   },
   {
    "label": "11th gen build dates",
    "text": "MY2004–2008, built June 2003 to July 2008.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     }
    ]
   },
   {
    "label": "11th gen cabs",
    "text": "Regular cab: 2+2, with rear-hinged access panels. SuperCab: 2+2, roll-down rear windows. SuperCrew: 4-door.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     }
    ]
   },
   {
    "label": "11th gen firsts and lasts",
    "text": "Last F-150 offered with a manual transmission (M5OD-R2, 4.2 V6 only). Last F-150 with a Flareside bed option.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     }
    ]
   },
   {
    "label": "11th gen wheelbases",
    "text": "126\": RC 6.5'. 133\": SC 5.5'. 139\": SCrew 5.5'. 145\": SC 6.5' and RC 8'. 151\": SCrew 6.5'. 163\": SC 8'.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     }
    ]
   },
   {
    "label": "11th gen trims",
    "text": "XL, STX, XLT, FX4 and Lariat. Also King Ranch, Harley-Davidson (2006+) and FX2 Sport (2007). Special models: 60th Anniversary (2008), Foose Edition (2008, Roush supercharged 5.4, 450 hp / 500 lb-ft) and Saleen S331.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     }
    ]
   },
   {
    "label": "11th gen HDPP",
    "text": "5.4 with the 8' bed only. LT245/70R17D tires on 17\" 7-lug steel wheels. \"10.25-inch\" rear axle with 4.10 gears. 8,200-lb GVWR.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     }
    ]
   },
   {
    "label": "12th gen build dates",
    "text": "MY2009–2014, built October 2008 to December 2014. T1 platform. Automatic transmission only. The 2009 Flareside used leftover 11th-gen boxes.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     }
    ]
   },
   {
    "label": "12th gen wheelbases",
    "text": "125.8–125.9\": RC 6.5'. 132.8\": SC 5.5', 2009 only. 144.4–144.5\": RC 8', SC 6.5' and SCrew 5.5'. 156.5–156.6\": SCrew 6.5'. 163.1–163.2\": SC 8'.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     }
    ]
   },
   {
    "label": "12th gen trims",
    "text": "XL, STX, XLT, FX2, FX4, Lariat, King Ranch and Platinum. Limited models: Harley-Davidson, Lariat Limited (2011, about 3,700 built) and Limited (2013–14). SVT Raptor (2010+). Tremor (2014).",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     }
    ]
   }
  ],
  "engines": {
   "columns": [
    "Engine",
    "Years",
    "HP",
    "Torque",
    "Notes"
   ],
   "rows": [
    [
     "4.2 Essex OHV V6",
     "2005–08",
     "210 @ 4350",
     "260 @ 3750",
     "RC 4x2 only. Last gas pushrod V6 in a Ford"
    ],
    [
     "4.6 2V Triton V8",
     "2004–06",
     "231 @ 4750",
     "293 @ 3500",
     "4R70E"
    ],
    [
     "4.6 2V V8",
     "2007–08",
     "248 @ 4750",
     "294 @ 4000",
     ""
    ],
    [
     "5.4 3V Triton V8",
     "2004–08",
     "300 @ 5000",
     "365 @ 3750",
     "4R75E. Flex-fuel from 2006"
    ],
    [
     "4.6 2V V8",
     "2009–10",
     "248",
     "n/s",
     "4R75E 4-speed"
    ],
    [
     "4.6 3V V8",
     "2009–10",
     "292",
     "n/s",
     "6R80"
    ],
    [
     "5.4 3V V8",
     "2009–10",
     "310 @ 5000 (320 on E85)",
     "365 @ 3500 (395 on E85)",
     "6R80. Also the 2010 Raptor"
    ],
    [
     "3.7 Ti-VCT V6",
     "2011–14",
     "302 @ 6500",
     "278 @ 4000",
     ""
    ],
    [
     "5.0 Coyote 4V V8",
     "2011–14",
     "360 @ 5500",
     "380 @ 4250",
     ""
    ],
    [
     "3.5 EcoBoost TT V6 (GTDI)",
     "2011–14",
     "365 @ 5000",
     "420 @ 2500",
     ""
    ],
    [
     "6.2 Boss SOHC 2V V8",
     "2010–14",
     "411 @ 5500",
     "434 @ 4500",
     "No EPAS (hydraulic steering)"
    ]
   ],
   "conf": "verified-secondary",
   "src": [
    {
     "label": "Wikipedia, F-Series 11th gen",
     "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
    },
    {
     "label": "Wikipedia, F-Series 12th gen",
     "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
    }
   ],
   "note": "n/s = not stated in the source."
  },
  "transmissions": [
   {
    "label": "11th gen",
    "text": "4R70E behind the 4.6, 4R75E behind the 5.4, M5OD-R2 5-speed manual with the 4.2 only.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     }
    ]
   },
   {
    "label": "2009–10",
    "text": "4R75E with the 4.6 2V; 6R80 with the 4.6 3V and 5.4.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     }
    ]
   },
   {
    "label": "2011–14",
    "text": "6R80 with every engine.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     }
    ]
   },
   {
    "label": "6R80 fluid (2011)",
    "text": "Mercon LV, 13.1 qt (12.4 L) for the 5.0, 6.2 and 3.5 EB. The 3.7 figure is 12.1 qt (11.7 L).",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "2011 Owner's Guide (factory doc, secondary host)",
      "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
     }
    ]
   },
   {
    "label": "Transfer case (2011)",
    "text": "Motorcraft XL-12, 1.6 qt (1.5 L).",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "2011 Owner's Guide (factory doc, secondary host)",
      "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
     }
    ]
   }
  ],
  "axles": {
   "columns": [
    "Years",
    "Engine",
    "Rear ratios listed"
   ],
   "rows": [
    [
     "2006 and 2008",
     "4.2 V6",
     "3.31 / 3.55 / 3.73"
    ],
    [
     "2006 and 2008",
     "4.6",
     "3.55 / 3.73"
    ],
    [
     "2006 and 2008",
     "5.4",
     "3.55 / 3.73 / 4.10"
    ],
    [
     "2009",
     "4.6 2V",
     "3.31 / 3.55 / 3.73"
    ],
    [
     "2010",
     "4.6 2V",
     "3.15 / 3.31 / 3.55 / 3.73"
    ],
    [
     "2009–10",
     "4.6 3V",
     "3.15 / 3.31 / 3.55 / 3.73"
    ],
    [
     "2009–10",
     "5.4",
     "3.15 / 3.55 / 3.73"
    ],
    [
     "2011",
     "3.7",
     "3.55 / 3.73"
    ],
    [
     "2011",
     "5.0",
     "3.31 / 3.55 / 3.73"
    ],
    [
     "2011",
     "3.5 EB",
     "3.15 / 3.31 / 3.55 / 3.73 (3.73 tied to HDPP or Max Trailer Tow)"
    ],
    [
     "2014 Tremor",
     "3.5 EB",
     "4.10"
    ],
    [
     "11th-gen HDPP",
     "5.4",
     "4.10, optional limited slip"
    ]
   ],
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2006 Owner's Guide (factory doc, secondary host)",
     "url": "https://carmanual.org/OwnersManual/ford/2006_ford_f-150.pdf"
    },
    {
     "label": "2008 Owner's Guide (factory doc, secondary host)",
     "url": "https://carmanual.org/OwnersManual/ford/2008_ford_f-150.pdf"
    },
    {
     "label": "2009 Owner's Guide (factory doc, secondary host)",
     "url": "https://carmanual.org/OwnersManual/ford/2009_ford_f-150.pdf"
    },
    {
     "label": "2010 Owner's Guide (factory doc, secondary host)",
     "url": "https://carmanual.org/OwnersManual/ford/2010_ford_f-150.pdf"
    },
    {
     "label": "2011 Owner's Guide (factory doc, secondary host)",
     "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
    },
    {
     "label": "Wikipedia, F-Series 11th gen",
     "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
    },
    {
     "label": "Wikipedia, F-Series 12th gen",
     "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
    }
   ],
   "note": "From each owner's guide towing tables (parsed from PDF text). A table cell isn't always aligned with its engine in the extraction, so check the guide page before relying on a single cell. 2004, 2005 and 2007 guides weren't opened. Front-differential identification and locker/axle codes are Unknown."
  },
  "axleNotes": [
   {
    "label": "8.8 vs 9.75 ring gear",
    "text": "Forum-reported only; owners disagree on which 12th-gen trucks got the 9.75 (see Read first). Squarish cover = 8.8, wider on one side = 9.75.",
    "conf": "forum",
    "disputed": true,
    "src": [
     {
      "label": "f150forum rear end size",
      "url": "https://www.f150forum.com/f38/2013-f-150-rear-end-size-504945/"
     }
    ]
   },
   {
    "label": "2011 max trailer examples",
    "text": "RC 2WD 145\" with the 3.5 EB HDPP on 3.73: 11,300 lb. RC 2WD 126\" with the 3.7 on 3.55: 5,500 lb.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "2011 Owner's Guide (factory doc, secondary host)",
      "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
     }
    ]
   },
   {
    "label": "2011 axle fluids",
    "text": "Front axle (4x4): 80W-90, 3.5 pt (1.8 L). Rear axle: 75W-140 synthetic, 5.5 pt (2.6 L); the guide footnotes this and the footnote text wasn't extracted.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "2011 Owner's Guide (factory doc, secondary host)",
      "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
     }
    ]
   },
   {
    "label": "2011 fuel tank",
    "text": "26.0 gal: RC 6.5' and SC 5.5'. 26 gal std / 36 gal optional on the SCrew 5.5' (the guide's layout is ambiguous). 36 gal: SCrew 6.5'.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "2011 Owner's Guide (factory doc, secondary host)",
      "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
     }
    ]
   }
  ],
  "yearChanges": [
   {
    "year": "2004",
    "text": "11th gen (P221) launches; built from June 2003. The 2004 \"Heritage\" is a 10th-gen carryover and not covered.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     }
    ]
   },
   {
    "year": "2005",
    "text": "4.2 Essex V6 (RC 4x2 only).",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     }
    ]
   },
   {
    "year": "2006",
    "text": "Flex-fuel 5.4. SuperCrew 6.5' box option. Refreshed front bumper with round fogs. 20\" wheels for FX4, Lariat and King Ranch. First optional navigation. Harley-Davidson trim.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     }
    ]
   },
   {
    "year": "2007",
    "text": "4.6 2V rating rises to 248 hp. FX2 Sport. TPMS standard per a Ford-wide source.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     },
     {
      "label": "Brake & Front End",
      "url": "https://www.brakeandfrontend.com/ford-tpms-relearn-training-procedures/"
     }
    ]
   },
   {
    "year": "2008",
    "text": "60th Anniversary and Foose Edition. Last year of the 11th gen (built to July 2008).",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 11th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
     }
    ]
   },
   {
    "year": "2009",
    "text": "12th gen (P415) on the T1 platform, automatic only. 6R80 with the 4.6 3V and 5.4. Flareside uses leftover 11th-gen boxes. SC 5.5' (132.8\") this year only.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     }
    ]
   },
   {
    "year": "2010",
    "text": "SVT Raptor launched. FX4 goes to 18\" wheels standard. MyKey added. 6.2 Boss arrives. Coolant changes to Orange.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     },
     {
      "label": "2010 Owner's Guide (factory doc, secondary host)",
      "url": "https://carmanual.org/OwnersManual/ford/2010_ford_f-150.pdf"
     }
    ]
   },
   {
    "year": "2011",
    "text": "New engines (3.7, 5.0, 3.5 EcoBoost, 6.2) and the 6R80 across the lineup. Electric power steering on every engine except the 6.2. New cluster with an optional 4.2\" productivity screen.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     }
    ]
   },
   {
    "year": "2012",
    "text": "HDPP available on the SCrew 6.5'.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     }
    ]
   },
   {
    "year": "2013",
    "text": "Super Duty-style grille. MyFord Touch. HID headlamps available. Super Duty power-telescoping tow mirrors. 6.2 opened up to XLT, FX2 and FX4.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     }
    ]
   },
   {
    "year": "2014",
    "text": "Tremor (RC 6.5' EcoBoost, 4.10 axle). STX available on the SCrew 5.5'. Last 12th gen (built to December 2014).",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, F-Series 12th gen",
      "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(twelfth_generation)"
     }
    ]
   }
  ],
  "mpg": {
   "columns": [
    "Truck",
    "Owner-reported MPG"
   ],
   "rows": [
    [
     "2012 5.0 4x2 SuperCrew",
     "17 city / 21 hwy; 9 mpg towing a 7,000 lb travel trailer"
    ],
    [
     "2011 5.0 4x2 SuperCrew, 3.55",
     "16.5–17 city, 21.6 at 75 mph"
    ],
    [
     "2013 EB FX4, 3.55, towing 5,000 lb",
     "7.4–12.2 mpg"
    ],
    [
     "'06 5.4 vs '14 5.0, same commute",
     "13 vs about 18"
    ],
    [
     "15-mile test at 80 mph into a headwind (computer)",
     "EB 14.4, 5.0 15.4, tuned '10 5.4 14.6"
    ],
    [
     "2010 Raptor (5.4) after TSB 10-12-4 reflash",
     "18.1 at 70 mph"
    ],
    [
     "Tuned 3.5 EB (several owners)",
     "Stock about 15; 87 LET tune 17–19; 91 LET tune 19–23 (one owner). Another lost about 1 mpg on a 93 tune (16.3–16.8 to 15–15.5). Another: \"No change. Still averaging 13.6 with 285 BFG KO.\""
    ]
   ],
   "conf": "forum",
   "src": [
    {
     "label": "ford-trucks.com 5.0 vs EcoBoost",
     "url": "https://www.ford-trucks.com/forums/1288290-5-0-vs-ecoboost-consumer-comparison.html"
    },
    {
     "label": "f150forum 5.4 vs 5.0 vs EB",
     "url": "https://www.f150forum.com/f38/my-5-4-vs-2014-5-0-vs-2014-ecoboost-test-drive-280242/"
    },
    {
     "label": "raptorforumz TSB 10-12-4",
     "url": "https://www.raptorforumz.com/threads/tsb-10-12-4-5-4l-3v-and-6r80-transmission-delalyed-harsh-downshift-above-40-mph.7484/"
    },
    {
     "label": "f150ecoboost tuned MPG",
     "url": "https://www.f150ecoboost.net/threads/tuned-guys-and-mpgs.8752/"
    }
   ],
   "disputedRows": [
    6
   ],
   "note": "Owners agree the EB is the most sensitive to wind and cold. Owners disagree on whether tunes improve MPG. Fuelly aggregates not captured (site blocked)."
  },
  "extraTables": [
   {
    "title": "2011 engine specs and fluids (Owner's Guide)",
    "table": {
     "columns": [
      "2011 spec",
      "3.7",
      "5.0",
      "6.2",
      "3.5 EB"
     ],
     "rows": [
      [
       "Firing order",
       "1-4-2-5-3-6",
       "1-5-4-8-6-3-7-2",
       "1-3-7-2-6-5-4-8",
       "1-4-2-5-3-6"
      ],
      [
       "Plug gap",
       ".052–.056 in",
       ".041–.047 in",
       ".039–.043 in",
       ".033–.037 in"
      ],
      [
       "Compression",
       "10.3:1",
       "10.5:1",
       "9.8:1",
       "10.0:1"
      ],
      [
       "Fuel",
       "87 or E85",
       "87 or E85",
       "87 min",
       "87 min"
      ],
      [
       "Engine oil",
       "6.0 qt, 5W-20",
       "7.7 qt, 5W-20",
       "7.0 qt, 5W-20",
       "6.0 qt, 5W-30"
      ],
      [
       "Coolant (Motorcraft Orange)",
       "16.0 qt",
       "17.0 qt",
       "19.5 qt",
       "16.5 qt"
      ]
     ],
     "conf": "verified-secondary",
     "src": [
      {
       "label": "2011 Owner's Guide (factory doc, secondary host)",
       "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
      }
     ]
    }
   },
   {
    "title": "Fluids, 2004–10 (Owner's Guides)",
    "table": {
     "columns": [
      "Item",
      "2006",
      "2008",
      "2009–10"
     ],
     "rows": [
      [
       "Oil, 4.2 V6",
       "6.0 qt",
       "6.0 qt",
       "n/a"
      ],
      [
       "Oil, 4.6",
       "6.0 qt",
       "6.0 qt",
       "6.0 qt"
      ],
      [
       "Oil, 5.4",
       "7.0 qt",
       "7.0 qt",
       "7.0 qt"
      ],
      [
       "Coolant, 4.2",
       "17.6 qt",
       "17.6 qt",
       "n/a"
      ],
      [
       "Coolant, 4.6",
       "20.5 qt",
       "20.5 qt",
       "2V: 16.4 qt; 3V: 15.8 qt*"
      ],
      [
       "Coolant, 5.4",
       "20.9 qt",
       "20.9 qt",
       "16.9 qt*"
      ],
      [
       "Coolant type",
       "Premium Gold (yellow)",
       "Premium Gold (yellow)",
       "2009: Gold (yellow); 2010: Orange"
      ],
      [
       "Transfer case (4x4)",
       "2.0 qt",
       "2.0 qt",
       "1.6 qt"
      ],
      [
       "5-speed manual",
       "3.75 qt",
       "3.75 qt",
       "n/a"
      ],
      [
       "Automatic",
       "13.9 qt (4R70E)",
       "13.9 qt (4R75E)",
       "13.9 qt"
      ],
      [
       "Front axle (4x4)",
       "3.7 pt",
       "n/c",
       "3.5 pt"
      ],
      [
       "Rear axle, 8.8/9.75",
       "5.5 pt",
       "n/c",
       "5.5 pt"
      ],
      [
       "Rear axle, 10.25",
       "6.9 pt",
       "n/c",
       "not listed"
      ]
     ],
     "conf": "verified-secondary",
     "src": [
      {
       "label": "2006 Owner's Guide (factory doc, secondary host)",
       "url": "https://carmanual.org/OwnersManual/ford/2006_ford_f-150.pdf"
      },
      {
       "label": "2008 Owner's Guide (factory doc, secondary host)",
       "url": "https://carmanual.org/OwnersManual/ford/2008_ford_f-150.pdf"
      },
      {
       "label": "2009 Owner's Guide (factory doc, secondary host)",
       "url": "https://carmanual.org/OwnersManual/ford/2009_ford_f-150.pdf"
      },
      {
       "label": "2010 Owner's Guide (factory doc, secondary host)",
       "url": "https://carmanual.org/OwnersManual/ford/2010_ford_f-150.pdf"
      }
     ],
     "disputedRows": [
      4,
      5
     ],
     "note": "* The 2009–10 coolant rows are laid out with the number above the label in the PDF text; each number was read as belonging to the label below it. Confirm on the page. n/c = not captured. Spark-plug gap, 2010: 4.6 2V 0.052–0.056 in; 4.6 3V and 5.4 0.039–0.043 in."
    }
   }
  ]
 },
 "wheels": {
  "specs": {
   "columns": [
    "Spec",
    "2004–2014 (6-lug)",
    "HDPP (7-lug)"
   ],
   "rows": [
    [
     "Bolt pattern",
     "6x135 (5x135 for 1997–2003)",
     "7x150 (7x5.91\") for 2004–14 HDPP (checkfitment, marked \"candidate\")"
    ],
    [
     "Hub bore",
     "87.1 mm",
     "87.1 mm (checkfitment)"
    ],
    [
     "Lug thread",
     "M14x2.0, 60° conical seat",
     "M14x2.0 (checkfitment)"
    ],
    [
     "Lug torque",
     "150 lb-ft; re-torque within 100 miles of any wheel removal (2011 OG). Metric: 200 N·m (2011 OG) vs 204 N·m (2004 WSM forum quote)",
     "150 lb-ft (checkfitment)"
    ],
    [
     "Factory offset",
     "+44 mm (OE 17/18/20/22)",
     "n/a"
    ],
    [
     "Raptor offset",
     "32–36 mm range on wheel-size's Raptor entry",
     "n/a"
    ],
    [
     "Hub-centric rings",
     "Needed when the aftermarket bore is larger than 87.1 mm",
     "n/a"
    ]
   ],
   "conf": "verified-secondary",
   "src": [
    {
     "label": "boltpatternhq",
     "url": "https://boltpatternhq.com/ford/f150-regular-cab/2014/"
    },
    {
     "label": "2011 Owner's Guide (factory doc, secondary host)",
     "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
    },
    {
     "label": "wheel-size 2006",
     "url": "https://www.wheel-size.com/size/ford/f-150/2006/"
    },
    {
     "label": "wheel-size 2012",
     "url": "https://www.wheel-size.com/size/ford/f-150/2012/"
    },
    {
     "label": "checkfitment 7x150",
     "url": "https://checkfitment.com/bolt-pattern/7x150/"
    },
    {
     "label": "f150online (2004 WSM quote)",
     "url": "https://www.f150online.com/forums/suspension/452050-04-08-front-end-torque-specs-needed.html"
    }
   ],
   "disputedRows": [
    0,
    3
   ]
  },
  "stock": {
   "columns": [
    "Years",
    "Wheel",
    "Tire",
    "Confidence"
   ],
   "rows": [
    [
     "2004–08",
     "7.5x17 ET44",
     "235/70R17, 235/75R17, 255/65R17 or 255/70R17",
     "verified-secondary"
    ],
    [
     "2004–08",
     "7.5x18 ET44",
     "265/60R18, 275/65R18 or LT275/65R18",
     "verified-secondary"
    ],
    [
     "2004–08",
     "8.5x20 ET44",
     "275/55R20",
     "verified-secondary"
    ],
    [
     "2004–08",
     "9x22 ET44",
     "275/45R22",
     "verified-secondary"
    ],
    [
     "2004–08 HD",
     "7-lug",
     "18.5 kg tire (as listed)",
     "verified-secondary"
    ],
    [
     "11th-gen HDPP",
     "17\" 7-lug steel",
     "LT245/70R17D",
     "verified-secondary"
    ],
    [
     "2011–14",
     "17\"",
     "255/70R17 112S; also 235/70R17, 235/75R17, 255/65R17, 265/70R17",
     "verified-secondary"
    ],
    [
     "2011–14",
     "18\"",
     "255/65R18, 265/60R18, 275/65R18",
     "verified-secondary"
    ],
    [
     "2011–14",
     "8.5x20",
     "275/55R20",
     "verified-secondary"
    ],
    [
     "2011–14",
     "9x22",
     "275/45R22",
     "verified-secondary"
    ],
    [
     "2011–14 HD",
     "n/a",
     "LT245/75R17 at 55 psi front / 59 psi rear",
     "verified-secondary"
    ],
    [
     "2011 OG no-chains list",
     "n/a",
     "P265/60R18, P275/65R18, LT275/70R17, LT275/65R18, LT315/70R17 (Raptor), P275/55R20, P275/45R22",
     "verified-secondary"
    ],
    [
     "HDPP owner report",
     "stock 7-lug",
     "275/70R17 largest seen; 285s \"barely fit the rims\" but rub the front wheel well",
     "forum"
    ]
   ],
   "src": [
    {
     "label": "wheel-size 2006",
     "url": "https://www.wheel-size.com/size/ford/f-150/2006/"
    },
    {
     "label": "wheel-size 2012",
     "url": "https://www.wheel-size.com/size/ford/f-150/2012/"
    },
    {
     "label": "2011 Owner's Guide (factory doc, secondary host)",
     "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
    },
    {
     "label": "Wikipedia, F-Series 11th gen",
     "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(eleventh_generation)"
    },
    {
     "label": "f150forum 7-lug wheels",
     "url": "https://www.f150forum.com/f38/7-lug-wheels-whats-whole-story-484189/"
    }
   ],
   "note": "Owners say 7-lug wheels and spacers are hard to find."
  },
  "stances": [
   {
    "id": "leveled",
    "title": "Leveled",
    "subtitle": "Rough Country 568 (2009–13, 2\" aluminum spacer, \"up to 33-inch\")",
    "conf": "verified",
    "src": [
     {
      "label": "Rough Country 568",
      "url": "https://www.roughcountry.com/product/configurable/ford-leveling-lift-kit-568c"
     }
    ],
    "note": "Rough Country per-kit table. Blank result = no trimming listed (\"Stance 1.0\"). RC 568/570 are strut-top spacers, \"no strut disassembly required\". No Raptor or HDPP.",
    "rows": [
     {
      "wheel": "Factory 17",
      "tire": "285/75R17",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "Factory 18",
      "tire": "285/70R18",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "Factory 20",
      "tire": "295/60R20",
      "fit": "With a 0.25\" spacer",
      "conf": "verified"
     },
     {
      "wheel": "17x8.5 +0/+1",
      "tire": "285/70R17, 295/70R17, 33x12.50R17",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "17x9 -12/+0/+18/+20",
      "tire": "285/70R17, 295/70R17, 305/70R17, 315/70R17, 33x12.50R17",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "18x9 -12",
      "tire": "33x12.50R18",
      "fit": "Trimming required",
      "conf": "verified"
     },
     {
      "wheel": "20x9 -12 to +20",
      "tire": "285/55R20, 305/55R20, 33x12.50R20",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x9 (all offsets)",
      "tire": "295/60R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x10 -18 to -25",
      "tire": "285/55R20, 305/55R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x10",
      "tire": "33x12.50R20",
      "fit": "Trimming required",
      "conf": "verified"
     },
     {
      "wheel": "22x10 -18/-19",
      "tire": "295/55R22, 305/45R22",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "22x10",
      "tire": "33x12.50R22",
      "fit": "Trimming required",
      "conf": "verified"
     },
     {
      "wheel": "Owner: 2013 FX4 leveled",
      "tire": "35\" Toyos",
      "fit": "Thread doesn't say whether it rubs",
      "conf": "forum",
      "src": [
       {
        "label": "f150ecoboost tuned MPG",
        "url": "https://www.f150ecoboost.net/threads/tuned-guys-and-mpgs.8752/"
       }
      ]
     }
    ]
   },
   {
    "id": "leveled-0408",
    "title": "Leveled 04–08",
    "subtitle": "Rough Country 570 (2004–08, 2.5\"); not the 2004 Heritage or HDPP",
    "conf": "verified",
    "src": [
     {
      "label": "Rough Country 570",
      "url": "https://www.roughcountry.com/product/ford-leveling-lift-kit-570"
     }
    ],
    "note": "Rough Country per-kit table.",
    "rows": [
     {
      "wheel": "Factory 17",
      "tire": "315/70R17",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "Factory 18",
      "tire": "295/70R18",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "Factory 20",
      "tire": "295/65R20",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "17x9 -12 to +1",
      "tire": "33x12.50R17, 305/70R17, 315/70R17",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x9 -12",
      "tire": "35x11.50R20",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x10 -18 to -25",
      "tire": "285/55R20, 305/55R20, 33x12.50R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "22x10",
      "tire": "33x12.50R22",
      "fit": "Minor trimming",
      "conf": "verified"
     }
    ]
   },
   {
    "id": "lift-2-3",
    "title": "Lifted 2–3\"",
    "subtitle": "09–14",
    "conf": "unknown",
    "note": "No 2–3\" lift table found for 09–14. The leveling tables are the nearest data.",
    "rows": []
   },
   {
    "id": "lift-4",
    "title": "Lifted 4\"",
    "subtitle": "Rough Country 54720 (2004–08 4WD), $1,099.95",
    "conf": "verified",
    "disputed": true,
    "src": [
     {
      "label": "Rough Country 54720",
      "url": "https://www.roughcountry.com/product/ford-suspension-lift-kit-577-20"
     }
    ],
    "note": "Minor cutting and drilling. Doesn't fit HDPP (7-lug) or the 2004 Heritage. Its page description mentions \"6-inch\" and \"up to 35-inch tires\", which contradicts the title.",
    "rows": [
     {
      "wheel": "18x9 +0",
      "tire": "33x12.50R18",
      "fit": "\"Popular\"",
      "conf": "verified"
     },
     {
      "wheel": "20x9 +0",
      "tire": "33x12.50R20",
      "fit": "\"Popular\"",
      "conf": "verified"
     },
     {
      "wheel": "18x8.5 / 18x9 (-12 to +1)",
      "tire": "275/65R18, 285/65R18, 305/60R18, 33x12.50R18",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x9 (-12 to +1)",
      "tire": "285/55R20, 305/55R20, 33x12.50R20",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x10 (-18 to -25)",
      "tire": "285/55R20, 305/55R20, 33x12.50R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x12 -44",
      "tire": "305/55R20, 33x12.50R20",
      "fit": "Trimming required",
      "conf": "verified"
     },
     {
      "wheel": "22x10 (-18/-19)",
      "tire": "305/45R22 (none); 33x12.50R22 (minor trimming)",
      "fit": "As listed",
      "conf": "verified"
     },
     {
      "wheel": "22x12 -44",
      "tire": "305/45R22; 33x12.50R22 (trimming required)",
      "fit": "As listed",
      "conf": "verified"
     }
    ]
   },
   {
    "id": "lift-6",
    "title": "Lifted 6\"",
    "subtitle": "Rough Country 57530 (2011–13 4WD), \"up to 35-inch\"",
    "conf": "verified",
    "src": [
     {
      "label": "Rough Country 6in 57530",
      "url": "https://www.roughcountry.com/product/configurable/ford-suspension-lift-kit-558c"
     }
    ],
    "note": "Minor cutting and drilling. No HDPP or Raptor. From $1,199.95 (N3 struts $1,549.95; Vertex $3,249.95).",
    "rows": [
     {
      "wheel": "18x9 +0",
      "tire": "35x12.50R18",
      "fit": "\"Popular\"",
      "conf": "verified"
     },
     {
      "wheel": "20x9 +0",
      "tire": "35x12.50R20",
      "fit": "\"Popular\"",
      "conf": "verified"
     },
     {
      "wheel": "18x8.5 / 18x9 / 18x10 (-25 to +1)",
      "tire": "35x12.50R18, 295/70R18",
      "fit": "No trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x10 -18 to -25",
      "tire": "35x12.50R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x12 -44",
      "tire": "35x12.50R20",
      "fit": "Trimming required",
      "conf": "verified"
     },
     {
      "wheel": "22x10",
      "tire": "35x12.50R22",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "22x10",
      "tire": "285/55R22",
      "fit": "No trimming",
      "conf": "verified"
     }
    ]
   },
   {
    "id": "lowered",
    "title": "Lowered",
    "subtitle": "Owner reports",
    "conf": "forum",
    "note": "Kits: Belltech 981 (2–3\" F / 4\" R) and 979 (2–3\" F / 5.5\" R) for 09–13 2WD extended/quad cab short bed; DJM 3/5 for 04–08 2WD; Trekline 4/6 V8 for 04–08 2WD. No 09–14 4/6 kit found. 4WD lowering fitment is Unknown. A search summary said the Trekline kit requires 20\" wheels; that was not seen on the page.",
    "rows": [
     {
      "drop": "2/4 (Belltech)",
      "truck": "2010 SuperCrew",
      "wheel": "n/s",
      "tire": "285/45R22 (about 32.1\")",
      "fit": "Running it; no complaints stated",
      "conf": "forum",
      "src": [
       {
        "label": "f150forum 2/4 drop tire size",
        "url": "https://www.f150forum.com/f38/tire-size-2-4-drop-213284/"
       }
      ]
     },
     {
      "drop": "2/4 (McGaughys)",
      "truck": "2010 SuperCrew",
      "wheel": "Stock 17s",
      "tire": "255/65R17",
      "fit": "\"Looks fine\"",
      "conf": "forum",
      "src": [
       {
        "label": "f150forum 2/4 drop tire size",
        "url": "https://www.f150forum.com/f38/tire-size-2-4-drop-213284/"
       }
      ]
     },
     {
      "drop": "3.5/5",
      "truck": "regular cab short box",
      "wheel": "n/s",
      "tire": "265/40R22",
      "fit": "\"Same diameter as stock\" (poster's claim)",
      "conf": "forum",
      "src": [
       {
        "label": "f150forum 2/4 drop tire size",
        "url": "https://www.f150forum.com/f38/tire-size-2-4-drop-213284/"
       }
      ]
     },
     {
      "drop": "2/4 advice",
      "truck": "",
      "wheel": "n/s",
      "tire": "275/70R17 (about 32.2\")",
      "fit": "\"A factory diameter that will run with no problems\"",
      "conf": "forum",
      "src": [
       {
        "label": "f150forum 2/4 drop tire size",
        "url": "https://www.f150forum.com/f38/tire-size-2-4-drop-213284/"
       }
      ]
     },
     {
      "drop": "3/5 (Belltech)",
      "truck": "2010",
      "wheel": "22x9 +42",
      "tire": "305/40R22",
      "fit": "Will have to roll the rear fenders to tuck; thinks a 295 would clear; a 275 tucks \"with room to spare\". \"22x9 and you need at least a +42 offset.\" Factory HD wheel is +44 (reply)",
      "conf": "forum",
      "src": [
       {
        "label": "f150online 22x9 lowered",
        "url": "https://www.f150online.com/forums/wheels-tires-brakes/459892-22x9-22x9-5-lowered-10-a.html"
       }
      ]
     },
     {
      "drop": "2.5/5",
      "truck": "2010",
      "wheel": "22x9.5 +30",
      "tire": "305/40R22",
      "fit": "\"Stuck out a bit\"",
      "conf": "forum",
      "src": [
       {
        "label": "f150online 22x9 lowered",
        "url": "https://www.f150online.com/forums/wheels-tires-brakes/459892-22x9-22x9-5-lowered-10-a.html"
       }
      ]
     }
    ]
   }
  ],
  "tpms": [
   {
    "label": "2004–06",
    "text": "The 2006 Owner's Guide never mentions a tire pressure monitoring system; the 2008 guide has a TPMS section (\"if equipped\"). So the 2006 has no factory TPMS (verified by absence). 2004–05 guides weren't opened.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "2006 Owner's Guide (factory doc, secondary host)",
      "url": "https://carmanual.org/OwnersManual/ford/2006_ford_f-150.pdf"
     },
     {
      "label": "2008 Owner's Guide (factory doc, secondary host)",
      "url": "https://carmanual.org/OwnersManual/ford/2008_ford_f-150.pdf"
     }
    ]
   },
   {
    "label": "2007–08",
    "text": "Banded sensors in the drop center, 180° from the valve stem, transmitting every 60 s above 20 mph. Training needs Ford tool 204-363 or an aftermarket tool. Relearn by ignition-cycle entry, then LF→RF→RR→LR.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "aa1car TPMS",
      "url": "http://www.aa1car.com/library/tpms_ford_f150.htm"
     }
    ]
   },
   {
    "label": "2009–14",
    "text": "Ford-wide source (not F-150-specific): banded sensors through 2009, valve-stem sensors from 2010; \"TPMS was standard for the 2007 model year\". The 2009 and 2010 F-150 guides both have TPMS sections. Sensor type by F-150 year isn't confirmed from an F-150 document; check the wheel.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Brake & Front End",
      "url": "https://www.brakeandfrontend.com/ford-tpms-relearn-training-procedures/"
     }
    ]
   }
  ]
 },
 "problems": [
  {
   "id": "plugs-3v",
   "title": "Spark plugs seize or break on removal (3V)",
   "years": "2004–08 5.4 3V built before 10/9/07; 4.6 3V before 11/30/07",
   "symptoms": "Plug snaps; porcelain or ground shield left in the head",
   "cause": "Carbon on the extended ground-electrode shield",
   "fix": "Remove only cold, hand tools only. Back off 1/8–1/4 turn, add ½–¾ tsp Motorcraft Carb Tune-Up Cleaner, soak at least 15 min, then work the plug back and forth (removal effort about 33 lb-ft). For broken plugs, use Rotunda 303-1203 or 303-1398 (Loctite 638, 1-hr cure). Coat new plugs with nickel anti-seize on the shield only.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 08-7-6",
     "url": "https://www.fordservicecontent.com/Ford_Content/pubs/content/~WT/~MUS~LEN/3637/tsb08-07-06.htm"
    }
   ],
   "guide": "plugs-3v",
   "disputed": true,
   "confNote": "Older bulletin 06-5-9 (per aa1car) and the 2006 WSM excerpt say remove warm; TSB 08-7-6 (newer) says room temperature.",
   "tips": [
    {
     "text": "TSB 08-7-6 warns that too much Carb Tune-Up Cleaner, or repeating the soak with too much fluid, can hydro-lock the engine, so keep to 1/2-3/4 tsp per well. The engine build date that decides whether the TSB applies is on the left-hand cam cover sticker.",
     "source_url": "https://www.fordservicecontent.com/Ford_Content/pubs/content/~WT/~MUS~LEN/3637/tsb08-07-06.htm",
     "source_name": "Ford TSB 08-7-6: Spark plug removal instructions, 4.6L/5.4L/6.8L 3V",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On an 07 5.4, a senior member notes some trucks may already have the updated heads and non-breaking plugs. He says to check that the plugs have been changed, and brown coil boots are a sign they are due.",
     "source_url": "https://www.f150forum.com/f4/cam-phaser-preventative-measures-551106/",
     "source_name": "F150Forum: Cam phaser preventative measures?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "vct-phaser-knock",
   "title": "Hot-idle knock or tick (VCT phasers)",
   "years": "4.6/5.4 3V (TSB cites 2004–05 F-150 labor)",
   "symptoms": "Light knock at hot idle that goes away above 1,200 rpm",
   "cause": "VCT phaser. Some light knock is \"normal\"",
   "fix": "Test with oil temp at least 160°F. If it's louder than a light knock, replace the phaser.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 06-19-8 PDF",
     "url": "https://latemodel.cachefly.net/downloads/tsb05-14/tsb06-19-08.pdf"
    }
   ]
  },
  {
   "id": "vct-solenoids",
   "title": "Intermittent rattle and rough idle; P0021/P0022/P0340/P0341",
   "years": "2004–10 F-150 5.4 3V",
   "symptoms": "Rattle and rough idle when hot, with oscillating cam-solenoid duty cycle",
   "cause": "Oscillating cam timing",
   "fix": "Replace both VCT solenoids (8L3Z-6M280-B).",
   "parts": [
    "oem-vct-solenoid"
   ],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 12-7-10",
     "url": "https://www.fordservicecontent.com/pubs/content/~WT/~MUS~LEN/3555/tsb12-07-10.pdf"
    }
   ]
  },
  {
   "id": "lash-adjuster",
   "title": "Loud valvetrain tick (stuck lash adjuster)",
   "years": "3V engines built 1/11/06–2/14/06",
   "symptoms": "Loud tick from the cam cover",
   "cause": "Stuck lash adjuster",
   "fix": "Isolate the bank and replace only the affected adjusters. The TSB covers 2006 F-150 and others, and says a \"spongy\" 3V adjuster is normal without oil pressure.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 06-9-11 PDF",
     "url": "https://latemodel.cachefly.net/downloads/tsb05-14/tsb06-09-11.pdf"
    }
   ]
  },
  {
   "id": "tensioner-gasket",
   "title": "Timing-chain tensioner gasket blowout (5.4 3V)",
   "years": "2004–10 4.6/5.4 3V",
   "symptoms": "Cam-timing codes, rough running, scored cam caps",
   "cause": "Tensioner gasket blows out and VCT oil pressure drops",
   "fix": "Replace both tensioners and all timing parts; inspect the cam caps. \"Never replace just one tensioner; always replace both\". New tensioners come with the gasket.",
   "parts": [],
   "conf": "verified-secondary",
   "src": [
    {
     "label": "MOTOR, Nov 2013 (PDF)",
     "url": "https://dev-www.motor.com/wp-content/uploads/O-the-Troubles-Ive-Seen-Nov-2013.pdf"
    }
   ],
   "guide": "torque-54-3v",
   "tips": [
    {
     "text": "A clean oil pan does not mean the timing job can wait. A member says no debris means you can hold off for now, but a guide could still break in 10k miles; dropping the pan on a 4x4 is about 2-3 hours. Another blames blown tensioners for starting the chain whip that breaks guides and jams the oil pump.",
     "source_url": "https://www.f150forum.com/f4/cam-phaser-preventative-measures-551106/",
     "source_name": "F150Forum: Cam phaser preventative measures?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "From a 283k-mile 04 thread: \"If it starts in on the passenger-side 'dry start rattle', do the tensioners ASAP.\"",
     "source_url": "https://www.f150forum.com/f4/anyone-have-any-insane-high-mileage-advice-2004-2008-5-4-3v-f150-404589/",
     "source_name": "F150Forum: Anyone have any INSANE high mileage advice for the 2004-2008 5.4 3v f150?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "manifold-studs",
   "title": "Exhaust manifold leak / broken studs (passenger side)",
   "years": "5.4 3V, 04–08 and 09–10",
   "symptoms": "Tick on cold start or under load",
   "cause": "Studs break and the manifold warps",
   "fix": "Remove the starter, drop the motor mount and jack the engine. Weld a nut on, or use a right-angle drill. Owners report shop bills of \"a little over $500\" and \"$1100 CDN\" (5 broken studs).",
   "parts": [
    "hdr-jba-1676s"
   ],
   "conf": "forum",
   "src": [
    {
     "label": "f150forum broken manifold studs",
     "url": "https://www.f150forum.com/f4/broken-front-exhaust-manifold-studs-324038/"
    }
   ],
   "guide": "manifold-studs",
   "tips": [
    {
     "text": "5.4 manifold studs: remove the starter and the passenger motor mount, jack the engine, and pull the upper intake for room; one owner says \"It shaved 4 hours off my time.\" A Dremel right-angle attachment fits in the tight spots.",
     "source_url": "https://www.f150forum.com/f4/broken-front-exhaust-manifold-studs-324038/",
     "source_name": "F150Forum: Broken front exhaust manifold studs",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "iwe-grind",
   "title": "IWE grind in 2WD",
   "years": "2004–14 4WD",
   "symptoms": "Grinding or noisy front hubs in 2WD",
   "cause": "Vacuum leak in the IWE hoses",
   "fix": "Pull 15 inHg at the solenoid outlet; it must hold for 1 min. If it doesn't, fit hose kit FL3Z-3C125-C on both sides.",
   "parts": [
    "oem-iwe-hose"
   ],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 16-0108 (NHTSA PDF)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2016/SB-10092370-5448.pdf"
    }
   ],
   "guide": "iwe-test",
   "tips": [
    {
     "text": "Check the cheap parts first: on a 2013 Platinum, owners pointed at the check valve before the IWE, and the fix turned out to be the IWE solenoid 7L1Z-9H465-B. The frame-side rubber-to-plastic connector can also leak only in turns, so test with the wheel turned.",
     "source_url": "https://www.f150forum.com/f38/iwe-noise-troubleshooting-405844/",
     "source_name": "F150Forum: IWE Noise Troubleshooting",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "iwe-grind-1314",
   "title": "IWE grind (2013–14 follow-on)",
   "years": "2013–18 4WD",
   "symptoms": "Grind in 2WD, mostly on acceleration",
   "cause": "Lost vacuum or worn IWE parts",
   "fix": "TSB 19-2252 (supersedes 18-2273): replace the check valve near the reservoir; apply 20 inHg; replace the lines or the IWE if it drops more than 0.5 inHg/min.",
   "parts": [
    "oem-iwe-hose"
   ],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 19-2252 PDF",
     "url": "https://static.oemdtc.com/TSB/MC-10164426-0001.pdf"
    }
   ],
   "guide": "iwe-test"
  },
  {
   "id": "eb-cac",
   "title": "EcoBoost stumble or misfire in humid weather",
   "years": "2011–12 3.5 EB",
   "symptoms": "Stumble or misfire under hard acceleration after highway cruising; P0304–P0306, P0430",
   "cause": "Condensation in the charge-air cooler (CAC)",
   "fix": "Confirm the freeze frame shows above 2,500 rpm and at least 100% load. Add the bottom air deflector (DL3Z-2021702-A), reflash the PCM, and replace the LH cat if P0430 is set. Don't fit the deflector to CAC BL34-9L440-AE. (Owners mention a drilled-CAC \"no cac hole\" trick; Tomorrow's Technician warns it \"can create a leak in the system\", search extract, Unconfirmed.)",
   "parts": [
    "oem-eb-cac-deflector"
   ],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 13-8-1",
     "url": "http://www.fordservicecontent.com/Ford_Content/pubs/content/~WT/~MUS~LEN/3569/tsb13-08-01.htm"
    }
   ],
   "tips": [
    {
     "text": "Catch cans do not keep the intercooler dry. A 2011 EB owner with twin UPR cans still found oily water blown out of a loose lower intercooler coupler, and was catching 15-16 oz per 300-350 miles, rising to 18 oz in 240 miles in a Michigan November. Owners argue over drilling a weep hole: some call it a \"dumb bandaid fix\" and suggest a petcock drain or rerouted can lines instead.",
     "source_url": "https://www.f150ecoboost.net/threads/catch-cans-afe-bladerunner-and-intercooler-moisture.8006/",
     "source_name": "F150Ecoboost.net: Catch cans, aFe Bladerunner and intercooler moisture",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "eb-p0016",
   "title": "EcoBoost P0016 (primary timing chain wear)",
   "years": "2011–14 3.5 EB built on or before 10/10/2014",
   "symptoms": "MIL with P0016",
   "cause": "Worn primary chain",
   "fix": "If VCT_INT_ACT1 reads +6° or more, replace the primary chain (AT4Z-6268-C).",
   "parts": [
    "oem-eb-chain"
   ],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 14-0194 PDF",
     "url": "https://www.f150ecoboost.net/attachments/tsb14-0194-pdf.27092/"
    }
   ],
   "guide": "torque-35eb"
  },
  {
   "id": "eb-cold-rattle",
   "title": "EcoBoost cold-start rattle",
   "years": "2011–15 3.5 EB built on or before 29-May-2015",
   "symptoms": "Rattle from the top front cover lasting 2–5 s on start after a 6+ hr cold soak",
   "cause": "Phasers and chain",
   "fix": "Replace all four VCT units and the primary chain (2011–14 labor: 9.2 hr). TSB 18-2305 supersedes 16-0027; search sources say 15-0131 came before that.",
   "parts": [
    "oem-eb-chain"
   ],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 18-2305 (NHTSA PDF)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2018/MC-10148706-9999.pdf"
    }
   ],
   "confNote": "The 15-0131 lineage is Unconfirmed.",
   "guide": "torque-35eb"
  },
  {
   "id": "recall-16v345",
   "title": "Brake fluid lost into the booster (recall 16V-345 / 16S24)",
   "years": "2013–14 3.5 EB built 8/1/2013–8/31/2014",
   "symptoms": "Low-fluid warning, longer pedal travel",
   "cause": "Master cylinder leaks into the booster",
   "fix": "Recall repair.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA PDF",
     "url": "https://static.nhtsa.gov/odi/rcl/2016/RCLRPT-16V345-0099.PDF"
    }
   ]
  },
  {
   "id": "recall-11s18",
   "title": "Clockspring harness chafe (recall 11S18)",
   "years": "2004–06 built to 1/24/2006",
   "symptoms": "Airbag light; risk of unintended deployment",
   "cause": "Harness chafes on the horn plate",
   "fix": "Replace the harness (4L3Z-14B095-A).",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA PDF",
     "url": "https://static.nhtsa.gov/odi/rcl/2011/RCMN-11V107-7185.pdf"
    }
   ]
  },
  {
   "id": "recall-11c21",
   "title": "Brake-shift interlock (recall 11C21)",
   "years": "2011 F-150 built 9/9–9/22/2011",
   "symptoms": "Shifts out of Park without the brake pressed",
   "cause": "BSIA binds",
   "fix": "Inspect and replace. NHTSA campaign 11V-582.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA PDF",
     "url": "https://static.nhtsa.gov/odi/rcl/2011/RCAK-11V582-7445.pdf"
    }
   ]
  },
  {
   "id": "46-2v-plug",
   "title": "4.6 2V plug blowout and coolant crossover leak",
   "years": "04–08 4.6",
   "symptoms": "Plug ejected (#1), crossover tube leak",
   "cause": "n/s",
   "fix": "One owner's account (230k miles, about 1 qt per 5k between changes).",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "f150online 4.6 to Coyote swap",
     "url": "https://www.f150online.com/forums/2004-2008-f-150/523666-04-08-f150-4-6-triton-5-0-coyote-swap.html"
    }
   ]
  },
  {
   "id": "6r80-downshift",
   "title": "Delayed, then harsh, downshift above 40 mph (6R80)",
   "years": "2009–10 F-150 5.4 3V + 6R80 built on or before 2/1/2010 (also 09–10 Expedition/Navigator)",
   "symptoms": "About 3 s delay then a \"neutral drop\" or clunk on a commanded downshift",
   "cause": "Calibration",
   "fix": "TSB 10-12-4: reflash PCM/TCM together (TCM cal AL3P-7J104-AC; F-150 4x4 -BC), clear TCM KAM (unhooking the battery won't), get TFT to 175°F, then run the adaptive drive cycle. \"Several days of driving\" to fully adapt. Owners report \"night and day\" improvement; one says it fixed the delay but he didn't notice quicker shifts.",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "raptorforumz TSB 10-12-4",
     "url": "https://www.raptorforumz.com/threads/tsb-10-12-4-5-4l-3v-and-6r80-transmission-delalyed-harsh-downshift-above-40-mph.7484/"
    }
   ],
   "confNote": "TSB text as posted on a forum (a transcription)."
  },
  {
   "id": "blend-door",
   "title": "EATC warm-air surges / EMTC can't hold temperature (blend door)",
   "years": "2005–08 F-150 (and 2006–08 Mark LT); the TSB doesn't cover 2004",
   "symptoms": "Warm air in Auto at 68–72°F; heat won't drop without turning far into blue; clicking from the dash",
   "cause": "Faulty temperature blend-door actuator",
   "fix": "TSB 08-23-6: check actuator activity (EATC PID LBLNDPOS, or watch it through the glovebox opening on EMTC). Replace with 9L3Z-19E616-E, key off: powering it before it's on the case loses its orientation. Labor 0.7 hr (05–07), 0.5 hr (08). One owner ordered the actuator for \"$25\" (2008); another had it fail again 12k miles after a warranty replacement.",
   "parts": [
    "oem-blend-actuator"
   ],
   "conf": "forum",
   "src": [
    {
     "label": "ford-trucks.com",
     "url": "https://www.ford-trucks.com/forums/652261-whats-the-noise-in-the-dash-7.html"
    }
   ],
   "confNote": "TSB text as posted on a forum (a transcription)."
  },
  {
   "id": "rust-0408",
   "title": "Rust, 2004–08",
   "years": "04–08",
   "symptoms": "Rust under the fuel door (fuel drips; peeling paint pools water), painted bumpers, rear wheel arches, thin bed metal near the spare",
   "cause": "Owners blame fuel drips, rock chips and salt",
   "fix": "Owners: clear-film painted bumpers, touch up early, undercoat, hand wash.",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "f150forum 04–08 rust",
     "url": "https://www.f150forum.com/f4/where-04-08s-prone-rusting-164789/"
    }
   ]
  },
  {
   "id": "rust-0914",
   "title": "Rust, 2009–14",
   "years": "09–14",
   "symptoms": "Cab corners (\"infamous\" on SuperCrews, per one owner), rockers, core support, door and tailgate pinch seams, bed and cab supports, spring shackles, brake lines",
   "cause": "Steel body and frame",
   "fix": "n/a",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "f150forum 2011–12 rust",
     "url": "https://www.f150forum.com/f38/rust-issue-2011-2012-generation-f150-436042/"
    }
   ],
   "disputed": true,
   "confNote": "Owners disagree: several report no rust at 50k–161k miles in the South and Midwest; others say 09–14 trucks rust \"just as bad\" as 04–08 and just aren't old enough yet.",
   "tips": [
    {
     "text": "Owners trace 09-14 cab-corner rot to water getting past the third brake light seal and pooling inside. Fixes: a bead of silicone or the wider updated Ford seal. One owner had both rockers replaced under Ford's 5-year paint and corrosion coverage.",
     "source_url": "https://www.f150forum.com/f38/cab-corner-rust-394887/index2/",
     "source_name": "F150Forum: Cab corner rust (page 2)",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Two owners (2013 and 2014) were refused corrosion warranty because the bubbling was not perforated yet; one perforated a month after coverage ended. Get bubbling on record with the dealer early.",
     "source_url": "https://www.f150forum.com/f38/2014-f150-cab-corner-rocker-rust-456719/",
     "source_name": "F150Forum: 2014 F150 Cab Corner and Rocker Rust",
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
   "title": "Wheel install and lug torque",
   "summary": "M14x2.0 lugs, 150 lb-ft, re-torque within 100 miles.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2011 Owner's Guide (factory doc, secondary host)",
     "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
    },
    {
     "label": "f150online (2004 WSM quote)",
     "url": "https://www.f150online.com/forums/suspension/452050-04-08-front-end-torque-specs-needed.html"
    }
   ],
   "steps": [
    {
     "text": "Torque lugs to 150 lb-ft (2011 Owner's Guide p.347)."
    },
    {
     "text": "Re-torque within 100 miles of any wheel removal."
    },
    {
     "text": "Metric value conflict: 200 N·m (2011 OG) vs 204 N·m (2004 WSM, forum quote). 150 lb-ft is about 203 N·m. Use 150 lb-ft.",
     "conf": "forum",
     "disputed": true
    },
    {
     "text": "Use hub-centric rings when the aftermarket bore is larger than 87.1 mm.",
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
      "Wheel nuts (M14x2.0)",
      "150 lb-ft (200 N·m per 2011 OG; 204 N·m per 2004 WSM quote)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "front-susp-12",
   "type": "diy",
   "title": "Front suspension torque, 12th gen 4WD",
   "summary": "2014 WSM 204-01B (rev. 10/25/2013) and 204-02 rear.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2014 WSM 204-01B PDF (factory doc, secondary host)",
     "url": "https://www.f150ecoboost.net/attachments/2011-2014-f150-work-shop-manual-204-01b-front-suspension-4wd-pdf.202244/"
    }
   ],
   "steps": [
    {
     "text": "Front values are 4WD. Raptor values differ where noted."
    },
    {
     "text": "Rear U-bolts: \"refer to procedure\"; the value wasn't extracted (Unknown).",
     "conf": "unknown"
    },
    {
     "text": "Lower ball-joint nut differs from the 2004 figure (150 N·m / 111 lb-ft). Don't mix generations.",
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
      "Lower arm forward and rearward nuts",
      "350 N·m (258 lb-ft)"
     ],
     [
      "Lower ball-joint nut",
      "175 N·m (129 lb-ft)"
     ],
     [
      "Upper ball-joint nut",
      "115 N·m (85 lb-ft)"
     ],
     [
      "Upper arm-to-frame nuts",
      "150 N·m (111 lb-ft)"
     ],
     [
      "Tie-rod end nut",
      "115 N·m (85 lb-ft)"
     ],
     [
      "Wheel bearing / hub bolts",
      "175 N·m (129 lb-ft)"
     ],
     [
      "Halfshaft nut",
      "40 N·m (30 lb-ft)"
     ],
     [
      "Shock lower nuts",
      "90 N·m (66 lb-ft)"
     ],
     [
      "Shock lower nut (Raptor)",
      "550 N·m (406 lb-ft)"
     ],
     [
      "Shock upper mount nuts",
      "63 N·m (46 lb-ft)"
     ],
     [
      "Shock rod nut",
      "55 N·m (41 lb-ft)"
     ],
     [
      "Stabilizer bracket nuts",
      "55 N·m (41 lb-ft)"
     ],
     [
      "Stabilizer link nuts",
      "70 N·m (52 lb-ft) (Raptor: 80/59)"
     ],
     [
      "IWE bolts",
      "12 N·m (106 lb-in)"
     ],
     [
      "Brake disc shield bolts",
      "17 N·m (150 lb-in)"
     ],
     [
      "Wheel speed sensor bolt",
      "18 N·m (159 lb-in)"
     ],
     [
      "Skid plate bolts",
      "48 N·m (35 lb-ft)"
     ],
     [
      "Rear spring-to-frame nut",
      "350 N·m (258 lb-ft)"
     ],
     [
      "Rear spring shackle-to-frame and spring-to-shackle nuts",
      "185 N·m (136 lb-ft)"
     ],
     [
      "Rear shock nuts",
      "90 N·m (66 lb-ft)"
     ],
     [
      "Rear jounce bumper",
      "35 N·m (26 lb-ft)"
     ]
    ]
   },
   "parts": [
    "shocks-bilstein-5100-0913"
   ]
  },
  {
   "id": "susp-brakes-11",
   "type": "diy",
   "title": "Suspension and brake torque, 11th gen (2004)",
   "summary": "WSM 204-00 table as quoted on f150online.",
   "conf": "forum",
   "src": [
    {
     "label": "f150online (2004 WSM quote)",
     "url": "https://www.f150online.com/forums/suspension/452050-04-08-front-end-torque-specs-needed.html"
    }
   ],
   "steps": [
    {
     "text": "These are a forum transcription of the 2004 WSM. Verify against the manual."
    },
    {
     "text": "Shock-to-lower arm 475 / 351 is as printed in the quote."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Wheel hub-to-knuckle",
      "200 N·m / 148 lb-ft"
     ],
     [
      "Tie-rod end",
      "150 / 111"
     ],
     [
      "Front axle-to-hub nut",
      "27 / 20"
     ],
     [
      "Upper ball joint",
      "115 / 85"
     ],
     [
      "Lower ball joint",
      "150 / 111"
     ],
     [
      "Upper arm-to-frame",
      "150 / 111"
     ],
     [
      "Lower arm-to-frame",
      "300 / 222"
     ],
     [
      "Shock-to-lower arm",
      "475 / 351 (as printed)"
     ],
     [
      "Stabilizer bar-to-link",
      "133 / 98"
     ],
     [
      "Front caliper anchor-to-knuckle",
      "200 / 148"
     ],
     [
      "Front caliper-to-anchor",
      "32 / 24"
     ],
     [
      "Rear caliper bolts",
      "32 / 24"
     ],
     [
      "Rear U-bolts",
      "LD 115 / 85; HD 250 / 184"
     ],
     [
      "Rear spring-to-frame (front eye)",
      "300 / 222"
     ],
     [
      "Rear spring/shackle",
      "133 / 98"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "brakes-12",
   "type": "diy",
   "title": "Front brakes, 12th gen (2013)",
   "summary": "WSM 206-03 as quoted on f150forum; bleed screw from WSM 206-00 PDF.",
   "conf": "forum",
   "src": [
    {
     "label": "f150forum (2013 WSM 206-03 quote)",
     "url": "https://www.f150forum.com/f38/brakes-bolt-torque-specs-2013-fx4-273695/"
    },
    {
     "label": "WSM 206-00 PDF (factory doc, secondary host)",
     "url": "https://www.f150ecoboost.net/attachments/brake-system-%E2%80%93-general-information-pdf.194078/"
    }
   ],
   "steps": [
    {
     "text": "Use new caliper anchor-plate bolts."
    },
    {
     "text": "Tighten the lower guide-pin bolt first."
    },
    {
     "text": "Use new copper washers on the brake hose banjo."
    },
    {
     "text": "Bleed screw: 10 N·m (89 lb-in).",
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
      "Caliper anchor-plate bolts (new)",
      "250 N·m (184 lb-ft)"
     ],
     [
      "Guide-pin bolts",
      "37 N·m (27 lb-ft)"
     ],
     [
      "Brake hose banjo (new copper washers)",
      "35 N·m (26 lb-ft)"
     ],
     [
      "Bleed screw",
      "10 N·m (89 lb-in) (factory doc)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "plugs-3v",
   "type": "diy",
   "title": "Spark plugs on the 3V (4.6/5.4)",
   "summary": "TSB 08-7-6 removal plus 2006 WSM install torque.",
   "conf": "verified",
   "src": [
    {
     "label": "TSB 08-7-6",
     "url": "https://www.fordservicecontent.com/Ford_Content/pubs/content/~WT/~MUS~LEN/3637/tsb08-07-06.htm"
    },
    {
     "label": "2006 WSM excerpt PDF (factory doc, secondary host)",
     "url": "https://qualityservicemanual.com/sites/default/files/Pages%20from%202006-F150-Mark-LT.pdf"
    },
    {
     "label": "aa1car spark plugs",
     "url": "https://www.aa1car.com/library/ford_broken_spark_plug_problem.htm"
    }
   ],
   "steps": [
    {
     "text": "Remove only at room temperature, hand tools only (TSB 08-7-6)."
    },
    {
     "text": "The 2006 WSM excerpt says remove from a warm engine (\"hand touch after cooling down\"), as did older bulletin 06-5-9. Ford's newer TSB wins: cold.",
     "conf": "verified-secondary",
     "disputed": true
    },
    {
     "text": "Back off 1/8–1/4 turn. Add ½–¾ tsp Motorcraft Carb Tune-Up Cleaner and soak at least 15 min."
    },
    {
     "text": "Work the plug back and forth. Expected removal effort is about 33 lb-ft (45 N·m); this is not an install torque."
    },
    {
     "text": "Broken plug: Rotunda 303-1203 or 303-1398 (Loctite 638, 1-hr cure)."
    },
    {
     "text": "Install: nickel anti-seize on the ground-electrode shield only, not the strap; no lubricant on the threads.",
     "conf": "verified-secondary"
    },
    {
     "text": "2010 gap: 4.6 2V 0.052–0.056 in; 4.6 3V and 5.4 0.039–0.043 in (2010 OG).",
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
      "Spark plug install, 5.4 3V (2006 WSM 303-07C)",
      "34 N·m (25 lb-ft)"
     ],
     [
      "Coil bolt",
      "6 N·m (53 lb-in)"
     ],
     [
      "Removal effort (TSB, not install)",
      "about 33 lb-ft (45 N·m)"
     ]
    ],
    "src": [
     {
      "label": "2006 WSM excerpt PDF (factory doc, secondary host)",
      "url": "https://qualityservicemanual.com/sites/default/files/Pages%20from%202006-F150-Mark-LT.pdf"
     },
     {
      "label": "TSB 08-7-6",
      "url": "https://www.fordservicecontent.com/Ford_Content/pubs/content/~WT/~MUS~LEN/3637/tsb08-07-06.htm"
     }
    ]
   },
   "parts": []
  },
  {
   "id": "plugs-modern",
   "type": "diy",
   "title": "Spark plugs, 5.0 Coyote and 3.5 EcoBoost",
   "summary": "Factory torque and gap.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2014 WSM 5.0 sections PDF (factory doc, secondary host)",
     "url": "https://www.todomecanica.com/component/k2/download/8906_645a965db4708dc163ba0fe65252655d.html"
    },
    {
     "label": "2014 WSM 303-01A specs PDF (factory doc, secondary host)",
     "url": "https://www.f150ecoboost.net/attachments/engine-3-5l-gtdi-pdf.187677/"
    },
    {
     "label": "2011 Owner's Guide (factory doc, secondary host)",
     "url": "https://carmanual.org/OwnersManual/ford/2011_ford_f-150.pdf"
    }
   ],
   "steps": [
    {
     "text": "5.0: the 303-07C procedure says 14 N·m (124 lb-in); the 303-01C table says 15 N·m (133 lb-in). Use 14–15 N·m and don't go over.",
     "disputed": true
    },
    {
     "text": "3.5 EB: 15 N·m (133 lb-in); gap 0.035 in (2014 WSM). 2011 OG lists .033–.037 in."
    },
    {
     "text": "2011 gaps: 3.7 .052–.056 in; 5.0 .041–.047 in; 6.2 .039–.043 in."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "5.0 spark plug (procedure)",
      "14 N·m (124 lb-in)"
     ],
     [
      "5.0 spark plug (table)",
      "15 N·m (133 lb-in)"
     ],
     [
      "5.0 coil-on-plug bolt",
      "6 N·m (53 lb-in)"
     ],
     [
      "3.5 EB spark plug",
      "15 N·m (133 lb-in)"
     ]
    ],
    "disputedRows": [
     0,
     1
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "TSB 14-0180 (2011-13 3.5 EB built on or before 6/15/2013): if the plug from a misfiring cylinder shows carbon tracking, replace all six plugs (CYFS-12-YT3) and all six coil boots (BL3Z-12A402-A) with XG-3-A dielectric grease.",
     "source_url": "https://static.oemdtc.com/TSB/14-0180.pdf",
     "source_name": "Ford TSB 14-0180: 3.5L GTDI engine ignition misfire",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Owners disagree on 3.5 EB plug gap. One member who checked the online workshop manual says the latest spec is 0.031 in for all 2011-14, while owner manuals listed 0.033-0.037 (2011-12) and later 0.030-0.033. Tuned owners run 0.028 in.",
     "source_url": "https://www.f150forum.com/f70/3-5l-ecoboost-new-misfire-fix-tsb-jan-2014-a-249576/index6/",
     "source_name": "F150Forum: 3.5L Ecoboost New Misfire Fix TSB Jan 2014 (page 6)",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "torque-54-3v",
   "type": "diy",
   "title": "Engine torque specs, 5.4 3V (04–10)",
   "summary": "WSM 303-01 as reproduced on diagnostdata (year not stated). TTY = torque-to-yield; replace the bolt.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "diagnostdata 5.4 3V WSM reproduction (factory doc, secondary host)",
     "url": "https://diagnostdata.com/ford/pickup-f350-super-duty/1999-2012/remont/mechanical/engine-54l-3v-f150-pickup/overhaul/"
    },
    {
     "label": "Ford Performance M-6550-3V sheet",
     "url": "https://performanceparts.ford.com/download/instructionsheets/fordinstshtm-6550-3v.pdf"
    }
   ],
   "steps": [
    {
     "text": "Head and cam-sprocket figures match 2004 values in search extracts of charm.li (which wouldn't load)."
    },
    {
     "text": "Replace both timing-chain tensioners, never just one (MOTOR, Nov 2013).",
     "conf": "verified-secondary"
    },
    {
     "text": "4.6 3V phaser bolt (Ford Performance M-6550-3V): 40 N·m + 90°; cam caps 10 N·m.",
     "conf": "verified"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Cylinder head bolts (TTY)",
      "40 N·m (30 lb-ft) + 90° + 90°, in sequence"
     ],
     [
      "Cam bearing caps",
      "10 N·m (89 lb-in), in sequence"
     ],
     [
      "VCT phaser sprocket bolt (new)",
      "40 N·m (30 lb-ft) + 90°"
     ],
     [
      "Timing chain guides",
      "10 N·m (89 lb-in)"
     ],
     [
      "Timing chain tensioners",
      "25 N·m (18 lb-ft)"
     ],
     [
      "Front cover",
      "Stage 1: all to 25 N·m; Stage 2: fasteners 6 and 7 to 48 N·m (35 lb-ft)"
     ],
     [
      "Crank pulley bolt (new)",
      "90 N·m → loosen 360° → 50 N·m → +90°"
     ],
     [
      "Main caps, vertical / side bolts",
      "40 N·m + 90° / 30 N·m + 90°"
     ],
     [
      "Rod bolts (new)",
      "43 N·m (32 lb-ft) + 105°"
     ],
     [
      "Exhaust manifold nuts",
      "25 N·m (18 lb-ft), in sequence"
     ],
     [
      "Exhaust manifold-to-Y-pipe flange nuts",
      "40 N·m (30 lb-ft)"
     ],
     [
      "Valve covers",
      "10 N·m (89 lb-in)"
     ],
     [
      "Oil pan",
      "2 N·m → 20 N·m → +60°"
     ],
     [
      "Flexplate",
      "80 N·m (59 lb-ft)"
     ],
     [
      "Torque converter nuts (new)",
      "36 N·m (27 lb-ft)"
     ],
     [
      "Throttle body",
      "9 N·m + 90°"
     ],
     [
      "LH engine mount bolt",
      "early build 220 N·m (162 lb-ft); late build 350 N·m (258 lb-ft)"
     ],
     [
      "Knock sensors",
      "20 N·m (15 lb-ft)"
     ]
    ]
   },
   "parts": [
    "oem-vct-solenoid"
   ],
   "tips": [
    {
     "text": "The 5.4 3V timing tip guide budgets 8-10 hours with tools and says not to buy Dorman phasers. It lists the Ford kit 3R2Z-6A257-DA, two 8L3Z-6M280-B solenoids and a Melling high-performance oil pump, plus a rented power-steering pulley puller and a 3-jaw balancer puller.",
     "source_url": "https://www.f150forum.com/f4/tip-guide-5-4-3v-timing-system-cam-phasers-installation-294718/",
     "source_name": "F150Forum: [TIP GUIDE] [5.4 3v] Timing System/Cam Phasers Installation",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "torque-50",
   "type": "diy",
   "title": "Engine torque specs, 5.0 Coyote (2011–14)",
   "summary": "2014 WSM 303-01C / 303-07C PDF.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2014 WSM 5.0 sections PDF (factory doc, secondary host)",
     "url": "https://www.todomecanica.com/component/k2/download/8906_645a965db4708dc163ba0fe65252655d.html"
    }
   ],
   "steps": [
    {
     "text": "TTY = torque-to-yield; replace the bolt."
    },
    {
     "text": "VCT bolts: step 56; hold the cam on its flats."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Cylinder head bolts (TTY)",
      "25 N·m (18 lb-ft) → 40 N·m (30 lb-ft) → +90° → +90°"
     ],
     [
      "Cam bearing caps",
      "6 N·m (53 lb-in) + 45°"
     ],
     [
      "VCT bolts",
      "15 N·m (133 lb-in) + 90°"
     ],
     [
      "Exhaust manifold nuts (new)",
      "24 N·m → 32 N·m (24 lb-ft)"
     ],
     [
      "Exhaust manifold studs",
      "25 N·m (18 lb-ft)"
     ],
     [
      "Cat-to-manifold nuts",
      "40 N·m (30 lb-ft)"
     ],
     [
      "Crank pulley bolt (new)",
      "140 N·m → loosen 360° → 100 N·m → +90°"
     ],
     [
      "Main caps, vertical",
      "1–20 to 20 N·m; 1–10 to 40 N·m; 11–20 to 65 N·m; all +90°"
     ],
     [
      "Main caps, cross bolts",
      "10 → 30 N·m → +60°"
     ],
     [
      "Timing guides / primary tensioner",
      "10 N·m (89 lb-in)"
     ],
     [
      "Oil drain plug",
      "26 N·m (19 lb-ft)"
     ],
     [
      "Coil-on-plug bolt",
      "6 N·m (53 lb-in)"
     ],
     [
      "Torque converter nuts",
      "40 N·m (30 lb-ft)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "torque-35eb",
   "type": "diy",
   "title": "Engine torque specs, 3.5 EcoBoost (2011–14)",
   "summary": "2014 WSM 303-01A assembly and specs PDFs.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2014 WSM 303-01A assembly PDF (factory doc, secondary host)",
     "url": "https://www.f150ecoboost.net/attachments/2014-ws-manual-303-01a-3-5l-assembly-pdf.195773/"
    },
    {
     "label": "2014 WSM 303-01A specs PDF (factory doc, secondary host)",
     "url": "https://www.f150ecoboost.net/attachments/engine-3-5l-gtdi-pdf.187677/"
    }
   ],
   "steps": [
    {
     "text": "Exhaust manifold nuts must be torqued a second time (manual warning)."
    },
    {
     "text": "Use new head bolts and new VCT bolts."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Cylinder head bolts (8 per head, new)",
      "20 N·m (177 lb-in) → 35 N·m (26 lb-ft) → +90° → +90° → +45°"
     ],
     [
      "Cylinder head M6 bolt",
      "10 N·m (89 lb-in)"
     ],
     [
      "Cam caps, mega cap and oil tube (15 bolts)",
      "8 N·m (71 lb-in) + 45°"
     ],
     [
      "VCT bolts (new)",
      "40 N·m → loosen one full turn → 25 N·m → +180°"
     ],
     [
      "Exhaust manifold nuts (new)",
      "19 N·m → 25 N·m (18 lb-ft)"
     ],
     [
      "Exhaust manifold studs",
      "12 N·m (106 lb-in)"
     ],
     [
      "Turbo-to-manifold bolts",
      "32 N·m (24 lb-ft)"
     ],
     [
      "Crank pulley bolt (new)",
      "120 N·m → loosen one turn → 50 N·m → +90°"
     ],
     [
      "Primary chain tensioner / guides",
      "10 N·m (89 lb-in)"
     ],
     [
      "Oil drain plug",
      "27 N·m (20 lb-ft)"
     ],
     [
      "Engine mount through bolts",
      "350 N·m (258 lb-ft)"
     ],
     [
      "Torque converter nuts",
      "44 N·m (32 lb-ft)"
     ]
    ]
   },
   "parts": [
    "oem-eb-chain"
   ]
  },
  {
   "id": "iwe-test",
   "type": "diy",
   "title": "IWE vacuum test (5 minutes)",
   "summary": "Test before buying parts.",
   "conf": "verified",
   "src": [
    {
     "label": "TSB 16-0108 (NHTSA PDF)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2016/SB-10092370-5448.pdf"
    },
    {
     "label": "f150forum IWE",
     "url": "https://www.f150forum.com/f118/confirming-some-iwe-issues-after-search-534620/"
    }
   ],
   "steps": [
    {
     "text": "Hand vacuum pump at the solenoid outlet. It must hold 15 inHg for 1 minute (TSB 16-0108)."
    },
    {
     "text": "If it doesn't hold, fit hose kit FL3Z-3C125-C on both sides."
    },
    {
     "text": "2013–14: TSB 19-2252 applies 20 inHg; replace lines or the IWE if it drops more than 0.5 inHg/min."
    },
    {
     "text": "Owner: \"Most people run out to buy a check valve at a hint of an IWE failure. It works about 30% of the time.\" A solenoid \"almost never fails\". (Thread now behind a Cloudflare check.)",
     "conf": "unconfirmed"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "IWE bolts (2014 WSM)",
      "12 N·m (106 lb-in)"
     ]
    ]
   },
   "parts": [
    "oem-iwe-hose"
   ]
  },
  {
   "id": "manifold-studs",
   "type": "diy",
   "title": "5.4 3V passenger exhaust manifold studs",
   "summary": "Owner method for the front passenger studs.",
   "conf": "forum",
   "src": [
    {
     "label": "f150forum broken manifold studs",
     "url": "https://www.f150forum.com/f4/broken-front-exhaust-manifold-studs-324038/"
    },
    {
     "label": "diagnostdata 5.4 3V WSM reproduction (factory doc, secondary host)",
     "url": "https://diagnostdata.com/ford/pickup-f350-super-duty/1999-2012/remont/mechanical/engine-54l-3v-f150-pickup/overhaul/"
    }
   ],
   "steps": [
    {
     "text": "Remove the starter and the passenger motor mount, jack the engine, and pull the upper intake for room. \"It shaved 4 hours off my time.\""
    },
    {
     "text": "A Dremel right-angle attachment fits in tight spots. Or weld a nut on, or use a right-angle drill."
    },
    {
     "text": "Reinstall manifold nuts to 25 N·m (18 lb-ft) in sequence.",
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
      "Exhaust manifold nuts",
      "25 N·m (18 lb-ft), in sequence"
     ],
     [
      "Manifold-to-Y-pipe flange nuts",
      "40 N·m (30 lb-ft)"
     ],
     [
      "LH engine mount bolt",
      "early build 220 N·m (162 lb-ft); late build 350 N·m (258 lb-ft)"
     ]
    ],
    "conf": "verified-secondary",
    "src": [
     {
      "label": "diagnostdata 5.4 3V WSM reproduction (factory doc, secondary host)",
      "url": "https://diagnostdata.com/ford/pickup-f350-super-duty/1999-2012/remont/mechanical/engine-54l-3v-f150-pickup/overhaul/"
     }
    ]
   },
   "parts": [
    "hdr-jba-1676s"
   ],
   "tips": [
    {
     "text": "5.4 manifold studs: remove the starter and the passenger motor mount, jack the engine, and pull the upper intake for room; one owner says \"It shaved 4 hours off my time.\" A Dremel right-angle attachment fits in the tight spots.",
     "source_url": "https://www.f150forum.com/f4/broken-front-exhaust-manifold-studs-324038/",
     "source_name": "F150Forum: Broken front exhaust manifold studs",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "leveling",
   "type": "diy",
   "title": "Leveling-kit install",
   "summary": "Rough Country 568 and 570 are strut-top spacers.",
   "conf": "verified",
   "src": [
    {
     "label": "Rough Country 568",
     "url": "https://www.roughcountry.com/product/configurable/ford-leveling-lift-kit-568c"
    },
    {
     "label": "Rough Country 570",
     "url": "https://www.roughcountry.com/product/ford-leveling-lift-kit-570"
    }
   ],
   "steps": [
    {
     "text": "\"No strut disassembly required\" (RC pages)."
    },
    {
     "text": "Video: \"How to Install Leveling Kit 2009-2014 Ford F-150\" (TRQ).",
     "conf": "video"
    },
    {
     "text": "Video: \"Don't lift the front end of your f-150 w/ spacers, without changing other things, or UCA will hit\" (Mario Salas).",
     "conf": "video"
    },
    {
     "text": "Re-torque lugs to 150 lb-ft.",
     "conf": "verified-secondary"
    }
   ],
   "torque": null,
   "parts": [
    "lev-rc570",
    "lev-rc568"
   ],
   "tips": [
    {
     "text": "Rough Country says to re-torque every fastener after 500 miles on its 09-13 leveling kit, and again at routine service.",
     "source_url": "https://sadlerpowertrain.com/content/pdf/roughcountry/92568000.pdf",
     "source_name": "Rough Country: 2009-13 Ford F150 2\" suspension kit instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-coyote-0408",
   "type": "swap",
   "title": "Coyote 5.0 + 6R80 into 2004–08",
   "summary": "One owner calls it \"NOT an easy swap\".",
   "conf": [
    "verified",
    "forum"
   ],
   "src": [
    {
     "label": "MIM crossmember",
     "url": "https://make-it-modular.com/products/2004-2008-f150-coyote-swap-transmission-cross-member"
    },
    {
     "label": "f150online 4.6 to Coyote swap",
     "url": "https://www.f150online.com/forums/2004-2008-f-150/523666-04-08-f150-4-6-triton-5-0-coyote-swap.html"
    }
   ],
   "steps": [
    {
     "text": "2011–14 6R80 and its trans harness."
    },
    {
     "text": "MIM 04–08 swap harness."
    },
    {
     "text": "PCM with PATS deleted."
    },
    {
     "text": "MIM crossmember, because the 6R80 mount sits 3\" further back; it uses the stock 11–14 F-150 6R80 mount. Crossmember $400.00.",
     "conf": "verified"
    },
    {
     "text": "Videos: \"Everything needed(ish) to Coyote Swap the 2004-2008 Ford F150\" (Matt Soppa); \"Thinking of Coyote Swapping Your 11th Gen (2004-08) Ford F150?\" (3V Johnny); \"I pick up the donor engine for the 2004-2008 F150 Coyote Swap!\" (Matt Soppa).",
     "conf": "video"
    }
   ],
   "torque": null,
   "parts": [
    "swap-mim-crossmember"
   ]
  },
  {
   "id": "swap-6r80-54",
   "type": "swap",
   "title": "6R80 behind the 5.4 3V in 2004–08 (keeps the 3V)",
   "summary": "MIM 6R80-only harness, $1,200.00.",
   "conf": "verified",
   "src": [
    {
     "label": "MIM 6R80 harness",
     "url": "https://make-it-modular.com/products/2004-2008-f150-6r80-swap-conversion-harness"
    }
   ],
   "steps": [
    {
     "text": "MIM 6R80-only harness."
    },
    {
     "text": "2012–14 Expedition/Navigator 5.4 3V ECU (PATS deleted). The 2011 Expedition ECU won't work."
    },
    {
     "text": "11–14 F-150 6R80 harness. 12–14 Expedition engine harness."
    },
    {
     "text": "09–14 5.4 3V intake, or IMRC delete. 09–14 pedal."
    },
    {
     "text": "Electric fans recommended."
    },
    {
     "text": "04–05 need two splices for oil pressure and A/C."
    },
    {
     "text": "Electronic 4x4 transfer cases need a manual case or an aftermarket controller."
    }
   ],
   "torque": null,
   "parts": [
    "swap-mim-6r80-harness"
   ],
   "tips": [
    {
     "text": "In a 2004-08 thread, owners agree the mechanical side is the easy half and the electronics are the hard part. One points to US Shift's Quick 6 controller for 4R75 trucks as a standalone way to run a 6R80.",
     "source_url": "https://www.f150forum.com/f4/6r80-transmission-retro-fit-203212/",
     "source_name": "F150Forum: 6r80 transmission retro fit???",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-coyote-0910",
   "type": "swap",
   "title": "Coyote into 2009–10",
   "summary": "A Juggernaut 2009–10 Coyote swap harness exists (page not opened).",
   "conf": "unconfirmed",
   "src": [],
   "steps": [
    {
     "text": "No details captured. Price n/s."
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "swap-1314-front",
   "type": "swap",
   "title": "13–14 front end onto 09–12",
   "summary": "Whole grille assembly swaps; inserts don't.",
   "conf": "forum",
   "src": [
    {
     "label": "f150forum grille interchange",
     "url": "https://www.f150forum.com/f2/grill-interchange-12-xlt-504392/"
    }
   ],
   "steps": [
    {
     "text": "Whole grille assembly (with shell) swaps. Inner inserts differ because the shell radius is different.",
     "disputed": true
    },
    {
     "text": "2013–14 OEM HID headlamps on 09–12 need a conversion harness (part and price Unconfirmed).",
     "conf": "unconfirmed"
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "gf-hub-bearing-12",
   "type": "diy",
   "title": "Front hub and wheel bearing, 2011-14 4x4",
   "summary": "Sealed hub serviced as an assembly. Ford PDF on a secondary host. Applies to: 2011-14, 2014 Workshop Manual (Ford PDF on a secondary host).",
   "conf": "verified",
   "src": [
    {
     "label": "2014 WSM 204-01B Front Suspension 4WD",
     "url": "https://www.f150ecoboost.net/attachments/2011-2014-f150-work-shop-manual-204-01b-front-suspension-4wd-pdf.202244/"
    }
   ],
   "steps": [
    {
     "text": "Remove the wheel, then the caliper and rotor. The wheel-speed-sensor connector is in the engine bay on the fender apron."
    },
    {
     "text": "Remove the halfshaft nut and the hub bolts; the hub and bearing are a sealed unit serviced as an assembly."
    },
    {
     "text": "If reusing the original hub, fit a new hub O-ring."
    },
    {
     "text": "Before fitting the axle nut, measure from the CV shaft's threaded end to the inner bearing race: minimum 15.5 mm (0.61 in). If shallower, rotate the shaft until the IWE and CV splines stop binding. Ford warns that tightening without proper protrusion damages the IWE."
    },
    {
     "text": "Check for spline lash, then torque the axle nut. Refit brake parts."
    },
    {
     "text": "One more 12 N·m (106 lb-in) step names no fastener in the PDF text (the IWE bolts use the same value)."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "Hub bolts",
      "175 N·m (129 lb-ft)"
     ],
     [
      "Axle nut",
      "40 N·m (30 lb-ft)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-ball-joint-12",
   "type": "diy",
   "title": "Lower ball joint, 2011-14 4x4",
   "summary": "Pressed joint, serviceable separately from the arm. Applies to: 2011-14, 2014 Workshop Manual (Ford PDF on a secondary host).",
   "conf": "verified",
   "src": [
    {
     "label": "2014 WSM 204-01B Front Suspension 4WD",
     "url": "https://www.f150ecoboost.net/attachments/2011-2014-f150-work-shop-manual-204-01b-front-suspension-4wd-pdf.202244/"
    }
   ],
   "steps": [
    {
     "text": "The lower ball joint is pressed and serviceable separately from the arm (Ford tools 205-086 C-frame, 204-358 adapters). Make sure the snap ring is fully seated; do not damage the boot with the press."
    },
    {
     "text": "Raptor: the joint is bonded with the kit adhesive (clean with Metal Surface Prep ZC-31-A). Keep adhesive off the boot and do not drive for at least 1 hour. If the arm shows cracks, replace the arm."
    },
    {
     "text": "Do not use a pickle fork between the ball joint and knuckle (damages the seal). Do not hammer the knuckle to free the tie-rod end."
    },
    {
     "text": "Torque suspension bolts at curb height: measure hub center to fender lip before you start, then jack the suspension to that height before final torque."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "Lower ball-joint nut",
      "175 N·m (129 lb-ft)"
     ],
     [
      "Upper ball-joint nut",
      "115 N·m (85 lb-ft)"
     ],
     [
      "Raptor shock lower bolt (at curb height)",
      "550 N·m (406 lb-ft)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-alternator-12",
   "type": "diy",
   "title": "Alternator (generator), 2011-14",
   "summary": "Ratings and torque from the charging-system section. Applies to: 2011-14, 2014 Workshop Manual (Ford PDF on a secondary host).",
   "conf": "verified",
   "src": [
    {
     "label": "2014 WSM 414-00 Charging System",
     "url": "https://www.f150ecoboost.net/attachments/2011-2014-work-shop-manual-414-00-charging-system-alternator-generator-pdf.199878/"
    },
    {
     "label": "2014 WSM 303-05/303-06 Accessory Drive and Starting",
     "url": "https://www.f150ecoboost.net/attachments/2011-2014-f150-workshop-manual-accessory-drive-chapter-303-05-pdf.195767/"
    }
   ],
   "steps": [
    {
     "text": "Disconnect the battery before removing the B+ terminal."
    },
    {
     "text": "Ratings (pulley ratio 2.95:1): 5.0 with AC power point or climate seats 220 A; 5.0 without 200 A; 6.2 base 155 A, optional 200 A."
    },
    {
     "text": "The PCM sets the regulator set-point; a GENMON duty cycle of 3% or less sets P0625, 98% or more sets P0626."
    },
    {
     "text": "Belt tensioner: 414-00 lists 48 N·m for all engines, but the belt section 303-05 is engine-specific (see the Starter and accessory belt guide). Use 303-05."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "Generator bolts",
      "48 N·m (35 lb-ft)"
     ],
     [
      "B+ terminal nut",
      "17 N·m (150 lb-in)"
     ],
     [
      "Generator stud (3.5)",
      "8 N·m (71 lb-in)"
     ],
     [
      "Stud nut (3.5/3.7)",
      "48 N·m (35 lb-ft)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-starter-belt-12",
   "type": "diy",
   "title": "Starter and accessory belt, 2011-14",
   "summary": "Engine-specific values from WSM 303-05 and 303-06. Applies to: 2011-14, 2014 Workshop Manual (Ford PDF on a secondary host).",
   "conf": "verified",
   "src": [
    {
     "label": "2014 WSM 303-05/303-06 Accessory Drive and Starting",
     "url": "https://www.f150ecoboost.net/attachments/2011-2014-f150-workshop-manual-accessory-drive-chapter-303-05-pdf.195767/"
    }
   ],
   "steps": [
    {
     "text": "Starter test values: cranking speed 140-220 rpm; max voltage drop 0.5 V hot; normal load draw 130-220 A; no-load 60-84 A; in-rush up to 800 A."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "Starter bolts, 3.5 EB and 3.7",
      "48 N·m (35 lb-ft)"
     ],
     [
      "Starter bolts, 5.0 and 6.2 (also studs and ground-cable nut)",
      "25 N·m (18 lb-ft)"
     ],
     [
      "Solenoid B+ nut",
      "12 N·m (106 lb-in)"
     ],
     [
      "S-terminal nut",
      "5 N·m (44 lb-in)"
     ],
     [
      "Belt tensioner, 3.5/3.7",
      "25 N·m (18 lb-ft)"
     ],
     [
      "Belt tensioner, 5.0",
      "47 N·m (35 lb-ft)"
     ],
     [
      "6.2 tensioner and idler",
      "25 N·m (18 lb-ft)"
     ],
     [
      "5.0 late-build A/C belt tensioner and idler",
      "25 N·m (18 lb-ft)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-water-pump-35",
   "type": "diy",
   "title": "Water pump, 3.5 EcoBoost (spec table)",
   "summary": "Ford's table lists the pump, thermostat housing and crossover bolts as \"refer to procedure\", so no single number is given. Applies to: 2011-14, 2014 Workshop Manual (Ford PDF on a secondary host).",
   "conf": "verified",
   "src": [
    {
     "label": "2014 WSM 303-01A 3.5L GTDI",
     "url": "https://www.f150ecoboost.net/attachments/engine-3-5l-gtdi-pdf.187677/"
    }
   ],
   "steps": [
    {
     "text": "Coolant: Motorcraft Orange (see Maintenance)."
    },
    {
     "text": "5.0, 3.7, 6.2 and 11th-gen pump torques were not found on a Ford page."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "Pump pulley bolts",
      "24 N·m (18 lb-ft)"
     ],
     [
      "Oil pan drain plug",
      "27 N·m (20 lb-ft)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-brake-bleed-12",
   "type": "diy",
   "title": "Brake bleeding and fluid, 2011-14",
   "summary": "Pressure bleeding preferred. Applies to: 2011-14, 2014 Workshop Manual (Ford PDF on a secondary host).",
   "conf": "verified",
   "src": [
    {
     "label": "2014 WSM 206-00 Brake System General Information",
     "url": "https://www.f150ecoboost.net/attachments/brake-system-%E2%80%93-general-information-pdf.194078/"
    },
    {
     "label": "2014 F-150 Owner Guide (carmanual.org)",
     "url": "https://carmanual.org/OwnersManual/ford/2014_ford_f-150.pdf"
    }
   ],
   "steps": [
    {
     "text": "Fluid: Motorcraft DOT 3 (WSS-M6C62-A) or WSS-M6C65-A1; the 2014 Owner Guide calls for DOT 4 LV (PM-20). WSS-M6C65-A1 is the low-viscosity spec, so both are compatible; use DOT 4 LV if in doubt. System fill 1,420 ml (3.0 pt)."
    },
    {
     "text": "Pressure bleed at 30-50 psi (207-345 kPa) at the reservoir; follow Ford's wheel order graphic; crack each bleeder 180° until clear, bubble-free fluid flows."
    },
    {
     "text": "Trucks with rear integral parking-brake calipers: press and release the parking brake during the bleed."
    },
    {
     "text": "If a new ABS HCU is fitted, run the HCU bleed with a scan tool."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "Bleed screw",
      "10 N·m (89 lb-in)"
     ]
    ]
   },
   "parts": []
  }
 ],
 "tipsTitle": "Vehicle health tips",
 "tips": [
  {
   "text": "5.4 3V owners insist on Motorcraft oil filters: \"Motorcraft filters only, please.\" Their reason is the anti-drainback valve, since the phasers need oil pressure right at startup.",
   "source_url": "https://www.f150forum.com/f4/anyone-have-any-insane-high-mileage-advice-2004-2008-5-4-3v-f150-404589/",
   "source_name": "F150Forum: Anyone have any INSANE high mileage advice for the 2004-2008 5.4 3v f150?",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "Fit a real oil-pressure gauge on a high-mile 5.4 3V. One owner: \"factory guage is nothing more than a idiot light with a needle\", and these engines are weak in the oil pump department.",
   "source_url": "https://www.f150forum.com/f4/anyone-have-any-insane-high-mileage-advice-2004-2008-5-4-3v-f150-404589/",
   "source_name": "F150Forum: Anyone have any INSANE high mileage advice for the 2004-2008 5.4 3v f150?",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "Owners disagree on 5.4 3V oil. One says Motorcraft 5W-20 blend every 5k miles; another runs 5W-30 every 3-5k and credits it with quieting the phaser tick. Ford specifies 5W-20.",
   "source_url": "https://www.f150forum.com/f4/oil-maintenance-2006-v8-5-4l-ff-132470/",
   "source_name": "F150Forum: Oil maintenance on 2006 v8 5.4L FF",
   "confidence": "forum",
   "date_checked": "2026-10-11",
   "disputed": true
  },
  {
   "text": "Short trips in cold weather are hard on the 3V. The phasers run on oil through small passages, and short cold trips never give the PCV time to clear the moisture. One member's only preventive timing work before noises or codes is new VCT solenoids.",
   "source_url": "https://www.f150forum.com/f4/cam-phaser-preventative-measures-551106/",
   "source_name": "F150Forum: Cam phaser preventative measures?",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "6R80: a pan drop only takes about 7 qt of the 13.1 qt total, because the converter has no drain. On the dipstick, \"A\" is the cold range and \"B\" is full hot.",
   "source_url": "https://www.ford-trucks.com/forums/1332372-ford-6r80-6-speed-transmission-fluid-and-filter-change.html",
   "source_name": "Ford-Trucks.com: Ford 6R80 6 Speed Transmission Fluid and Filter Change",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "Ford's online schedule shows transmission and transfer-case service at 150,000 miles for a 2009 4.6 3V with the 6R80 under normal use. Owners who tow did drain-and-fills at 30k and 60k, and several distrust flushes.",
   "source_url": "https://www.f150forum.com/f38/maintenance-question-103553/",
   "source_name": "F150Forum: maintenance question (6R80)",
   "confidence": "forum",
   "date_checked": "2026-10-11",
   "disputed": true
  },
  {
   "text": "Rear diff fluid that is black at 25k is not automatically a problem: an owner notes that on a limited-slip axle it is the friction modifier that darkens it. Add friction modifier when refilling an LS axle.",
   "source_url": "https://www.f150forum.com/f38/maintenance-question-103553/",
   "source_name": "F150Forum: maintenance question (6R80)",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "3.5 EB with a catch can: empty it much more often in winter. One 2011 owner went from weekly to every 3 days in a Michigan November (18 oz in 240 miles).",
   "source_url": "https://www.f150ecoboost.net/threads/catch-cans-afe-bladerunner-and-intercooler-moisture.8006/",
   "source_name": "F150Ecoboost.net: Catch cans, aFe Bladerunner and intercooler moisture",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "5.0 at high mileage: for a 2013 at 325,000 km in Quebec, owners advise raising only the hot number (5W-30), not 10W-30, to keep cold-start flow for the cam phasers. A high-mileage formula is optional.",
   "source_url": "https://www.f150forum.com/f38/high-mileage-f150-5-0-oil-choice-505140/",
   "source_name": "F150Forum: High Mileage F150 5.0 Oil Choice",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "5.0 oil consumption check: a 2011 owner losing about 2 qt per 3-4k miles was told to pull the PCV hose at the driver-side valve-cover nipple; another owner found that hose \"coated with oil\". For scale, a 2011 5.0 at 126,500 miles uses about 1/2 qt per 1,000 miles on 5W-30.",
   "source_url": "https://www.f150forum.com/f38/2011-5-0-oil-consumption-fix-517372/",
   "source_name": "F150Forum: 2011 5.0 oil consumption fix?",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "09-14 rocker rust-proofing: peel the factory tape off the inner-rocker holes, rinse the rockers, fog them with Fluid Film (owners like the Pro gun with the 360 wand), then re-tape the holes. Leave the drain holes open. One owner did both sides in about an hour.",
   "source_url": "https://www.f150forum.com/f38/whats-best-way-coat-rockers-fender-wells-fluid-film-455885/",
   "source_name": "F150Forum: What's the best way to coat rockers/fender wells with fluid film?",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "Re-tape with ZIP, 3M flashing or Gorilla tape after flushing and filming the rockers. One owner checked months later and found the tape still in place and plenty of film still coating the inside.",
   "source_url": "https://www.f150forum.com/f38/cab-corner-rust-394887/index2/",
   "source_name": "F150Forum: Cab corner rust (page 2)",
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
    "Stock 2008 5.4 3V",
    "249 rwhp / 298 lb-ft",
    "Dynojet 224xLC, locked in 3rd, 93 octane. Others call that high: \"usually more in the 210-220/270-280 range\" or \"200-220 RWHP on a stock truck\". One suggests late-2008 heads; the poster credits intake and calibration changes",
    "forum"
   ],
   [
    "2007 (engine assumed 5.4), article quoted on FTE",
    "247 hp / 282 lb-ft stock → 261 hp / 285 lb-ft",
    "CAI, cat-back and Edge Evolution canned tune. Towing mode moved peak torque from 4,100 to 3,600 rpm",
    "forum"
   ],
   [
    "2011 5.0, stock with a custom tune",
    "320 rwhp",
    "60k miles; no torque figure (dyno not switched to rpm)",
    "forum"
   ],
   [
    "2003 5.4 2V (10th gen, context only)",
    "197.7 → 211.2 avg rwhp",
    "Cat-back, Superchips and an intake",
    "forum"
   ],
   [
    "3.5 EcoBoost",
    "n/a",
    "Edmunds, Cars.com and Hypertech sources timed out or returned 403; figures not repeated",
    "unconfirmed"
   ]
  ],
  "src": [
   {
    "label": "f150online 08 5.4 stock dyno",
    "url": "https://www.f150online.com/forums/2004-2008-f-150/370621-08-5-4-stock-dyno-numbers.html"
   },
   {
    "label": "ford-trucks.com dyno thread",
    "url": "https://www.ford-trucks.com/forums/651261-dyno-results-f150-cai-catback-tuner.html"
   },
   {
    "label": "f150forum 2011 5.0 tune",
    "url": "https://www.f150forum.com/f2/2011-f150-5-0-custom-smp-tune-results-inside-295552/"
   },
   {
    "label": "f150online 2003 dyno",
    "url": "https://www.f150online.com/forums/v8-engines/110664-dyno-d-truck-today.html"
   }
  ],
  "rowSrc": [
   "https://www.f150online.com/forums/2004-2008-f-150/370621-08-5-4-stock-dyno-numbers.html",
   "https://www.ford-trucks.com/forums/651261-dyno-results-f150-cai-catback-tuner.html",
   "https://www.f150forum.com/f2/2011-f150-5-0-custom-smp-tune-results-inside-295552/",
   "https://www.f150online.com/forums/v8-engines/110664-dyno-d-truck-today.html",
   ""
  ],
  "disputedRows": [
   0,
   1
  ]
 },
 "videos": [
  {
   "title": "Ford 5.4L 3v Timing Kit Choices: This is Why You NEVER Want to Use Aftermarket Camshaft Phasers!",
   "channel": "FordTechMakuloco",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=1RPGnbv4Wy0",
   "note": "The title is an opinion that aftermarket phasers are bad. A claim, not verified."
  },
  {
   "title": "2004-2010 Ford F150 Cam Phasers and Complete Timing Kit",
   "channel": "Valley Mobile Automotive",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=30e48BjPRvA",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "2004-2010 Ford F150 Phaser Replacement Without Removing The Timing (How To)",
   "channel": "Valley Mobile Automotive",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=d7CSXSWD_os",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "Ford 4.6L 3v & 5.4L 3v Broken Spark Plug Removal",
   "channel": "FordTechMakuloco",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=BSY9iBheBXI",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "How To Never Break A 5.4L 3V Ford Engine Spark Plug Again",
   "channel": "Flying Wrenches",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=5w653XDtNuY",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "IWE Check Valve Replacement On a Ford F150",
   "channel": "DCF Garage",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=rGwEMsriueU",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "F-150 Grinding Noise? How To FIX",
   "channel": "Flying Wrenches",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=WvZB4EEMTWY",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "FORD F150 3.5 Ecoboost Timing Chain & Cam Phaser Install: Torque Specs!",
   "channel": "MechanicGuru",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=sDQsDUtCx38",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "3.5l ECOBOOST Timing Chain Replacement MADE EASY",
   "channel": "Sell Those Flipping Cars",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=7tOWgH2P5XY",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "How to Install Leveling Kit 2009-2014 Ford F-150",
   "channel": "TRQ",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=R-FikPhxWLc",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "Don't lift the front end of your f-150 w/ spacers, without changing other things, or UCA will hit",
   "channel": "Mario Salas",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=Ps5ZUBXdKfk",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "Everything needed(ish) to Coyote Swap the 2004-2008 Ford F150",
   "channel": "Matt Soppa",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=13mYs6xUZb4",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "Thinking of Coyote Swapping Your 11th Gen (2004-08) Ford F150?",
   "channel": "3V Johnny",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=vOjqZXILGIY",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "I pick up the donor engine for the 2004-2008 F150 Coyote Swap!",
   "channel": "Matt Soppa",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=temYklc6Su4",
   "note": "Title and channel confirmed; not watched."
  }
 ],
 "unknowns": [
  "Engine torque: 4.2 V6, 4.6 2V, 3.7 and 6.2 internals. The 5.4 3V table is from a third-party WSM reproduction with no year; charm.li wouldn't load to cross-check.",
  "Year coverage: 2004, 2005 and 2012 owner's guide PDFs on carmanual.org return an HTML page, not a manual. 2004-08 data stands on the 2007 guide and 2009-14 on the 2014 guide. The 2004-08 and 2009-13 maintenance schedules are not on a Ford page found online. Some 2006/2008 axle capacities weren't captured; the 2009-10 coolant layout needs a page check.",
  "Codes: 2004-08 VIN engine and axle codes from a Ford page; front-differential identification; paint codes for years other than 2014; the DTC list for recall 19V-075 (2011-13).",
  "Problems: no 2011-14 5.0 oil-consumption TSB found; 04-08 heater core and rear main, and EPAS faults, are still open.",
  "Procedures not found on a Ford page: fuel pump (sender) removal (WSM 310-01), blend-door actuator steps and torque (WSM 412), water pump torques for 5.0/3.7/6.2 and 11th gen (3.5 EB pump bolts are \"refer to procedure\"), and 11th-gen hub, ball-joint, starter and alternator torques (forum figures only).",
  "Wheels: the 12th-gen HDPP axle size and 9.75 in capacity; F-150-specific TPMS sensor type by year (only a Ford-wide source); 2004-05 TPMS; 2-3\" lift tables for 09-14; 09-14 4/6 drops (no kit found); 4WD lowering.",
  "12th-gen rear U-bolt torque (\"refer to procedure\", value not extracted).",
  "Parts: the 09-14 Raptor-style grille and Anzo 311024 tail-light prices (Cloudflare); Fab Fours bumper prices; Diablo/Hypertech prices for 04-08; BAK cjponyparts page (403). Repair catalog parts list RockAuto only.",
  "Dyno/MPG: EcoBoost dyno figures (Edmunds/Cars.com/Hypertech wouldn't load); Fuelly aggregates; Reddit (not attempted).",
  "Swaps: EcoBoost or 6.2 swaps, Raptor-style long travel, 9.75 axle swaps, regear costs, the 13-14 HID harness part and price, and the Juggernaut 09-10 Coyote harness (not opened). 12th-gen rear brake type by trim wasn't checked."
 ],
 "sellers": [],
 "partCategories": [
  "Suspension & Stance",
  "Exhaust & Headers",
  "Intake & Tuning",
  "Lighting",
  "Exterior",
  "Bed & Tonneau",
  "Interior",
  "Swap Parts",
  "OEM Repair Parts",
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
   "id": "lev-rc570",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "2.5\" leveling kit",
   "brand": "Rough Country",
   "part_number": "570",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "No 2004 Heritage or HDPP"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 49.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/ford-leveling-lift-kit-570",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 49.95,
    "url": "https://www.roughcountry.com/product/ford-leveling-lift-kit-570",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The 04-08 spacer bolt pattern looks symmetrical but owners say \"it only actually fit in 1 specific way\". If the strut sits crooked or the lower mount will not line up, the spacer is clocked wrong: pull it and refit, do not pry it in.",
     "source_url": "https://www.f150forum.com/f4/leveling-kit-install-help-167497/index2/",
     "source_name": "F150Forum: Leveling kit install HELP! (page 2, 2004 FX4)",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On 4WD trucks, Rough Country says to keep vacuum on the IWE and confirm at least 15.5 mm (0.61 in) of CV shaft thread sticks out through the hub bearing before the axle nut goes on. Then release vacuum and check that the hub and CV turn together.",
     "source_url": "https://www.tdotperformance.ca/media/instructions/roughcountry-921570s00.pdf",
     "source_name": "Rough Country: 2004-08 Ford F150 2.5\" suspension kit instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "lev-rc568",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "2\" aluminum leveling kit",
   "brand": "Rough Country",
   "part_number": "568",
   "fitment": {
    "years": "2009–13",
    "models": [
     "F-150"
    ],
    "drive": [
     "2WD",
     "4WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "No Raptor or HDPP. 568RED is $119.95"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 109.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/configurable/ford-leveling-lift-kit-568c",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 109.95,
    "url": "https://www.roughcountry.com/product/configurable/ford-leveling-lift-kit-568c",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The kit tool list calls for a 29 mm socket, but one installer says \"29mm Socket - Should be 30mm for the lower strut NUT side\". He could only get the longer strut back in after loosening the CV axle at the knuckle, which the instructions leave out. Rough Country told him they would fix both.",
     "source_url": "https://www.f150forum.com/f2/rough-country-2-inch-leveling-kit-instructions-info-370918/",
     "source_name": "F150Forum: Rough Country 2 Inch Leveling Kit Instructions *Info*",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On 09-13 the spacers are side-specific: A goes driver side and B passenger side, RC logo facing out on both, and 30 lb-ft for the spacer nuts and tower nuts. On 2011-13 trucks, unplug the EPAS connectors by the front diff before starting. RC warns that skipping this \"may result in damage to the EPAS module\".",
     "source_url": "https://sadlerpowertrain.com/content/pdf/roughcountry/92568000.pdf",
     "source_name": "Rough Country: 2009-13 Ford F150 2\" suspension kit instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "lift-rc57530",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "6\" suspension lift kit",
   "brand": "Rough Country",
   "part_number": "57530",
   "fitment": {
    "years": "2011–13",
    "models": [
     "F-150"
    ],
    "drive": [
     "4WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "No HDPP or Raptor. Minor cutting and drilling"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 1199.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/configurable/ford-suspension-lift-kit-558c",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Base price; N3 struts $1,549.95; Vertex $3,249.95"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 1199.95,
    "url": "https://www.roughcountry.com/product/configurable/ford-suspension-lift-kit-558c",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "This 6\" kit keeps the factory struts with front spacers. An owner who bought it for $1,220 shipped (2014) was pointed toward extended Bilstein or Fox struts to replace the spacers. Another member had hardware missing from both lifts he ordered: Fabtech cam bolts, which he had to rebuy for $200, and an RCX bag that was overnighted. Inventory the bags first.",
     "source_url": "https://www.f150online.com/forums/suspension/495928-rough-country-6-installed-long-review.html",
     "source_name": "F150online: Rough Country 6\" Installed! (a long review)",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "lift-rc54720",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "4\" suspension lift kit",
   "brand": "Rough Country",
   "part_number": "54720",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
    ],
    "drive": [
     "4WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Not HDPP (7-lug) or 2004 Heritage. Page description mentions \"6-inch\" and \"up to 35-inch tires\", contradicting the title"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 1099.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/ford-suspension-lift-kit-577-20",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 1099.95,
    "url": "https://www.roughcountry.com/product/ford-suspension-lift-kit-577-20",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "low-belltech-981",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "2\"/3\" front, 4\" rear lowering kit, no shocks",
   "brand": "Belltech",
   "part_number": "981",
   "fitment": {
    "years": "2009–13",
    "models": [
     "F-150"
    ],
    "drive": [
     "2WD"
    ],
    "cab": "ext/quad cab short bed",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Belltech (manufacturer)",
     "price": 656,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.belltech.com/products/lowering-kit-w-o-shocks-981/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "981SP with SP shocks $1,099.00"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Belltech (manufacturer)",
    "price": 656,
    "url": "https://www.belltech.com/products/lowering-kit-w-o-shocks-981/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "One installer saw the flip-kit U-bolts bow outward at the 100 lb-ft spec. Thread advice: set them perpendicular to the axle and snug each one, then go 25, 50, 75 and 100 lb-ft in a cross pattern. Belltech sent new U-bolts and plates; he stopped at about 85-90 lb-ft when the plate started to bend again.",
     "source_url": "https://www.f150forum.com/f66/just-installed-my-belltech-2-4-lowering-kit-456348/",
     "source_name": "F150Forum: Just installed my Belltech 2/4 lowering kit and.....",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "low-belltech-979",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "2\"/3\" front, 5.5\" rear lowering kit, no shocks",
   "brand": "Belltech",
   "part_number": "979",
   "fitment": {
    "years": "2009–13",
    "models": [
     "F-150"
    ],
    "drive": [
     "2WD"
    ],
    "cab": "ext/quad cab short bed",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Belltech (manufacturer)",
     "price": 686,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.belltech.com/products/lowering-kit-w-o-shocks-979/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Belltech (manufacturer)",
    "price": 686,
    "url": "https://www.belltech.com/products/lowering-kit-w-o-shocks-979/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "low-djm-3205",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "3/5 complete lowering kit with shocks",
   "brand": "DJM",
   "part_number": "DJM3205-3/5",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
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
     "seller": "DJM Suspension (manufacturer)",
     "price": 966.1,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://djmsuspension.com/product/2004-2008-ford-f-150-2wd-3-inch-front-5-inch-rear-complete-lowering-kit-shocks-included/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Page price via JSON-LD; a search summary said $894.54"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "DJM Suspension (manufacturer)",
    "price": 966.1,
    "url": "https://djmsuspension.com/product/2004-2008-ford-f-150-2wd-3-inch-front-5-inch-rear-complete-lowering-kit-shocks-included/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "low-trekline-4-6",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "4/6 V8 drop kit (spindles, coils, rear flip, shocks)",
   "brand": "Trekline",
   "part_number": "1900DR10071",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
    ],
    "drive": [
     "2WD"
    ],
    "cab": "",
    "engines": [
     "V8"
    ],
    "position": "",
    "notes": "2\" drop spindles, 2\" V8 front drop coils, 6\" rear flip and drop shocks. Same page lists V6 4/6 and V8 5/6 at the same price"
   },
   "offers": [
    {
     "seller": "Trekline Motorsports (manufacturer)",
     "price": 653.79,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://treklinemotorsports.com/1900dr10071/2004-2008-ford-f-150-v8-2wd-4-6-drop-lowering-kit-spindles-shackles-shocks/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Trekline Motorsports (manufacturer)",
    "price": 653.79,
    "url": "https://treklinemotorsports.com/1900dr10071/2004-2008-ford-f-150-v8-2wd-4-6-drop-lowering-kit-spindles-shackles-shocks/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "low-mcgaughys-70029",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "2/4 lowering kit",
   "brand": "McGaughys",
   "part_number": "70029",
   "fitment": {
    "years": "2009–14",
    "models": [
     "F-150"
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
     "seller": "McGaughys (manufacturer)",
     "price": 586,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://mcgaughys.com/products/2-4-inch-lowering-kit-2009-2014-ford-f150-2wd",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "McGaughys (manufacturer)",
    "price": 586,
    "url": "https://mcgaughys.com/products/2-4-inch-lowering-kit-2009-2014-ford-f150-2wd",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "low-belltech-6445",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "4\" rear flip kit",
   "brand": "Belltech",
   "part_number": "6445",
   "fitment": {
    "years": "2009–13",
    "models": [
     "F-150"
    ],
    "drive": [
     "2WD",
     "4WD"
    ],
    "cab": "regular cab short bed only",
    "engines": [],
    "position": "",
    "notes": "C-section not included"
   },
   "offers": [
    {
     "seller": "Belltech (manufacturer)",
     "price": 389,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.belltech.com/products/flip-kit-4-inch-drop-6445/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Belltech (manufacturer)",
    "price": 389,
    "url": "https://www.belltech.com/products/flip-kit-4-inch-drop-6445/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "low-djm-4rear",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "4\" rear lowering kit",
   "brand": "DJM",
   "part_number": "n/s",
   "fitment": {
    "years": "2009–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "DJM Suspension (manufacturer)",
     "price": 395.55,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://djmsuspension.com/product/2009-2014-f150-4-inch-rear-lowering-kit/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "DJM Suspension (manufacturer)",
    "price": 395.55,
    "url": "https://djmsuspension.com/product/2009-2014-f150-4-inch-rear-lowering-kit/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "shocks-bilstein-5100-0913",
   "platform": "F-150 2004–2014",
   "category": "Suspension & Stance",
   "name": "5100 monotube shock set",
   "brand": "Bilstein",
   "part_number": "5100 set",
   "fitment": {
    "years": "2009–13",
    "models": [
     "F-150"
    ],
    "drive": [
     "4WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "ShockSurplus",
     "price": 596.51,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.shocksurplus.com/products/bilstein-5100-monotube-gas-shocks-set-2009-2013-ford-f150-4wd",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "Bilstein 24-186735 is a GM part and is excluded.",
   "best_offer": {
    "seller": "ShockSurplus",
    "price": 596.51,
    "url": "https://www.shocksurplus.com/products/bilstein-5100-monotube-gas-shocks-set-2009-2013-ford-f150-4wd",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Owners list the four ring grooves as 0, 3/4, 1 1/2 and 2 1/4 in. They disagree on what each one gives: one says 1.5 in of spacer works out to about 2 in of lift (level for most), and several on the top groove ended up slightly nose-high.",
     "source_url": "https://www.f150forum.com/f38/bilstein-5100-4x4-top-setting-questions-221871/",
     "source_name": "F150Forum: Bilstein 5100 4x4 Top Setting Questions",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    },
    {
     "text": "Bilstein: the circlip must sit fully in its groove (you should be able to spin it by hand), and the spring-seat adapter goes on tapered end up only. \"Improper installation will cause permanent damage to the shock.\"",
     "source_url": "https://bilstein.blob.core.windows.net/images/Media/E-WM05-0000008.pdf",
     "source_name": "Bilstein: B6 4600 / B8 5100 mounting instruction (F150)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The DIY thread uses two pairs of strut-type spring compressors (not coil-spring compressors) plus a 6 mm hex to hold the rod, and re-checks every nut after 75-100 miles. The author chose the 1.5 in groove and kept about 3/4 in of rake.",
     "source_url": "https://www.f150forum.com/f76/definitive-bilstein-5100-diy-install-thread-202907/",
     "source_name": "F150Forum: The Definitive Bilstein 5100 DIY Install Thread",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "exh-flowmaster-17418",
   "platform": "F-150 2004–2014",
   "category": "Exhaust & Headers",
   "name": "Force II cat-back (2.5\" duals, DOR/DOS)",
   "brand": "Flowmaster",
   "part_number": "17418",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "4.6",
     "5.4"
    ],
    "position": "",
    "notes": "All wheelbases"
   },
   "offers": [
    {
     "seller": "Flowmaster (manufacturer)",
     "price": 949.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.flowmastermufflers.com/products/exhaust/exhaust_systems/cat-back/parts/17418",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Flowmaster (manufacturer)",
    "price": 949.95,
    "url": "https://www.flowmastermufflers.com/products/exhaust/exhaust_systems/cat-back/parts/17418",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "exh-borla-140417",
   "platform": "F-150 2004–2014",
   "category": "Exhaust & Headers",
   "name": "ATAK cat-back (3\" into dual 2.25\")",
   "brand": "Borla",
   "part_number": "140417",
   "fitment": {
    "years": "2011–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.0"
    ],
    "position": "",
    "notes": "144.5\" WB; 156.5\" needs adapter 60554"
   },
   "offers": [
    {
     "seller": "Borla (manufacturer)",
     "price": 1686.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.borla.com/products/ford-f-150-cat-back-exhaust-system-140417",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Borla (manufacturer)",
    "price": 1686.99,
    "url": "https://www.borla.com/products/ford-f-150-cat-back-exhaust-system-140417",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A 2014 5.0 SuperCrew owner on this exact part number: \"You don't need to move your spare. Be ready, It's LOUD.\" Borla's S-Type adds a resonator to the same layout, so a too-loud ATAK can take a resonator.",
     "source_url": "https://www.f150forum.com/f38/borla-atak-140417-a-281582/",
     "source_name": "F150Forum: Borla ATAK 140417",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "hdr-jba-1676s",
   "platform": "F-150 2004–2014",
   "category": "Exhaust & Headers",
   "name": "Shorty headers, 1-5/8\" raw 409SS",
   "brand": "JBA",
   "part_number": "1676S",
   "fitment": {
    "years": "2004–10",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.4 3V"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Elite Race Fab",
     "price": 768.64,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://eliteracefab.com/products/jba-04-10-ford-f-series-5-4l-3v-1-5-8in-primary-raw-409ss-cat4ward-header",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    },
    {
     "seller": "More Power Tuning",
     "price": 768.64,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://morepowertuning.com/products/jba-1676s-04-10-ford-f-series-5-4l-3v-1-5-8in-primary-raw-409ss-cat4ward-header",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Elite Race Fab",
    "price": 768.64,
    "url": "https://eliteracefab.com/products/jba-04-10-ford-f-series-5-4l-3v-1-5-8in-primary-raw-409ss-cat4ward-header",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Check the flanges with a straightedge before fitting. One 5.4 3V owner found two driver-side ports that \"isn't machined to sit flush\" after install; a senior member suggests having a machine shop mill them flat.",
     "source_url": "https://www.f150forum.com/f4/jba-shortys-5-4-3v-machined-surface-quality-control-488383/",
     "source_name": "F150Forum: JBA Shortys 5.4 3v machined surface quality control?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "If the header hangs up above the starter when going in from below, pull the motor-mount bolt and rock the engine over with a big pry bar. One installer says it \"greatly increased clearence\".",
     "source_url": "https://www.f150forum.com/f6/jba-headers-install-231923/",
     "source_name": "F150Forum: JBA Headers install",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "intake-kn-57-2556",
   "platform": "F-150 2004–2014",
   "category": "Intake & Tuning",
   "name": "Performance intake kit",
   "brand": "K&N",
   "part_number": "57-2556",
   "fitment": {
    "years": "2004 (per title)",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.4"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Apocalypse Performance",
     "price": 367.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://apocalypseperformance.com/k-n-04-ford-f150-v8-5-4l-performance-intake-kit-57-2556/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "K&N 63-2581 is a 2011–13 5.0 part, not 04–08. A tuner on FTE warns some 5.4 3V intakes lose power because of the MAF position (forum-reported).",
   "best_offer": {
    "seller": "Apocalypse Performance",
    "price": 367.99,
    "url": "https://apocalypseperformance.com/k-n-04-ford-f150-v8-5-4l-performance-intake-kit-57-2556/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Avoid this intake on a Roush-supercharged 5.4. On a 2008 Foose it set the check-engine light and ran badly within minutes, and was fine again with the stock intake back on. The owner notes the K&N tube is 3 in throughout, while stock goes from 3 in at the throttle body to 4 in at the MAF.",
     "source_url": "https://www.f150forum.com/f4/cai-issues-111211/",
     "source_name": "F150Forum: CAI Issues",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Owners disagree on lean running with a K&N on a stock 5.4. An 04 FX4 owner worried about it after another forum flagged 04-08 trucks; an 07 owner says his K&N \"never had any lean issues\" and suggests pairing it with a custom tune.",
     "source_url": "https://www.f150forum.com/f4/5-4-lean-issues-aftermarket-cai-k-n-99653/",
     "source_name": "F150Forum: 5.4 \"Lean Issues\" With aftermarket CAI (K&N)",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    },
    {
     "text": "A tuner warns some 5.4 3V intakes lose power because of where they put the MAF, and says 20+ hp is possible on 87 with just a tune. Tune first; check dyno results for the specific intake.",
     "source_url": "https://www.ford-trucks.com/forums/651261-dyno-results-f150-cai-catback-tuner.html",
     "source_name": "Ford-Trucks.com: Dyno results F150 CAI, catback, tuner",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tune-sct-7015-50",
   "platform": "F-150 2004–2014",
   "category": "Intake & Tuning",
   "name": "X4/SF4 power flash tuner",
   "brand": "SCT",
   "part_number": "7015",
   "fitment": {
    "years": "2011–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.0"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 419,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/sct-sf4-x4-power-flash-tuner-1114-50.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 419,
    "url": "https://www.americantrucks.com/sct-sf4-x4-power-flash-tuner-1114-50.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "SCT says to return the truck to stock before any dealer visit or device update; it \"prevents the X4 from becoming locked if the dealer updates the PCM\". The stock file stays on the handheld until you return to stock.",
     "source_url": "https://guides.americanmuscle.com/407064-manu.pdf",
     "source_name": "SCT: X4 7015 user manual",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A 4.6 owner had a flash finish suspiciously fast with the cooling fan still running. The truck would not start and the X4 could not return to stock, so SCT had to copy the stock file off remotely and build a recovery tune. Owners say to pull the fan fuse during flashes and save the stock file to a PC first.",
     "source_url": "https://www.f150forum.com/f38/my-experience-bad-flash-no-start-my-sct-x4-346243/",
     "source_name": "F150Forum: My experience with a bad flash and no start from my sct x4",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The X4 is married to one VIN while a tune is loaded, so you cannot tune a second truck until the first is returned to stock. Owners in a 2011 5.0 thread say a used unit that is still married is useless to a new buyer.",
     "source_url": "https://www.f150forum.com/f38/sct-x4-two-2011-f150-5-0s-375525/",
     "source_name": "F150Forum: SCT X4 for Two 2011 F150 5.0s",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "After loading a tune you do not need to reload it to relearn: use the X4 \"Clear KAM\" function, or disconnect the battery for 15 minutes (2014 5.0 owner thread).",
     "source_url": "https://www.f150forum.com/f38/sct-4-tuner-questions-432019/",
     "source_name": "F150Forum: SCT 4 - Tuner Questions",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tune-sct-7015-9708",
   "platform": "F-150 2004–2014",
   "category": "Intake & Tuning",
   "name": "X4/SF4 power flash tuner",
   "brand": "SCT",
   "part_number": "7015",
   "fitment": {
    "years": "1997–08",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 419,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/sct-sf4-x4-f150-tuner-9714.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 419,
    "url": "https://www.americantrucks.com/sct-sf4-x4-f150-tuner-9714.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "SCT says to return the truck to stock before any dealer visit or device update; it \"prevents the X4 from becoming locked if the dealer updates the PCM\". The stock file stays on the handheld until you return to stock.",
     "source_url": "https://guides.americanmuscle.com/407064-manu.pdf",
     "source_name": "SCT: X4 7015 user manual",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A 4.6 owner had a flash finish suspiciously fast with the cooling fan still running. The truck would not start and the X4 could not return to stock, so SCT had to copy the stock file off remotely and build a recovery tune. Owners say to pull the fan fuse during flashes and save the stock file to a PC first.",
     "source_url": "https://www.f150forum.com/f38/my-experience-bad-flash-no-start-my-sct-x4-346243/",
     "source_name": "F150Forum: My experience with a bad flash and no start from my sct x4",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The X4 is married to one VIN while a tune is loaded, so you cannot tune a second truck until the first is returned to stock. Owners in a 2011 5.0 thread say a used unit that is still married is useless to a new buyer.",
     "source_url": "https://www.f150forum.com/f38/sct-x4-two-2011-f150-5-0s-375525/",
     "source_name": "F150Forum: SCT X4 for Two 2011 F150 5.0s",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "After loading a tune you do not need to reload it to relearn: use the X4 \"Clear KAM\" function, or disconnect the battery for 15 minutes (2014 5.0 owner thread).",
     "source_url": "https://www.f150forum.com/f38/sct-4-tuner-questions-432019/",
     "source_name": "F150Forum: SCT 4 - Tuner Questions",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tune-unleashed-t537119",
   "platform": "F-150 2004–2014",
   "category": "Intake & Tuning",
   "name": "SF4/X4 with custom tunes",
   "brand": "Unleashed Tuning",
   "part_number": "T537119",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.4"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 668.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/unleashed-tuning-sf4-x4-power-flash-tuner-w-custom-tunes-0408-54l.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Range shown: $668.99–$768.99; low end used for totals"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 668.99,
    "url": "https://www.americantrucks.com/unleashed-tuning-sf4-x4-power-flash-tuner-w-custom-tunes-0408-54l.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Same lesson for any custom 3V tune: 5 Star told a 4.6 owner they keep low-end timing conservative because the engine \"is prone to detonation on the lower end\". Ask the tuner to revise the file rather than adding timing through the handheld's user options.",
     "source_url": "https://www.f150forum.com/f38/my-experience-bad-flash-no-start-my-sct-x4-346243/",
     "source_name": "F150Forum: My experience with a bad flash and no start from my sct x4",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tune-5star-rtd",
   "platform": "F-150 2004–2014",
   "category": "Intake & Tuning",
   "name": "Custom tunes with RTD device",
   "brand": "5 Star",
   "part_number": "n/s",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.4"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Beefcake Racing",
     "price": 599.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.beefcakeracing.com/5star-0408f15054-rtd/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Beefcake Racing",
    "price": 599.99,
    "url": "https://www.beefcakeracing.com/5star-0408f15054-rtd/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "5 Star told a 4.6 owner the engine \"is prone to detonation on the lower end so they don't add as much\" low-rpm timing. The owner's problems began after he added timing through the X4 user-adjustable options; 5 Star then built him a revised 93 file instead.",
     "source_url": "https://www.f150forum.com/f38/my-experience-bad-flash-no-start-my-sct-x4-346243/",
     "source_name": "F150Forum: My experience with a bad flash and no start from my sct x4",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "light-spyder-hl",
   "platform": "F-150 2004–2014",
   "category": "Lighting",
   "name": "Projector headlights, LED halo, black (halogen models)",
   "brand": "Spyder",
   "part_number": "PRO-YD-FF15009-HL-BK",
   "fitment": {
    "years": "2009–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "eudmautosports",
     "price": 283.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.eudmautosports.com/products/spyder-ford-f150-09-14-projector-headlights-halogen-model-led-halo-led-blk-pro-yd-ff15009-hl-bk",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "eudmautosports",
    "price": 283.99,
    "url": "https://www.eudmautosports.com/products/spyder-ford-f150-09-14-projector-headlights-halogen-model-led-halo-led-blk-pro-yd-ff15009-hl-bk",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Seal the lamps before install. One owner ran all-purpose silicone, let it cure 24 hours, and reports \"ZERO moisture problems\" after nearly two years. Another who skipped it got moisture in one lamp and says to do it up front.",
     "source_url": "https://www.f150forum.com/f4/spyder-headlights-249945/",
     "source_name": "F150Forum: Spyder Headlights",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The LED-halo version still uses a halogen H11 projector that one reviewer calls \"okay, but not of high quality\". He suggests a Retrofit Source replacement projector for HID output.",
     "source_url": "https://www.f150forum.com/f38/install-review-sypder-halo-projector-headlights-377104/",
     "source_name": "F150Forum: Install & Review: Sypder Halo Projector Headlights",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "light-anzo-111298",
   "platform": "F-150 2004–2014",
   "category": "Lighting",
   "name": "Projector headlights, CCFL halo, black",
   "brand": "Anzo",
   "part_number": "111298",
   "fitment": {
    "years": "2009–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "goturbo",
     "price": 449.13,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://goturbo.net/anz111298-anzo-2009-2014-ford-f-150-projector-headlights-w-halo-black-ccfl-g2-111298",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Page title price"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "goturbo",
    "price": 449.13,
    "url": "https://goturbo.net/anz111298-anzo-2009-2014-ford-f-150-projector-headlights-w-halo-black-ccfl-g2-111298",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "tail-spyder-5003249",
   "platform": "F-150 2004–2014",
   "category": "Lighting",
   "name": "LED tail lights, black (stock bulbs)",
   "brand": "Spyder",
   "part_number": "5003249",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Styleside; no Heritage or SVT"
   },
   "offers": [
    {
     "seller": "SEmotors",
     "price": 229,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://semotors.com/products/spyder-ford-04-08-f150-styleside-led-tail-lights-black",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "Spyder's own page showed $0 in its data, so no maker price.",
   "best_offer": {
    "seller": "SEmotors",
    "price": 229,
    "url": "https://semotors.com/products/spyder-ford-04-08-f150-styleside-led-tail-lights-black",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "bumper-ranchhand-summit",
   "platform": "F-150 2004–2014",
   "category": "Exterior",
   "name": "Summit front bumper",
   "brand": "Ranch Hand",
   "part_number": "FSF09HBL1",
   "fitment": {
    "years": "2009–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "truckbedcentral",
     "price": 1744.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://truckbedcentral.com/products/ranch-hand-summit-front-bumper-for-2009-2014-ford-f-150-fsf09hbl1",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    },
    {
     "seller": "bumperstock",
     "price": 1867.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://bumperstock.com/products/ranch-hand-fsf09hbl1-ford-f150-2009-2014-summit-front-bumper",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "Not \"FSF091BL1\".",
   "best_offer": {
    "seller": "truckbedcentral",
    "price": 1744.95,
    "url": "https://truckbedcentral.com/products/ranch-hand-summit-front-bumper-for-2009-2014-ford-f-150-fsf09hbl1",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A 2011 5.0 4x4 owner measured no drop at the wheel-well center after fitting a Summit. Ranch Hand quoted a 2014 owner about 180 lb added to the front end.",
     "source_url": "https://www.f150forum.com/f38/ranch-hand-front-replacement-bumper-325009/",
     "source_name": "F150Forum: Ranch Hand front replacement bumper??",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A reply in a 2014 owner's thread passes on that the heavier Ranch Hand front bumper is not a good idea on a 4x2, only on a 4x4. That is secondhand, so call Ranch Hand before fitting one to a 2WD.",
     "source_url": "https://www.f150forum.com/f7/summit-ranch-hand-bumper-replacement-466525/",
     "source_name": "F150Forum: Summit Ranch Hand Bumper Replacement",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "grille-raptor-0408",
   "platform": "F-150 2004–2014",
   "category": "Exterior",
   "name": "Raptor-style upper replacement grille, gloss black",
   "brand": "n/s",
   "part_number": "HG-F15004JM-R-RS (from URL)",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 139.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/f150-raptor-style-uppler-replacement-grille-gloss-black-hg-f15004jm-r-rs.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 139.99,
    "url": "https://www.americantrucks.com/f150-raptor-style-uppler-replacement-grille-gloss-black-hg-f15004jm-r-rs.html",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "tonneau-bakflip-mx4",
   "platform": "F-150 2004–2014",
   "category": "Bed & Tonneau",
   "name": "BAKFlip MX4 hard folding tonneau",
   "brand": "BAK",
   "part_number": "n/s",
   "fitment": {
    "years": "2004–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Styleside 5.5'/6.5'"
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 1199.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/bakdustries-bakflip-mx4-folding-tonneau-cover-0414-styleside-w-55-ft-65-ft-bed.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 1199.99,
    "url": "https://www.americantrucks.com/bakdustries-bakflip-mx4-folding-tonneau-cover-0414-styleside-w-55-ft-65-ft-bed.html",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "tonneau-truxport",
   "platform": "F-150 2004–2014",
   "category": "Bed & Tonneau",
   "name": "TruXport roll-up tonneau, 8 ft bed",
   "brand": "TruXedo",
   "part_number": "n/s",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "8 ft bed"
   },
   "offers": [
    {
     "seller": "Stage 3 Motorsports",
     "price": 379.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.stage3motorsports.com/278601-04-08-f150-8ft-bed-truxedo-truxport-tonneau.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Stage 3 Motorsports",
    "price": 379.99,
    "url": "https://www.stage3motorsports.com/278601-04-08-f150-8ft-bed-truxedo-truxport-tonneau.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On the TruXport, tension adjusts at the tailgate end, not at the front crossmember like the Lo Pro, and you may need a thin-wall socket to reach the nut. A Lo Pro owner whose cover kept detaching in crosswinds fixed it by reversing the hook-side Velcro strip. Truck year is not stated; the cover design is the same.",
     "source_url": "https://www.f150forum.com/f2/how-tighten-truxedo-tonneau-cover-574713/",
     "source_name": "F150Forum: How to tighten a Truxedo tonneau cover",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "int-wt-441793",
   "platform": "F-150 2004–2014",
   "category": "Interior",
   "name": "Rear FloorLiner",
   "brand": "WeatherTech",
   "part_number": "441793",
   "fitment": {
    "years": "2009–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "SuperCrew",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Dirt Masters",
     "price": 121.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.dirtmasters.com/products/weathertech-rear-floorliner-2009-2014-ford-f-150-supercrew",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Dirt Masters",
    "price": 121.95,
    "url": "https://www.dirtmasters.com/products/weathertech-rear-floorliner-2009-2014-ford-f-150-supercrew",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "int-wt-446111",
   "platform": "F-150 2004–2014",
   "category": "Interior",
   "name": "Front FloorLiner",
   "brand": "WeatherTech",
   "part_number": "446111",
   "fitment": {
    "years": "2009–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Dirt Masters",
     "price": 133.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.dirtmasters.com/products/weathertech-446111-front-floorliner-2009-2014-ford-f-150",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Dirt Masters",
    "price": 133.95,
    "url": "https://www.dirtmasters.com/products/weathertech-446111-front-floorliner-2009-2014-ford-f-150",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "int-wt-t527360",
   "platform": "F-150 2004–2014",
   "category": "Interior",
   "name": "Front over-the-hump + rear FloorLiner set",
   "brand": "WeatherTech",
   "part_number": "T527360",
   "fitment": {
    "years": "2009–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "SuperCab/SuperCrew",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 251.9,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/weathertech-floorliners-overhump-black-0914.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 251.9,
    "url": "https://www.americantrucks.com/weathertech-floorliners-overhump-black-0914.html",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "int-katzkin",
   "platform": "F-150 2004–2014",
   "category": "Interior",
   "name": "Leather seat kit",
   "brand": "Katzkin",
   "part_number": "n/s",
   "fitment": {
    "years": "2009–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "Crew Cab",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "loweredf150",
     "price": 1595,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.loweredf150.com/products/katzkin-leather-kits-ford-f150-09-14-crew-cab",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "loweredf150",
    "price": 1595,
    "url": "https://www.loweredf150.com/products/katzkin-leather-kits-ford-f150-09-14-crew-cab",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "swap-mim-6r80-harness",
   "platform": "F-150 2004–2014",
   "category": "Swap Parts",
   "name": "04–08 6R80 swap conversion harness",
   "brand": "Make It Modular",
   "part_number": "n/s",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Make It Modular (manufacturer)",
     "price": 1200,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://make-it-modular.com/products/2004-2008-f150-6r80-swap-conversion-harness",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Make It Modular (manufacturer)",
    "price": 1200,
    "url": "https://make-it-modular.com/products/2004-2008-f150-6r80-swap-conversion-harness",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "swap-mim-crossmember",
   "platform": "F-150 2004–2014",
   "category": "Swap Parts",
   "name": "04–08 Coyote swap transmission crossmember",
   "brand": "Make It Modular",
   "part_number": "n/s",
   "fitment": {
    "years": "2004–08",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "6R80 mount sits 3\" further back; uses the stock 11–14 F-150 6R80 mount"
   },
   "offers": [
    {
     "seller": "Make It Modular (manufacturer)",
     "price": 400,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://make-it-modular.com/products/2004-2008-f150-coyote-swap-transmission-cross-member",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Make It Modular (manufacturer)",
    "price": 400,
    "url": "https://make-it-modular.com/products/2004-2008-f150-coyote-swap-transmission-cross-member",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "oem-iwe-hose",
   "platform": "F-150 2004–2014",
   "category": "OEM Repair Parts",
   "name": "IWE vacuum hose kit (both sides)",
   "brand": "Motorcraft / Ford",
   "part_number": "FL3Z-3C125-C",
   "fitment": {
    "years": "2004–14",
    "models": [
     "F-150"
    ],
    "drive": [
     "4WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Ford (TSB 16-0108)",
     "price": null,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://static.nhtsa.gov/odi/tsbs/2016/SB-10092370-5448.pdf",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Part number verified; price not checked"
    }
   ],
   "notes": "",
   "best_offer": null,
   "source": "master-guide",
   "tips": [
    {
     "text": "On a 2013 Platinum that ground only in right turns, a new Dorman 600-400 hose assembly did not fix it but the IWE solenoid 7L1Z-9H465-B (about $14) did. Another member says the rubber-to-plastic connector on the frame by each wheel can hold vacuum straight ahead and leak in turns.",
     "source_url": "https://www.f150forum.com/f38/iwe-noise-troubleshooting-405844/",
     "source_name": "F150Forum: IWE Noise Troubleshooting",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "oem-vct-solenoid",
   "platform": "F-150 2004–2014",
   "category": "OEM Repair Parts",
   "name": "VCT solenoid (replace both)",
   "brand": "Motorcraft / Ford",
   "part_number": "8L3Z-6M280-B",
   "fitment": {
    "years": "2004–10",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.4 3V"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Ford (TSB 12-7-10)",
     "price": null,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.fordservicecontent.com/pubs/content/~WT/~MUS~LEN/3555/tsb12-07-10.pdf",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Part number verified; price not checked"
    }
   ],
   "notes": "",
   "best_offer": null,
   "source": "master-guide",
   "tips": [
    {
     "text": "Buy new solenoid-to-cover seals with the solenoids. One owner says \"There is no way to get that thing out without destroying it.\" The current solenoid has a check valve on the oil inlet and is the only version sold, but he reports it still does not fully cure hot-idle clatter.",
     "source_url": "https://www.f150forum.com/f4/5w-30-oil-5-4-3v-good-idea-130457/index24/",
     "source_name": "F150Forum: 5w-30 oil in the 5.4 3v a good idea? (page 24)",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Each VCT housing has a screen under a set screw (about 9/16-18 and 5/16-24, held with green threadlocker), and owners say it comes out easily for cleaning. Housing gaskets: 3L3Z-6C286-EA and 3L3Z-6C285-AA.",
     "source_url": "https://www.f150forum.com/f4/vct-housing-can-you-remove-screen-clean-481785/",
     "source_name": "F150Forum: VCT housing - can you remove the screen to clean?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "oem-eb-chain",
   "platform": "F-150 2004–2014",
   "category": "OEM Repair Parts",
   "name": "EcoBoost primary timing chain",
   "brand": "Motorcraft / Ford",
   "part_number": "AT4Z-6268-C",
   "fitment": {
    "years": "2011–14",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "3.5 EB"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Ford (TSB 14-0194)",
     "price": null,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.f150ecoboost.net/attachments/tsb14-0194-pdf.27092/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Part number verified; price not checked"
    }
   ],
   "notes": "",
   "best_offer": null,
   "source": "master-guide"
  },
  {
   "id": "oem-eb-cac-deflector",
   "platform": "F-150 2004–2014",
   "category": "OEM Repair Parts",
   "name": "CAC bottom air deflector",
   "brand": "Motorcraft / Ford",
   "part_number": "DL3Z-2021702-A",
   "fitment": {
    "years": "2011–12",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "3.5 EB"
    ],
    "position": "",
    "notes": "Not for CAC BL34-9L440-AE"
   },
   "offers": [
    {
     "seller": "Ford (TSB 13-8-1)",
     "price": null,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "http://www.fordservicecontent.com/Ford_Content/pubs/content/~WT/~MUS~LEN/3569/tsb13-08-01.htm",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Part number verified; price not checked"
    }
   ],
   "notes": "",
   "best_offer": null,
   "source": "master-guide"
  },
  {
   "id": "oem-blend-actuator",
   "platform": "F-150 2004–2014",
   "category": "OEM Repair Parts",
   "name": "Temperature blend-door actuator",
   "brand": "Motorcraft / Ford",
   "part_number": "9L3Z-19E616-E",
   "fitment": {
    "years": "2005–08",
    "models": [
     "F-150"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Ford (TSB 08-23-6, forum transcription)",
     "price": null,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.ford-trucks.com/forums/652261-whats-the-noise-in-the-dash-7.html",
     "checked": "2026-10-11",
     "status": "unverified",
     "source_note": "Part number from a forum transcription of the TSB; price not checked"
    }
   ],
   "notes": "",
   "best_offer": null,
   "source": "master-guide"
  }
 ],
 "catalog": {
  "index": "data/parts/f150-2004-2014/index.js",
  "indexBytes": 406215,
  "note": "Repair parts are RockAuto catalog picks (Economy, OE, Premium options per part type) read on the catalog pages of the representative vehicles linked here. Fitment comes from the listing notes for those vehicles only, so other years, trims and cabs show Check fitment.",
  "vehicles": [
   "https://www.rockauto.com/en/catalog/ford,2006,f-150,5.4l+v8,1432394",
   "https://www.rockauto.com/en/catalog/ford,2012,f-150,5.0l+v8,3015601"
  ],
  "generated": "2026-10-11",
  "files": [
   {
    "file": "data/parts/f150-2004-2014/0.js",
    "category": "Engine",
    "count": 243,
    "types": 61,
    "from": null,
    "bytes": 175417
   },
   {
    "file": "data/parts/f150-2004-2014/1.js",
    "category": "Ignition",
    "count": 44,
    "types": 10,
    "from": null,
    "bytes": 31667
   },
   {
    "file": "data/parts/f150-2004-2014/2.js",
    "category": "Fuel System",
    "count": 70,
    "types": 22,
    "from": null,
    "bytes": 50546
   },
   {
    "file": "data/parts/f150-2004-2014/3.js",
    "category": "Cooling",
    "count": 79,
    "types": 18,
    "from": null,
    "bytes": 55340
   },
   {
    "file": "data/parts/f150-2004-2014/4.js",
    "category": "HVAC",
    "count": 123,
    "types": 29,
    "from": null,
    "bytes": 91827
   },
   {
    "file": "data/parts/f150-2004-2014/5.js",
    "category": "Electrical",
    "count": 272,
    "types": 73,
    "from": null,
    "bytes": 212467
   },
   {
    "file": "data/parts/f150-2004-2014/6.js",
    "category": "Brakes",
    "count": 274,
    "types": 37,
    "from": null,
    "bytes": 210945
   },
   {
    "file": "data/parts/f150-2004-2014/7.js",
    "category": "Steering",
    "count": 93,
    "types": 22,
    "from": null,
    "bytes": 66766
   },
   {
    "file": "data/parts/f150-2004-2014/8.js",
    "category": "Drivetrain",
    "count": 297,
    "types": 82,
    "from": null,
    "bytes": 271015
   },
   {
    "file": "data/parts/f150-2004-2014/9.js",
    "category": "Body",
    "count": 265,
    "types": 72,
    "from": null,
    "bytes": 210143
   },
   {
    "file": "data/parts/f150-2004-2014/10.js",
    "category": "Lighting",
    "count": 44,
    "types": 9,
    "from": null,
    "bytes": 34916
   },
   {
    "file": "data/parts/f150-2004-2014/11.js",
    "category": "Interior",
    "count": 74,
    "types": 27,
    "from": null,
    "bytes": 57717
   },
   {
    "file": "data/parts/f150-2004-2014/12.js",
    "category": "Filters & Fluids",
    "count": 97,
    "types": 23,
    "from": null,
    "bytes": 74861
   },
   {
    "file": "data/parts/f150-2004-2014/13.js",
    "category": "Exhaust & Headers",
    "count": 126,
    "types": 22,
    "from": null,
    "bytes": 99569
   },
   {
    "file": "data/parts/f150-2004-2014/14.js",
    "category": "Suspension & Stance",
    "count": 194,
    "types": 22,
    "from": null,
    "bytes": 155271
   }
  ],
  "count": 2295
 },
 "reference": {
  "caveat": "Factory data from the 2007 Owner Guide (standing in for 2004-08), the 2014 Owner Guide and 2014 Workshop Manual sections (standing in for 2009-14), and Ford's 2014 towing guide. Values change by year; check your own guide and door label.",
  "sections": [
   {
    "id": "maintenance",
    "title": "Maintenance",
    "short": "Schedule, fluids, filters, plugs",
    "intro": "Schedule, fluid capacities and Motorcraft filter and plug numbers from Ford owner's guides.",
    "blocks": [
     {
      "title": "Factory maintenance schedule (12th gen)",
      "conf": "verified",
      "src": [
       {
        "label": "2014 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2014_ford_f-150.pdf"
       }
      ],
      "years": "2014 Owner Guide pp. 438-447; the 2009-13 schedule was not checked",
      "items": [
       "Oil, 3.5 EB / 3.7 / 5.0: change when the Intelligent Oil-Life Monitor shows OIL CHANGE REQUIRED. Ford: normal use 7,500-10,000 mi; severe (heavy towing or loads, mountains, off-road, long idling, extreme temps) 5,000-7,499; extreme (maximum load or towing, extreme heat or cold) 3,000-4,999. Change within 2 weeks or 500 mi of the message. Never exceed 1 year or 10,000 mi. If the monitor resets early or fails, change at 6 months / 5,000 mi.",
       "Oil, 6.2: no oil-life monitor; fixed 7,500-mile schedule. Its spark plugs are listed at 97,500 mi to line up with those intervals.",
       "At every oil change: rotate tires; inspect brakes, cooling system, exhaust, front axle and U-joints (grease fittings on 4x4), half-shaft boots, steering linkage, ball joints and tie-rod ends; check ATF level on dipstick units.",
       "Every 30,000 mi: engine air filter; heated/cooled seat filter (if fitted).",
       "Every 100,000 mi: spark plugs; inspect the accessory belt (then every other oil change).",
       "Coolant: first change at 6 years / 100,000 mi, then every 3 years / 50,000 mi.",
       "Every 150,000 mi: automatic transmission fluid and filter; front and rear axle fluid; transfer case fluid; replace the accessory belt.",
       "Special operating conditions (towing, car-top carrier, long idling or commercial use): transfer case fluid every 60,000 mi, inspect and lube U-joints frequently, air filter as needed; see the guide for axle exceptions. Do these within 3,000 mi of an OIL CHANGE REQUIRED message."
      ]
     },
     {
      "title": "Maintenance schedule (11th gen)",
      "conf": "unknown",
      "src": [
       {
        "label": "2007 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2007_ford_f-150.pdf"
       }
      ],
      "years": "2004-08",
      "text": "The 2007 Owner Guide points to a separate Scheduled Maintenance Guide booklet that was not found online, so 2004-08 intervals are not filled in. The guide does say the rear axle is filled for life with synthetic, and that flex-fuel trucks (VIN 8th digit V) run on E85 half the time or more need a different schedule and a tank of regular gasoline every 3,000 mi."
     },
     {
      "title": "11th gen engine fluids, filters and plugs",
      "conf": "verified",
      "src": [
       {
        "label": "2007 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2007_ford_f-150.pdf"
       }
      ],
      "years": "11th gen 2004-08, from the 2007 Owner Guide; 2004, 2005 and 2008 guides were not read, so check your year",
      "table": {
       "columns": [
        "Item",
        "4.2 V6",
        "4.6 V8 (2V/3V)",
        "5.4 3V"
       ],
       "rows": [
        [
         "Engine oil with filter",
         "6.0 qt, 5W-20",
         "6.0 qt, 5W-20",
         "7.0 qt, 5W-20"
        ],
        [
         "Coolant (Motorcraft Premium Gold, yellow, VC-7-B)",
         "17.6 qt",
         "20.5 qt",
         "20.9 qt"
        ],
        [
         "Oil filter",
         "FL-400-S",
         "FL-820-S",
         "FL-820-S"
        ],
        [
         "Air filter",
         "FA-1632",
         "FA-1632",
         "FA-1754"
        ],
        [
         "Fuel filter",
         "FG-986-B",
         "FG-986-B",
         "FG-986-B"
        ],
        [
         "Plug gap",
         "0.052-0.056 in",
         "0.052-0.056 in",
         "0.040-0.050 in (not adjustable on the 3V)"
        ],
        [
         "Firing order",
         "1-4-2-5-3-6",
         "1-3-7-2-6-5-4-8",
         "1-3-7-2-6-5-4-8"
        ],
        [
         "Compression",
         "9.3:1",
         "9.37:1",
         "9.85:1"
        ]
       ],
       "note": "Oil spec: WSS-M2C930-A with the API mark; synthetic is not required."
      }
     },
     {
      "title": "11th gen driveline and other fluids",
      "conf": "verified",
      "src": [
       {
        "label": "2007 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2007_ford_f-150.pdf"
       }
      ],
      "years": "11th gen 2004-08, from the 2007 Owner Guide; 2004, 2005 and 2008 guides were not read, so check your year",
      "table": {
       "columns": [
        "Item",
        "Capacity / fluid"
       ],
       "rows": [
        [
         "Front axle (4x4)",
         "3.7 pt, 80W-90 (WSP-M2C197-A)"
        ],
        [
         "Rear 8.8 / 9.75 in",
         "5.5 pt, 75W-140 synthetic; fill 1/4 to 9/16 in (6 to 14 mm) below the fill hole. Add 4 oz XL-3 friction modifier for Traction-Lok"
        ],
        [
         "Rear 10.25 in (HD payload)",
         "6.9 pt total = 6.5 pt 75W-140 + 8 oz XL-3; fill to the bottom of the hole"
        ],
        [
         "Transfer case (4x4)",
         "2.0 qt MERCON ATF, fill to the bottom of the hole"
        ],
        [
         "4R75E automatic",
         "13.9 qt dry fill (incl. cooler), MERCON V; set by dipstick"
        ],
        [
         "5-speed manual",
         "3.75 qt MERCON ATF"
        ],
        [
         "Power steering",
         "MERCON V"
        ],
        [
         "Brake/clutch fluid",
         "DOT 3 (PM-1)"
        ],
        [
         "Washer",
         "4.25 qt"
        ]
       ],
       "note": "Rear axle is filled for life with synthetic; change only for a leak, service, or after submersion."
      }
     },
     {
      "title": "11th gen fuel tanks",
      "conf": "verified",
      "src": [
       {
        "label": "2007 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2007_ford_f-150.pdf"
       }
      ],
      "years": "2007 Owner Guide",
      "items": [
       "Reg Cab 6.5' and SuperCab 5.5': 26.0 gal.",
       "SuperCrew 5.5': 30 gal.",
       "SuperCrew 6.5': 27 gal standard / 35.7 gal optional.",
       "Reg Cab 8', SuperCab 6.5' and 8': 27 gal standard / 35.7 gal optional."
      ]
     },
     {
      "title": "12th gen engine fluids, filters and plugs",
      "conf": "verified",
      "src": [
       {
        "label": "2014 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2014_ford_f-150.pdf"
       }
      ],
      "years": "12th gen 2009-14, from the 2014 Owner Guide; 2009-13 may differ (2012 guide would not open)",
      "table": {
       "columns": [
        "Item",
        "3.5 EcoBoost",
        "3.7 V6",
        "5.0 V8",
        "6.2 V8"
       ],
       "rows": [
        [
         "Engine oil with filter",
         "6.0 qt, 5W-30",
         "6.0 qt, 5W-20",
         "7.7 qt, 5W-20",
         "7.0 qt, 5W-20"
        ],
        [
         "Oil spec",
         "WSS-M2C946-A",
         "WSS-M2C945-A",
         "WSS-M2C945-A",
         "WSS-M2C945-A"
        ],
        [
         "Coolant (Motorcraft Orange, VC-3DIL-B prediluted)",
         "16.5 qt",
         "16.0 qt",
         "17.0 qt",
         "19.5 qt"
        ],
        [
         "Oil filter",
         "FL-500-S",
         "FL-500-S",
         "FL-500-S",
         "FL-820-S"
        ],
        [
         "Spark plugs (Motorcraft)",
         "SP-534",
         "SP-520",
         "SP-519",
         "SP-526"
        ]
       ],
       "note": "Air filter FA-1883; battery BXT-65-750; wiper WW-2201-PF."
      }
     },
     {
      "title": "12th gen driveline and other fluids",
      "conf": "verified",
      "src": [
       {
        "label": "2014 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2014_ford_f-150.pdf"
       }
      ],
      "years": "12th gen 2009-14, from the 2014 Owner Guide; 2009-13 may differ (2012 guide would not open)",
      "table": {
       "columns": [
        "Item",
        "Capacity / fluid"
       ],
       "rows": [
        [
         "Front axle (4x4)",
         "3.5 pt, 80W-90"
        ],
        [
         "Rear axle",
         "5.5 pt, 75W-140 synthetic; 4 oz XL-3 for a full fill of the 8.8 Traction-Lok; fill 6 to 14 mm below the hole"
        ],
        [
         "Transfer case, ESOF (electronic shift on the fly)",
         "1.5 qt Motorcraft Transfer Case Fluid XL-12"
        ],
        [
         "Transfer case, Torque On Demand (auto 4WD)",
         "1.5 qt MERCON LV"
        ],
        [
         "6R80 automatic",
         "12.1 qt (3.7); 13.1 qt (5.0, 6.2, 3.5 EB); MERCON LV only; dry fill, set by dipstick"
        ],
        [
         "Power steering",
         "MERCON LV, 6.2 only (other engines have electric steering)"
        ],
        [
         "Brake fluid",
         "DOT 4 LV (PM-20); the WSM also accepts DOT 3 WSS-M6C62-A or WSS-M6C65-A1, system fill 1,420 ml (3.0 pt)"
        ],
        [
         "A/C",
         "R-134a 1.50 lb (0.68 kg); PAG oil 3.40 fl oz"
        ],
        [
         "Fuel tank",
         "26.0 gal standard, 36.0 gal optional"
        ]
       ],
       "note": "2014 lists one rear axle capacity (5.5 pt) for all axles; the 9.75 in / HD payload question stays open."
      }
     }
    ]
   },
   {
    "id": "quickref",
    "title": "Quick reference",
    "short": "Bulbs, fuses, tires, towing, paint",
    "blocks": [
     {
      "title": "Bulb sizes, 11th gen",
      "conf": "verified",
      "src": [
       {
        "label": "2007 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2007_ford_f-150.pdf"
       }
      ],
      "years": "2007 Owner Guide p. 92; check your year",
      "table": {
       "columns": [
        "Lamp",
        "Bulb"
       ],
       "rows": [
        [
         "Headlamps (high/low)",
         "H13 / 9008"
        ],
        [
         "Front park/turn",
         "3157A (amber)"
        ],
        [
         "Front side marker",
         "194"
        ],
        [
         "Fog lamps",
         "9140"
        ],
        [
         "Backup (except Harley-Davidson) / (Harley)",
         "3156 / 3155"
        ],
        [
         "Rear stop/turn/side marker/tail",
         "4057K or 3057K"
        ],
        [
         "High-mount brake lamp; cargo lamps",
         "921"
        ],
        [
         "License plate",
         "194"
        ],
        [
         "Mirror turn signals, puddle lamps",
         "dealer item"
        ]
       ]
      }
     },
     {
      "title": "Bulb sizes, 12th gen",
      "conf": "verified",
      "src": [
       {
        "label": "2014 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2014_ford_f-150.pdf"
       }
      ],
      "years": "2014 Owner Guide p. 254; check your year",
      "table": {
       "columns": [
        "Lamp",
        "Bulb"
       ],
       "rows": [
        [
         "Headlamps, halogen (high/low)",
         "H13 / 9008"
        ],
        [
         "Headlamps, HID (2013-14, if equipped)",
         "D3S"
        ],
        [
         "Front park/turn",
         "3157NAK LCP (natural amber)"
        ],
        [
         "Front side marker",
         "168"
        ],
        [
         "Fog lamps",
         "9140"
        ],
        [
         "Backup",
         "921"
        ],
        [
         "Rear stop/turn/side marker",
         "3057K LCP"
        ],
        [
         "High-mount brake lamp",
         "912"
        ],
        [
         "License plate (behind the rear bumper)",
         "194"
        ],
        [
         "Front map lamps / rear dome-courtesy",
         "W5W / 578"
        ]
       ],
       "note": "Year differences, not a conflict: high-mount lamp 921 in 2007 and 912 in 2014; backup lamp 3156 in 2007 and 921 in 2014."
      }
     },
     {
      "title": "Fuse and relay boxes",
      "conf": "verified",
      "src": [
       {
        "label": "2007 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2007_ford_f-150.pdf"
       },
       {
        "label": "2014 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2014_ford_f-150.pdf"
       }
      ],
      "years": "Fuse numbering differs by year; use your own year's chart (full tables in the source)",
      "items": [
       "2004-08 (2007 guide pp. 270-283): passenger compartment fuse panel / power distribution box under the right-hand side of the instrument panel; remove the trim panel, then pull the cover by its PULL tab. Mini and standard fuses plus relays: fuel pump relay and injectors, PCM power, starter solenoid, high/low beams, trailer tow park, stop/turn, back-up, battery charge, electric trailer brake feed. Auxiliary relay box in the engine compartment on the left fender.",
       "Ford: disconnect the battery before servicing high-current fuses, and refit both box covers before reconnecting.",
       "2009-14 (2014 guide pp. 224-236): power distribution box in the engine compartment with the high-current cartridge and mini fuses and relays, e.g. relay 2 starter, relay 8 fuel pump, fuse 13 starter relay power (30 A), fuse 17 trailer brake control (30 A), fuse 27 fuel pump relay power (20 A), plus trailer-tow park, stop/turn, back-up and battery-charge circuits.",
       "2009-14 passenger compartment fuse panel: right-hand passenger footwell behind a trim panel; press the tabs on both sides of its cover to remove it."
      ]
     },
     {
      "title": "Tire pressure",
      "conf": "verified",
      "src": [
       {
        "label": "2007 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2007_ford_f-150.pdf"
       },
       {
        "label": "2014 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2014_ford_f-150.pdf"
       }
      ],
      "years": "2004-14",
      "items": [
       "Ford gives no single pressure for the F-150; use the Tire Label on the B-pillar or driver-door edge, set cold before driving. The same label gives the maximum occupant-plus-cargo weight.",
       "2007 guide: a T-type/mini spare is kept at 60 psi; a full-size or dissimilar spare at the higher of the front/rear placard pressures.",
       "The tire maximum load is quoted at 35 psi for P-metric (2014: 35 or 36 psi by size; 36 psi for Euro-metric). That is a load reference, not a recommended setting.",
       "Lug-nut torque: see the Wheel install guide."
      ]
     },
     {
      "title": "Payload and where the numbers live",
      "conf": "verified",
      "src": [
       {
        "label": "2007 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2007_ford_f-150.pdf"
       },
       {
        "label": "Ford 2014 RV & Trailer Towing Guide p. 15 (dealer host)",
        "url": "https://tailoredtrucks.com/wp-content/uploads/2022/05/2014-Ford-rv-trailer-towing-guide.pdf"
       }
      ],
      "years": "2004-14",
      "text": "Payload, GVWR and front/rear GAWR are on the Safety Compliance Certification Label (driver's door pillar); the tire placard on the same pillar gives the max occupant-plus-cargo weight. Never exceed GVWR, either GAWR or GCWR. Ford printed no single payload number per F-150 trim in either guide, so none is given here."
     },
     {
      "title": "Towing, 11th gen (2007 tables)",
      "conf": "verified",
      "src": [
       {
        "label": "2007 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2007_ford_f-150.pdf"
       }
      ],
      "years": "2007 Owner Guide pp. 225-235, automatic unless noted; other years differ",
      "table": {
       "columns": [
        "Config",
        "4.2 V6",
        "4.6 V8",
        "5.4 V8"
       ],
       "rows": [
        [
         "Reg Cab 4x2 126 in",
         "manual 3.31: 2,400 / 7,200; auto 3.73: 5,600 / 10,500",
         "3.73: 7,100 / 12,000",
         "3.73: 8,500 / 13,500"
        ],
        [
         "Reg Cab 4x2 144.5 in",
         "n/a",
         "3.73: 7,200 / 12,200",
         "3.73: 9,800 / 15,000; HD 4.10: 11,000 / 16,400 (other HD row 10,400 / 15,800)"
        ],
        [
         "Reg Cab 4x4 144.5 in",
         "n/a",
         "3.73: 6,900 / 12,200",
         "3.73, 17 in wheels: 9,500 / 15,000 (18 in: 9,000 / 14,500); HD 4.10: 9,500 / 15,300"
        ],
        [
         "SuperCab 4x4 144.5 in",
         "n/a",
         "3.73, 17 in: 6,700 / 12,200",
         "3.73, 17 in: 9,300 / 15,000; HD 4.10 (163 in): 9,300 / 15,300"
        ]
       ],
       "note": "Values are max trailer lb / GCWR lb. 18 in wheels cut 500 lb off the 17 in rating in the same configuration. Top 2007 figure: 5.4 Heavy Duty (4.10) regular cab 4x2 at 11,000 lb."
      }
     },
     {
      "title": "Towing, 12th gen (2014 towing guide)",
      "conf": "verified",
      "src": [
       {
        "label": "Ford 2014 RV & Trailer Towing Guide p. 15 (dealer host)",
        "url": "https://tailoredtrucks.com/wp-content/uploads/2022/05/2014-Ford-rv-trailer-towing-guide.pdf"
       },
       {
        "label": "2014 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2014_ford_f-150.pdf"
       }
      ],
      "years": "2014 only; the 2014 Owner Guide GCWR figures match this guide",
      "table": {
       "columns": [
        "Engine / axle",
        "GCWR (lb)",
        "Max trailer, range across cabs (lb)"
       ],
       "rows": [
        [
         "3.7 V6, 3.55 / 3.73",
         "10,400-11,700",
         "5,500-6,700"
        ],
        [
         "5.0 V8, 3.31 / 3.55",
         "12,900-14,900",
         "7,500-9,800"
        ],
        [
         "5.0 V8, 3.73",
         "13,300-15,300",
         "8,000-10,000 (15,300 needs HD Payload Pkg)"
        ],
        [
         "3.5 EcoBoost, 3.15 / 3.31",
         "14,000-15,100",
         "8,400-9,700"
        ],
        [
         "3.5 EcoBoost, 3.55",
         "13,300-15,500",
         "7,300-9,800"
        ],
        [
         "3.5 EcoBoost, 3.73 / 4.10",
         "16,600-17,100",
         "11,100-11,300 (needs HD Payload or Max Trailer Tow Pkg)"
        ],
        [
         "6.2 V8, 3.55",
         "15,500-15,600",
         "9,500-9,800"
        ],
        [
         "6.2 V8, 3.73",
         "17,000-17,100",
         "11,000-11,300"
        ],
        [
         "6.2 Raptor, 4.10",
         "12,500 / 14,700",
         "6,000 / 8,000"
        ]
       ]
      }
     },
     {
      "title": "Hitch limits (2014)",
      "conf": "verified",
      "src": [
       {
        "label": "Ford 2014 RV & Trailer Towing Guide p. 15 (dealer host)",
        "url": "https://tailoredtrucks.com/wp-content/uploads/2022/05/2014-Ford-rv-trailer-towing-guide.pdf"
       }
      ],
      "years": "2014 towing guide",
      "items": [
       "Maximum ratings require a weight-distributing hitch.",
       "Bumper-only towing is limited to 5,000 lb.",
       "Tongue weight 10-15% of trailer weight (5th-wheel king pin 15-25%).",
       "Heavy-Duty Payload Package is option code 627."
      ]
     },
     {
      "title": "Paint codes (2014)",
      "conf": "verified",
      "src": [
       {
        "label": "2014 WSM 100-01 Identification Codes (f150ecoboost.net)",
        "url": "https://www.f150ecoboost.net/attachments/2009-2014-f150-work-shop-manual-section-100-1-identification-codes-pdf.208977/"
       }
      ],
      "years": "2014 only; other years not verified on a Ford page (YZ Oxford White and UH/UA black recur, but palettes changed). Use the paint field on your door label",
      "text": "Two-part code on the VC (door) label: primary, then accent/two-tone. All base coat / clear coat. Accent colors: LQ, UX.",
      "table": {
       "columns": [
        "Code",
        "Name"
       ],
       "rows": [
        [
         "D7",
         "Sunset"
        ],
        [
         "E4",
         "Vermilion Red"
        ],
        [
         "J1",
         "Kodiak Brown"
        ],
        [
         "LQ",
         "Pale Adobe Metallic"
        ],
        [
         "N1",
         "Blue Jeans Metallic"
        ],
        [
         "PQ",
         "Race Red"
        ],
        [
         "RR",
         "Ruby Red (tri-coat)"
        ],
        [
         "UG",
         "White Platinum (tri-coat)"
        ],
        [
         "UH",
         "Tuxedo Black Metallic"
        ],
        [
         "UJ",
         "Sterling Gray Metallic"
        ],
        [
         "UX",
         "Ingot Silver Metallic"
        ],
        [
         "VA",
         "Terrain"
        ],
        [
         "W6",
         "Green Gem"
        ],
        [
         "YZ",
         "Oxford White"
        ]
       ]
      }
     }
    ]
   },
   {
    "id": "vin",
    "title": "VIN and option codes",
    "short": "VIN, axle and trans codes",
    "blocks": [
     {
      "title": "VIN by position (2009-14)",
      "conf": "verified",
      "src": [
       {
        "label": "2014 WSM 100-01 Identification Codes (f150ecoboost.net)",
        "url": "https://www.f150ecoboost.net/attachments/2009-2014-f150-work-shop-manual-section-100-1-identification-codes-pdf.208977/"
       }
      ],
      "years": "12th gen, 2014 WSM 100-01",
      "text": "VIN tag: riveted to the dash, top upper left; also on the Vehicle Certification (VC) label.",
      "table": {
       "columns": [
        "Position",
        "Meaning"
       ],
       "rows": [
        [
         "1-3",
         "1FT = Ford truck, USA (5LT = Lincoln Mark LT, Mexico)"
        ],
        [
         "4",
         "GVWR + restraints: E/M 6,001-7,000 lb; F/N 7,001-8,000 lb; P/V 8,001-8,500 lb (E/F/V add second-row side airbags)"
        ],
        [
         "5-7",
         "F1C / F1E = Regular Cab 2WD / 4WD; X1C / X1E = SuperCab 2WD / 4WD; W1C / W1E = SuperCrew 2WD / 4WD; X1R / W1R = SVT Raptor SuperCab / SuperCrew"
        ],
        [
         "8",
         "Engine: F 5.0 4V (flex), M 3.7 (flex), T 3.5 EcoBoost, 6 6.2 2V"
        ],
        [
         "9",
         "Check digit"
        ],
        [
         "10",
         "Model year: 9 = 2009, A = 2010, B = 2011, C = 2012, D = 2013, E = 2014"
        ],
        [
         "11",
         "Plant: F Dearborn, K Kansas City"
        ],
        [
         "12-17",
         "Serial"
        ]
       ]
      }
     },
     {
      "title": "Door (VC) label codes (2009-14)",
      "conf": "verified",
      "src": [
       {
        "label": "2014 WSM 100-01 Identification Codes (f150ecoboost.net)",
        "url": "https://www.f150ecoboost.net/attachments/2009-2014-f150-work-shop-manual-section-100-1-identification-codes-pdf.208977/"
       },
       {
        "label": "2014 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2014_ford_f-150.pdf"
       }
      ],
      "years": "2014 WSM",
      "table": {
       "columns": [
        "Code type",
        "Values"
       ],
       "rows": [
        [
         "Axle",
         "15 = 3.15 open; 27 = 3.31 open; 19 = 3.55 open; 26 = 3.73 open; H9 = 3.55 limited slip; B6 = 3.73 limited slip; L5 / L3 / L9 / L6 / L4 = 3.15 / 3.31 / 3.55 / 3.73 / 4.10 electronic locking"
        ],
        [
         "Transmission",
         "6 = 6R80"
        ],
        [
         "Wheelbase",
         "126, 133, 145, 157, 163 in"
        ],
        [
         "Spring",
         "Front base part 5310, rear 5560, as a 2+2 character code"
        ],
        [
         "Also on the label",
         "Paint, interior trim, radio, DSO, region, powertrain calibration"
        ]
       ]
      }
     },
     {
      "title": "2004-08 codes",
      "conf": "verified",
      "src": [
       {
        "label": "2007 F-150 Owner Guide (carmanual.org)",
        "url": "https://carmanual.org/OwnersManual/ford/2007_ford_f-150.pdf"
       }
      ],
      "years": "11th gen, 2007 Owner Guide p. 363",
      "items": [
       "Transmission code: Q = 4R75E automatic, M = M5R2 5-speed manual.",
       "Flex-fuel trucks carry V in VIN position 8."
      ],
      "caveat": "A 2004-08 axle-code and full engine-code list from a Ford source was not found."
     }
    ]
   },
   {
    "id": "codes",
    "title": "Trouble codes",
    "short": "OBD codes tied to Ford TSBs and recalls",
    "intro": "Only codes tied to a Ford TSB, recall or workshop manual page. Generic P0171/P0174, P0300, P0420 and P0455 lists are forum-only for these trucks, so they are not listed.",
    "blocks": [
     {
      "title": "Codes and likely causes",
      "conf": "verified",
      "src": [
       {
        "label": "2014 WSM 414-00 Charging System",
        "url": "https://www.f150ecoboost.net/attachments/2011-2014-work-shop-manual-414-00-charging-system-alternator-generator-pdf.199878/"
       },
       {
        "label": "NHTSA 24V-444 Part 573",
        "url": "https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V444-2781.PDF"
       },
       {
        "label": "NHTSA 24V-444 dealer notice",
        "url": "https://static.nhtsa.gov/odi/rcl/2024/RCMN-24V444-8849.pdf"
       },
       {
        "label": "Ford 24S37 recall page",
        "url": "https://www.ford.com/support/how-tos/recall/recalls-and-faqs/24s37-f-150-2014-transmission-sudden-downshift-recall/"
       },
       {
        "label": "NHTSA 19V-075 Part 573",
        "url": "https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V075-8473.PDF"
       }
      ],
      "years": "Years per row; checked 2026-10-20",
      "table": {
       "columns": [
        "Code(s)",
        "Applies to",
        "Likely cause per Ford",
        "Confidence"
       ],
       "rows": [
        [
         "P0021, P0022, P0340, P0341 (with hot rattle and rough idle)",
         "2004-10 5.4 3V",
         "Oscillating cam timing; Ford fix is replacing both VCT solenoids (TSB, see Problems)",
         "verified"
        ],
        [
         "P0016",
         "2011-14 3.5 EB built on or before 10/10/2014",
         "Stretched primary timing chain if VCT_INT_ACT1 reads +6° or more (TSB 14-0194, see Problems)",
         "verified"
        ],
        [
         "P0304-P0306, P0430 (misfire under hard acceleration in humid weather)",
         "2011-12 3.5 EB",
         "Condensation in the charge-air cooler (TSB, see Problems)",
         "verified"
        ],
        [
         "P0625 / P0626",
         "2011-14",
         "Generator field / GENMON circuit low (duty cycle 3% or less) / high (98% or more): wiring, connector or generator",
         "verified"
        ],
        [
         "P0720, P0722, P0731, P1500, with sudden downshift to 1st",
         "2014 6R80 (recall 24V-444 / Ford 24S37); 2011-13 6R80 (recall 19V-075 / 19S07)",
         "Intermittent output-shaft-speed (OSS) sensor signal loss (contamination, shorts, connector corrosion or pin swaging, bad sensor output). Remedy: PCM reflash plus a dealer check for transmission repair. The DTC list for 19V-075 is not confirmed.",
         "verified"
        ]
       ],
       "rowSrc": [
        null,
        null,
        null,
        "https://www.f150ecoboost.net/attachments/2011-2014-work-shop-manual-414-00-charging-system-alternator-generator-pdf.199878/",
        "https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V444-2781.PDF"
       ]
      },
      "caveat": "The recall rows were verified from search extracts of the NHTSA and Ford pages."
     },
     {
      "title": "Recall 24V-444 (Ford 24S37) and 19V-075 (19S07)",
      "conf": "verified",
      "src": [
       {
        "label": "NHTSA 24V-444 Part 573",
        "url": "https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V444-2781.PDF"
       },
       {
        "label": "NHTSA 24V-444 dealer notice",
        "url": "https://static.nhtsa.gov/odi/rcl/2024/RCMN-24V444-8849.pdf"
       },
       {
        "label": "Ford 24S37 recall page",
        "url": "https://www.ford.com/support/how-tos/recall/recalls-and-faqs/24s37-f-150-2014-transmission-sudden-downshift-recall/"
       },
       {
        "label": "NHTSA 19V-075 Part 573",
        "url": "https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V075-8473.PDF"
       }
      ],
      "years": "2011-14 6R80",
      "text": "24V-444 = Ford 24S37: 552,188 2014 F-150s built 6/17/2013-12/23/2014 (Dearborn 6/17/13-8/25/14, Kansas City 7/26/13-12/23/14). OSS signal loss can cause an unintended downshift to 1st; free PCM update. 2011-13 trucks are covered separately by 19V-075 (19S07), a PCM reprogram for the same OSS downshift. A search summary calling it 24S36 is wrong.",
      "caveat": "Verified from search extracts of the NHTSA and Ford pages."
     }
    ]
   }
  ]
 },
 "resolved": [
  "6R80 on 2011-14: recall 24V-444 = Ford 24S37 (552,188 2014 F-150s, OSS signal loss, free PCM update); 2011-13 covered by 19V-075 (19S07). The \"2011-13 PCM reflash\" claim is now backed by a recall (Trouble codes).",
  "2014 maintenance schedule (Maintenance).",
  "2007 and 2014 towing and payload, HD Payload Package code 627 (Quick reference).",
  "Bulbs, fuses, tire pressures, VIN and door-label codes, 2014 paint (Quick reference, VIN).",
  "12th-gen alternator, starter, hub and ball-joint torques (Guides).",
  "Fluid capacities and filter and plug numbers for 2004-08 and 2009-14 (Maintenance)."
 ]
};
