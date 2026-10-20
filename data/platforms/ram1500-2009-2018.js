/* Forge platform data: ram1500-2009-2018. Built by scripts/build_app_*.js, then scripts/expand/integrate.py (catalog meta, reference, gap-fill guides). Schema: app/DATA-FORMAT.md */
window.FORGE_PLATFORMS = window.FORGE_PLATFORMS || {};
window.FORGE_PLATFORMS["ram1500-2009-2018"] = {
 "schemaVersion": 1,
 "id": "ram1500-2009-2018",
 "name": "Ram 1500",
 "title": "4th gen (DS)",
 "years": "2009–2018",
 "yearsNote": "Sold as the \"1500 Classic\" 2019–2024; Classic-only details out of scope",
 "kind": "truck",
 "make": "Dodge / Ram",
 "models": [
  "Ram 1500 Regular Cab",
  "Ram 1500 Quad Cab",
  "Ram 1500 Crew Cab",
  "Trims incl. Sport, Big Horn, Lone Star, Laramie, Limited, Rebel (2015+), Express, Outdoorsman, R/T"
 ],
 "tagline": "Coil-sprung rear, Hemi or EcoDiesel, and an 8-speed from 2013.",
 "compiled": "2026-10-11",
 "pricesChecked": "2026-10-11",
 "safetyAlerts": [
  {
   "title": "Lowered trucks: check rear brake-hose clearance",
   "text": "One owner on a McGaughys 44050 2/4 drop with 22x10 wheels and 305/45R22 tires (2015 Regular Cab) reports the tire rubbed through the right-rear brake hose and caused a near-total brake loss on the freeway. Check rear brake-hose clearance.",
   "conf": "forum",
   "src": [
    {
     "label": "RamForumz 2015 reg cab lowered",
     "url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/"
    }
   ]
  }
 ],
 "conflicts": [
  {
   "topic": "Brake-hose rub on a lowered truck (safety)",
   "text": "McGaughys 44050 with 22x10 / 305/45R22 (2015 RC): the tire rubbed through the right-rear brake hose and caused a near-total brake loss on the freeway. Check rear brake-hose clearance.",
   "conf": "forum",
   "src": [
    {
     "label": "RamForumz 2015 reg cab lowered",
     "url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/"
    }
   ]
  },
  {
   "topic": "Lug thread changed for 2012",
   "text": "Settled. The 2011 OM lists 9/16-18 (cone 120–150 ft-lb, flanged 130–160). The 2012 OM lists M14 x 1.5, 22 mm hex (cone 130, flanged 129 ft-lb). So 2009–2011 = 9/16-18; 2012–2018 = M14x1.5. This matches checkfitment's split. Both manuals cover 1500/2500/3500 combined.",
   "conf": "verified",
   "src": [
    {
     "label": "2011 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2011/2500/715.pdf"
    },
    {
     "label": "2012 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2012/3500/P130013_12_DSDJD2_OM_EN_USC_E7_V2.pdf"
    },
    {
     "label": "checkfitment 5x139.7",
     "url": "https://checkfitment.com/bolt-pattern/5x139.7/"
    }
   ]
  },
  {
   "topic": "Lug torque: four figures",
   "text": "2010 OM: 130 ft-lb (177 N·m) in the tire-change text; its chart says 120–150 (cone) and 130–160 (flanged). 2012/2013/2016 OMs: 130 ft-lb cone / 129 ft-lb flanged, M14x1.5, 22 mm hex. The 2013 tire-change text still prints the older ranges. The 2016 service \"Common Specs\" says flanged 140 ft-lb (190 N·m), cone 130 ft-lb. Use 130 ft-lb, which every source allows.",
   "conf": [
    "verified",
    "verified-secondary"
   ],
   "disputed": true,
   "src": [
    {
     "label": "2010 Owner's Manual (factory doc)",
     "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
    },
    {
     "label": "2012 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2012/3500/P130013_12_DSDJD2_OM_EN_USC_E7_V2.pdf"
    },
    {
     "label": "2013 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
    },
    {
     "label": "2016 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
    },
    {
     "label": "2016 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Tradesman%2C%204D%20Pickup%2C%203.0L%20Eng%20VIN%20M%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    }
   ]
  },
  {
   "topic": "3.6 Pentastar spark-plug torque",
   "text": "Settled at 13 ft-lb. The 2016 3.6 torque table says 17.5 N·m (13 ft-lb). The 2016 Common Specs page says \"13 (± 2) ft. lbs. (18 ± 3 N·m): torque critical tapered design. Do not exceed 15 ft. lbs.\" Only the 2014 Common Specs page says 20 ft-lb (27 N·m), so treat that one as the outlier.",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "2016 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Tradesman%2C%204D%20Pickup%2C%203.0L%20Eng%20VIN%20M%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    },
    {
     "label": "2016 3.6 torque table (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%203.6L%20Eng%20VIN%20G%2C%20RWD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/3.6L%20Engine%20%20%28Service%20Information%29%20%201500/Specifications/Torque%20Specifications/"
    },
    {
     "label": "2014 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2014/1500%20Tradesman%2C%202D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%20RWD%2C%20Trans%20Mfr%20CD%208HP70/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    }
   ]
  },
  {
   "topic": "5.7 spark-plug gap",
   "text": "Mostly settled: the gap depends on the plug. The 2016 Common Specs lists LZFR5C-11 at 0.043 in, the same as the 2010 and 2013 OMs. Only the 2014 page lists REC14MCC4 at 0.040 in. Gap to whatever the plug in hand specifies.",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "2016 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Tradesman%2C%204D%20Pickup%2C%203.0L%20Eng%20VIN%20M%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    },
    {
     "label": "2014 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2014/1500%20Tradesman%2C%202D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%20RWD%2C%20Trans%20Mfr%20CD%208HP70/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    }
   ]
  },
  {
   "topic": "5.7 cam phaser bolt",
   "text": "Not settled. The value changes by year. 2016 factory table: 98 N·m (72 ft-lb). A MotoLogic printout of the 2013 DS 5.7 table lists Camshaft Phaser Bolt 85 N·m (63 ft-lb) and a separate Camshaft Sprocket Bolt 122 N·m (90 ft-lb). The 90 ft-lb row is the source of the old \"90\" figure; it looks like a non-VVT carry-over row (the guide author's inference). Use the value for your model year (63 for 2013, 72 for 2016). No 2009–12 or 2017–18 table opened.",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "2016 5.7 torque table (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/5.7L%20Engine%20%20%28Service%20Information%29%20%201500/Specifications/Torque%20Specifications/"
    },
    {
     "label": "2013 MotoLogic 5.7 table PDF (forum-hosted)",
     "url": "https://www.chargerforumz.com/attachments/a8476278-ec46-4b40-a7b1-62a6c35a15ad_c762f373-4d74-4a67-a9c9-6c7e0d01b0d6_eee1-pdf.127223/"
    }
   ]
  },
  {
   "topic": "5.7 coolant capacity",
   "text": "2010 and 2013 OMs: 16 qt (15 L) for a 1500. 2016 OM: 18.3 qt (17.3 L). 3.6: 14 qt (2013) vs 13.7 qt (2016). May reflect a cooling-system revision, or just the manual.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2010 Owner's Manual (factory doc)",
     "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
    },
    {
     "label": "2013 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
    },
    {
     "label": "2016 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
    }
   ]
  },
  {
   "topic": "Coolant type",
   "text": "2010 OM and the 2010 service capacity page: HOAT 5 yr/100k. 2013 OM: OAT 10 yr/150k. Don't mix.",
   "conf": "verified",
   "src": [
    {
     "label": "2010 Owner's Manual (factory doc)",
     "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
    },
    {
     "label": "2013 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
    }
   ]
  },
  {
   "topic": "LSD additive amount",
   "text": "2010 OM: 4 oz (118 ml). 2013 OM: 5 oz (148 ml).",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2010 Owner's Manual (factory doc)",
     "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
    },
    {
     "label": "2013 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
    }
   ]
  },
  {
   "topic": "Flowmaster 737860 price",
   "text": "A search summary said $942.46. The page shows $1,299.95.",
   "conf": "verified",
   "src": [
    {
     "label": "AmericanTrucks",
     "url": "https://www.americantrucks.com/flowmaster-ram1500-signature-series-dual-exhaust-system-black-chrome-tips-rear-exit-737860.html"
    }
   ]
  },
  {
   "topic": "Ranch Hand FSD13HBL1 price",
   "text": "A search summary said $1,744.95. Ranch Hand and AmericanTrucks both show $1,867.95.",
   "conf": "verified",
   "src": [
    {
     "label": "Ranch Hand",
     "url": "https://www.ranchhand.com/front-bumper-fsd13hbl1.html"
    }
   ]
  },
  {
   "topic": "Spyder tail lights 5085917",
   "text": "A search summary said $252. The page shows a $349.95 sale price ($252 appears only as a struck \"regular price\").",
   "conf": "verified",
   "src": [
    {
     "label": "jpmcarbon",
     "url": "https://www.jpmcarbon.com/products/spyder-dodge-ram-09-18-led-tail-lights-all-black-alt-yd-dram09v2-led-bkv2-incandescent-only-5085917"
    }
   ]
  },
  {
   "topic": "Hemi lifter failures and MDS",
   "text": "Owners disagree. One poster says the \"bad batch\" ran about 2011–2014 and has \"NOTHING to do with MDS\". Another says FCA changed lifter vendor and design in 2017 and failures dropped but didn't stop. Neither cites FCA.",
   "conf": "forum",
   "disputed": true,
   "src": [
    {
     "label": "RamForum Hemi lifter issues",
     "url": "https://www.ramforum.com/threads/hemi-lifter-issues.186881/"
    }
   ]
  },
  {
   "topic": "3.6 head warranty extension: is the DS covered?",
   "text": "TSB 09-002-14 (10-Jun-2014) listed the 2013 Ram 1500 with a 3.6 (ERB) built on or before 25-Jul-2012. Rev. A (03-Oct-2014) says \"2013 DS HAS BEEN REMOVED\". So DS trucks are not in the final X56 extension.",
   "conf": "verified",
   "src": [
    {
     "label": "TSB 09-002-14",
     "url": "https://static.nhtsa.gov/odi/tsbs/2014/SB-10062952-0335.pdf"
    },
    {
     "label": "TSB 09-002-14 Rev. A",
     "url": "https://static.oemdtc.com/NHTSA-PDFs/MC-10139771-9999.pdf"
    }
   ]
  },
  {
   "topic": "Front brake rotor size",
   "text": "The 2016 service spec lists a 1500 front rotor of 336 x 28 mm and rear 350 x 22 mm, so the rear rotor is listed as larger than the front. That's what the page says; no second source found to cross-check it.",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "2016 base brake specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Tradesman%2C%202D%20Pickup%2C%203.6L%20Eng%20VIN%20G%2C%204WD/Repair%20and%20Diagnosis/Brakes/Parking%20Brake%20System/Base%20Brakes%20%28Service%20Information%29%20%201500/Hydraulic%2FMechanical/Specifications/Base%20Brake/"
    }
   ]
  },
  {
   "topic": "Wikipedia trim list",
   "text": "Wikipedia lists \"TRX\" among the 2009 launch trims. TRX was an off-road package then (not the later TRX model). Not used here as a trim.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "Wikipedia, Ram pickup (4th gen)",
     "url": "https://en.wikipedia.org/wiki/Ram_pickup_(fourth_generation)"
    }
   ]
  },
  {
   "topic": "5.7 spark plug interval",
   "text": "30,000 mi in the 2010 and 2013 manuals vs 100,000 mi in the 2016 manual. Follow your model year's manual.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2010 Dodge Ram Truck OM (dezosmanuals.com)",
     "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
    },
    {
     "label": "2013 Ram 1500 OM (Mopar)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
    },
    {
     "label": "2016 Ram 1500 OM (Mopar)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
    }
   ]
  },
  {
   "topic": "5.7 water pump and thermostat torque",
   "text": "The 2016 5.7 engine table gives 28 N·m (21 ft-lb) for both; the cooling-section table gives 24 N·m pump and 13 N·m thermostat housing. Use the cooling-section values (split by fastener).",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "SI: Engine Cooling System 1500 (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Engine%20Mechanical/Cooling%20System%20(Mechanical)/Engine%20Cooling%20System%20-%201500/"
    }
   ]
  },
  {
   "topic": "5.7 generator bolts",
   "text": "Engine table 55 N·m (41 ft-lb) vs charging procedure 41 N·m (30 ft-lb). Use 41 N·m; 55 N·m matches the 3.6 tensioner row, so it may be a carry-over (researcher inference).",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "SI: Charging 1500 (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Electrical/Charging%20Systems/Charging%20(Service%20Information)%201500/"
    },
    {
     "label": "SI: Engine Cooling System 1500 (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Engine%20Mechanical/Cooling%20System%20(Mechanical)/Engine%20Cooling%20System%20-%201500/"
    }
   ]
  },
  {
   "topic": "Premium projector low-beam bulb",
   "text": "HIR2 in the 2013 manual vs \"9005Sl+\" as printed in the 2016 manual. The 2016 value is not confirmed elsewhere; check the bulb in hand.",
   "conf": "unconfirmed",
   "disputed": true,
   "src": [
    {
     "label": "2013 Ram 1500 OM (Mopar)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
    },
    {
     "label": "2016 Ram 1500 OM (Mopar)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
    }
   ]
  },
  {
   "topic": "Tire pressure 39 vs 44-49 psi",
   "text": "Owner placard reports give 39 psi (P275/60R20); wheel-size lists 44-49 psi. Go by your door placard.",
   "conf": "forum",
   "disputed": true,
   "src": [
    {
     "label": "airforums: tire operating temperatures",
     "url": "https://www.airforums.com/threads/tire-operating-temperatures.1317549/page-2"
    },
    {
     "label": "RamForumZ: what PSI are you running",
     "url": "https://www.ramforumz.com/threads/what-psi-are-you-guys-running.140986/"
    },
    {
     "label": "tirepressure.org 2014 Ram 1500 (aggregator)",
     "url": "https://tirepressure.org/ram/1500/2014"
    }
   ]
  },
  {
   "topic": "Fuel pump fuse 20 A vs 30 A",
   "text": "20 A (2010 TIPM M22) vs 30 A (2016 PDC F70). Different modules and years, not a true conflict; match your own box cover.",
   "conf": "verified",
   "src": [
    {
     "label": "2010 Dodge Ram Truck OM (dezosmanuals.com)",
     "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
    },
    {
     "label": "2016 Ram 1500 OM (Mopar)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
    }
   ]
  },
  {
   "topic": "Class IV hitch 10,000 vs 11,000 lb",
   "text": "10,000 lb in the 2010 manual vs 11,000 lb trailer / 1,100 lb tongue in 2013 and 2016. A year change.",
   "conf": "verified",
   "src": [
    {
     "label": "2010 Dodge Ram Truck OM (dezosmanuals.com)",
     "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
    },
    {
     "label": "2013 Ram 1500 OM (Mopar)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
    },
    {
     "label": "2016 Ram 1500 OM (Mopar)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
    }
   ]
  },
  {
   "topic": "Paint code prefix",
   "text": "The 2016 FCA sheet prints AXR / GW7 / LAU; aftermarket lists and the Jan 2017 Ram list print PXR / PW7 / PAU. Matching the last two characters is a reading of the two lists, not an FCA rule.",
   "conf": "unconfirmed",
   "disputed": true,
   "src": [
    {
     "label": "2016 Ram Exterior Color Availability (BodyBuilder)",
     "url": "https://www.ramtrucks.com/BodyBuilder/service/Image?imageId=MtQrP%2FFqLY5r%2Fest8MtGjGgHzAHGUTU0WB3rWuqSY7YmQ2vEhuBWBLNuyozWEMC0%0A"
    },
    {
     "label": "Jan 2017 Ram paint code list (catalograck)",
     "url": "https://www.catalograck.com/ImgVD/UNT/UC%5FRAMCodes%5FJan17.pdf"
    }
   ]
  }
 ],
 "overview": {
  "facts": [
   {
    "label": "Scope",
    "text": "2009–2018 DS Ram 1500. The same truck was sold as the \"1500 Classic\" from 2019 to 2024; many \"2009–2018 & Classic\" parts fit those too, but Classic-only details are out of scope. 2500/3500 (DJ/D2) share the cab but not the chassis; HD numbers are left out.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, Ram pickup (4th gen)",
      "url": "https://en.wikipedia.org/wiki/Ram_pickup_(fourth_generation)"
     }
    ]
   },
   {
    "label": "Cabs and beds",
    "text": "Regular Cab with a 6 ft 4 in or 8 ft bed; Quad Cab with 6 ft 4 in; Crew Cab with 5 ft 7 in or 6 ft 4 in.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, Ram pickup (4th gen)",
      "url": "https://en.wikipedia.org/wiki/Ram_pickup_(fourth_generation)"
     }
    ]
   },
   {
    "label": "Fuel tank",
    "text": "26 gal standard, 32 gal optional (Regular Cab longbed and Crew/Quad). EcoDiesel: 26 gal.",
    "conf": "verified",
    "src": [
     {
      "label": "2013 Owner's Manual (factory doc)",
      "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
     },
     {
      "label": "2016 Diesel Supplement (factory doc)",
      "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/100327_16_DS_D_SU_EN_USA_E6_V1.pdf"
     }
    ]
   },
   {
    "label": "Fuel grade (2013 OM)",
    "text": "5.7 \"87 acceptable, 89 recommended\"; 3.6 and 4.7 87 octane.",
    "conf": "verified",
    "src": [
     {
      "label": "2013 Owner's Manual (factory doc)",
      "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
     }
    ]
   },
   {
    "label": "Spark plugs (OMs)",
    "text": "3.7 ZFR6F-11G at 0.043 in; 4.7 two plugs per cylinder: upper FR8TE2 at 0.039–0.040 in, lower FR8T1332 at 0.051 in; 5.7 LZFR5C-11 at 0.043 in (2010); 3.6 at 0.043 in (2013).",
    "conf": "verified",
    "src": [
     {
      "label": "2010 Owner's Manual (factory doc)",
      "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
     },
     {
      "label": "2013 Owner's Manual (factory doc)",
      "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
     }
    ]
   }
  ],
  "engines": {
   "columns": [
    "Years",
    "Engine",
    "Transmission",
    "Rated output"
   ],
   "rows": [
    [
     "2009–2012",
     "3.7 PowerTech V6",
     "4-speed auto",
     "215 hp / 235 lb-ft"
    ],
    [
     "2009–2013",
     "4.7 PowerTech V8",
     "5- or 6-speed auto",
     "310 hp / 330 lb-ft"
    ],
    [
     "2009–2012",
     "5.7 Hemi V8",
     "5- or 6-speed auto",
     "390 hp / 407 lb-ft"
    ],
    [
     "2013",
     "5.7 Hemi",
     "6-speed or 8-speed",
     "395 hp / 407 lb-ft"
    ],
    [
     "2014–2018",
     "5.7 Hemi",
     "6-speed (65RFE) or 8-speed (8HP70)",
     "395 hp / 410 lb-ft"
    ],
    [
     "2013–2018",
     "3.6 Pentastar V6",
     "8-speed (845RE)",
     "305 hp / 269 lb-ft"
    ],
    [
     "2014–2018",
     "3.0 EcoDiesel V6",
     "8-speed (8HP70)",
     "240 hp / 420 lb-ft"
    ]
   ],
   "conf": "verified-secondary",
   "src": [
    {
     "label": "Wikipedia, Ram pickup (4th gen)",
     "url": "https://en.wikipedia.org/wiki/Ram_pickup_(fourth_generation)"
    }
   ],
   "note": "Wikipedia, citing FCA press releases."
  },
  "transmissions": [
   {
    "label": "Names in the 2016 towing chart",
    "text": "845RE (3.6), 65RFE and 8HP70 (5.7), 8HP70 (EcoDiesel).",
    "conf": "verified",
    "src": [
     {
      "label": "2016 Ram 1500 towing chart (factory doc)",
      "url": "https://www.ramtrucks.com/assets/towing_guide/pdf/2016_ram_1500_towing_charts.pdf"
     }
    ]
   },
   {
    "label": "2012 brochure codes",
    "text": "3.7 V6 / 42RLE 4-speed; 4.7 and 5.7 / 65RFE. A yumpu copy of the 2012 towing chart (search extract only) shows 42RLE (DGV) and 65RFE (DG1).",
    "conf": "verified",
    "src": [
     {
      "label": "2012 Ram 1500 brochure (factory doc)",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/ram/2012-1500.pdf"
     }
    ]
   },
   {
    "label": "2010 5.7",
    "text": "The 2010 capacity page names the 545RFE behind the 2010 5.7. Search extract only, not opened.",
    "conf": "unconfirmed",
    "src": [
     {
      "label": "alloemmanuals",
      "url": "https://alloemmanuals.com/manual/Dodge%20and%20Ram/2010/Pickup%20R1500%2C%204D%20Pickup%20Crew%20Cab%2C%205.7%20T%2C%204WD%2C%20Part%20Time/Repair%20and%20Diagnosis/Quick%20Lookups/Fluids"
     }
    ]
   },
   {
    "label": "2010 5.7 service capacities",
    "text": "545RFE service fill 6.5 qt, overhaul 16.9 qt; power steering 1.0 qt; A/C 1.60 lb R-134a, PAG 46 oil 6.0 oz (search extract; page not opened).",
    "conf": "unconfirmed",
    "src": []
   }
  ],
  "axles": {
   "columns": [
    "Year",
    "Engine / trans",
    "Ratios listed"
   ],
   "rows": [
    [
     "2012",
     "3.7 V6 / 42RLE 4-speed",
     "3.55, 3.92 (8,500 lb GCWR)"
    ],
    [
     "2012",
     "4.7 V8 / 65RFE",
     "3.55 (11,250), 3.92 (12,500)"
    ],
    [
     "2012",
     "5.7 Hemi / 65RFE",
     "3.21 (12,000; \"4x2 Hemi only\", code DMC), 3.55 (14,000), 3.92 (14,000–15,500), 4.10 (10,000; \"included on Regular Cab Sport R/T 4x2\", code DMF)"
    ],
    [
     "2016",
     "3.6 / 845RE",
     "3.21, 3.55, 3.92"
    ],
    [
     "2016",
     "5.7 / 65RFE",
     "3.21, 3.55, 3.92"
    ],
    [
     "2016",
     "5.7 / 8HP70",
     "3.21, 3.92"
    ],
    [
     "2016",
     "3.0 EcoDiesel / 8HP70",
     "3.55, 3.92"
    ],
    [
     "2018",
     "3.6 / 845RE",
     "3.21, 3.55 (no 3.92 listed in 2018, unlike 2016)"
    ],
    [
     "2018",
     "5.7 / 65RFE",
     "3.55, 3.92"
    ],
    [
     "2018",
     "5.7 / 8HP70",
     "3.21, 3.92"
    ],
    [
     "2018",
     "3.0 EcoDiesel / 8HP70",
     "3.55, 3.92"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "2012 Ram 1500 brochure (factory doc)",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/ram/2012-1500.pdf"
    },
    {
     "label": "2016 Ram 1500 towing chart (factory doc)",
     "url": "https://www.ramtrucks.com/assets/towing_guide/pdf/2016_ram_1500_towing_charts.pdf"
    },
    {
     "label": "2018 Ram 1500 towing chart (factory doc)",
     "url": "https://www.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/towing/2018%20Ram%201500.pdf"
    }
   ],
   "note": "Parsed from factory PDF text. 2009–2011 and 2017 charts not found or not opened. Ring-gear sizes and front-differential identification are Unknown."
  },
  "axleNotes": [
   {
    "label": "2012 anti-spin",
    "text": "The brochure lists anti-spin (DSA) as included with Outdoorsman 4x4 and the 4.10, and optional with 3.55 or 3.92.",
    "conf": "verified",
    "src": [
     {
      "label": "2012 Ram 1500 brochure (factory doc)",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/ram/2012-1500.pdf"
     }
    ]
   },
   {
    "label": "2018 chart notes",
    "text": "\"Big Horn and Lone Star packages equipped with the 3.0L EcoDiesel and a 3.92 axle ratio have 13,750 lb GCWR.\" Models with 22 in tires (S/C TY4) are 6,200 lb GVWR.",
    "conf": "verified",
    "src": [
     {
      "label": "2018 Ram 1500 towing chart (factory doc)",
      "url": "https://www.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/towing/2018%20Ram%201500.pdf"
     }
    ]
   },
   {
    "label": "Highest 2016 conventional rating",
    "text": "10,640 lb: 5.7 / 65RFE, Regular Cab 8 ft, 4x2, 3.92 (trucktowingcomparison transcription, search extract only).",
    "conf": "unconfirmed",
    "src": []
   }
  ],
  "extraTables": [
   {
    "title": "Fluids and capacities (owner's manuals)",
    "table": {
     "columns": [
      "Item",
      "2010",
      "2013",
      "2016"
     ],
     "rows": [
      [
       "Oil w/ filter, 3.7",
       "5 qt",
       "n/a",
       "n/a"
      ],
      [
       "Oil, 4.7",
       "6 qt",
       "6 qt",
       "n/a"
      ],
      [
       "Oil, 3.6",
       "n/a",
       "6 qt",
       "6 qt"
      ],
      [
       "Oil, 5.7",
       "7 qt (5W-20)",
       "7 qt (5W-20)",
       "7 qt (5W-20)"
      ],
      [
       "Coolant, 3.7/4.7",
       "14 qt",
       "14 qt (4.7)",
       "n/a"
      ],
      [
       "Coolant, 3.6",
       "n/a",
       "14 qt",
       "13.7 qt"
      ],
      [
       "Coolant, 5.7 (1500)",
       "16 qt",
       "16 qt",
       "18.3 qt"
      ],
      [
       "Coolant type",
       "HOAT 5 yr/100k",
       "OAT 10 yr/150k",
       "OAT"
      ],
      [
       "Auto trans fluid",
       "ATF+4",
       "6-speed: ATF+4; 8-speed: Mopar ZF 8&9 Speed ATF",
       "same"
      ],
      [
       "Transfer case",
       "ATF+4 (NVG 246: NVG 246 fluid)",
       "BW44-44 fluid",
       "BW44-44"
      ],
      [
       "Front axle (4x4)",
       "GL-5 75W-90",
       "GL-5 synthetic 75W-85",
       "n/a"
      ],
      [
       "Rear axle",
       "Synthetic 75W-140; LSD + 4 oz additive",
       "75W-140; LSD + 5 oz additive",
       "n/a"
      ],
      [
       "Brake fluid",
       "n/a",
       "DOT 3 (DOT 4 OK)",
       "n/a"
      ],
      [
       "EcoDiesel (2016 Diesel Supplement)",
       "n/a",
       "n/a",
       "Oil 10.5 qt (10 L); coolant 11.6 qt (11 L)"
      ]
     ],
     "conf": "verified",
     "src": [
      {
       "label": "2010 Owner's Manual (factory doc)",
       "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
      },
      {
       "label": "2013 Owner's Manual (factory doc)",
       "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
      },
      {
       "label": "2016 Owner's Manual (factory doc)",
       "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
      },
      {
       "label": "2016 Diesel Supplement (factory doc)",
       "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/100327_16_DS_D_SU_EN_USA_E6_V1.pdf"
      }
     ],
     "disputedRows": [
      6,
      7,
      11
     ]
    }
   }
  ],
  "yearChanges": [
   {
    "year": "2009",
    "text": "New DS. Five-link coil-spring rear suspension replaced leaf springs. Crew Cab added; RamBox optional.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, Ram pickup (4th gen)",
      "url": "https://en.wikipedia.org/wiki/Ram_pickup_(fourth_generation)"
     }
    ]
   },
   {
    "year": "2011",
    "text": "Sold as \"Ram 1500\" rather than \"Dodge Ram\".",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, Ram pickup (4th gen)",
      "url": "https://en.wikipedia.org/wiki/Ram_pickup_(fourth_generation)"
     }
    ]
   },
   {
    "year": "2012",
    "text": "Lug studs change from 9/16-18 to M14 x 1.5 (owner's manuals).",
    "conf": "verified",
    "src": [
     {
      "label": "2011 Owner's Manual (factory doc)",
      "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2011/2500/715.pdf"
     },
     {
      "label": "2012 Owner's Manual (factory doc)",
      "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2012/3500/P130013_12_DSDJD2_OM_EN_USC_E7_V2.pdf"
     }
    ]
   },
   {
    "year": "2013",
    "text": "Refresh: new grille and bumper, optional projector headlamps, 3.6 Pentastar, available 8-speed, electric power steering, active grille shutters, optional four-corner air suspension, aluminum hood and front control arms.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, Ram pickup (4th gen)",
      "url": "https://en.wikipedia.org/wiki/Ram_pickup_(fourth_generation)"
     }
    ]
   },
   {
    "year": "2013",
    "text": "Crank reluctor: 32-tooth up to 2012 and some very early 2013s; 58-tooth on most 2013+. Matters for engine and PCM swaps.",
    "conf": "forum",
    "src": [
     {
      "label": "RamForum 8-speed swap",
      "url": "https://www.ramforum.com/threads/8-speed-swap.180898/"
     }
    ]
   },
   {
    "year": "2014",
    "text": "3.0 EcoDiesel (8HP70). 5.7 rated 395 hp / 410 lb-ft.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, Ram pickup (4th gen)",
      "url": "https://en.wikipedia.org/wiki/Ram_pickup_(fourth_generation)"
     }
    ]
   },
   {
    "year": "2015",
    "text": "Rebel trim added (raised suspension, unique grille), with the 3.6 or 5.7.",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, Ram pickup (4th gen)",
      "url": "https://en.wikipedia.org/wiki/Ram_pickup_(fourth_generation)"
     }
    ]
   },
   {
    "year": "2019–2024",
    "text": "The DS carried on as the \"1500 Classic\".",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "Wikipedia, Ram pickup (4th gen)",
      "url": "https://en.wikipedia.org/wiki/Ram_pickup_(fourth_generation)"
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
     "2015 EcoDiesel 4x2, 3.55",
     "26.4 mpg average (best tank 28.6)"
    ],
    [
     "2016 Hemi 4x4, 3.92, air suspension (same driver)",
     "18 mpg (best 21.3)"
    ],
    [
     "Another owner",
     "Hemi 16.1 average vs EcoDiesel 8.4 cents/mile"
    ],
    [
     "5.7 Hemi, various (2018 thread)",
     "13.8 (city) to about 21.5 (highway)"
    ],
    [
     "2013 5.7 8HP70, 3.21",
     "18.1 mpg over about 45,000 Fuelly-logged miles"
    ]
   ],
   "conf": "forum",
   "src": [
    {
     "label": "EcoDieselRam",
     "url": "https://www.ecodieselram.com/forum/threads/cost-per-mile-difference-in-ecodiesel-and-hemi-my-experience.1021/"
    },
    {
     "label": "RamForumz Hemi mileage",
     "url": "https://www.ramforumz.com/threads/hemi-real-world-gas-mileage.245863/"
    }
   ],
   "note": "Owners disagree on the 3.21 vs 3.92 penalty: one feels 3.92 is worse; others don't quantify it. Fuelly pages were blocked, so no fleet averages."
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
     "5x139.7 (5x5.5), all years 2009–18",
     "verified"
    ],
    [
     "Hub bore",
     "77.8 mm (checkfitment: 2012–18 \"verified\"; 2009–11 \"candidate\")",
     "verified"
    ],
    [
     "Stud thread",
     "2009–11: 9/16-18; 2012–18: M14 x 1.5",
     "verified"
    ],
    [
     "Lug hex",
     "22 mm (2013/2016 OM)",
     "verified"
    ],
    [
     "Lug torque",
     "130 ft-lb (other figures by year: see Read first)",
     "verified"
    ],
    [
     "Not the 2019+ DT",
     "The DT is 6x139.7; DT wheels won't fit",
     "verified"
    ]
   ],
   "src": [
    {
     "label": "checkfitment 5x139.7",
     "url": "https://checkfitment.com/bolt-pattern/5x139.7/"
    },
    {
     "label": "2011 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2011/2500/715.pdf"
    },
    {
     "label": "2012 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2012/3500/P130013_12_DSDJD2_OM_EN_USC_E7_V2.pdf"
    },
    {
     "label": "2013 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
    },
    {
     "label": "2016 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
    },
    {
     "label": "Rough Country 363",
     "url": "https://www.roughcountry.com/product/dodge-front-leveling-lift-kit-363"
    }
   ],
   "disputedRows": [
    4
   ]
  },
  "stock": {
   "columns": [
    "Years",
    "Tire",
    "Wheel",
    "Offset",
    "Notes",
    "Confidence"
   ],
   "rows": [
    [
     "2013–18",
     "265/70R17",
     "7x17",
     "ET25.4",
     "3.6",
     "verified"
    ],
    [
     "2013–18",
     "275/70R17",
     "8x17",
     "ET25.4",
     "3.6; Rebel uses a 17 in OE size with load index 118",
     "verified"
    ],
    [
     "2013–18",
     "275/60R20",
     "8x20",
     "ET19.05",
     "EcoDiesel, 3.6, 5.7",
     "verified"
    ],
    [
     "2013–18",
     "285/45R22",
     "9x22",
     "ET19.05",
     "OE option",
     "verified"
    ],
    [
     "2012",
     "P265/70R17 (BSW or OWL all-season)",
     "17x7 (painted cast aluminum, or Argent styled steel) and 17x8 (steel, chrome-clad steel, chrome-clad aluminum)",
     "n/s",
     "Brochure prints no offsets",
     "verified"
    ],
    [
     "2012",
     "LT275/70R17C OWL on/off-road",
     "n/s",
     "n/s",
     "Option TXN",
     "verified"
    ],
    [
     "2012",
     "P275/60R20 BSW/OWL",
     "20x8 (painted, or polished/painted aluminum) and 20x9 (chrome-clad, or polished forged aluminum)",
     "n/s",
     "",
     "verified"
    ],
    [
     "2012",
     "P285/45R22",
     "22x9 polished aluminum",
     "n/s",
     "Regular Cab Sport R/T 4x2 only",
     "verified"
    ]
   ],
   "src": [
    {
     "label": "wheel-size 2016",
     "url": "https://www.wheel-size.com/size/ram/1500/2016/"
    },
    {
     "label": "2012 Ram 1500 brochure (factory doc)",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/ram/2012-1500.pdf"
    }
   ],
   "note": "wheel-size lists stock pressures of 3.0–3.4 bar front (44–49 psi); use your door placard. 2009–11 is likely similar to 2012 (inference, not sourced). 2009–12 OE offsets Unknown."
  },
  "stances": [
   {
    "id": "leveled",
    "title": "Leveled",
    "subtitle": "Rough Country 363 (2.5 in, 2012–18 4WD, coil trucks only), \"up to 33 in\"",
    "conf": "verified",
    "src": [
     {
      "label": "Rough Country 363",
      "url": "https://www.roughcountry.com/product/dodge-front-leveling-lift-kit-363"
     }
    ],
    "note": "Does not fit air-suspension (Rebel, Limited and optioned) or Warlock trucks. The kit \"requires disassembling your strut\": use a proper spring compressor and the factory strut-mount and shock-rod torque.",
    "rows": [
     {
      "wheel": "Factory 17, 18 or 20",
      "tire": "33x12.50",
      "fit": "No trimming note (\"stance 0.0\", flush)",
      "conf": "verified"
     },
     {
      "wheel": "17x9 +18/+20",
      "tire": "33x12.50R17",
      "fit": "No trimming note",
      "conf": "verified"
     },
     {
      "wheel": "18x9 +18/+20",
      "tire": "33x12.50R18",
      "fit": "No trimming note",
      "conf": "verified"
     },
     {
      "wheel": "20x9 +18/+20",
      "tire": "285/55R20, 305/55R20, 33x12.50R20",
      "fit": "No trimming note",
      "conf": "verified"
     },
     {
      "wheel": "20x9 +0/+1",
      "tire": "33x12.50R20",
      "fit": "No trimming note",
      "conf": "verified"
     },
     {
      "wheel": "20x10 -18/-19",
      "tire": "285/55R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "22x10 -18/-19",
      "tire": "285/45R22",
      "fit": "Minor trimming",
      "conf": "verified"
     }
    ]
   },
   {
    "id": "lift-2-3",
    "title": "Lifted 2–3\"",
    "subtitle": "No table",
    "conf": "unknown",
    "note": "No 2–3 in lift fitment table in the guide. The RC 363 leveling table is the nearest data.",
    "rows": []
   },
   {
    "id": "lift-4",
    "title": "Lifted 4\"",
    "subtitle": "Rough Country 333 (2012–18 4WD)",
    "conf": "verified",
    "src": [
     {
      "label": "Rough Country 333",
      "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-333c"
     }
    ],
    "note": "Requires 20 in or larger wheels. Not for the 3.6 (its struts don't suit the V6's weight), air suspension or Warlock. Not recommended for AWD.",
    "rows": [
     {
      "wheel": "20x9 -12",
      "tire": "35x12.50R20",
      "fit": "No trim note",
      "conf": "verified"
     },
     {
      "wheel": "20x9 +0/+1",
      "tire": "35x12.50R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x10 -18/-19/-25",
      "tire": "35x12.50R20",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "20x9 +0/+1",
      "tire": "295/60R20",
      "fit": "No trim note",
      "conf": "verified"
     },
     {
      "wheel": "22x10 -18/-19/-24/-25",
      "tire": "35x12.50R22",
      "fit": "Minor trimming",
      "conf": "verified"
     },
     {
      "wheel": "22x10 -18/-19",
      "tire": "285/55R22",
      "fit": "No trim note",
      "conf": "verified"
     }
    ]
   },
   {
    "id": "lift-6",
    "title": "Lifted 6\"",
    "subtitle": "RC 332 (2012–18 4WD) and RC 329 (2009–11 4WD)",
    "conf": "verified",
    "disputed": true,
    "src": [
     {
      "label": "Rough Country 332",
      "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-332c"
     },
     {
      "label": "Rough Country 329",
      "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-329c"
     }
    ],
    "note": "Both require 20 in or larger wheels; not recommended for AWD. RC 329 lists 37x12.50R20 on 20x9 +0 with no note but on 20x9 +1 \"Trimming Required\" (the page lists both). RC 329 from $1,299.95 (base listing out of stock); N3 struts version $1,649.95.",
    "rows": [
     {
      "wheel": "RC 332: 20x9 +0/+1/-12",
      "tire": "35x12.50R20",
      "fit": "No note",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 332",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-332c"
       }
      ]
     },
     {
      "wheel": "RC 332: 20x9 +0/+1",
      "tire": "37x12.50R20",
      "fit": "Minor trimming",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 332",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-332c"
       }
      ]
     },
     {
      "wheel": "RC 332: 20x10 -18/-19",
      "tire": "37x12.50R20",
      "fit": "Trimming required",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 332",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-332c"
       }
      ]
     },
     {
      "wheel": "RC 332: 22x10 -18/-19",
      "tire": "37x12.50R22",
      "fit": "Minor trimming",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 332",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-332c"
       }
      ]
     },
     {
      "wheel": "RC 332: 20x12 -44",
      "tire": "n/s",
      "fit": "Trimming required",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 332",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-332c"
       }
      ]
     },
     {
      "wheel": "RC 329: 20x9 +0/+1/-12",
      "tire": "35x12.50R20",
      "fit": "No note",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 329",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-329c"
       }
      ]
     },
     {
      "wheel": "RC 329: 20x10 -18/-19/-25",
      "tire": "35x12.50R20",
      "fit": "Minor trimming",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 329",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-329c"
       }
      ]
     },
     {
      "wheel": "RC 329: 20x9 +0",
      "tire": "37x12.50R20",
      "fit": "No note",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 329",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-329c"
       }
      ],
      "disputed": true
     },
     {
      "wheel": "RC 329: 20x9 +1",
      "tire": "37x12.50R20",
      "fit": "\"Trimming Required\"",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 329",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-329c"
       }
      ],
      "disputed": true
     },
     {
      "wheel": "RC 329: 20x10 -18/-19",
      "tire": "37x12.50R20",
      "fit": "Minor trimming",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 329",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-329c"
       }
      ]
     },
     {
      "wheel": "RC 329: 22x10 -18/-19/-25",
      "tire": "35x12.50R22",
      "fit": "Minor trimming",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 329",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-329c"
       }
      ]
     },
     {
      "wheel": "RC 329: 22x12 -44",
      "tire": "35x12.50R22",
      "fit": "Trimming required",
      "conf": "verified",
      "src": [
       {
        "label": "Rough Country 329",
        "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-329c"
       }
      ]
     }
    ]
   },
   {
    "id": "lowered",
    "title": "Lowered",
    "subtitle": "2WD, 2/4 drops",
    "conf": "forum",
    "disputed": true,
    "src": [
     {
      "label": "RamForumz 2015 reg cab lowered",
      "url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/"
     }
    ],
    "note": "SAFETY: one owner on a McGaughys 44050 with 22x10 / 305/45R22 (2015 RC) had the tire rub through the right-rear brake hose, causing a near-total brake loss on the freeway. Check rear brake-hose clearance. Kits: Belltech 964 (2/4, Regular Cab 2WD), Belltech 963ND (2/4, Quad/Crew 2WD), McGaughys 44050 (2/4, all cabs 2WD). Belltech excludes air-suspension trucks (964 page). Drop spindles move the wheel outboard about 1/2 in, and the tie-rod end may sit about 3/8 in proud in the taper (owner says McGaughys told him it's OK). 3/5 and 4/6 DS kits: none found; treat 4/6 on a DS as custom or unverified. 4x4 drops: none found. Belltech and Hotchkis kits have you cut out the factory front bump-stop cups (3rd-gen thread, DodgeTalk).",
    "noteSrc": [
     {
      "label": "Belltech 964",
      "url": "https://www.belltech.com/products/lowering-kit-w-o-shocks-964/"
     },
     {
      "label": "DodgeTalk 2/4 (3rd gen)",
      "url": "https://www.dodgetalk.com/threads/tire-size-for-20s-and-a-2-4-drop.233718/"
     }
    ],
    "rows": [
     {
      "drop": "2/4 McGaughys 44050",
      "truck": "2015 RC",
      "wheel": "22x10",
      "tire": "305/45R22",
      "fit": "TIRE RUBBED THROUGH THE RIGHT-REAR BRAKE HOSE: near-total brake loss on the freeway. Check rear brake-hose clearance",
      "conf": "forum",
      "disputed": true,
      "src": [
       {
        "label": "RamForumz 2015 reg cab lowered",
        "url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/"
       }
      ]
     },
     {
      "drop": "2/4 Belltech 964SP",
      "truck": "2013 RCSB",
      "wheel": "22x10 SRT-10 replica",
      "tire": "305/45R22",
      "fit": "\"do NOT rub\"",
      "conf": "forum",
      "disputed": true,
      "src": [
       {
        "label": "RamForumz 2015 reg cab lowered",
        "url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/"
       }
      ]
     },
     {
      "drop": "2/4",
      "truck": "2015 Crew",
      "wheel": "20x9",
      "tire": "305/50R20",
      "fit": "Ran it",
      "conf": "forum",
      "src": [
       {
        "label": "RamForumz 2015 reg cab lowered",
        "url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/"
       }
      ]
     },
     {
      "drop": "2/4",
      "truck": "2015 Crew",
      "wheel": "22 in, +15 mm",
      "tire": "305/45R22",
      "fit": "Same owner suggests 305/40R22 (about 31 in) to be safe",
      "conf": "forum",
      "src": [
       {
        "label": "RamForumz 2015 reg cab lowered",
        "url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/"
       }
      ]
     },
     {
      "drop": "2/4 McGaughys",
      "truck": "2017",
      "wheel": "22x9 +18",
      "tire": "275/45R22",
      "fit": "customwheeloffset gallery title (search summary; page returned HTTP 405)",
      "conf": "unconfirmed",
      "src": []
     },
     {
      "drop": "4/6 Belltech",
      "truck": "2018",
      "wheel": "22x9 +35",
      "tire": "275/45R22",
      "fit": "\"slight full-lock rub\" (gallery title, search summary; page returned HTTP 405)",
      "conf": "unconfirmed",
      "src": []
     }
    ]
   }
  ],
  "tpms": [
   {
    "label": "2010 and 2013",
    "text": "Both have TPMS. The 2013 OM describes \"wheel rim mounted electronic sensors\" and says a low-pressure warning comes on below the threshold (it mentions 27 psi in an example). The 2010 OM shows a TPMS telltale.",
    "conf": "verified",
    "src": [
     {
      "label": "2013 Owner's Manual (factory doc)",
      "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
     },
     {
      "label": "2010 Owner's Manual (factory doc)",
      "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
     }
    ]
   },
   {
    "label": "2010–2013 sensor",
    "text": "Schrader 433 MHz, OE 56029398AB (cross-refs include 56029400A-series and 68241067AB). Sold with valve-stem hardware; \"a TPMS relearn is required after install\". tpms.com lists $49.98 but shows it currently unavailable.",
    "conf": "verified",
    "src": [
     {
      "label": "tpms.com",
      "url": "https://www.tpms.com/Ram-Schrader-OEM-Schrader-TPMS-56029398AB-p/s0398-ram.htm"
     }
    ]
   },
   {
    "label": "2014 (Jan) – 2018 (Mar) builds",
    "text": "TRW, OE 68239720AB, snap-in version 4 sensor (cross-refs include 68157568AA and 68186572AA).",
    "conf": "verified",
    "src": [
     {
      "label": "tiptoptpms",
      "url": "https://www.tiptoptpms.com/pages/tpms_vehicle_information.php?make=Ram&model=1500&year=2014+-+2018_"
     }
    ]
   },
   {
    "label": "2009",
    "text": "A search summary gives 68078768AA at 433 MHz. Relearn method (drive-learn vs scan tool) not captured.",
    "conf": "unconfirmed",
    "src": []
   }
  ]
 },
 "problems": [
  {
   "id": "brake-hose-rub",
   "title": "SAFETY: tire rubs through rear brake hose on a lowered truck",
   "years": "2015 Regular Cab, 2/4 drop (one owner)",
   "symptoms": "Near-total brake loss on the freeway",
   "cause": "McGaughys 44050 2/4 drop with 22x10 wheels and 305/45R22 tires; the tire rubbed through the right-rear brake hose",
   "fix": "Check rear brake-hose clearance. Brake banjo bolts 27 / 28 N·m (20 ft-lb); bleed screws 19 N·m (14 ft-lb) per the 2016 factory table.",
   "parts": [
    "low-mcgaughys-44050"
   ],
   "conf": "forum",
   "src": [
    {
     "label": "RamForumz 2015 reg cab lowered",
     "url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/"
    }
   ],
   "guide": "brakes"
  },
  {
   "id": "manifold-bolts",
   "title": "Cold-start tick, cylinders 7 and 8 (Hemi exhaust manifold bolts)",
   "years": "2009 Ram 1500 5.7 built before 14-Aug-2009 (the TSB); owners report it on later years too",
   "symptoms": "Tick at cold start that fades as the engine warms",
   "cause": "Broken or loose exhaust-manifold bolts on cylinders 7 and 8",
   "fix": "TSB 11-002-11: replace with stainless, higher-strength studs/bolts (stud 06509544AA; bolt 06507746AA as needed). Manifold torque is 25 N·m / 18 ft-lb.",
   "parts": [
    "oem-manifold-stud",
    "oem-manifold-bolt"
   ],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 11-002-11 (forum-hosted PDF)",
     "url": "https://www.dodgetalk.com/attachments/sb-11-002-11-pdf.346902/"
    }
   ],
   "confNote": "Later years: forum-reported (RamForum thread, not opened).",
   "guide": "hemi-engine",
   "tips": [
    {
     "text": "For a bolt broken flush, weld a .060 in washer to the stub, then weld on a nut with a slightly larger ID and back it out; even a 110 V flux-core MIG works. Owners say this beats extractors or drilling, which risk the water jacket.",
     "source_url": "https://www.ramforum.com/threads/best-method-for-extracting-broken-exhaust-manifold-studs.141116/",
     "source_name": "RamForum: Best method for extracting broken exhaust manifold studs?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Before welding, disconnect the battery ground and clamp the welder ground to a bolt threaded into an adjacent manifold bolt hole.",
     "source_url": "https://www.ramforum.com/threads/exhaust-manifold-bolt-extraction.207629/",
     "source_name": "RamForum: Exhaust Manifold Bolt Extraction",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A shop that says the engine must come out for broken manifold bolts is wrong: owners do it through the wheel well in 2-3 hours a side (front wheel off, inner fender down), and belt-sand the warped manifold flat before refitting with new hardware. Change the plugs while you're in there.",
     "source_url": "https://www.ramforum.com/threads/multiple-broken-exhaust-manifold-bolts.213362/",
     "source_name": "RamForum: Multiple Broken Exhaust Manifold Bolts",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The driver-side manifold comes out in only one orientation past the dipstick tube. If you can't find it, remove the lower dipstick tube bolt and tap the tube upward with vise grips; disconnecting both collectors also lets the Y-pipe drop for room.",
     "source_url": "https://www.ramforum.com/threads/multiple-broken-exhaust-manifold-bolts.213362/",
     "source_name": "RamForum: Multiple Broken Exhaust Manifold Bolts",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "hemi-lifter",
   "title": "Hemi lifter / cam failure (\"Hemi tick\")",
   "years": "5.7 Eagle, mostly reported on 2011–2014",
   "symptoms": "Persistent tick, misfire, a flattened cam lobe",
   "cause": "Seized or worn lifter roller bearings",
   "fix": "Replace the cam and all lifters. Owners say the later non-MDS (Hellcat-type) lifter retrofits back to 2003. Owner tips: avoid long idling; short trips without a highway run build condensation sludge.",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "RamForum Hemi lifter issues",
     "url": "https://www.ramforum.com/threads/hemi-lifter-issues.186881/"
    }
   ],
   "disputed": true,
   "confNote": "Owners disagree on the years and on whether MDS plays a role.",
   "guide": "hemi-engine",
   "tips": [
    {
     "text": "A lifter-failure owner found the manual calls for 4,000-mile oil changes with heavy idling or low-rpm driving; his dealer had him on 7,500. If your idle hours are high, use the severe interval.",
     "source_url": "https://www.ramforum.com/threads/5-7l-hemi-lifter-cam-protection.217199/page-2",
     "source_name": "RamForum: 5.7L Hemi - Lifter/Cam Protection (page 2)",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Common owner prevention: raise idle to 750-800 rpm with a tuner, and run a high-moly oil such as Red Line 5W-30 or add Lubegard Biotech (in a forum poll 59 of 99 said Red Line silenced their tick). Owners disagree on whether oil choice or locking out MDS changes anything; others call it a quality-control lottery.",
     "source_url": "https://www.ramforum.com/threads/lifter-failure-preventions.194248/",
     "source_name": "RamForum: Lifter failure preventions?",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    },
    {
     "text": "Hemi lifter care: let the engine reach temperature and avoid long idles and short-trip-only use, which owners link to sludge. If replacing lifters, one owner prefers the newest OEM non-MDS lifter or Johnson lifters.",
     "source_url": "https://www.ramforum.com/threads/hemi-lifter-issues.186881/",
     "source_name": "RamForum: Hemi lifter issues",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "8hp-slow-downshift",
   "title": "8HP70 slow downshift",
   "years": "2013–14 DS 8HP70, built before 27-Jan-2014",
   "symptoms": "\"Does not downshift quick enough under medium to heavy throttle\"",
   "cause": "Calibration",
   "fix": "TSB 21-011-14: TCM flash.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 21-011-14 (NHTSA PDF)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2014/SB-10069302-0335.pdf"
    }
   ]
  },
  {
   "id": "8spd-adapt",
   "title": "8-speed poor shift quality, adaptation",
   "years": "2013–14 OS/DS 845RE (and others)",
   "symptoms": "Poor shift quality",
   "cause": "Adaptation values",
   "fix": "TSB 21-012-14 Rev. A: subjective shift-quality rating, then the adaptation drive-learn procedure. Also required after a transmission, valve body or TCU replacement, or after clearing adaptives.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 21-012-14 (NHTSA PDF)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2014/SB-10069308-0335.pdf"
    }
   ],
   "tips": [
    {
     "text": "Chrysler's drive-learn: with trans temp 86-212 F, accelerate from a stop to 40-50 mph so it upshifts to 7th, lift off and coast through the 6-5 downshift down to 3rd, and repeat until each clutch shows a filling counter of at least 6 and fast-filling counter of at least 2 (8HP70).",
     "source_url": "https://static.oemdtc.com/NHTSA-PDFs/MC-10221035-9999.pdf",
     "source_name": "Chrysler TSB 21-012-14 Rev. B: 8 Speed Transmission Shift Adaptation, Drive Learn Procedure",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "8hp-2015",
   "title": "8HP70 shift enhancements, 2015",
   "years": "2015 DS 5.7 + 8HP70 (sales code EZH; DFD/DFK)",
   "symptoms": "Listed improvements for WK; DS conditions not captured",
   "cause": "Calibration",
   "fix": "TSB 21-064-15 (supersedes 21-028-15): TCM flash.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 21-064-15 PDF",
     "url": "https://static.oemdtc.com/TSB/21-064-15.pdf"
    }
   ],
   "confNote": "Verified header and applicability only; DS-specific symptom text not captured."
  },
  {
   "id": "limp-2017",
   "title": "Stuck in a gear in limp mode / shift quality, 2017",
   "years": "DS built on or before 1-Jun-2017",
   "symptoms": "Poor shift quality, stuck in a fixed gear in limp mode",
   "cause": "Calibration",
   "fix": "TSB 21-013-17 Rev. A: TCM flash.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 21-013-17 (NHTSA PDF)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2017/MC-10223668-9999.pdf"
    }
   ]
  },
  {
   "id": "egr-recall",
   "title": "EcoDiesel EGR cooler fire risk (recall)",
   "years": "2014–2019 Ram 1500 / Classic 3.0 EcoDiesel, built 12-Jun-2013 to 23-Oct-2019",
   "symptoms": "May have none before failure",
   "cause": "The EGR cooler cracks internally from thermal fatigue; coolant vapor can combust in the intake manifold",
   "fix": "Recall 19V-757 (FCA VB1): new EGR cooler kit.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA 19V-757",
     "url": "https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V757-7573.PDF"
    }
   ],
   "tips": [
    {
     "text": "Set up a Mopar.com account with the VIN to see whether the EGR cooler recall has been done; one 2018 buyer confirmed his that way. If you keep the EGR cooler, watch the coolant level in the degas bottle.",
     "source_url": "https://www.ram1500diesel.com/threads/proactive-on-the-egr-cooler-and-oil-cooler-issues-2018-model.70637/",
     "source_name": "RAM 1500 Diesel Forum: Proactive on the EGR cooler and Oil Cooler issues?- 2018 model",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "airbag-recall",
   "title": "Steering-wheel harness chafe, airbag (recall)",
   "years": "2012–2014 Ram 1500 with the EVIC (sales code LAZ), built 18-Jan-2011 to 7-Oct-2014",
   "symptoms": "Airbag light; risk of inadvertent deployment",
   "cause": "The harness chafes against the driver airbag retainer spring",
   "fix": "Recall 15V-459 (R36): inspect, repair, add protective caps.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA 15V-459",
     "url": "https://static.nhtsa.gov/odi/rcl/2015/RCLRPT-15V459-8039.PDF"
    }
   ]
  },
  {
   "id": "air-sag",
   "title": "Air suspension sagging overnight",
   "years": "2013+ with four-corner air (standard on Rebel and Limited)",
   "symptoms": "The rear is on the bump stops some mornings; the compressor runs a long time when towing",
   "cause": "Pinhole-leaking bags (an owner says \"check the rear left first\"), leaking lines or valve block, a loose compressor",
   "fix": "Dealer quoted $3,500 for two rear bags (one owner, 2014 Limited). Others converted to coils (one owner reports about $830 from RockAuto with Rancho front, variable-rate rear coils, Gabriel shocks) or bought a Bilstein 5100 conversion kit. Find leaks with soapy water starting at the left rear bag.",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "RamForum air ride leaks",
     "url": "https://www.ramforum.com/threads/air-ride-suspension-leaks.196578/"
    }
   ],
   "guide": "swap-air-coil",
   "tips": [
    {
     "text": "Pulling the compressor fuse does not isolate a leak: the valve block keeps cycling and moving air between bags and the tank. The driver side also sinks a little more from the fuel tank and driver weight.",
     "source_url": "https://www.ramforum.com/threads/diagnosing-air-suspension-leaks-suggestions.203072/",
     "source_name": "RamForum: Diagnosing Air Suspension Leaks - Suggestions?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Soap-test each air bag at each ride height with the rear dust shields pulled back; a porous bag may only leak at one height because it rolls and seals at others. After replacing parts, purge and refill the system with nitrogen.",
     "source_url": "https://www.ramforum.com/threads/diagnosing-air-suspension-leaks-suggestions.203072/",
     "source_name": "RamForum: Diagnosing Air Suspension Leaks - Suggestions?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "To keep a leaking truck from dropping while parked, hold both ride-height dash buttons for at least 5 seconds to turn the air suspension off. One owner's leak showed only at Normal height, not Off Road 1 or 2.",
     "source_url": "https://www.ramforum.com/threads/diagnosing-air-suspension-leaks-suggestions.203072/",
     "source_name": "RamForum: Diagnosing Air Suspension Leaks - Suggestions?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "pentastar-head",
   "title": "3.6 Pentastar left-head misfire (cyl 2/4/6)",
   "years": "2013 DS 3.6 built on or before 25-Jul-2012, originally listed; removed in Rev. A",
   "symptoms": "MIL; P0300/P0302/P0304/P0306",
   "cause": "Valve-seat/guide wear on the left head (per the bulletin's extension)",
   "fix": "Leak-down test; ≥25% on 2/4/6 → replace the left head (other FCA models get a 10 yr/150k extension, X56). DS removed from coverage.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "TSB 09-002-14",
     "url": "https://static.nhtsa.gov/odi/tsbs/2014/SB-10062952-0335.pdf"
    },
    {
     "label": "Rev. A",
     "url": "https://static.oemdtc.com/NHTSA-PDFs/MC-10139771-9999.pdf"
    }
   ],
   "confNote": "DS-specific failure reports: none found.",
   "guide": "pentastar-head"
  },
  {
   "id": "tipm",
   "title": "TIPM / fuel-pump-relay no-start",
   "years": "2011–13 FCA; Ram 1500 per NHTSA petition review",
   "symptoms": "Crank/no-start, intermittent stall",
   "cause": "TIPM-7 internal fuel-pump relay",
   "fix": "The recalls (14V-530, 15V-115) cover Grand Cherokee and Durango only. NHTSA denied defect petition DP14-004 for the wider population, Ram included. No Ram recall exists.",
   "parts": [],
   "conf": "unconfirmed",
   "src": [
    {
     "label": "Federal Register denial",
     "url": "https://www.federalregister.gov/documents/2015/07/30/2015-18672/denial-of-motor-vehicle-defect-petition"
    }
   ],
   "confNote": "Search extract only; the extract describes the Ram fuel-pump-relay complaint rate as zero. Owner-level TIPM failures on DS not substantiated."
  },
  {
   "id": "ecod-oil-cooler",
   "title": "EcoDiesel oil cooler failure",
   "years": "2014–16 EcoDiesel (Gen 2), and Jeep 3.0",
   "symptoms": "Oil in the coolant degas bottle, overheating, sludge in coolant",
   "cause": "The oil cooler/heat exchanger leaks internally; oil-side pressure exceeds coolant pressure, so oil goes into the coolant",
   "fix": "Dealer approaches varied: (a) new cooler plus 10+ flushes, sometimes a new degas bottle; (b) replacing the engine, radiator, heater core, turbo, hoses, 3-way valve and trans heat exchanger. One owner replaced the cooler himself at 13,500 mi, flushed repeatedly, and was fine at 68k. Oil cooler bolts 30 N·m (22 ft-lb). No TSB found.",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "ram1500diesel.com",
     "url": "https://www.ram1500diesel.com/threads/oil-cooler-failure-repair-solutions.68098/"
    }
   ],
   "disputed": true,
   "confNote": "Owners disagree on whether trace coolant in the oil is fatal.",
   "guide": "ecodiesel",
   "tips": [
    {
     "text": "Veteran owners say the stock oil cooler is fine for daily driving on later trucks and not worth replacing preemptively. If you tow, a larger remote cooler also needs an oil thermostat (two more lines and fittings) so the oil warms up in cold weather.",
     "source_url": "https://www.ram1500diesel.com/threads/proactive-on-the-egr-cooler-and-oil-cooler-issues-2018-model.70637/",
     "source_name": "RAM 1500 Diesel Forum: Proactive on the EGR cooler and Oil Cooler issues?- 2018 model",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "ecod-timing",
   "title": "EcoDiesel timing-gear slip",
   "years": "2014–16 EcoDiesel",
   "symptoms": "Sudden rough running or no-start",
   "cause": "Cam/timing gear slipping; the engine is interference",
   "fix": "Valve/piston damage likely if it slips far. One veteran poster calls it \"a rarely reported occurrence\" despite \"early on fear mongering\". No TSB/recall found.",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "ram1500diesel.com",
     "url": "https://www.ram1500diesel.com/threads/timing-chain-slipping-always-catastrophic.67900/"
    }
   ]
  },
  {
   "id": "dash",
   "title": "Dash cracking",
   "years": "DS 2009–18",
   "symptoms": "n/a",
   "cause": "n/a",
   "fix": "Not a known DS issue. Owners of a 2009 (165k mi, parked outside), a 2011 and a 2017 report no cracks; the thread starter found no complaints. The 2nd/3rd-gen Rams were the cracking trucks.",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "DodgeForum",
     "url": "https://dodgeforum.com/forum/4th-gen-ram-general-discussion-non-tech/410391-any-dashboards-cracking-in-4th-gen-rams.html"
    }
   ]
  },
  {
   "id": "rust",
   "title": "Rust",
   "years": "All years, worst in the salt belt",
   "symptoms": "Inner and outer rockers, cab corners, rear wheel wells \"first places to show up\"",
   "cause": "Salt, trapped moisture",
   "fix": "Rinse cavities; Fluid Film or similar each fall. Surface rust on the driveshaft and axle is cosmetic (one owner says the driveshaft is weathering steel, unverified). Weld-in rear upper wheel-arch patch panels are sold for 2009–18 (search extract).",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "RamForum 2016 rust",
     "url": "https://www.ramforum.com/threads/2016-ram-1500-rust-issues.172920/"
    }
   ],
   "tips": [
    {
     "text": "The fuel tank strap mounting plates have no drain holes and rot from trapped salt water. Drill 1/8 in drain holes in the two driver-side strap mounts and the two passenger-side crossmember attachment points.",
     "source_url": "https://www.ramforum.com/threads/how-to-fluid-film-your-truck.111020/",
     "source_name": "RamForum: How to Fluid Film your truck",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Rust starts under the fiberglass tape inside the front fenders, behind the bed-to-cab gasket and above the rear wheel wells where the brace is spot welded. Get a 360 degree wand into the rockers (two cavities: bottom plugs and taped holes on the back), the cab corners through the seat-belt bolt plug in the rear door jamb, and the hood corners through the hole beside the grille.",
     "source_url": "https://www.ramforum.com/threads/how-to-fluid-film-your-truck.111020/",
     "source_name": "RamForum: How to Fluid Film your truck",
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
   "title": "Wheels, lugs and front hub nut",
   "summary": "Use 130 ft-lb on the lugs.",
   "conf": [
    "verified",
    "verified-secondary"
   ],
   "src": [
    {
     "label": "2010 Owner's Manual (factory doc)",
     "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
    },
    {
     "label": "2012 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2012/3500/P130013_12_DSDJD2_OM_EN_USC_E7_V2.pdf"
    },
    {
     "label": "2016 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
    },
    {
     "label": "2016 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Tradesman%2C%204D%20Pickup%2C%203.0L%20Eng%20VIN%20M%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    },
    {
     "label": "2014 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2014/1500%20Tradesman%2C%202D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%20RWD%2C%20Trans%20Mfr%20CD%208HP70/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    }
   ],
   "steps": [
    {
     "text": "2009–11 studs are 9/16-18; 2012–18 are M14 x 1.5 with a 22 mm hex.",
     "conf": "verified"
    },
    {
     "text": "Lug torque figures differ by manual (120–150 / 130–160 ranges in 2010–11; 130 cone / 129 flanged in 2012–16 OMs; 140 flanged in 2016 Common Specs). 130 ft-lb is allowed by every source.",
     "disputed": true
    },
    {
     "text": "Front axle/hub nut 185 ft-lb (251 N·m) per 2014 Common Specs; the 2016 table lists the half-shaft nut at 250 N·m (184 ft-lb). These agree.",
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
      "Lug nuts",
      "130 ft-lb"
     ],
     [
      "Front axle/hub nut",
      "185 ft-lb (251 N·m)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "front-susp",
   "type": "diy",
   "title": "Front suspension torque, 1500 4x2 and 4x4 (2016)",
   "summary": "Factory table. New ball-joint nuts required.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2016 front suspension torque table (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Sport%2C%204D%20Pickup%20Crew%20Cab%2C%204WD/Repair%20and%20Diagnosis/Suspension/Wheel%20Alignment/Front%20Suspension%20%26%20Wheel%20Alignment%20-%201500/Front%2C%20Independent%20Front%20Suspension/Specifications/Torque%20Specifications/"
    }
   ],
   "steps": [
    {
     "text": "Use new ball-joint nuts."
    },
    {
     "text": "Leveling kits like RC 363 require disassembling the strut: use a proper spring compressor and the strut-mount and shock-rod values below."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Lower control arm frame nuts",
      "210 N·m (155 ft-lb)"
     ],
     [
      "Upper control arm frame nuts",
      "176 N·m (130 ft-lb)"
     ],
     [
      "Lower ball joint nut (new nut)",
      "51 N·m (38 ft-lb) + 89°"
     ],
     [
      "Upper ball joint nut (new nut)",
      "35 N·m (26 ft-lb) + 180°"
     ],
     [
      "Shock lower bolt: air suspension or 4x4 non-air / 4x2 non-air",
      "170 N·m (125 ft-lb) / 26 N·m (19 ft-lb)"
     ],
     [
      "Shock to frame upper nut",
      "61 N·m (45 ft-lb)"
     ],
     [
      "Shock rod to mount nut",
      "35 N·m (26 ft-lb)"
     ],
     [
      "Strut mount to strut tower",
      "61 N·m (45 ft-lb)"
     ],
     [
      "Stabilizer bar frame bolt",
      "90 N·m (66 ft-lb)"
     ],
     [
      "Stabilizer link to lower arm / to bar",
      "102 N·m (75 ft-lb) / 22 N·m (16 ft-lb)"
     ],
     [
      "Hub/bearing bolts",
      "60 N·m (44 ft-lb) + 80°"
     ],
     [
      "Half-shaft nut",
      "250 N·m (184 ft-lb)"
     ]
    ]
   },
   "parts": [
    "lev-rc363"
   ]
  },
  {
   "id": "rear-susp",
   "type": "diy",
   "title": "Rear suspension torque, five-link (2016)",
   "summary": "Factory table. New control-arm fasteners required.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2016 rear suspension torque table (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Sport%2C%204D%20Pickup%20Crew%20Cab%2C%20RWD/Repair%20and%20Diagnosis/Suspension/Rear%20Suspension%20-%201500/Specifications/Torque%20Specifications/"
    }
   ],
   "steps": [
    {
     "text": "Use new control-arm and track-bar fasteners."
    },
    {
     "text": "Torque the control-arm bolts with the truck at ride height. Standard practice, not stated in the table.",
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
      "Upper and lower control arms, frame and axle ends (new fasteners)",
      "200 N·m (148 ft-lb) + 90°"
     ],
     [
      "Track bar to axle / to frame (new fasteners)",
      "155 N·m (114 ft-lb)"
     ],
     [
      "Shock bolt/nut",
      "135 N·m (100 ft-lb)"
     ],
     [
      "Stabilizer bar to axle bracket",
      "50 N·m (37 ft-lb)"
     ],
     [
      "Stabilizer link to frame / to bar",
      "75 N·m (55.5 ft-lb) / 107 N·m (79 ft-lb)"
     ],
     [
      "Air suspension fitting",
      "3.5 N·m (31 lb-in)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "brakes",
   "type": "diy",
   "title": "Brakes (2016, 1500) and brake-hose check",
   "summary": "Factory torque, rotor limits, and the lowered-truck hose warning.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2016 base brake torque table (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Special%20Service/Repair%20and%20Diagnosis/Brakes/Parking%20Brake%20System/Base%20Brakes%20%28Service%20Information%29%20%201500/Hydraulic%2FMechanical/Specifications/Torque%20Specifications/"
    },
    {
     "label": "2016 base brake specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Tradesman%2C%202D%20Pickup%2C%203.6L%20Eng%20VIN%20G%2C%204WD/Repair%20and%20Diagnosis/Brakes/Parking%20Brake%20System/Base%20Brakes%20%28Service%20Information%29%20%201500/Hydraulic%2FMechanical/Specifications/Base%20Brake/"
    },
    {
     "label": "RamForumz 2015 reg cab lowered",
     "url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/"
    }
   ],
   "steps": [
    {
     "text": "SAFETY on lowered trucks: one owner's tire rubbed through the right-rear brake hose (McGaughys 2/4, 22x10, 305/45R22) and caused near-total brake loss on the freeway. Check rear brake-hose clearance.",
     "conf": "forum"
    },
    {
     "text": "Front calipers are dual-piston 2x54 mm; rears are single-piston 54 mm."
    },
    {
     "text": "Minimum rotor thickness: front 26.4 mm, rear 20.4 mm. Max runout 0.050 mm; max thickness variation 0.015 mm."
    },
    {
     "text": "Rotor size per the 2016 spec: front 336 x 28 mm, rear 350 x 22 mm (rear listed larger than front; no second source).",
     "disputed": true
    },
    {
     "text": "Boosters: vacuum on gas engines, Hydroboost on the diesel."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Caliper adapter (bracket) bolts, front",
      "176 N·m (130 ft-lb)"
     ],
     [
      "Caliper adapter bolts, rear",
      "179 N·m (132 ft-lb)"
     ],
     [
      "Caliper mounting pins front / rear",
      "43 N·m (31 ft-lb) / 32 N·m (24 ft-lb)"
     ],
     [
      "Banjo bolts front / rear",
      "27 / 28 N·m (20 ft-lb)"
     ],
     [
      "Bleed screws",
      "19 N·m (14 ft-lb)"
     ],
     [
      "Master cylinder nuts / booster nuts",
      "18 N·m (160 lb-in) / 28 N·m (21 ft-lb)"
     ]
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "Lowered on 22s: one owner had a tire rub through a rear brake hose, and another suggests 305/40R22 (about 31 in) to be safe. Check brake hose clearance at full lock and full bump after the drop.",
     "source_url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/",
     "source_name": "RamForumz: 2015 Ram 1500 Hemi reg cab lowered",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "plugs",
   "type": "diy",
   "title": "Spark plugs",
   "summary": "5.7 has 16 plugs (two per cylinder). Tapered seat: do not exceed 15 ft-lb.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2014 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2014/1500%20Tradesman%2C%202D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%20RWD%2C%20Trans%20Mfr%20CD%208HP70/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    },
    {
     "label": "2016 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Tradesman%2C%204D%20Pickup%2C%203.0L%20Eng%20VIN%20M%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    },
    {
     "label": "2016 3.6 torque table (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%203.6L%20Eng%20VIN%20G%2C%20RWD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/3.6L%20Engine%20%20%28Service%20Information%29%20%201500/Specifications/Torque%20Specifications/"
    },
    {
     "label": "2010 Owner's Manual (factory doc)",
     "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
    },
    {
     "label": "2013 Owner's Manual (factory doc)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
    }
   ],
   "steps": [
    {
     "text": "5.7 Hemi: LZFR5C-11 at 0.043 in (OMs, 2016 Common Specs); REC14MCC4 at 0.040 in (2014 Common Specs). Gap to the plug in hand.",
     "disputed": true
    },
    {
     "text": "5.7: 13 ± 2 ft-lb (18 ± 3 N·m). \"Torque critical tapered design. Do not exceed 15 ft. lbs.\""
    },
    {
     "text": "3.6 Pentastar: RER8ZWYCB4, 0.043 in; 13 ± 2 ft-lb (18 ± 3 N·m), do not exceed 15. The 2014 page's 20 ft-lb is the outlier.",
     "disputed": true
    },
    {
     "text": "4.7: two per cylinder (upper 0.039–0.040 in, lower 0.051 in); install torque not found.",
     "conf": "verified"
    },
    {
     "text": "3.7: ZFR6F-11G, 0.043 in; install torque not found.",
     "conf": "verified"
    },
    {
     "text": "Replacement intervals were not extracted.",
     "conf": "unknown"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "5.7 spark plug",
      "13 ± 2 ft-lb (18 ± 3 N·m); do not exceed 15 ft-lb"
     ],
     [
      "3.6 spark plug (2016 table)",
      "17.5 N·m (13 ft-lb)"
     ],
     [
      "3.6 spark plug (2014 Common Specs, outlier)",
      "20 ft-lb (27 N·m)"
     ],
     [
      "5.7 coil to head cover",
      "7 N·m (62 lb-in)"
     ]
    ],
    "disputedRows": [
     2
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "A March-2013 owner whose truck was listed for 100k-mile (160,000 km) plugs found copper plugs installed. Ram switched to coils that support platinum plugs around mid-2013, so pull a plug or check the VIN with a dealer before trusting the long interval.",
     "source_url": "https://www.ramforum.com/threads/5-7l-hemi-spark-plug-replacement-2013-1500.154607/",
     "source_name": "RamForum: 5.7L Hemi Spark Plug Replacement - 2013 - 1500",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "For the rear passenger plugs, unclip the two heater hoses and the main harness from the firewall clips and tie them back. On the driver side, insert the socket and each extension separately; owners recommend a magnetic swivel plug socket such as the Gearwrench 80546.",
     "source_url": "https://www.ramforum.com/threads/5-7l-hemi-spark-plug-replacement-2013-1500.154607/",
     "source_name": "RamForum: 5.7L Hemi Spark Plug Replacement - 2013 - 1500",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "hemi-engine",
   "type": "diy",
   "title": "5.7 Hemi engine torque and procedures (2016)",
   "summary": "Heads, mains, intake, rockers, timing chain. \"Zero-Tolerance engine\".",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2016 5.7 torque table (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/5.7L%20Engine%20%20%28Service%20Information%29%20%201500/Specifications/Torque%20Specifications/"
    },
    {
     "label": "2013 MotoLogic 5.7 table PDF (forum-hosted)",
     "url": "https://www.chargerforumz.com/attachments/a8476278-ec46-4b40-a7b1-62a6c35a15ad_c762f373-4d74-4a67-a9c9-6c7e0d01b0d6_eee1-pdf.127223/"
    },
    {
     "label": "2016 5.7 cylinder head installation (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Laramie%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%20RWD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/5.7L%20Engine%20%20%28Service%20Information%29%20%201500/Cylinder%20Head/Installation/Installation/"
    },
    {
     "label": "2016 5.7 crankshaft installation (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Laramie%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%20RWD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/5.7L%20Engine%20%20%28Service%20Information%29%20%201500/Engine%20Block/Crankshaft/Installation/Installation/"
    },
    {
     "label": "2016 5.7 intake manifold installation (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Laramie%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%20RWD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/5.7L%20Engine%20%20%28Service%20Information%29%20%201500/Manifolds/Manifold%2C%20Intake/Installation/Installation/"
    },
    {
     "label": "2016 5.7 rocker arm installation (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Laramie%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%20RWD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/5.7L%20Engine%20%20%28Service%20Information%29%20%201500/Cylinder%20Head/Rocker%20Arm%2C%20Valve/Installation/Installation/"
    },
    {
     "label": "2016 5.7 timing chain installation (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Laramie%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%20RWD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/5.7L%20Engine%20%20%28Service%20Information%29%20%201500/Valve%20Timing/Chain%20And%20Sprockets%2C%20Timing/Installation/Installation/"
    },
    {
     "label": "2014 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2014/1500%20Tradesman%2C%202D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%20RWD%2C%20Trans%20Mfr%20CD%208HP70/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    },
    {
     "label": "2016 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Tradesman%2C%204D%20Pickup%2C%203.0L%20Eng%20VIN%20M%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    }
   ],
   "steps": [
    {
     "text": "Heads (gaskets marked L/R and TOP), in sequence: 1) bolts 1–10 (M12) to 34 N·m (25 ft-lb); 2) bolts 11–15 (M8) to 20 N·m (15 ft-lb); 3) bolts 1–10 to 54 N·m (40 ft-lb); 4) bolts 11–15 to 20 N·m (15 ft-lb); 5) bolts 1–10 plus 90°; 6) bolts 11–15 to 34 N·m (25 ft-lb)."
    },
    {
     "text": "Reinstall pushrods and rockers in their original positions using pushrod retainer tool 9070."
    },
    {
     "text": "Main caps: clean and oil the bolts, arrows forward. In sequence 13 N·m (10 ft-lb) → 27 N·m (20 ft-lb) → +90°. Then cross bolts with new seal washers, starting at bolt A, to 28 N·m (21 ft-lb), and repeat that pass. Cam/Crank Variation Relearn required afterwards."
    },
    {
     "text": "Intake manifold: Mopar Lock & Seal on the bolts if reusing the original manifold (not needed on a new one). Bolts in sequence to 12 N·m (9 ft-lb). Connect MAP and short-runner-valve connectors as you set it down."
    },
    {
     "text": "Rocker shafts: longer pushrods on the exhaust side; intake rockers marked \"I\". In sequence: snug 10 N·m (7 ft-lb) → 23 N·m (17 ft-lb) → loosen each 1/2 turn, retorque to 23 N·m → +30°. On Eagle heads, check with a light that each pushrod is centered in its lifter. Wait about 5 minutes for the lifters to bleed down before cranking."
    },
    {
     "text": "Timing chain: phaser mark centers between the chain's dual marks at 12 o'clock; crank mark lines up with the single mark at 6 o'clock. Oil pump bolts 28 N·m in sequence."
    },
    {
     "text": "Phaser bolt changes by year: 98 N·m (72 ft-lb) in the 2016 table; 85 N·m (63 ft-lb) in the 2013 table. Use your model year's value.",
     "disputed": true
    },
    {
     "text": "Specs: oil pressure at least 4 psi at curb idle, 25–110 psi at 3,000 rpm (\"If pressure is zero at curb idle, DO NOT run engine\"). Compression at least 100 psi, no more than 25% variation. Fuel pressure 59 ± 5 psi (2014) vs 58 ± 2 psi (2016). Radiator cap 14–18 psi.",
     "disputed": true
    },
    {
     "text": "Videos: \"How to Replace The Lifters and Camshaft on a 2013 Dodge Ram 5.7 Hemi (Every Step in 30 Minutes!)\" (Jack Fletcher); \"5.7 HEMI Exhaust Manifold Gasket and Bolt Replacement. How to Remove Broken Manifold Stud From Head!\" (Boosted7761); \"5.7 Hemi Ticking/Knocking Exhaust Manifold Leak Repair.\" (Frostbite Racing).",
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
      "Camshaft phaser bolt",
      "98 N·m (72 ft-lb) (2016); 85 N·m (63 ft-lb) (2013 table)"
     ],
     [
      "Timing drive tensioner / guide bolts",
      "11 N·m (97 lb-in)"
     ],
     [
      "Camshaft thrust plate",
      "12 N·m (106 lb-in)"
     ],
     [
      "Timing chain case cover",
      "28 N·m (21 ft-lb)"
     ],
     [
      "Connecting rod caps",
      "21 N·m (15 ft-lb) + 90°"
     ],
     [
      "Cylinder head cover",
      "8 N·m (71 lb-in)"
     ],
     [
      "Coil to head cover",
      "7 N·m (62 lb-in)"
     ],
     [
      "Exhaust manifold to head",
      "25 N·m (18 ft-lb)"
     ],
     [
      "Flexplate / flywheel to crank",
      "95 N·m (70 ft-lb) / 75 N·m (55 ft-lb)"
     ],
     [
      "Vibration damper bolt",
      "172 N·m (127 ft-lb)"
     ],
     [
      "Oil pan bolts",
      "12 N·m (9 ft-lb)"
     ],
     [
      "Oil drain plug",
      "34 N·m (25 ft-lb)"
     ],
     [
      "Oil pump / pickup tube",
      "28 N·m (21 ft-lb)"
     ],
     [
      "Rear seal retainer",
      "15 N·m (11 ft-lb)"
     ],
     [
      "Thermostat housing, water pump",
      "28 N·m (21 ft-lb)"
     ],
     [
      "Throttle body",
      "12 N·m (9 ft-lb)"
     ],
     [
      "Lifter guide holder",
      "12 N·m (9 ft-lb)"
     ],
     [
      "Front engine mount through-bolt and nut",
      "130 N·m (96 ft-lb)"
     ],
     [
      "Engine mount brackets to block",
      "64 N·m (47 ft-lb)"
     ],
     [
      "Transfer case to insulator mounting-plate nuts",
      "204 N·m (150 ft-lb)"
     ],
     [
      "Generator",
      "55 N·m (41 ft-lb)"
     ]
    ],
    "disputedRows": [
     0
    ]
   },
   "parts": [
    "oem-manifold-stud",
    "oem-manifold-bolt",
    "hdr-bbk-4014"
   ]
  },
  {
   "id": "pentastar-head",
   "type": "diy",
   "title": "3.6 Pentastar torque and head installation (2016)",
   "summary": "9-step head bolt procedure, cam timing.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2016 3.6 torque table (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%203.6L%20Eng%20VIN%20G%2C%20RWD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/3.6L%20Engine%20%20%28Service%20Information%29%20%201500/Specifications/Torque%20Specifications/"
    },
    {
     "label": "2016 3.6 left head installation (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Laramie%2C%204D%20Pickup%2C%203.6L%20Eng%20VIN%20G%2C%20RWD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/3.6L%20Engine%20%20%28Service%20Information%29%20%201500/Cylinder%20Head/Installation/Left/"
    }
   ],
   "steps": [
    {
     "text": "Check head bolts for necking with a straight edge; replace any that are stretched."
    },
    {
     "text": "Clean out the bolt holes. Trapped fluid can crack the aluminum casting."
    },
    {
     "text": "Gaskets are marked L/R and go on dry. Don't oil the threads."
    },
    {
     "text": "Eight bolts per head, in sequence: 1) 30 N·m (22 ft-lb); 2) 45 N·m (33 ft-lb); 3) retighten to 45 N·m; 4) +125° (or 35° then 90°); 5) loosen all in reverse order; 6) 30 N·m; 7) 45 N·m; 8) retighten to 45 N·m; 9) +130° (or 40° then 90°). Don't use a torque wrench for the angle steps."
    },
    {
     "text": "A new block gets steps 1–9. A rebuild that reuses the block gets steps 6–9."
    },
    {
     "text": "Cam timing: guide and tensioner T30 bolts 12 N·m. Fit phaser lock 10202, then torque the oil control valves to 150 N·m (110 ft-lb). Check 12 chain pins between the exhaust-phaser triangle and the intake-phaser circle. Keep magnets away from the magnetic timing wheels. A/C compressor bolts 28 N·m. Do the Cam/Crank Variation Relearn afterwards."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Cam bearing caps (M6)",
      "9.5 N·m (84 lb-in)"
     ],
     [
      "Cam phaser oil control valve (M18)",
      "150 N·m (111 ft-lb)"
     ],
     [
      "Primary and secondary chain tensioners and guides",
      "12 N·m (106 lb-in)"
     ],
     [
      "Chain idler sprocket",
      "25 N·m (18 ft-lb)"
     ],
     [
      "Rod caps",
      "20 N·m (15 ft-lb) + 90°"
     ],
     [
      "Inner main caps (M11) / outer mains and windage tray (M8)",
      "20 N·m + 90° / 21 N·m + 90°"
     ],
     [
      "Main tie bolts",
      "28 N·m (250 lb-in)"
     ],
     [
      "Crank damper bolt (M16)",
      "40 N·m (30 ft-lb) + 105°"
     ],
     [
      "Catalytic converter to head",
      "23 N·m (17 ft-lb)"
     ],
     [
      "Intake manifold upper / lower",
      "10 N·m (89 lb-in) / 12 N·m (106 lb-in)"
     ],
     [
      "Flexplate",
      "95 N·m (70 ft-lb)"
     ],
     [
      "Torque converter bolts",
      "42 N·m (31 ft-lb)"
     ],
     [
      "Oil drain plug (M14)",
      "27 N·m (20 ft-lb)"
     ],
     [
      "Oil filter housing cap",
      "25 N·m (18 ft-lb)"
     ],
     [
      "Engine mount isolator to frame",
      "130 N·m (96 ft-lb)"
     ]
    ],
    "note": "OCV is 111 ft-lb in the table and 110 ft-lb in the head procedure (both 150 N·m)."
   },
   "parts": []
  },
  {
   "id": "ecodiesel",
   "type": "diy",
   "title": "3.0 EcoDiesel torque (2016)",
   "summary": "Factory table; head, bedplate and flexplate say \"refer to installation\" (not captured).",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2016 3.0L Diesel torque table (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20SLT%2C%204D%20Pickup%20Crew%20Cab%2C%203.0L%20Eng%20VIN%20M%2C%20RWD/Repair%20and%20Diagnosis/Engine%20Mechanical/Mechanical/3.0L%20Diesel%20%20%28Service%20Information%29%20%201500/Specifications/Torque%20Specifications/"
    },
    {
     "label": "2016 Common Specs (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Tradesman%2C%204D%20Pickup%2C%203.0L%20Eng%20VIN%20M%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Common%20Specs%20%26%20Procedures/Common%20Specs%20%26%20Procedures/"
    }
   ],
   "steps": [
    {
     "text": "Cylinder head (M14), bedplate, rods, oil pans, valve covers, timing cover, flexplate: \"Refer to installation\" (procedures not captured). The old \"EcoDiesel flexplate 70 ft-lb\" line is wrong; 70 ft-lb is the 3.6/5.7 value.",
     "conf": "unknown"
    },
    {
     "text": "The table prints \"Engine Lifting Brackets 55 N·m / 11 ft-lb\". That's an internal typo (55 N·m is about 41 ft-lb).",
     "disputed": true
    },
    {
     "text": "Common Specs: compression 304–362 psi with no more than 73 psi difference; oil pressure 10 psi at idle, 36 psi at 3,800 rpm."
    },
    {
     "text": "A search summary's \"head bolts 30 N·m + 2×90°\" came from JustAnswer and was not verified.",
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
      "Oil drain plug / oil filter cap",
      "45 N·m (33 ft-lb) / 25 N·m (18 ft-lb)"
     ],
     [
      "Oil cooler bolts; oil cooler/filter housing adapter",
      "30 N·m (22 ft-lb)"
     ],
     [
      "Timing chain guide / tensioner",
      "30 N·m (22 ft-lb) / 14 N·m (11 ft-lb)"
     ],
     [
      "Fuel injection pump drive gear bolt",
      "30 N·m + 73°"
     ],
     [
      "Fuel injector clamp bolt",
      "33 N·m (24 ft-lb)"
     ],
     [
      "Fuel line union nuts at injector / pump / rail",
      "11 N·m + 75° / 11 N·m + 75° / 5 N·m + 75°"
     ],
     [
      "Glow plug (ceramic)",
      "8 N·m (71 lb-in)"
     ],
     [
      "Camshaft bearing caps",
      "11 N·m (8 ft-lb)"
     ],
     [
      "Exhaust manifold nuts",
      "15 N·m, then 40 N·m (30 ft-lb)"
     ],
     [
      "EGR cooler adapter bolts",
      "45 N·m (33 ft-lb)"
     ],
     [
      "Vibration damper bolt",
      "100 N·m + 125°"
     ],
     [
      "Turbo to block / to head",
      "55 N·m (41 ft-lb) / 25 N·m (18 ft-lb)"
     ],
     [
      "Turbo oil feed banjo at block / at turbo",
      "35 N·m / 25 N·m"
     ],
     [
      "DPF nuts",
      "32 N·m (24 ft-lb)"
     ],
     [
      "Torque converter bolts",
      "42 N·m (31 ft-lb)"
     ],
     [
      "Engine mount bolts 4x4 / through-bolt nut",
      "120 N·m (89 ft-lb) / 115 N·m (85 ft-lb)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "leveling",
   "type": "diy",
   "title": "Leveling-kit install (RC 363)",
   "summary": "Strut-disassembly kit for 2012–18 4WD coil trucks.",
   "conf": "verified",
   "src": [
    {
     "label": "Rough Country 363",
     "url": "https://www.roughcountry.com/product/dodge-front-leveling-lift-kit-363"
    },
    {
     "label": "2016 front suspension torque table (factory doc, secondary host)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Sport%2C%204D%20Pickup%20Crew%20Cab%2C%204WD/Repair%20and%20Diagnosis/Suspension/Wheel%20Alignment/Front%20Suspension%20%26%20Wheel%20Alignment%20-%201500/Front%2C%20Independent%20Front%20Suspension/Specifications/Torque%20Specifications/"
    }
   ],
   "steps": [
    {
     "text": "The RC 363 kit \"requires disassembling your strut\". Use a proper spring compressor."
    },
    {
     "text": "Not for air-suspension (Rebel, Limited and optioned) or Warlock trucks."
    },
    {
     "text": "Reinstall with the factory values: strut mount to tower 61 N·m (45 ft-lb); shock rod to mount nut 35 N·m (26 ft-lb).",
     "conf": "verified-secondary"
    },
    {
     "text": "Re-torque lugs to 130 ft-lb.",
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
      "Strut mount to strut tower",
      "61 N·m (45 ft-lb)"
     ],
     [
      "Shock rod to mount nut",
      "35 N·m (26 ft-lb)"
     ],
     [
      "Lug nuts",
      "130 ft-lb"
     ]
    ]
   },
   "parts": [
    "lev-rc363"
   ],
   "tips": [
    {
     "text": "Rough Country's instructions say not to use an impact on the strut top nut when adding the preload spacer, and to support the knuckle so it does not swing out far enough to pull the CV shaft out of the front differential.",
     "source_url": "https://www.sorjeepandtruck.com/sites/default/files/9236300.pdf",
     "source_name": "Rough Country: 2012-18 Dodge 4WD 1500 2.5in Leveling Kit instructions (9236300B)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A 2014 owner's upper ball joints popped out while the lower arm was jacked back up during a spacer-kit install, and Chrysler refused warranty under a STAR case dated 05/23/2013 because of the aftermarket kit ($1,100 quoted). Jack the lower arm slowly and inspect both upper ball joints before driving.",
     "source_url": "https://www.ramforum.com/threads/spacer-level-kit-star-case-2014-ram.44746/",
     "source_name": "RamForum: SPACER LEVEL KIT = STAR case 2014 Ram",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-8hp",
   "type": "swap",
   "title": "65RFE → 8HP70 (8-speed), 2009–2014 trucks",
   "summary": "One owner's complete parts list (2021).",
   "conf": "forum",
   "src": [
    {
     "label": "RamForum 8-speed swap",
     "url": "https://www.ramforum.com/threads/8-speed-swap.180898/"
    }
   ],
   "steps": [
    {
     "text": "Used 8HP70: $500–900."
    },
    {
     "text": "Flexplate 4752574AB; flexplate bolt spacer 4736613AA; crank pilot sleeve 4736283AA (\"DO NOT FORGET\")."
    },
    {
     "text": "Trans mount bracket 68147349AB and mount 68147348AB. New driveshaft length per cab. Carrier-bearing crossmember 68055090AB (welded in)."
    },
    {
     "text": "Dial or console shifter. Sound German Automotive (SGA) TCM harness and recalibration $1,250. About 12 qt of Mopar ZF fluid. Cooler lines re-plumbed with -6/-8 AN fittings."
    },
    {
     "text": "Carried over: the 6-speed crossmember, top bellhousing bolts and starter. The 8HP70 TCM is inside the transmission."
    },
    {
     "text": "On the SGA harness, tap the CAN bus (purple connector to the \"C star\" connector under the steering column) and power it from fuse 99 (constant in ACC/RUN/CRANK)."
    },
    {
     "text": "Some 2014 65RFE trucks with the \"brown plug\" ECU already have rotary-shifter wiring; per SGA, those may not need the SGA computer."
    },
    {
     "text": "Crank reluctor: 32-tooth up to 2012 and some very early 2013s; 58-tooth on most 2013+."
    }
   ],
   "torque": null,
   "parts": [],
   "tips": [
    {
     "text": "The 8HP70 TCM is internal. On the SGA harness, tap the CAN bus (purple connector to the \"C star\" connector under the steering column) and power it from fuse 99 (constant in ACC/RUN/CRANK).",
     "source_url": "https://www.ramforum.com/threads/8-speed-swap.180898/",
     "source_name": "RamForum: 8-speed swap",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-64",
   "type": "swap",
   "title": "6.4 (392) + 8HP70 into a 1500",
   "summary": "One owner's 2013 swap took 2.4 years.",
   "conf": "forum",
   "src": [
    {
     "label": "RamForumz 6.4 Apache swap",
     "url": "https://www.ramforumz.com/threads/2016-6-4-apache-swap-into-2013-ram-1500.249925/"
    }
   ],
   "steps": [
    {
     "text": "One owner says the 8HP70 is rated for 516 lb-ft and the 65RFE for 410 lb-ft, so the 65RFE won't live behind a 6.4 (an owner's claim, not an FCA document)."
    },
    {
     "text": "The truck 6.4 and the car 6.4 \"Apache\" are different engines."
    },
    {
     "text": "Owner reports the PRNDL flashing on the dash and a 4,000 rpm limiter in Park/Neutral that he couldn't raise in HP Tuners."
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "swap-air-coil",
   "type": "swap",
   "title": "Air suspension → coils",
   "summary": "For leaking four-corner air trucks.",
   "conf": "forum",
   "src": [
    {
     "label": "RamForum air ride leaks",
     "url": "https://www.ramforum.com/threads/air-ride-suspension-leaks.196578/"
    }
   ],
   "steps": [
    {
     "text": "Bilstein 5100 conversion kits use OEM 1500 springs."
    },
    {
     "text": "Other owners use a Rancho QuickLift front, variable-rate rear coils, and new jounce bumpers and isolators (about $830 in parts, one owner)."
    },
    {
     "text": "Dealer quote for two rear bags: $3,500 (one owner, 2014 Limited)."
    }
   ],
   "torque": null,
   "parts": [],
   "tips": [
    {
     "text": "On a 2013 the BCM has no air suspension options: disable the ASCM setting in AlfaOBD and pull fuses F5 and F50, which clears the startup alert, height settings and dash buttons. Unplug and remove all four ride-height sensors when the coils go in. 2014+ trucks need more BCM changes.",
     "source_url": "https://www.ramforum.com/threads/how-to-delete-air-suspension-on-2013.206964/",
     "source_name": "RamForum: How to: Delete Air Suspension on 2013",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-gears",
   "type": "swap",
   "title": "Gear swaps",
   "summary": "Factory ratios 3.21 / 3.55 / 3.92.",
   "conf": "forum",
   "src": [
    {
     "label": "RamForum stock rwhp",
     "url": "https://www.ramforum.com/threads/stock-rwhp.37696/"
    }
   ],
   "steps": [
    {
     "text": "Drag owners talk about 4.10s (R/T) and 4.56s."
    },
    {
     "text": "Ring-gear sizes, differential and driveshaft fasteners, and regear costs are Unknown.",
     "conf": "unknown"
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "swap-hemi-years",
   "type": "swap",
   "title": "Hemi swaps between DS years (crank reluctor)",
   "summary": "2009–12 5.7s are a direct swap for 2009–12 trucks.",
   "conf": "forum",
   "src": [
    {
     "label": "RamForum 5.7 interchange",
     "url": "https://www.ramforum.com/threads/2010-5-7l-engine-interchange.215374/"
    }
   ],
   "steps": [
    {
     "text": "\"In early 2013 Mopar changed the crankshaft tone ring.\""
    },
    {
     "text": "With a 2013+ engine in a 2009–12 truck, reuse the old (2009–12) sensors; 2013+ crank sensors aren't compatible with the 2009–12 PCM."
    },
    {
     "text": "One poster has put 2014/2015 short blocks into 2010/2011 trucks this way."
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "swap-47-57",
   "type": "swap",
   "title": "4.7 → 5.7 in a DS",
   "summary": "No completed DS write-up found.",
   "conf": "forum",
   "src": [
    {
     "label": "DodgeForum 4.7 to 5.7",
     "url": "https://dodgeforum.com/forum/4th-gen-ram-tech/422982-2010-ram-4-7-swap-5-7-4th-gen.html"
    },
    {
     "label": "RamForum 3rd-gen",
     "url": "https://www.ramforum.com/threads/4-7-to-5-7-swap.205719/"
    }
   ],
   "steps": [
    {
     "text": "One 2019 thread on a 2010 4.7 2WD 3.55 truck planned a full donor swap (5.7, 4.10 rear, 4x4 conversion)."
    },
    {
     "text": "Replies warn the 4x4 conversion is the hard part: IFS mounts won't be there on a 2WD frame."
    },
    {
     "text": "Common advice (3rd-gen threads, not DS-specific): use PCM, harness and transmission from the same donor year; 2004 is pre-CAN and 2006–08 is CAN."
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "swap-cummins",
   "type": "swap",
   "title": "Cummins ISB 4-cyl (ISB170) + 8HP70 in a 2014 DS",
   "summary": "Owner build (2021).",
   "conf": "forum",
   "src": [
    {
     "label": "4btswaps",
     "url": "https://www.4btswaps.com/threads/gen-4-ram-1500-with-isb170-and-zf8hp.109854/"
    }
   ],
   "steps": [
    {
     "text": "TD Conversions adapter mates the engine to the ZF."
    },
    {
     "text": "Oil pan sectioned 1-1/4 in (about 1 L less capacity) and steering rack dropped 5/8 in for clearance."
    },
    {
     "text": "Cab moved back 1-1/4 in and up 1-1/2 in to clear 37s."
    },
    {
     "text": "Trans heater/cooler gutted and re-plumbed with JIC-8 fittings."
    },
    {
     "text": "Over 60 DTCs at first start; no tach at the end of the thread."
    },
    {
     "text": "Towed a 5th wheel \"flawlessly\"; shift points tuned with HP Tuners."
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "swap-ls",
   "type": "swap",
   "title": "LS / Coyote into a DS",
   "summary": "No DS build thread found.",
   "conf": "unknown",
   "src": [],
   "steps": [
    {
     "text": "The only LS thread found is a 3rd-gen 2WD, where replies call it substantial and \"often not worth it\" versus building the Hemi (search extract; not opened).",
     "conf": "unconfirmed"
    },
    {
     "text": "carengineswap.com rates LS swaps \"Level 4\" in the Ram 1500, but that article has factual errors (for example, a \"RAM 1500 SRT\" 6.4), so it isn't used.",
     "conf": "unconfirmed"
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "swap-front-end",
   "type": "swap",
   "title": "2009–12 → 2013–18 front-end conversion",
   "summary": "One owner converted a 2010 Laramie.",
   "conf": "forum",
   "src": [
    {
     "label": "RamForumz front-end conversion",
     "url": "https://www.ramforumz.com/threads/2009-2012-to-2013-2018-front-end-conversion-completed.283689/"
    }
   ],
   "steps": [
    {
     "text": "Headlamp brackets 68222828AA / 68222829AA. Fascia supports 68104944AD / 68104945AE."
    },
    {
     "text": "Bumper bracket kit 68232485AA; fog bracket kit 68232454AA. Tow-hook bezels 68196982AA; side bracket kit 68196983AA."
    },
    {
     "text": "Center support 68104942AD; upper fascia 68197697AA. Bumper 68160853AB; fogs 68104821AF / 68104820AF. Grille 68093930AC (Laramie)."
    },
    {
     "text": "Genuine Mopar parts come with hardware; aftermarket parts didn't, and none of the old bolts fit."
    },
    {
     "text": "Sport-to-Sport conversions had grille and bumper alignment problems that two owners couldn't solve. A 2011 Sport owner later finished one in about a day.",
     "disputed": true
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "swap-hd-bumper",
   "type": "swap",
   "title": "2500/3500 (HD) bumper onto a 1500",
   "summary": "Northspec Built conversion brackets (vendor guide). Bracket price not captured.",
   "conf": "verified",
   "src": [
    {
     "label": "Northspec Built",
     "url": "https://northspecbuilt.com/blogs/articles/ram%C2%AE-1500-to-2500-bumper-swap-4th-gen-hd-front-end-conversion"
    }
   ],
   "steps": [
    {
     "text": "The frames differ, so HD bumpers don't bolt to 1500 brackets. Brackets fit all 2009–18 DS and 2019–24 Classic, including Rebel and Warlock."
    },
    {
     "text": "Option 1: HD bumper, 2009–12 1500 grille (2013+ grilles have beveled corners that leave gaps), and HD or Rebel/Warlock headlight fillers."
    },
    {
     "text": "Option 2: HD bumper, HD grille and HD hood (they come as a pair), and fillers."
    },
    {
     "text": "2013+ trucks need two 7/16 in holes drilled; trim the inner fenders."
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "gf-water-pump",
   "type": "diy",
   "title": "Water pump and cooling (3.6 and 5.7)",
   "summary": "Cooling-section torque split by fastener. Applies to: 2016 1500 service information (Chrysler pages on a secondary host); check other years.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "SI: Engine Cooling System 1500 (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Engine%20Mechanical/Cooling%20System%20(Mechanical)/Engine%20Cooling%20System%20-%201500/"
    }
   ],
   "steps": [
    {
     "text": "5.7 install order: clean the mating surfaces, then the pump, upper metal heater tube, belt tensioner, idler, lower hose, belt, resonator bracket, fan, upper hose and air intake. Evacuate air, refill and leak-check."
    },
    {
     "text": "A misrouted serpentine belt can spin the water pump backward and overheat the engine; follow the underhood routing label."
    },
    {
     "text": "The 2016 5.7 engine table lumps \"thermostat housing, water pump 28 N·m (21 ft-lb)\"; use the split cooling-section values below."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "Water pump bolts, 5.7",
      "24 N·m (18 ft-lb)"
     ],
     [
      "Water pump bolts, 3.6",
      "M6 12 N·m (9 ft-lb); M8 25 N·m (18 ft-lb); M10 55 N·m (41 ft-lb)"
     ],
     [
      "Thermostat housing bolts, 3.6 / 5.7",
      "12 N·m (9 ft-lb) / 13 N·m (10 ft-lb)"
     ],
     [
      "Belt tensioner pulley bolt, 3.6 / 5.7",
      "55 N·m (41 ft-lb) / 41 N·m (30 ft-lb)"
     ],
     [
      "Generator mounting bracket bolts, 3.6 / 5.7",
      "25 N·m (18 ft-lb) / 41 N·m (30 ft-lb)"
     ],
     [
      "Fan drive / fan blade to viscous drive",
      "50 N·m (37 ft-lb) / 24 N·m (18 ft-lb)"
     ],
     [
      "Coolant temp sensor (3.6)",
      "30 N·m (22 ft-lb)"
     ],
     [
      "Bleed plug",
      "6 N·m (53 in-lb)"
     ],
     [
      "Block heater, 3.6 / 5.7",
      "12 N·m (106 in-lb) / 2 N·m (17 in-lb)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-alternator",
   "type": "diy",
   "title": "Alternator (generator), 5.7",
   "summary": "Denso 160 A on 3.6, 4.7 and 5.7. Applies to: 2016 1500 service information (Chrysler pages on a secondary host); check other years.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "SI: Charging 1500 (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Electrical/Charging%20Systems/Charging%20(Service%20Information)%201500/"
    },
    {
     "label": "SI: Engine Cooling System 1500 (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Engine%20Mechanical/Cooling%20System%20(Mechanical)/Engine%20Cooling%20System%20-%201500/"
    }
   ],
   "steps": [
    {
     "text": "Disconnect the battery negative. Do not lever the belt over a pulley rim."
    },
    {
     "text": "The 5.7 engine table lists \"Generator 55 N·m (41 ft-lb)\"; the charging procedure and the cooling bracket row say 41 N·m. Use 41 N·m (30 ft-lb) for the 5.7."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "Mounting bolts (2)",
      "41 N·m (30 ft-lb)"
     ],
     [
      "Support-bracket bolt and nuts",
      "41 N·m (30 ft-lb)"
     ],
     [
      "B+ eyelet nut",
      "12 N·m (8.8 ft-lb)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-starter",
   "type": "diy",
   "title": "Starter (3.6, 4.7, 5.7)",
   "summary": "Includes the 4WD support-bracket step. Applies to: 2016 1500 service information (Chrysler pages on a secondary host); check other years.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "SI: Starting 1500 (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Electrical/Starter/Starting%20(Service%20Information)%201500/"
    },
    {
     "label": "TSB 09-005-16 Tighten Starter Bolts (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Technical%20Bulletins/Technical%20Service%20Bulletins/Other%20Variant/Starter/Tighten%20Starter%20Bolts%20(09-005-16)/"
    }
   ],
   "steps": [
    {
     "text": "Disconnect the battery negative and raise the truck."
    },
    {
     "text": "4WD with certain transmissions: remove the two bolts of the axle-to-transmission support bracket and pry it aside to reach the lower starter bolt."
    },
    {
     "text": "Remove both bolts and slide the starter forward until the pinion nose clears, then tilt it nose-down to reach the B+ nut. Do not let the starter hang from the harness."
    },
    {
     "text": "Cranking draw at operating temp: 3.6/4.7 1.2 kW, 100-200 A; 5.7 1.4 kW, 125-250 A."
    },
    {
     "text": "TSB 09-005-16: 2016 DS built 3/1-3/6/2016 may have loose starter bolts and a noisy starter; torque them to spec."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "Starter mounting bolt, 3.6",
      "54 N·m (40 ft-lb)"
     ],
     [
      "Starter mounting bolt/nut, 4.7/5.7",
      "68 N·m (50 ft-lb)"
     ],
     [
      "Battery cable eyelet nut at solenoid",
      "14 N·m (10 ft-lb)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-fuel-pump",
   "type": "diy",
   "title": "Fuel pump module (gas)",
   "summary": "The factory procedure removes the fuel tank; there is no access panel. Applies to: 2016 1500 service information (Chrysler pages on a secondary host); check other years.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "SI: Fuel Delivery, Gas (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Engine%20Mechanical/Fuel%20System%20-%201500/Fuel%20Delivery%2C%20Gas/"
    }
   ],
   "steps": [
    {
     "text": "Relieve fuel pressure (the system holds pressure with the engine off) and disconnect the battery. Drop the tank."
    },
    {
     "text": "Blow debris off the tank top. Note the indexing arrow on the module: it must go back in the same clocking or the float can hit the tank wall."
    },
    {
     "text": "Lock ring: tool 9340 with a 1/2 in breaker bar, counterclockwise off; clockwise on until all seven notches engage. Always use a new rubber O-ring. Do not bend the float arm."
    },
    {
     "text": "Connect the quick-connect at the rail, fill the tank, start the engine and leak-check. Fuel pressure: 58 ± 2 psi."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "Fuel tank straps",
      "41 N·m (30 ft-lb)"
     ],
     [
      "Tank bolts (52-gal tank)",
      "55 N·m (41 ft-lb)"
     ],
     [
      "Fuel rail bolts",
      "11 N·m (100 in-lb)"
     ],
     [
      "O2 sensors",
      "41 N·m (30 ft-lb)"
     ],
     [
      "Coils",
      "11 N·m (100 in-lb)"
     ],
     [
      "Throttle body, 5.7 / 3.6",
      "5.6 N·m (50 in-lb) / 7.5 N·m (65 in-lb)"
     ],
     [
      "5.7 crank and cam sensors",
      "12 N·m (105 in-lb)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-blend-door",
   "type": "diy",
   "title": "Blend-door actuator and HVAC torque",
   "summary": "Single-zone has one blend-door actuator; dual-zone has two. Applies to: 2016 1500 service information (Chrysler pages on a secondary host); check other years.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "SI: Heating & Air Conditioning 1500 (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Heating%2C%20Ventilation%20%26%20A%2FC%20(HVAC)/HVAC%20Control%20Systems/Heating%20%26%20Air%20Conditioning%20(Service%20Information)%201500/"
    }
   ],
   "steps": [
    {
     "text": "Disable the airbags first: disconnect the battery and wait two minutes."
    },
    {
     "text": "Dual-zone passenger side: the factory procedure removes the HVAC housing to the bench (the dash comes out). Unplug the harness and remove the two screws at the front of the housing."
    },
    {
     "text": "The single-zone / driver-side page is missing on the host."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "All screws not listed",
      "1.1 N·m (10 in-lb)"
     ],
     [
      "HVAC housing nuts and bolts",
      "6.8 N·m (60 in-lb)"
     ],
     [
      "Blower motor screws",
      "1.7 N·m (15 in-lb)"
     ],
     [
      "Refrigerant line nuts/bolts",
      "23 N·m (17 ft-lb)"
     ],
     [
      "Compressor clutch plate bolt",
      "19 N·m (168 in-lb)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-ball-joints",
   "type": "diy",
   "title": "Ball joints and 4x4 hub install",
   "summary": "Check, replace and reassemble. Applies to: 2016 1500 service information (Chrysler pages on a secondary host); check other years.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "SI: Front Suspension 1500 (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Suspension/Front%20Suspension%20%26%20Wheel%20Alignment%20-%201500/Front%2C%20Independent%20Front%20Suspension/"
    }
   ],
   "steps": [
    {
     "text": "Lower ball joint check: support the lower arms on stands (wood block on aluminum arms), dial indicator on the knuckle, pry up on the tire. More than 0.5 mm (0.020 in) of play = replace."
    },
    {
     "text": "4x4: replacing the lower ball joint alone is \"not recommended\"; replace the lower control arm. 4x2: press in the joint with press C-4212F and 8698-1/-3 adapters, then stake the flange in four evenly spaced places."
    },
    {
     "text": "Upper ball joint: separate with remover 9360 and press out with C-4212F plus 9770-1/-2. A wood block between arm and frame bracket may be needed for clearance. Use extreme-pressure lube on the tool threads."
    },
    {
     "text": "4x4 hub install order: dust shield, hub, rotor and caliper, wheel-speed sensor, upper ball-joint nut, tie-rod nut, then the half-shaft nut."
    },
    {
     "text": "After ball-joint work, check ride height and align."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Torque"
    ],
    "rows": [
     [
      "Hub bolts (4x4)",
      "60 N·m + 80° (from the suspension guide)"
     ],
     [
      "Half-shaft nut",
      "250 N·m"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-brake-bleed",
   "type": "diy",
   "title": "Brake bleeding",
   "summary": "Manual bleed order from service info. Applies to: 2016 1500 service information (Chrysler pages on a secondary host); check other years.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "SI: Base Brakes manual bleeding (lemon-manuals)",
     "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Brakes/Mechanical%20-%20Hydraulic/Base%20Brakes%20(Service%20Information)%201500/Standard%20Procedure/Manual%20Bleeding/"
    },
    {
     "label": "2013 Ram 1500 OM (Mopar)",
     "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
    }
   ],
   "steps": [
    {
     "text": "Fluid: Mopar or equivalent meeting SAE J1703-F and DOT 3, from a sealed container (the 2013 manual also allows DOT 4)."
    },
    {
     "text": "Order: right rear, left rear, right front, left front. If calipers were overhauled, gravity-bleed all four first."
    },
    {
     "text": "Pump-and-hold with a helper (close the bleeder while the pedal is held down) until the fluid runs clear. Confirm a firm pedal before moving the truck."
    }
   ],
   "torque": null,
   "parts": []
  }
 ],
 "tipsTitle": "Vehicle health tips",
 "tips": [
  {
   "text": "8-speed fluid: crack the fill plug loose before draining (owners say it's often overtightened), set fluid level only with the engine running and trans temp 86-122 F, and never shut the engine off with the fill plug out or the converter drains onto the floor.",
   "source_url": "https://www.ramforum.com/threads/zf-8-speed-transmission-fluid-change.192708/",
   "source_name": "RamForum: ZF 8 speed transmission fluid change",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "Avoid the cheap Autotecnica CY1214647PRM aluminum 8-speed pan: an owner found it about 1/8 in too shallow, it pressed on the park mechanism and the truck would not go into park. The PPE pan (about $300) worked, has a replaceable filter and takes about 2 extra quarts.",
   "source_url": "https://www.ramforum.com/threads/zf-8-speed-transmission-fluid-change.192708/",
   "source_name": "RamForum: ZF 8 speed transmission fluid change",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "Start an 8-speed fluid change with the trans below 86 F (ideally ambient under 90 F) or you run out of time before 122 F. Deep pans need the trans raised about 1 in off the crossmember to clear the valve body; pan bolts are T40 at 10 N·m and the 8 mm hex fill plug is 25 ft-lb.",
   "source_url": "https://www.youtube.com/watch?v=BzcDneDpTBc",
   "source_name": "YouTube (Blauparts): Ram 1500 Transmission Fluid Change How To, 2013+ ZF 8-Speed",
   "confidence": "video",
   "date_checked": "2026-10-11"
  },
  {
   "text": "After the first fill, with wheels off the ground and the engine idling, hold each of reverse, drive and 2nd for 5 seconds, then 2,000 rpm in neutral for 5 seconds, to purge air before the final level check.",
   "source_url": "https://www.youtube.com/watch?v=BzcDneDpTBc",
   "source_name": "YouTube (Blauparts): Ram 1500 Transmission Fluid Change How To, 2013+ ZF 8-Speed",
   "confidence": "video",
   "date_checked": "2026-10-11"
  },
  {
   "text": "A shop owner who does many oil changes sees fewer engine problems on trucks changed at 4-5k miles and 5-6 months than on trucks run to the 8-10k oil-life reminder, and he prefills the filter.",
   "source_url": "https://www.ramforum.com/threads/5-7l-hemi-lifter-cam-protection.217199/page-2",
   "source_name": "RamForum: 5.7L Hemi - Lifter/Cam Protection (page 2)",
   "confidence": "forum",
   "date_checked": "2026-10-11",
   "disputed": true
  },
  {
   "text": "EcoDiesel oil: Chrysler's STAR case S2109000010 (Aug 2021), as posted, says 2014-2019 Gen 2 engines take 5W-40 full synthetic to MS-10902 and API CJ-4 (such as Shell Rotella T6), not the MS-12991 oil for 2020+ engines. A poster says VM Motori told an owner MS-12991, so owners disagree.",
   "source_url": "https://www.ecodieselram.com/forum/threads/eco-diesel-engine-maintenance-and-upgrades.6595/page-2",
   "source_name": "EcoDieselRam: Eco Diesel Engine maintenance and upgrades (page 2)",
   "confidence": "forum",
   "date_checked": "2026-10-11",
   "disputed": true
  },
  {
   "text": "EcoDiesel owners clean the DEF injector and its mount with steam on a P20EE code or every 50,000 miles, and remove the intake around 100k to clear EGR soot from the swirl valves. Never clean the intake in place; carbon chunks can hydrolock or damage the engine.",
   "source_url": "https://www.ecodieselram.com/forum/threads/eco-diesel-engine-maintenance-and-upgrades.6595/page-2",
   "source_name": "EcoDieselRam: Eco Diesel Engine maintenance and upgrades (page 2)",
   "confidence": "forum",
   "date_checked": "2026-10-11"
  },
  {
   "text": "Diff service on a 2014 4x4: the front takes about 1.5 qt of 75W-85 (8 mm Allen plugs; owners also use 75W-90), the rear about 2.5 qt of 75W-140 (14 mm Allen drain, pry the rubber fill cap off first). On a limited slip, add the friction modifier first so it doesn't overflow; one owner says a GL-5 synthetic doesn't need it.",
   "source_url": "https://www.ramforum.com/threads/2014-1500-4wd-differential-service.113542/",
   "source_name": "RamForum: 2014 1500 4WD Differential Service",
   "confidence": "forum",
   "date_checked": "2026-10-11",
   "disputed": true
  },
  {
   "text": "In salt states, wash the underside and inside the boxed frame every April or May, let it dry a day or more, then Fluid Film it; the door bottoms take the spray-can 360 degree wand through the drain holes and the tailgate through its access panel.",
   "source_url": "https://www.ramforum.com/threads/how-to-fluid-film-your-truck.111020/",
   "source_name": "RamForum: How to Fluid Film your truck",
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
    "Typical stock 09–13 5.7",
    "\"290–310ish\" / \"275ish\" / 280–290 rwhp",
    "Three owners",
    "forum"
   ],
   [
    "4x4, stock → modded",
    "272 hp / 291 lb-ft → 329 hp / 330 lb-ft",
    "Tune, stock shift points",
    "forum"
   ],
   [
    "Airaid intake, Magnaflow cat-back + Y-pipe, Diablo 93 tune",
    "309 hp",
    "32 in tires",
    "forum"
   ],
   [
    "Modified 4x4 on stock 17s",
    "13.3 s quarter mile",
    "Same thread",
    "forum"
   ],
   [
    "Hypertech sheet, 2011–13 5.7",
    "282 stock, 308 tuned",
    "Search summary; PDF timed out",
    "unconfirmed"
   ]
  ],
  "src": [
   {
    "label": "RamForum stock rwhp",
    "url": "https://www.ramforum.com/threads/stock-rwhp.37696/"
   }
  ],
  "disputedRows": [
   0
  ]
 },
 "videos": [
  {
   "title": "How to Replace The Lifters and Camshaft on a 2013 Dodge Ram 5.7 Hemi (Every Step in 30 Minutes!)",
   "channel": "Jack Fletcher",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=OKN082YGKOA",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "5.7 HEMI Exhaust Manifold Gasket and Bolt Replacement. How to Remove Broken Manifold Stud From Head!",
   "channel": "Boosted7761",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=AKcIMMfphJs",
   "note": "Title and channel confirmed; not watched."
  },
  {
   "title": "5.7 Hemi Ticking/Knocking Exhaust Manifold Leak Repair.",
   "channel": "Frostbite Racing",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=Y6WxmHVJjYs",
   "note": "Title and channel confirmed; not watched."
  }
 ],
 "unknowns": [
  "Factory: towing charts for 2009-15 and 2017 (2012 brochure GCWRs only); 5.7 phaser bolt torque for 2009-12 and 2017-18 (63 ft-lb in 2013, 72 in 2016); EcoDiesel head, bedplate and flexplate procedures; 4.7/3.7 internals and plug torque; differential and driveshaft fasteners; ring-gear sizes for other engines and years; front-differential identification.",
  "Procedures: 3.6 and 3.0 water pump procedures (page links not read); blend-door actuator for single-zone and dual-zone driver side (page missing on host); 8-speed (8HP70/845RE) fluid change interval (the 2016 manual lists only the six-speed).",
  "Codes: VIN decode for years other than 2016 (2012 and 2018 FCA guides returned HTML, 2014 was a cover page); pre-2011 \"Dodge Ram\" position 5-7 letters; paint codes for 2009-15 and 2017-18 from an FCA page.",
  "Problems: 3.6 rocker/lifter tick on DS trucks; 4.7 sludge; any DS-level TIPM data (no FCA document or recall found).",
  "Wheels: offsets for 2009-12 OE wheels; 3/5 and 4/6 DS kits (none found; likely custom only); 4x4 drops; the 2009 TPMS part number; 2-3 in lift tables.",
  "Parts: Katzkin price ($1,195-$1,895 search figures Unconfirmed); 2017-18 handheld tuners; HP Tuners credit cost; Hypertech dyno PDF; Northspec bracket price; stereo upgrades. Repair catalog parts list RockAuto only.",
  "Swaps: no documented DS LS or Coyote build; no completed DS 4.7 to 5.7 write-up."
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
  "TPMS & Wheels",
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
   "id": "lev-rc363",
   "platform": "Ram 1500 2009–2018",
   "category": "Suspension & Stance",
   "name": "2.5 in front leveling kit",
   "brand": "Rough Country",
   "part_number": "363",
   "fitment": {
    "years": "2012–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [
     "4WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Coil trucks only; not air suspension (Rebel, Limited, optioned) or Warlock. Requires strut disassembly"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 49.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/dodge-front-leveling-lift-kit-363",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 49.95,
    "url": "https://www.roughcountry.com/product/dodge-front-leveling-lift-kit-363",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Rough Country's instructions say not to use an impact on the strut top nut when adding the preload spacer, and to support the knuckle so it does not swing out far enough to pull the CV shaft out of the front differential.",
     "source_url": "https://www.sorjeepandtruck.com/sites/default/files/9236300.pdf",
     "source_name": "Rough Country: 2012-18 Dodge 4WD 1500 2.5in Leveling Kit instructions (9236300B)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On 2013+ trucks a spacer leveling kit lets the front over-extend, and owners report the factory upper ball joints popping out of the upper control arm; the common advice is Bilstein 5100s (no new arms needed) or aftermarket upper arms with the spacer. Owners disagree: one ran the Rough Country spacer kit 17k miles on a 2014 with no issue.",
     "source_url": "https://www.ramforum.com/threads/rough-country-2-5-lift-kit-questions.92531/",
     "source_name": "RamForum: Rough country 2.5 lift kit questions",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    },
    {
     "text": "A 2014 owner's upper ball joints popped out while the lower arm was jacked back up during a spacer-kit install, and Chrysler refused warranty under a STAR case dated 05/23/2013 because of the aftermarket kit ($1,100 quoted). Jack the lower arm slowly and inspect both upper ball joints before driving.",
     "source_url": "https://www.ramforum.com/threads/spacer-level-kit-star-case-2014-ram.44746/",
     "source_name": "RamForum: SPACER LEVEL KIT = STAR case 2014 Ram",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "lift-rc333",
   "platform": "Ram 1500 2009–2018",
   "category": "Suspension & Stance",
   "name": "4 in suspension lift kit",
   "brand": "Rough Country",
   "part_number": "333",
   "fitment": {
    "years": "2012–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [
     "4WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Requires 20 in+ wheels. Not for the 3.6, air suspension or Warlock"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 1099.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-333c",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "From price; N3 struts $1,449.95; M1 struts $1,709.95"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 1099.95,
    "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-333c",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "lift-rc332",
   "platform": "Ram 1500 2009–2018",
   "category": "Suspension & Stance",
   "name": "6 in suspension lift kit",
   "brand": "Rough Country",
   "part_number": "332",
   "fitment": {
    "years": "2012–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [
     "4WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Requires 20 in+ wheels"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 1099.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-332c",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "From price; N3 struts $1,449.95; M1 $1,709.95; Vertex/V2 $2,509.95; Vertex $3,149.95"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 1099.95,
    "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-332c",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "lift-rc329",
   "platform": "Ram 1500 2009–2018",
   "category": "Suspension & Stance",
   "name": "6 in suspension lift kit",
   "brand": "Rough Country",
   "part_number": "329",
   "fitment": {
    "years": "2009–11",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [
     "4WD"
    ],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Requires 20 in+ wheels. Not recommended for AWD"
   },
   "offers": [
    {
     "seller": "Rough Country (manufacturer)",
     "price": 1299.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-329c",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "From price; base listing out of stock; N3 struts version $1,649.95"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Rough Country (manufacturer)",
    "price": 1299.95,
    "url": "https://www.roughcountry.com/product/configurable/dodge-suspension-lift-kit-329c",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "low-belltech-964",
   "platform": "Ram 1500 2009–2018",
   "category": "Suspension & Stance",
   "name": "2/4 lowering kit, no shocks",
   "brand": "Belltech",
   "part_number": "964",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [
     "2WD"
    ],
    "cab": "Regular Cab",
    "engines": [],
    "position": "",
    "notes": "No air suspension"
   },
   "offers": [
    {
     "seller": "Belltech (manufacturer)",
     "price": 645,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.belltech.com/products/lowering-kit-w-o-shocks-964/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "Lowered trucks on bigger tires: check rear brake-hose clearance (see the safety warning).",
   "best_offer": {
    "seller": "Belltech (manufacturer)",
    "price": 645,
    "url": "https://www.belltech.com/products/lowering-kit-w-o-shocks-964/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Buy the Belltech 2/4 version that includes the rear track bar relocation bracket and shorter sway bar end links; an owner calls them necessary. One buyer confirmed his 964SP box did include them.",
     "source_url": "https://www.ramforum.com/threads/2-4-belltech-lowering-kit.189359/",
     "source_name": "RamForum: 2/4 belltech lowering kit",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "If a Belltech 2/4 truck bottoms out, owners cut off the factory bump stop cups front and rear and fit Belltech 4923 bump stops (2.01 in tall, 2.5 in OD); one says removing the front cups also cut bump steer noticeably.",
     "source_url": "https://www.ramforum.com/threads/belltech-2-4-with-ihc-no-cut-kit-bottoming-out.181095/",
     "source_name": "RamForum: Belltech 2/4 with IHC No Cut Kit Bottoming Out",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "After a Belltech 2/4 on a 2018 regular cab, the gas tank shield rubbed the driveshaft and had to be bent for clearance. Check it after the drop.",
     "source_url": "https://www.ramforum.com/threads/2-4-belltech-lowering-kit.189359/",
     "source_name": "RamForum: 2/4 belltech lowering kit",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Lowered on 22s: one owner had a tire rub through a rear brake hose, and another suggests 305/40R22 (about 31 in) to be safe. Check brake hose clearance at full lock and full bump after the drop.",
     "source_url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/",
     "source_name": "RamForumz: 2015 Ram 1500 Hemi reg cab lowered",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "low-belltech-963nd",
   "platform": "Ram 1500 2009–2018",
   "category": "Suspension & Stance",
   "name": "2/4 lowering kit with Nitro Drop 2",
   "brand": "Belltech",
   "part_number": "963ND",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [
     "2WD"
    ],
    "cab": "Quad/Crew",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Suspension Superstore",
     "price": 953,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://suspensionsuperstore.com/2009-2018-dodge-ram-1500-quad-crew-cab-2-4-lowering-kit-w-nitro-drop-2-kit-belltech-963nd",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "Lowered trucks on bigger tires: check rear brake-hose clearance (see the safety warning).",
   "best_offer": {
    "seller": "Suspension Superstore",
    "price": 953,
    "url": "https://suspensionsuperstore.com/2009-2018-dodge-ram-1500-quad-crew-cab-2-4-lowering-kit-w-nitro-drop-2-kit-belltech-963nd",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Buy the Belltech 2/4 version that includes the rear track bar relocation bracket and shorter sway bar end links; an owner calls them necessary. One buyer confirmed his 964SP box did include them.",
     "source_url": "https://www.ramforum.com/threads/2-4-belltech-lowering-kit.189359/",
     "source_name": "RamForum: 2/4 belltech lowering kit",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "If a Belltech 2/4 truck bottoms out, owners cut off the factory bump stop cups front and rear and fit Belltech 4923 bump stops (2.01 in tall, 2.5 in OD); one says removing the front cups also cut bump steer noticeably.",
     "source_url": "https://www.ramforum.com/threads/belltech-2-4-with-ihc-no-cut-kit-bottoming-out.181095/",
     "source_name": "RamForum: Belltech 2/4 with IHC No Cut Kit Bottoming Out",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Lowered on 22s: one owner had a tire rub through a rear brake hose, and another suggests 305/40R22 (about 31 in) to be safe. Check brake hose clearance at full lock and full bump after the drop.",
     "source_url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/",
     "source_name": "RamForumz: 2015 Ram 1500 Hemi reg cab lowered",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "low-mcgaughys-44050",
   "platform": "Ram 1500 2009–2018",
   "category": "Suspension & Stance",
   "name": "2/4 Deluxe drop kit",
   "brand": "McGaughys",
   "part_number": "44050",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [
     "2WD"
    ],
    "cab": "All cabs",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Suspension Superstore",
     "price": 664.44,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://suspensionsuperstore.com/2009-2018-dodge-ram-1500-2wd-all-cabs-2-4-deluxe-drop-kit-mcgaughys-44050",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Out of stock"
    }
   ],
   "notes": "SAFETY: one owner on this kit with 22x10 / 305/45R22 had the tire rub through the right-rear brake hose (near-total brake loss on the freeway). Check rear brake-hose clearance. Drop spindles move the wheel outboard about 1/2 in.",
   "best_offer": {
    "seller": "Suspension Superstore",
    "price": 664.44,
    "url": "https://suspensionsuperstore.com/2009-2018-dodge-ram-1500-2wd-all-cabs-2-4-deluxe-drop-kit-mcgaughys-44050",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Lowered on 22s: one owner had a tire rub through a rear brake hose, and another suggests 305/40R22 (about 31 in) to be safe. Check brake hose clearance at full lock and full bump after the drop.",
     "source_url": "https://www.ramforumz.com/threads/2015-ram-1500-hemi-reg-cab-lowered.196692/",
     "source_name": "RamForumz: 2015 Ram 1500 Hemi reg cab lowered",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "exh-flowmaster-737860",
   "platform": "Ram 1500 2009–2018",
   "category": "Exhaust & Headers",
   "name": "Signature Series dual rear exit, black chrome tips",
   "brand": "Flowmaster",
   "part_number": "737860",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": "With factory dual"
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 1299.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/flowmaster-ram1500-signature-series-dual-exhaust-system-black-chrome-tips-rear-exit-737860.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 1299.95,
    "url": "https://www.americantrucks.com/flowmaster-ram1500-signature-series-dual-exhaust-system-black-chrome-tips-rear-exit-737860.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Owners call Flowmaster's chambered mufflers notorious for drone on the 5.7, especially when MDS drops to four cylinders. An MBRP owner on the same thread says chambered mufflers resonate more with MDS than perforated straight-through ones.",
     "source_url": "https://www.ramforum.com/threads/muffler-upgrade-mds.66864/",
     "source_name": "RamForum: Muffler Upgrade & MDS",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "exh-magnaflow-r102404",
   "platform": "Ram 1500 2009–2018",
   "category": "Exhaust & Headers",
   "name": "MF Series cat-back, split rear",
   "brand": "Magnaflow",
   "part_number": "R102404",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 1245,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/magnaflow-mf-catback-split-rear-57l-0917-ram.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 1245,
    "url": "https://www.americantrucks.com/magnaflow-mf-catback-split-rear-57l-0917-ram.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "An owner with a Magnaflow-based (Mufflex 18 in) muffler says it is quiet at cruise but sounds terrible when MDS kicks in, so he turned MDS off with his DiabloSport inTune. Plan on an MDS-off tune if that sound bothers you.",
     "source_url": "https://www.ramforum.com/threads/muffler-upgrade-mds.66864/",
     "source_name": "RamForum: Muffler Upgrade & MDS",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "exh-borla-r101995",
   "platform": "Ram 1500 2009–2018",
   "category": "Exhaust & Headers",
   "name": "Touring cat-back, split rear exit",
   "brand": "Borla",
   "part_number": "R101995",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 1517.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/borla-touring-cat-back-exhaust-split-rear-exit-0917-57l.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 1517.99,
    "url": "https://www.americantrucks.com/borla-touring-cat-back-exhaust-split-rear-exit-0917-57l.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A 2018 Hemi owner measured the Borla Touring at 85-86 dB at cold start, 60s at idle and 50s cruising (5-6 ft from the tailpipe), calling it barely different from stock. A Flowmaster Super 44 on the same pipes hit 102-103 dB cold and was choppy on the highway. Pick the Touring for quiet, not for sound.",
     "source_url": "https://www.ramforum.com/threads/borla-touring-and-flowmaster-super-44-reviews-and-decibel-readings.147808/",
     "source_name": "RamForum: Borla Touring and Flowmaster Super 44 Reviews and Decibel Readings",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "exh-mbrp-s5146304",
   "platform": "Ram 1500 2009–2018",
   "category": "Exhaust & Headers",
   "name": "Armor Pro cat-back, split side",
   "brand": "MBRP",
   "part_number": "S5146304",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": "With factory dual"
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 1219.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/mbrp-pro-series-25in-catback-split-side-57l-fact-dual-0917-ram.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 1219.99,
    "url": "https://www.americantrucks.com/mbrp-pro-series-25in-catback-split-side-57l-fact-dual-0917-ram.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "An owner running an MBRP 14 in muffler says leaving the factory resonators in place is the key to keeping MDS drone under control; cruising, he can't hear it most of the time.",
     "source_url": "https://www.ramforum.com/threads/muffler-upgrade-mds.66864/",
     "source_name": "RamForum: Muffler Upgrade & MDS",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "hdr-bbk-4014",
   "platform": "Ram 1500 2009–2018",
   "category": "Exhaust & Headers",
   "name": "Shorty headers, 1-3/4 in, titanium ceramic",
   "brand": "BBK",
   "part_number": "4014",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Blow-By Racing",
     "price": 549.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://blowbyracing.com/products/bbk-09-18-dodge-ram-5-7l-hemi-shorty-tuned-length-exhaust-headers-1-3-4-titanium-ceramic",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Regular $599.99"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Blow-By Racing",
    "price": 549.99,
    "url": "https://blowbyracing.com/products/bbk-09-18-dodge-ram-5-7l-hemi-shorty-tuned-length-exhaust-headers-1-3-4-titanium-ceramic",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Owners replace the supplied BBK gasket and bolts with Remflex 6022 gaskets and ARP 440-1101 header bolts, and inspect every weld before install because BBK welds are known to crack. One owner says his cracked within about a year.",
     "source_url": "https://www.ramforum.com/threads/which-gaskets-should-i-buy-for-bbk-headers.193589/",
     "source_name": "RamForum: Which gaskets should I buy for BBK headers?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "On a 4x4, shorty headers fit but are tight: one owner had to remove the starter and steering shaft and loosen the factory Y-pipe to get BBK shorties in.",
     "source_url": "https://www.ramforum.com/threads/the-complete-shorty-header-installation-guide-diy.120804/",
     "source_name": "RamForum: The COMPLETE Shorty Header Installation Guide - DIY",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "hdr-jba-cat4ward",
   "platform": "Ram 1500 2009–2018",
   "category": "Exhaust & Headers",
   "name": "Cat4Ward shorty headers, 1-5/8 in",
   "brand": "JBA",
   "part_number": "n/s",
   "fitment": {
    "years": "2009–19",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "GSI Auto Group",
     "price": 991.21,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.gsiautogroup.com/products/jba-09-19-ram-5-7l-hemi-1-5-8in-primary-silver-ctd-cat4ward-header",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "GSI Auto Group",
    "price": 991.21,
    "url": "https://www.gsiautogroup.com/products/jba-09-19-ram-5-7l-hemi-1-5-8in-primary-silver-ctd-cat4ward-header",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On a 4x4, shorty headers fit but are tight: one owner had to remove the starter and steering shaft and loosen the factory Y-pipe to get BBK shorties in.",
     "source_url": "https://www.ramforum.com/threads/the-complete-shorty-header-installation-guide-diy.120804/",
     "source_name": "RamForum: The COMPLETE Shorty Header Installation Guide - DIY",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "hdr-sw-ram09hcaty",
   "platform": "Ram 1500 2009–2018",
   "category": "Exhaust & Headers",
   "name": "Long tube headers, 1-7/8 in, catted Y",
   "brand": "Stainless Works",
   "part_number": "RAM09HCATY",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "Quad/Crew",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 2655.25,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/sw-178in-headers-catted-ypipe-factconn-quadcrew-57l-0917ram.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 2655.25,
    "url": "https://www.americantrucks.com/sw-178in-headers-catted-ypipe-factconn-quadcrew-57l-0917ram.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A tune is not required with Stainless Works long tubes but owners get better results with one. The SW leads are true 3 in duals back to the factory muffler area; the stock pipes after the muffler are only 2.25 in, so plan new tailpipes.",
     "source_url": "https://www.ramforum.com/threads/long-tube-headers.211490/",
     "source_name": "RamForum: Long tube headers",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "2015 and later trucks have a locked PCM. One owner bought a remanufactured PCM, had it unlocked for HP Tuners, and kept the stock PCM in case he needs it.",
     "source_url": "https://www.ramforum.com/threads/long-tube-headers.211490/",
     "source_name": "RamForum: Long tube headers",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tune-diablo-8300",
   "platform": "Ram 1500 2009–2018",
   "category": "Intake & Tuning",
   "name": "inTune i3 tuner",
   "brand": "DiabloSport",
   "part_number": "8300",
   "fitment": {
    "years": "2009–14",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 499.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/diablosporttune-i3-tuner-0914-57l-ram-1500.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 499.95,
    "url": "https://www.americantrucks.com/diablosporttune-i3-tuner-0914-57l-ram-1500.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "If MDS will not stay off on a Diablo tuner, owners say: run every device update and the calibration step first, load a canned tune, then go into Modify on the last tune written. Some owners still could not turn MDS off on a canned tune and needed a custom tune.",
     "source_url": "https://www.ramforum.com/threads/intune-i3.119557/",
     "source_name": "RamForum: intune i3",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "tune-diablo-9300",
   "platform": "Ram 1500 2009–2018",
   "category": "Intake & Tuning",
   "name": "Trinity 2 tuner",
   "brand": "DiabloSport",
   "part_number": "9300",
   "fitment": {
    "years": "2003–14",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 770.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/diablosport-57ram1500-trinity-2-tuner-9300.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 770.95,
    "url": "https://www.americantrucks.com/diablosport-57ram1500-trinity-2-tuner-9300.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "If MDS will not stay off on a Diablo tuner, owners say: run every device update and the calibration step first, load a canned tune, then go into Modify on the last tune written. Some owners still could not turn MDS off on a canned tune and needed a custom tune.",
     "source_url": "https://www.ramforum.com/threads/intune-i3.119557/",
     "source_name": "RamForum: intune i3",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "tune-sct-7215",
   "platform": "Ram 1500 2009–2018",
   "category": "Intake & Tuning",
   "name": "X4/SF4 power flash tuner",
   "brand": "SCT",
   "part_number": "7215",
   "fitment": {
    "years": "2009–16",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": "09–13 5.7; 14–16 5.7 with 8-speed"
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 419,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/sct-sf4-x4-power-flash-tuner-0914-57l.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 419,
    "url": "https://www.americantrucks.com/sct-sf4-x4-power-flash-tuner-0914-57l.html",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "tune-hpt-mpvi3",
   "platform": "Ram 1500 2009–2018",
   "category": "Intake & Tuning",
   "name": "MPVI3 with Pro Feature Set (device only; vehicle credits extra)",
   "brand": "HP Tuners",
   "part_number": "MPVI3",
   "fitment": {
    "years": "Universal",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Scorched Performance",
     "price": 399.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.scorchedperformance.com/hp-tuners-mpvi3-wpro-feature-set",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "AmericanTrucks' \"MPVI3 + 2 credits (04–18 5.7 Ram 1500)\" kit M03-000-02 is now marked discontinued. Credit cost for this truck unknown.",
   "best_offer": {
    "seller": "Scorched Performance",
    "price": 399.99,
    "url": "https://www.scorchedperformance.com/hp-tuners-mpvi3-wpro-feature-set",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "2015 and later trucks have a locked PCM. One owner bought a remanufactured PCM, had it unlocked for HP Tuners, and kept the stock PCM in case he needs it.",
     "source_url": "https://www.ramforum.com/threads/long-tube-headers.211490/",
     "source_name": "RamForum: Long tube headers",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tune-diablo-pcm-2018",
   "platform": "Ram 1500 2009–2018",
   "category": "Intake & Tuning",
   "name": "inTune i3 Platinum + modified PCM swap kit",
   "brand": "DiabloSport",
   "part_number": "PKITDR578S18-I3",
   "fitment": {
    "years": "2018",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": "",
    "trans": "8-speed"
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 1599.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/diablosport-ram1500-intune-i3-platinum-tuner-modified-pcm-swap-kit-pkitdr578s18-i3.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 1599.95,
    "url": "https://www.americantrucks.com/diablosport-ram1500-intune-i3-platinum-tuner-modified-pcm-swap-kit-pkitdr578s18-i3.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "DiabloSport's modified (unlocked) PCMs work only with DiabloSport tuners such as the inTune i3 or Trinity T2 Platinum; they are not compatible with other tuning brands. Decide on the tuner brand before you buy the PCM.",
     "source_url": "https://www.diablosport.com/products/pcm/modified_pcm/parts/PCM-DR578S15",
     "source_name": "DiabloSport: PCM-DR578S15 Modified PCM",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "intake-kn-57-1561",
   "platform": "Ram 1500 2009–2018",
   "category": "Intake & Tuning",
   "name": "Series 57 FIPK cold air intake",
   "brand": "K&N",
   "part_number": "57-1561",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 367.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/kn-series57-fipk-cold-air-intake-57l-0914ram.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    },
    {
     "seller": "FMS Performance",
     "price": 367.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://fmsperformance.com/shop/air-intake-systems/ram-kn-intake-57-1561/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "The $317.99 \"sale\" in a search summary is not on the pages.",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 367.99,
    "url": "https://www.americantrucks.com/kn-series57-fipk-cold-air-intake-57l-0914ram.html",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "light-anzo-plank",
   "platform": "Ram 1500 2009–2018",
   "category": "Lighting",
   "name": "Plank-style projector headlights with halo, black",
   "brand": "ANZO",
   "part_number": "n/s",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Demon Performance",
     "price": 668,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.demonperformance.com/products/anzo-09-18-dodge-ram-1500-plank-style-projector-headlights-black-w-halo",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Demon Performance",
    "price": 668,
    "url": "https://www.demonperformance.com/products/anzo-09-18-dodge-ram-1500-plank-style-projector-headlights-black-w-halo",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The light bar has two loose wires: black is ground and green is positive. ANZO taps them into the parking-light plug, green to the white wire with brown tracer (center pin), and tests the bar before reassembly.",
     "source_url": "https://www.youtube.com/watch?v=PxvuhbPvE0g",
     "source_name": "YouTube (ANZO USA): 2009+ Dodge Ram headlight install",
     "confidence": "video",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Removing the six radiator-cover clips by sliding a fork tool under the cover keeps the clips in the cover so they don't get lost; the rear headlight latch is reached through the access panel in the fender liner, and aim is set through the rear hole in the fender with a Phillips.",
     "source_url": "https://www.youtube.com/watch?v=PxvuhbPvE0g",
     "source_name": "YouTube (ANZO USA): 2009+ Dodge Ram headlight install",
     "confidence": "video",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tail-spyder-5085917",
   "platform": "Ram 1500 2009–2018",
   "category": "Lighting",
   "name": "LED tail lights, all black",
   "brand": "Spyder",
   "part_number": "ALT-YD-DRAM09V2-LED-BKV2 (5085917)",
   "fitment": {
    "years": "2009–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Incandescent-equipped trucks only"
   },
   "offers": [
    {
     "seller": "jpmcarbon",
     "price": 349.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.jpmcarbon.com/products/spyder-dodge-ram-09-18-led-tail-lights-all-black-alt-yd-dram09v2-led-bkv2-incandescent-only-5085917",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Sale price; sold out. $252 is a struck \"regular price\""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "jpmcarbon",
    "price": 349.95,
    "url": "https://www.jpmcarbon.com/products/spyder-dodge-ram-09-18-led-tail-lights-all-black-alt-yd-dram09v2-led-bkv2-incandescent-only-5085917",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "This version is for trucks with incandescent tails only. A 2014 Laramie owner with factory LED tails put them in anyway and got hyperflash and bulb-out errors that 6 ohm 50 W resistors did not fix (the fault-sense wire is the issue); buy the version made for factory LED trucks. Owners disagree on Spyder quality: some call them junk, one says his were plug and play.",
     "source_url": "https://www.ramforum.com/threads/aftermarket-led-tail-light-for-non-led-factory-models-working-with-led-models.127264/",
     "source_name": "RamForum: Aftermarket LED Tail Light for NON LED Factory models working with LED models",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "bumper-ranchhand-fsd13hbl1",
   "platform": "Ram 1500 2009–2018",
   "category": "Exterior",
   "name": "Summit front bumper",
   "brand": "Ranch Hand",
   "part_number": "FSD13HBL1",
   "fitment": {
    "years": "2013–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Excluding Express, Rebel and Sport"
   },
   "offers": [
    {
     "seller": "Ranch Hand (manufacturer)",
     "price": 1867.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.ranchhand.com/front-bumper-fsd13hbl1.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    },
    {
     "seller": "AmericanTrucks",
     "price": 1867.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/ranch-hand-ram1500-summit-front-bumper-fsd13hbl1.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Ranch Hand (manufacturer)",
    "price": 1867.95,
    "url": "https://www.ranchhand.com/front-bumper-fsd13hbl1.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Ranch Hand says to test fit before any coating or paint (it won't pay for recoating), to move the factory angle bracket over for the tow hooks, and to push the inner fender liners behind the lip of the bumper end caps. It does not fit Sport or Express.",
     "source_url": "https://lci-support-doc.s3.amazonaws.com/ranch-hand/FSD13HBL1-INS.pdf",
     "source_name": "Ranch Hand: 2013-18 Dodge 1500 Summit Front Bumpers FSD13HBL1 instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "grille-redrock-r156638",
   "platform": "Ram 1500 2009–2018",
   "category": "Exterior",
   "name": "Rebel-style upper grille with LED DRL",
   "brand": "RedRock",
   "part_number": "R156638",
   "fitment": {
    "years": "2013–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Not Rebel"
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 194.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/redrock-ram1500-rebel-style-upper-replacement-grille-led-drl-r156638.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 194.99,
    "url": "https://www.americantrucks.com/redrock-ram1500-rebel-style-upper-replacement-grille-led-drl-r156638.html",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Because this grille sits more flush, the installer removes two flaps on the radiator support and the lower flap with a clip tool, and pops out the two center tabs on the upper shroud that have no holes. Allow about 2 hours.",
     "source_url": "https://www.youtube.com/watch?v=zlD9zGzsR7g",
     "source_name": "YouTube (AmericanTrucks): RedRock Rebel Style Upper Replacement Grille Review & Install",
     "confidence": "video",
     "date_checked": "2026-10-11"
    },
    {
     "text": "For the LEDs the installer routes the harness between the radiator and radiator support and taps the marker-bulb connector behind the headlight: red to the white wire with black stripe, black to the black wire. The headlight comes out (two 10 mm bolts plus the tab behind the fender-liner access door) to reach it.",
     "source_url": "https://www.youtube.com/watch?v=zlD9zGzsR7g",
     "source_name": "YouTube (AmericanTrucks): RedRock Rebel Style Upper Replacement Grille Review & Install",
     "confidence": "video",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "grille-am-amdeba00141",
   "platform": "Ram 1500 2009–2018",
   "category": "Exterior",
   "name": "Rebel-style upper grille, amber and off-road lights, glossy black",
   "brand": "American Modified",
   "part_number": "AMDEBA00141",
   "fitment": {
    "years": "2013–18",
    "models": [
     "Ram 1500 (DS)"
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
     "price": 259.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/american-modified-ram1500-rebel-style-upper-grille-amber-off-road-lights-glossy-black-amdeba00141.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 259.99,
    "url": "https://www.americantrucks.com/american-modified-ram1500-rebel-style-upper-grille-amber-off-road-lights-glossy-black-amdeba00141.html",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "grille-rebel-matte",
   "platform": "Ram 1500 2009–2018",
   "category": "Exterior",
   "name": "Rebel-style upper grille, matte black",
   "brand": "n/s",
   "part_number": "HG-RAM1315BB-GL",
   "fitment": {
    "years": "2013–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": "Not Rebel"
   },
   "offers": [
    {
     "seller": "AmericanTrucks",
     "price": 379.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/ram1500-rebel-style-upper-grille-replacement-matte-black-hg-ram1315bb-gl.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": ""
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 379.99,
    "url": "https://www.americantrucks.com/ram1500-rebel-style-upper-grille-replacement-matte-black-hg-ram1315bb-gl.html",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "grille-0912-matte",
   "platform": "Ram 1500 2009–2018",
   "category": "Exterior",
   "name": "Upper replacement grille, matte black",
   "brand": "n/s",
   "part_number": "HG-DR09-BK",
   "fitment": {
    "years": "2009–12",
    "models": [
     "Ram 1500 (DS)"
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
     "price": 308.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americantrucks.com/ram1500-upper-replacement-grille-matte-black-hg-dr09-bk.html",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "A search summary said $297.99"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AmericanTrucks",
    "price": 308.99,
    "url": "https://www.americantrucks.com/ram1500-upper-replacement-grille-matte-black-hg-dr09-bk.html",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "tonneau-bakflip-448207",
   "platform": "Ram 1500 2009–2018",
   "category": "Bed & Tonneau",
   "name": "BAKFlip MX4 hard folding tonneau, 5 ft 7 in",
   "brand": "BAK",
   "part_number": "448207",
   "fitment": {
    "years": "2009–18 and Classic",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Truck Bed Central",
     "price": 1199.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://truckbedcentral.com/products/bakflip-mx4-hard-folding-tonneau-cover-for-09-18-ram-1500-19-24-1500-classic-57-bed-448207",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "RamBox version $1,249.99"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Truck Bed Central",
    "price": 1199.99,
    "url": "https://truckbedcentral.com/products/bakflip-mx4-hard-folding-tonneau-cover-for-09-18-ram-1500-19-24-1500-classic-57-bed-448207",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On a 4th gen 5 ft 7 in RamBox bed the MX4 does not interfere with the RamBox lids. One owner says the hinges between panels start leaking after a couple of years; another had no leaks and says the drain tubes are easy to route and worth connecting.",
     "source_url": "https://www.ramforumz.com/threads/bakflip-mx4-on-4th-gen-57-rambox-bed.261003/",
     "source_name": "RamForumZ: Bakflip MX4 on 4th gen 5'7\" Rambox bed",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "seat-clazzio",
   "platform": "Ram 1500 2009–2018",
   "category": "Interior",
   "name": "Leather seat covers",
   "brand": "Clazzio",
   "part_number": "n/s",
   "fitment": {
    "years": "2013–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "Crew Cab, rear split seat",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "FastHemis",
     "price": 599,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://fasthemis.com/products/clazzio-leather-seat-covers-ram-2013-2018-crew-cab-w-rear-split-seat",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Regular $700"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "FastHemis",
    "price": 599,
    "url": "https://fasthemis.com/products/clazzio-leather-seat-covers-ram-2013-2018-crew-cab-w-rear-split-seat",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "They fit tight enough to hurt your fingers. For the rear bench, unbolt the 4 bolts holding the seat to the cab so the seatback folds forward; the front center console/jump seat cover is the weak piece, and one owner cut the seam and tucked the excess into the channel to make it look right.",
     "source_url": "https://www.ramforumz.com/threads/clazzio-perforated-leather-seat-cover-review.219619/",
     "source_name": "RamForumZ: Clazzio perforated leather seat cover review",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "int-wt-front-crew",
   "platform": "Ram 1500 2009–2018",
   "category": "Interior",
   "name": "FloorLiner, front, Crew Cab",
   "brand": "WeatherTech",
   "part_number": "n/s",
   "fitment": {
    "years": "2011–18",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "Crew Cab",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Upfit Supply",
     "price": 133.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://upfitsupply.com/products/weathertech-floorliner-ram-4g-crew-front",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Over-the-hump version $163.95"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Upfit Supply",
    "price": 133.95,
    "url": "https://upfitsupply.com/products/weathertech-floorliner-ram-4g-crew-front",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "tpms-schrader-56029398ab",
   "platform": "Ram 1500 2009–2018",
   "category": "TPMS & Wheels",
   "name": "TPMS sensor, 433 MHz",
   "brand": "Schrader",
   "part_number": "56029398AB (OE)",
   "fitment": {
    "years": "2010–13",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "tpms.com",
     "price": 49.98,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.tpms.com/Ram-Schrader-OEM-Schrader-TPMS-56029398AB-p/s0398-ram.htm",
     "checked": "2026-10-11",
     "status": "unverified",
     "source_note": "Listed price but shown as currently unavailable"
    }
   ],
   "notes": "Relearn required after install.",
   "best_offer": {
    "seller": "tpms.com",
    "price": 49.98,
    "url": "https://www.tpms.com/Ram-Schrader-OEM-Schrader-TPMS-56029398AB-p/s0398-ram.htm",
    "status": "unverified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "4th gen trucks learn new sensors automatically after a mile or two of driving, so a second wheel set with its own sensors needs no programming. The sensor changed between 2013 and 2014, so buy by model year, and be wary of \"OEM\" sets at 4 for $40 when factory sensors run over $60 each.",
     "source_url": "https://www.ramforum.com/threads/tpms-sensors.143065/",
     "source_name": "RamForum: TPMS sensors",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "oem-manifold-stud",
   "platform": "Ram 1500 2009–2018",
   "category": "OEM Repair Parts",
   "name": "Exhaust manifold stud, stainless higher-strength (TSB 11-002-11)",
   "brand": "Mopar",
   "part_number": "06509544AA",
   "fitment": {
    "years": "2009",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Chrysler (TSB 11-002-11)",
     "price": null,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.dodgetalk.com/attachments/sb-11-002-11-pdf.346902/",
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
     "text": "For studs broken flush, owners warn against easy-outs (a snapped one means grinding it out) and suggest the Lisle 71500 drill template made for the 5.7 Hemi if you must drill. Welding a nut on is the preferred method.",
     "source_url": "https://www.ramforum.com/threads/best-method-for-extracting-broken-exhaust-manifold-studs.141116/",
     "source_name": "RamForum: Best method for extracting broken exhaust manifold studs?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "oem-manifold-bolt",
   "platform": "Ram 1500 2009–2018",
   "category": "OEM Repair Parts",
   "name": "Exhaust manifold bolt (TSB 11-002-11, as needed)",
   "brand": "Mopar",
   "part_number": "06507746AA",
   "fitment": {
    "years": "2009",
    "models": [
     "Ram 1500 (DS)"
    ],
    "drive": [],
    "cab": "",
    "engines": [
     "5.7"
    ],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Chrysler (TSB 11-002-11)",
     "price": null,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.dodgetalk.com/attachments/sb-11-002-11-pdf.346902/",
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
     "text": "For studs broken flush, owners warn against easy-outs (a snapped one means grinding it out) and suggest the Lisle 71500 drill template made for the 5.7 Hemi if you must drill. Welding a nut on is the preferred method.",
     "source_url": "https://www.ramforum.com/threads/best-method-for-extracting-broken-exhaust-manifold-studs.141116/",
     "source_name": "RamForum: Best method for extracting broken exhaust manifold studs?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  }
 ],
 "catalog": {
  "index": "data/parts/ram1500-2009-2018/index.js",
  "indexBytes": 362758,
  "note": "Repair parts are RockAuto catalog picks (Economy, OE, Premium options per part type) read on the catalog pages of the representative vehicles linked here. Fitment comes from the listing notes for those vehicles only, so other years, trims and cabs show Check fitment.",
  "vehicles": [
   "https://www.rockauto.com/en/catalog/dodge,2010,ram+1500+pickup,5.7l+v8,1445018",
   "https://www.rockauto.com/en/catalog/ram,2014,1500,5.7l+v8,3305957"
  ],
  "generated": "2026-10-11",
  "files": [
   {
    "file": "data/parts/ram1500-2009-2018/0.js",
    "category": "Engine",
    "count": 154,
    "types": 55,
    "from": null,
    "bytes": 174389
   },
   {
    "file": "data/parts/ram1500-2009-2018/1.js",
    "category": "Ignition",
    "count": 29,
    "types": 6,
    "from": null,
    "bytes": 30219
   },
   {
    "file": "data/parts/ram1500-2009-2018/2.js",
    "category": "Fuel System",
    "count": 67,
    "types": 22,
    "from": null,
    "bytes": 64736
   },
   {
    "file": "data/parts/ram1500-2009-2018/3.js",
    "category": "Cooling",
    "count": 66,
    "types": 21,
    "from": null,
    "bytes": 73421
   },
   {
    "file": "data/parts/ram1500-2009-2018/4.js",
    "category": "HVAC",
    "count": 94,
    "types": 24,
    "from": null,
    "bytes": 86572
   },
   {
    "file": "data/parts/ram1500-2009-2018/5.js",
    "category": "Electrical",
    "count": 207,
    "types": 83,
    "from": null,
    "bytes": 214320
   },
   {
    "file": "data/parts/ram1500-2009-2018/6.js",
    "category": "Brakes",
    "count": 168,
    "types": 32,
    "from": null,
    "bytes": 170109
   },
   {
    "file": "data/parts/ram1500-2009-2018/7.js",
    "category": "Steering",
    "count": 63,
    "types": 18,
    "from": null,
    "bytes": 55749
   },
   {
    "file": "data/parts/ram1500-2009-2018/8.js",
    "category": "Drivetrain",
    "count": 305,
    "types": 88,
    "from": null,
    "bytes": 312507
   },
   {
    "file": "data/parts/ram1500-2009-2018/9.js",
    "category": "Body",
    "count": 271,
    "types": 87,
    "from": null,
    "bytes": 298454
   },
   {
    "file": "data/parts/ram1500-2009-2018/10.js",
    "category": "Lighting",
    "count": 58,
    "types": 11,
    "from": null,
    "bytes": 60774
   },
   {
    "file": "data/parts/ram1500-2009-2018/11.js",
    "category": "Interior",
    "count": 59,
    "types": 24,
    "from": null,
    "bytes": 63733
   },
   {
    "file": "data/parts/ram1500-2009-2018/12.js",
    "category": "Filters & Fluids",
    "count": 92,
    "types": 27,
    "from": null,
    "bytes": 88303
   },
   {
    "file": "data/parts/ram1500-2009-2018/13.js",
    "category": "Exhaust & Headers",
    "count": 109,
    "types": 26,
    "from": null,
    "bytes": 119716
   },
   {
    "file": "data/parts/ram1500-2009-2018/14.js",
    "category": "Suspension & Stance",
    "count": 157,
    "types": 25,
    "from": null,
    "bytes": 156975
   }
  ],
  "count": 1899
 },
 "reference": {
  "caveat": "From the 2010, 2013 and 2016 owner's manuals (each covers 1500/2500/3500), the 2016 and 2018 towing charts, FCA's 2016 VIN and paint guides, and 2016 Chrysler service information on a secondary host. Values change by year; check your own manual and door label.",
  "sections": [
   {
    "id": "maintenance",
    "title": "Maintenance",
    "short": "Schedules, plugs, intervals",
    "intro": "Factory schedules from the 2010, 2013 and 2016 owner's manuals. Fluid capacities are under Specs and years.",
    "blocks": [
     {
      "title": "2009-12 schedule (fixed 6,000 mi)",
      "conf": "verified",
      "src": [
       {
        "label": "2010 Dodge Ram Truck OM (dezosmanuals.com)",
        "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
       }
      ],
      "years": "2010 owner's manual pp. 564-581, standing in for 2009-12",
      "items": [
       "Oil: follow the oil change indicator, but never exceed 6,000 mi or 6 months; change at 6 months even if the indicator is off. More often with extended off-road use.",
       "Every 6,000 mi: oil and filter, rotate tires, inspect the exhaust. Brake linings, CV joints and front suspension/tie rods are inspected on the 12,000-mi services. Axle fluid is inspected at 18k, 36k and 54k; change it for police, taxi, fleet, off-road, snow plowing or frequent towing.",
       "Engine air filter: every 30,000 mi.",
       "Spark plugs: 3.7 and 5.7 every 30,000 mi. The 4.7 has 16 plugs: top (under-coil, standard) row every 48,000 mi and side (premium) row every 96,000 mi. Ignition cables: 3.7 at 60k and 120k; 4.7 at 96k.",
       "Auto trans fluid and filter: 60,000 mi for police, taxi, fleet or frequent towing; 120,000 mi otherwise.",
       "Transfer case fluid: inspect at 30k; change at 60k under the same severe uses.",
       "Coolant (HOAT): flush and replace at 102,000 mi or 60 months.",
       "PCV: inspect and replace if needed at 90,000 mi. Accessory drive belt(s): replace at 120,000 mi."
      ]
     },
     {
      "title": "2013-18 schedule (oil change indicator)",
      "conf": "verified",
      "src": [
       {
        "label": "2013 Ram 1500 OM (Mopar)",
        "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
       },
       {
        "label": "2016 Ram 1500 OM (Mopar)",
        "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
       }
      ],
      "years": "2013 OM pp. 704-707 and 2016 OM pp. 878-884; mileage columns were read from the chart layout, so a column misread is possible (2016 cross-checked against 2013)",
      "items": [
       "Oil: follow the oil change indicator. 1500: never exceed 10,000 mi, 12 months or 350 engine hours. Severe conditions can bring the message on as early as 3,500 mi. The 2016 manual adds Severe Duty: change at 4,000 mi for dusty or off-road use or mostly-idle operation.",
       "At every oil change: rotate tires; inspect battery, brakes and park brake, cooling system and hoses, exhaust; check ATF if it has a dipstick (6-speed only).",
       "Every 20,000 mi: front suspension and tie rods; brake linings; park brake adjustment (2016).",
       "Every 30,000 mi: engine air filter, CV/U-joints, axle surfaces (change axle fluid for police, taxi, fleet, off-road or frequent towing). Transfer case fluid inspected at 30k, 90k and 150k (2016).",
       "Spark plugs (mileage only): 2013 manual: 3.6 at 100,000 mi; 5.7 every 30,000 mi; 4.7 top (intake) row every 30k and side (exhaust) row at 90k. 2016 manual: one \"replace spark plugs\" line at 100,000 mi, no 30k line for the 5.7. Follow your model year's manual.",
       "Coolant (OAT): 10 years or 150,000 mi.",
       "Auto trans fluid and filter (2016 says six-speed only): 60,000 mi for police, taxi, fleet or frequent towing; 120,000 mi otherwise. No change interval is listed for the 8-speed.",
       "Transfer case fluid: change at 120,000 mi (60k for severe use).",
       "PCV valve: inspect and replace if needed at 100,000 mi."
      ]
     },
     {
      "title": "Oil consumption guideline",
      "conf": "verified-secondary",
      "src": [
       {
        "label": "Technical Service Bulletins index (lemon-manuals)",
        "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Technical%20Bulletins/Technical%20Service%20Bulletins/Other%20Variant/"
       }
      ],
      "years": "2012-19 gas engines, TSB 09-007-18 Rev. A",
      "text": "FCA: 1 qt per 2,000 mi is acceptable for personal use with non-aggressive driving; towing and high rpm raise it. Check the level after at least 15 minutes of drain-back."
     }
    ]
   },
   {
    "id": "quickref",
    "title": "Quick reference",
    "short": "Bulbs, fuses, tires, towing, paint",
    "blocks": [
     {
      "title": "Bulb sizes",
      "conf": "verified",
      "src": [
       {
        "label": "2010 Dodge Ram Truck OM (dezosmanuals.com)",
        "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
       },
       {
        "label": "2013 Ram 1500 OM (Mopar)",
        "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
       },
       {
        "label": "2016 Ram 1500 OM (Mopar)",
        "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
       }
      ],
      "years": "2010 OM pp. 549-550, 2013 OM pp. 683-684, 2016 OM pp. 858-859",
      "text": "Interior bulbs are brass or glass-wedge base; aluminum-base bulbs are not approved.",
      "table": {
       "columns": [
        "Position",
        "2010",
        "2013",
        "2016"
       ],
       "rows": [
        [
         "Dual headlamp",
         "H13",
         "n/a",
         "n/a"
        ],
        [
         "Quad / base quad low beam",
         "H11",
         "H11",
         "H11LL"
        ],
        [
         "Quad / base quad high beam",
         "9005",
         "9005",
         "9005LL"
        ],
        [
         "Premium bi-halogen projector low beam",
         "n/a",
         "HIR2",
         "\"9005Sl+\" as printed (unconfirmed)"
        ],
        [
         "Premium bi-halogen projector high beam",
         "n/a",
         "9005",
         "9005LL"
        ],
        [
         "Front turn (base quad)",
         "3157NA (side marker, quad)",
         "3157NA",
         "3157NA"
        ],
        [
         "Front turn (premium headlamp)",
         "n/a",
         "LED (dealer)",
         "LED (dealer)"
        ],
        [
         "Side marker, dual headlamp",
         "3157K",
         "n/a",
         "n/a"
        ],
        [
         "Fog",
         "9145",
         "9145 (horizontal), 9006 (vertical)",
         "9145 (horizontal), 9006 (vertical)"
        ],
        [
         "Tail/turn/stop",
         "3157K",
         "base 3157K; premium LED (dealer)",
         "not listed"
        ],
        [
         "Backup",
         "921",
         "921; premium T20",
         "921; premium 7440/W21W"
        ],
        [
         "CHMSL",
         "921",
         "921",
         "921K; LED CHMSL/cargo lamp (dealer)"
        ],
        [
         "Rear cargo lamp",
         "921",
         "921",
         "921"
        ],
        [
         "License plate",
         "194",
         "194",
         "194"
        ],
        [
         "Cab roof markers",
         "194NA",
         "194NA",
         "194NA"
        ],
        [
         "Rear lamp bar ID / dually side markers",
         "194",
         "194",
         "194"
        ],
        [
         "Overhead console",
         "TS 212-2",
         "n/a",
         "TS 212-9"
        ],
        [
         "Dome",
         "7679",
         "7679",
         "7679"
        ]
       ],
       "note": "Headlamp access (2010/2013): open the hood, disconnect the battery negative, remove the four push-in fasteners and two rivets holding the upper radiator seal, remove the seal, then the two headlamp screws. Release the slide lock through the access hole in the front wheel-house splash shield."
      }
     },
     {
      "title": "Fuses, 2010 TIPM (selected)",
      "conf": "verified",
      "src": [
       {
        "label": "2010 Dodge Ram Truck OM (dezosmanuals.com)",
        "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
       }
      ],
      "years": "2010 OM pp. 543-548; match your own box cover label",
      "text": "The Totally Integrated Power Module (TIPM) is under the hood. Cartridge fuses are J, mini fuses are M. For storage, pull the Ignition-Off Draw (IOD) fuse to cut battery drain.",
      "table": {
       "columns": [
        "Fuse",
        "Rating",
        "Circuit"
       ],
       "rows": [
        [
         "J02",
         "30 A",
         "Trailer tow main"
        ],
        [
         "J04 / J05",
         "40 A / 30 A",
         "ABS pump / ABS valve"
        ],
        [
         "J09",
         "30 A",
         "Electric brake (trailer)"
        ],
        [
         "J12",
         "40 A",
         "Starter solenoid"
        ],
        [
         "J13",
         "60 A",
         "Radiator fan #1/#2"
        ],
        [
         "J15",
         "60 A",
         "IOD main"
        ],
        [
         "J16",
         "40 A",
         "Front HVAC blower motor"
        ],
        [
         "M18",
         "25 A",
         "TCM / trans range"
        ],
        [
         "M20",
         "25 A",
         "Front wiper"
        ],
        [
         "M21",
         "25 A",
         "Door locks"
        ],
        [
         "M22",
         "20 A",
         "Fuel pump"
        ],
        [
         "M23 / M24",
         "20 A / 20 A",
         "Trailer lights / trailer tow backup"
        ],
        [
         "M25",
         "10 A",
         "J1962 diagnostic port"
        ],
        [
         "M31",
         "20 A",
         "Power outlet #1"
        ],
        [
         "M37 / M43",
         "10 A / 10 A",
         "Horn #1 / Horn #2"
        ],
        [
         "M50 / M51",
         "25 A / 20 A",
         "ASD #1, #2 / ASD #3"
        ]
       ]
      }
     },
     {
      "title": "Fuses, 2016 Power Distribution Center (selected)",
      "conf": "verified",
      "src": [
       {
        "label": "2016 Ram 1500 OM (Mopar)",
        "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
       }
      ],
      "years": "2016 OM pp. 848-857; diesel- and HD-only rows omitted",
      "text": "The PDC is in the engine compartment near the battery; cavity numbers are stamped on the cover. The fuel pump fuse is 20 A (M22) in 2010 and 30 A (F70) in 2016: a different module and year, not a conflict.",
      "table": {
       "columns": [
        "Cavity",
        "Rating",
        "Circuit"
       ],
       "rows": [
        [
         "F01 / F03",
         "80 A / 60 A",
         "Radiator fan control module / radiator fan (if equipped)"
        ],
        [
         "F05",
         "40 A",
         "Air suspension compressor"
        ],
        [
         "F06",
         "40 A",
         "ABS/ESC pump"
        ],
        [
         "F07",
         "40 A",
         "Starter solenoid"
        ],
        [
         "F11",
         "30 A",
         "Integrated trailer brake module"
        ],
        [
         "F13",
         "40 A",
         "Blower motor"
        ],
        [
         "F22",
         "20 A",
         "Engine control module"
        ],
        [
         "F25",
         "30 A",
         "Front wiper"
        ],
        [
         "F28 / F29 / F30",
         "20 / 20 / 30 A",
         "Trailer tow backup lights / parking lights / receptacle"
        ],
        [
         "F36",
         "30 A",
         "Rear defroster"
        ],
        [
         "F42",
         "20 A micro",
         "Horn"
        ],
        [
         "F44",
         "10 A",
         "Diagnostic port"
        ],
        [
         "F53 / F81",
         "20 A",
         "Trailer tow left / right turn and stop"
        ],
        [
         "F57",
         "20 A",
         "Transmission"
        ],
        [
         "F62",
         "10 A",
         "A/C clutch"
        ],
        [
         "F63",
         "20 A",
         "Ignition coils (gas)"
        ],
        [
         "F64",
         "25 A",
         "Fuel injectors / powertrain"
        ],
        [
         "F70",
         "30 A",
         "Fuel pump motor"
        ],
        [
         "F78",
         "10 A",
         "ECM / electric power steering"
        ],
        [
         "F93",
         "20 A",
         "Cigar lighter"
        ],
        [
         "F94",
         "10 A",
         "Shifter / transfer case module"
        ],
        [
         "F90/F91, F104",
         "20 A",
         "Power outlets"
        ]
       ]
      }
     },
     {
      "title": "Tire pressure",
      "conf": "verified",
      "src": [
       {
        "label": "2016 Ram 1500 OM (Mopar)",
        "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
       },
       {
        "label": "ram-manuals.com: tire loading and pressure",
        "url": "https://www.ram-manuals.com/tire_loading_and_tire_pressure-2170.html"
       }
      ],
      "years": "2009-18",
      "items": [
       "Use the placard on the driver-side B-pillar or rear edge of the driver's door. The owner's manuals print no psi table: pressure depends on the tire fitted."
      ],
      "caveat": "Owner reports (forum): 2014 Laramie P275/60R20 114S placard reads 39 psi cold front and rear (6,800 lb GVWR); a second owner reports 39 psi on the same size; several say dealers delivered trucks at 45-72 psi. tirepressure.org (aggregator, unconfirmed) lists 35-39 psi for 2014 trims. The 44-49 psi wheel-size figure under Wheels conflicts with these; go by your placard."
     },
     {
      "title": "Tire pressure owner reports",
      "conf": "forum",
      "src": [
       {
        "label": "airforums: tire operating temperatures",
        "url": "https://www.airforums.com/threads/tire-operating-temperatures.1317549/page-2"
       },
       {
        "label": "RamForumZ: what PSI are you running",
        "url": "https://www.ramforumz.com/threads/what-psi-are-you-guys-running.140986/"
       },
       {
        "label": "tirepressure.org 2014 Ram 1500 (aggregator)",
        "url": "https://tirepressure.org/ram/1500/2014"
       }
      ],
      "years": "2014 P275/60R20",
      "text": "39 psi cold front and rear on the door sticker of a 2014 Laramie (P275/60R20 114S); a second owner reports 39 psi on the same size."
     },
     {
      "title": "TPMS behavior and sensor relearn",
      "conf": "verified",
      "src": [
       {
        "label": "2016 Ram 1500 OM (Mopar)",
        "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
       },
       {
        "label": "Reset procedures: tire pressure monitor (lemon-manuals)",
        "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/General%20Information/Reset%20Procedures/Tire%20Pressure%20Monitor%20Systems/"
       }
      ],
      "years": "2016 OM pp. 673-680; relearn page is a general compilation on a secondary host",
      "items": [
       "The warning is based on the cold placard pressure. Once on, the light goes off only after you inflate to placard; the system updates after up to 20 minutes of driving above 15 mph. After adjusting pressure, allow about 2 minutes for the light to update.",
       "A matching full-size spare has a sensor; a non-matching or compact spare does not, so the system shows dashes and flashes the light for 75 s on each start, then stays solid.",
       "New sensor ID: drive at least 10 minutes at a continuous speed above 15 mph; the module learns the new ID and clears the DTCs on its own. Or program the ID with an RKE/TPM analyzer and a scan tool, then drive above 15 mph until the fault clears.",
       "The owner's manual auto-learn of sensor locations (ignition Off then On, about 15 min over 5 mph) is for the dual-rear-wheel 3500 system."
      ]
     },
     {
      "title": "Hitch limits",
      "conf": "verified",
      "src": [
       {
        "label": "2010 Dodge Ram Truck OM (dezosmanuals.com)",
        "url": "https://dezosmanuals.com/wp-content/uploads/2021/09/2010-Dodge-Ram-Truck-OM.pdf"
       },
       {
        "label": "2013 Ram 1500 OM (Mopar)",
        "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2013/1500/P130039_13_DSDJD2_OM_EN_USC_E10_V3.pdf"
       },
       {
        "label": "2016 Ram 1500 OM (Mopar)",
        "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
       },
       {
        "label": "2016 Ram 1500 towing chart",
        "url": "https://www.ramtrucks.com/assets/towing_guide/pdf/2016_ram_1500_towing_charts.pdf"
       },
       {
        "label": "2018 Ram 1500 towing chart",
        "url": "https://www.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/towing/2018%20Ram%201500.pdf"
       }
      ],
      "years": "2010 vs 2013/2016 (a year change, not a conflict)",
      "table": {
       "columns": [
        "Hitch",
        "2010",
        "2013 / 2016"
       ],
       "rows": [
        [
         "Class III bumper / heavy duty",
         "5,000 lb",
         "5,000 lb trailer / 500 lb tongue"
        ],
        [
         "Class IV (1500)",
         "10,000 lb",
         "11,000 lb trailer / 1,100 lb tongue"
        ]
       ]
      },
      "items": [
       "Weight-distributing hitch recommended above 5,000 lb (2016 and 2018 charts). Tongue weight: 10% for a conventional hitch.",
       "Break-in: no towing for the first 500 mi; for the first 500 mi of towing, stay under 50 mph with no full-throttle starts. Use Tow/Haul mode for all towing (2016).",
       "The hitch class limit is not the truck's rating; use the chart for your build."
      ]
     },
     {
      "title": "Towing and payload, 2016 (SAE J2807)",
      "conf": "verified",
      "src": [
       {
        "label": "2016 Ram 1500 towing chart",
        "url": "https://www.ramtrucks.com/assets/towing_guide/pdf/2016_ram_1500_towing_charts.pdf"
       }
      ],
      "years": "2016 chart only",
      "items": [
       "Highest rating: 10,640 lb, 5.7 / 65RFE, Regular Cab 8 ft, 4x2, 3.92: GVWR 6,600, payload 1,700, GCWR 15,950. Same truck with the 8HP70 and 3.92: 10,620 lb.",
       "Lowest: 4,170 lb (3.6 / 845RE, Crew Cab 5'7\" 4x4, 3.21; GCWR 9,850).",
       "Highest payload: 1,890 lb (3.6, Quad Cab 6'4\" 4x2). Lowest: 1,260 lb (EcoDiesel, Crew Cab 6'4\" 4x4).",
       "3.6 Regular Cab 6'4\" 4x2: 3.21 = 4,990 lb vs 3.55 = 7,290 lb. Axle ratio is the biggest single factor on V6 trucks.",
       "Quad and Crew Cabs with off-road tires (TXN), all-terrain tires (TWG) or steel wheels (WFP) are 6,800 lb GVWR; all 22 in tires (TY4) 6,200 lb GVWR; Big Horn / Lone Star EcoDiesel with 3.92 = 13,750 lb GCWR. Payload = GVWR minus base weight; payload and trailer rating are mutually exclusive."
      ]
     },
     {
      "title": "Towing and payload, 2018",
      "conf": "verified",
      "src": [
       {
        "label": "2018 Ram 1500 towing chart",
        "url": "https://www.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/towing/2018%20Ram%201500.pdf"
       }
      ],
      "years": "2018 chart (dated 09/18/2017)",
      "items": [
       "Highest: 10,620 lb, 5.7 / 8HP70, Regular Cab 8 ft, 4x2, 3.92 (GCWR 15,975). Near the top: 4x4 Regular Cab 8 ft 10,430; Quad 4x2 10,340; Crew 5'7\" 4x2 10,250 (all 5.7/8HP70/3.92).",
       "Lowest: 4,250 lb (3.6 / 3.21, Crew Cab 5'7\" 4x4).",
       "Highest payload: 1,880 lb (3.6, Quad Cab 4x2 and Regular Cab 8 ft 4x2). Lowest: 1,270 lb (EcoDiesel, Crew Cab 6'4\" 4x4).",
       "EcoDiesel max: 9,240 lb (Regular Cab 8 ft 4x2, 3.92, 14,750 GCWR).",
       "The 2018 SSV (police/special service) still lists a 65RFE 5.7 (10,060 lb at 3.92).",
       "Chart codes: ERB = 3.6, EZH = 5.7, EXF = 3.0 diesel. Model: 1 = 4x2, 6 = 4x4; body 41 = Quad 6'4\", 61 = Reg 6'4\", 62 = Reg 8', 98 = Crew 5'7\", 91 = Crew 6'4\"."
      ],
      "caveat": "Factory charts for 2009-15 and 2017 were not opened."
     },
     {
      "title": "Paint codes, 2016",
      "conf": "verified",
      "src": [
       {
        "label": "2016 Ram Exterior Color Availability (BodyBuilder)",
        "url": "https://www.ramtrucks.com/BodyBuilder/service/Image?imageId=MtQrP%2FFqLY5r%2Fest8MtGjGgHzAHGUTU0WB3rWuqSY7YmQ2vEhuBWBLNuyozWEMC0%0A"
       },
       {
        "label": "Jan 2017 Ram paint code list (catalograck)",
        "url": "https://www.catalograck.com/ImgVD/UNT/UC%5FRAMCodes%5FJan17.pdf"
       }
      ],
      "years": "2016 only; 2014 partial (PR4 Flame Red carry-over, PWQ Pearl White new); 2009 list unconfirmed",
      "table": {
       "columns": [
        "Color",
        "Code (as printed)",
        "Notes"
       ],
       "rows": [
        [
         "Red Pearl",
         "NRV",
         "new for 2016"
        ],
        [
         "Flame Red",
         "PR4",
         ""
        ],
        [
         "Torred",
         "ZR3",
         "Sport \"Buzz\" model only"
        ],
        [
         "Stinger Yellow",
         "KYV",
         "Buzz only"
        ],
        [
         "Luxury Brown Pearl",
         "GTW",
         "new"
        ],
        [
         "Black Forest Green Pearl",
         "KGZ",
         ""
        ],
        [
         "Blue Streak Pearl",
         "KCL",
         ""
        ],
        [
         "True Blue Pearl",
         "KBU",
         ""
        ],
        [
         "Bright Silver Metallic",
         "WS2",
         "also the Laramie lower two-tone"
        ],
        [
         "Granite Crystal Metallic",
         "LAU",
         ""
        ],
        [
         "Maximum Steel Metallic",
         "KAR",
         ""
        ],
        [
         "Brilliant Black",
         "AXR",
         "also the Outdoorsman/Power Wagon/Rebel lower two-tone"
        ],
        [
         "Pearl White",
         "PWQ",
         "new"
        ],
        [
         "Bright White",
         "GW7",
         "fleet only after 9/7/15 on several trims"
        ],
        [
         "White Gold Metallic",
         "HWL",
         "Longhorn lower two-tone"
        ]
       ]
      },
      "caveat": "Code prefix: this FCA sheet prints AXR / GW7 / LAU, while aftermarket lists and the Jan 2017 Ram list print PXR / PW7 / PAU. Matching on the last two characters is the researcher's reading, not an FCA rule (unconfirmed)."
     },
     {
      "title": "Paint codes, 2014 and 2009",
      "conf": "unconfirmed",
      "src": [
       {
        "label": "2014 BodyBuilder paint sheet",
        "url": "https://www.ramtrucks.com/assets/bbg/pdf/2014/docs/intro/paintinfo.pdf"
       },
       {
        "label": "2009 rambodybuilder paint info (search extract)",
        "url": "http://www.rambodybuilder.com/2009/docs/intro/paintinfo.pdf"
       }
      ],
      "years": "2014 partial, 2009 search extract",
      "text": "2014 sheet text-extracts only Flame Red PR4 (carry-over) and Pearl White PWQ (new), verified; the rest is an image. 2009: a search extract lists colors and codes in jumbled order (only Brilliant Black PXR lines up), so no pairings are given."
     }
    ]
   },
   {
    "id": "vin",
    "title": "VIN and option codes",
    "short": "VIN, sales codes",
    "blocks": [
     {
      "title": "VIN by position (2016)",
      "conf": "verified",
      "src": [
       {
        "label": "FCA US 2016 Truck/MPV VIN Code Guide",
        "url": "https://www.ramtrucks.com/assets/bbg/pdf/2016/docs/intro/vin.pdf"
       },
       {
        "label": "2016 Ram 1500 OM (Mopar)",
        "url": "https://vehicleinfo.mopar.com/assets/publications/en-us/Ram/2016/1500/P127415_16_DSDJD2_OM_EN_USC_DIGITAL.pdf"
       }
      ],
      "years": "2016 only; other years share the Part 565 structure but letters may differ. 2009-11 trucks were sold as \"Dodge Ram\"; their position 5-7 letters were not checked",
      "text": "VIN location: left front of the dash, visible through the windshield; also on the frame and underbody (2016 OM p. 6).",
      "table": {
       "columns": [
        "Position",
        "Meaning (2016)"
       ],
       "rows": [
        [
         "1-3",
         "WMI: 1C6 = FCA US truck; 2C6 = FCA Canada truck; 3C6 = Mexico truck (1C7/2C7/3C7 = incomplete vehicle)"
        ],
        [
         "4",
         "Brake system and GVWR band plus restraints. E.g. 6,001-7,000 lb: C (belts plus air bags), J (front side bags), R (side bags, all rows), Y (no bags)"
        ],
        [
         "5-7",
         "DS 1500: R6x = 2WD, R7x = 4WD. Reg Cab short bed A (ST) / B (SLT) / C (Sport), R = HFE; Reg Cab long bed D (ST) / E (SLT); Quad F ST, G SLT, H Sport, J Laramie, Z HFE; Crew short bed K ST, L SLT, M Sport, N Laramie, P Longhorn, X = SSV (4WD only), Y = Rebel; Crew long bed S ST, T SLT, U Sport, V Laramie, W Longhorn"
        ],
        [
         "8",
         "Engine: G = 3.6 V6 gas (ERB/ERC/ERT); T = 5.7 V8 gas (EZC/EZH); 2 = 5.7 gas/CNG; M = 3.0 V6 diesel, turbo (EXF/EXN)"
        ],
        [
         "9",
         "Check digit"
        ],
        [
         "10",
         "Model year: 2016 = G (verified); standard sequence 2009 = 9, 2010 = A, 2011 = B, 2012 = C, 2013 = D, 2014 = E, 2015 = F, 2017 = H, 2018 = J"
        ],
        [
         "11",
         "Plant: S = Warren Truck; G = Saltillo Truck; C/D/E/L/R/T/W are other FCA plants"
        ],
        [
         "12-17",
         "Plant sequence number"
        ]
       ]
      }
     },
     {
      "title": "Sales codes",
      "conf": "verified",
      "src": [
       {
        "label": "FCA US 2016 Truck/MPV VIN Code Guide",
        "url": "https://www.ramtrucks.com/assets/bbg/pdf/2016/docs/intro/vin.pdf"
       },
       {
        "label": "2018 Ram 1500 towing chart",
        "url": "https://www.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/towing/2018%20Ram%201500.pdf"
       }
      ],
      "years": "2016-18",
      "items": [
       "Engines: ERB 3.6, EZH 5.7 MDS VVT, EXF 3.0 diesel. Transmission and axle codes are under Specs and years.",
       "Interior color codes (2016 color sheet): X9 Black, X8 Black/Diesel Gray, U1 Canyon Brown/Light Frost Beige, XT Black/Cattle Tan, XR Black/Radar Red.",
       "Axles named in the 2016 5.7 4WD service tree: Front Axle 215FD, Rear Axle C235 (215 mm front, 235 mm rear for that variant; other engines and years not checked)."
      ]
     }
    ]
   },
   {
    "id": "codes",
    "title": "Trouble codes and recalls",
    "short": "Codes tied to FCA TSBs, recalls",
    "intro": "Only codes tied to an FCA TSB or recall. Generic Hemi P0300, P0456 and P0128 lists are forum-only, so they are not listed.",
    "blocks": [
     {
      "title": "Codes and likely causes",
      "conf": "verified-secondary",
      "src": [
       {
        "label": "Technical Service Bulletins index (lemon-manuals)",
        "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Technical%20Bulletins/Technical%20Service%20Bulletins/Other%20Variant/"
       },
       {
        "label": "Safety recalls index (lemon-manuals)",
        "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Technical%20Bulletins/Safety%20Recalls/Other%20Variant/Recalls/"
       }
      ],
      "years": "Years per row; Chrysler bulletin text on a secondary host, checked 2026-10-20",
      "table": {
       "columns": [
        "Code(s)",
        "Applies to",
        "Cause / fix per FCA",
        "Source"
       ],
       "rows": [
        [
         "P2072, P2110, P2118",
         "2013-18 DS (bulletin covers 2013-23) with the 3.6 (ERB)",
         "Throttle blade icing, often a no-start in the cold (the bulletin prints \"-7°C (-20°F)\"; -7°C is about 19°F). Fix: dry out the PCV valve, hose and throttle body, fit the updated make-up air hose and air cleaner lid, change the oil (1.0 hr labor)",
         "TSB 09-023-23 (Nov 28, 2023)"
        ],
        [
         "P0441, P062A",
         "2010-18 DS (bulletin covers 2010-24) 3.6 or 5.7, only severe/dusty duty",
         "Clogged single vapor-canister filter; also hard fueling, early nozzle shut-off and fuel flow-back. Information only: a dual-filter kit exists; not for normal-duty trucks",
         "TSB 25-009-24 (Dec 5, 2024; supersedes 25-001-21)"
        ],
        [
         "P0335, P0336",
         "2014-18 DS 3.0 EcoDiesel built 6/13/2014-3/26/2018",
         "Missing magnetic material on the crankshaft tone wheel; covered by the X94 warranty extension",
         "TSB 14-007-21 Rev. A"
        ],
        [
         "No DTC: low assist or heavy steering at low speed",
         "2016 DS built 3/22-4/9/2016; recall: 2015-16 (440 trucks)",
         "EPS gear: replace the gear assembly (TSB 19-001-16). Recall 16V-167 (FCA S19): loss of power-steering assist, EPS unit replaced",
         "TSB 19-001-16; recall 16V-167"
        ],
        [
         "No DTC: noisy or loose starter",
         "2016 DS built 3/1-3/6/2016 (3.6, 3.0 diesel, 5.7)",
         "Loose starter bolts; torque them to spec",
         "TSB 09-005-16"
        ]
       ]
      }
     },
     {
      "title": "Related recalls with no DTC",
      "conf": "verified-secondary",
      "src": [
       {
        "label": "Safety recalls index (lemon-manuals)",
        "url": "https://lemon-manuals.org.ua/Dodge%20and%20Ram/2016/1500%20Big%20Horn%2C%204D%20Pickup%2C%205.7L%20Eng%20VIN%20T%2C%204WD/Repair%20and%20Diagnosis/Quick%20Lookups/Technical%20Bulletins/Safety%20Recalls/Other%20Variant/Recalls/"
       }
      ],
      "years": "Per item",
      "items": [
       "19V-757 (FCA VB1): 2014-19 Ram 1500 (and Classic) 3.0 EcoDiesel, 107,980 trucks. The EGR cooler can crack and coolant vapor can combust in the intake manifold (fire risk). EGR cooler replaced; intake manifold inspected and replaced if needed.",
       "16V-301 (S32): 2016 Ram 1500 built 2/19-3/3/2016 (64 trucks). Front halfshafts may fracture; both are replaced.",
       "17V-198 (T20): 2016-17 Ram 1500 (30 trucks). Differential pin retaining screw can loosen, so the differential may break or lock up."
      ]
     }
    ]
   }
  ]
 },
 "resolved": [
  "TPMS relearn: drive at least 10 min above 15 mph to auto-learn, or program the ID with an RKE/TPM tool and a scan tool (Quick reference).",
  "2016 max tow 10,640 lb (previously Unconfirmed) confirmed from the 2016 chart (Quick reference).",
  "2016 and 2018 payload ranges added.",
  "Spark-plug replacement intervals extracted (Maintenance).",
  "Ring-gear sizes, partly: 2016 5.7 4WD service tree names Front Axle 215FD and Rear Axle C235.",
  "EPS faults, partly: TSB 19-001-16 and recall 16V-167 (Trouble codes).",
  "Oil consumption guideline: 1 qt per 2,000 mi acceptable on 2012-19 gas engines (TSB 09-007-18)."
 ]
};
