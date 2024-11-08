
import w1 from '../assets/w1.jpg'
import w2 from '../assets/w2.jpg'
import w3 from '../assets/w3.jpg'
import w4 from '../assets/w4.jpg'
import w6 from '../assets/w6.jpg'
import w5 from '../assets/w5.jpg'

import m1 from '../assets/m1.jpg'
import m2 from '../assets/m2.jpg'
import m3 from '../assets/m3.jpg'
import m4 from '../assets/m4.jpg'


import j1 from '../assets/j2.jpg'
import j2 from '../assets/j3.jpg'
import j3 from '../assets/j4.jpg'
import j4 from '../assets/j5.jpg'
import e1 from '../assets/e1.jpg'
import e2 from '../assets/e2.jpg'
import e3 from '../assets/e3.jpg'
import e4 from '../assets/e4.jpg'
import e5 from '../assets/e5.jpg'
import e6 from '../assets/e6.jpg'


const product_data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://plus.unsplash.com/premium_photo-1671135590215-ded219822a44?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://plus.unsplash.com/premium_photo-1708958142067-f52023835f55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: e1,
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: e2,
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: e3,
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: e4,
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: e5,
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: e6,
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1614098097306-c67b8020c04e?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://plus.unsplash.com/premium_photo-1664202526475-8f43ee70166d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://plus.unsplash.com/premium_photo-1673757110542-e2ce512bf60e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1732708866430-c24dd208a0b4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://plus.unsplash.com/premium_photo-1673481600920-72fa9fc062cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1670490340295-95b418fe59a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 21,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 compatibility. Fast data transfers. High capacity portable storage for backups and media.",
    category: "electronics",
    image: "https://plus.unsplash.com/premium_photo-1664301887532-328f07bb2c24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 22,
    title: "Logitech MX Master 3 Wireless Mouse",
    price: 99,
    description:
      "Ergonomic design, ultra-fast scrolling, cross-computer control, and long battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1537151377170-9c19a791bbea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.7,
      count: 512,
    },
  },
  {
    id: 23,
    title: "Apple MacBook Pro 16-inch (M2 Pro)",
    price: 2399,
    description:
      "Powerful Apple M2 Pro chip with 16-core GPU, stunning Retina display, and up to 22 hours battery life.",
    category: "electronics",
    image: "https://plus.unsplash.com/premium_photo-1663045990033-35c6e6bfc22e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.9,
      count: 120,
    },
  },
  {
    id: 24,
    title: "Samsung 32-inch 4K UHD Monitor",
    price: 279,
    description:
      "Ultra HD resolution with HDR support, slim bezels, and eye comfort mode for long hours.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.6,
      count: 340,
    },
  },
  {
    id: 25,
    title: "Sony WH-1000XM5 Noise Cancelling Headphones",
    price: 348,
    description:
      "Industry-leading active noise cancellation, crystal-clear sound, and up to 30 hours battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1620783770629-122b7f187703?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.8,
      count: 610,
    },
  },
  {
    id: 26,
    title: "Canon EOS R10 Mirrorless Camera",
    price: 979,
    description:
      "24.2MP APS-C CMOS sensor, 4K video recording, dual pixel autofocus, and compact lightweight design.",
    category: "electronics",
    image: "https://plus.unsplash.com/premium_photo-1683121696175-d05600fefb85?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.5,
      count: 220,
    },
  },
  {
    id: 27,
    title: "Bose SoundLink Revolve+ Bluetooth Speaker",
    price: 299,
    description:
      "360° sound, deep bass, water-resistant, and up to 17 hours of playtime.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.7,
      count: 400,
    },
  },
  {
    id: 28,
    title: "Amazon Kindle Paperwhite 11th Gen",
    price: 139,
    description:
      "6.8” glare-free display, warm light, waterproof design, and weeks of battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1721332154191-ba5f1534266e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.8,
      count: 980,
    },
  },
  {
    id: 29,
    title: "Apple AirPods Pro (2nd Gen)",
    price: 249,
    description:
      "Active noise cancellation, adaptive transparency, personalized spatial audio, and MagSafe charging.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.7,
      count: 1350,
    },
  },
  {
    id: 30,
    title: "Fitbit Versa 3 Health & Fitness Smartwatch",
    price: 199,
    description:
      "Built-in GPS, heart rate monitoring, sleep tracking, and 6-day battery life.",
    category: "electronics",
    image: "https://plus.unsplash.com/premium_photo-1661304671477-37c77d0c6930?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.3,
      count: 670,
    },
  },
  {
    id: 31,
    title: "Razer BlackWidow V3 Mechanical Gaming Keyboard",
    price: 129,
    description:
      "Tactile and clicky Green switches, RGB Chroma lighting, and durable aluminum construction.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.6,
      count: 410,
    },
  },
  {
    id: 32,
    title: "GoPro HERO11 Black Action Camera",
    price: 399,
    description:
      "5.3K video recording, HyperSmooth stabilization, waterproof, and long battery life.",
    category: "electronics",
    image: "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 33,
    title: "Apple iPad Air (5th Gen)",
    price: 599,
    description:
      "10.9-inch Liquid Retina display, M1 chip, 12MP Ultra Wide camera, and Apple Pencil 2 support.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.9,
      count: 1020,
    },
  },
  {
    id: 34,
    title: "DJI Mini 3 Pro Drone",
    price: 759,
    description:
      "4K HDR video, lightweight foldable design, obstacle sensing, and intelligent flight modes.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
      rate: 4.8,
      count: 350,
    },
  },
  {
  id: 48,
  title: "Casual Summer Dress",
  price: 24.99,
  description:
    "Lightweight and breathable summer dress with floral prints. Perfect for daily wear and casual outings.",
  category: "women's clothing",
  image: "https://plus.unsplash.com/premium_photo-1693242804347-38b4382b3c4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.2, count: 112 },
},
{
  id: 35,
  title: "Denim Jacket",
  price: 49.99,
  description:
    "Trendy denim jacket that pairs well with dresses and jeans. Durable and stylish for all seasons.",
  category: "women's clothing",
  image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.5, count: 198 },
},
{
  id: 36,
  title: "Women's Knit Sweater",
  price: 34.5,
  description:
    "Soft knit sweater with long sleeves. Warm and cozy, suitable for autumn and winter.",
  category: "women's clothing",
  image: "https://images.unsplash.com/photo-1643825664857-7e6e4124f289?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.0, count: 176 },
},
{
  id: 37,
  title: "Striped Casual Top",
  price: 18.99,
  description:
    "Comfortable striped casual t-shirt, made with breathable cotton. Ideal for everyday wear.",
  category: "women's clothing",
  image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 3.9, count: 89 },
},
{
  id: 38,
  title: "Classic Black Dress",
  price: 59.99,
  description:
    "Elegant black dress suitable for parties, evening dinners, and formal occasions.",
  category: "women's clothing",
  image: "https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.8, count: 245 },
},
{
  id: 39,
  title: "High-Waist Jeans",
  price: 39.5,
  description:
    "Slim-fit high-waist denim jeans with stretch fabric. Comfortable and stylish.",
  category: "women's clothing",
  image: "https://images.unsplash.com/photo-1523194258983-4ef0203f0c47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.3, count: 167 },
},
{
  id: 40,
  title: "Boho Maxi Dress",
  price: 44.99,
  description:
    "Bohemian-style maxi dress with unique prints. Great for summer and beach vacations.",
  category: "women's clothing",
  image: "https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.6, count: 190 },
},
{
  id: 41,
  title: "Winter Wool Coat",
  price: 89.99,
  description:
    "Premium wool coat designed to keep you warm and stylish during cold weather.",
  category: "women's clothing",
  image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.7, count: 221 },
},
{
  id: 42,
  title: "Graphic Tee",
  price: 15.99,
  description:
    "Trendy graphic t-shirt made with 100% cotton. Perfect for casual street style.",
  category: "women's clothing",
  image: "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 3.8, count: 130 },
},
{
  id: 43,
  title: "Women's Hoodie",
  price: 29.99,
  description:
    "Casual hoodie with kangaroo pockets. Perfect for sports, casual wear, and lounging.",
  category: "women's clothing",
  image: "https://images.unsplash.com/photo-1626477357166-ed26f0e3f1cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.4, count: 152 },
},
{
  id: 44,
  title: "Pleated Skirt",
  price: 26.99,
  description:
    "Classic pleated skirt with a comfortable waistband. Great for both office and casual looks.",
  category: "women's clothing",
  image: "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.1, count: 97 },
},
{
  id: 45,
  title: "Women's Blazer",
  price: 54.99,
  description:
    "Formal blazer with a slim-fit cut. Suitable for office and business meetings.",
  category: "women's clothing",
  image: "https://images.unsplash.com/photo-1732642003284-1732c4bcad2b?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.5, count: 144 },
},
{
  id: 46,
  title: "Casual Shorts",
  price: 19.99,
  description:
    "Comfortable cotton shorts with a modern cut. Great for summer outings.",
  category: "women's clothing",
  image: "https://images.unsplash.com/photo-1626477369756-bababbb5b9f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.0, count: 102 },
},
{
  id: 47,
  title: "Women's Activewear Set",
  price: 35.99,
  description:
    "Stretchy and breathable activewear set designed for yoga, gym, and fitness.",
  category: "women's clothing",
  image: "https://plus.unsplash.com/premium_photo-1693242804203-e8de4e41f7b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.6, count: 178 },
},
{
  id: 70,
  title: "Casual Cotton T-Shirt",
  price: 19.99,
  description: "Comfortable cotton t-shirt for daily casual wear. Soft and breathable.",
  category: "men's clothing",
  image: "https://plus.unsplash.com/premium_photo-1672239496593-f51cdc01c0f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.1, count: 95 },
},
{
  id: 71,
  title: "Slim Fit Jeans",
  price: 39.99,
  description: "Slim-fit denim jeans, stylish and comfortable for everyday wear.",
  category: "men's clothing",
  image: "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.4, count: 110 },
},
{
  id: 72,
  title: "Men's Hoodie",
  price: 29.99,
  description: "Casual hoodie with kangaroo pockets, perfect for street style and sports.",
  category: "men's clothing",
  image: "https://images.unsplash.com/flagged/photo-1552708068-ddef64d75aee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.2, count: 85 },
},
{
  id: 73,
  title: "Formal Button-Up Shirt",
  price: 34.99,
  description: "Classic formal shirt for office and formal events. Slim-fit cut.",
  category: "men's clothing",
  image: "https://images.unsplash.com/photo-1543960713-7538001f7c7d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.5, count: 72 },
},
{
  id: 74,
  title: "Men's Sweatpants",
  price: 24.99,
  description: "Comfortable sweatpants for lounging, gym, or casual wear.",
  category: "men's clothing",
  image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.0, count: 60 },
},
{
  id: 75,
  title: "Men's Leather Jacket",
  price: 89.99,
  description: "Stylish leather jacket, perfect for winter and casual outings.",
  category: "men's clothing",
  image: "https://images.unsplash.com/photo-1557684387-08927d28c72a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.6, count: 101 },
},
{
  id: 76,
  title: "Graphic T-Shirt",
  price: 21.99,
  description: "Trendy graphic t-shirt made with 100% cotton for casual wear.",
  category: "men's clothing",
  image: "https://images.unsplash.com/photo-1566070143658-523a24797109?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.3, count: 92 },
},
{
  id: 77,
  title: "Men's Polo Shirt",
  price: 27.99,
  description: "Classic polo shirt with breathable fabric. Ideal for casual or semi-formal.",
  category: "men's clothing",
  image: "https://plus.unsplash.com/premium_photo-1664474612991-2147a048883a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.4, count: 78 },
},
{
  id: 78,
  title: "Men's Chino Pants",
  price: 33.99,
  description: "Slim-fit chino pants for a stylish and comfortable look.",
  category: "men's clothing",
  image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.1, count: 80 },
},
{
  id: 79,
  title: "Men's Winter Coat",
  price: 99.99,
  description: "Warm winter coat with modern design, perfect for cold weather.",
  category: "men's clothing",
  image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.7, count: 112 },
},
{
  id: 80,
  title: "Casual Shorts",
  price: 22.99,
  description: "Comfortable shorts for summer outings and casual wear.",
  category: "men's clothing",
  image: "https://images.unsplash.com/photo-1552252059-9d77e4059ad1?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.0, count: 68 },
},
{
  id: 81,
  title: "Men's Vest Jacket",
  price: 49.99,
  description: "Lightweight vest jacket, great for layering during spring or fall.",
  category: "men's clothing",
  image: "https://plus.unsplash.com/premium_photo-1688497831535-120bd47d9f9c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.3, count: 57 },
},
{
  id: 82,
  title: "Men's Long Sleeve Shirt",
  price: 31.99,
  description: "Casual long sleeve shirt suitable for work or casual outings.",
  category: "men's clothing",
  image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.2, count: 63 },
},
{
  id: 83,
  title: "Men's Jogger Pants",
  price: 28.99,
  description: "Comfortable jogger pants with elastic waistband for sports and leisure.",
  category: "men's clothing",
  image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.1, count: 75 },
},
{
  id: 84,
  title: "Men's Casual Blazer",
  price: 69.99,
  description: "Stylish casual blazer perfect for semi-formal or evening occasions.",
  category: "men's clothing",
  image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.5, count: 89 },
},
{
  id: 85,
  title: "Men's Summer Tank Top",
  price: 15.99,
  description: "Lightweight and breathable tank top for summer and gym wear.",
  category: "men's clothing",
  image: "https://plus.unsplash.com/premium_photo-1661326297568-65045688d10a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.0, count: 66 },
},
{
  id: 100,
  title: "Elegant Gold Pendant Necklace",
  price: 199,
  description: "Delicate gold pendant necklace perfect for everyday elegance.",
  category: "jewelery",
  image: "https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.5, count: 150 },
},
{
  id: 101,
  title: "Silver Hoop Earrings",
  price: 89,
  description: "Classic silver hoop earrings that complement any outfit.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.3, count: 120 },
},
{
  id: 102,
  title: "Rose Gold Bracelet",
  price: 129,
  description: "Stylish rose gold bracelet with a modern minimalist design.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1578469488462-96f9af23e4b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.6, count: 95 },
},
{
  id: 103,
  title: "Diamond Stud Earrings",
  price: 499,
  description: "Sparkling diamond stud earrings for a timeless classic look.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1518370265276-f22b706aeac8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.8, count: 200 },
},
{
  id: 104,
  title: "Pearl Necklace",
  price: 249,
  description: "Elegant pearl necklace perfect for formal occasions.",
  category: "jewelery",
  image: "https://plus.unsplash.com/premium_photo-1674255466836-f38d1cc6fd0d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.7, count: 130 },
},
{
  id: 105,
  title: "Men's Leather Bracelet",
  price: 79,
  description: "Stylish leather bracelet for men with adjustable size.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.4, count: 110 },
},
{
  id: 106,
  title: "Gold Chain Ring",
  price: 149,
  description: "Elegant gold chain ring for a subtle statement.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.5, count: 90 },
},
{
  id: 107,
  title: "Sapphire Pendant Necklace",
  price: 299,
  description: "Blue sapphire pendant set in sterling silver, perfect gift.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.6, count: 85 },
},
{
  id: 108,
  title: "Gold Hoop Earrings",
  price: 139,
  description: "Trendy gold hoop earrings for casual and formal occasions.",
  category: "jewelery",
  image: "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.5, count: 102 },
},
{
  id: 109,
  title: "Amethyst Bracelet",
  price: 179,
  description: "Natural amethyst bracelet with elegant bead design.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.6, count: 88 },
},
{
  id: 110,
  title: "Rose Gold Stud Earrings",
  price: 99,
  description: "Minimalist rose gold stud earrings for everyday wear.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.4, count: 105 },
},
{
  id: 111,
  title: "Turquoise Pendant",
  price: 199,
  description: "Turquoise stone pendant set in sterling silver chain.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1631965004544-1762fc696476?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.5, count: 78 },
},
{
  id: 112,
  title: "Silver Bangle Bracelet",
  price: 129,
  description: "Elegant silver bangle bracelet with minimal design.",
  category: "jewelery",
  image: "https://plus.unsplash.com/premium_photo-1671641737519-a69a7d324ce6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.3, count: 99 },
},
{
  id: 113,
  title: "Gold Layered Necklace",
  price: 249,
  description: "Stylish layered gold necklace for a modern look.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.7, count: 120 },
},
{
  id: 114,
  title: "Men's Beaded Bracelet",
  price: 89,
  description: "Casual beaded bracelet for men, ideal for everyday wear.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1600721391689-2564bb8055de?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.4, count: 92 },
},
{
  id: 115,
  title: "Diamond Pendant Necklace",
  price: 599,
  description: "Elegant diamond pendant necklace for a luxurious gift.",
  category: "jewelery",
  image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  rating: { rate: 4.8, count: 150 },
},


];

export default product_data;
