// Rod definitions

const rods = [
      { id:"twig", name:"Twig Rod", haste:10, luck:5, steady:5, price:0, unlock:"Free starter rod" },
      { id:"splitbranch", name:"Splitbranch Rod", haste:88, luck:-5, steady:44, alt:{haste:-5,luck:88,steady:0}, price:275, unlock:"Purchase for $275", passive:"Randomly changes between two stat sets after every catch." },
      { id:"plastic", name:"Plastic Rod", haste:50, luck:40, steady:30, price:100, unlock:"Purchase for $100" },
      { id:"fiber", name:"Fiber Rod", haste:50, luck:45, steady:80, price:500, unlock:"Purchase for $500" },
      { id:"carbon", name:"Carbon Rod", haste:37.5, luck:57, steady:60, price:750, unlock:"Purchase for $750" },
      { id:"bone", name:"Bone Rod", haste:100, luck:0, steady:-10, price:200, unlock:"Purchase for $200" },
      { id:"electromagnetic", name:"Electromagnetic Rod", haste:90, luck:10, steady:0, price:620, unlock:"Purchase for $620", passive:"Only hooks item-type catches." },
      { id:"snowflake", name:"Snowflake Rod", haste:100, luck:111, steady:11.11, price:888, unlock:"Purchase for $888", passive:"All stats decay by 1% every 6 catches. At 0%, the rod dematerializes." },
      { id:"gravidoomer", name:"Gravidoomer", haste:94.1, luck:183, steady:-6.23, price:5000, requirement:"gravitas", unlock:"Complete Gravitas Waterfall and pay $5,000", passive:"40% chance for each shake to stay still 2 extra seconds. 50% chance for Gravitational mutation (1.8×)." },
      { id:"aurora", name:"Rod of the Aurora Veil", haste:85, luck:100, steady:33, price:10000, requirement:"aurora", unlock:"Complete Aurora Pond and pay $10,000", passive:"At night: double Luck, triple Steadiness, and 30% Aurora mutation (2.33×). During day: Steadiness is halved and Aurora mutation chance is 10%." },
      { id:"premium", name:"Premium Rod", haste:100, luck:100, steady:100, price:2000, shopLocation:"aurora", unlock:"Purchase for $2,000 in Aurora Pond" },
      { id:"luckiest", name:"Luckiest Rod", haste:-5, luck:277, steady:5, price:2002, shopLocation:"aurora", unlock:"Purchase for $2,002 in Aurora Pond" },
      { id:"fortuneous", name:"Fortuneous Rod", haste:37, luck:177, steady:77, price:2777, shopLocation:"aurora", unlock:"Purchase for $2,777 in Aurora Pond", passive:"27% chance to duplicate a caught fish." },
      { id:"bellona", name:"Bellona's Harpoon", haste:145, luck:200, steady:222, price:50000, requirement:"all", unlock:"Complete all required bestiaries and pay $50,000", passive:"A perfect minigame duplicates the fish with War's Ruin mutation (2.2×)." },
      { id:"bonetrapper", name:"Bonetrapper Rod", haste:100, luck:75, steady:50, price:800, shoreOnly:true, unlock:"Purchase at Shark Shores for $800", passive:"20% chance to trap and instantly catch the fish." },
      { id:"harpoon", name:"Harpoon Rod", haste:70, luck:95, steady:20, price:650, shoreOnly:true, requirement:"shark25", unlock:"Reach 25% Shark Shores bestiary and pay $650", passive:"Against sharks: +10 shake opportunities and every shake lasts 1 extra second." },
      { id:"fury", name:"Rod of Fury", haste:-20, luck:230, steady:100, price:1100, shoreOnly:true, unlock:"Purchase at Shark Shores for $1,100" },
      { id:"anglersEye", name:"Angler's Eye", haste:88, luck:188, steady:88, price:4888, shoreOnly:true, requirement:"shark50", unlock:"Reach 50% Shark Shores bestiary and pay $4,888", passive:"Each missed shake has an 8.8% chance to grant 20% progress and slow the next 3 shakes by 88%." },
      { id:"megaLoad", name:"The Mega-Load 'Em", haste:200, luck:222, steady:75, price:55555, shoreOnly:true, requirement:"shark", unlock:"Complete Shark Shores and pay $55,555", passive:"Periodic progress, 33% duplication, miss-based next-catch Luck, +33% mutation odds, and mystery companions." },

      {id:"coral",name:"Coral Rod",haste:43,luck:75,steady:20,price:800,shopLocation:"grandreef",superlure:true,unlock:"Purchase for $800 in The Grand Reef",passive:"Every third shake becomes Coral: click for +20% progress, miss for -20%. 10% Coral mutation (1.44×). Superlure."},
      {id:"colorful",name:"Colorful Rod",haste:100,luck:50,steady:50,price:1500,shopLocation:"grandreef",requirement:"grandreefUnlocked",unlock:"Purchase for $1,500 after unlocking The Grand Reef",passive:"Stats change based on the last fish caught. Mythical or below: 50 Luck and 50 Steadiness. Above Mythical: 130 Luck and 100 Steadiness."},
      {id:"fishkeeper",name:"Fishkeeper",haste:65,luck:120,steady:40,price:2200,shopLocation:"grandreef",requirement:"grandreef25",superlure:true,unlock:"Reach 25% Grand Reef bestiary and pay $2,200",passive:"Each missed shake makes later shakes 5% longer for that catch, stacking to 30%. Superlure."},
      {id:"depths",name:"Depths Rod",haste:0,luck:165,steady:57,price:1750,shopLocation:"grandreef",superlure:true,canCoral:true,unlock:"Purchase for $1,750 in The Grand Reef",passive:"Can fish inside Coral. Superlure."},
      {id:"coralguard",name:"The Coralguard",haste:300,luck:323,steady:-33,price:45000,shopLocation:"grandreef",requirement:"grandreef100",canCoral:true,unlock:"Complete The Grand Reef bestiary and pay $45,000",passive:"Starts at 33% progress. Shakes have 20% chance for double progress. All catches are Coral Mutated; perfect catches become Sacred (4×). +10% fish value."},
      {id:"sunslasher",name:"SunSlasher V1",haste:150,luck:300,steady:90,price:88000,requirement:"eventMaster",superlure:true,unlock:"Complete Eclipse, Drought, Acid Rain, Flood, and Grand Reef bestiaries; pay $88,000",passive:"Every 3 seconds, 20% chance to slash for +20% progress and stun shakes for 2 seconds. 50% Tanned (2×), 22% Heated (2.2×), 8% Freshfried (4.1×). Superlure."},

    ];
