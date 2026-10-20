/* Forge platform data: camaro-2010-2015. Built by scripts/build_app_*.js, then scripts/expand/integrate.py (catalog meta, reference, gap-fill guides). Schema: app/DATA-FORMAT.md */
window.FORGE_PLATFORMS = window.FORGE_PLATFORMS || {};
window.FORGE_PLATFORMS["camaro-2010-2015"] = {
 "schemaVersion": 1,
 "id": "camaro-2010-2015",
 "name": "Camaro",
 "title": "Chevrolet Camaro 5th gen",
 "years": "2010–2015",
 "yearsNote": "LS/LT, SS, SS 1LE (2013–15), ZL1 (2012–15), Z/28 (2014–15)",
 "kind": "car",
 "make": "Chevrolet",
 "models": [
  "Camaro LS/LT (3.6 V6)",
  "Camaro SS (6.2 LS3/L99)",
  "Camaro SS 1LE (2013–15)",
  "Camaro ZL1 (6.2 LSA, 2012–15)",
  "Camaro Z/28 (7.0 LS7, 2014–15)"
 ],
 "tagline": "Staggered 5x120 fitment, Brembo clearance and the lug-nut color rule.",
 "compiled": "2026-10-11",
 "pricesChecked": "2026-10-11",
 "safetyAlerts": [
  {
   "title": "Lug nut torque depends on nut color",
   "text": "Check the cone-seat color before you torque. Silver-tint nuts (2010–11 and some 2012): 190 N·m / 140 lb-ft. Blue-tint nuts (2012 on; all 2014–15): 150 N·m / 110 lb-ft (2015 GM SI rounds it to 111 lb-ft). The 2012 manual lists both. Mixed-history cars can have either. It is the most common torque mistake on these cars.",
   "conf": [
    "verified",
    "verified-secondary"
   ],
   "src": [
    {
     "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
    },
    {
     "label": "2011 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2011_chevrolet_camaro.pdf"
    },
    {
     "label": "2012 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2012_chevrolet_camaro.pdf"
    },
    {
     "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
    },
    {
     "label": "2015 Camaro owner's manual (source link dead, checked 2026-10-20)",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/chevrolet/2015-camaro.pdf"
    },
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    }
   ]
  },
  {
   "title": "Recall 14V346: knee can switch off the ignition",
   "text": "2010–14 (all built 12/2008–5/2014): the driver's knee can hit the flip key and switch off the ignition. Remedy is a new key/fob. 19E064: dealers may have installed un-remedied replacement keys (2010–15). Check your VIN.",
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA recalls API (2014)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=chevrolet&model=camaro&modelYear=2014"
    }
   ]
  }
 ],
 "conflicts": [
  {
   "topic": "Lug torque by nut color",
   "text": "140 lb-ft (silver, 2010–11) vs 110 lb-ft (blue, 2012 on / 2014–15). The 2012 manual explains it by nut color. Use the color rule.",
   "conf": "verified",
   "src": [
    {
     "label": "2011 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2011_chevrolet_camaro.pdf"
    },
    {
     "label": "2012 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2012_chevrolet_camaro.pdf"
    },
    {
     "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
    }
   ]
  },
  {
   "topic": "V8 oil capacity",
   "text": "8.0 qt with filter (owner's manuals) vs MotorTrend's \"8.9 quarts (8.5 L)\" pan capacity. Follow the owner's manual.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2015 Camaro owner's manual (source link dead, checked 2026-10-20)",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/chevrolet/2015-camaro.pdf"
    },
    {
     "label": "MotorTrend 2010 Camaro powertrains",
     "url": "https://www.motortrend.com/features/sucp-0904w-2010-camaro-engines-transmissions"
    }
   ]
  },
  {
   "topic": "LS7 oil capacity",
   "text": "10.0 qt (2015 owner's manual and 2015 GM SI) vs 10.5 qt (PI1200B). Go with 10.0 qt (9.5 qt without filter).",
   "conf": [
    "verified",
    "verified-secondary"
   ],
   "disputed": true,
   "src": [
    {
     "label": "2015 Camaro owner's manual (source link dead, checked 2026-10-20)",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/chevrolet/2015-camaro.pdf"
    },
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    },
    {
     "label": "GM PI1200B Z/28",
     "url": "https://static.nhtsa.gov/odi/tsbs/2014/MC-10138689-9999.pdf"
    }
   ]
  },
  {
   "topic": "LLT compression",
   "text": "11.3:1 (MotorTrend/GM release) vs 11.4:1 (service-manual mirror).",
   "conf": [
    "verified",
    "verified-secondary"
   ],
   "disputed": true,
   "src": [
    {
     "label": "MotorTrend 2010 Camaro powertrains",
     "url": "https://www.motortrend.com/features/sucp-0904w-2010-camaro-engines-transmissions"
    },
    {
     "label": "GM SI mirror 2009–13 (diagnostdata)",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/"
    }
   ]
  },
  {
   "topic": "Z/28 rear offset",
   "text": "ET32.25 (Project 6GR) vs ET26 (Phastek chart). wheeloffset.net shows ET11 for the front only.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "Project 6GR 5th/6th gen wheels",
     "url": "https://project6gr.com/5th-6th-gen-camaro-wheels/"
    },
    {
     "label": "Phastek Performance (tire chart / store; guide gave no page URL)",
     "url": "https://www.phastekperformance.com/"
    }
   ]
  },
  {
   "topic": "SS 1LE rear wheel",
   "text": "20x11 ET43 (Project 6GR; 2015 brochure \"20x10 front and 20x11 rear\") vs 20x10 ET43 (Phastek chart). The brochure wins: 20x11.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2015 Camaro brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
    },
    {
     "label": "Project 6GR 5th/6th gen wheels",
     "url": "https://project6gr.com/5th-6th-gen-camaro-wheels/"
    },
    {
     "label": "Phastek Performance (tire chart / store; guide gave no page URL)",
     "url": "https://www.phastekperformance.com/"
    }
   ]
  },
  {
   "topic": "\"SS 1LE Brembo 6 piston\" (Apex)",
   "text": "The 2013–15 5th-gen 1LE used red 4-piston SS Brembos (2015 brochure). The 6-piston 1LE is 6th gen. GM wins.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "2015 Camaro brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
    },
    {
     "label": "Apex 5th-gen Camaro fitment guide",
     "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
    }
   ]
  },
  {
   "topic": "18 in wheels over SS Brembos",
   "text": "Owners say both \"won't fit\" and \"fits with the right wheel\". The second is correct but depends on the wheel. Check the wheel maker's brake template.",
   "conf": "forum",
   "disputed": true,
   "src": [
    {
     "label": "Camaro5 thread 6249",
     "url": "https://www.camaro5.com/forums/showthread.php?t=6249"
    },
    {
     "label": "Camaro5 thread 195407",
     "url": "https://www.camaro5.com/forums/showthread.php?t=195407"
    },
    {
     "label": "Camaro5 thread 327081",
     "url": "https://www.camaro5.com/forums/showthread.php?t=327081"
    }
   ]
  },
  {
   "topic": "Brake torques",
   "text": "chevy-specs.com (44 + 90° front bracket; banjo 22 or 30) vs 2015 GM SI (Brembo caliper bolts 30 lb-ft + 90° front and rear; hose fitting bolt 30 lb-ft). Resolved in favor of the GM SI.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    },
    {
     "label": "chevy-specs.com brake torque",
     "url": "https://chevy-specs.com/cars/2015/camaro6.2/torque-specs_brake.php"
    }
   ]
  },
  {
   "topic": "2010–13 vs 2015 torque changes",
   "text": "Rear toe-link bolt 103 → 129 lb-ft; UCA bushing-to-frame 37 + 120° → 129 lb-ft flat; rear sway clamp 16 → 43 lb-ft; front link nuts 36 → 52 lb-ft; front clamp nuts 13 → 32 lb-ft; V8 front hub bolts 79 lb-ft → 74 lb-ft + 28°. May be running changes or transcription differences. Use the table for your model year; for 2013–14 (no table found) confirm against the hardware or GM SI.",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "GM SI mirror 2009–13 (diagnostdata)",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/"
    },
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    }
   ]
  },
  {
   "topic": "6.2 spark plugs",
   "text": "15 N·m (2009–13 mirror) vs 20 N·m (2015 SI, LS3/LSA/LS7 tables).",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "GM SI mirror 2009–13 (diagnostdata)",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/"
    },
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    }
   ]
  },
  {
   "topic": "MM6 5th/6th gear",
   "text": "0.80/0.63 (Car and Driver, Z/28) vs 0.74/0.50 (Camaro5, 1LE). Unresolved.",
   "conf": [
    "verified",
    "forum"
   ],
   "disputed": true,
   "src": []
  },
  {
   "topic": "Chevy SS forum UCA-to-knuckle",
   "text": "44 + 120° (Chevy SS forum) vs both Camaro tables (60 N·m + 90°). Camaro tables win.",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "GM SI mirror 2009–13 (diagnostdata)",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/"
    },
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    }
   ]
  },
  {
   "topic": "ZL1 front offset",
   "text": "ET23 (5th gen) vs ET25/ET20 cited in Camaro6 threads. Those are 6th-gen figures and don't apply.",
   "conf": "verified",
   "src": [
    {
     "label": "Project 6GR 5th/6th gen wheels",
     "url": "https://project6gr.com/5th-6th-gen-camaro-wheels/"
    }
   ]
  },
  {
   "topic": "NHTSA VIN decoder errors",
   "text": "The decoder returns trim \"Eco (1SA)\" for a 2015 LS7 Z/28 (2G1FZ1EE*F9); an LT1 engine for a 2014 ZL1 with code 7 (LT1 is 6th gen only); \"LFJ\" for code D (not a Camaro engine); and inconsistent trim names for the same series letters (FB = LT in 2010 and 2014, FT = 2SS with LS3, FH and FD blank). Rely on positions 8 and 10 only; read trim from the SPID label.",
   "conf": "verified",
   "disputed": true,
   "src": [
    {
     "label": "NHTSA vPIC VIN decoder API (GM-submitted patterns)",
     "url": "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/2G1FZ1EE*F9?format=json"
    }
   ]
  },
  {
   "topic": "Bulletin 21-NA-124 is trucks only",
   "text": "A search summary claimed 21-NA-124 (EVAP P0442/P0455) covers the Camaro, but the bulletin lists Chevrolet/GMC trucks 2000-2021 only. It does not apply and is not cited for the Camaro.",
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA vPIC VIN decoder API (GM-submitted patterns)",
     "url": "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/2G1FZ1EE*F9?format=json"
    }
   ]
  },
  {
   "topic": "Fog bulb by year",
   "text": "PS24W (2010) vs PSX26W (2012-13 except ZL1) vs H11 (2012 ZL1). Different bases; check the fitted bulb.",
   "conf": "verified",
   "src": [
    {
     "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
    },
    {
     "label": "2012 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2012_chevrolet_camaro.pdf"
    },
    {
     "label": "2013 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2013_chevrolet_camaro.pdf"
    }
   ]
  },
  {
   "topic": "2014 rear lamps",
   "text": "The facelift uses T20 / 7444LL / W21/5W; 3157K does not fit.",
   "conf": "verified",
   "src": [
    {
     "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
    }
   ]
  },
  {
   "topic": "Fuse numbering moved",
   "text": "Rear block: ECM/battery F13 to F10, RVC F14 to F11, fuel system module F15 to F12, convertible top F5/F6 to F4/F5 between 2010 and 2014. IP HVAC fuse F5 (2010) to F28 (2014).",
   "conf": "verified",
   "src": [
    {
     "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
    },
    {
     "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
    }
   ]
  },
  {
   "topic": "Maintenance by year",
   "text": "2010 has no brake or clutch fluid interval and rear-axle fluid at 100k normal / 50k severe; 2014 sets brake and clutch fluid at 150k / 10 years and rear axle at 45k / 15k.",
   "conf": "verified",
   "src": [
    {
     "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
    },
    {
     "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
    }
   ]
  },
  {
   "topic": "Paint WA136X",
   "text": "Phastek lists WA136X for both Emerald Green Met. and Lime Rock Green G7J (2015); paintref marks G7J not confirmed.",
   "conf": "unconfirmed",
   "disputed": true,
   "src": [
    {
     "label": "Phastek Camaro paint codes (third-party)",
     "url": "https://www.phastekperformance.com/blog/camaro-paint-codes/"
    },
    {
     "label": "paintref 2015 Camaro (third-party)",
     "url": "https://paintref.com/cgi-bin/colorcodedisplay.cgi?manuf=GM&model=Camaro&year=2015"
    }
   ]
  },
  {
   "topic": "LLT water pump pulley bolt",
   "text": "10 N·m in the procedure vs 12 N·m in the cooling spec table.",
   "conf": "verified-secondary",
   "disputed": true,
   "src": [
    {
     "label": "GM SI 2009-13 Camaro (diagnostdata mirror): cooling-system",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/cooling-system/"
    }
   ]
  },
  {
   "topic": "6.2 spark plug torque reconciled",
   "text": "The 2014 SI Engine Controls table: new plug 20 N·m (15 lb-ft), refitting an existing plug 15 N·m (11 lb-ft). The LS3 engine table still lists 15 N·m without the distinction; LSA lists 20. Use 20 N·m for new plugs.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2014 Camaro GM SI (lemon-manuals mirror): suspension and brake tables",
     "url": "https://lemon-manuals.la/Chevrolet/2014/Camaro%20ZL1%2C%202D%20Convertible%2C%20Automatic%20Trans/Repair%20and%20Diagnosis/Suspension/"
    }
   ]
  },
  {
   "topic": "PIP4819A coverage",
   "text": "The bulletin says Camaro SS but its RPO list includes LSA; ZL1 coverage is inferred, not stated.",
   "conf": "verified",
   "src": [
    {
     "label": "GM PIP4819A (NHTSA)",
     "url": "https://static.nhtsa.gov/odi/tsbs/2013/MC-10112844-9999.pdf"
    }
   ]
  }
 ],
 "overview": {
  "facts": [
   {
    "label": "Platform",
    "text": "5th gen Camaro 2010–2015: LS/LT (V6), SS (V8), SS 1LE (2013–15), ZL1 (2012–15), Z/28 (2014–15).",
    "conf": "verified",
    "src": [
     {
      "label": "2015 Camaro brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
     }
    ]
   },
   {
    "label": "Fuel tank",
    "text": "18.8 gal (71 L).",
    "conf": "verified",
    "src": [
     {
      "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
      "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
     },
     {
      "label": "2015 Camaro owner's manual (source link dead, checked 2026-10-20)",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/chevrolet/2015-camaro.pdf"
     }
    ]
   },
   {
    "label": "Spark plug gap",
    "text": "2010: V6 1.1 mm (0.043 in), V8 1.0 mm (0.040 in). 2014–15: 0.95–1.10 mm (0.037–0.043 in) for all engines.",
    "conf": "verified",
    "src": [
     {
      "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
      "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
     },
     {
      "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
      "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
     },
     {
      "label": "2015 Camaro owner's manual (source link dead, checked 2026-10-20)",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/chevrolet/2015-camaro.pdf"
     }
    ]
   },
   {
    "label": "Bore x stroke",
    "text": "6.2: 4.06 x 3.62 in (2015 brochure). V6: 94 x 85.6 mm (mirror). LS7: 4.13 x 4.00 in.",
    "conf": [
     "verified",
     "verified-secondary"
    ],
    "src": [
     {
      "label": "2015 Camaro brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
     },
     {
      "label": "GM SI mirror 2009–13 (diagnostdata)",
      "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/"
     }
    ]
   },
   {
    "label": "1LE package (2013–15)",
    "text": "FE6 suspension, monotube rear shocks, ZL1 wheel bearings, toe links and rear shock mounts, upgraded half-shafts, strut-tower brace, flat-bottom steering wheel, 3.91 gears. 2013 production 1,826 cars.",
    "conf": [
     "verified",
     "forum"
    ],
    "src": [
     {
      "label": "2015 Camaro brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
     },
     {
      "label": "zl1registry 1LE specs",
      "url": "https://zl1registry.com/1le-specs.php"
     }
    ]
   },
   {
    "label": "Z/28 factory alignment (PI1200B)",
    "text": "Front caster 5.9° ±0.5, camber −1.5° ±0.5, total toe 0.1° ±0.2. Rear camber −1.0° ±0.5, total toe −0.1° ±0.2. Front carbon-ceramic rotors can't be resurfaced.",
    "conf": "verified",
    "src": [
     {
      "label": "GM PI1200B Z/28",
      "url": "https://static.nhtsa.gov/odi/tsbs/2014/MC-10138689-9999.pdf"
     }
    ]
   }
  ],
  "engines": {
   "columns": [
    "Engine (RPO, VIN)",
    "Years / trim",
    "Output",
    "Compression",
    "Notes"
   ],
   "rows": [
    [
     "3.6L LLT V6, DI (V)",
     "2010–2011 LS/LT",
     "2010: 304 hp @ 5900 / 273 lb-ft @ 5200. 2011: 312 hp @ 6500 / 278 lb-ft @ 5100 (SAE re-certification, not an engine change)",
     "11.3:1 (MotorTrend) / 11.4:1 (mirror)",
     "Timing-chain stretch bulletin"
    ],
    [
     "3.6L LFX V6 (3)",
     "2012–2015 LS/LT",
     "323 hp @ 6800 / 278 lb-ft @ 4800",
     "11.5:1",
     "7000 rpm redline"
    ],
    [
     "6.2L LS3 V8 (W)",
     "2010–2015 SS manual (and 1LE)",
     "426 hp @ 5900 / 420 lb-ft @ 4600",
     "10.7:1",
     "6600 rpm redline"
    ],
    [
     "6.2L L99 V8 (J)",
     "2010–2015 SS automatic",
     "400 hp @ 5900 / 410 lb-ft @ 4300",
     "10.4:1",
     "AFM plus VVT. 6200 rpm redline"
    ],
    [
     "6.2L LSA supercharged V8 (P)",
     "2012–2015 ZL1",
     "580 hp @ 6000 / 556 lb-ft @ 4200",
     "9.1:1",
     "Intercooler circuit 2.4 qt. 6200 rpm redline"
    ],
    [
     "7.0L LS7 V8 (E)",
     "2014–2015 Z/28",
     "505 hp @ 6100 / 481 lb-ft @ 4800",
     "11.0:1",
     "Dry sump, hand-built. 7000 rpm redline"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "MotorTrend 2010 Camaro powertrains",
     "url": "https://www.motortrend.com/features/sucp-0904w-2010-camaro-engines-transmissions"
    },
    {
     "label": "2011 Camaro brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2011-camaro.pdf"
    },
    {
     "label": "2015 Camaro brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
    },
    {
     "label": "GM SI mirror 2009–13 (diagnostdata)",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/"
    }
   ],
   "disputedRows": [
    0
   ]
  },
  "transmissions": [
   {
    "label": "V6 manual",
    "text": "Aisin AY6 6MT: 4.48 / 2.58 / 1.63 / 1.19 / 1.00 / 0.75, R 3.67.",
    "conf": "verified",
    "src": [
     {
      "label": "carspecs.us 2011 1LT",
      "url": "https://carspecs.us/"
     }
    ]
   },
   {
    "label": "V6 auto",
    "text": "6L50 6AT (4.07 first gear).",
    "conf": "verified",
    "src": [
     {
      "label": "MotorTrend 2010 Camaro powertrains",
      "url": "https://www.motortrend.com/features/sucp-0904w-2010-camaro-engines-transmissions"
     }
    ]
   },
   {
    "label": "SS manual",
    "text": "Tremec TR6060 (RPO M10): 3.01 / 2.07 / 1.43 / 1.00 / 0.84 / 0.57, R 3.28. GM-quoted validation 430 lb-ft (forum).",
    "conf": [
     "verified",
     "forum"
    ],
    "src": []
   },
   {
    "label": "SS auto / ZL1 auto",
    "text": "6L80 6AT (SS); 6L90 (ZL1). The 2015 SI covers 6L50/6L80/6L90.",
    "conf": "verified",
    "src": [
     {
      "label": "2015 Camaro owner's manual (source link dead, checked 2026-10-20)",
      "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/chevrolet/2015-camaro.pdf"
     },
     {
      "label": "2015 GM SI mirror (lemon-manuals)",
      "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
     }
    ]
   },
   {
    "label": "SS 1LE (2013–15, manual only)",
    "text": "TR6060 close-ratio (RPO MM6; SI lists the family as \"M10, MG9, MM6\") plus air-to-liquid trans cooler and ZL1 short-throw shifter. Forum ratios 2.66 / 1.78 / 1.30 / 1.00 / 0.74 / 0.50 (disputed for 5th/6th).",
    "conf": [
     "verified-secondary",
     "forum"
    ],
    "disputed": true,
    "src": [
     {
      "label": "2015 GM SI mirror (lemon-manuals)",
      "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
     }
    ]
   },
   {
    "label": "ZL1 manual",
    "text": "TR6060 (MG9, the CTS-V spec, validated to 560 lb-ft per a GM Powertrain quote on Camaro5). MG9 for ZL1 unconfirmed.",
    "conf": [
     "forum",
     "unconfirmed"
    ],
    "src": []
   },
   {
    "label": "Z/28",
    "text": "TR6060 close-ratio: 2.66 / 1.78 / 1.30 / 1.00 / 0.80 / 0.63, R 2.90. Short throw, liquid-to-liquid trans cooler, Torsen helical limited-slip plus diff cooler.",
    "conf": "verified",
    "src": [
     {
      "label": "GM PI1200B Z/28",
      "url": "https://static.nhtsa.gov/odi/tsbs/2014/MC-10138689-9999.pdf"
     },
     {
      "label": "2015 Camaro brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
     }
    ]
   },
   {
    "label": "Note",
    "text": "No GM-hosted ratio document turned up; ratios come from the GM data feed republished by Car and Driver and Autoweb.",
    "conf": "unconfirmed",
    "src": []
   }
  ],
  "axles": {
   "columns": [
    "Model",
    "Axle ratio"
   ],
   "rows": [
    [
     "V6 manual",
     "3.27 (1LS/LT); 2LS 2.92"
    ],
    [
     "V6 auto",
     "3.27; 2LS 2.92"
    ],
    [
     "SS manual",
     "3.45"
    ],
    [
     "SS auto",
     "3.27"
    ],
    [
     "SS 1LE",
     "3.91"
    ],
    [
     "ZL1",
     "3.73 manual / 3.23 auto"
    ],
    [
     "Z/28",
     "3.91"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "2011 Camaro brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2011-camaro.pdf"
    },
    {
     "label": "2015 Camaro brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
    }
   ]
  },
  "axleNotes": [
   {
    "label": "Rear diff",
    "text": "8.6 in / 218 mm IRS diff on SS (gear swap section). ZL1 uses a 250 mm axle (2015 SI ring-gear table).",
    "conf": "verified-secondary",
    "src": [
     {
      "label": "2015 GM SI mirror (lemon-manuals)",
      "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
     }
    ]
   }
  ],
  "extraTables": [
   {
    "title": "Capacities",
    "table": {
     "columns": [
      "System",
      "Spec"
     ],
     "rows": [
      [
       "Engine oil with filter",
       "V6 6.0 qt (5.7 L); 6.2 V8 (LS3/L99/LSA) 8.0 qt (7.6 L), 7.5 qt without filter; LS7 10.0 qt with filter / 9.5 qt without (PI1200B says 10.5)"
      ],
      [
       "Coolant",
       "V6 auto 10.8 qt; V6 manual 11.2 qt; L99 11.4 qt (2010–12) / 11.5 qt (2015); LS3 11.8 qt (2010–12) / 11.5 qt (2015); LSA 11.5 qt; LS7 12.7 qt"
      ],
      [
       "Automatic (pan drop plus filter)",
       "6.7 qt (6.3 L), both 6L50 and 6L80"
      ],
      [
       "Manual transmission",
       "V6 AY6 1.9 qt; SS TR6060 4.2 qt; Z/28 4.5 qt; ZL1 4.6 qt"
      ],
      [
       "Rear axle fluid",
       "1.0 qt (0.9 L) for V6 and LS3/L99/LS7. ZL1 (LSA) 2.1 qt (2.0 L). Friction modifier 2.5 oz (2010, 2012) or 3.3 oz (2014–15)"
      ],
      [
       "Diff service interval",
       "45k miles normal / 15k severe. Z/28 track use: every 6 hours (PIP5097A, PI1200B)"
      ]
     ],
     "conf": "verified",
     "src": [
      {
       "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
       "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
      },
      {
       "label": "2012 Camaro owner's manual (GM PDF, carmanual.org copy)",
       "url": "https://carmanual.org/OwnersManual/chevrolet/2012_chevrolet_camaro.pdf"
      },
      {
       "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
       "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
      },
      {
       "label": "2015 Camaro owner's manual (source link dead, checked 2026-10-20)",
       "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/chevrolet/2015-camaro.pdf"
      },
      {
       "label": "2015 GM SI mirror (lemon-manuals)",
       "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
      },
      {
       "label": "GM PI1200B Z/28",
       "url": "https://static.nhtsa.gov/odi/tsbs/2014/MC-10138689-9999.pdf"
      }
     ],
     "disputedRows": [
      0
     ]
    }
   },
   {
    "title": "2015 trim and performance snapshot",
    "table": {
     "columns": [
      "Item",
      "V6",
      "SS",
      "SS 1LE",
      "ZL1",
      "Z/28"
     ],
     "rows": [
      [
       "Wheels",
       "18x7.5 / 19x8 / RS 20x8 F and 20x9 R",
       "20x8 F / 20x9 R",
       "20x10 F / 20x11 R forged",
       "20x10 F / 20x11 R forged",
       "19x11 F / 19x11.5 R forged"
      ],
      [
       "Tires",
       "245/55R18, 245/50R19, 245/45R20 F with 275/40R20 R",
       "245/45R20 F / 275/40R20 R",
       "285/35ZR20 all four",
       "285/35ZR20 F / 305/35ZR20 R",
       "305/30ZR19 all four (Pirelli Trofeo R)"
      ],
      [
       "Brakes",
       "Base 4-wheel disc",
       "Brembo 4-piston, 14.0 in F (1-piece) / 14.4 in R",
       "Same Brembo 4-piston, painted red",
       "Brembo 6-piston, 14.6 in 2-piece F; 4-piston 14.4 in R",
       "Brembo carbon ceramic: 15.5 in 6-piston F / 15.3 in 4-piston R"
      ],
      [
       "Sway bars (F/R)",
       "n/s",
       "23 / 24 mm",
       "27 / 28 mm",
       "25 / 28 mm (coupe)",
       "25 / 26 mm"
      ],
      [
       "0–60 / quarter mile",
       "5.9 s (LT)",
       "4.7 s / 12.9 s @ 113 (manual)",
       "4.7 s",
       "4.0 s / 12.1 s @ 120 (manual)",
       "3.98 s / 12.04 s @ 122"
      ],
      [
       "Ring lap",
       "n/s",
       "8:19",
       "n/s",
       "7:41.27",
       "7:37.47"
      ]
     ],
     "conf": "verified",
     "src": [
      {
       "label": "2015 Camaro brochure",
       "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
      }
     ]
    }
   }
  ],
  "yearChanges": [
   {
    "year": "2010",
    "text": "Launch: LLT V6 (304 hp), LS3 (manual) and L99 (auto) SS. Early issues: rear spoiler nuts, battery cable (recall 09V155), clutch feel.",
    "conf": [
     "verified",
     "forum"
    ],
    "src": [
     {
      "label": "MotorTrend 2010 Camaro powertrains",
      "url": "https://www.motortrend.com/features/sucp-0904w-2010-camaro-engines-transmissions"
     },
     {
      "label": "NHTSA recalls API (2010)",
      "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=chevrolet&model=camaro&modelYear=2010"
     }
    ]
   },
   {
    "year": "2011",
    "text": "LLT re-rated to 312 hp (SAE re-certification).",
    "conf": "verified",
    "src": [
     {
      "label": "2011 Camaro brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2011-camaro.pdf"
     }
    ]
   },
   {
    "year": "2012",
    "text": "LFX V6 (323 hp). ZL1 (LSA, 580 hp). Blue-tint lug nuts introduced (110 lb-ft); some 2012s still have silver (140 lb-ft).",
    "conf": "verified",
    "src": [
     {
      "label": "2012 Camaro owner's manual (GM PDF, carmanual.org copy)",
      "url": "https://carmanual.org/OwnersManual/chevrolet/2012_chevrolet_camaro.pdf"
     }
    ]
   },
   {
    "year": "2013",
    "text": "SS 1LE package (manual, 3.91, red 4-piston Brembos).",
    "conf": "verified",
    "src": [
     {
      "label": "2015 Camaro brochure",
      "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
     },
     {
      "label": "zl1registry 1LE specs",
      "url": "https://zl1registry.com/1le-specs.php"
     }
    ]
   },
   {
    "year": "2014",
    "text": "Z/28 (LS7, 505 hp, carbon-ceramic brakes). All 2014–15 use blue lug nuts.",
    "conf": "verified",
    "src": [
     {
      "label": "GM PI1200B Z/28",
      "url": "https://static.nhtsa.gov/odi/tsbs/2014/MC-10138689-9999.pdf"
     },
     {
      "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
      "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
     }
    ]
   }
  ],
  "mpg": {
   "columns": [
    "Car",
    "EPA combined (city / hwy)",
    "Owner-reported"
   ],
   "rows": [
    [
     "V6 auto",
     "22 (18–19 / 28–29)",
     "18.2–25.8 (V6)"
    ],
    [
     "V6 manual",
     "20–21",
     ""
    ],
    [
     "SS manual",
     "19 (16/24)",
     "14.8–25.9"
    ],
    [
     "SS auto",
     "18–19",
     "14.5–21.8"
    ],
    [
     "ZL1 manual",
     "16 (14/19)",
     "18.0"
    ],
    [
     "ZL1 auto",
     "14 (12/18)",
     ""
    ],
    [
     "Z/28",
     "15 (13/19)",
     ""
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "fueleconomy.gov",
     "url": "https://www.fueleconomy.gov/"
    }
   ],
   "note": "Owner-reported \"Driver MPG\" samples are small."
  }
 },
 "wheels": {
  "specs": {
   "columns": [
    "Item",
    "Value",
    "Source"
   ],
   "rows": [
    [
     "Bolt pattern",
     "5x120 mm",
     "wheeloffset.net, carclubsusa, Mr. Wheel Deal"
    ],
    [
     "Center bore",
     "66.9 mm, hub-centric (Apex Camaro-specific wheels use 67.1 mm; BMW 5x120 wheels at 72.6 mm need hub rings)",
     "wheeloffset.net; Apex"
    ],
    [
     "Lug thread",
     "M14x1.5",
     "wheeloffset.net"
    ],
    [
     "Lug torque, silver-tint nuts (2010–11 and some 2012)",
     "190 N·m / 140 lb-ft",
     "2010, 2011 owner's manuals"
    ],
    [
     "Lug torque, blue-tint nuts (2012 on; all 2014–15)",
     "150 N·m / 110 lb-ft (2015 GM SI rounds to 111 lb-ft)",
     "2012, 2014, 2015 owner's manuals; 2015 SI"
    ],
    [
     "Backspacing",
     "BS (in) = (width + 1) / 2 + ET/25.4. SS front 20x8 ET35 5.88 in; SS rear 20x9 ET40 6.57 in; ZL1 front 20x10 ET23 6.41 in; ZL1 rear 20x11 ET43 7.69 in; Z/28 front 19x11 ET11 6.43 in",
     "guide math"
    ],
    [
     "Rotation",
     "Staggered from the factory: side to side only. A square 285 setup rotates front to back and reduces understeer",
     "Apex"
    ]
   ],
   "conf": [
    "verified",
    "verified-secondary"
   ],
   "src": [
    {
     "label": "wheeloffset.net Camaro",
     "url": "https://wheeloffset.net/wheels/chevrolet/camaro/2015/"
    },
    {
     "label": "carclubsusa Camaro wheel sizes",
     "url": "https://carclubsusa.com/chevrolet/camaro/info/wheel-sizes/2010/"
    },
    {
     "label": "Apex 5th-gen Camaro fitment guide",
     "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
    },
    {
     "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
    },
    {
     "label": "2011 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2011_chevrolet_camaro.pdf"
    },
    {
     "label": "2012 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2012_chevrolet_camaro.pdf"
    },
    {
     "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
    },
    {
     "label": "2015 Camaro owner's manual (source link dead, checked 2026-10-20)",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/chevrolet/2015-camaro.pdf"
    },
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    }
   ]
  },
  "stock": {
   "columns": [
    "Trim",
    "Front",
    "Rear",
    "Tires"
   ],
   "rows": [
    [
     "LS / 1LT",
     "18x7.5 ET38",
     "same",
     "245/55R18"
    ],
    [
     "1LT opt. / 2LT",
     "19x8 ET38",
     "same",
     "245/50R19"
    ],
    [
     "RS, 1SS, 2SS",
     "20x8 ET35",
     "20x9 ET40",
     "245/45ZR20 / 275/40ZR20"
    ],
    [
     "21 in accessory",
     "21x8.5 ET38",
     "21x9.5 ET43",
     "245/40R21"
    ],
    [
     "SS 1LE (2013–15)",
     "20x10 ET23",
     "20x11 ET43 (Phastek chart says 20x10)",
     "285/35ZR20 all four (side-specific)"
    ],
    [
     "ZL1",
     "20x10 ET23",
     "20x11 ET43",
     "285/35ZR20 / 305/35ZR20"
    ],
    [
     "Z/28",
     "19x11 ET11",
     "19x11.5 ET32.25 (6GR) or ET26 (Phastek)",
     "305/30ZR19 all four"
    ]
   ],
   "conf": "verified",
   "src": [
    {
     "label": "Project 6GR 5th/6th gen wheels",
     "url": "https://project6gr.com/5th-6th-gen-camaro-wheels/"
    },
    {
     "label": "carclubsusa Camaro wheel sizes",
     "url": "https://carclubsusa.com/chevrolet/camaro/info/wheel-sizes/2010/"
    },
    {
     "label": "Phastek Performance (tire chart / store; guide gave no page URL)",
     "url": "https://www.phastekperformance.com/"
    },
    {
     "label": "2015 Camaro brochure",
     "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
    },
    {
     "label": "GM PI1200B Z/28",
     "url": "https://static.nhtsa.gov/odi/tsbs/2014/MC-10138689-9999.pdf"
    }
   ],
   "disputedRows": [
    4,
    6
   ],
   "note": "ZL1/1LE wheels on a regular SS sit about 16 mm further out at the front (inner face 13 mm further in) and about 6 mm further out at the rear: the go-to \"OEM+\" upgrade."
  },
  "stances": [
   {
    "id": "stock",
    "title": "Stock height",
    "subtitle": "Bolt-on upgrades",
    "conf": "verified",
    "src": [
     {
      "label": "Project 6GR 5th/6th gen wheels",
      "url": "https://project6gr.com/5th-6th-gen-camaro-wheels/"
     },
     {
      "label": "Mr. Wheel Deal guide (Wayback Machine; guide gave no snapshot URL)",
      "url": "https://web.archive.org/"
     },
     {
      "label": "Apex 5th-gen Camaro fitment guide",
      "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
     }
    ],
    "note": "ZL1 replicas (20x10 ET23 / 20x11 ET43) are the best-documented no-mod upgrade for SS cars.",
    "rows": [
     {
      "drop": "ZL1/1LE replica",
      "truck": "None on SS/ZL1",
      "wheel": "20x10 ET23 F / 20x11 ET43 R",
      "tire": "285/35-20 / 305/35-20 (or 285/30 and 305/30)",
      "fit": "\"One staggered setup covers both generations\" (Project 6GR)",
      "conf": "verified",
      "src": [
       {
        "label": "Project 6GR 5th/6th gen wheels",
        "url": "https://project6gr.com/5th-6th-gen-camaro-wheels/"
       }
      ]
     },
     {
      "drop": "Staggered (\"most common\" per MWD)",
      "truck": "n/s",
      "wheel": "20x10 +35 F / 20x11 +35 R",
      "tire": "275/40-20 / 315/35-20",
      "fit": "Listed (MWD)",
      "conf": "verified",
      "src": [
       {
        "label": "Mr. Wheel Deal guide (Wayback Machine; guide gave no snapshot URL)",
        "url": "https://web.archive.org/"
       }
      ]
     },
     {
      "drop": "Square",
      "truck": "n/s",
      "wheel": "20x9 +35",
      "tire": "275/40-20",
      "fit": "Listed (MWD)",
      "conf": "verified",
      "src": [
       {
        "label": "Mr. Wheel Deal guide (Wayback Machine; guide gave no snapshot URL)",
        "url": "https://web.archive.org/"
       }
      ]
     },
     {
      "drop": "Square (Apex)",
      "truck": "Direct fit",
      "wheel": "19x10 ET20",
      "tire": "285/35-19 (or 275/40-19)",
      "fit": "Direct fit",
      "conf": "verified",
      "src": [
       {
        "label": "Apex 5th-gen Camaro fitment guide",
        "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
       }
      ]
     },
     {
      "drop": "Staggered (Apex)",
      "truck": "Direct fit",
      "wheel": "19x10 ET20 F / 19x11 ET36–43 R",
      "tire": "285/35-19 / 305/30-19",
      "fit": "Direct fit",
      "conf": "verified",
      "src": [
       {
        "label": "Apex 5th-gen Camaro fitment guide",
        "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
       }
      ]
     },
     {
      "drop": "Staggered (Apex VS-5)",
      "truck": "Hub rings",
      "wheel": "19x10 ET25 F / 19x11 ET44 R",
      "tire": "285/35-19 / 305/30-19",
      "fit": "Fits with hub rings",
      "conf": "verified",
      "src": [
       {
        "label": "Apex 5th-gen Camaro fitment guide",
        "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
       }
      ]
     },
     {
      "drop": "Staggered 20 (Apex)",
      "truck": "Hub rings",
      "wheel": "20x9.5 ET22 F / 20x11 ET44 R",
      "tire": "275/35-20 / 305/35-20",
      "fit": "No camber change needed",
      "conf": "verified",
      "src": [
       {
        "label": "Apex 5th-gen Camaro fitment guide",
        "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
       }
      ]
     }
    ],
    "colDrop": "Setup",
    "colVehicle": "Mods"
   },
   {
    "id": "lowered",
    "title": "Lowered",
    "subtitle": "Springs, about 1–1.4 in",
    "conf": [
     "verified",
     "forum"
    ],
    "src": [
     {
      "label": "Mr. Wheel Deal guide (Wayback Machine; guide gave no snapshot URL)",
      "url": "https://web.archive.org/"
     },
     {
      "label": "Apex 5th-gen Camaro fitment guide",
      "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
     }
    ],
    "note": "Keep the drop to about 1–1.25 in on springs (axle boot angles, geometry; Camaro5 snippet, Forum-reported). After lowering, rear camber goes more negative; adjustable toe links come next. Strut-to-knuckle bolts are TTY (+180°); align afterward.",
    "rows": [
     {
      "drop": "Staggered (MWD pick)",
      "truck": "n/s",
      "wheel": "20x9.5 +22 F / 20x11 +35 R",
      "tire": "275/35-20 / 305/35-20",
      "fit": "Recommended staggered setup on springs",
      "conf": "verified",
      "src": [
       {
        "label": "Mr. Wheel Deal guide (Wayback Machine; guide gave no snapshot URL)",
        "url": "https://web.archive.org/"
       }
      ]
     },
     {
      "drop": "Square",
      "truck": "n/s",
      "wheel": "20x9.5 +35",
      "tire": "285/35-20",
      "fit": "Listed (MWD)",
      "conf": "verified",
      "src": [
       {
        "label": "Mr. Wheel Deal guide (Wayback Machine; guide gave no snapshot URL)",
        "url": "https://web.archive.org/"
       }
      ]
     },
     {
      "drop": "Aggressive",
      "truck": "3 mm front spacer on SS (Brembo clearance)",
      "wheel": "20x10 +25 F / 20x11 +35 R",
      "tire": "Slight stretch",
      "fit": "Fitment Industries snippet; page behind WAF",
      "conf": "forum",
      "src": [
       {
        "label": "Fitment Industries (snippet; page behind WAF)",
        "url": "https://www.fitmentindustries.com/"
       }
      ]
     },
     {
      "drop": "ZL1 fitment",
      "truck": "n/s",
      "wheel": "20x10 +23 / 20x11 +43",
      "tire": "285/30 / 305/30",
      "fit": "Expect fender-lip contact over bumps with 305/35 rears; 305/30 is safer",
      "conf": "forum",
      "src": []
     },
     {
      "drop": "Wide (Apex)",
      "truck": "≥−2° front, −1.5° rear camber",
      "wheel": "20x10.5 ET15 F / 20x11.5 ET42 R",
      "tire": "285/30-20 / 305/30-20",
      "fit": "Camber needed for fender clearance",
      "conf": "verified",
      "src": [
       {
        "label": "Apex 5th-gen Camaro fitment guide",
        "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
       }
      ]
     }
    ],
    "colDrop": "Setup",
    "colVehicle": "Mods"
   },
   {
    "id": "coilover",
    "title": "Coilover",
    "subtitle": "Stance on coilovers",
    "conf": "verified",
    "src": [
     {
      "label": "Mr. Wheel Deal guide (Wayback Machine; guide gave no snapshot URL)",
      "url": "https://web.archive.org/"
     }
    ],
    "note": "Low offsets poke; plan on camber and fender work.",
    "rows": [
     {
      "drop": "Popular coilover stance",
      "truck": "Camber and fender work",
      "wheel": "20x10 +15 F / 20x10.5 +15 R",
      "tire": "285/30-20 / 305/30-20",
      "fit": "Low offset pokes",
      "conf": "verified",
      "src": [
       {
        "label": "Mr. Wheel Deal guide (Wayback Machine; guide gave no snapshot URL)",
        "url": "https://web.archive.org/"
       }
      ]
     },
     {
      "drop": "Square (MWD pick)",
      "truck": "n/s",
      "wheel": "20x10 +40",
      "tire": "275/40",
      "fit": "MWD's square coilover pick",
      "conf": "verified",
      "src": [
       {
        "label": "Mr. Wheel Deal guide (Wayback Machine; guide gave no snapshot URL)",
        "url": "https://web.archive.org/"
       }
      ]
     }
    ],
    "colDrop": "Setup",
    "colVehicle": "Mods"
   },
   {
    "id": "track",
    "title": "Track",
    "subtitle": "Wide square setups",
    "conf": "verified",
    "src": [
     {
      "label": "Apex 5th-gen Camaro fitment guide",
      "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
     }
    ],
    "note": "Wider 18s hit the front steering knuckle and need grinding. 19s clear because the inner lip sits above the knuckle (Apex).",
    "rows": [
     {
      "drop": "18x11 square",
      "truck": "−2.75° front via plates; 26 mm front spacers + extended studs + open lugs; grind strut/spindle",
      "wheel": "18x11 ET35",
      "tire": "315/30-18",
      "fit": "Strut clearance needs spacers",
      "conf": "verified",
      "src": [
       {
        "label": "Apex 5th-gen Camaro fitment guide",
        "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
       }
      ]
     },
     {
      "drop": "18x11 F/R split",
      "truck": "−2.75° front; knuckle grinding",
      "wheel": "18x11 ET7 F / 18x11 ET35 R",
      "tire": "315/30-18",
      "fit": "Listed",
      "conf": "verified",
      "src": [
       {
        "label": "Apex 5th-gen Camaro fitment guide",
        "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
       }
      ]
     },
     {
      "drop": "19x11 square",
      "truck": "−2.75° front + 26 mm front spacers",
      "wheel": "19x11 ET36",
      "tire": "305/30-19",
      "fit": "Listed",
      "conf": "verified",
      "src": [
       {
        "label": "Apex 5th-gen Camaro fitment guide",
        "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
       }
      ]
     },
     {
      "drop": "19x11 no spacers",
      "truck": "−2.75° front",
      "wheel": "19x11 ET9/11 F / 19x11 ET35/43 R",
      "tire": "305/30-19",
      "fit": "No spacers (matches Apex Camaro5 showroom thread)",
      "conf": [
       "verified",
       "forum"
      ],
      "src": [
       {
        "label": "Apex 5th-gen Camaro fitment guide",
        "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
       }
      ]
     },
     {
      "drop": "19x11 / 19x12",
      "truck": "−2.75° F, −1.5° R",
      "wheel": "19x11 ET9/11 F / 19x12 ET41 R",
      "tire": "305/30 / 325/30-19",
      "fit": "Some cars need a 3 mm rear spacer or rear control arm clearancing",
      "conf": "verified",
      "src": [
       {
        "label": "Apex 5th-gen Camaro fitment guide",
        "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
       }
      ]
     }
    ],
    "colDrop": "Setup",
    "colVehicle": "Mods"
   }
  ],
  "extraFacts": {
   "title": "Brake clearance",
   "items": [
    {
     "label": "V6 base",
     "text": "18 in factory (16–17 in possible with the right wheels). Only V6 brakes allow 16 in wheels.",
     "conf": "forum",
     "src": []
    },
    {
     "label": "SS Brembo 4-piston (14.0 in F / 14.4 in R), also 1LE",
     "text": "Factory minimum 20 in. 18 in works only with specific wheels: enough barrel depth, a spoke/face profile that clears the caliper face, often +0.5 in more offset. The rear (14.4 in rotor) is the tighter corner. V6 18s don't fit. A handful of 17s (Weld RT-S, Bogart, custom CCW) clear, sometimes after LCA grinding. Removing the pad \"roller skates\" (anti-rattle tabs) gains clearance. Some aftermarket wheels need a 3 mm front spacer (Fitment Industries).",
     "conf": "forum",
     "disputed": true,
     "src": [
      {
       "label": "Camaro5 thread 6249",
       "url": "https://www.camaro5.com/forums/showthread.php?t=6249"
      },
      {
       "label": "Camaro5 thread 195407",
       "url": "https://www.camaro5.com/forums/showthread.php?t=195407"
      },
      {
       "label": "Camaro5 thread 327081",
       "url": "https://www.camaro5.com/forums/showthread.php?t=327081"
      },
      {
       "label": "Fitment Industries (snippet; page behind WAF)",
       "url": "https://www.fitmentindustries.com/"
      }
     ]
    },
    {
     "label": "ZL1 6-piston (14.6 in 2-piece)",
     "text": "Factory 20 in. Apex says its 18, 19 and 20 in wheels all clear ZL1, SS, base, Z/28 CCB and CTS-V 6-piston brakes. Applies only to Apex wheels.",
     "conf": "verified",
     "src": [
      {
       "label": "Apex 5th-gen Camaro fitment guide",
       "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
      }
     ]
    },
    {
     "label": "Z/28 carbon ceramic (15.5 in F / 15.3 in R)",
     "text": "Factory 19 in. Apex: Z/28 rear brakes need a 12 mm spacer with the 19x11 ET43 ARC-8.",
     "conf": "verified",
     "src": [
      {
       "label": "Apex 5th-gen Camaro fitment guide",
       "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
      }
     ]
    },
    {
     "label": "Aftermarket kits",
     "text": "Apex wheels clear the Essex/AP 372 mm Radi-CAL kit and the Brembo GT 6-piston 380 mm kit.",
     "conf": "verified",
     "src": [
      {
       "label": "Apex 5th-gen Camaro fitment guide",
       "url": "https://apexwheels.com/fitment-guides/chevrolet/camaro/chevrolet-5th-gen-camaro-wheel-and-tire-fitment-guide"
      }
     ]
    },
    {
     "label": "Rule of thumb",
     "text": "14 in rotor needs an 18 in wheel; 15 in needs 19; 16 in needs 20.",
     "conf": "forum",
     "src": []
    },
    {
     "label": "Apex \"SS 1LE Brembo 6 piston\"",
     "text": "The 2013–15 1LE used red 4-piston SS Brembos (2015 brochure). The 6-piston 1LE is the 6th gen.",
     "conf": "verified",
     "disputed": true,
     "src": [
      {
       "label": "2015 Camaro brochure",
       "url": "https://cdn.dealereprocess.org/cdn/brochures/chevrolet/2015-camaro.pdf"
      }
     ]
    }
   ]
  },
  "tpms": [
   {
    "label": "TPMS",
    "text": "Not covered in the source guide.",
    "conf": "unconfirmed",
    "src": []
   }
  ]
 },
 "problems": [
  {
   "id": "chain-stretch",
   "title": "3.6 timing-chain stretch",
   "years": "2010–11 LLT and 2012 LFX (listed in the bulletin)",
   "symptoms": "P0008, P0009, P0016–P0019",
   "cause": "Chain stretch; long oil-life-monitor intervals blamed by GM guidance and owners",
   "fix": "GM 12-06-01-009: chain kit 12651450. Don't replace the sprockets, actuators or guides for stretch alone. Camaro is not on the 10-year/120k special coverage (11340C). Short oil-change intervals are the main prevention.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "GM 12-06-01-009",
     "url": "https://static.nhtsa.gov/odi/tsbs/2012/MC-10113848-9999.pdf"
    },
    {
     "label": "NHTSA MC-10245780 (guide gave no full path; links to NHTSA)",
     "url": "https://www.nhtsa.gov/"
    }
   ],
   "guide": "chain",
   "tips": [
    {
     "text": "If two or more cam correlation codes (P0008, P0009, P0016 to P0019) return after a proper chain job, GM says check whether the crankshaft reluctor ring has moved; on some engines you can see it with a borescope through the crank sensor hole. If it moved, the crankshaft must be replaced.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2017/MC-10137734-9999.pdf",
     "source_name": "GM PIP3423N: DTC P0016 P0017 P0018 P0019 P0008 P0009 (3.6 LLT/LFX)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The extended 3.6 timing chain warranty (TSB 11340) does not list the Camaro, so dealers cannot claim it; the realistic route is a goodwill repair at warranty rates. A dealer tech noted the cars with regular changes and the correct oil rarely need chains; quotes ran about $1,100 to $1,200.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=424523",
     "source_name": "Camaro5.com: 2010 Camaro 3.6L Timing Chain Inquiry",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Change the 3.6 oil earlier than the oil life monitor says; GM chain-stretch guidance and owners both tie stretch to long oil intervals.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2012/MC-10113848-9999.pdf",
     "source_name": "GM 12-06-01-009",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "heater-gurgle",
   "title": "Dash hiss/gurgle, weak heat",
   "years": "2010–15, all",
   "symptoms": "Hiss or gurgle behind the dash; weak heat",
   "cause": "Heater-core inlet screen",
   "fix": "PIC5984B: clean or replace the heater-core inlet screen, flush and bleed. Don't replace the core for noise alone (that job requires pulling the windshield).",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "GM PIC5984B",
     "url": "https://static.nhtsa.gov/odi/tsbs/2016/MC-10113944-9999.pdf"
    }
   ],
   "tips": [
    {
     "text": "For a dash hiss or gurgle with weak idle heat, pull the heater core inlet hose and check the inlet screen for debris; clean or replace it, flush the cooling system, and backflush the core if it was full. GM says do not replace the heater core for noise, since that job means removing the windshield.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2016/MC-10113944-9999.pdf",
     "source_name": "GM PIC5984B: Hiss or Gurgle Noise From Dash, Reduced Heater Performance (2010-2015 Camaro)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "oil-cooler-fitting",
   "title": "Coolant leak at the oil-cooler fitting",
   "years": "2010–12 SS and ZL1",
   "symptoms": "Coolant leak, left side of block",
   "cause": "Fitting cross-threaded at the factory",
   "fix": "PIP4735C: chase the threads or tap M28x1.25.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "GM PIP4735C",
     "url": "https://static.nhtsa.gov/odi/tsbs/2012/SB-10045062-6854.pdf"
    }
   ],
   "tips": [
    {
     "text": "The O-ring that seals the hose is part of the block fitting, so replace the whole fitting (GM 22912546, about $29). You need a 34 mm socket on a 12 in extension fed in from the front wheel side, expect to lose about a gallon of coolant, and push or gently tap the hose in until the spring clip snaps behind the flange.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=488429",
     "source_name": "Camaro5.com: Coolant Leak at Fitting on Engine Block",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The fitting is aluminum and can gall the block threads on removal, so do it with the engine stone cold. After refilling, cycle the engine on and off a few times to purge air; the radiator can look full while the engine is nearly empty and overheat quickly.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=488429",
     "source_name": "Camaro5.com: Coolant Leak at Fitting on Engine Block",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "v6-porosity",
   "title": "Oil in coolant (block porosity)",
   "years": "2010–15 V6",
   "symptoms": "Oil in coolant",
   "cause": "Block porosity",
   "fix": "PIP5257A: test the oil cooler first. If that's fine, the remedy is engine replacement.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "GM PIP5257A",
     "url": "https://static.nhtsa.gov/odi/tsbs/2015/MC-10115003-9999.pdf"
    }
   ]
  },
  {
   "id": "zl1-moan",
   "title": "ZL1 rear diff moan on cold turns",
   "years": "2012–15 ZL1",
   "symptoms": "Moan on cold turns",
   "cause": "Diff fluid",
   "fix": "PIP5097A: triple drain-and-fill with Dexron LS 75W-90 (88862624) plus a figure-8 drive procedure. Do this before replacing parts.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "GM PIP5097A",
     "url": "https://static.nhtsa.gov/odi/tsbs/2015/MC-10114562-9999.pdf"
    }
   ],
   "tips": [
    {
     "text": "GM's fix for the ZL1 cold-turn moan is three full drain and refills with Dexron LS 75W-90 (88862624), driving 5 locked circles each way and 4 figure eights at 5 to 10 mph between each fill, with a warm-up drive first. Normal service is every 45,000 miles, or 15,000 miles for severe use.",
     "source_url": "https://static.oemdtc.com/TSB/MC-10114562-9999.pdf",
     "source_name": "GM PIP5097A: ZL1 Rear Differential Moan Noise On Turns (2012-2015 Camaro ZL1)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "lsa-isolator",
   "title": "LSA supercharger isolator rattle / bearing damage",
   "years": "2012–13 ZL1 (also 2009–13 CTS-V)",
   "symptoms": "Idle rattle, then squeal; can eventually seize the engine",
   "cause": "Isolator rattle contaminates bearing grease",
   "fix": "GM Special Coverage 13313 (May 2014): supercharger replaced free for 10 yr / 120k mi from in-service date, regardless of ownership. That window has ended (about 2022–2024) for nearly all cars; check eligibility by VIN. Replacement unit (reportedly P/N 19303635, unconfirmed) has a solid isolator, which is also the aftermarket fix. 2014–15 ZL1s aren't covered.",
   "parts": [],
   "conf": [
    "verified",
    "unconfirmed"
   ],
   "src": [
    {
     "label": "GM SC 13313",
     "url": "https://static.nhtsa.gov/odi/tsbs/2014/SB-10092909-0335.pdf"
    }
   ],
   "tips": [
    {
     "text": "Owners replace the spring isolator with a solid one from Lingenfelter or Jannetty Racing and warn that cheap eBay and Amazon units are junk. One owner says the rattle only wears a cosmetic groove in the input shaft; another says the shavings can harm the engine, so get it fixed promptly.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=620459",
     "source_name": "Camaro5.com: 2012 ZL1 Supercharger Rattle",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "afm-lifter",
   "title": "L99 AFM lifter failure",
   "years": "SS automatic (L99)",
   "symptoms": "Tick, misfire, collapsed lifter, wiped cam",
   "cause": "AFM lifters",
   "fix": "AFM/DOD delete: non-AFM lifters, guides, valley cover, and a tune that disables AFM. Kits $539.97 (269 Motorsports) to $630.98+ (AMS Racing).",
   "parts": [
    "afm-269"
   ],
   "conf": [
    "forum",
    "verified"
   ],
   "src": [
    {
     "label": "Camaro5 thread 597885",
     "url": "https://www.camaro5.com/forums/showthread.php?t=597885"
    }
   ],
   "guide": "afm"
  },
  {
   "id": "wheel-hop",
   "title": "Wheel hop on hard launches",
   "years": "SS, ZL1 (especially modified)",
   "symptoms": "Hop on launch",
   "cause": "Soft cradle/trailing-arm bushings",
   "fix": "Order of fixes: cradle bushings, then trailing arms plus outer bushings, then toe rods. Diff bushings last (they add NVH). Video: D3RPZILLA BMR CB008 (the BK063 videos are 6th gen).",
   "parts": [
    "bmr-cb010"
   ],
   "conf": "forum",
   "src": [
    {
     "label": "Camaro5 thread 316648",
     "url": "https://www.camaro5.com/forums/showthread.php?t=316648"
    },
    {
     "label": "Camaro5 thread 440887",
     "url": "https://www.camaro5.com/forums/showthread.php?t=440887"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=2aQG6ckX_iA"
    }
   ],
   "tips": [
    {
     "text": "Trailing arms alone barely helped one owner; replace the trailing arm outer bushings and the rear cradle bushings first, which usually cures hop, then toe rods. Apex and BMR both say save the diff bushings for last, because harder diff bushings bring a lot more noise and vibration.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=440887",
     "source_name": "Camaro5.com: Looking to stop wheel hop",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Wheel hop fix order: cradle bushings plus trailing arms with outer bushings first; do diff bushings last because they add the most noise and vibration.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=316648",
     "source_name": "Camaro5 thread 316648",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "clunk",
   "title": "Off-throttle driveline clunk/bounce",
   "years": "All, worse on 1LE/track cars",
   "symptoms": "Clunk or bounce off-throttle",
   "cause": "Usually 2-piece driveshaft lash; worn toe links, trailing arms and hubs add to it",
   "fix": "A single-piece driveshaft cures part of it.",
   "parts": [
    "dss-610204",
    "dss-610222"
   ],
   "conf": "forum",
   "src": [
    {
     "label": "Camaro5 thread 617953",
     "url": "https://www.camaro5.com/forums/showthread.php?t=617953"
    }
   ]
  },
  {
   "id": "halfshaft",
   "title": "Half-shaft/CV failures on road course",
   "years": "SS, track use",
   "symptoms": "Half-shaft or CV failure",
   "cause": "Track loads",
   "fix": "Reported on Camaro5 (snippet only; thread timed out). The 1LE got upgraded half-shafts from the factory.",
   "parts": [],
   "conf": [
    "unconfirmed",
    "verified"
   ],
   "src": [
    {
     "label": "Camaro5 thread 557526",
     "url": "https://www.camaro5.com/forums/showthread.php?t=557526"
    }
   ],
   "tips": [
    {
     "text": "A 2010 SS owner cooked four sets of CVs at VIR. Owners say keep rear ride height no lower than about 26 in (rim lip to fender) on 20s or 25.5 in on 19s, roughly 1 to 1.25 in under stock, because steeper axle angles overheat the grease; Z/28 shafts use a different boot and high-temp grease.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=557526",
     "source_name": "Camaro5.com: Axle/CV Failures on Road Course",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "ss-leaks",
   "title": "Valve cover / oil-pan leaks, loose oil-cooler bolts; third brake light",
   "years": "SS (brake light: 2010–15 SS coupe)",
   "symptoms": "Driver-side valve cover leak, oil-pan gasket leak, loose oil-cooler bolts; LED third brake light intermittent",
   "cause": "Owner reports",
   "fix": "Owner reports only.",
   "parts": [],
   "conf": "forum",
   "src": [
    {
     "label": "Camaro5 thread 337690",
     "url": "https://www.camaro5.com/forums/showthread.php?t=337690"
    },
    {
     "label": "Z28.com",
     "url": "https://www.z28.com/"
    }
   ],
   "tips": [
    {
     "text": "Water pooling by the trunk battery is usually a disconnected sunroof drain hose, the third brake light wiring loom pinched into the trunk seal, or a poorly resealed spoiler. Fold the rear seat down and have someone hose the car while you watch from inside; this owner's leak was the spoiler after a repaint.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=525331",
     "source_name": "Camaro5.com: Water in trunk under battery!",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "z28-ccb",
   "title": "Z/28 carbon-ceramic green fade and noise",
   "years": "Z/28",
   "symptoms": "Green fade, grind/growl noise",
   "cause": "Normal per GM",
   "fix": "Normal per GM. Rotors can't be resurfaced. Diff fluid every 6 track hours; PF64 filter only on the dry-sump LS7.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "GM PI1200B Z/28",
     "url": "https://static.nhtsa.gov/odi/tsbs/2014/MC-10138689-9999.pdf"
    }
   ],
   "tips": [
    {
     "text": "GM says slow-stop grind or growl from the Z/28 carbon-ceramic brakes is normal, and \"green\" fade (a longer pedal after hard street stops) lasts until the brakes have seen track temperatures. Use only the Z/28 burnishing procedure, the street one first and then the track one on a real track; the ZL1/1LE procedure can damage them.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2015/MC-10114401-9999.pdf",
     "source_name": "GM PIC5981A: Normal Characteristic, Brake Noise During Slow Stops (2014-2015 Camaro Z/28)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "6l80-shudder",
   "title": "6L80 low-speed shudder in V4 (AFM) mode",
   "years": "2011 Camaro SS auto (L99 + 6L80 MYC)",
   "symptoms": "Shudder at low speed in V4 mode",
   "cause": "Broken TCC regulator valve spring (353) drops TCC slip to a constant 0 rpm (normal 30–50 rpm)",
   "fix": "PI1413 (Feb 2015): new lower valve body. The 16-NA-175 and 18-NA-355 fluid-flush bulletins cover 2016+ Camaros with 8L45/8L90 only and don't apply.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "GM PI1413",
     "url": "https://static.nhtsa.gov/odi/tsbs/2015/MC-10113542-9999.pdf"
    },
    {
     "label": "GM 16-NA-175",
     "url": "https://static.nhtsa.gov/odi/tsbs/2017/MC-10139218-9999.pdf"
    },
    {
     "label": "GM 18-NA-355",
     "url": "https://static.nhtsa.gov/odi/tsbs/2019/MC-10161881-9999.pdf"
    }
   ]
  },
  {
   "id": "recalls",
   "title": "Recalls",
   "years": "2010–2015",
   "symptoms": "Varies",
   "cause": "Varies",
   "fix": "09V155: 2010 V8 positive battery cable can rub the starter housing (fire risk). 13V023: 2012 driver airbag shorting bar. 13V463: 2013–14 airbag warning label missing. 14V300: 2012 driver airbag inflator. 14V346: 2010–14 knee can hit the flip key and switch off the ignition (new key/fob). 14V409: 2014 under-torqued steering intermediate-shaft fasteners. 14V447: 2011–12 power seat harness. 15V666: 2015 seat-mounted side airbag. 19E064: 2010–15 un-remedied replacement flip keys. 23V516: 2013 driver airbag inflator can rupture. Check your VIN.",
   "parts": [],
   "conf": "verified",
   "src": [
    {
     "label": "NHTSA recalls API (2010)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=chevrolet&model=camaro&modelYear=2010"
    },
    {
     "label": "NHTSA recalls API (2012)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=chevrolet&model=camaro&modelYear=2012"
    },
    {
     "label": "NHTSA recalls API (2013)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=chevrolet&model=camaro&modelYear=2013"
    },
    {
     "label": "NHTSA recalls API (2014)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=chevrolet&model=camaro&modelYear=2014"
    },
    {
     "label": "NHTSA recalls API (2015)",
     "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=chevrolet&model=camaro&modelYear=2015"
    }
   ]
  }
 ],
 "guides": [
  {
   "id": "lugs",
   "type": "diy",
   "title": "Lug nuts: check the color first",
   "summary": "Silver 140 lb-ft, blue 110 lb-ft.",
   "conf": "verified",
   "src": [
    {
     "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
    },
    {
     "label": "2011 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2011_chevrolet_camaro.pdf"
    },
    {
     "label": "2012 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2012_chevrolet_camaro.pdf"
    },
    {
     "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
    },
    {
     "label": "2015 Camaro owner's manual (source link dead, checked 2026-10-20)",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/chevrolet/2015-camaro.pdf"
    },
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    }
   ],
   "steps": [
    {
     "text": "Look at the cone seat. Silver-tint (2010–11 and some 2012): 190 N·m / 140 lb-ft."
    },
    {
     "text": "Blue-tint (2012 on; all 2014–15): 150 N·m / 110 lb-ft (2015 GM SI: 111 lb-ft)."
    },
    {
     "text": "Mixed-history cars can have either; torque each nut to its color."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Silver-tint nut",
     "Blue-tint nut"
    ],
    "rows": [
     [
      "Lug nut",
      "190 N·m / 140 lb-ft",
      "150 N·m / 110 lb-ft"
     ]
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "Check the lug nut color before torquing: silver nuts take 140 lb-ft, blue nuts 110 lb-ft. It is the most common torque mistake on these cars.",
     "source_url": "https://carmanual.org/OwnersManual/chevrolet/2012_chevrolet_camaro.pdf",
     "source_name": "2012 Camaro owner's manual (GM PDF, carmanual.org copy)",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "brakes",
   "type": "diy",
   "title": "Brembo pads/rotors and hubs",
   "summary": "Caliper bracket bolts are torque-to-yield.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    },
    {
     "label": "GM SI mirror 2009–13 (diagnostdata)",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=12qZUYBFULk"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=EvHfx57u5S0"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=Csy7w1nVvI8"
    }
   ],
   "steps": [
    {
     "text": "\"+X°\" means torque-to-yield: use new bolts."
    },
    {
     "text": "chevy-specs.com lists 44 lb-ft + 90° for the front bracket; superseded by the GM SI figure.",
     "disputed": true
    },
    {
     "text": "Front hub bolts changed between the 2010–13 mirror and the 2015 SI; use your year.",
     "disputed": true
    },
    {
     "text": "Videos: Logan Gregory; Mac Pettit ZL1; Mr. LSX ZL1.",
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
      "Brembo caliper-to-knuckle bolts, front and rear (JL9 SS LS3/L99, J56/J57)",
      "40 N·m (30 lb-ft) + 90° (2015 SI)"
     ],
     [
      "V6 (JL9 LFX) front caliper bracket; rear bracket (LFX, L99)",
      "40 N·m (30 lb-ft) + 90° (2015 SI)"
     ],
     [
      "Caliper guide-pin bolts",
      "V6 front and LFX/L99 rear 27 N·m (20 lb-ft); J56/J57 front 33 N·m (24 lb-ft)"
     ],
     [
      "Brake hose (banjo) bolt",
      "40 N·m / 30 lb-ft"
     ],
     [
      "Bleeder",
      "17–20 N·m (13–15 lb-ft)"
     ],
     [
      "Rotor retaining bolt / brake shield",
      "10 N·m (89 lb-in) / 9 N·m (80 lb-in)"
     ],
     [
      "Front hub/bearing bolts",
      "2010–13: 108 N·m / 79 lb-ft. 2015: LFX 115 N·m / 85 lb-ft; V8 100 N·m + 28°"
     ],
     [
      "Rear hub/bearing bolts",
      "115 N·m / 85 lb-ft"
     ],
     [
      "Rear half-shaft nut (new)",
      "270 N·m / 199 lb-ft"
     ]
    ],
    "disputedRows": [
     6
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "On the base front brakes the 18 mm caliper bracket bolts are torque-to-yield and the 14 mm guide pin bolts are one-time use, so have new ones before you start. Torque the bracket bolts to 44 ft-lb plus 90 degrees and the guide pin bolts to 20 ft-lb, and grease the hub face to stop the rotor rusting on.",
     "source_url": "https://www.1aauto.com/how-to-replace-front-brake-pads-and-rotors-v6-3-6l-2010-14-chevy-camaro/video/46384",
     "source_name": "1A Auto (video): How to Replace Front Brake Pads and Rotors V6 3.6L 2010-14 Chevy Camaro",
     "confidence": "video",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Running 18s over SS Brembos: shave the pad \"roller skates\", choose a deep-barrel wheel, and test-fit a rear wheel first.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=6249",
     "source_name": "Camaro5 thread 6249",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "front-susp",
   "type": "diy",
   "title": "Front suspension and lowering springs",
   "summary": "Strut-to-knuckle bolts are TTY; align afterward.",
   "conf": [
    "verified-secondary",
    "video"
   ],
   "src": [
    {
     "label": "GM SI mirror 2009–13 (diagnostdata)",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/"
    },
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=51R8-6KN1A8"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=2JKblUwOW48"
    }
   ],
   "steps": [
    {
     "text": "Strut-to-knuckle bolts are TTY (+180°): use new bolts."
    },
    {
     "text": "Keep the drop to about 1–1.25 in on springs.",
     "conf": "forum"
    },
    {
     "text": "Get an alignment afterward; adjustable rear toe links come next."
    },
    {
     "text": "Videos: Phastek Performance (two parts).",
     "conf": "video"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "2010–13 (diagnostdata)",
     "2015 (GM SI)"
    ],
    "rows": [
     [
      "Strut-to-knuckle bolts",
      "80 N·m (59 lb-ft) + 180°",
      "same"
     ],
     [
      "Strut top nut",
      "70 N·m / 52 lb-ft",
      "same"
     ],
     [
      "Front LCA bolt at frame (rear arm)",
      "50 N·m (37 lb-ft) + 120°",
      "same"
     ],
     [
      "Front LCA adjuster nut / LCA-to-frame nut",
      "50 N·m (37 lb-ft) + 150°",
      "same"
     ],
     [
      "LCA nuts at knuckle",
      "40 N·m (30 lb-ft) + 90°",
      "same"
     ],
     [
      "Sway-bar end-link nuts",
      "50 N·m / 36 lb-ft",
      "70 N·m / 52 lb-ft"
     ],
     [
      "Sway-bar clamp nuts (new)",
      "17 N·m / 13 lb-ft",
      "43 N·m / 32 lb-ft"
     ],
     [
      "Inner tie-rod nut",
      "75 N·m / 55 lb-ft",
      "same"
     ]
    ],
    "disputedRows": [
     5,
     6
    ]
   },
   "parts": [
    "spring-eibach-38144",
    "spring-bmr-sp025",
    "spring-bmr-sp077"
   ],
   "tips": [
    {
     "text": "If the upper strut nut spins, hold the shaft with a 7 mm Allen key and locking pliers while turning a 24 mm wrench. Torque the two lower strut bolts to 59 ft-lb plus 180 degrees, and tighten the top nut to 52 ft-lb with the car on the ground.",
     "source_url": "https://www.1aauto.com/how-to-replace-front-strut-and-spring-assembly-2010-12-chevy-camaro/video/44595",
     "source_name": "1A Auto (video): How to Replace Front Strut and Spring Assembly 2010-12 Chevy Camaro",
     "confidence": "video",
     "date_checked": "2026-10-11"
    },
    {
     "text": "To pop the ball joint without a pickle fork, back the nut out flush with the stud end and strike it. Tighten the ball joint nut to 30 ft-lb plus 90 degrees, and torque the frame-end bolt to 37 ft-lb plus 120 degrees only with a jack raising the suspension to ride height.",
     "source_url": "https://www.1aauto.com/how-to-replace-front-lower-forward-control-arm-2010-13-chevy-camaro/video/45369",
     "source_name": "1A Auto (video): How to Replace Front Lower Forward Control Arm 2010-13 Chevy Camaro",
     "confidence": "video",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "rear-susp",
   "type": "diy",
   "title": "Rear suspension",
   "summary": "2010–13 and 2015 tables side by side; 2013–14 unconfirmed where they differ.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "GM SI mirror 2009–13 (diagnostdata)",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/"
    },
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    }
   ],
   "steps": [
    {
     "text": "100 N·m flat is the trailing arm frame bolt; 40 N·m + 120° is the knuckle bolts. Replace TTY nuts at the knuckle (Chevy SS Forum FSM quote)."
    },
    {
     "text": "Rear sway clamp: the 2010–13 table says \"lb in\", a typo for 16 lb-ft."
    },
    {
     "text": "Chevy SS forum quotes UCA-to-knuckle as 44 lb-ft + 120°; both Camaro tables say + 90°. Use the Camaro figure.",
     "disputed": true
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "2010–13 (diagnostdata)",
     "2015 (GM SI)"
    ],
    "rows": [
     [
      "Toe link bolt to knuckle",
      "140 N·m / 103 lb-ft",
      "175 N·m / 129 lb-ft"
     ],
     [
      "Toe link adjuster nut / LCA adjuster nut",
      "115 N·m / 85 lb-ft",
      "same"
     ],
     [
      "LCA-to-knuckle bolt",
      "40 N·m (30 lb-ft) + 120°",
      "same"
     ],
     [
      "Lower shock nut",
      "80 N·m (59 lb-ft) + 120°",
      "same"
     ],
     [
      "Upper shock nut / bolt",
      "45 N·m (33 lb-ft) / 58 N·m (43 lb-ft)",
      "same"
     ],
     [
      "Trailing arm to frame",
      "100 N·m / 74 lb-ft",
      "same"
     ],
     [
      "Trailing arm to knuckle",
      "40 N·m (30 lb-ft) + 120°",
      "same"
     ],
     [
      "UCA to bushing bolt",
      "160 N·m / 118 lb-ft",
      "same"
     ],
     [
      "UCA to knuckle",
      "60 N·m (44 lb-ft) + 90°",
      "same"
     ],
     [
      "UCA to frame",
      "80 N·m (59 lb-ft) + 120°",
      "same"
     ],
     [
      "UCA bushing-to-frame bolt",
      "50 N·m (37 lb-ft) + 120°",
      "175 N·m / 129 lb-ft"
     ],
     [
      "Rear sway-bar clamp bolts",
      "22 N·m (16 lb-ft)",
      "58 N·m / 43 lb-ft"
     ],
     [
      "Rear sway-bar link nuts",
      "49 N·m / 36 lb-ft",
      "49 N·m without FE4/FE5/FE6; 26 N·m / 19 lb-ft with FE4/FE5/FE6"
     ],
     [
      "Rear hub bolts",
      "115 N·m / 85 lb-ft",
      "same"
     ]
    ],
    "disputedRows": [
     0,
     10,
     11
    ]
   },
   "parts": [
    "bmr-cb010"
   ],
   "tips": [
    {
     "text": "Jack under the lower control arm to simulate ride height before torquing the lower shock bolt (59 ft-lb plus 120 degrees) and the control arm-to-knuckle bolt (30 ft-lb plus 120 degrees). The four upper mount bolts take 43 ft-lb and do not need the suspension loaded.",
     "source_url": "https://www.1aauto.com/how-to-replace-rear-strut-assembly-2010-15-chevy-camaro/video/48917",
     "source_name": "1A Auto (video): How to Replace Rear Strut Assembly 2010-15 Chevy Camaro",
     "confidence": "video",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "diff",
   "type": "diy",
   "title": "Rear diff fluid and driveline",
   "summary": "Non-ZL1 1.0 qt plus friction modifier; ZL1 2.1 qt.",
   "conf": [
    "verified-secondary",
    "verified"
   ],
   "src": [
    {
     "label": "GM SI mirror 2009–13 (diagnostdata)",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/"
    },
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    },
    {
     "label": "2015 Camaro owner's manual (source link dead, checked 2026-10-20)",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/chevrolet/2015-camaro.pdf"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=5obcRSVYsSo"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=mMV72UcsXe0"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=V5Lb8GMd6QU"
    }
   ],
   "steps": [
    {
     "text": "Fluid: 1.0 qt (0.9 L) plus friction modifier (2.5 oz 2010/2012, 3.3 oz 2014–15); ZL1 2.1 qt (2.0 L).",
     "conf": "verified"
    },
    {
     "text": "ZL1 moan: PIP5097A triple drain-and-fill with Dexron LS 75W-90 (88862624).",
     "conf": "verified"
    },
    {
     "text": "Videos: Graeme O'Leary; DKGarage; ScribnerMechanics V6.",
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
      "Diff cover bolts",
      "55 N·m / 41 lb-ft"
     ],
     [
      "Diff drain / fill plugs",
      "33 N·m / 24 lb-ft"
     ],
     [
      "Diff support (cradle) nuts",
      "80 N·m / 59 lb-ft"
     ],
     [
      "Ring-gear bolts",
      "120 N·m / 89 lb-ft (195/218 mm); ZL1 250 mm 295 N·m / 217 lb-ft"
     ],
     [
      "Side-bearing cap bolts",
      "195 mm 63 N·m (46 lb-ft); 218 mm 105 N·m (77 lb-ft); 250 mm 166 N·m (122 lb-ft)"
     ],
     [
      "Diff case bolts (250 mm) / oil-cooler adapter fittings",
      "74 N·m (55 lb-ft) / 22 N·m (16 lb-ft)"
     ],
     [
      "Pinion shaft lock bolt",
      "25 N·m / 18 lb-ft"
     ],
     [
      "Driveshaft-to-diff flange bolts",
      "115 N·m / 85 lb-ft"
     ],
     [
      "Driveshaft coupling nuts",
      "91 N·m / 67 lb-ft"
     ],
     [
      "Driveshaft center bearing",
      "22 N·m / 16 lb-ft"
     ],
     [
      "TR6060 / AY6 drain/fill plugs",
      "27 N·m / 20 lb-ft; 37 N·m / 27 lb-ft"
     ],
     [
      "6L50/6L80 pan bolts",
      "9 N·m / 80 lb-in (in sequence)"
     ],
     [
      "6L80 converter-to-flexplate",
      "63 N·m / 46 lb-ft"
     ],
     [
      "Pressure plate bolts (manual)",
      "30 N·m (22 lb-ft) + 20°"
     ]
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "The fill and drain plugs take a bare 3/8 in ratchet drive with no socket. The diff holds only about 0.95 qt of gear oil plus 3 oz of limited-slip additive, and both plugs go back at 24 ft-lb; check level by feeling for fluid at the bottom of the fill hole.",
     "source_url": "https://www.1aauto.com/how-to-check-differential-2010-15-chevy-camaro/video/47317",
     "source_name": "1A Auto (video): How to Check Differential 2010-15 Chevy Camaro",
     "confidence": "video",
     "date_checked": "2026-10-11"
    },
    {
     "text": "GM later raised the friction modifier to 3 oz per fill. If your gear oil label says it already contains the limited-slip additive (Royal Purple Max Gear, for example), owners add nothing extra.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=442986",
     "source_name": "Camaro5.com: Help with Differential Fluid?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Z/28: change the diff fluid every 6 track hours, and use only the PF64 oil filter on the dry-sump LS7.",
     "source_url": "https://static.nhtsa.gov/odi/tsbs/2014/MC-10138689-9999.pdf",
     "source_name": "GM PI1200B Z/28",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "atf",
   "type": "diy",
   "title": "Automatic fluid and filter",
   "summary": "6.7 qt pan-drop service.",
   "conf": [
    "verified",
    "video"
   ],
   "src": [
    {
     "label": "2015 Camaro owner's manual (source link dead, checked 2026-10-20)",
     "url": "https://cdn.dealereprocess.org/cdn/servicemanuals/chevrolet/2015-camaro.pdf"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=Ftn-H7I34Bo"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=DwH7uZoCR6k"
    }
   ],
   "steps": [
    {
     "text": "6.7 qt (6.3 L) pan drop plus filter, 6L50 and 6L80. Pan bolts 9 N·m / 80 lb-in in sequence."
    },
    {
     "text": "Videos: ScribnerMechanics 6L50; Codemans auto 6L80.",
     "conf": "video"
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "engine",
   "type": "diy",
   "title": "Engine torque: 6.2 and 3.6",
   "summary": "Includes spark plugs (V8 gap 0.040 in).",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "GM SI mirror 2009–13 (diagnostdata)",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/"
    },
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=ENAyRy1zT-Y"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=jp7UmbY7Oss"
    }
   ],
   "steps": [
    {
     "text": "6.2 spark plugs: 15 N·m (2009–13 mirror) vs 20 N·m (2015 SI).",
     "disputed": true
    },
    {
     "text": "Videos: GV Aspirated \"2010-2015 5th Gen Camaro Spark Plug Replacement!\"; Donating Horsepower.",
     "conf": "video"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "6.2 (LS3/L99/LSA)",
     "3.6 (LLT)"
    ],
    "rows": [
     [
      "Spark plugs",
      "15 N·m / 11 lb-ft",
      "18 N·m / 13 lb-ft"
     ],
     [
      "Oil drain plug",
      "25 N·m / 18 lb-ft",
      "25 N·m / 18 lb-ft"
     ],
     [
      "Oil filter",
      "30 N·m / 22 lb-ft (spin-on)",
      "Filter cap 25 N·m / 18 lb-ft"
     ],
     [
      "Head bolts",
      "M11: 30 N·m, +90°, +70°. M8: 30 N·m / 22 lb-ft",
      "M11: 30 N·m + 150°. M8: 15 N·m + 75°"
     ],
     [
      "Balancer bolt",
      "150 N·m, loosen 360°, 50 N·m, then +125° (flanged) or +200° (rotating-washer)",
      "n/s"
     ],
     [
      "Cam sprocket bolt",
      "75 N·m + 50° (VVT actuator valve 65 N·m + 90°)",
      "58 N·m / 43 lb-ft"
     ],
     [
      "Rocker arm bolts",
      "30 N·m / 22 lb-ft",
      "n/s"
     ],
     [
      "Valve cover bolts",
      "12 N·m / 106 lb-in",
      "10 N·m / 89 lb-in"
     ],
     [
      "Intake manifold",
      "5 N·m then 10 N·m",
      "25 N·m / 18 lb-ft"
     ],
     [
      "Exhaust manifold",
      "15 N·m then 20 N·m",
      "50 N·m (nut)"
     ],
     [
      "Flywheel",
      "20, 50, then 100 N·m",
      "67 N·m / 49 lb-ft"
     ],
     [
      "Lifter guide bolts",
      "12 N·m / 106 lb-in",
      "n/s"
     ],
     [
      "Water pump",
      "15 N·m then 30 N·m",
      "n/s"
     ]
    ],
    "disputedRows": [
     0
    ]
   },
   "parts": []
  },
  {
   "id": "engine-lsa-ls7",
   "type": "diy",
   "title": "LSA (ZL1) and LS7 (Z/28) differences",
   "summary": "2015 GM SI Section 79.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2015 GM SI mirror (lemon-manuals)",
     "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20Z%2F28/"
    },
    {
     "label": "GM PI1200B Z/28",
     "url": "https://static.nhtsa.gov/odi/tsbs/2014/MC-10138689-9999.pdf"
    }
   ],
   "steps": [
    {
     "text": "Oil (2015 SI): 6.2 8.0 qt with filter / 7.5 qt without; LS7 10.0 / 9.5 qt. LS7: PF64 filter only."
    },
    {
     "text": "LSA/LS7 spark plugs 20 N·m (the 2009–13 mirror gives 15 N·m for the 6.2).",
     "disputed": true
    },
    {
     "text": "Z/28 lower control arm and DSSV shock mount torque not found.",
     "conf": "unknown"
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "LSA (ZL1)",
     "LS7 (Z/28)"
    ],
    "rows": [
     [
      "Head bolts M11",
      "50 N·m, +80°, +55°",
      "30 N·m, +90°, +70°"
     ],
     [
      "Head bolts M8",
      "30 N·m / 22 lb-ft",
      "30 N·m / 22 lb-ft"
     ],
     [
      "Balancer bolt",
      "Seat with old bolt at 330 N·m (240 lb-ft); new bolt 150 N·m, loosen 360°, 80 N·m + 200°",
      "same as LSA"
     ],
     [
      "Rod bolts",
      "20 N·m + 85°",
      "20 N·m + 110° (titanium rods)"
     ],
     [
      "Cam sprocket",
      "75 N·m + 50°",
      "30 N·m / 22 lb-ft (3-bolt)"
     ],
     [
      "Main caps M10",
      "20 N·m + 80° (studs + 51°)",
      "same"
     ],
     [
      "Flywheel (manual)",
      "50 N·m + 45° (new bolts)",
      "30, 50, then 100 N·m"
     ],
     [
      "Pressure plate",
      "70 N·m / 52 lb-ft",
      "70 N·m / 52 lb-ft"
     ],
     [
      "Spark plugs",
      "20 N·m / 15 lb-ft",
      "20 N·m / 15 lb-ft"
     ],
     [
      "Oil filter",
      "3/4 to 1 turn after gasket contact",
      "same (PF64 only)"
     ],
     [
      "Supercharger",
      "Tensioner/idler 58 N·m (43 lb-ft); lower manifold 5 then 10 N·m; charge-air-cooler cover 5 then 10 N·m; front cover 27 N·m (20 lb-ft); bypass actuator 25 N·m (18 lb-ft); isolator bolts 5 N·m",
      "n/s"
     ],
     [
      "Dry sump",
      "n/s",
      "Tank bolts/brackets 25 N·m (18 lb-ft); lower bracket 36 N·m (27 lb-ft); transfer-tube fittings 35 N·m (25 lb-ft); tank hose nut 22 N·m (16 lb-ft); oil pressure sensor 35 N·m (26 lb-ft)"
     ],
     [
      "Engine mounts",
      "Nut to bracket and frame 100 N·m (74 lb-ft); bracket to block 60 N·m (44 lb-ft)",
      "Mount to bracket 100 N·m; to crossmember 58 N·m (43 lb-ft); bracket bolts 50 N·m (37 lb-ft)"
     ]
    ],
    "disputedRows": [
     8
    ]
   },
   "parts": [],
   "tips": [
    {
     "text": "Forum members have found no confirmed Z/28 dropped valve on Camaro5, but owners point to LS7 guide wear in Corvettes and say the risk rises with time above 6,500 rpm and with aggressive cams. Those who plan to rev or cam the car send the heads out for upgraded guides (about $1,000 per head).",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=603177",
     "source_name": "Camaro5.com: Z28 valve guides LS7 issue?",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "chain",
   "type": "diy",
   "title": "3.6 timing chain",
   "summary": "GM 12-06-01-009, kit 12651450.",
   "conf": [
    "verified",
    "video"
   ],
   "src": [
    {
     "label": "GM 12-06-01-009",
     "url": "https://static.nhtsa.gov/odi/tsbs/2012/MC-10113848-9999.pdf"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=BhDs1GcwRCs"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=1SC8Jy9NOJk"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=3y3ykN6_OrU"
    }
   ],
   "steps": [
    {
     "text": "Chain kit 12651450; reuse the gears per GM (don't replace sprockets, actuators or guides for stretch alone)."
    },
    {
     "text": "LLT cam sprocket bolt 58 N·m / 43 lb-ft (mirror).",
     "conf": "verified-secondary"
    },
    {
     "text": "Videos: GoTech; Melling; WatchJRGo.",
     "conf": "video"
    }
   ],
   "torque": null,
   "parts": []
  },
  {
   "id": "afm",
   "type": "swap",
   "title": "AFM/DOD delete (L99)",
   "summary": "Lifters, guides, valley plate and a tune.",
   "conf": [
    "verified",
    "video"
   ],
   "src": [
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=pRiSl81tGNM"
    },
    {
     "label": "YouTube",
     "url": "https://www.youtube.com/watch?v=ooTptWVv2Oc"
    }
   ],
   "steps": [
    {
     "text": "Non-AFM lifters, guides, valley cover, and a tune that disables AFM."
    },
    {
     "text": "Lifter guide bolts 12 N·m / 106 lb-in.",
     "conf": "verified-secondary"
    },
    {
     "text": "Kits: $539.97 (269 Motorsports, Morel lifters); $630.98+ (AMS); full cam/delete $1,299.99 (unverified)."
    },
    {
     "text": "Videos: Richard Holdener; 8020 Automotive.",
     "conf": "video"
    }
   ],
   "torque": null,
   "parts": [
    "afm-269",
    "afm-ams"
   ],
   "tips": [
    {
     "text": "Decide on VVT before you buy a kit: most L99-to-LS3 conversion kits delete VVT as well as AFM.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=609560",
     "source_name": "Camaro5.com: AFM delete and Keeping VVT on L99",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-6pot",
   "type": "swap",
   "title": "ZL1/CTS-V 6-piston front brakes on an SS",
   "summary": "Bolt-on calipers with longer lines.",
   "conf": "forum",
   "src": [
    {
     "label": "Camaro5 thread 348133",
     "url": "https://www.camaro5.com/forums/showthread.php?t=348133"
    },
    {
     "label": "Camaro5 thread 543214",
     "url": "https://www.camaro5.com/forums/showthread.php?t=543214"
    }
   ],
   "steps": [
    {
     "text": "Calipers ACDelco 172-2487/2488, rotors 177-1145/1146, pads 171-1040, pin kit 18K2108X, longer lines (Goodridge 12227)."
    },
    {
     "text": "About $1,500–1,600 with used calipers. Camaro5 group-buy kit \"from $1,185\"."
    },
    {
     "text": "Check wheel clearance: factory ZL1 wheels are 20 in."
    }
   ],
   "torque": null,
   "parts": [],
   "tips": [
    {
     "text": "ZL1, CTS-V and C6 Z06 (non-carbon) six-piston calipers bolt on with ZL1 or CTS-V rotors; you need longer ZL1 brake lines and new bracket bolts, since the originals are torque-to-yield. CTS-V calipers were often cheaper than ZL1 units, about $700 a pair new on eBay, for roughly $1,500 to $1,600 total.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=543214",
     "source_name": "Camaro5.com: 6 piston front brakes upgrade for SS",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-sc",
   "type": "swap",
   "title": "Supercharger on an SS",
   "summary": "Magnuson, ProCharger, Edelbrock.",
   "conf": "verified",
   "src": [
    {
     "label": "Edelbrock 15620",
     "url": "https://www.edelbrock.com/"
    }
   ],
   "steps": [
    {
     "text": "Magnuson TVS2300 complete $8,195 (Lethal Performance)."
    },
    {
     "text": "ProCharger P-1SC-1 HO intercooled $8,349 (AutoAddict; page lists $7,599–$10,399 variants)."
    },
    {
     "text": "Edelbrock E-Force Stage 1 #15620 (L99 auto, no tune) $8,995.95 at edelbrock.com and Phastek. Summit $8,739.95 unverified."
    }
   ],
   "torque": null,
   "parts": [
    "sc-magnuson",
    "sc-procharger",
    "sc-edelbrock"
   ],
   "tips": [
    {
     "text": "Read the whole supercharger manual once or twice before you touch the car and have every tool first; a shop owner says half-finished DIY installs cost more labor to fix. Put the front wheels on ramps for comfort, and use a concrete mixing tub as a coolant catch basin.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=66154",
     "source_name": "Camaro5.com: TVS2300 install tips",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "swap-gears",
   "type": "swap",
   "title": "Gear swap and diff upgrade",
   "summary": "SS manual 3.45 → 3.91; auto 3.27 → 3.45/3.73 on the 8.6 in / 218 mm IRS diff.",
   "conf": [
    "verified",
    "unconfirmed"
   ],
   "src": [
    {
     "label": "AmericanMuscle",
     "url": "https://www.americanmuscle.com/"
    }
   ],
   "steps": [
    {
     "text": "Motive G886391 3.91 ring and pinion $425.99. Yukon 3.91 about $675 and GM 1LE kit 84745893 about $296–320 (unconfirmed). Setup labor extra."
    },
    {
     "text": "Eaton Detroit Truetrac 912A686 (218 mm, 32-spline, 3.45/3.72-ratio carrier; check the carrier break for 3.91)."
    },
    {
     "text": "Single-piece driveshaft cures part of the off-throttle clunk."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Ring-gear bolts (218 mm)",
      "120 N·m / 89 lb-ft"
     ],
     [
      "Side-bearing cap bolts (218 mm)",
      "105 N·m (77 lb-ft)"
     ],
     [
      "Pinion shaft lock bolt",
      "25 N·m / 18 lb-ft"
     ]
    ]
   },
   "parts": [
    "gear-motive-g886391",
    "truetrac-912a686",
    "dss-610204",
    "dss-610222"
   ],
   "tips": [
    {
     "text": "The Chevrolet Performance 3.91 kit reuses the original shims only as a start; replace them if needed to hit GM pinion depth and bearing preload, and fill with the supplied limited-slip additive. The speedometer reads wrong until the dealer loads the new calibration with the kit authorization code.",
     "source_url": "https://cdn.revolutionparts.io/b0a0b93e061c59a634fb0e1a49af89e6/images/custom/instructions/Chevrolet/Upgrades/391-gear-kit-camaro-19301504-19329768.pdf",
     "source_name": "Chevrolet Performance: 3.91 axle performance gear kit instructions, Camaro (19301504/19329768)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Torques from the GM gear kit sheet: diff cover bolts 41 ft-lb, drain and fill plugs 24 ft-lb, driveshaft to transmission 72 ft-lb and driveshaft to differential 85 ft-lb.",
     "source_url": "https://cdn.revolutionparts.io/b0a0b93e061c59a634fb0e1a49af89e6/images/custom/instructions/Chevrolet/Upgrades/391-gear-kit-camaro-19301504-19329768.pdf",
     "source_name": "Chevrolet Performance: 3.91 axle performance gear kit instructions, Camaro (19301504/19329768)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "gf-alt-starter",
   "type": "diy",
   "title": "Alternator and starter",
   "summary": "The battery is in the trunk. Applies to: 2010-2015, GM SI (2009-13 and 2014 mirrors).",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "GM SI 2009-13 Camaro (diagnostdata mirror): charging-system",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/charging-system/"
    },
    {
     "label": "2014 Camaro GM SI (lemon-manuals mirror): starting and charging specs",
     "url": "https://lemon-manuals.la/Chevrolet/2014/Camaro%20ZL1%2C%202D%20Convertible%2C%20Automatic%20Trans/Repair%20and%20Diagnosis/Electrical/Starter/Battery%2C%20Starting%20System%20And%20Charging%20System/Specifications/Fastener%20Tightening%20Specifications/"
    }
   ],
   "steps": [
    {
     "text": "Disconnect the negative cable at the trunk floor first."
    },
    {
     "text": "Generator (2010-13 page): FG15 model, 150 A rated, 108 A load test. Battery 720 CCA, 80 Ah."
    },
    {
     "text": "LSA belt tensioner 58 N·m; LS3/LSA tensioner bolts 30 N·m (22 lb-ft)."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Generator bolt",
      "58 N·m (43 lb-ft)"
     ],
     [
      "Generator bracket bolt/nut (front)",
      "50 N·m (37 lb-ft)"
     ],
     [
      "Generator bracket fasteners (LFX, 2014 SI)",
      "22 N·m (16 lb-ft)"
     ],
     [
      "Generator stud (LS7, LSA, 2014 SI)",
      "20 N·m (15 lb-ft)"
     ],
     [
      "Generator bracket bolt (LLT)",
      "25 N·m (18 lb-ft)"
     ],
     [
      "Generator BAT nut",
      "15 N·m (11 lb-ft)"
     ],
     [
      "Starter mounting bolts",
      "58 N·m (43 lb-ft)"
     ],
     [
      "Starter shield bolt",
      "5 N·m (44 lb-in)"
     ],
     [
      "Battery + cable nut at starter",
      "13 N·m (115 lb-in)"
     ],
     [
      "Battery hold-down / negative at trunk floor",
      "22 N·m (16 lb-ft) / 25 N·m (18 lb-ft)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-water-pump",
   "type": "diy",
   "title": "Water pump and thermostat",
   "summary": "LLT and 6.2 values. Applies to: LLT 2010-11 (2009-13 SI mirror); LSA 2012-15.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "GM SI 2009-13 Camaro (diagnostdata mirror): cooling-system",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/cooling-system/"
    },
    {
     "label": "2014 Camaro GM SI (lemon-manuals mirror): suspension and brake tables",
     "url": "https://lemon-manuals.la/Chevrolet/2014/Camaro%20ZL1%2C%202D%20Convertible%2C%20Automatic%20Trans/Repair%20and%20Diagnosis/Suspension/"
    }
   ],
   "steps": [
    {
     "text": "6.2 (LS3/L99/LSA): 15 N·m first pass, then 30 N·m final (already in the existing guide)."
    },
    {
     "text": "LLT pulley bolts: hold with EN 46104."
    },
    {
     "text": "LLT pulley bolts: 10 N·m in the procedure vs 12 N·m (106 lb-in) in the cooling spec table. Unresolved.",
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
      "LLT water pump bolts",
      "10 N·m (89 lb-in)"
     ],
     [
      "LLT pulley bolts",
      "10 N·m (procedure) / 12 N·m (spec table), disputed"
     ],
     [
      "LLT inlet bolts",
      "15 N·m (11 lb-ft)"
     ],
     [
      "LLT thermostat housing / thermostat bolt",
      "20 N·m (15 lb-ft) / 10 N·m (89 lb-in)"
     ],
     [
      "LSA thermostat housing",
      "15 N·m (11 lb-ft)"
     ],
     [
      "LSA block drain plug",
      "60 N·m (44 lb-ft)"
     ]
    ]
   },
   "parts": [],
   "disputedRows": [
    1
   ]
  },
  {
   "id": "gf-fuel-pump",
   "type": "diy",
   "title": "Fuel pump module (tank must come out)",
   "summary": "Right-side primary module. Applies to: 2014 GM SI (mirror); also on the 2011 page.",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2014 Camaro GM SI (lemon-manuals mirror): fuel pump module",
     "url": "https://lemon-manuals.la/Chevrolet/2014/Camaro%20ZL1%2C%202D%20Convertible%2C%20Automatic%20Trans/Repair%20and%20Diagnosis/Engine%20Performance/Fuel%20Delivery/"
    }
   ],
   "steps": [
    {
     "text": "Remove the fuel tank. Disconnect the pump connector and feed line."
    },
    {
     "text": "Lock ring off counter-clockwise with the J 45722 wrench. No lock-ring torque is given."
    },
    {
     "text": "Lift the module partway and disconnect the transfer hose. Install with a new seal. The left-side level sensor is a separate procedure."
    },
    {
     "text": "LLT high-pressure (DI) pump: new bolts, 15 N·m (11 lb-ft), tighten evenly."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Tank strap to underbody",
      "30 N·m (22 lb-ft)"
     ],
     [
      "Rear cradle to underbody (if lowered)",
      "65 N·m (48 lb-ft) + 120°"
     ],
     [
      "Tank heat shield",
      "5.5 N·m (49 lb-in)"
     ],
     [
      "Filler tube bracket / pipe bolts",
      "9 N·m (80 lb-in)"
     ],
     [
      "Tank hose to filler clamp",
      "4 N·m (35 lb-in)"
     ],
     [
      "EVAP canister to underbody",
      "6 N·m (53 lb-in)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-blend-door",
   "type": "diy",
   "title": "Blend door (temperature valve) actuator, manual HVAC",
   "summary": "Two screws, then relearn. Applies to: 2010-2015 manual HVAC, GM SI (mirrors).",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2014 Camaro GM SI (lemon-manuals mirror): temperature valve actuator",
     "url": "https://lemon-manuals.la/Chevrolet/2014/Camaro%20ZL1%2C%202D%20Convertible%2C%20Automatic%20Trans/Repair%20and%20Diagnosis/HVAC/HVAC%20Control%20Systems/HVAC%20System%20-%20Manual/Repair%20Instructions/Temperature%20Valve%20Actuator%20Replacement/"
    },
    {
     "label": "GM SI 2009-13 Camaro (diagnostdata mirror): manual-hvac",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/manual-hvac/"
    }
   ],
   "steps": [
    {
     "text": "Remove the left front floor air duct; disconnect the connector; remove 2 screws."
    },
    {
     "text": "Relearn with a scan tool (HVAC Actuators Relearn). Without one: clear codes, ignition off, pull the HVAC control module fuse 10 s or more, refit, start and wait 40 s without touching the controls."
    },
    {
     "text": "B101E 4B after relearn with an electrically good actuator that does not turn: stripped gears, a common cause."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Actuator screws (2)",
      "2.0 N·m (18 lb-in)"
     ],
     [
      "HVAC case and cover screws",
      "1.5 N·m (13 lb-in)"
     ],
     [
      "HVAC module to dash",
      "10 N·m (89 lb-in)"
     ],
     [
      "Heater pipe adapter bolts",
      "7 N·m (62 lb-in)"
     ]
    ]
   },
   "parts": []
  },
  {
   "id": "gf-chassis-2014",
   "type": "diy",
   "title": "Brakes and suspension, 2014 tables",
   "summary": "The 2014 tables match the 2015 values in the existing guides; 2013 is still unconfirmed. Applies to: 2014-2015 (2014 GM SI matches 2015).",
   "conf": "verified-secondary",
   "src": [
    {
     "label": "2014 Camaro GM SI (lemon-manuals mirror): suspension and brake tables",
     "url": "https://lemon-manuals.la/Chevrolet/2014/Camaro%20ZL1%2C%202D%20Convertible%2C%20Automatic%20Trans/Repair%20and%20Diagnosis/Suspension/"
    },
    {
     "label": "2014 Camaro Z/28 GM SI suspension (lemon-manuals mirror)",
     "url": "https://lemon-manuals.la/Chevrolet/2014/Camaro%20Z%2F28/Repair%20and%20Diagnosis/Suspension/"
    },
    {
     "label": "GM SI 2009-13 Camaro (diagnostdata mirror): front-suspension",
     "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/front-suspension/"
    }
   ],
   "steps": [
    {
     "text": "Front lower ball joints are part of the lower control arms; replace the arm. Separate with J 42188, remove with J 43631. Knuckle nuts 40 N·m + 90°."
    },
    {
     "text": "Z/28 has no unique values: its front and rear tables match ZL1/generic (front LCA nuts 50 N·m + 150° / 40 N·m + 90° / 50 N·m + 120°; rear lower shock nut 80 N·m + 120°; upper shock bolt 58 N·m; shock nut 45 N·m)."
    }
   ],
   "torque": {
    "columns": [
     "Fastener",
     "Spec"
    ],
    "rows": [
     [
      "Front stabilizer link nuts / clamp nuts",
      "70 N·m (52 lb-ft) / 43 N·m (32 lb-ft)"
     ],
     [
      "Front hub bolts, LFX / V8",
      "115 N·m (85 lb-ft) / 100 N·m + 28°"
     ],
     [
      "Rear toe-link bolt",
      "175 N·m (129 lb-ft)"
     ],
     [
      "UCA-to-bushing-to-frame bolt",
      "175 N·m (129 lb-ft)"
     ],
     [
      "Rear stabilizer clamp bolts",
      "58 N·m (43 lb-ft)"
     ],
     [
      "Caliper / bracket bolts",
      "40 N·m + 90°"
     ],
     [
      "Brake hose fitting bolt",
      "40 N·m (30 lb-ft)"
     ]
    ]
   },
   "parts": []
  }
 ],
 "tipsTitle": "Vehicle health tips",
 "tips": [
  {
   "text": "The V6 oil pan is aluminum, so torque the drain plug to only 18 ft-lb; a stripped pan can let the plug vibrate out. The cartridge filter cap also takes 18 ft-lb with a new O-ring, and to reset oil life turn the key to run and press the gas pedal to the floor three times.",
   "source_url": "https://www.1aauto.com/how-to-change-engine-oil-2010-15-chevy-camaro/video/44626",
   "source_name": "1A Auto (video): How to Change Engine Oil 2010-15 Chevy Camaro",
   "confidence": "video",
   "date_checked": "2026-10-11"
  },
  {
   "text": "On the V6 Aisin AY6 manual, crack the fill plug before the drain plug. Both are 24 mm and take 27 ft-lb, and it holds about 1.9 qt; some fine shavings on the magnetic plug are normal, chunks are not.",
   "source_url": "https://www.1aauto.com/how-to-check-manual-transmission-fluid-2010-15-chevy-camaro/video/46914",
   "source_name": "1A Auto (video): How to Check Manual Transmission Fluid 2010-15 Chevy Camaro",
   "confidence": "video",
   "date_checked": "2026-10-11"
  },
  {
   "text": "GM lists ZL1 diff fluid changes at 45,000 miles normally or every 15,000 miles for severe use, with Dexron LS 75W-90 that already contains the modifier.",
   "source_url": "https://static.oemdtc.com/TSB/MC-10114562-9999.pdf",
   "source_name": "GM PIP5097A: ZL1 Rear Differential Moan Noise On Turns (2012-2015 Camaro ZL1)",
   "confidence": "verified",
   "date_checked": "2026-10-11"
  }
 ],
 "dyno": {
  "columns": [
   "Car",
   "Result",
   "Notes",
   "Confidence"
  ],
  "rows": [
   [
    "LS3 manual, stock",
    "About 360–380 rwhp / 360–385 rwtq",
    "Camaro5 and ModernCamaro",
    "forum"
   ],
   [
    "L99 auto, stock",
    "About 315–330 rwhp",
    "",
    "forum"
   ],
   [
    "ZL1, stock",
    "511 rwhp / 405 rwtq",
    "Mustang dyno, Lingenfelter baseline (DragTimes 2012-04-11)",
    "verified"
   ],
   [
    "ZL1, stock",
    "518 / 497 manual; Dynojet 248 runs 505–535 rwhp (LS1Tech 2013 manual car 535 SAE)",
    "Mustang dynos read lower",
    "forum"
   ],
   [
    "Z/28, stock",
    "455 rwhp / 420 rwtq",
    "Land & Sea DYNOmite, Redline Motorsports (MotorTrend 2014-05-15)",
    "verified"
   ],
   [
    "Z/28, stock",
    "465–469 rwhp",
    "Camaro5 owners",
    "forum"
   ]
  ],
  "src": [
   {
    "label": "MotorTrend Z/28 dyno",
    "url": "https://www.motortrend.com/news/1405-2014-chevy-camaro-z28-dyno-test-redline-motorsports"
   },
   {
    "label": "DragTimes (guide gave no page URL)",
    "url": "https://www.dragtimes.com/"
   }
  ]
 },
 "videos": [
  {
   "title": "2010-2015 5th Gen Camaro Spark Plug Replacement!",
   "channel": "GV Aspirated",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=ENAyRy1zT-Y",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "Spark plugs",
   "channel": "Donating Horsepower",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=jp7UmbY7Oss",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "Rear diff fluid",
   "channel": "Graeme O'Leary",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=5obcRSVYsSo",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "Rear diff fluid",
   "channel": "DKGarage",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=mMV72UcsXe0",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "Rear diff fluid, V6",
   "channel": "ScribnerMechanics",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=V5Lb8GMd6QU",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "6L50 fluid and filter",
   "channel": "ScribnerMechanics",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=Ftn-H7I34Bo",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "6L80 fluid and filter",
   "channel": "Codemans auto",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=DwH7uZoCR6k",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "Lowering springs (part 1)",
   "channel": "Phastek Performance",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=51R8-6KN1A8",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "Lowering springs (part 2)",
   "channel": "Phastek Performance",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=2JKblUwOW48",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "3.6 timing chain",
   "channel": "GoTech",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=BhDs1GcwRCs",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "3.6 timing chain",
   "channel": "Melling",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=1SC8Jy9NOJk",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "3.6 timing chain",
   "channel": "WatchJRGo",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=3y3ykN6_OrU",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "Brembo pads/rotors",
   "channel": "Logan Gregory",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=12qZUYBFULk",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "ZL1 brakes",
   "channel": "Mac Pettit",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=EvHfx57u5S0",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "ZL1 brakes",
   "channel": "Mr. LSX",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=Csy7w1nVvI8",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "AFM delete",
   "channel": "Richard Holdener",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=pRiSl81tGNM",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "AFM delete",
   "channel": "8020 Automotive",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=ooTptWVv2Oc",
   "note": "From YouTube search results; not watched."
  },
  {
   "title": "BMR CB008 cradle lockout",
   "channel": "D3RPZILLA",
   "date": "n/s",
   "url": "https://www.youtube.com/watch?v=2aQG6ckX_iA",
   "note": "From YouTube search results; not watched."
  }
 ],
 "unknowns": [
  "2013–14 torque tables: the 2010–13 and 2015 tables bracket those years, but where they differ the 2013–14 value is unconfirmed.",
  "A GM-hosted gear-ratio document; the MM6 5th/6th split (1LE vs Z/28); whether the ZL1 manual is RPO MG9.",
  "Fitment Industries 5th-gen guide text (behind AWS WAF, no Wayback copy).",
  "Unverified prices: Summit E-Force $8,739.95; Yukon 3.91 and GM 1LE gear kits; SportsRyder springs; BC Extreme Low; HP Tuners MPVI3; BBK V6 headers (about $1,149.99); BMR CB010.",
  "Replacement supercharger P/N 19303635 not confirmed in the bulletin text.",
  "Z/28-specific lower control arm torque and Z/28 DSSV shock mount torque.",
  "TPMS details were not in the source guide.",
  "Video titles are only recorded for the spark-plug video; the rest are listed by job and channel.",
  "Several vendor prices were read on pages whose full URLs the guide did not record; those links go to the store home.",
  "Gap-fill: fuse amp ratings (no GM manual lists them); 2013 torque tables; 2015 owner's manual (2015 bulbs, fuses and maintenance assumed as 2014).",
  "Gap-fill: GM placard pressures for LS/LT, ZL1 and Z/28 (third-party only); HID low-beam bulb type; fuel pump lock-ring torque; per-car payload.",
  "Gap-fill: GM gear-ratio document, MM6 5th/6th split, whether the ZL1 manual is MG9; a GM paint document."
 ],
 "sellers": [],
 "partCategories": [
  "Suspension & Lowering",
  "Exhaust & Intake",
  "Tuners",
  "Forced Induction",
  "Drivetrain",
  "Engine",
  "Ignition",
  "Fuel System",
  "Cooling",
  "HVAC",
  "Electrical",
  "Brakes",
  "Body",
  "Lighting",
  "Interior",
  "Filters & Fluids"
 ],
 "parts": [
  {
   "id": "spring-eibach-38144",
   "platform": "Camaro 2010–2015",
   "category": "Suspension & Lowering",
   "name": "Pro-Kit lowering springs (about 1 in drop)",
   "brand": "Eibach",
   "part_number": "38144.140",
   "fitment": {
    "years": "SS coupe",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Eibach",
     "price": 395,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.eibach.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Eibach",
    "price": 395,
    "url": "https://www.eibach.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Mark the upper strut perch against the lower perch before taking the front strut apart and reassemble in the same orientation, or it can make noise. Retorque every rear bushing pivot with the full weight of the car on the suspension to avoid bushing preload and uneven drop.",
     "source_url": "https://smhttp-ssl-39784.nexcesscdn.net/media/product_pdf/38144.140.pdf",
     "source_name": "Eibach: Pro-Kit 38144.140 installation instructions, 2010+ Camaro SS",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "spring-bmr-sp025",
   "platform": "Camaro 2010–2015",
   "category": "Suspension & Lowering",
   "name": "Lowering springs (1.4 in F / 1.0 in R)",
   "brand": "BMR",
   "part_number": "SP025",
   "fitment": {
    "years": "SS/ZL1",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Phastek Performance",
     "price": 319.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.phastekperformance.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Phastek Performance",
    "price": 319.95,
    "url": "https://www.phastekperformance.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "On a convertible the 1.4 in springs left the rear struts sitting on the bump stops, and cutting the stops dropped the rear another inch. BMR and the seller agreed convertibles are likely too heavy for the 1.4 in kit and refunded it; BMR lists it as V8 coupe only.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=138322",
     "source_name": "Camaro5.com: BMR 1.4\" drop springs, sway bars, pro bushing kit, trailing arms, toe rods install",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "The front springs go back on without a compressor; index the spring into both seats and torque the upper strut nut to 52 ft-lb. Then reset the front bushings at ride height on the alignment rack: radius rod bolt 32 ft-lb, lower control arm bolt 39 ft-lb.",
     "source_url": "https://www.phastekperformance.com/content/inst/BMR_SP052_Inst.pdf",
     "source_name": "BMR Suspension: Lowering springs for 2010-present Camaro installation instructions (SP019-SP025, SP052-SP054)",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "spring-bmr-sp077",
   "platform": "Camaro 2010–2015",
   "category": "Suspension & Lowering",
   "name": "Lowering springs (1.25 in)",
   "brand": "BMR",
   "part_number": "SP077",
   "fitment": {
    "years": "SS/ZL1/Z28",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Phastek Performance",
     "price": 289.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.phastekperformance.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Phastek page lists it; Tunersports page blocked. Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Phastek Performance",
    "price": 289.95,
    "url": "https://www.phastekperformance.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "coil-pedders-160086",
   "platform": "Camaro 2010–2015",
   "category": "Suspension & Lowering",
   "name": "eXtreme XA coilovers",
   "brand": "Pedders",
   "part_number": "160086",
   "fitment": {
    "years": "2010–15",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Pedders",
     "price": 1349.96,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.pedders.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "SportsRyder springs about $269.96 (unconfirmed).",
   "best_offer": {
    "seller": "Pedders",
    "price": 1349.96,
    "url": "https://www.pedders.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "The 2011 and later Camaros have a white ring on the upper strut cushion that the XA top will not fit; it lifts out to expose the black cushion the coilover does fit. Measure rim-to-fender height at all four corners before you start so you can set the drop; this owner raised his 5/8 in front after scraping.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=196208",
     "source_name": "Camaro5.com: Pedders XA Coilovers Installation & Review",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "coil-bc-br",
   "platform": "Camaro 2010–2015",
   "category": "Suspension & Lowering",
   "name": "BR coilovers",
   "brand": "BC Racing",
   "part_number": "BR",
   "fitment": {
    "years": "2014–15 (separate 2010–13 kit, same price per search)",
    "models": [
     "Camaro 2010–2015"
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
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "Extreme Low about $1,345 (unconfirmed).",
   "best_offer": {
    "seller": "BC Racing (springrates)",
    "price": 1195,
    "url": "https://bc.springrates.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "bmr-cb010",
   "platform": "Camaro 2010–2015",
   "category": "Suspension & Lowering",
   "name": "Cradle bushing lockout, Level 1",
   "brand": "BMR",
   "part_number": "CB010",
   "fitment": {
    "years": "2010–15",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "3rd-party reseller",
     "price": 107.06,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.bmrsuspension.com/",
     "checked": "2026-10-11",
     "status": "unverified",
     "source_note": "About $107.06 at a 3rd-party reseller (Unconfirmed); links to BMR"
    }
   ],
   "notes": "Wheel hop fix order: cradle bushings first.",
   "best_offer": null,
   "source": "master-guide",
   "tips": [
    {
     "text": "When replacing the rear cradle bushings, keep and reuse the four black caps under each big bushing; the BMR instructions do not mention them and helpers almost threw them out. The instruction photo of the installed cradle (Image 10) is shown upside down.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=138322",
     "source_name": "Camaro5.com: BMR 1.4\" drop springs, sway bars, pro bushing kit, trailing arms, toe rods install",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "exh-borla-140356",
   "platform": "Camaro 2010–2015",
   "category": "Exhaust & Intake",
   "name": "ATAK cat-back (2010–13 SS, no GFX)",
   "brand": "Borla",
   "part_number": "140356",
   "fitment": {
    "years": "2010–13 SS",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Borla",
     "price": 1249.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.borla.com/",
     "checked": "2026-10-11",
     "status": "unverified",
     "source_note": "Page shows $1,249.99–1,499.99 across variants; exact price not pinned. Lowest shown"
    }
   ],
   "notes": "",
   "best_offer": null,
   "source": "master-guide",
   "tips": [
    {
     "text": "The ATAK does not need a tune; the popping on decel with the clutch in is normal and just louder now. Owners say staying in 6th while coasting to a light, or coasting with the clutch in, cuts most of it.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=110680",
     "source_name": "Camaro5.com: Borla ATAK require a tune?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "An L99 owner with the ATAK had a constant 1,200 to 1,800 rpm drone that an AFM disabler did not fix. Replies split: some say tuning out AFM ended it, others fixed it with a resonated X-pipe or J-pipes instead.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=478665",
     "source_name": "Camaro5.com: Eliminating drone with MAGNAFLOW resonated X-PIPE",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "exh-borla-140532",
   "platform": "Camaro 2010–2015",
   "category": "Exhaust & Intake",
   "name": "ATAK cat-back (2014–15 SS, no GFX)",
   "brand": "Borla",
   "part_number": "140532",
   "fitment": {
    "years": "2014–15 SS",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Phastek Performance",
     "price": 1683.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.phastekperformance.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Phastek Performance",
    "price": 1683.99,
    "url": "https://www.phastekperformance.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Several owners with the ATAK, including with long tubes, say drone is mild and they can talk at highway speed; one with Kooks and AFM tuned out had less drone than with a plain muffler delete. Expect worse mileage because it encourages revving.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=110039",
     "source_name": "Camaro5.com: How Bad Is Borla ATAK Catback Drone?",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "intake-rotofab",
   "platform": "Camaro 2010–2015",
   "category": "Exhaust & Intake",
   "name": "Cold-air intake, oiled filter",
   "brand": "Roto-Fab",
   "part_number": "n/s",
   "fitment": {
    "years": "2010–15 SS",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Phastek Performance",
     "price": 484.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.phastekperformance.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Phastek Performance",
    "price": 484.95,
    "url": "https://www.phastekperformance.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "hdr-kooks",
   "platform": "Camaro 2010–2015",
   "category": "Exhaust & Intake",
   "name": "Long-tube headers 1-7/8 in, catted connections",
   "brand": "Kooks",
   "part_number": "2250H420",
   "fitment": {
    "years": "SS",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Kooks",
     "price": 2689.5,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.kooksheaders.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Kooks",
    "price": 2689.5,
    "url": "https://www.kooksheaders.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Mark each O2 sensor position before removal, install the supplied O2 extensions on the front sensors, and anti-seize all sensor threads. Loosely hang the connection pipes and tighten from the rear forward, and check clearance around the starter cable and reroute it with zip ties if needed.",
     "source_url": "https://www.catalograck.com/ImgVD/KKH/KIT-LS3-T_KIT-GEN5Z28GM_10-15_Chevrolet_Camaro_V8_Instructions.pdf",
     "source_name": "Kooks: 2010-2015 Camaro SS/ZL1/Z28 header installation instructions",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "hdr-arh",
   "platform": "Camaro 2010–2015",
   "category": "Exhaust & Intake",
   "name": "Long-tube headers 1-7/8 in, catted",
   "brand": "American Racing",
   "part_number": "n/s",
   "fitment": {
    "years": "SS",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Phastek Performance",
     "price": 2046.98,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.phastekperformance.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Phastek Performance",
    "price": 2046.98,
    "url": "https://www.phastekperformance.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Without the car 2 ft off the ground, pull the single 11 mm steering shaft bolt and push the shaft up for clearance; one installer later traced a steering grind to that bolt left loose. Slide the high-flow cats on with the O2 bungs pointing inward and level (9 to 11 o'clock) so the sensor never hangs below the cat.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=286742",
     "source_name": "Camaro5.com: Installed ARH headers. What I've learned...",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "ARH told one owner 20 ft-lb on the header bolts with a recheck after 100 to 200 miles. A passenger header rubbed the starter heat shield until he bent it back, and two headless bolts threaded into the head make a hands-free way to hang the header and gasket.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=286742",
     "source_name": "Camaro5.com: Installed ARH headers. What I've learned...",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "hdr-texas",
   "platform": "Camaro 2010–2015",
   "category": "Exhaust & Intake",
   "name": "Long-tube headers 1-7/8 in, catted",
   "brand": "Texas Speed",
   "part_number": "n/s",
   "fitment": {
    "years": "SS",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Beefcake Racing",
     "price": 1175.98,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.beefcakeracing.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Beefcake Racing",
    "price": 1175.98,
    "url": "https://www.beefcakeracing.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A one-day jack stand install of Texas Speed 1-7/8 in headers did not require dropping the driveshaft. Soak the O2 sensors and manifold bolts the night before, unplug the O2 connectors at the back of the heads (pull the blue or green lock first) before jacking the car up, and torque header bolts to 18 ft-lb.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=516684",
     "source_name": "Camaro5.com: DIY: Long Tube Header Install",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "A ZL1 owner had to grind the dipstick tube mounting arm because the thicker header flange stopped the holes lining up, and had to pull the passenger ground strap to seat the flange. Tell your tuner to delete the rear O2s or expect a check engine light.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=516684",
     "source_name": "Camaro5.com: DIY: Long Tube Header Install",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "tune-trifecta",
   "platform": "Camaro 2010–2015",
   "category": "Tuners",
   "name": "Advantage tune",
   "brand": "Trifecta",
   "part_number": "n/s",
   "fitment": {
    "years": "3.6 V6",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Trifecta",
     "price": 449,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.trifectaperformance.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "Advantage+ $549, Elite $749 unverified.",
   "best_offer": {
    "seller": "Trifecta",
    "price": 449,
    "url": "https://www.trifectaperformance.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "If a flash fails partway and the car shows Service StabiliTrak and will not start, load another tune file; this owner's second flash worked. Owners say the tune leaves a flash counter imprint, so do not count on the transparency option hiding it from a dealer.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=428806",
     "source_name": "Camaro5.com: Trifecta Tune Review for LFX//November 2015",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "sc-magnuson",
   "platform": "Camaro 2010–2015",
   "category": "Forced Induction",
   "name": "TVS2300 supercharger, complete",
   "brand": "Magnuson",
   "part_number": "n/s",
   "fitment": {
    "years": "SS",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Lethal Performance",
     "price": 8195,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.lethalperformance.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Lethal Performance",
    "price": 8195,
    "url": "https://www.lethalperformance.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Pull the radiator for drill access to the balancer, break the balancer bolt with a 6-point 24 mm socket plus heat and a long cheater pipe (impacts often fail), and never install the new bolt with an impact: 37 ft-lb plus 140 degrees. Automatics need a flywheel holding tool (J-42386-A) with the starter removed.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=66154",
     "source_name": "Camaro5.com: TVS2300 install tips",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    },
    {
     "text": "Hook the rear hoses to the blower on the bench before setting it on the engine; the firewall heater hoses were the hardest part for one installer. Owners run one-step-colder plugs (NGK TR6 gapped about 0.034 in) with boost, and some needed the copper shim to clear the oil pressure sensor clip.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=66154",
     "source_name": "Camaro5.com: TVS2300 install tips",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "sc-procharger",
   "platform": "Camaro 2010–2015",
   "category": "Forced Induction",
   "name": "P-1SC-1 HO intercooled",
   "brand": "ProCharger",
   "part_number": "n/s",
   "fitment": {
    "years": "SS",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AutoAddict",
     "price": 8349,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.autoaddictusa.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Same page lists $7,599–$10,399 variants. Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AutoAddict",
    "price": 8349,
    "url": "https://www.autoaddictusa.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "A 1LE owner making 11.8 psi on an 8.125 in crank and 3.4 in blower pulley suspected belt slip and sandblasted the blower pulley rather than overtighten and kill the bearings. Another owner says the green Gates belts are only stronger, not grippier, and lost boost with one; he runs a Continental Poly-V belt.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=577144",
     "source_name": "Camaro5.com: procharger belt and pulley",
     "confidence": "forum",
     "date_checked": "2026-10-11",
     "disputed": true
    }
   ]
  },
  {
   "id": "sc-edelbrock",
   "platform": "Camaro 2010–2015",
   "category": "Forced Induction",
   "name": "E-Force Stage 1 (L99 auto, no tune)",
   "brand": "Edelbrock",
   "part_number": "15620",
   "fitment": {
    "years": "SS auto (L99)",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Edelbrock",
     "price": 8995.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.edelbrock.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    },
    {
     "seller": "Phastek Performance",
     "price": 8995.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.phastekperformance.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    },
    {
     "seller": "Summit Racing",
     "price": 8739.95,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.summitracing.com/",
     "checked": "2026-10-11",
     "status": "unverified",
     "source_note": "Quoted price behind a bot wall; unverified"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Edelbrock",
    "price": 8995.95,
    "url": "https://www.edelbrock.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "afm-269",
   "platform": "Camaro 2010–2015",
   "category": "Engine",
   "name": "AFM/DOD delete kit (Morel lifters)",
   "brand": "269 Motorsports",
   "part_number": "n/s",
   "fitment": {
    "years": "SS auto (L99)",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "269 Motorsports",
     "price": 539.97,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.269motorsports.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "Tune must disable AFM.",
   "best_offer": {
    "seller": "269 Motorsports",
    "price": 539.97,
    "url": "https://www.269motorsports.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "An LS3-style conversion kit removes VVT; if you want to keep VVT, do an AFM-only delete with a VVT cam (one owner ran a GPI SS-series VVT cam and loved the low-end torque). On a supercharged car owners say a pulley change is simpler than camming it, especially where emissions rules apply.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=609560",
     "source_name": "Camaro5.com: AFM delete and Keeping VVT on L99",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "afm-ams",
   "platform": "Camaro 2010–2015",
   "category": "Engine",
   "name": "AFM/DOD delete kit",
   "brand": "AMS Racing",
   "part_number": "n/s",
   "fitment": {
    "years": "SS auto (L99)",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AMS Racing",
     "price": 630.98,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.amsracing.net/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Listed as $630.98+. Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "AMS Racing",
    "price": 630.98,
    "url": "https://www.amsracing.net/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "gear-motive-g886391",
   "platform": "Camaro 2010–2015",
   "category": "Drivetrain",
   "name": "3.91 ring and pinion",
   "brand": "Motive",
   "part_number": "G886391",
   "fitment": {
    "years": "8.6 in / 218 mm IRS",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "AmericanMuscle",
     "price": 425.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.americanmuscle.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "Setup labor extra.",
   "best_offer": {
    "seller": "AmericanMuscle",
    "price": 425.99,
    "url": "https://www.americanmuscle.com/",
    "status": "verified"
   },
   "source": "master-guide"
  },
  {
   "id": "truetrac-912a686",
   "platform": "Camaro 2010–2015",
   "category": "Drivetrain",
   "name": "Detroit Truetrac (218 mm, 32-spline, 3.45/3.72-ratio carrier)",
   "brand": "Eaton",
   "part_number": "912A686",
   "fitment": {
    "years": "2010–15 218 mm",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "TBW Performance",
     "price": 823.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.tbwperformance.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    },
    {
     "seller": "Drivetrain America",
     "price": 823.99,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.drivetrainamerica.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "Check the carrier break if you go to 3.91. MSRP $895.65 (unconfirmed).",
   "best_offer": {
    "seller": "TBW Performance",
    "price": 823.99,
    "url": "https://www.tbwperformance.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "Expect a Truetrac with 3.91s to clunk and whine on and off throttle, louder than stock, especially with offset or solid diff bushings. Owners quieted theirs by switching from synthetic to Lucas 85W-140 conventional gear oil.",
     "source_url": "https://www.camaro5.com/forums/showthread.php?t=511741",
     "source_name": "Camaro5.com: Eaton Tru-Trac Differential",
     "confidence": "forum",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "dss-610204",
   "platform": "Camaro 2010–2015",
   "category": "Drivetrain",
   "name": "3.5 in aluminum 1-piece driveshaft (GMCA20-A)",
   "brand": "DSS",
   "part_number": "610204",
   "fitment": {
    "years": "SS manual",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "Phastek Performance",
     "price": 1203.73,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.phastekperformance.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "Phastek Performance",
    "price": 1203.73,
    "url": "https://www.phastekperformance.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "After installing, measure the front CV clearance at the transmission end; it must be 3.625 to 4.125 in or the shaft must not be run. Torque the front adapter hardware to 70 ft-lb (M12) and 57 ft-lb (M10), and install a rear subframe lockout first or the shaft can fail.",
     "source_url": "https://driveshaftshop.com/wp-content/uploads/2026/08/2010-Camaro_G8_SS-Direct-Fit-Driveshaft-Install-2026-Edit.pdf",
     "source_name": "Driveshaft Shop: 2010+ Camaro/G8/SS 1-piece direct fit driveshaft install sheet",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  },
  {
   "id": "dss-610222",
   "platform": "Camaro 2010–2015",
   "category": "Drivetrain",
   "name": "Carbon 1-piece driveshaft, stock auto/ZL1 diff",
   "brand": "DSS",
   "part_number": "610222",
   "fitment": {
    "years": "Auto / ZL1 diff",
    "models": [
     "Camaro 2010–2015"
    ],
    "drive": [],
    "cab": "",
    "engines": [],
    "position": "",
    "notes": ""
   },
   "offers": [
    {
     "seller": "JSD Machine Works",
     "price": 1924.03,
     "price_unit": "listing",
     "shipping_note": "",
     "url": "https://www.jsdmachineworks.com/",
     "checked": "2026-10-11",
     "status": "verified",
     "source_note": "Price read on the vendor page; the guide did not record its full URL, so this links to the store"
    }
   ],
   "notes": "",
   "best_offer": {
    "seller": "JSD Machine Works",
    "price": 1924.03,
    "url": "https://www.jsdmachineworks.com/",
    "status": "verified"
   },
   "source": "master-guide",
   "tips": [
    {
     "text": "With the stock differential, the rear adapter takes three M12 bolts at 70 ft-lb and four 7/16 in bolts at 58 ft-lb. DSS requires a rear subframe lockout with any 1-piece shaft on these cars.",
     "source_url": "https://driveshaftshop.com/wp-content/uploads/2026/08/2010-Camaro_G8_SS-Direct-Fit-Driveshaft-Install-2026-Edit.pdf",
     "source_name": "Driveshaft Shop: 2010+ Camaro/G8/SS 1-piece direct fit driveshaft install sheet",
     "confidence": "verified",
     "date_checked": "2026-10-11"
    }
   ]
  }
 ],
 "catalog": {
  "index": "data/parts/camaro-2010-2015/index.js",
  "indexBytes": 121551,
  "note": "Repair parts are RockAuto catalog picks (Economy, OE, Premium options per part type) read on the catalog pages of the representative vehicles linked here. Fitment comes from the listing notes for those vehicles only, so other years, trims and cabs show Check fitment.",
  "vehicles": [
   "https://www.rockauto.com/en/catalog/chevrolet,2012,camaro,3.6l+v6,3015193"
  ],
  "generated": "2026-10-18",
  "files": [
   {
    "file": "data/parts/camaro-2010-2015/0.js",
    "category": "Engine",
    "count": 142,
    "types": 51,
    "from": null,
    "bytes": 99802
   },
   {
    "file": "data/parts/camaro-2010-2015/1.js",
    "category": "Ignition",
    "count": 10,
    "types": 3,
    "from": null,
    "bytes": 7588
   },
   {
    "file": "data/parts/camaro-2010-2015/2.js",
    "category": "Fuel System",
    "count": 45,
    "types": 19,
    "from": null,
    "bytes": 31581
   },
   {
    "file": "data/parts/camaro-2010-2015/3.js",
    "category": "Cooling",
    "count": 39,
    "types": 15,
    "from": null,
    "bytes": 26784
   },
   {
    "file": "data/parts/camaro-2010-2015/4.js",
    "category": "HVAC",
    "count": 38,
    "types": 17,
    "from": null,
    "bytes": 27986
   },
   {
    "file": "data/parts/camaro-2010-2015/5.js",
    "category": "Electrical",
    "count": 90,
    "types": 50,
    "from": null,
    "bytes": 66976
   },
   {
    "file": "data/parts/camaro-2010-2015/6.js",
    "category": "Brakes",
    "count": 99,
    "types": 24,
    "from": null,
    "bytes": 73966
   },
   {
    "file": "data/parts/camaro-2010-2015/7.js",
    "category": "Drivetrain",
    "count": 41,
    "types": 17,
    "from": null,
    "bytes": 33902
   },
   {
    "file": "data/parts/camaro-2010-2015/8.js",
    "category": "Body",
    "count": 63,
    "types": 27,
    "from": null,
    "bytes": 45403
   },
   {
    "file": "data/parts/camaro-2010-2015/9.js",
    "category": "Lighting",
    "count": 22,
    "types": 5,
    "from": null,
    "bytes": 18353
   },
   {
    "file": "data/parts/camaro-2010-2015/10.js",
    "category": "Interior",
    "count": 7,
    "types": 2,
    "from": null,
    "bytes": 6135
   },
   {
    "file": "data/parts/camaro-2010-2015/11.js",
    "category": "Filters & Fluids",
    "count": 32,
    "types": 14,
    "from": null,
    "bytes": 23233
   },
   {
    "file": "data/parts/camaro-2010-2015/12.js",
    "category": "Exhaust & Intake",
    "count": 58,
    "types": 18,
    "from": null,
    "bytes": 45973
   }
  ],
  "count": 686
 },
 "reference": {
  "caveat": "From the 2010, 2012, 2013 and 2014 owner's manuals (carmanual.org copies of GM PDFs), GM SI on mirror sites, GM bulletins, NHTSA recalls and the NHTSA VIN decoder. Paint codes and some tire pressures are third-party. Values change by year; check your own manual and labels.",
  "sections": [
   {
    "id": "maintenance",
    "title": "Maintenance",
    "short": "Schedules and service intervals",
    "intro": "The schedule changed for 2013. Use the one for your model year. No 2015 manual was found; 2015 is assumed to match 2014 (unconfirmed).",
    "blocks": [
     {
      "title": "2010-2012: Maintenance I / II",
      "conf": "verified",
      "src": [
       {
        "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
       }
      ],
      "years": "2010 manual pp. 10-2 to 10-6; applies to 2010-2012",
      "table": {
       "columns": [
        "Item",
        "Interval"
       ],
       "rows": [
        [
         "Oil and filter",
         "When the Oil Life System says so; at least once a year. Maintenance I and II alternate"
        ],
        [
         "Maintenance I",
         "Oil and filter; coolant and washer levels; tire pressure and wear; rotate tires if recommended (every 5,000-8,000 mi); leak check; air filter inspection (dusty); brake inspection (or every 12 months)"
        ],
        [
         "Maintenance II",
         "All of I, plus steering and suspension, cooling system, wipers, body lube, restraints, ATF level, rear-axle level, air filter inspection, cabin filter replacement (or every 12 months)"
        ],
        [
         "First oil change after 25,000 mi",
         "Fuel system and exhaust inspection"
        ],
        [
         "First oil change after 50,000 mi",
         "Replace air filter. Severe: change ATF (hot city traffic, hills, towing, taxi/police) and rear-axle fluid (hills, towing, high-speed or competitive driving)"
        ],
        [
         "First oil change after 100,000 mi",
         "ATF and rear-axle fluid (normal service); spark plugs"
        ],
        [
         "First oil change after 150,000 mi or 5 years",
         "DEX-COOL drain and flush; drive-belt inspection"
        ],
        [
         "Once a year",
         "Starter-switch, shift-lock, ignition-lock and park-brake checks; pressure test cooling system and cap"
        ]
       ]
      }
     },
     {
      "title": "2013-2015: fixed-mileage grid",
      "conf": "verified",
      "src": [
       {
        "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
       }
      ],
      "years": "2014 manual pp. 11-5 and 11-7; the Oil Life System still decides oil changes",
      "table": {
       "columns": [
        "Item",
        "Normal",
        "Severe"
       ],
       "rows": [
        [
         "Rotate tires; oil level and OLS check",
         "every 7,500 mi",
         "every 7,500 mi"
        ],
        [
         "Cabin filter",
         "every 22,500 mi (or 2 years)",
         "same"
        ],
        [
         "Evap system inspection",
         "45k / 90k / 135k",
         "same"
        ],
        [
         "Air filter, except ZL1 and Z/28",
         "45k / 90k / 135k (or 4 years)",
         "same"
        ],
        [
         "Air filter, ZL1 and Z/28",
         "every 15,000 mi",
         "same"
        ],
        [
         "Spark plugs and wires, except ZL1",
         "97,500 mi",
         "97,500 mi"
        ],
        [
         "Spark plugs, ZL1",
         "60,000 / 120,000 mi",
         "same"
        ],
        [
         "ATF (and filter if serviceable)",
         "97,500 mi",
         "every 45,000 mi"
        ],
        [
         "Manual transmission fluid",
         "not listed",
         "every 45,000 mi"
        ],
        [
         "Rear-axle fluid",
         "every 45,000 mi",
         "every 15,000 mi"
        ],
        [
         "Coolant drain and fill",
         "150,000 mi (or 5 years)",
         "same"
        ],
        [
         "Drive-belt inspection",
         "150,000 mi (or 10 years)",
         "same"
        ],
        [
         "Brake fluid and clutch fluid",
         "150,000 mi (or 10 years)",
         "same"
        ]
       ],
       "note": "2010 has no brake or clutch fluid interval and puts rear-axle fluid at 100k normal / 50k severe (see Conflicts)."
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
      "title": "Bulb sizes (exterior)",
      "conf": "verified",
      "src": [
       {
        "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
       },
       {
        "label": "2012 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2012_chevrolet_camaro.pdf"
       },
       {
        "label": "2013 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2013_chevrolet_camaro.pdf"
       },
       {
        "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
       }
      ],
      "years": "2010 (p. 9-41), 2012-13, 2014 (p. 10-48); 2015 assumed as 2014 (unconfirmed). Interior bulbs: see dealer",
      "table": {
       "columns": [
        "Lamp",
        "2010",
        "2012-13",
        "2014-15 facelift"
       ],
       "rows": [
        [
         "Halogen headlamp (base)",
         "H13",
         "H13",
         "Low H11LL, high H9LL"
        ],
        [
         "HID low beam (RS / uplevel)",
         "Not listed (high voltage, dealer service)",
         "same",
         "same"
        ],
        [
         "Front park/turn",
         "3457NAK",
         "3457NAK",
         "T20 (except ZL1); 3457NAK (ZL1)"
        ],
        [
         "Fog",
         "PS24W",
         "PSX26W (except ZL1); H11 (ZL1, 2012 manual)",
         "not listed"
        ],
        [
         "DRL (uplevel)",
         "not listed",
         "PSX26W (2013 manual)",
         "not listed"
        ],
        [
         "Rear turn and tail",
         "3157K",
         "3157K",
         "Stop T20, tail 7444LL, turn W21/5W"
        ],
        [
         "License plate",
         "W5W",
         "W5W",
         "W5WLL"
        ]
       ],
       "note": "3157K does not fit 2014-15 rear lamps. The 2013 table drops the ZL1 H11 fog row; check the fitted bulb."
      }
     },
     {
      "title": "Fuse locations and circuits",
      "conf": "verified",
      "src": [
       {
        "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
       },
       {
        "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
       }
      ],
      "years": "2010 (pp. 9-42 to 9-47) and 2014 (pp. 10-50 to 10-55); GM lists no amp ratings, read them from the lid or fuse",
      "items": [
       "Underhood: engine bay, driver side. Instrument panel: driver end of the dash. Rear: right side of the trunk behind trim (remove 6 net retainers, rear sill plate and 2 trim retainers).",
       "IP block: F1 ignition switch logic, F2 DLC, F3 airbag, F4 cluster, F5 HVAC controller (2010), F6 BCM, F8 battery, F13 display, F14 OnStar, F15/F16 BCM 3/4, F17/F18 power outlets, F19 steering-wheel control backlight, F23 trunk, F24 occupant sensing, F25/F27/F29/F30 BCM 1/8/5/7; CB7/CB26 passenger/driver seat; K10 RAP, K609 trunk relay. 2014: F28 becomes HVAC controller, F29 a spare.",
       "Rear block 2010: F1 garage opener / rear park assist, F2 amp, F3 radio, F5/F6 convertible top, F13 ECM/battery, F14 regulated voltage control, F15 fuel system control module (fuel pump).",
       "Rear block 2014: F1 garage opener / park assist / mirror, F2 amp, F3 radio, F4/F5 convertible top, F7 Real Time Damping, F8 active exhaust flapper, F10 ECM/battery, F11 regulated voltage control, F12 fuel system control module; R2 active exhaust relay."
      ],
      "table": {
       "columns": [
        "Underhood slot",
        "Circuit"
       ],
       "rows": [
        [
         "J-case 41 / 44",
         "Cooling fan high / low"
        ],
        [
         "J-case 42",
         "HVAC blower"
        ],
        [
         "J-case 43",
         "ABS pump"
        ],
        [
         "J-case 6 / 12 / 22",
         "Wiper / starter / brake vacuum pump"
        ],
        [
         "J-case 25 / 26 / 27",
         "Rear windows / front windows / rear defog"
        ],
        [
         "Mini 1 / 2",
         "A/C clutch / TCM"
        ],
        [
         "Mini 3",
         "Intercooler pump (ZL1; 2014 list only)"
        ],
        [
         "Mini 5",
         "ECM main"
        ],
        [
         "Mini 7 / 8",
         "Pre-cat / post-cat O2 sensors"
        ],
        [
         "Mini 9 / 10",
         "Injectors even / odd"
        ],
        [
         "Mini 11 / 14 / 15",
         "Fan relay / MAF and chassis control / ignition"
        ],
        [
         "Mini 16 / 17 / 18",
         "Run-crank IP / SDM ignition / run-crank body"
        ],
        [
         "Mini 19 / 20",
         "TCM ignition / ECM ignition"
        ],
        [
         "Mini 31 / 32 / 33",
         "Mirror / canister vent solenoid / BCM 6"
        ],
        [
         "Mini 34 / 35 / 38 / 40",
         "Sunroof / heated seats / washer / ABS valves"
        ],
        [
         "Mini 46 / 47",
         "HID headlamp left / right"
        ],
        [
         "Mini 50 / 51 / 55 / 56 / 61",
         "Fog / horn / high beam right / high beam left / heated mirror"
        ],
        [
         "Relays",
         "K26 powertrain, K50 run/crank, K55 rear defog, K61 starter, K69 wiper, K612/K613/K614 fans, K617 A/C clutch, K619 wiper speed, K627 HID, K632 brake vacuum pump, K641 intercooler pump (2014)"
        ]
       ]
      }
     },
     {
      "title": "Tire pressure (GM SI)",
      "conf": "verified",
      "src": [
       {
        "label": "2015 Camaro SS GM SI Tire Fitment (lemon-manuals mirror)",
        "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20SS%2C%202D%20Coupe%2C%206.2L%20Eng%20VIN%20J/Repair%20and%20Diagnosis/Quick%20Lookups/Tire%20Fitment/"
       }
      ],
      "years": "2015 SS (GM SI Tire Fitment); your door placard rules",
      "table": {
       "columns": [
        "Fitment",
        "Cold F / R"
       ],
       "rows": [
        [
         "245/45ZR20 front, 275/40ZR20 rear (SS, LT RS)",
         "36 / 36 psi"
        ],
        [
         "285/35ZR20 front and rear (SS 1LE, Performance Pkg.)",
         "36 / 36 psi"
        ]
       ],
       "note": "Same page: lug nut torque 110 lb-ft; rims 8J/9J (SS) and 10J/11J (1LE). 2010-11 SS at 36 psi per tirepressure.com (third-party, unconfirmed)."
      }
     },
     {
      "title": "Tire pressure (third-party)",
      "conf": "unconfirmed",
      "src": [
       {
        "label": "tirepressure.com 2010 Camaro (third-party)",
        "url": "https://tirepressure.com/2010-chevrolet-camaro-tire-pressure"
       },
       {
        "label": "tirepressures.co 2015 Camaro (third-party)",
        "url": "https://tirepressures.co/cars/chevrolet/camaro/2015/"
       }
      ],
      "years": "Years per row; no GM SI page fetched for these trims",
      "table": {
       "columns": [
        "Fitment",
        "Cold F / R",
        "Source"
       ],
       "rows": [
        [
         "P245/55R18 and P245/50R19 (LS/LT)",
         "35 / 35 psi",
         "tirepressure.com 2010; tirepressures.co 2015"
        ],
        [
         "ZL1: 285/35ZR20 F, 305/35ZR20 R",
         "32 / 32 psi",
         "tirepressures.co 2015"
        ],
        [
         "Z/28: 305/30ZR19 F and R",
         "32 / 32 psi (street)",
         "tirepressures.co; the 2014 manual track figure of 32 psi agrees"
        ]
       ],
       "rowSrc": [
        "https://tirepressure.com/2010-chevrolet-camaro-tire-pressure",
        "https://tirepressures.co/cars/chevrolet/camaro/2015/",
        "https://tirepressures.co/cars/chevrolet/camaro/2015/"
       ]
      }
     },
     {
      "title": "Spare, sealant and track loading",
      "conf": "verified",
      "src": [
       {
        "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
       }
      ],
      "years": "2014 manual",
      "items": [
       "Compact spare (if equipped): 60 psi (420 kPa).",
       "Sealant kit: the manual cites 300 kPa (44 psi) before driving; context unclear, use placard pressure after sealing.",
       "ZL1, 1LE and Z/28 on track: driver only, no cargo, tires at least 26 psi (180 kPa); Z/28 only 32 psi (221 kPa) (pp. 9-9 / 9-10).",
       "Z/28 track alignment (p. 9-10): front caster 5.9 ± 0.5°, camber -1.5 ± 0.5°, total toe 0.1 ± 0.2°; rear camber -1.0 ± 0.5°, total toe 0.1 ± 0.2°, thrust 0 ± 0.2°. Track coolant may be 30/70 coolant/water and the hood-scoop water deflector can be removed (hot track days)."
      ]
     },
     {
      "title": "Towing",
      "conf": "verified",
      "src": [
       {
        "label": "2010 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2010_chevrolet_camaro.pdf"
       },
       {
        "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
       }
      ],
      "years": "2010 (p. 8-53) and 2014 (p. 9-60)",
      "items": [
       "2010 (all) and 2014 except ZL1 and Z/28: 1,000 lb (454 kg) trailer; tongue weight 10-15% of loaded trailer. The 2014 manual adds \"even that can be too heavy\". This is an owner's manual limit, not an SAE J2807 rating.",
       "ZL1 and Z/28: \"neither designed nor intended to tow a trailer.\"",
       "Payload: on the door-jamb Tire and Loading label. The 340 kg and 453 kg figures in the 2014 manual are worked examples, not Camaro ratings."
      ]
     },
     {
      "title": "Paint codes",
      "conf": "unconfirmed",
      "src": [
       {
        "label": "Phastek Camaro paint codes (third-party)",
        "url": "https://www.phastekperformance.com/blog/camaro-paint-codes/"
       },
       {
        "label": "zl1registry paint codes (third-party)",
        "url": "https://zl1registry.com/paint-codes.php"
       },
       {
        "label": "paintref 2015 Camaro (third-party)",
        "url": "https://paintref.com/cgi-bin/colorcodedisplay.cgi?manuf=GM&model=Camaro&year=2015"
       }
      ],
      "years": "2010-2015; third-party lists. Confirm with the SPID label in the trunk",
      "table": {
       "columns": [
        "Years",
        "Color",
        "RPO",
        "WA"
       ],
       "rows": [
        [
         "2010",
         "Aqua Blue Met.",
         "GBD",
         "WA638R"
        ],
        [
         "2010",
         "Red Jewel Tintcoat",
         "GAQ",
         "WA301N"
        ],
        [
         "2010-11",
         "Synergy Green",
         "GHS",
         "WA708S"
        ],
        [
         "2010-12",
         "Cyber Gray Met.",
         "GBV",
         "WA637R"
        ],
        [
         "2010-12",
         "Imperial Blue Met.",
         "GAP",
         "WA403P"
        ],
        [
         "2010-13",
         "Victory Red",
         "GCN",
         "WA9260"
        ],
        [
         "2010-13",
         "Rally Yellow",
         "GCO",
         "WA9414"
        ],
        [
         "2010-13",
         "Inferno Orange Met.",
         "GCR",
         "WA502Q"
        ],
        [
         "2010-15",
         "Summit White",
         "GAZ",
         "WA8624"
        ],
        [
         "2010-15",
         "(Gloss) Black",
         "GBA",
         "WA8555"
        ],
        [
         "2010-15",
         "Silver Ice Met.",
         "GAN",
         "WA636R"
        ],
        [
         "2012",
         "Carbon Flash",
         "GAR",
         "WA501Q"
        ],
        [
         "2012-15",
         "Ashen Gray Met.",
         "GLJ",
         "WA810T"
        ],
        [
         "2012-15",
         "Crystal Red Tintcoat",
         "GBE",
         "WA505Q"
        ],
        [
         "2013",
         "Kinetic Blue",
         "GHF",
         "WA720S"
        ],
        [
         "2013-14",
         "Blue Ray Met.",
         "GXH",
         "WA122V"
        ],
        [
         "2014-15",
         "Red Hot",
         "G7C",
         "WA130X"
        ],
        [
         "2014-15",
         "Bright Yellow",
         "G7D",
         "WA131X"
        ],
        [
         "2014-15",
         "Red Rock Met.",
         "G7P",
         "WA138X"
        ],
        [
         "2014",
         "Deep Magenta",
         "G7F",
         "WA133X"
        ],
        [
         "2015",
         "Blue Velvet Met.",
         "G1M",
         "WA410Y"
        ],
        [
         "2015",
         "Lime Rock Green (disputed)",
         "G7J",
         "WA136X"
        ]
       ],
       "disputedRows": [
        21
       ],
       "note": "zl1registry's 2012 ZL1 list omits some colors Phastek shows; probably ZL1 availability, not a code error."
      }
     }
    ]
   },
   {
    "id": "vin",
    "title": "VIN and RPO codes",
    "short": "VIN digits, SPID label, RPOs",
    "blocks": [
     {
      "title": "SPID (RPO) label",
      "conf": "verified",
      "src": [
       {
        "label": "2014 Camaro owner's manual (GM PDF, carmanual.org copy)",
        "url": "https://carmanual.org/OwnersManual/chevrolet/2014_chevrolet_camaro.pdf"
       }
      ],
      "years": "2014 manual p. 12-1",
      "text": "The Service Parts Identification label is in the trunk: VIN, model, paint and every factory RPO. Do not remove it. Phastek says it is under the trunk carpet liner, driver side (unconfirmed)."
     },
     {
      "title": "VIN positions",
      "conf": "verified",
      "src": [
       {
        "label": "NHTSA vPIC VIN decoder API (GM-submitted patterns)",
        "url": "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/2G1FZ1EE*F9?format=json"
       }
      ],
      "years": "From NHTSA vPIC decodes of GM-submitted data; positions 8 and 10 are reliable, trim is not (see Conflicts)",
      "table": {
       "columns": [
        "Position",
        "Meaning"
       ],
       "rows": [
        [
         "1-3",
         "2G1 (GM Canada, Oshawa-built Chevrolet)"
        ],
        [
         "4-5 (series)",
         "FA-FF V6 trims; FG, FH, FJ, FK, FT SS; FL, FZ ZL1 / Z/28. Trim names returned are inconsistent"
        ],
        [
         "6 (body)",
         "1 coupe, 3 convertible"
        ],
        [
         "7 (restraint)",
         "E coupe, D convertible"
        ],
        [
         "8 (engine)",
         "V = LLT 3.6 (2010-11), 3 = LFX 3.6 (2012-15), W = LS3, J = L99, P = LSA (ZL1), E = LS7 (Z/28)"
        ],
        [
         "10 (year)",
         "A 2010, B 2011, C 2012, D 2013, E 2014, F 2015"
        ],
        [
         "11 (plant)",
         "9 = Oshawa, ON"
        ]
       ],
       "disputedRows": [
        1
       ]
      }
     },
     {
      "title": "Key RPO codes",
      "conf": "verified",
      "src": [
       {
        "label": "2015 Camaro SS GM SI Tire Fitment (lemon-manuals mirror)",
        "url": "https://lemon-manuals.la/Chevrolet/2015/Camaro%20SS%2C%202D%20Coupe%2C%206.2L%20Eng%20VIN%20J/Repair%20and%20Diagnosis/Quick%20Lookups/Tire%20Fitment/"
       },
       {
        "label": "2014 Camaro GM SI (lemon-manuals mirror): suspension and brake tables",
        "url": "https://lemon-manuals.la/Chevrolet/2014/Camaro%20ZL1%2C%202D%20Convertible%2C%20Automatic%20Trans/Repair%20and%20Diagnosis/Suspension/"
       }
      ],
      "years": "From the GM SI as cited in the master guide",
      "items": [
       "Engines: LLT, LFX, LS3, L99, LSA, LS7.",
       "Transmissions: MYC (6L80); M10 / MG9 / MM6 (TR6060 family). Whether the ZL1 manual is MG9 is unknown.",
       "Suspension: FE4 / FE5 / FE6. Packages: 1LE, Z/28. Brakes: J56 / J57; JL9 (base)."
      ]
     }
    ]
   },
   {
    "id": "codes",
    "title": "Trouble codes",
    "short": "OBD codes from GM bulletins",
    "intro": "New GM bulletins only; Common problems already covers 12-06-01-009, PIC5984B, PIP4735C, PIP5257A, PIP5097A, SC 13313 and PI1413. Bulletin 21-NA-124 (EVAP P0442/P0455) is trucks only and does not apply to the Camaro.",
    "blocks": [
     {
      "title": "Codes with GM bulletins",
      "conf": "verified",
      "src": [
       {
        "label": "GM PIP4819A (NHTSA)",
        "url": "https://static.nhtsa.gov/odi/tsbs/2013/MC-10112844-9999.pdf"
       },
       {
        "label": "GM PIP3423N (NHTSA)",
        "url": "https://static.nhtsa.gov/odi/tsbs/2017/MC-10137734-9999.pdf"
       },
       {
        "label": "GM PIP5191C (NHTSA)",
        "url": "https://static.nhtsa.gov/odi/tsbs/2018/MC-10151821-9999.pdf"
       },
       {
        "label": "GM PIP5191B (NHTSA)",
        "url": "https://static.nhtsa.gov/odi/tsbs/2017/MC-10118244-9999.pdf"
       },
       {
        "label": "GM PIP4578B (NHTSA)",
        "url": "https://static.nhtsa.gov/odi/tsbs/2017/MC-10126975-9999.pdf"
       },
       {
        "label": "GM 09-06-04-026I (NHTSA)",
        "url": "https://static.nhtsa.gov/odi/tsbs/2014/MC-10114245-9999.pdf"
       }
      ],
      "years": "Years and engines per row",
      "table": {
       "columns": [
        "Codes",
        "Bulletin",
        "Applies to",
        "Likely cause per GM"
       ],
       "rows": [
        [
         "P0300-P0308 (misfire)",
         "PIP4819A",
         "2010-13 Camaro SS (RPO list includes LSA, so ZL1 coverage is inferred)",
         "Spark plug wire loose at the coil end; replace the wire if loose"
        ],
        [
         "P0016-P0019, P0008, P0009 (two or more)",
         "PIP3423N",
         "2010-15 3.6 LLT/LFX",
         "First check timing chains/tensioners (12-06-01-009). If no root cause: the crank reluctor pressed on the rear of the crankshaft may have moved; check with a borescope through the CKP hole; replace the crankshaft if moved"
        ],
        [
         "P05CE / P05CF, cold-start tick or oil pressure fluctuation",
         "PIP5191B / C",
         "2010-15 3.6 LLT/LFX",
         "Oil pump pick-up tube to block seal compressed. Tick 3-15 s after sitting over 6 h, more common past 50,000 mi. Drop the pan and replace the seal"
        ],
        [
         "P0068, P0121, P0506, P0507, P1516, P2101, P2119, P2176; idle surge / reduced power",
         "PIP4578B",
         "2010-18 Camaro V8",
         "Carbon in the throttle body. Clean per SI, then do the idle-learn reset with a scan tool or the codes return"
        ],
        [
         "(tool note)",
         "09-06-04-026I",
         "2010-15 V8; 2012-15 LFX",
         "How dealers detect non-GM calibrations; relevant to warranty claims on tuned cars"
        ]
       ],
       "rowSrc": [
        "https://static.nhtsa.gov/odi/tsbs/2013/MC-10112844-9999.pdf",
        "https://static.nhtsa.gov/odi/tsbs/2017/MC-10137734-9999.pdf",
        "https://static.nhtsa.gov/odi/tsbs/2018/MC-10151821-9999.pdf",
        "https://static.nhtsa.gov/odi/tsbs/2017/MC-10126975-9999.pdf",
        "https://static.nhtsa.gov/odi/tsbs/2014/MC-10114245-9999.pdf"
       ]
      }
     },
     {
      "title": "HVAC actuator codes (GM SI)",
      "conf": "verified",
      "src": [
       {
        "label": "2014 Camaro GM SI (lemon-manuals mirror): temperature valve actuator",
        "url": "https://lemon-manuals.la/Chevrolet/2014/Camaro%20ZL1%2C%202D%20Convertible%2C%20Automatic%20Trans/Repair%20and%20Diagnosis/HVAC/HVAC%20Control%20Systems/HVAC%20System%20-%20Manual/Repair%20Instructions/Temperature%20Valve%20Actuator%20Replacement/"
       },
       {
        "label": "GM SI 2009-13 Camaro (diagnostdata mirror): manual-hvac",
        "url": "https://diagnostdata.com/chevrolet/camaro/v-2009-2013/remont/manual-hvac/"
       }
      ],
      "years": "Manual HVAC",
      "text": "B0408 temperature door actuator; B0233 mode door; B0223 recirculation; B023A actuator supply voltage. B101E 4B after a relearn: commonly an actuator with stripped gears (see Blend door guide)."
     },
     {
      "title": "Recalls",
      "conf": "verified",
      "src": [
       {
        "label": "NHTSA recalls API, Camaro 2010-2015",
        "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=chevrolet&model=camaro&modelYear=2014"
       }
      ],
      "years": "2010-2015",
      "text": "The NHTSA API re-pulled 2026-10-20 returns the same 10 campaigns already in Safety; none cites a code. 14V346 (ignition key) is listed for 2010-2014, not 2015."
     }
    ]
   }
  ]
 },
 "resolved": [
  "2013-14 torque tables: resolved for 2014 (matches 2015); 2013 still bracketed (Guides).",
  "Z/28-specific LCA and shock-mount torque: none; Z/28 tables match ZL1/generic (Guides).",
  "6.2 spark plug 15 vs 20 N·m: new 20, reused 15 (Conflicts).",
  "Lug torque: 2015 SI tire fitment says 110 lb-ft (Quick reference).",
  "Maintenance, bulbs, fuse map, towing, placard pressures, VIN/SPID, paint, alternator/starter/water pump/fuel pump/blend door, 4 new code bulletins, Z/28 track alignment (Reference and Guides)."
 ]
};
