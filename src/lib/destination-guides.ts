export type GuideSection = { heading: string; paragraphs: string[] };

export type DestinationGuide = {
  slug: string;
  h1: string;
  subtitle: string;
  seoTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  geo: { latitude: number; longitude: number };
  touristType: string[];
  schemaDescription: string;
  intro: string[];
  sections: GuideSection[];
  related: { label: string; hash: string }[];
};

export const SITE_URL = "https://www.mountaindelights.in";

export const destinationGuides: DestinationGuide[] = [
  {
    slug: "ladakh",
    h1: "Ladakh",
    subtitle: "Trans-Himalaya · Union Territory · Best May–September",
    seoTitle: "Ladakh Travel Guide — Cold Desert Trips & Itineraries | Mountain Delights",
    metaDescription:
      "Plan a trip to Ladakh with Mountain Delights — cold desert valleys, high-altitude monasteries and India's highest motorable passes. Real routes, acclimatisation advice and homestay picks.",
    ogTitle: "Ladakh Travel Guide — Cold Desert Trips & Itineraries",
    ogDescription:
      "Cold desert valleys, monasteries above the treeline, and the highest motorable passes in the country. Planned by guides who have run this route for over a decade.",
    twitterTitle: "Ladakh Travel Guide — Mountain Delights",
    twitterDescription:
      "Cold desert valleys, monasteries above the treeline, and the highest motorable passes in the country.",
    geo: { latitude: 34.1526, longitude: 77.5771 },
    touristType: ["Adventure travellers", "Culture and heritage travellers", "Small-group travellers"],
    schemaDescription:
      "Cold desert valleys, monasteries above the treeline, and the highest motorable passes in India, in the Trans-Himalaya region.",
    intro: [
      "Ladakh doesn't ease you in. You land in Leh at 3,500 metres and the altitude makes the decision for you: rest first, sightsee later. That is the first thing we tell everyone who asks about this trip, and it is the reason most Ladakh itineraries online are wrong — they are written for people who have already acclimatised, not for the first 48 hours that decide whether the rest of the trip works.",
    ],
    sections: [
      {
        heading: "What this trip actually looks like",
        paragraphs: [
          "Years of running routes here have taught us the shape that works: two slow days in Leh, then out to the valleys — Nubra over Khardung La, Pangong along the Chang La road, Tso Moriri if you have four extra days. The monasteries at Hemis, Thiksey and Diskit are not detours, they are the spine of the route: some of the oldest continuously running Buddhist institutions in the country, built into cliffsides that make the architecture half the point.",
          "Day one and two are deliberately dull. A short walk through Leh's old town below the palace, the Central Asian Museum, dinner early, three litres of water. On day three we drive out to Sham — Alchi's eleventh-century wall paintings, Likir, the confluence at Nimmu — because it is all under 3,300 metres and lets your body catch up while you still see something. Only after that do we take the Khardung La road north.",
          "In Nubra we stay in village homestays at Hunder and Turtuk rather than the dune-side tent camps. Turtuk, a Balti village that only opened to visitors in 2010, is where the trip usually turns for people: apricot orchards, buckwheat fields, a language and cuisine that belong to the other side of the mountains. Pangong we treat as one night, not two — the lake is best at dawn and the road back over Chang La is long.",
          "Road timing matters more than any other planning decision. The Manali–Leh highway usually opens late May and the Srinagar–Leh road a little earlier; Khardung La and Chang La are cleared daily but can close for a day after fresh snow. If Hemis Tsechu falls inside your dates — the masked cham dances happen on the tenth day of the fifth Tibetan month, usually late June or early July — build the itinerary around it and book beds two months ahead.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "May to September, with passes typically opening by late May and closing in early October depending on snowfall. June is the quiet window — everything is open, the light is hard and clean, and Leh is not yet full. July and August bring the crowds and the only real rain Ladakh gets; the plus side is that Zanskar and the high lakes are at their most accessible. September is the best month for photography: thin air, low sun, poplars turning gold along the Indus. Winter travel is possible for the Chadar route and snow leopard tracking in Hemis National Park, but that is a different, harder trip.",
        ],
      },
      {
        heading: "What we handle",
        paragraphs: [
          "Six travellers, two guides. Fixed departures or custom dates. Homestays over hotels wherever the village has one, and permits for Nubra, Pangong and Tso Moriri arranged before you land. Standard trips run seven to eleven days from Leh, including the acclimatisation days we refuse to cut. Oxygen, a first-aid kit and a driver who has run these passes for years travel with every group.",
        ],
      },
    ],
    related: [
      { label: "Acclimatising in Leh without losing three days to a headache", hash: "first-time-ladakh" },
      { label: "Six Himalayan monastery festivals worth planning a trip around", hash: "monastery-festivals" },
    ],
  },
  {
    slug: "himachal",
    h1: "Himachal Pradesh",
    subtitle: "Western Himalaya · 900–4,500 m · Best March–June, September–November",
    seoTitle: "Himachal Pradesh Travel Guide — Spiti, Kinnaur & Tirthan Itineraries | Mountain Delights",
    metaDescription:
      "A Himachal Pradesh travel guide built from the road: Kinnaur apple country, the Spiti circuit, quiet Tirthan valleys. Best months, pass timings and village stays.",
    ogTitle: "Himachal Pradesh Travel Guide — Spiti, Kinnaur & Tirthan",
    ogDescription:
      "Apple orchards in Kinnaur, river towns along the Beas, and the long road into Spiti. Trips planned by guides who drive these valleys every season.",
    twitterTitle: "Himachal Pradesh Travel Guide — Mountain Delights",
    twitterDescription: "Kinnaur, Spiti and Tirthan — how to travel the most varied mountain state in India.",
    geo: { latitude: 31.1048, longitude: 77.1734 },
    touristType: ["Road-trip travellers", "Trekkers", "Slow travellers"],
    schemaDescription:
      "A Western Himalayan state spanning apple-growing valleys in Kinnaur, the high cold desert of Spiti, and forested river country around Tirthan.",
    intro: [
      "Himachal is the state people think they know and almost never see. Most visitors get as far as Mall Road and a paragliding slot; the state's real geography starts three hours past that, where the Sutlej cuts a gorge into Kinnaur and the road stops pretending to be a highway.",
    ],
    sections: [
      {
        heading: "What this trip actually looks like",
        paragraphs: [
          "The classic loop we run is anticlockwise: Shimla to Sarahan, Sangla and Chitkul, over to Kalpa for the morning view of Kinnaur Kailash, then Nako, Tabo and Kaza in Spiti, and out over Kunzum La and the Atal Tunnel to Manali. Ten to fourteen days, and every one of those stops earns its place. Chitkul is the last village before the Tibet border; Tabo's mud-walled monastery has been in use since 996 CE and its interior murals are why people call it the Ajanta of the Himalaya.",
          "In Spiti we base out of Kaza and run day trips rather than moving hotel every night: Key monastery at first light, Kibber and Langza for the fossil beds, Dhankar's crumbling fort-gompa above the confluence, and Pin Valley if the bridge is in. Homestays in Langza and Komic are basic — dry toilets, shared dining room, buckwheat momos — and are the single best part of the trip.",
          "If you want green instead of grey, the other Himachal is Tirthan and Jibhi in the Kullu district's outer valleys, on the edge of the Great Himalayan National Park. Trout streams, cedar forest, guesthouses run by families rather than chains, and a two-day walk up to Serolsar Lake from Jalori Pass. It suits travellers who want mountains without long driving days, and it stays open when Spiti does not.",
          "Practical notes that change trips: the Kinnaur road is prone to shooting stones and short landslide closures in monsoon, Kunzum La usually opens in late May and shuts by early November, and the Atal Tunnel has made Lahaul a year-round day trip from Manali. Fuel between Reckong Peo and Kaza is scarce — Kaza's pump is the highest retail outlet in the world and it does run dry.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "March to June for the lower and middle valleys — rhododendron in April, apple blossom in Kinnaur in early May. Spiti opens fully in June and stays comfortable through September; late September and early October give you the clearest skies and the harvest. Avoid mid-July to late August in Kinnaur and Kullu, when monsoon closes roads without warning. December to February is only for Shimla, Narkanda and the snow-run into Spiti via Kaza airstrip road for experienced winter travellers.",
        ],
      },
      {
        heading: "What we handle",
        paragraphs: [
          "Small groups of six, one vehicle, a driver who lives in the valley you are driving through. We build in a rest day at Kalpa or Kaza because the Shimla-to-Spiti gain is steeper than people expect. Inner-line permits for Kinnaur travel, homestay bookings in Spiti's high villages, and a fallback itinerary in writing for the days the road decides otherwise.",
        ],
      },
    ],
    related: [
      { label: "Driving the Spiti circuit in late October, before the passes close", hash: "spiti-in-winter" },
      { label: "Six Himalayan monastery festivals worth planning a trip around", hash: "monastery-festivals" },
    ],
  },
  {
    slug: "uttarakhand",
    h1: "Uttarakhand",
    subtitle: "Central Himalaya · 1,500–7,800 m · Best April–June, September–November",
    seoTitle: "Uttarakhand Travel Guide — Valley of Flowers, Char Dham & Kumaon Treks | Mountain Delights",
    metaDescription:
      "Uttarakhand trip planning from guides on the ground: Valley of Flowers timings, Char Dham logistics, Kumaon's quiet meadows, and which months each route is open.",
    ogTitle: "Uttarakhand Travel Guide — Garhwal & Kumaon Itineraries",
    ogDescription:
      "Pilgrim roads, the Valley of Flowers bloom, and high meadows above Munsiyari. Routes planned around what is actually open.",
    twitterTitle: "Uttarakhand Travel Guide — Mountain Delights",
    twitterDescription: "Valley of Flowers, Char Dham and the quieter Kumaon side of the Central Himalaya.",
    geo: { latitude: 30.0668, longitude: 79.0193 },
    touristType: ["Trekkers", "Pilgrimage travellers", "Nature and wildlife travellers"],
    schemaDescription:
      "The Central Himalayan state of Garhwal and Kumaon: Char Dham pilgrim routes, the Valley of Flowers, and high-altitude meadows above Munsiyari.",
    intro: [
      "Uttarakhand runs on two clocks. Garhwal follows the temple calendar — the shrines open on Akshaya Tritiya and close around Diwali, and everything from hotel rates to road traffic moves with them. Kumaon follows the weather, and stays quiet almost all year. Deciding which half of the state you are travelling in is the whole planning problem.",
    ],
    sections: [
      {
        heading: "What this trip actually looks like",
        paragraphs: [
          "On the Garhwal side the route most people want is Rishikesh to Joshimath, then Govindghat, Ghangaria and the day walk into the Valley of Flowers, with Hemkund Sahib at 4,330 metres as an optional hard morning. The valley only performs in monsoon — late July to mid-August is peak bloom, which means you are walking in rain and leech country and it is still worth it. Auli, ten minutes by ropeway above Joshimath, is the easiest big-mountain viewpoint in the state: Nanda Devi front and centre, no trek required.",
          "Kedarnath is a 16 km walk from Gaurikund, or a helicopter shuttle if knees say so; we prefer travellers stay the night at the shrine rather than turning around, because the valley at 4 a.m. with the Mandakini running and nobody on the path is the actual experience. Badrinath is roadhead-accessible, which makes Mana village — the last village before Tibet — an easy add-on.",
          "Kumaon is the other trip entirely. Base out of Kasar Devi or Binsar for the 300 km Himalayan skyline, walk the ridge villages around Jageshwar's deodar-shaded temple cluster, then push east to Munsiyari for Panchachuli. From there the walks are real: Khaliya Top in two days, Pindari or Kafni glacier in five or six, Nanda Devi East base camp for people with time. Village homestays through the KMVN and family-run lodges make this cheaper than the Garhwal circuit.",
          "Logistics worth knowing: Char Dham travel now requires online registration, Joshimath has had ground-subsidence closures that shift accommodation season to season, and Rishikesh-to-Joshimath is a nine-hour drive that people routinely underestimate. Rain in September can close the Alaknanda valley road for a day at a time.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "April to June for the shrines, the rhododendron forests and Kumaon's clearest pre-monsoon mornings. July and August only for the Valley of Flowers, and only if you accept the rain. Mid-September to early November is the best all-round window: post-monsoon visibility, open trekking routes, cold nights, and shrines still open until the closing dates. December to March turns Kumaon into a quiet snow trip — Auli, Chopta and Munsiyari — while high passes and glacier routes shut down.",
        ],
      },
      {
        heading: "What we handle",
        paragraphs: [
          "Guided groups of six with a local trek leader for anything above 3,000 metres, registered permits for Char Dham and Valley of Flowers entry, forest-department bookings for Binsar, and mule or porter support where it is needed. Trips run five days for a Kumaon loop to twelve for the full Garhwal circuit with a trek attached.",
        ],
      },
    ],
    related: [
      { label: "Six Himalayan monastery festivals worth planning a trip around", hash: "monastery-festivals" },
      { label: "Acclimatising in Leh without losing three days to a headache", hash: "first-time-ladakh" },
    ],
  },
  {
    slug: "sikkim",
    h1: "Sikkim",
    subtitle: "Eastern Himalaya · 300–8,586 m · Best March–May, October–mid-December",
    seoTitle: "Sikkim Travel Guide — Kanchenjunga Views, Gompas & North Sikkim Trips | Mountain Delights",
    metaDescription:
      "Plan Sikkim properly: Kanchenjunga viewpoints, rhododendron season in Yumthang, Goecha La trek logistics, and the permits North Sikkim actually requires.",
    ogTitle: "Sikkim Travel Guide — Kanchenjunga, Gompas & Yumthang",
    ogDescription:
      "Rhododendron forests, cliff-built monasteries and the third-highest mountain on earth from your breakfast table.",
    twitterTitle: "Sikkim Travel Guide — Mountain Delights",
    twitterDescription: "Kanchenjunga views, Buddhist gompas and the high valleys of North Sikkim.",
    geo: { latitude: 27.533, longitude: 88.5122 },
    touristType: ["Trekkers", "Culture and heritage travellers", "Nature and wildlife travellers"],
    schemaDescription:
      "An Eastern Himalayan state of Kanchenjunga viewpoints, rhododendron forests and Buddhist monasteries, with high valleys in North Sikkim.",
    intro: [
      "Sikkim is small enough to cross in two days and steep enough that you never will. Roads here climb 2,000 metres in an hour of driving, and the state's whole character — organic-farming-only since 2016, spotless towns, monasteries perched where no monastery should fit — comes from that verticality.",
    ],
    sections: [
      {
        heading: "What this trip actually looks like",
        paragraphs: [
          "The standard week starts in Gangtok, but we usually move travellers west first, before altitude and traffic. Ravangla for the Buddha Park and the ridge walk, Pelling for the Kanchenjunga sunrise and the ruins at Rabdentse, and Yuksom — the state's first capital and the trailhead for Goecha La — for two nights in a village that has never felt like a resort town. Pemayangtse and Tashiding are the monasteries worth timing your day around; Tashiding's Bumchu festival in February or March draws people from across the state.",
          "North Sikkim is the harder, better half. Lachen and Lachung are the base villages, with Gurudongmar Lake at 5,430 metres reached on a pre-dawn run from Lachen, and the Yumthang valley — the Valley of Flowers of the east — an hour above Lachung. Both need protected-area permits arranged in Gangtok through a registered operator, and both are subject to army road closures with no notice. Plan a spare day.",
          "For walkers, Goecha La is the trek: eight to eleven days from Yuksom through Tshoka and Dzongri, sleeping in trekker huts, with the viewpoint at dawn giving you Kanchenjunga's south-east face at close range. The shorter version, Dzongri Top and back in five days, delivers most of the view for half the commitment. Rhododendron in the Barsey sanctuary peaks in April and is the reason to accept the spring haze.",
          "Practical detail: foreign nationals need an Inner Line Permit for Sikkim, obtainable at Rangpo or online, and separate protected-area permits for North Sikkim, Tsomgo Lake and Nathu La. Bagdogra is the airport, Pakyong occasionally weather-cancels, and the NH10 along the Teesta from Siliguri washes out during heavy monsoon.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "Mid-March to mid-May for rhododendrons, magnolia and the greenest state in India — but expect cloud on the peaks after 10 a.m. October to mid-December is the mountain window: after the monsoon washes the air, Kanchenjunga stays out most of the morning and trekking conditions are at their best. Late June to September is heavy monsoon with landslide risk on NH10, and January to February brings snow closures at Nathu La and Yumthang, though Gangtok and Pelling stay open and empty.",
        ],
      },
      {
        heading: "What we handle",
        paragraphs: [
          "Registered permits for North Sikkim and the border passes, groups of six with a Sikkim-licensed guide, and trek support with cook and porters for Goecha La and Dzongri. Homestays in Yuksom, Lachen and Kaluk where the village runs them. Trips run six to eight days for the circuit, or eleven with the trek.",
        ],
      },
    ],
    related: [
      { label: "Six Himalayan monastery festivals worth planning a trip around", hash: "monastery-festivals" },
      { label: "Why the Western Ghats are best in the shoulder months", hash: "munnar-monsoon" },
    ],
  },
  {
    slug: "kerala",
    h1: "Kerala — Western Ghats",
    subtitle: "South India · 900–2,695 m · Best October–March",
    seoTitle: "Kerala Hills Travel Guide — Munnar, Periyar & Western Ghats Itineraries | Mountain Delights",
    metaDescription:
      "A Western Ghats travel guide for Kerala: Munnar tea country, Eravikulam's shola grasslands, Periyar's lake safaris and Vagamon's quiet ridges. Best months and routes.",
    ogTitle: "Kerala Hills Travel Guide — Munnar, Periyar & the Ghats",
    ogDescription:
      "Tea-covered ridges, shola forest, and the only mountains in India where the monsoon is the main event.",
    twitterTitle: "Kerala Western Ghats Guide — Mountain Delights",
    twitterDescription: "Munnar, Eravikulam, Periyar and Vagamon — the southern mountains, planned properly.",
    geo: { latitude: 10.0889, longitude: 77.0595 },
    touristType: ["Nature and wildlife travellers", "Slow travellers", "Family travellers"],
    schemaDescription:
      "The Kerala section of the Western Ghats: tea estates around Munnar, shola grasslands in Eravikulam, and the Periyar tiger reserve.",
    intro: [
      "Nothing about the southern mountains behaves like the Himalaya. There is no acclimatisation, no pass that closes, no season that locks you out. Instead there is water — the Western Ghats catch the southwest monsoon head-on and turn it into the wettest, greenest, most biologically dense mountain range in the country.",
    ],
    sections: [
      {
        heading: "What this trip actually looks like",
        paragraphs: [
          "A working week here reads Kochi to Munnar to Thekkady to Vagamon, and back down through Alappuzha if you want the contrast of backwater at the end. Munnar is the anchor: 1,600 metres, tea planted continuously since the 1880s, and estate roads through Lockhart and Kolukkumalai that you can walk for hours without meeting a car. Kolukkumalai claims the highest tea estate in the world and the jeep track up it is genuinely rough — go at dawn, above the cloud layer.",
          "Eravikulam National Park, ten kilometres from Munnar, protects the largest surviving population of the Nilgiri tahr and the shola-grassland mosaic that used to cover these ridges. Entry is by shuttle bus and slots sell out; book in advance. Anamudi, at 2,695 metres the highest peak in India south of the Himalaya, sits inside the park and is closed to general climbing — the view from Rajamalai is the substitute and it is a good one.",
          "Thekkady and the Periyar tiger reserve are two hours south. Skip the crowded lake cruise and take the bamboo-raft programme or the border-hike with a reformed-poacher guide — small groups, early start, elephant and gaur on the shoreline more often than not. Between Thekkady and Kottayam, Vagamon's grass hills and pine forest are where locals go, and almost no itinerary includes them.",
          "The detail that changes everything: leeches. From June to September the trails have them, socks solve them, and most travellers who came anyway say the mist-and-waterfall version of the Ghats was the better trip. Spice estates around Kumily and cardamom country near Vandanmedu run walk-throughs that are more interesting than the tourist-facing plantation tours near Munnar.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "October to March is the reliable window — dry, cool at night in Munnar, clear enough for long estate walks, and peak wildlife activity around Periyar in the dry weeks of February and March. September and early October are the underrated shoulder: monsoon just easing, waterfalls still full, hotel rates half of December's. December and early January are crowded and cold at dawn. June to August is full monsoon, which is spectacular and impractical in equal measure; April and May are humid and hazy but quiet.",
        ],
      },
      {
        heading: "What we handle",
        paragraphs: [
          "Groups of six, estate-stay and homestay accommodation rather than resort blocks, advance booking for Eravikulam slots and Periyar's small-group forest programmes, and a driver-guide for the full loop. Trips run four to seven days, and combine easily with the backwaters or a Kochi start.",
        ],
      },
    ],
    related: [
      { label: "Why the Western Ghats are best in the shoulder months", hash: "munnar-monsoon" },
      { label: "Six Himalayan monastery festivals worth planning a trip around", hash: "monastery-festivals" },
    ],
  },
  {
    slug: "shimla",
    h1: "Shimla",
    subtitle: "Himachal Pradesh · 2,276 m · Best March–June, December for snow",
    seoTitle: "Shimla Travel Guide — Toy Train, Ridge Walks & Day Trips | Mountain Delights",
    metaDescription:
      "What to actually do in Shimla: the Kalka–Shimla toy train, forest walks off Mall Road, and day trips to Narkanda, Mashobra and the apple villages of Kotgarh.",
    ogTitle: "Shimla Travel Guide — Toy Train, Ridge Walks & Day Trips",
    ogDescription:
      "A walkable hill station on a forested ridge, and the easiest base for the apple country beyond it.",
    twitterTitle: "Shimla Travel Guide — Mountain Delights",
    twitterDescription: "The toy train, the ridge walks, and the valleys most visitors never drive out to.",
    geo: { latitude: 31.1048, longitude: 77.1734 },
    touristType: ["Family travellers", "Heritage travellers", "Weekend travellers"],
    schemaDescription:
      "A colonial-era hill station in Himachal Pradesh at 2,276 m, served by the UNESCO-listed Kalka–Shimla narrow-gauge railway.",
    intro: [
      "Shimla has a reputation problem: people arrive expecting Mall Road and leave having seen only Mall Road. The town is a seven-kilometre ridge of deodar forest with a Victorian British capital bolted onto it, and the good half of it is on foot, above the shops, where nobody goes.",
    ],
    sections: [
      {
        heading: "What this trip actually looks like",
        paragraphs: [
          "Arrive on the train. The Kalka–Shimla narrow gauge is a UNESCO World Heritage line — 96 kilometres, 102 tunnels, five hours of climbing through pine at walking pace — and it is a better introduction to the hills than any drive. The morning Shivalik Deluxe or the Himalayan Queen both work; book weeks ahead in May and June.",
          "In town, the walking route we give people starts at Christ Church on the Ridge, cuts up to Jakhoo temple through the cedar forest (monkeys will take your glasses — leave them in your bag), then back down past the Gaiety Theatre and the old Viceregal Lodge at Observatory Hill, whose panelled interiors are worth the guided half-hour. The Glen and the Chadwick Falls path are the quiet forest walks, twenty minutes from the crowds.",
          "The reason to base here, though, is the country beyond. Mashobra and Naldehra are twenty-five minutes out — orchards, a 1905 golf course laid out by Curzon, forest guesthouses. Narkanda at 2,700 metres is a two-hour drive with the Hatu Peak temple road above it and skiing in January. Push a little further and you are in Kotgarh and Thanedar, where American missionary Samuel Stokes planted the apples that became Himachal's economy; the harvest in late September is the best time to visit these villages.",
          "Practical notes: vehicles need an entry pass for the core Mall Road area and most of the centre is pedestrian-only, so bags travel by porter or hotel shuttle. Winter snow shuts the Narkanda road for a day or two at a time in January. Weekends from Delhi fill hotels — travel midweek and the same town feels half-empty.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "March to June for clear ridge walks, blossom in the orchards through April, and comfortable days before the plains-summer rush peaks in mid-May. Late September and October are the best-kept secret: apple harvest, post-monsoon clarity, and empty guesthouses. December and January bring the snow people come for, with Kufri and Narkanda usable for a few weeks. July and August are wet and grey, and landslides on the Kalka road are common.",
        ],
      },
      {
        heading: "What we handle",
        paragraphs: [
          "Toy-train seats booked in advance, heritage stays in the old cottages around Chhota Shimla and Mashobra rather than the highway hotels, a walking guide for the colonial-Shimla morning, and day trips out to Narkanda, Tattapani and the Kotgarh orchards. Three to five days is the right length, and Shimla is the natural start of the longer Kinnaur–Spiti route.",
        ],
      },
    ],
    related: [
      { label: "Driving the Spiti circuit in late October, before the passes close", hash: "spiti-in-winter" },
      { label: "Six Himalayan monastery festivals worth planning a trip around", hash: "monastery-festivals" },
    ],
  },
  {
    slug: "manali",
    h1: "Manali",
    subtitle: "Himachal Pradesh · 2,050 m · Best April–June, September–October",
    seoTitle: "Manali Travel Guide — Old Manali, Lahaul Day Trips & Treks | Mountain Delights",
    metaDescription:
      "A Manali guide that skips Mall Road: Old Manali and Naggar stays, Atal Tunnel day trips into Lahaul, Bhrigu Lake and Hampta Pass treks, and when to go.",
    ogTitle: "Manali Travel Guide — Old Manali, Lahaul & Treks",
    ogDescription: "Deodar forest above the Beas, the Atal Tunnel into Lahaul, and treks that start at the doorstep.",
    twitterTitle: "Manali Travel Guide — Mountain Delights",
    twitterDescription: "Old Manali, Naggar, Lahaul day trips and the Bhrigu Lake trek.",
    geo: { latitude: 32.2396, longitude: 77.1887 },
    touristType: ["Adventure travellers", "Trekkers", "Weekend travellers"],
    schemaDescription:
      "A Kullu valley town at 2,050 m below the Rohtang and Atal Tunnel routes into Lahaul, with deodar forest, trekking trailheads and Himachali villages.",
    intro: [
      "Manali is two towns sharing a name. One is the strip of hotels and rental scooters along Mall Road; the other is the wooden-house village up the hill and the string of Himachali hamlets across the river, where the pace has not changed much. Stay in the second one and everything about the trip improves.",
    ],
    sections: [
      {
        heading: "What this trip actually looks like",
        paragraphs: [
          "We put people in Old Manali, Vashisht or the villages around Naggar. Naggar in particular — the old Kullu capital, with its 500-year-old timber-and-stone castle and the Roerich estate where the Russian painter lived out his life — is twenty minutes from town and a different world. Vashisht has the hot springs and the walk up to Jogini falls; Old Manali has the Hadimba temple in its cedar grove, best at 7 a.m. before the queue.",
          "Since the Atal Tunnel opened in 2020, Lahaul is a day trip rather than an expedition. Nine kilometres of tunnel under the Rohtang ridge and you are in a dry, treeless valley: Sissu waterfall, Keylong, Jispa on the Bhaga, and the Trilokinath and Udaipur temples further down. Return the same evening or continue north toward Ladakh over Baralacha La if you have the days.",
          "The trekking is the real argument for Manali. Bhrigu Lake at 4,300 metres is two nights from the Gulaba roadhead and gives you a glacial lake and a big alpine meadow without technical ground. Hampta Pass, four to five days, crosses from the green Kullu side into the brown of Spiti in a single morning — the most dramatic terrain change of any short trek in India. Beas Kund is the two-day option out of Solang.",
          "Timing notes: Rohtang Pass requires an online permit and is capped daily; the tunnel does not. Solang gets packed in peak summer and is best skipped in favour of Sethan or Hamta village. The Chandrataal road opens with Kunzum La in late May or June.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "April to June for green valleys, open trekking below 4,000 metres and the first Lahaul runs of the season. September and October are the better months for clarity and empty trails, with orchard harvest in the Kullu valley through September. July and August bring monsoon and slide risk on the Kullu highway. Winter is snow tourism — Solang, Sethan igloo stays and the tunnel to a white Lahaul — with the pass shut and the Manali–Leh road closed until May.",
        ],
      },
      {
        heading: "What we handle",
        paragraphs: [
          "Village stays rather than highway hotels, permits and vehicle for Rohtang or Lahaul, and guided treks to Bhrigu Lake, Hampta Pass and Beas Kund with camp support. Groups of six, three to eight days, and it slots on to either end of the Spiti circuit.",
        ],
      },
    ],
    related: [
      { label: "Driving the Spiti circuit in late October, before the passes close", hash: "spiti-in-winter" },
      { label: "Acclimatising in Leh without losing three days to a headache", hash: "first-time-ladakh" },
    ],
  },
  {
    slug: "rajasthan",
    h1: "Rajasthan — Aravallis",
    subtitle: "Western India · 300–1,722 m · Best October–March",
    seoTitle: "Aravalli Hills Travel Guide — Mount Abu, Kumbhalgarh & Bera | Mountain Delights",
    metaDescription:
      "Rajasthan's mountains, not its deserts: Mount Abu and Guru Shikhar, the Dilwara temples, Kumbhalgarh's 36 km wall, and leopard country at Bera. Best months and routes.",
    ogTitle: "Aravalli Hills Travel Guide — Mount Abu & Kumbhalgarh",
    ogDescription: "India's oldest fold mountains — hill forts, marble temples and leopard ridges above the desert.",
    twitterTitle: "Aravalli Hills Guide — Mountain Delights",
    twitterDescription: "Mount Abu, Guru Shikhar, Kumbhalgarh and Bera — Rajasthan's mountain side.",
    geo: { latitude: 24.5925, longitude: 72.7156 },
    touristType: ["Heritage travellers", "Wildlife travellers", "Family travellers"],
    schemaDescription:
      "The Aravalli range in Rajasthan, India's oldest fold mountains, including Mount Abu, Guru Shikhar, Kumbhalgarh fort and the leopard hills of Bera.",
    intro: [
      "The Aravallis are older than the Himalaya by an order of magnitude — worn-down stubs of a range that was once alpine and is now a 700-kilometre spine of granite running diagonally across Rajasthan. They do not look like mountains until you are in them, and then the temperature drops five degrees and the desert disappears behind you.",
    ],
    sections: [
      {
        heading: "What this trip actually looks like",
        paragraphs: [
          "Mount Abu is the only hill station in the state and the obvious base: 1,220 metres, a lake in the middle of town, and Guru Shikhar at 1,722 metres as the highest point in the range. The reason to come, though, is Dilwara — five Jain temples built between the 11th and 13th centuries whose marble ceilings are carved so thin they glow when light passes through. No photography, no shoes, and it takes an hour to properly look up.",
          "Two hours north, Kumbhalgarh's fort wall runs 36 kilometres along the ridge, the second-longest continuous wall anywhere, enclosing 300 temples and a birthplace of Maharana Pratap. The adjoining wildlife sanctuary has a good chance of wolf and a solid one of leopard on an evening drive, and the walk from Kumbhalgarh to Ranakpur through the sanctuary is one of the better one-day trails in western India — ending at a Jain temple with 1,444 individually carved pillars.",
          "Bera, on the Jawai river south of Pali, is the wildcard: granite kopjes, leopards that live alongside the Rabari herding community without conflict, and sightings that are more reliable than most tiger reserves. Stay two nights, take two drives a day, and spend the middle of the day with the Rabari at the water.",
          "Practical: Udaipur is the airport for all of this and the drives are easy — Mount Abu three hours, Kumbhalgarh two, Bera two and a half. Summer here is brutal, with April to June regularly above 40°C in the valleys, so the season is genuinely narrow.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "October to March, without much argument. November and December give you cold mornings, clear light on the fort walls and peak leopard activity at Bera. January can drop near freezing at Mount Abu at night. February and March are the last comfortable weeks and the best for temple photography. Monsoon, July to September, turns the Aravallis unexpectedly green and is lovely at Kumbhalgarh, though safari tracks get soft. Avoid April to June.",
        ],
      },
      {
        heading: "What we handle",
        paragraphs: [
          "Heritage-property and farm-stay accommodation, a driver-guide from Udaipur, temple-timing planning around Dilwara's visitor hours, and booked safari slots at Kumbhalgarh and Bera. Four to six days covers the range comfortably, and it pairs with Udaipur or Jodhpur at either end.",
        ],
      },
    ],
    related: [
      { label: "Why the Western Ghats are best in the shoulder months", hash: "munnar-monsoon" },
      { label: "Six Himalayan monastery festivals worth planning a trip around", hash: "monastery-festivals" },
    ],
  },
  {
    slug: "kashmir",
    h1: "Kashmir",
    subtitle: "Northwest Himalaya · 1,600–5,142 m · Best April–June, September–October",
    seoTitle: "Kashmir Travel Guide — Srinagar, Gulmarg & Great Lakes Trek | Mountain Delights",
    metaDescription:
      "Kashmir trip planning from the ground: Dal Lake and the old city, Gulmarg's gondola and meadows, Pahalgam and Sonmarg, and the Great Lakes trek season.",
    ogTitle: "Kashmir Travel Guide — Srinagar, Gulmarg & the Great Lakes",
    ogDescription: "Shikaras at dawn, alpine meadows at 3,800 m, and the finest lake trek in the Himalaya.",
    twitterTitle: "Kashmir Travel Guide — Mountain Delights",
    twitterDescription: "Dal Lake, Gulmarg, Pahalgam, Sonmarg and the Kashmir Great Lakes trek.",
    geo: { latitude: 34.0837, longitude: 74.7973 },
    touristType: ["Trekkers", "Family travellers", "Culture and heritage travellers"],
    schemaDescription:
      "The Kashmir Valley between the Pir Panjal and the Great Himalaya: Srinagar's lakes and gardens, Gulmarg's meadows, and high-altitude trekking routes.",
    intro: [
      "The Kashmir Valley is a 135-kilometre bowl at 1,600 metres, walled by the Pir Panjal on one side and the Great Himalaya on the other. Almost everything travellers want here is within three hours of Srinagar, which makes it one of the few Himalayan trips where you can move slowly and still see everything.",
    ],
    sections: [
      {
        heading: "What this trip actually looks like",
        paragraphs: [
          "Start on the water. Two nights on a Dal Lake houseboat, out at 5.30 a.m. by shikara to the floating vegetable market at Rainawari, then the old city on foot: Jamia Masjid's 378 deodar columns, the papier-mâché and copper workshops of Zaina Kadal, Khanqah-e-Moula on the riverbank. The Mughal gardens — Shalimar, Nishat, Chashme Shahi — are best late afternoon when the tour buses have gone.",
          "Gulmarg is 50 kilometres west, a meadow at 2,650 metres with the world's second-highest cable car climbing to Apharwat at 3,980 metres. In summer it is a walk-and-ride day; in winter it is one of the few genuine off-piste ski destinations in Asia, with the caveat that avalanche risk above phase two is real and you want a local guide. The 18-hole course here sits higher than any other in the world.",
          "Pahalgam and Sonmarg are the other two anchors. Pahalgam sits at the confluence of the Lidder valleys, with day walks to Aru and Betaab and the pony route up to Kolahoi glacier; it is also the Amarnath yatra base, which fills the town for a few weeks each July and August. Sonmarg is the trailhead for Thajiwas glacier and, more importantly, for the Kashmir Great Lakes trek — seven days, four passes, and a string of lakes at Vishansar, Krishansar, Gadsar and Gangbal that is arguably the best mid-length trek in the country. It runs July to early September only.",
          "Practical notes: Srinagar has direct flights from Delhi, the Jammu highway is prone to weather closures, and mobile connectivity is reliable on postpaid connections only. Check current advisories close to travel and build the itinerary with a local operator who can adjust it the same day.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "April and May for almond and apple blossom, tulip season in Srinagar's Indira Gandhi garden in the first two weeks of April, and green meadows without heat. June is warm and busy. July to early September is trekking season for the Great Lakes and Tarsar Marsar, and the only window they are open. Late September and October give you chinar leaves turning red, crisp mornings and the year's clearest views. December to February is snow: Gulmarg skiing, frozen Dal edges, and most high roads shut.",
        ],
      },
      {
        heading: "What we handle",
        paragraphs: [
          "Houseboat and hotel stays vetted in person, a Srinagar-based guide, permits and camp support for the Great Lakes and Tarsar Marsar treks, and transport that can be rerouted at short notice. Groups of six, five to twelve days depending on whether a trek is attached.",
        ],
      },
    ],
    related: [
      { label: "Acclimatising in Leh without losing three days to a headache", hash: "first-time-ladakh" },
      { label: "Six Himalayan monastery festivals worth planning a trip around", hash: "monastery-festivals" },
    ],
  },
];

export function getGuide(slug: string) {
  return destinationGuides.find((g) => g.slug === slug);
}
