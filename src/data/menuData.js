const menuData = {
  "Starters-Appetizers": [
    {
      id: 1,
      name: "French Fries",
      description: "Plain and fresh cut french fries",
      sizes: [
        { label: "Regular", price: 250 },
        { label: "Large", price: 350 },
      ],
      image: "/images/frenchfries.png",
    },
    {
      id: 2,
      name: "Mayo Fries",
      description: "French fries topped with special mayo sauce",
      sizes: [
        { label: "Regular", price: 350 },
        { label: "Large", price: 450 },
      ],
      image: "/images/mayofries1.png",
    },
    {
      id: 3,
      name: "Oven Baked Wings",
      description:
        "Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
      sizes: [
        { label: "6 Pcs", price: 350 },
        { label: "12 Pcs", price: 650 },
      ],
      image: "/images/ovenbakedwingss.png",
    },
    {
      id: 4,
      name: "Nuggets",
      description: "Chicken nuggets served with ketchup",
      sizes: [
        { label: "6 Pcs", price: 350 },
        { label: "12 Pcs", price: 650 },
      ],
      image: "/images/nuggets.png",
    },
    {
      id: 5,
      name: "Chicken Cheese Stick ",
      description:
        "Small bread filled with mughlai chicken,cheese,onion,capsicum,black olives & special sauce",
      price: 800,
      image: "/images/chickensticks.png",
    },
    {
      id: 6,
      name: "Hot Wings",
      description: "Crunchy Fried Chicken Wings served with ketchup",
      sizes: [
        { label: "6 Pcs", price: 350 },
        { label: "12 Pcs", price: 650 },
      ],
      image: "/images/hotwings.png",
    },
  ],
  "Stonebake-pasta": [
    {
      id: 1,
      name: "Crunchy Pasta",
      description:
        "Rotini macaroni, chicken, white sauce,cream mix, cheese, zinger & special sauce",
      price: 800,
      image: "/images/crunchypasta.png",
    },
    {
      id: 2,
      name: "Creamy Pasta",
      description:
        "Elbow macaroni, chicken, white sauce cream mix, green chilli, cheese & special sauce",
      price: 700,
      image: "/images/creamypasta.png",
    },
    {
      id: 3,
      name: "Alfredo Pasta",
      description:
        "Alfredo strips, chicken, white sauce, cream mix, cheese & special sauce",
      price: 750,
      image: "/images/alfredo.png",
    },
    {
      id: 4,
      name: "Loaded fries",
      description:
        "French fries with cheese, chicken,black olives, capsicum, & specid sauce",
      price: 650,
      image: "/images/loadedfires.png",
    },
    {
      id: 5,
      name: "Calzone chunks",
      description:
        "4 Pieces calzone chunks served with special sauce & ketchup",
      price: 850,
      image: "/images/calzonechunks.png",
    },
    {
      id: 6,
      name: "Kabab bites",
      description:
        "4 Pieces kabab bites filled with dip sauce & cheese served with special sauce and ketchup",
      price: 1150,
      image: "/images/kababbites.png",
    },
  ],
  "Regular-pizza": [
    {
      id: 1,
      name: "Chicken Tikka",
      description:
        "Chicken Tikka, Red Sauce, Onion, Cheese, Black Olives & Capsicum",
      sizes: [
        { label: "S", price: 500 },
        { label: "M", price: 900 },
        { label: "L", price: 1200 },
        { label: "XL", price: 1700 },
      ],
      image: "/images/chickentikka.png",
    },
    {
      id: 2,
      name: "Chicken Fajita",
      description: "Chicken Fajita, Red Sauce, Onion, Cheese & Capsicum",
      sizes: [
        { label: "S", price: 500 },
        { label: "M", price: 900 },
        { label: "L", price: 1200 },
        { label: "XL", price: 1700 },
      ],
      image: "/images/fajita.png",
    },
    {
      id: 3,
      name: "Hot & Spicy",
      description:
        "Fajita Chicken, Red Sauce, Onion, Cheese, Capsicum, Tomatoes & Crush Chilli",
      sizes: [
        { label: "S", price: 500 },
        { label: "M", price: 900 },
        { label: "L", price: 1200 },
        { label: "XL", price: 1700 },
      ],
      image: "/images/hotnspicy.png",
    },
    {
      id: 4,
      name: "Cheese Lover",
      description: "Red Sauce, Cheese",
      sizes: [
        { label: "S", price: 500 },
        { label: "M", price: 900 },
        { label: "L", price: 1200 },
        { label: "XL", price: 1700 },
      ],
      image: "/images/cheeselover.png",
    },
    {
      id: 5,
      name: "Veggie Lover",
      description:
        "Red Sauce, Capsicum, Onion, Tomatoes, Mushroom, Cheese, Sweet Corns, Jalapeno & All Veg",
      sizes: [
        { label: "S", price: 500 },
        { label: "M", price: 900 },
        { label: "L", price: 1200 },
        { label: "XL", price: 1700 },
      ],
      image: "/images/veglover.png",
    },
    {
      id: 6,
      name: "Achar Gosht",
      description:
        "Red Sauce, Tikka Chicken, Achar Onion, Cheese, Capsicum & Black Olives",
      sizes: [
        { label: "S", price: 500 },
        { label: "M", price: 900 },
        { label: "L", price: 1200 },
        { label: "XL", price: 1700 },
      ],
      image: "/images/achari.png",
    },
  ],
  "Classic-pizza": [
    {
      id: 1,
      name: "Peri Peri",
      description:
        "Mix Chicken, Extreme Sauce, Onion, Cheese, Black Olives & Mushroom",
      sizes: [
        { label: "M", price: 1100 },
        { label: "L", price: 1400 },
        { label: "XL", price: 1900 },
      ],
      image: "/images/periperipizza.png",
    },
    {
      id: 2,
      name: "Malai Boti",
      description:
        "Malai Boti, Onion, Cheese, Tomato, Black Olives & Special Sauce",
      sizes: [
        { label: "M", price: 1100 },
        { label: "L", price: 1400 },
        { label: "XL", price: 1900 },
      ],
      image: "/images/malaiboti.png",
    },
    {
      id: 3,
      name: "Mughlai",
      description:
        "Mughlai Chicken, Onion, Cheese, Capsicum, Mushroom, Tomato & Dip Sauce",
      sizes: [
        { label: "M", price: 1100 },
        { label: "L", price: 1400 },
        { label: "XL", price: 1900 },
      ],
      image: "/images/mughlai.png",
    },
    {
      id: 4,
      name: "Stone Bake Special",
      description:
        "Mix Chicken, Onion, Capsicum, Tomato, Black Olives, Sweet Corn, Mushroom & Special Sauce",
      sizes: [
        { label: "S", price: 550 },
        { label: "M", price: 1000 },
        { label: "L", price: 1300 },
        { label: "XL", price: 1800 },
      ],
      image: "/images/stonebakespecial.png",
    },
    {
      id: 5,
      name: "Supreme",
      description:
        "Mix Chicken, Red Sauce, Onion, Cheese, Capsicum, Black Olives & Mushroom",
      sizes: [
        { label: "S", price: 550 },
        { label: "M", price: 1000 },
        { label: "L", price: 1300 },
        { label: "XL", price: 1800 },
      ],
      image: "/images/supremepizza.png",
    },
  ],
  "Special-pizza": [
    {
      id: 1,
      name: "Crown Crust",
      description:
        "Mughlai Chicken, Onion, Cheese, Capsicum, Black Olives & Special Sauce",
      sizes: [
        { label: "M", price: 1200 },
        { label: "L", price: 1500 },
        { label: "XL", price: 2000 },
      ],
      stuffingOptions: ["Chicken", "Kebab", "Cheese"],
      image: "/images/crowncrust.png",
    },
    {
      id: 2,
      name: "Kebab Stuffer",
      description:
        "Chicken Kebab, Tikka Chicken, Onion, Cheese, Capsicum, Mushroom, Black Olives & Dip Sauce",
      sizes: [
        { label: "M", price: 1200 },
        { label: "L", price: 1500 },
        { label: "XL", price: 2000 },
      ],
      stuffingOptions: ["Chicken", "Kebab", "Cheese"],
      image: "/images/kebabstuffer.png",
    },
    {
      id: 3,
      name: "Behari Kebab",
      description:
        "Fajita Chicken, Kebab, Black Olives, Onion, Cheese, Capsicum & Special Sauce",
      sizes: [
        { label: "M", price: 1200 },
        { label: "L", price: 1500 },
        { label: "XL", price: 2000 },
      ],
      stuffingOptions: ["Chicken", "Kebab", "Cheese"],
      image: "/images/beharipizza.png",
    },
    {
      id: 4,
      name: "Lasagna Square",
      description:
        "Tikka Chicken, Macaroni, Onion, Tomato, Red Sauce, Capsicum, Cheese, Sweet Corn & Special Sauce",
      sizes: [
        { label: "M", price: 1200 },
        { label: "L", price: 1500 },
        { label: "XL", price: 2000 },
      ],
      stuffingOptions: ["Chicken", "Kebab", "Cheese"],
      image: "/images/lasagnapizza.png",
    },
    {
      id: 5,
      name: "Stone Bake Square",
      description:
        "Mix Chicken, Onion, Cheese, Mushroom, Black Olives, Capsicum & Special Sauce",
      sizes: [
        { label: "M", price: 1200 },
        { label: "L", price: 1500 },
        { label: "XL", price: 2000 },
      ],
      stuffingOptions: ["Chicken", "Kebab", "Cheese"],
      image: "/images/stonebakesquare.png",
    },
    {
      id: 6,
      name: "Stuff Square",
      description:
        "Chicken Kebab, Chicken Tikka, Onion, Cheese, Capsicum, Mushroom, Black Olives & Special Sauce",
      sizes: [
        { label: "M", price: 1200 },
        { label: "L", price: 1500 },
        { label: "XL", price: 2000 },
      ],
      stuffingOptions: ["Chicken", "Kebab", "Cheese"],
      image: "/images/stuffsquare.png",
    },
  ],
  "Burgers-sandwiches": [
    {
      id: 1,
      name: "Patty Burger",
      description:
        "Crispy, spicy chicken patty topped with fresh salad and our signature sauce",
      price: 350,
      image: "/images/pattyburger.png",
    },
    {
      id: 2,
      name: "Zinger Burger",
      description:
        "Tender chicken pieces, coated in a crispy batter served with special sauce",
      price: 400,
      image: "/images/zinger.png",
    },
    {
      id: 3,
      name: "Double Smokey Burger",
      description:
        "Double patty with a rich smoky flavor, piled high with crispy onion rings and tangy BBQ sauce",
      price: 550,
      image: "/images/doublesmoky.png",
    },
    {
      id: 4,
      name: "Chapli Burger",
      description:
        "Chapli patty stacked with crispy onion rings and rich cheddar, drizzled with special sauce",
      price: 450,
      image: "/images/chapliburger.png",
    },
    {
      id: 5,
      name: "Mexican Sandwich",
      description:
        "Sandwich bread, chicken tikka, onion, capsicum, iceberg lettuce, chilli ketchup & special sauce",
      price: 800,
      image: "/images/maxicansandwich.png",
    },
    {
      id: 6,
      name: "Zinger Sandwich",
      description:
        "Tender chicken pieces, coated in a crispy batter served with special sauce",
      price: 900,
      image: "/images/zingersandwich.png",
    },
  ],
  hotdeals: [
    {
      id: 1,
      name: "Deal 1",
      description: "1 Paratha Roll, 1 Chicken Burger, 1 Cold Drink 500ml",
      price: 690,
      image: "/images/deal1.png",
    },
    {
      id: 2,
      name: "Deal 2",
      description: "1 Zinger Burger, 1 Chicken Shawarma, 1 Cold Drink 500ml",
      price: 720,
      image: "/images/deal2.png",
    },
    {
      id: 3,
      name: "Deal 3",
      description:
        "1 Zinger Burger, 1 Paratha Roll, 1 Chicken Shawarma, 1 Cold Drink 500ml",
      price: 960,
      image: "/images/deal3.png",
    },
    {
      id: 4,
      name: "Deal 4",
      description: "1 Small Pizza, 1 Zinger Burger, 1 Cold Drink 500ml",
      price: 1000,
      image: "/images/deal4.png",
    },
    {
      id: 5,
      name: "Deal 5",
      description:
        "1 Medium Pizza, 2 Zinger Burger, 2 Chicken Shawarma, 1 Cold Drink 1.5L",
      price: 2340,
      image: "/images/deal5.png",
    },
    {
      id: 6,
      name: "Deal 6",
      description:
        "1 Large Pizza, 2 Zinger Burger, 2 Paratha Roll, 1 Cold Drink 1.5L",
      price: 2680,
      image: "/images/deal6.png",
    },
    {
      id: 7,
      name: "Student Deal",
      description: "1 Small Pizza, 1 Drink 350ml",
      price: 560,
      image: "/images/studentdeal.png",
    },
    {
      id: 8,
      name: "Evening Deal",
      description: "1 Large Pizza, 1 Drink 1L",
      price: 1360,
      image: "/images/eveningdeal.png",
    },
    {
      id: 9,
      name: "Midnight Deal",
      description: "2 Large Pizza, 1 Drink 1.5L",
      price: 2580,
      image: "/images/midnightdeal.png",
    },
    {
      id: 10,
      name: "Big Deal 1",
      description:
        "1 Large Pizza, 1 Small Pizza, 1 Zinger Burger, 1 Chicken Burger, 1 Paratha Roll, 1 Drink 1.5L",
      price: 2890,
      image: "/images/deal.png",
    },
    {
      id: 11,
      name: "Big Deal 2",
      description:
        "2 Large Pizza, 2 Zinger Burger, 2 Chicken Burger, 2 Chicken Shawarma, 2 Paratha Roll, 2 Drink 1.5L",
      price: 5200,
      image: "/images/deal.png",
    },
  ],
  "Shawarma-Rolls": [
    {
      id: 1,
      name: "Spin Rolls",
      description:
        "Tortilla bread filled with chicken tikka, jalapeno, onion & sweet corn. Served with special dip sauce",
      price: 580,
      image: "/images/spinrolls.png",
    },
    {
      id: 2,
      name: "Kabab Rolls",
      description:
        "Paratha filled with chicken kabab, mayo, salad & chilli ketchup",
      price: 700,
      image: "/images/kababrolls.png",
    },
    {
      id: 3,
      name: "Zinger Roll",
      description:
        "Paratha filled with chicken zinger, mayo, salad & chilli ketchup",
      price: 350,
      image: "/images/zingerroll.png",
    },
    {
      id: 4,
      name: "Chicken Shawarma",
      description:
        "Shawarma bread filled with chicken, cucumber, salad, spicy sauce & special shawarma sauce",
      price: 220,
      image: "/images/chickenshawrma.png",
    },
    {
      id: 5,
      name: "Chicken Paratha",
      description:
        "Paratha bread filled with chicken, cucumber, salad, spicy sauce & special shawarma sauce",
      price: 240,
      image: "/images/chickenparatha.png",
    },
    {
      id: 6,
      name: "Chicken Shawarma Deal",
      description: "2 Chicken Shawarma, 1 Drink 500ml",
      price: 540,
      image: "/images/shawrmadeal.png",
    },
    {
      id: 7,
      name: "Chicken Paratha Deal",
      description: "2 Chicken Paratha, 1 Drink 500ml",
      price: 580,
      image: "/images/paratharolldeal.png",
    },
    {
      id: 8,
      name: "Roll Platter",
      description:
        "4 Pcs Spin Rolls, 6 Pcs Oven Baked Wings served with Fries, Dip Sauce & Ketchup",
      price: 1100,
      image: "/images/platter.png",
    },
  ],
};
export default menuData;
