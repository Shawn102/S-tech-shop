const products = [
  {
    id: "product1",
    category: "mobile",
    url: "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY445_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY445_.jpg",
    title: {
      shortTitle: "Samsung Galax S20",
      longTitle: "Samsung Galax S20 FE 5G (Cloud Navy), 8GB RAM, 128GB ROM",
    },
    price: {
      mrp: 1000,
      cost: 900,
      discount: 10,
    },
    description:
      "This Galaxy S20 FE 5G powered by Qualcomm Snapdragon 865 Octa-Core processor. 8GB RAM with 128GB internal memory expandable up to 1TB.",
    discount: "Extra 10% Off",
    tagline: "deal of the day",
  },
  {
    id: "product2",
    category: "electronic",
    url: "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    title: {
      shortTitle: "Sandwich Makers",
      longTitle: "Flipkart SmartBuy Sandwich 01 Grill  (Black)",
    },
    price: {
      mrp: 15,
      cost: 10,
      discount: 33.33,
    },
    description:
      "This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better",
    discount: "From 99+5% Off",
    tagline: "deal of the day",
  },
  {
    id: "product3",
    category: "mobile",
    url: "https://cdn.eraspace.com/media/catalog/product/g/a/galaxy_s22_ultra_green_1_1.jpg",
    detailUrl:
      "https://cdn.eraspace.com/media/catalog/product/g/a/galaxy_s22_ultra_green_1_1.jpg",
    title: {
      shortTitle: "Samsung Galaxy S22 Ultra",
      longTitle: "Samsung Galaxy S22 Ultra 5G 12/256GB-Green",
    },
    price: {
      mrp: 1200,
      cost: 1080,
      discount: 10,
    },
    description:
      "This Samsung Galaxy S22 Ultra 5G memiliki layar 6.8 inci, 1440 x 3080 pixels, prosesor Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) Octa-core, RAM 8GB/256GB",
    discount: "Upto 70% Off",
    tagline: "deal of the day",
  },
  {
    id: "product4",
    category: "electronic",
    url: "https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Molife Sense 500 Smartwatch  (Black Strap, Freesize)",
    },
    price: {
      mrp: 75,
      cost: 50,
      discount: 33.33,
    },
    description:
      "The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.",
    discount: "Grab Now",
    tagline: "deal of the day",
  },
  {
    id: "product5",
    category: "electronic",
    url: "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    title: {
      shortTitle: "Trimmers, Dryers & more",
      longTitle: "Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)",
    },
    price: {
      mrp: 100,
      cost: 75,
      discount: 25,
    },
    description:
      "This hair dryer features Advanced Ehd + Technology which ensures that only the right amount of heat is distributed on your hair and preventing any damage to your hair. The Shine and condition Techonlogy ensures that you hair is always silky and smooth.",
    discount: "From ₹49",
    tagline: "best seller",
  },
  {
    id: "product6",
    category: "headphone",
    url: "https://kw.pricenacdn.com/files/images/products/original/122/Beats-Studio3-Wireless-Over-Ear-Headphones-Black-Red-TRZ-STD3RB_7537249_8d4c5f8007163e360d42248cc731c8d1_t.jpg",
    detailUrl:
      "https://kw.pricenacdn.com/files/images/products/original/122/Beats-Studio3-Wireless-Over-Ear-Headphones-Black-Red-TRZ-STD3RB_7537249_8d4c5f8007163e360d42248cc731c8d1_t.jpg",
    title: {
      shortTitle: "Beats Studio 3 Ear Headphone",
      longTitle:
        "Beats Studio3 Wireless Over-Ear Headphones - Black Red TRZ-STD3RB ",
    },
    price: {
      mrp: 150,
      cost: 100,
      discount: 33.33,
    },
    description:
      "Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Active Noise Cancelling (Pure ANC). Beats’ Pure ANC actively blocks external noise and uses real-time audio calibration to preserve clarity, range, and emotion. They continuously pinpoint external sounds to block while automatically responding to individual fit in real-time, optimizing sound output to preserve a premium listening experience the way artists intended.",
    discount: "From $35",
    tagline: "best seller",
  },
  {
    id: "product7",
    category: "headphone",
    url: "https://kw.pricenacdn.com/files/images/products/original/122/Logitech-G733-Lightspeed-Wireless-Gaming-Headset-20hrs-Battery-Life-Default-lighting-20-Hz-20-KHz-39-Ohms-Passive-5k-Ohms-Active-2_6161227_87edcca777c098e1db17d17a4e7c204e.jpg",
    detailUrl:
      "https://kw.pricenacdn.com/files/images/products/original/122/Logitech-G733-Lightspeed-Wireless-Gaming-Headset-20hrs-Battery-Life-Default-lighting-20-Hz-20-KHz-39-Ohms-Passive-5k-Ohms-Active-2_6161227_87edcca777c098e1db17d17a4e7c204e.jpg",
    title: {
      shortTitle: "Logitech G733 Gaming Headset",
      longTitle:
        "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, Lightsync RGB, Blue VOCE mic technology and PRO-G audio drivers Black 981-000864",
    },
    price: {
      mrp: 60,
      cost: 30,
      discount: 50,
    },
    description:
      "Wireless gaming headset designed for performance and comfort. Outfitted with all the surround sound, voice filters, and advanced lighting you need to look, sound, and play with more style than ever.",
    discount: "From $18",
    tagline: "deal of the day",
  },
  {
    id: "product8",
    category: "electronic",
    url: "https://kw.pricenacdn.com/img?d=ax320&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41DLZmSuINL._SL500_.jpg",
    detailUrl:
      "https://kw.pricenacdn.com/img?d=ax320&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41DLZmSuINL._SL500_.jpg",
    title: {
      shortTitle: "Logitech MX Mechanical Mini Wireless Illuminated Keyboard",
      longTitle:
        "Logitech MX Mechanical Mini Wireless Illuminated Keyboard, Tactile Quiet Switches, Backlit, Bluetooth, USB-C, macOS, Windows, Linux, iOS, Android, Metal - Graphite - B07W6J5VYN",
    },
    price: {
      mrp: 100,
      cost: 50,
      discount: 50,
    },
    description:
      "Logitech MX Mechanical Mini Wireless Illuminated Keyboard Low-profile mechanical switches deliver a next-level typing feel. Ultra-precise and stable switches offer deep and reassuring key travel – in a low-profile form factor. Your fingers glide effortlessly across the matte surface of the keys – and dual color keycaps make it easy to orient your fingers and stay in your flow.",
    discount: "From ₹25",
    tagline: "normal",
  },
  {
    id: "product9",
    category: "electronic",
    url: "https://kw.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41a-hd-W1LL._SL500_.jpg",
    detailUrl:
      "https://kw.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41a-hd-W1LL._SL500_.jpg",
    title: {
      shortTitle: "Logitech MX Master Wireless Mouse",
      longTitle:
        "Logitech MX Master 3 Advanced Wireless Mouse Graphite 910-005694",
    },
    price: {
      mrp: 12,
      cost: 4,
      discount: 33.33,
    },
    description:
      "Logitech MX Master 3S – an iconic mouse remastered.Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass114 mm minimum glass thickness. sensor.",
    discount: "From $3",
    tagline: "normal",
  },
  {
    id: "product10",
    category: "laptop",
    url: "https://kw.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Falarbashcomputer.com%2Fwp-content%2Fuploads%2F2022%2F03%2F15-dy2093dx-e1647956246713.jpg",
    detailUrl:
      "https://kw.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Falarbashcomputer.com%2Fwp-content%2Fuploads%2F2022%2F03%2F15-dy2093dx-e1647956246713.jpg",
    title: {
      shortTitle: "HP 15 Laptop",
      longTitle:
        "HP 15 15.6 Full HD IPS Display i5 -1135G7 Processor 8GB 256 SSD Windows 11 1YW Laptop 15-dy2093dx",
    },
    price: {
      mrp: 1500,
      cost: 1200,
      discount: 20,
    },
    description:
      "8th Generation Intel Core i5-8265u15.6-Inch diagonal HD SVA bright View micro-edge WLED-backlit 8 GB DDR4-2400 SDRAM, 256 GB PCIe NVMe M.2 Solid State Drive Hard Drive capacity 256 GB Processor speed 1.6 GHz",
    discount: "From $1000",
    tagline: "normal",
  },
  {
    id: "product11",
    category: "laptop",
    url: "https://kw.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Falarbashcomputer.com%2Fwp-content%2Fuploads%2F2021%2F03%2Flenovo-v14.jpg",
    detailUrl:
      "https://kw.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Falarbashcomputer.com%2Fwp-content%2Fuploads%2F2021%2F03%2Flenovo-v14.jpg",
    title: {
      shortTitle: "Lenovo V14-II Laptop",
      longTitle:
        "Lenovo V14-II 14 FHD i5 4GB 1TB HDD DOS Without OS 1YW 82C401ECAK",
    },
    price: {
      mrp: 1200,
      cost: 800,
      discount: 33.33,
    },
    description:
      "Lenovo V14-IIL 82C4 - Core i3 1005G1 / 1.2 GHz - Win 10 Home 64-bit - UHD Graphics - 8 Gt RAM - 256 GB SSD NVMe - 14 TN 1920 x 1080 (Full HD) - Wi-Fi 5 - raudan harmaa - kbd: Pohjoismaat Model  Lenovo V-Series Screen Size  14 Resolution  1920 x 1080 Touchscreen  No Weight  1.6Kg Mobile broadband  No OS  Windows 10 Home HDD  0GB SSD / Flash  256GB Memory  8GB CPU generation  Intel® Core™ i3 Discrete Graphics  Not available Warranty / Months  12 Localization  Nordic CTO / BTO  No CPU Model  i3-1005G1",
    discount: "From $1000",
    tagline: "normal",
  },
  {
    id: "product12",
    category: "laptop",
    url: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202302100406",
    detailUrl:
      "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202302100406",
    title: {
      shortTitle: "Apple MacBook Pro",
      longTitle: "Apple unveils game-changing MacBook Pro - Apple (IN)",
    },
    price: {
      mrp: 1700,
      cost: 1530,
      discount: 10,
    },
    description:
      "Game-changing MacBook Pro with M1 Pro and M1 Max delivers extraordinary performance and battery life, and features the world’s best notebook display The new MacBook Pro features a 1080p camera, the best audio system in a notebook, and the most advanced connectivity ever in a MacBook Pro",
    discount: "From $100",
    tagline: "deal of the day",
  },
  {
    id: "product13",
    category: "laptop",
    url: "https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-2021.jpg?quality=82&strip=all&w=1000",
    detailUrl:
      "https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-2021.jpg?quality=82&strip=all&w=1000",
    title: {
      shortTitle: "MacBook Pro",
      longTitle: "MacBook Pro 2020 13-Inch MacBook Pro",
    },
    price: {
      mrp: 1500,
      cost: 1200,
      discount: 20,
    },
    description:
      "2020, Apple introduced the 13-inch M1 MacBook Pro as the latest update to the fourth-generation MacBook. The MacBook features the same look as previous MacBooks, but like the MacBook Air and Mac Mini, switched to Apple silicon.Apple’s M1 chip brought ARM architecture to the MacBook line, and this was the first MacBook without an Intel processor.The M1 chip is a unified design with an 8-core CPU and an 8-core CPU. The processor integrated memory on board, limiting the device to either 8GB or 16GB of unified memory. The 13-inch M1 MacBook Pro is configurable with between 256GB and 2TB of storage and features a Magic Keyboard, rather than the problematic butterfly keyboard.",
    discount: "From $100",
    tagline: "best seller",
  },
  {
    id: "product14",
    category: "mobile",
    url: "https://www.hubside.store/media/catalog/product/i/P/iPhone-12-rouge-neuf-reconditionne-1_29eb575a-78ed-41eb-8733-cb69eb9c85ca.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    detailUrl:
      "https://www.hubside.store/media/catalog/product/i/P/iPhone-12-rouge-neuf-reconditionne-1_29eb575a-78ed-41eb-8733-cb69eb9c85ca.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
    title: {
      shortTitle: "IPHONE 12 RED",
      longTitle: "IPHONE 12-256GB-RED",
    },
    price: {
      mrp: 1000,
      cost: 900,
      discount: 10,
    },
    description:
      "2020 model 6.1 Super Retina XDR OLED display NFC support Apple A14 Bionic processor Dual Rear Camera 12MP/4K 60fps Battery 2815 mAh (50% in 30min)",
    discount: "From $600",
    tagline: "normal",
  },
  {
    id: "product15",
    category: "mobile",
    url: "https://m-cdn.phonearena.com/images/articles/372414-image/iphone-12-black.jpg",
    detailUrl:
      "https://m-cdn.phonearena.com/images/articles/372414-image/iphone-12-black.jpg",
    title: {
      shortTitle: "IPHONE 12 BLACK",
      longTitle: "IPHONE 12-256GB-BLACK",
    },
    price: {
      mrp: 1000,
      cost: 900,
      discount: 10,
    },
    description:
      "2020 model 6.1 Super Retina XDR OLED display NFC support Apple A14 Bionic processor Dual Rear Camera 12MP/4K 60fps Battery 2815 mAh (50% in 30min)",
    discount: "From $600",
    tagline: "normal",
  },
  {
    id: "product16",
    category: "headphone",
    url: "https://www.icentre.com.mt/images/thumbs/0020109_jbl-headphone-bluetooth-t710bt-on-ear-in-white.jpeg",
    detailUrl:
      "https://www.icentre.com.mt/images/thumbs/0020109_jbl-headphone-bluetooth-t710bt-on-ear-in-white.jpeg",
    title: {
      shortTitle: "JBL Headphone",
      longTitle: "JBL Headphone Bluetooth T710BT On Ear in White",
    },
    price: {
      mrp: 150,
      cost: 100,
      discount: 33.33,
    },
    description:
      "This headphone reproduce that same JBL sound, punching out bass that’s both deep and powerful. Wirelessly stream high-quality sound from your Bluetooth® devices without the messy cords. Listen wirelessly for 50 hours. Recharge the battery quickly in 5 minutes to gain 3 more hours of fun or fully in 2 hours.",
    discount: "From $60",
    tagline: "deal of the day",
  },
  {
    id: "product17",
    category: "headphone",
    url: "https://shopdunk.com/images/thumbs/0001065_beats-solo-pro-wireless-noise-cancelling-headphones.jpeg",
    detailUrl:
      "https://shopdunk.com/images/thumbs/0001065_beats-solo-pro-wireless-noise-cancelling-headphones.jpeg",
    title: {
      shortTitle: "Beats Solo Pro",
      longTitle: "Beats Solo Pro Wireless Noise Cancelling Headphones",
    },
    price: {
      mrp: 140,
      cost: 112,
      discount: 20,
    },
    description:
      "Active Noise Cancelling (ANC) blocks external noise Up to 22 hours of listening time (up to 40 hours with ANC and transparency turned off) Features the Apple H1 Headphone Chip and Class 1 Bluetooth for extended range and fewer dropouts Compatible with iOS and Android Built-in microphone allows hands-free controls via “Hey Siri” on iOS devices, and voice capability with the push of the b button on a variety of compatible devices High-performance wireless noise cancelling headphones Transparency helps you stay aware of your surroundings while listening",
    discount: "From $60",
    tagline: "normal",
  },
  {
    id: "product18",
    category: "camera",
    url: "https://assets.videomaker.com/drpl/articles/14652/main_22-1.jpg",
    detailUrl:
      "https://assets.videomaker.com/drpl/articles/14652/main_22-1.jpg",
    title: {
      shortTitle: "Nikon D3",
      longTitle: "Nikon D3 DSLR Camera",
    },
    price: {
      mrp: 700,
      cost: 560,
      discount: 20,
    },
    description:
      "The Nikon D3 is a 12.0-megapixel professional-grade full frame (35 mm) digital single lens reflex camera (DSLR) announced by the Nikon Corporation on 23 August 2007 along with the Nikon D300 DX format camera. It was Nikon's first full-frame DSLR. The D3, along with the Nikon D3X, was a flagship model in Nikon's line of DSLRs, superseding the D2Hs and D2Xs. It was replaced by the D3S as Nikon's flagship DSLR. The D3, D3X, D3S, D4, D4s, D5, D6, D700, D800, D800Е and Df are the only Nikon FX format DSLRs manufactured in Japan.[citation needed] The D3S was replaced by the D4 in 2012.",
    discount: "From $400",
    tagline: "normal",
  },
  {
    id: "product19",
    category: "camera",
    url: "https://5.imimg.com/data5/SELLER/Default/2022/4/WO/AZ/LH/150477122/sony-a7-iv-mirrorless-camera-with-28-70mm-lens-500x500.jpg",
    detailUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/4/WO/AZ/LH/150477122/sony-a7-iv-mirrorless-camera-with-28-70mm-lens-500x500.jpg",
    title: {
      shortTitle: "Sony a7",
      longTitle: "Sony a7 DSLR Camera",
    },
    price: {
      mrp: 800,
      cost: 680,
      discount: 20,
    },
    description:
      "The Alpha a7 Mirrorless Digital Camera from Sony incorporates a full-frame Exmor CMOS sensor into an E-mount body thus providing the light gathering capability and detail-rich imaging of a full-frame sensor with a compact, lightweight, and versatile mirrorless, interchangeable lens camera system.",
    discount: "From $400",
    tagline: "deal of the day",
  },
  {
    id: "product20",
    category: "camera",
    url: "https://static.wixstatic.com/media/4a5235_7dd5a9dc7bd14163866f734cb9bc84b0~mv2.jpg/v1/fill/w_640,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4a5235_7dd5a9dc7bd14163866f734cb9bc84b0~mv2.jpg",
    detailUrl:
      "https://static.wixstatic.com/media/4a5235_7dd5a9dc7bd14163866f734cb9bc84b0~mv2.jpg/v1/fill/w_640,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4a5235_7dd5a9dc7bd14163866f734cb9bc84b0~mv2.jpg",
    title: {
      shortTitle: "Canon Lens",
      longTitle: "Canon Wide angle Lens",
    },
    price: {
      mrp: 400,
      cost: 300,
      discount: 33.33,
    },
    description:
      "Canon Wide-angle lenses allow a greater field of view to capture more in the same frame. They are ideal for expansive compositions like landscapes and interior shots where space is tight. They can also be used creatively to distort and exaggerate depth by making foreground objects more distinct and eye-catching.",
    discount: "From $400",
    tagline: "normal",
  },
  {
    id: "product21",
    category: "camera",
    url: "https://jakartacamera.com/wp-content/uploads/2020/12/Jual-SONY-FE-85mm-F1.8-f.jpg",
    detailUrl:
      "https://jakartacamera.com/wp-content/uploads/2020/12/Jual-SONY-FE-85mm-F1.8-f.jpg",
    title: {
      shortTitle: "Sony Lens",
      longTitle: "Sony FE 24-70mm f/2.8 GM Lens",
    },
    price: {
      mrp: 500,
      cost: 400,
      discount: 20,
    },
    description:
      "A fast, standard zoom favored for its versatility, the Sony FE 24-70mm f/2.8 GM is a wide-angle to short telephoto lens featuring advanced G Master optics, a robust physical design, and a bright f/2.8 constant maximum aperture.",
    discount: "From $400",
    tagline: "normal",
  },
  {
    id: "product22",
    category: "electronic",
    url: "https://lookagain.scene7.com/is/image/OttoUK/553w/charge-5,-lunar-white-soft-gold-stainless-steel-by-fitbit~89E965FRSP.jpg",
    detailUrl:
      "https://lookagain.scene7.com/is/image/OttoUK/553w/charge-5,-lunar-white-soft-gold-stainless-steel-by-fitbit~89E965FRSP.jpg",
    title: {
      shortTitle: "Fitbit Charge 5 Fitness tracker",
      longTitle:
        "Fitbit Charge 5 Fitness tracker, Lunar White/Soft Gold Stainless Steel",
    },
    price: {
      mrp: 200,
      cost: 100,
      discount: 50,
    },
    description:
      "Worn around your wrist, the Fitbit Charge 5 is a fitness tracker that monitors more than just your steps. Equipped with GPS, skin temperature tracking, and a heart rate monitor, it provides key insights into your health and activity, including your exercise performance, sleep habits, and changes in heart rate.",
    discount: "From $50",
    tagline: "deal of the day",
  },
  {
    id: "product23",
    category: "liquid",
    url: "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
    detailUrl:
      "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
    title: {
      shortTitle: "Green Olive Oil",
      longTitle: "Green Olive Lavender Scalp Oil",
    },
    price: {
      mrp: 30,
      cost: 15,
      discount: 50,
    },
    description:
      "A calming scalp oil infused with natural extracts of lavender and green olives to prevent itchy scalp and dandruff, strengthen hair, and support healthy hair growth. This multitasking product combats hair loss, supports natural, healthy hair growth, controls itchy scalp, and calms the senses.",
    discount: "From $10",
    tagline: "normal",
  },
  {
    id: "product24",
    category: "liquid",
    url: "https://m.media-amazon.com/images/I/81nMpudM5oL._AC_UF894,1000_QL80_.jpg",
    detailUrl:
      "https://m.media-amazon.com/images/I/81nMpudM5oL._AC_UF894,1000_QL80_.jpg",
    title: {
      shortTitle: "Heineken Beer",
      longTitle: "Heineken Beer Can, 6*320ml",
    },
    price: {
      mrp: 15,
      cost: 10,
      discount: 33.33,
    },
    description:
      "a super-inoffensive lager with a stronger, bitterer taste than most internationally mass-produced lagers. It's perfectly carbonated, pours a straw yellow colour, with little or no head to speak of. It goes down smoothly when it's ice cold.",
    discount: "From $5",
    tagline: "normal",
  },
  {
    id: "product25",
    category: "liquid",
    url: "https://sc04.alicdn.com/kf/U8f75909b07124616a35cff58c77b9fe9b.jpg",
    detailUrl:
      "https://sc04.alicdn.com/kf/U8f75909b07124616a35cff58c77b9fe9b.jpg",
    title: {
      shortTitle: "CocaCola",
      longTitle: "CocaCola Cans, 6*330ml",
    },
    price: {
      mrp: 8,
      cost: 4,
      discount: 50,
    },
    description:
      "Coca-Cola is a carbonated, sweetened soft drink and is the world's best-selling drink. A popular nickname for Coca-Cola is Coke. The Coca-Cola Company claims that the beverage is sold in more than 200 countries. Coca-Cola was first made in Columbus, Georgia.",
    discount: "From $3",
    tagline: "normal",
  },
  {
    id: "product26",
    category: "liquid",
    url: "https://media.douglas.at/medias/https-media-prod-eu-1.mirakl.net-SOURCE-3ba346564ba047e1aa8eac6d50c8affa.jpg?context=bWFzdGVyfGltYWdlc3wxMDk5NjN8aW1hZ2UvanBlZ3xoNzYvaGYxLzE2ODE3NTEyMzQ5NzI2L2h0dHBzOi8vbWVkaWEtcHJvZC1ldS0xLm1pcmFrbC5uZXQvU09VUkNFLzNiYTM0NjU2NGJhMDQ3ZTFhYThlYWM2ZDUwYzhhZmZhfDFlZDUyOTU3ZTUxMTEyNjk1YjYxZDczMzlmMGQ1ZGM1Zjc2MDM0MDNiYzE2YTQ3YWEwNWFjOGRlYWMzNmVmOWM&grid=true",
    detailUrl:
      "https://media.douglas.at/medias/https-media-prod-eu-1.mirakl.net-SOURCE-3ba346564ba047e1aa8eac6d50c8affa.jpg?context=bWFzdGVyfGltYWdlc3wxMDk5NjN8aW1hZ2UvanBlZ3xoNzYvaGYxLzE2ODE3NTEyMzQ5NzI2L2h0dHBzOi8vbWVkaWEtcHJvZC1ldS0xLm1pcmFrbC5uZXQvU09VUkNFLzNiYTM0NjU2NGJhMDQ3ZTFhYThlYWM2ZDUwYzhhZmZhfDFlZDUyOTU3ZTUxMTEyNjk1YjYxZDczMzlmMGQ1ZGM1Zjc2MDM0MDNiYzE2YTQ3YWEwNWFjOGRlYWMzNmVmOWM&grid=true",
    title: {
      shortTitle: "GUESS BELLAVITA ROSA Perfume",
      longTitle: "GUESS BELLAVITA ROSA Perfume 8.4FL OZ/ 250ml",
    },
    price: {
      mrp: 20,
      cost: 10,
      discount: 50,
    },
    description:
      "Its creamy citrus essence balances earthy floral notes, creating a fragrance where the woods meet a blossoming spring. With a dazzling combination of blackcurrent, magnolia and moss, this aromatic scent will take you back to those calming moments spent alongside wildflowers and mossy redwoods. 3.4 fl.",
    discount: "From $5",
    tagline: "best seller",
  },
  {
    id: "product27",
    category: "liquid",
    url: "https://m.media-amazon.com/images/I/61LAWCjUJeL._AC_SX425_.jpg",
    detailUrl: "https://m.media-amazon.com/images/I/61LAWCjUJeL._AC_SX425_.jpg",
    title: {
      shortTitle: "AQUA ALLEGORIA ORANGE SOLEIA Women Perfume",
      longTitle: "AQUA ALLEGORIA ORANGE SOLEIA Women Perfume 75ml",
    },
    price: {
      mrp: 20,
      cost: 10,
      discount: 50,
    },
    description:
      "Orange Soleia is a sunny, juicy Eau de Toilette that evokes the delectable blood orange and the citrus groves of Sicily. It embodies the spirit of blood orange enhanced by the energising freshness of bergamot and woody notes.",
    discount: "From $5",
    tagline: "best seller",
  },
  {
    id: "product28",
    category: "liquid",
    url: "https://fraguru.com/mdimg/perfume/375x500.7795.jpg",
    detailUrl: "https://fraguru.com/mdimg/perfume/375x500.7795.jpg",
    title: {
      shortTitle: "ONE MAN SHOW SCENT",
      longTitle: "ONE MAN SHOW Jacques Bogart for men 100ml",
    },
    price: {
      mrp: 20,
      cost: 15,
      discount: 25,
    },
    description:
      "One Man Show By Jacques Bogart Eau De Toilette Spray 3.3 Oz Men : Launched By The Design House Of Jacques Bogart In 1980, One Man Show Is Classified As A Luxurious, Woody, Arid Fragrance. This Masculine Scent Possesses A Blend Of Dry Woods With Hints Of Moss And Tobacco. It Is Recommended For Romantic Wear.",
    discount: "From $5",
    tagline: "deal of the day",
  },
  {
    id: "product29",
    category: "liquid",
    url: "https://5.imimg.com/data5/QP/WL/HK/SELLER-71827629/fogg-perfume-1000x1000.jpeg",
    detailUrl:
      "https://5.imimg.com/data5/QP/WL/HK/SELLER-71827629/fogg-perfume-1000x1000.jpeg",
    title: {
      shortTitle: "FOGG SCENT",
      longTitle: "FOGG SCENT BEAUTIFUL SECRET women 100ml",
    },
    price: {
      mrp: 10,
      cost: 8,
      discount: 20,
    },
    description:
      "The new scent for women, Fogg Beautiful Secret is a mélange of crisp fresh fragrance and rich florals. Evoking all confidence, grace and seductive charm, this perfume captures the essence of feminine mystique in a bottle.",
    discount: "From $5",
    tagline: "normal",
  },
  {
    id: "product30",
    category: "liquid",
    url: "https://fragrances.com.ng/media/catalog/product/cache/4cf9e516177489ae500dec59d26ccb3b/f/o/fogg_scent_impressio_edp_100ml_for_men.jpg",
    detailUrl:
      "https://fragrances.com.ng/media/catalog/product/cache/4cf9e516177489ae500dec59d26ccb3b/f/o/fogg_scent_impressio_edp_100ml_for_men.jpg",
    title: {
      shortTitle: "FOGG SCENT IMPRESSIO",
      longTitle: "FOGG SCENT IMPRESSIO for Man 100ml",
    },
    price: {
      mrp: 12,
      cost: 8,
      discount: 33.33,
    },
    description:
      "A long-lasting men's fragrance, Fogg Impressio exudes pleasant masculine notes with a burst of energising freshness. Fresh, earthy scents are infused with distinctive masculine fragrance to invoke a soothing experience for a very, very long time. Do not hesitate to show your grit and power with Fogg Scent collection.",
    discount: "From $5",
    tagline: "normal",
  },
  {
    id: "product31",
    category: "camera",
    url: "https://www.canon.com.au/-/media/images/canon/products/mirrorless-cameras/eos-r5-temp/tile-image-eosr5-1200x1200.ashx?mw=1200&hash=D6E43B947B880336BEDF0ED8C29FA0BC",
    detailUrl:
      "https://www.canon.com.au/-/media/images/canon/products/mirrorless-cameras/eos-r5-temp/tile-image-eosr5-1200x1200.ashx?mw=1200&hash=D6E43B947B880336BEDF0ED8C29FA0BC",
    title: {
      shortTitle: "Canon EOS 5D Mark IV",
      longTitle: "Canon EOS 5D Mark IV DSLR Camera",
    },
    price: {
      mrp: 900,
      cost: 600,
      discount: 33.33,
    },
    description:
      "Nearly identical-looking to its predecessor, it receives substantial upgrades under the hood, including: a higher-resolution sensor with Dual Pixel autofocus, 4K video capture, an upgraded AF system, a touchscreen, improved weather-sealing, built-in Wi-Fi/NFC, an interval timer and GPS.",
    discount: "From $400",
    tagline: "deal of the day",
  },
  {
    id: "product32",
    category: "headphone",
    url: "https://ae01.alicdn.com/kf/HTB12lCqcljTBKNjSZFwq6AG4XXab/Remax-RB-200HB-Adjustable-Soft-Leather-AUX-Bluetooth-Headset-Stereo-Foldable-Headset-Handsfree-Noise-Reduction-For.jpg",
    detailUrl:
      "https://ae01.alicdn.com/kf/HTB12lCqcljTBKNjSZFwq6AG4XXab/Remax-RB-200HB-Adjustable-Soft-Leather-AUX-Bluetooth-Headset-Stereo-Foldable-Headset-Handsfree-Noise-Reduction-For.jpg",
    title: {
      shortTitle: "Remax RB 200HB",
      longTitle:
        "Remax RB-200HB Adjustable Soft Leather AUX Bluetooth Headset Stereo Foldable Headset Handsfree Noise Reduction For iPhone",
    },
    price: {
      mrp: 80,
      cost: 40,
      discount: 50,
    },
    description:
      "Remax USA Premium stereo feature ensures high fidelity quality sound and a perfect enjoyment of music High quality Ear muffs, strengthen Aluminum Trim, extendable metal slider and fordable clamp Multi-functional: In-line Mic & Volume adjustment & Answer/End call & Play/Pause & Skip to previous or next song Memory foam cushions and padded headband with soft protein leather offer you a cozy and long-time wearing experience Compatible with all devices with 3.5mm jack port, including iPhone, iPod, iPad, Samsung, Nexus, Android, HTC, LG, Nokia, Windows Phone, Bluetooth enabled TVs and tablets, and more.",
    discount: "From $60",
    tagline: "best seller",
  },
  {
    id: "product33",
    category: "mobile",
    url: "https://m-cdn.phonearena.com/images/articles/372413-image/iphone-12-white.jpg",
    detailUrl:
      "https://m-cdn.phonearena.com/images/articles/372413-image/iphone-12-white.jpg",
    title: {
      shortTitle: "IPHONE 12 WHITE",
      longTitle: "IPHONE 12-256GB-WHITE",
    },
    price: {
      mrp: 1000,
      cost: 900,
      discount: 10,
    },
    description:
      "Apple iPhone 12 is the bigger version of the regular iPhone 12 mini. The handset's hardware include a 6.1-inch OLED display, 5nm Apple A14 Bionic processor, and a dual-camera setup with a large sensor. 5G and Face ID are on board, too.",
    discount: "From $600",
    tagline: "normal",
  },
];

module.exports = products;
