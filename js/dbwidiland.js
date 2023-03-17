const widianLevel = [
    {
        level: "0",
        hashpoint: "0 - 499",
        ticket: "1",
        ordercooldown: "1h",
        mwso: "50",
        restoreenergy: "2h",
        energyrestored: "12",
    },
    {
        level: "1",
        hashpoint: "500 - 999",
        ticket: "1",
        ordercooldown: "15m",
        mwso: "200",
        restoreenergy: "1h30m",
        energyrestored: "16",
    },
    {
        level: "2",
        hashpoint: "1.000 - 1.499",
        ticket: "2",
        ordercooldown: "10m",
        mwso: "350",
        restoreenergy: "1h",
        energyrestored: "24",
    },
    {
        level: "3",
        hashpoint: "1.500 - 1.999",
        ticket: "3",
        ordercooldown: "5m",
        mwso: "450",
        restoreenergy: "30m",
        energyrestored: "48",
    },
    {
        level: "4",
        hashpoint: "2.000 - 4.999",
        ticket: "4",
        ordercooldown: "3m",
        mwso: "550",
        restoreenergy: "20m",
        energyrestored: "72",
    },
    {
        level: "5",
        hashpoint: "5.000 - 9.999",
        ticket: "12",
        ordercooldown: "2m",
        mwso: "1400",
        restoreenergy: "10m",
        energyrestored: "144",
    },
    {
        level: "6",
        hashpoint: "10.000",
        ticket: "25",
        ordercooldown: "1m",
        mwso: "2650",
        restoreenergy: "5m",
        energyrestored: "288",
    },
];

const miningEnergy = [
    {
        rarity: "Common",
        rarityBr: "Comum",
        character: "1",
        land: "3",
    },
    {
        rarity: "Uncommon",
        rarityBr: "Incomum",
        character: "2",
        land: "6",
    },
    {
        rarity: "Rare",
        rarityBr: "Raro",
        character: "3",
        land: "9",
    },
    {
        rarity: "Epic",
        rarityBr: "Épico",
        character: "5",
        land: "15",
    },
    {
        rarity: "Legendary",
        rarityBr: "Lendário",
        character: "10",
        land: "30",
    },
];

const exploringResources = [
    {
        level: "1",
        subitem: [
            {
                resource: "Wood Trunk",
                resourceBr: "Madeira",
                energy: "2",
                time: "5m",
                restore: "1h",
            },
            {
                resource: "Clay Ore",
                resourceBr: "Argila",
                energy: "2",
                time: "5m",
                restore: "1h",
            },
            {
                resource: "Bronze Ore",
                resourceBr: "Bronze",
                energy: "2",
                time: "5m",
                restore: "1h30m",
            },
            {
                resource: "Silver Ore",
                resourceBr: "Prata",
                energy: "3",
                time: "10m",
                restore: "2h",
            },
            {
                resource: "Golg Ore",
                resourceBr: "Ouro",
                energy: "5",
                time: "15m",
                restore: "5h",
            },
        ],
    },
    {
        level: "2",
        subitem: [
            {
                resource: "Wood Trunk",
                resourceBr: "Madeira",
                energy: "4",
                time: "10m",
                restore: "1h30m",
            },
            {
                resource: "Clay Ore",
                resourceBr: "Argila",
                energy: "5",
                time: "10m",
                restore: "1h30m",
            },
            {
                resource: "Bronze Ore",
                resourceBr: "Bronze",
                energy: "4",
                time: "10m",
                restore: "2h30m",
            },
            {
                resource: "Silver Ore",
                resourceBr: "Prata",
                energy: "5",
                time: "20m",
                restore: "3h",
            },
            {
                resource: "Golg Ore",
                resourceBr: "Ouro",
                energy: "10",
                time: "25m",
                restore: "6h",
            },
        ],
    },
    {
        level: "3",
        subitem: [
            {
                resource: "Wood Trunk",
                resourceBr: "Madeira",
                energy: "5",
                time: "20m",
                restore: "1h45m",
            },
            {
                resource: "Clay Ore",
                resourceBr: "Argila",
                energy: "7",
                time: "20m",
                restore: "1h45m",
            },
            {
                resource: "Bronze Ore",
                resourceBr: "Bronze",
                energy: "5",
                time: "20m",
                restore: "3h",
            },
            {
                resource: "Silver Ore",
                resourceBr: "Prata",
                energy: "7",
                time: "30m",
                restore: "3h30m",
            },
            {
                resource: "Golg Ore",
                resourceBr: "Ouro",
                energy: "15",
                time: "25m",
                restore: "6h30m",
            },
        ],
    },
];

const dailyQuest = [
    {
        dq: "1",
        star1: "50",
        star2: "200",
        star3: "250",
    },
    {
        dq: "2",
        star1: "150",
        star2: "200",
        star3: "300",
    },
    {
        dq: "3",
        star1: "150",
        star2: "150",
        star3: "200",
    },
    {
        dq: "4",
        star1: "100",
        star2: "150",
        star3: "250",
    },
    {
        dq: "5",
        star1: "100",
        star2: "150",
        star3: "250",
    },
];

const plantationField = [
    {
        purchases: "1st purchase",
        purchasesBr: "1ª compra",
        cost: "0",
    },
    {
        purchases: "2nd purchase",
        purchasesBr: "2ª compra",
        cost: "250",
    },
    {
        purchases: "3rd purchase",
        purchasesBr: "3ª compra",
        cost: "800",
    },
];

const storage = [
    {
        increase: "15",
        total: "115",
        cost: "200",
        items: [
            {
                qty: "",
                item: "",
                itemBr: "",
            },
        ],
    },
    {
        increase: "25",
        total: "140",
        cost: "300",
        items: [
            {
                qty: "10x",
                item: "Wheat",
                itemBr: "Trigo",
            },
        ],
    },
    {
        increase: "25",
        total: "165",
        cost: "400",
        items: [
            {
                qty: "10x",
                item: "Wheat",
                itemBr: "Trigo",
            },
            {
                qty: "10x",
                item: "Corn",
                itemBr: "Milho",
            },
        ],
    },
    {
        increase: "25",
        total: "190",
        cost: "500",
        items: [
            {
                qty: "20x",
                item: "Carrot",
                itemBr: "Cenoura",
            },
        ],
    },
    {
        increase: "25",
        total: "215",
        cost: "600",
        items: [
            {
                qty: "20x",
                item: "Bread",
                itemBr: "Pão",
            },
            {
                qty: "20x",
                item: "Tomato",
                itemBr: "Tomate",
            },
        ],
    },
    {
        increase: "25",
        total: "240",
        cost: "700",
        items: [
            {
                qty: "30x",
                item: "Cotton",
                itemBr: "Algodão",
            },
        ],
    },
    {
        increase: "25",
        total: "265",
        cost: "800",
        items: [
            {
                qty: "30x",
                item: "Cheese",
                itemBr: "Queijo",
            },
            {
                qty: "30x",
                item: "Silk",
                itemBr: "Seda",
            },
        ],
    },
    {
        increase: "25",
        total: "290",
        cost: "900",
        items: [
            {
                qty: "40x",
                item: "Cocoa",
                itemBr: "Cacau",
            },
        ],
    },
    {
        increase: "25",
        total: "315",
        cost: "1000",
        items: [
            {
                qty: "40x",
                item: "Cookies",
                itemBr: "Biscoitos",
            },
            {
                qty: "40x",
                item: "Pepper",
                itemBr: "Pimenta",
            },
        ],
    },
    {
        increase: "25",
        total: "340",
        cost: "1100",
        items: [
            {
                qty: "50x",
                item: "Rubber Tree",
                itemBr: "Látex",
            },
        ],
    },
    {
        increase: "25",
        total: "365",
        cost: "1200",
        items: [
            {
                qty: "50x",
                item: "Rubber Tree",
                itemBr: "Látex",
            },
            {
                qty: "50x",
                item: "Strawberry",
                itemBr: "Morango",
            },
        ],
    },
    {
        increase: "25",
        total: "390",
        cost: "1300",
        items: [
            {
                qty: "60x",
                item: "Coffee",
                itemBr: "Café",
            },
        ],
    },
    {
        increase: "25",
        total: "415",
        cost: "1400",
        items: [
            {
                qty: "60x",
                item: "Coffee",
                itemBr: "Café",
            },
            {
                qty: "60x",
                item: "Rose",
                itemBr: "Rosa",
            },
        ],
    },
    {
        increase: "25",
        total: "440",
        cost: "1500",
        items: [
            {
                qty: "40x",
                item: "Sugarcane",
                itemBr: "Cana de açúcar",
            },
            {
                qty: "40x",
                item: "Potato",
                itemBr: "Batata",
            },
            {
                qty: "40x",
                item: "Rice",
                itemBr: "Arroz",
            },
        ],
    },
    {
        increase: "25",
        total: "465",
        cost: "1600",
        items: [
            {
                qty: "45x",
                item: "Potato",
                itemBr: "Batata",
            },
            {
                qty: "45x",
                item: "Rice",
                itemBr: "Arroz",
            },
            {
                qty: "45x",
                item: "Peanut",
                itemBr: "Amendoim",
            },
        ],
    },
    {
        increase: "25",
        total: "490",
        cost: "1700",
        items: [
            {
                qty: "50x",
                item: "Rice",
                itemBr: "Arroz",
            },
            {
                qty: "50x",
                item: "Peanut",
                itemBr: "Amendoim",
            },
            {
                qty: "50x",
                item: "Tea",
                itemBr: "Chá",
            },
        ],
    },
    {
        increase: "25",
        total: "515",
        cost: "1800",
        items: [
            {
                qty: "55x",
                item: "Cookies",
                itemBr: "Biscoitos",
            },
            {
                qty: "55x",
                item: "Cheese",
                itemBr: "Queijo",
            },
            {
                qty: "55x",
                item: "Yarn",
                itemBr: "Lã",
            },
        ],
    },
    {
        increase: "25",
        total: "540",
        cost: "1900",
        items: [
            {
                qty: "60x",
                item: "Syrup",
                itemBr: "Xarope",
            },
            {
                qty: "60x",
                item: "Coat",
                itemBr: "Casaco",
            },
            {
                qty: "60x",
                item: "Peanut",
                itemBr: "Amendoim",
            },
        ],
    },
    {
        increase: "50",
        total: "590",
        cost: "2000",
        items: [
            {
                qty: "65x",
                item: "Egg",
                itemBr: "Ovo",
            },
            {
                qty: "65x",
                item: "Wool",
                itemBr: "Novelo de Lã",
            },
            {
                qty: "65x",
                item: "Honey",
                itemBr: "Mel",
            },
        ],
    },
    {
        increase: "50",
        total: "640",
        cost: "2100",
        items: [
            {
                qty: "70x",
                item: "Granola",
                itemBr: "Granola",
            },
            {
                qty: "70x",
                item: "Sandwich",
                itemBr: "Sanduíche",
            },
            {
                qty: "70x",
                item: "Popsicle",
                itemBr: "Picolé",
            },
        ],
    },
    {
        increase: "50",
        total: "690",
        cost: "2200",
        items: [
            {
                qty: "75x",
                item: "Yogurt",
                itemBr: "Iogurte",
            },
            {
                qty: "75x",
                item: "Caramel",
                itemBr: "Caramelo",
            },
            {
                qty: "75x",
                item: "Muffin",
                itemBr: "Muffin",
            },
        ],
    },
    {
        increase: "50",
        total: "740",
        cost: "2300",
        items: [
            {
                qty: "80x",
                item: "Grape",
                itemBr: "Uva",
            },
            {
                qty: "80x",
                item: "Strawberry",
                itemBr: "Morango",
            },
            {
                qty: "80x",
                item: "Rose",
                itemBr: "Rosa",
            },
        ],
    },
    {
        increase: "50",
        total: "790",
        cost: "2400",
        items: [
            {
                qty: "85x",
                item: "Plum",
                itemBr: "Ameixa",
            },
            {
                qty: "85x",
                item: "Potato Bread",
                itemBr: "Pão de Batata",
            },
            {
                qty: "85x",
                item: "Strawberry Jam",
                itemBr: "Geléia de Morango",
            },
        ],
    },
    {
        increase: "50",
        total: "840",
        cost: "2500",
        items: [
            {
                qty: "90x",
                item: "Lemon",
                itemBr: "Limão",
            },
            {
                qty: "90x",
                item: "French Fries",
                itemBr: "Batata Frita",
            },
            {
                qty: "90x",
                item: "Brownie",
                itemBr: "Brownie",
            },
        ],
    },
    {
        increase: "50",
        total: "890",
        cost: "2600",
        items: [
            {
                qty: "95x",
                item: "Coconut",
                itemBr: "Coco",
            },
            {
                qty: "95x",
                item: "Bacon",
                itemBr: "Bacon",
            },
            {
                qty: "95x",
                item: "Silk Fabric",
                itemBr: "Tecido de Seda",
            },
        ],
    },
    {
        increase: "50",
        total: "940",
        cost: "2700",
        items: [
            {
                qty: "100x",
                item: "Peach",
                itemBr: "Pêssego",
            },
            {
                qty: "100x",
                item: "Potato Chips",
                itemBr: "Chips de Batata",
            },
            {
                qty: "100x",
                item: "French Fries",
                itemBr: "Batata Frita",
            },
        ],
    },
    {
        increase: "50",
        total: "990",
        cost: "2800",
        items: [
            {
                qty: "105x",
                item: "Strawberry Jam",
                itemBr: "Geléia de Morango",
            },
            {
                qty: "105x",
                item: "Peach Marmalade",
                itemBr: "Marmelada de Pêssego",
            },
            {
                qty: "105x",
                item: "Watermelon Jam",
                itemBr: "Geléia de Melancia",
            },
        ],
    },
    {
        increase: "50",
        total: "1040",
        cost: "2900",
        items: [
            {
                qty: "110x",
                item: "Olive",
                itemBr: "Azeitona",
            },
            {
                qty: "110x",
                item: "Fish",
                itemBr: "Peixe",
            },
            {
                qty: "110x",
                item: "Donut",
                itemBr: "Donut",
            },
        ],
    },
    {
        increase: "50",
        total: "1090",
        cost: "3000",
        items: [
            {
                qty: "115x",
                item: "Hat",
                itemBr: "Chapéu",
            },
            {
                qty: "115x",
                item: "Dress",
                itemBr: "Vestido",
            },
            {
                qty: "115x",
                item: "Suit",
                itemBr: "Traje",
            },
        ],
    },
    {
        increase: "50",
        total: "1140",
        cost: "3100",
        items: [
            {
                qty: "120x",
                item: "Banana",
                itemBr: "Banana",
            },
            {
                qty: "120x",
                item: "Dress",
                itemBr: "Vestido",
            },
            {
                qty: "120x",
                item: "Key Lime Pie",
                itemBr: "Torta de Limão",
            },
        ],
    },
    {
        increase: "50",
        total: "1190",
        cost: "3200",
        items: [
            {
                qty: "125x",
                item: "Bacon",
                itemBr: "Bacon",
            },
            {
                qty: "125x",
                item: "Fish",
                itemBr: "Peixe",
            },
            {
                qty: "125x",
                item: "Feather",
                itemBr: "Pena",
            },
        ],
    },
    {
        increase: "50",
        total: "1240",
        cost: "3300",
        items: [
            {
                qty: "130x",
                item: "Pineapple",
                itemBr: "Abacaxi",
            },
            {
                qty: "130x",
                item: "Banana Bread",
                itemBr: "Pão de Banana",
            },
            {
                qty: "130x",
                item: "Plum Jam",
                itemBr: "Geléia de Ameixa",
            },
        ],
    },
    {
        increase: "50",
        total: "1290",
        cost: "3400",
        items: [
            {
                qty: "135x",
                item: "Silk Fabric",
                itemBr: "Tecido de Seda",
            },
            {
                qty: "135x",
                item: "Frozen Yogurt",
                itemBr: "Iogurte Gelado",
            },
            {
                qty: "135x",
                item: "Chili Sauce",
                itemBr: "Molho de Pimenta",
            },
        ],
    },
    {
        increase: "50",
        total: "1340",
        cost: "3500",
        items: [
            {
                qty: "140x",
                item: "Peach",
                itemBr: "Pêssego",
            },
            {
                qty: "140x",
                item: "Peach Yogurt",
                itemBr: "Iogurte de Pêssego",
            },
            {
                qty: "140x",
                item: "Peach Marmalade",
                itemBr: "Marmelada de Pêssego",
            },
        ],
    },
    {
        increase: "50",
        total: "1390",
        cost: "3600",
        items: [
            {
                qty: "145x",
                item: "Feather",
                itemBr: "Pena",
            },
            {
                qty: "145x",
                item: "Glazed Bacon",
                itemBr: "Bacon Frito",
            },
            {
                qty: "145x",
                item: "Key Lime Pie",
                itemBr: "Torta de Limão",
            },
        ],
    },
    {
        increase: "50",
        total: "1440",
        cost: "3700",
        items: [
            {
                qty: "150x",
                item: "Rubber",
                itemBr: "Borracha",
            },
            {
                qty: "150x",
                item: "Plastic",
                itemBr: "Plástico",
            },
            {
                qty: "150x",
                item: "Glue",
                itemBr: "Cola",
            },
        ],
    },
    {
        increase: "50",
        total: "1490",
        cost: "3800",
        items: [
            {
                qty: "155x",
                item: "Chili Sauce",
                itemBr: "Molho de Pimenta",
            },
            {
                qty: "155x",
                item: "Burrito",
                itemBr: "Burrito",
            },
            {
                qty: "155x",
                item: "Nachos",
                itemBr: "Nachos",
            },
        ],
    },
    {
        increase: "50",
        total: "1540",
        cost: "3900",
        items: [
            {
                qty: "160x",
                item: "Baked Potato",
                itemBr: "Batata Assada",
            },
            {
                qty: "160x",
                item: "Potato Bread",
                itemBr: "Pão de Batata",
            },
            {
                qty: "160x",
                item: "Potato Chips",
                itemBr: "Chips de Batata",
            },
        ],
    },
    {
        increase: "50",
        total: "1590",
        cost: "4000",
        items: [
            {
                qty: "165x",
                item: "Fish",
                itemBr: "Peixe",
            },
            {
                qty: "165x",
                item: "Crab",
                itemBr: "Caranguejo",
            },
            {
                qty: "165x",
                item: "Lobster",
                itemBr: "Lagosta",
            },
        ],
    },
    {
        increase: "50",
        total: "1640",
        cost: "4100",
        items: [
            {
                qty: "170x",
                item: "Pineapple Sorbet",
                itemBr: "Sorvete de Abacaxi",
            },
            {
                qty: "170x",
                item: "Pineapple",
                itemBr: "Abacaxi",
            },
            {
                qty: "170x",
                item: "Pizza",
                itemBr: "Pizza",
            },
        ],
    },
    {
        increase: "50",
        total: "1690",
        cost: "4200",
        items: [
            {
                qty: "175x",
                item: "Bacon",
                itemBr: "Bacon",
            },
            {
                qty: "175x",
                item: "Honey",
                itemBr: "Mel",
            },
            {
                qty: "175x",
                item: "Feather",
                itemBr: "Pena",
            },
        ],
    },
    {
        increase: "50",
        total: "1740",
        cost: "4300",
        items: [
            {
                qty: "180x",
                item: "Puffed Rice",
                itemBr: "Arroz Tufado",
            },
            {
                qty: "180x",
                item: "Pasta",
                itemBr: "Massa",
            },
            {
                qty: "180x",
                item: "Sushi Roll",
                itemBr: "Sushi",
            },
        ],
    },
    {
        increase: "50",
        total: "1790",
        cost: "4400",
        items: [
            {
                qty: "185x",
                item: "Cafe Mocha",
                itemBr: "Café Mocha",
            },
            {
                qty: "185x",
                item: "Capuccino",
                itemBr: "Capuccino",
            },
            {
                qty: "185x",
                item: "Espresso",
                itemBr: "Espresso",
            },
        ],
    },
    {
        increase: "50",
        total: "1840",
        cost: "4500",
        items: [
            {
                qty: "190x",
                item: "Fish",
                itemBr: "Peixe",
            },
            {
                qty: "190x",
                item: "Fish Chips",
                itemBr: "Chips de Peixe",
            },
            {
                qty: "190x",
                item: "Sushi Roll",
                itemBr: "Rolo de Suchi",
            },
        ],
    },
    {
        increase: "50",
        total: "1890",
        cost: "4600",
        items: [
            {
                qty: "195x",
                item: "Pasta",
                itemBr: "Massa",
            },
            {
                qty: "195x",
                item: "Olive Oil",
                itemBr: "Óleo de Oliva",
            },
            {
                qty: "195x",
                item: "Seafood Pizza",
                itemBr: "Pizza de Marisco",
            },
        ],
    },
    {
        increase: "50",
        total: "1940",
        cost: "4700",
        items: [
            {
                qty: "200x",
                item: "Lobster",
                itemBr: "Lagosta",
            },
            {
                qty: "200x",
                item: "Lobster Sushi",
                itemBr: "Sushi de Lagosta",
            },
            {
                qty: "200x",
                item: "Lobster Tempura",
                itemBr: "Lagosta Frita",
            },
        ],
    },
    {
        increase: "50",
        total: "1990",
        cost: "4800",
        items: [
            {
                qty: "205x",
                item: "Mushroom Turnover",
                itemBr: "Empada de Cogumelos",
            },
            {
                qty: "205x",
                item: "Dried Mushroom",
                itemBr: "Cogumelos Desidratados",
            },
            {
                qty: "205x",
                item: "Caramelized Mushroom",
                itemBr: "Cogumelos Caramelizados",
            },
        ],
    },
    {
        increase: "50",
        total: "2040",
        cost: "4900",
        items: [
            {
                qty: "210x",
                item: "Rose",
                itemBr: "Rosa",
            },
            {
                qty: "210x",
                item: "Rose Jam",
                itemBr: "Geléia de Rosa",
            },
            {
                qty: "210x",
                item: "Rose Tea",
                itemBr: "Chá de Rosa",
            },
        ],
    },
    {
        increase: "50",
        total: "2090",
        cost: "5000",
        items: [
            {
                qty: "215x",
                item: "Black Tea",
                itemBr: "Chá Preto",
            },
            {
                qty: "215x",
                item: "Jasmine Tea",
                itemBr: "Chá de Jasmim",
            },
            {
                qty: "215x",
                item: "Rose Tea",
                itemBr: "Chá de Rosa",
            },
        ],
    },
];

const chars = [
	{
		name: 'Farmer',
		nameBr: 'Fazendeiro',
		desc: "It is responsible for planting and harvesting food. Each food has a different growth time, so once the farmer gets to work, you won't be able to take it out of the planting area until the last food is ready.",
		descBr: "É o responsável pela plantação e colheita dos alimentos. Cada alimento tem um tempo de crescimento diferente, então uma vez que o fazendeiro começa a trabalhar, você só poderá tirá-lo da área de plantio quando o último alimento estiver pronto.",
		raritys: [
			{
				rarity: 'Common',
				rarityBr: 'Comum',
				time: '0%',
				luck: '0%',
				exp: '0%',
				extra: '',
			},
			{
				rarity: 'Uncommon',
				rarityBr: 'Incomum',
				time: '-2~5%',
				luck: '2~3%',
				exp: '+2~5%',
				extra: '',
			},
			{
				rarity: 'Rare',
				rarityBr: 'Raro',
				time: '-7~10%',
				luck: '4~6%',
				exp: '+7~10%',
				extra: '',
			},
			{
				rarity: 'Epic',
				rarityBr: 'Épico',
				time: '-12~20%',
				luck: '7~10%',
				exp: '+12~20%',
				extra: '',
			},
			{
				rarity: 'Legendary',
				rarityBr: 'Lendário',
				time: '-22~33%',
				luck: '11~16%',
				exp: '+22~33%',
				extra: '',
			},
		],
	},
	{
		name: 'Breeder',
		nameBr: 'Criador',
		desc: "He is in charge of taking care of the animals on our farm. Eating food from crops, our animals produce many useful items and the Breeder is here to make sure they are taken care of well.",
		descBr: "Ele está encarregado de cuidar dos animais da nossa fazenda. Comendo os alimentos das plantações, nossos animais produzem diversos itens úteis e o Criador está aqui para garantir que eles sejam bem tratados.",
		raritys: [
			{
				rarity: 'Common',
				rarityBr: 'Comum',
				time: '0%',
				luck: '0%',
				exp: '0%',
				extra: '',
			},
			{
				rarity: 'Uncommon',
				rarityBr: 'Incomum',
				time: '-2~5%',
				luck: '2~3%',
				exp: '+2~5%',
				extra: '',
			},
			{
				rarity: 'Rare',
				rarityBr: 'Raro',
				time: '-7~10%',
				luck: '4~6%',
				exp: '+7~10%',
				extra: '',
			},
			{
				rarity: 'Epic',
				rarityBr: 'Épico',
				time: '-12~20%',
				luck: '7~10%',
				exp: '+12~20%',
				extra: '',
			},
			{
				rarity: 'Legendary',
				rarityBr: 'Lendário',
				time: '-22~33%',
				luck: '11~16%',
				exp: '+22~33%',
				extra: '',
			},
		],
	},
	{
		name: 'Cook',
		nameBr: 'Cozinheiro',
		desc: "Using all the food produced by the plantations and animals, he is able to prepare several types of industrialized products. Epic or Legendary Cooks can also produce special items that others cannot.",
		descBr: "Usando todos os alimentos produzidos pelas plantações e animais, ele consegue preparar diversos tipos de produtos industrializados. Os Cozinheiros épicos ou lendários também podem produzir itens especiais que os outros não conseguem.",
		raritys: [
			{
				rarity: 'Common',
				rarityBr: 'Comum',
				time: '0%',
				luck: '0',
				exp: '0%',
				extra: '0',
			},
			{
				rarity: 'Uncommon',
				rarityBr: 'Incomum',
				time: '-2~5%',
				luck: '0',
				exp: '+2~5%',
				extra: '0',
			},
			{
				rarity: 'Rare',
				rarityBr: 'Raro',
				time: '-7~10%',
				luck: '0',
				exp: '+7~10%',
				extra: '0',
			},
			{
				rarity: 'Epic',
				rarityBr: 'Épico',
				time: '-12~20%',
				luck: '+1',
				exp: '+12~20%',
				extra: '1',
			},
			{
				rarity: 'Legendary',
				rarityBr: 'Lendário',
				time: '-22~33%',
				luck: '+2',
				exp: '+22~33%',
				extra: '1',
			},
		],
	},
	{
		name: 'Miner',
		nameBr: 'Mineiro',
		desc: "With it you will be able to collect the natural resources scattered across the land. They are: wood, clay ore, bronze ore, silver ore and gold ore. Once he finishes mining a resource, he has to wait a certain amount of time before it can be collected again.",
		descBr: "Com ele você irá conseguir coletar os recursos naturais espalhados pelas terras. São eles: madeira, minério de argila, minério de bronze, minério de prata e minério de ouro. Assim que ele termina de minerar um recurso, é preciso esperar um certo tempo até que ele possa ser coletado novamente.",
		raritys: [
			{
				rarity: 'Common',
				rarityBr: 'Comum',
				time: '0%',
				luck: '0%',
				exp: '0%',
				extra: '0',
			},
			{
				rarity: 'Uncommon',
				rarityBr: 'Incomum',
				time: '-2~5%',
				luck: '2~3%',
				exp: '+2~5%',
				extra: '0',
			},
			{
				rarity: 'Rare',
				rarityBr: 'Raro',
				time: '-7~10%',
				luck: '4~6%',
				exp: '+7~10%',
				extra: '0',
			},
			{
				rarity: 'Epic',
				rarityBr: 'Épico',
				time: '-12~20%',
				luck: '7~10%',
				exp: '+12~20%',
				extra: '0',
			},
			{
				rarity: 'Legendary',
				rarityBr: 'Lendário',
				time: '-22~33%',
				luck: '11~16%',
				exp: '+22~33%',
				extra: '1',
			},
		],
	},
];

const lands = [
	{
		name: 'Cropland',
		nameBr: 'Terra Cultivada',
		rarity: 'Common',
		rarityBr: 'Comum',
		crops: [
			{
				type: 'land',
				name: 'Wheat',
				nameBr: 'Trigo',
				unlock: '1',
				time: '1m',
                timem: '1',
			},
			{
				type: 'land',
				name: 'Corn',
				nameBr: 'Milho',
				unlock: '2',
				time: '2m',
                timem: '2',                
			},
			{
				type: 'land',
				name: 'Sugarcane',
				nameBr: 'Cana de Açúcar',
				unlock: '5',
				time: '10m',
                timem: '10',
			},
		],
	},
	{
		name: 'Desert',
		nameBr: 'Deserto',
		rarity: 'Common',
		rarityBr: 'Comum',
		crops: [
			{
				type: 'land',
				name: 'Carrot',
				nameBr: 'Cenoura',
				unlock: '3',
				time: '5m',
                timem: '5',
			},
			{
				type: 'land',
				name: 'Tomato',
				nameBr: 'Tomate',
				unlock: '6',
				time: '15m',
                timem: '15',
			},
			{
				type: 'land',
				name: 'Potato',
				nameBr: 'Batata',
				unlock: '10',
				time: '45m',
                timem: '45',
			},
			{
				type: 'land',
				name: 'Grape',
				nameBr: 'Uva',
				unlock: '24',
				time: '1h15m',
                timem: '75',
			},
			{
				type: 'land',
				name: 'Olive',
				nameBr: 'Azeitona',
				unlock: '35',
				time: '1h45m',
                timem: '105',
			},
		],
	},
	{
		name: 'Dryland',
		nameBr: 'Terra Seca',
		rarity: 'Uncommon',
		rarityBr: 'Incomum',
		crops: [
			{
				type: 'land',
				name: 'Cotton',
				nameBr: 'Algodão',
				unlock: '4',
				time: '5m',
                timem: '5',
			},
			{
				type: 'land',
				name: 'Silk',
				nameBr: 'Seda',
				unlock: '7',
				time: '25m',
                timem: '25',
			},
			{
				type: 'land',
				name: 'Rice',
				nameBr: 'Arroz',
				unlock: '12',
				time: '30m',
                timem: '30',
			},
			{
				type: 'land',
				name: 'Watermelon',
				nameBr: 'Melancia',
				unlock: '15',
				time: '1h',
                timem: '60',
			},
			{
				type: 'land',
				name: 'Plum',
				nameBr: 'Ameixa',
				unlock: '27',
				time: '1h30m',
                timem: '90',
			},
		],
	},
	{
		name: 'Forest land',
		nameBr: 'Área Florestal',
		rarity: 'Rare',
		rarityBr: 'Raro',
		crops: [
			{
				type: 'land',
				name: 'Cocoa',
				nameBr: 'Cacau',
				unlock: '3',
				time: '8m',
                timem: '8',
			},
			{
				type: 'land',
				name: 'Pepper',
				nameBr: 'Pimenta',
				unlock: '8',
				time: '45m',
                timem: '45',
			},
			{
				type: 'land',
				name: 'Lemon',
				nameBr: 'Limão',
				unlock: '30',
				time: '1h',
                timem: '60',
			},
			{
				type: 'land',
				name: 'Banana',
				nameBr: 'Banana',
				unlock: '38',
				time: '1h15m',
                timem: '75',
			},
			{
				type: 'land',
				name: 'Mushroom',
				nameBr: 'Cogumelo',
				unlock: '55',
				time: '1h45m',
                timem: '105',
			},
		],
	},
	{
		name: 'Aquatic land',
		nameBr: 'Terra Aquática',
		rarity: 'Epic',
		rarityBr: 'Épico',
		crops: [
			{
				type: 'land',
				name: 'Rubber Tree',
				nameBr: 'Látex',
				unlock: '4',
				time: '10m',
                timem: '10',
			},
			{
				type: 'land',
				name: 'Strawberry',
				nameBr: 'Morango',
				unlock: '11',
				time: '10m',
                timem: '10',
			},
			{
				type: 'land',
				name: 'Peanut',
				nameBr: 'Amendoim',
				unlock: '14',
				time: '1h30m',
                timem: '90',
			},
			{
				type: 'land',
				name: 'Coconut',
				nameBr: 'Coco',
				unlock: '31',
				time: '1h40m',
                timem: '100',
			},
			{
				type: 'land',
				name: 'Pineapple',
				nameBr: 'Abacaxi',
				unlock: '41',
				time: '2h',
                timem: '120',
			},
		],
	},
	{
		name: 'Volcanic land',
		nameBr: 'Terra Vulcânica',
		rarity: 'Legendary',
		rarityBr: 'Lendário',
		crops: [
			{
				type: 'land',
				name: 'Coffee',
				nameBr: 'Café',
				unlock: '5',
				time: '10m',
                timem: '10',
			},
			{
				type: 'land',
				name: 'Rose',
				nameBr: 'Rosa',
				unlock: '9',
				time: '30m',
                timem: '30',
			},
			{
				type: 'land',
				name: 'Tea',
				nameBr: 'Chá',
				unlock: '13',
				time: '1h15m',
                timem: '75',
			},
			{
				type: 'land',
				name: 'Peach',
				nameBr: 'Pêssego',
				unlock: '29',
				time: '1h30m',
                timem: '90',
			},
			{
				type: 'land',
				name: 'Jasmine',
				nameBr: 'Jasmim',
				unlock: '65',
				time: '1h40m',
                timem: '100',
			},
		],
	},
];

const animalFarms = [
	{
		type: 'farm',
		farm: 'Cow Farm',
		farmBr: 'Estábulo',
		unlock: '2',
		name: 'Milk',
		nameBr: 'Leite',
		food: 'Wheat',
		foodBr: 'Trigo',
		qtde: '2x',
		time: '10m',
        timem: '10',
		exp: '3',
		price1: '0 mWSO',
		price2: '300 mWSO',
		price3: '1000 mWSO',
		extra4: '300 mWSO',
		extra5: '400 mWSO',
		extra6: '500 mWSO',
	},
	{
		type: 'farm',
		farm: 'Chicken Farm',
		farmBr: 'Galinheiro',
		unlock: '5',
		name: 'Egg',
		nameBr: 'Ovo',
		food: 'Corn',
		foodBr: 'Milho',
		qtde: '2x',
		time: '30m',
        timem: '30',
		exp: '4',
		price1: '150 mWSO',
		price2: '300 mWSO',
		price3: '1000 mWSO',
		extra4: '300 mWSO',
		extra5: '400 mWSO',
		extra6: '500 mWSO',
	},
	{
		type: 'farm',
		farm: 'Sheep Barn',
		farmBr: 'Curral',
		unlock: '10',
		name: 'Wool',
		nameBr: 'Novelo de Lã',
		food: 'Carrot',
		foodBr: 'Cenoura',
		qtde: '2x',
		time: '30m',
        timem: '30',
		exp: '6',
		price1: '250 mWSO',
		price2: '600 mWSO',
		price3: '1500 mWSO',
		extra4: '400 mWSO',
		extra5: '500 mWSO',
		extra6: '600 mWSO',
	},
	{
		type: 'farm',
		farm: 'Bee Hive',
		farmBr: 'Colméias',
		unlock: '20',
		name: 'Honey',
		nameBr: 'Mel',
		food: 'Sugarcane',
		foodBr: 'Cana de Açúcar',
		qtde: '2x',
		time: '40m',
        timem: '40',
		exp: '9',
		price1: '250 mWSO',
		price2: '600 mWSO',
		price3: '1500 mWSO',
		extra4: '400 mWSO',
		extra5: '500 mWSO',
		extra6: '600 mWSO',
	},
	{
		type: 'farm',
		farm: 'Pigsty',
		farmBr: 'Casa dos Porcos',
		unlock: '30',
		name: 'Bacon',
		nameBr: 'Bacon',
		food: 'Potato',
		foodBr: 'Batata',
		qtde: '2x',
		time: '50m',
        timem: '50',
		exp: '14',
		price1: '250 mWSO',
		price2: '600 mWSO',
		price3: '1500 mWSO',
		extra4: '400 mWSO',
		extra5: '500 mWSO',
		extra6: '600 mWSO',
	},
	{
		type: 'farm',
		farm: 'Fish Pond',
		farmBr: 'Aquário dos Peixes',
		unlock: '35',
		name: 'Fish',
		nameBr: 'Peixe',
		food: 'Cookies',
		foodBr: 'Biscoitos',
		qtde: '2x',
		time: '1h10m',
        timem: '70',
		exp: '61',
		price1: '300 mWSO',
		price2: '800 mWSO',
		price3: '2000 mWSO',
		extra4: '500 mWSO',
		extra5: '600 mWSO',
		extra6: '750 mWSO',
	},
	{
		type: 'farm',
		farm: 'Duck Pond',
		farmBr: 'Lago dos Patos',
		unlock: '40',
		name: 'Feather',
		nameBr: 'Pena',
		food: 'Bread',
		foodBr: 'Pão',
		qtde: '2x',
		time: '1h',
        timem: '60',
		exp: '10',
		price1: '250 mWSO',
		price2: '600 mWSO',
		price3: '1500 mWSO',
		extra4: '400 mWSO',
		extra5: '500 mWSO',
		extra6: '600 mWSO',
	},
	{
		type: 'farm',
		farm: 'Crab Fisheries',
		farmBr: 'Aquário de Caranguejos',
		unlock: '44',
		name: 'Crab',
		nameBr: 'Caranguejo',
		food: 'Bagel',
		foodBr: 'Donnut',
		qtde: '2x',
		time: '1h20m',
        timem: '80',
		exp: '97',
		price1: '300 mWSO',
		price2: '800 mWSO',
		price3: '2000 mWSO',
		extra4: '500 mWSO',
		extra5: '600 mWSO',
		extra6: '750 mWSO',
	},
	{
		type: 'farm',
		farm: 'Lobster Farm',
		farmBr: 'Aquário de Lagostas',
		unlock: '50',
		name: 'Lobster',
		nameBr: 'Lagosta',
		food: 'Potato Bread',
		foodBr: 'Pão de Batata',
		qtde: '2x',
		time: '1h30m',
        timem: '90',
		exp: '131',
		price1: '300 mWSO',
		price2: '800 mWSO',
		price3: '2000 mWSO',
		extra4: '500 mWSO',
		extra5: '600 mWSO',
		extra6: '750 mWSO',
	},
];

const machines = [
	{
        type: 'machine',
		machine: 'Bakery',
		machineBr: 'Padaria',
		unlock: '2',
		products: [
			{
				product: 'Bread',
				productBr: 'Pão',
				time: '3m',
				timem: '3',
				exp: '2',
				lvl: '2',
				ingredients: [
					{
						qtde: '2x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
				],
			},
			{
				product: 'Cookies',
				productBr: 'Bolachas',
				time: '7m',
				timem: '7',
				exp: '19',
				lvl: '6',
				ingredients: [
					{
						qtde: '2x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '2x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
				],
			},
			{
				product: 'Bagel',
				productBr: 'Donnut',
				time: '15m',
				timem: '15',
				exp: '5',
				lvl: '4',
				ingredients: [
					{
						qtde: '2x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
					{
						qtde: '3x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
				],
			},
			{
				product: 'Potato Bread',
				productBr: 'Pão de Batata',
				time: '30m',
				timem: '30',
				exp: '68',
				lvl: '26',
				ingredients: [
					{
						qtde: '2x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '2x',
						name: 'Potato',
						nameBr: 'Batata',	
					},
					{
						qtde: '4x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
				],
			},
			{
				product: 'Banana Bread',
				productBr: 'Pão de Banana',
				time: '45m',
				timem: '45',
				exp: '126',
				lvl: '41',
				ingredients: [
					{
						qtde: '2x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '2x',
						name: 'Butter',
						nameBr: 'Manteiga',	
					},
					{
						qtde: '3x',
						name: 'Banana',
						nameBr: 'Banana',	
					},
				],
			},
			{
				product: 'Mushroom Turnover',
				productBr: 'Empada de Cogumelos',
				time: '40m',
				timem: '40',
				exp: '84',
				lvl: '66',
				ingredients: [
					{
						qtde: '3x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '2x',
						name: 'Mushroom',
						nameBr: 'Cogumelo',	
					},
					{
						qtde: '1x',
						name: 'Potato',
						nameBr: 'Batata',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '50 mWSO',
						item: '50 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
					{
						itemBr: '30x Cenoura',
						item: '30x Carrot',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '150 mWSO',
						item: '150 mWSO',
					},
					{
						itemBr: '50x Cenoura',
						item: '50x Carrot',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '220 mWSO',
						item: '220 mWSO',
					},
					{
						itemBr: '40x Cenoura',
						item: '40x Carrot',
					},
					{
						itemBr: '40x Algodão',
						item: '40x Cotton',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Cenoura',
						item: '50x Carrot',
					},
					{
						itemBr: '50x Algodão',
						item: '50x Cotton',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '400 mWSO',
						item: '400 mWSO',
					},
					{
						itemBr: '60x Cenoura',
						item: '60x Carrot',
					},
					{
						itemBr: '60x Algodão',
						item: '60x Cotton',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '520 mWSO',
						item: '520 mWSO',
					},
					{
						itemBr: '40x Cenoura',
						item: '40x Carrot',
					},
					{
						itemBr: '40x Algodão',
						item: '40x Cotton',
					},
					{
						itemBr: '40x Cacau',
						item: '40x Cocoa',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '800 mWSO',
						item: '5800 mWSO',
					},
					{
						itemBr: '60x Cenoura',
						item: '60x Carrot',
					},
					{
						itemBr: '60x Algodão',
						item: '60x Cotton',
					},
					{
						itemBr: '60x Cacau',
						item: '60x Cocoa',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '0 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '800 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '1500 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '80 mWSO',				
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '160 mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '240 mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Milk Factory',
		machineBr: 'Fábrica de Leite',
		unlock: '4',
		products: [
			{
				product: 'Cream',
				productBr: 'Creme',
				time: '8m',
				timem: '8',
				exp: '5',
				lvl: '4',
				ingredients: [
					{
						qtde: '2x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
				],
			},
			{
				product: 'Cheese',
				productBr: 'Queijo',
				time: '15m',
				timem: '15',
				exp: '11',
				lvl: '6',
				ingredients: [
					{
						qtde: '2x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
				],
			},
			{
				product: 'Butter',
				productBr: 'Manteiga',
				time: '30m',
				timem: '30',
				exp: '17',
				lvl: '11',
				ingredients: [
					{
						qtde: '3x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
				],
			},
			{
				product: 'Yogurt',
				productBr: 'Iogurte',
				time: '45m',
				timem: '45',
				exp: '23',
				lvl: '21',
				ingredients: [
					{
						qtde: '5x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
				],
			},
			{
				product: 'Peach Yogurt',
				productBr: 'Iogurte de Pêssego',
				time: '60m',
				timem: '60',
				exp: '67',
				lvl: '47',
				ingredients: [
					{
						qtde: '2x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
					{
						qtde: '2x',
						name: 'Peach',
						nameBr: 'Pêssego',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '80 mWSO',
						item: '80 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '150 mWSO',
						item: '150 mWSO',
					},
					{
						itemBr: '30x Batata',
						item: '30x Potato',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '250 mWSO',
						item: '250 mWSO',
					},
					{
						itemBr: '50x Batata',
						item: '50x Potato',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '370 mWSO',
						item: '370 mWSO',
					},
					{
						itemBr: '40x Batata',
						item: '40x Potato',
					},
					{
						itemBr: '40x Ovo',
						item: '40x Egg',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '500 mWSO',
						item: '500 mWSO',
					},
					{
						itemBr: '50x Batata',
						item: '50x Potato',
					},
					{
						itemBr: '50x Ovo',
						item: '50x Egg',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '650 mWSO',
						item: '650 mWSO',
					},
					{
						itemBr: '60x Batata',
						item: '60x Potato',
					},
					{
						itemBr: '60x Ovo',
						item: '60x Egg',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '820 mWSO',
						item: '820 mWSO',
					},
					{
						itemBr: '30x Batata',
						item: '30x Potato',
					},
					{
						itemBr: '30x Ovo',
						item: '30x Egg',
					},
					{
						itemBr: '30x Látex',
						item: '30x Rubber Tree',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '1000 mWSO',
						item: '1000 mWSO',
					},
					{
						itemBr: '40x Batata',
						item: '40x Potato',
					},
					{
						itemBr: '40x Ovo',
						item: '40x Egg',
					},
					{
						itemBr: '40x Látex',
						item: '40x Rubber Tree',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '100 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '800 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '1500 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '80 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '160 mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '240 mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Sugar Factory',
		machineBr: 'Fábrica de Açúcar',
		unlock: '7',
		products: [
			{
				product: 'Sugar',
				productBr: 'Açúcar',
				time: '10m',
				timem: '10',
				exp: '6',
				lvl: '7',
				ingredients: [
					{
						qtde: '1x',
						name: 'Sugarcane',
						nameBr: 'Cana de Açúcar',	
					},
				],
			},
			{
				product: 'Syrup',
				productBr: 'Xarope',
				time: '20m',
				timem: '20',
				exp: '12',
				lvl: '17',
				ingredients: [
					{
						qtde: '2x',
						name: 'Sugarcane',
						nameBr: 'Cana de Açúcar',	
					},
				],
			},
			{
				product: 'Caramel',
				productBr: 'Caramelo',
				time: '45m',
				timem: '45',
				exp: '19',
				lvl: '24',
				ingredients: [
					{
						qtde: '3x',
						name: 'Sugarcane',
						nameBr: 'Cana de Açúcar',	
					},
				],
			},
			{
				product: 'Honey Caramel',
				productBr: 'Caramelo de Mel',
				time: '1h15m',
				timem: '75',
				exp: '29',
				lvl: '36',
				ingredients: [
					{
						qtde: '1x',
						name: 'Sugarcane',
						nameBr: 'Cana de Açúcar',	
					},
					{
						qtde: '1x',
						name: 'Honey',
						nameBr: 'Mel',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '80 mWSO',
						item: '80 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '150 mWSO',
						item: '150 mWSO',
					},
					{
						itemBr: '30x Arroz',
						item: '30x Rice',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '250 mWSO',
						item: '250 mWSO',
					},
					{
						itemBr: '50x Arroz',
						item: '50x Rice',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '370 mWSO',
						item: '370 mWSO',
					},
					{
						itemBr: '40x Arroz',
						item: '40x Rice',
					},
					{
						itemBr: '40x Creme',
						item: '40x Cream',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '500 mWSO',
						item: '500 mWSO',
					},
					{
						itemBr: '50x Arroz',
						item: '50x Rice',
					},
					{
						itemBr: '50x Creme',
						item: '50x Cream',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '650 mWSO',
						item: '650 mWSO',
					},
					{
						itemBr: '60x Arroz',
						item: '60x Rice',
					},
					{
						itemBr: '60x Creme',
						item: '60x Cream',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '820 mWSO',
						item: '820 mWSO',
					},
					{
						itemBr: '30x Arroz',
						item: '30x Rice',
					},
					{
						itemBr: '30x Creme',
						item: '30x Cream',
					},
					{
						itemBr: '30x Café',
						item: '30x Coffee',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '1000 mWSO',
						item: '1000 mWSO',
					},
					{
						itemBr: '40x Arroz',
						item: '40x Rice',
					},
					{
						itemBr: '40x Creme',
						item: '40x Cream',
					},
					{
						itemBr: '40x Café',
						item: '40x Coffee',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '150 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '800 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '1500 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '80 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '160 mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '240 mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Textile Factory',
		machineBr: 'Fábrica de Tecido',
		unlock: '9',
		products: [
			{
				product: 'Cotton Fabric',
				productBr: 'Tecido de Algodão',
				time: '15m',
				timem: '15',
				exp: '16',
				lvl: '9',
				ingredients: [
					{
						qtde: '2x',
						name: 'Cotton',
						nameBr: 'Algodão',	
					},
				],
			},
			{
				product: 'Yarn',
				productBr: 'Lã',
				time: '20m',
				timem: '20',
				exp: '26',
				lvl: '11',
				ingredients: [
					{
						qtde: '2x',
						name: 'Wool',
						nameBr: 'Novelo de Lã',	
					},
				],
			},
			{
				product: 'Silk Fabric',
				productBr: 'Tecido de Seda',
				time: '45m',
				timem: '45',
				exp: '60',
				lvl: '31',
				ingredients: [
					{
						qtde: '2x',
						name: 'Silk',
						nameBr: 'Seda',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '80 mWSO',
						item: '80 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '150 mWSO',
						item: '150 mWSO',
					},
					{
						itemBr: '30x Tomate',
						item: '30x Tomato',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '250 mWSO',
						item: '250 mWSO',
					},
					{
						itemBr: '50x Tomate',
						item: '50x Tomato',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '370 mWSO',
						item: '370 mWSO',
					},
					{
						itemBr: '40x Tomate',
						item: '40x Tomato',
					},
					{
						itemBr: '40x Pimenta',
						item: '40x Pepper',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '500 mWSO',
						item: '500 mWSO',
					},
					{
						itemBr: '50x Tomate',
						item: '50x Tomato',
					},
					{
						itemBr: '50x Pimenta',
						item: '50x Pepper',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '650 mWSO',
						item: '650 mWSO',
					},
					{
						itemBr: '60x Tomate',
						item: '60x Tomato',
					},
					{
						itemBr: '60x Pimenta',
						item: '60x Pepper',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '820 mWSO',
						item: '820 mWSO',
					},
					{
						itemBr: '30x Tomate',
						item: '30x Tomato',
					},
					{
						itemBr: '30x Pimenta',
						item: '30x Pepper',
					},
					{
						itemBr: '30x Morango',
						item: '30x Strawberry',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '1000 mWSO',
						item: '1000 mWSO',
					},
					{
						itemBr: '40x Tomate',
						item: '40x Tomato',
					},
					{
						itemBr: '40x Pimenta',
						item: '40x Pepper',
					},
					{
						itemBr: '40x Morango',
						item: '40x Strawberry',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '200 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '800 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '1500 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '80 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '160 mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '240 mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Tailor Factory',
		machineBr: 'Fábrica de Vestuário',
		unlock: '12',
		products: [
			{
				product: 'T-Shirt',
				productBr: 'Camisa',
				time: '30m',
				timem: '30',
				exp: '19',
				lvl: '12',
				ingredients: [
					{
						qtde: '1x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
				],
			},
			{
				product: 'Sweater',
				productBr: 'Suéter',
				time: '45m',
				timem: '45',
				exp: '33',
				lvl: '14',
				ingredients: [
					{
						qtde: '1x',
						name: 'Yarn',
						nameBr: 'Lã',	
					},
				],
			},
			{
				product: 'Coat',
				productBr: 'Casaco',
				time: '1h',
				timem: '60',
				exp: '54',
				lvl: '20',
				ingredients: [
					{
						qtde: '1x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
					{
						qtde: '1x',
						name: 'Yarn',
						nameBr: 'Lã',	
					},
				],
			},
			{
				product: 'Hat',
				productBr: 'Chapéu',
				time: '1h15m',
				timem: '75',
				exp: '99',
				lvl: '32',
				ingredients: [
					{
						qtde: '1x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
				],
			},
			{
				product: 'Dress',
				productBr: 'Vestido',
				time: '1h30m',
				timem: '90',
				exp: '115',
				lvl: '34',
				ingredients: [
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
					{
						qtde: '1x',
						name: 'Yarn',
						nameBr: 'Lã',	
					},
				],
			},
			{
				product: 'Suit',
				productBr: 'Traje',
				time: '2h',
				timem: '120',
				exp: '141',
				lvl: '33',
				ingredients: [
					{
						qtde: '1x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
					{
						qtde: '1x',
						name: 'Yarn',
						nameBr: 'Lã',	
					},
				],
			},
			{
				product: 'Tyrolean Hat',
				productBr: 'Chapéu Tirolês',
				time: '45m',
				timem: '45',
				exp: '117',
				lvl: '50',
				ingredients: [
					{
						qtde: '1x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
					{
						qtde: '2x',
						name: 'Feather',
						nameBr: 'Pena',	
					},
				],
			},
			{
				product: 'Gown',
				productBr: 'Vestido Fino',
				time: '1h45m',
				timem: '105',
				exp: '349',
				lvl: '87',
				ingredients: [
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
					{
						qtde: '2x',
						name: 'Yarn',
						nameBr: 'Lã',	
					},
					{
						qtde: '3x',
						name: 'Feather',
						nameBr: 'Pena',	
					},
				],
			},
			{
				product: 'Pillow',
				productBr: 'Travesseiro',
				time: '30m',
				timem: '30',
				exp: '??',
				lvl: '95',
				ingredients: [
					{
						qtde: '2x',
						name: 'Feather',
						nameBr: 'Pena',	
					},
					{
						qtde: '1x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
				],
			},
			{
				product: 'Jacket',
				productBr: 'Jaqueta',
				time: '??',
				timem: '??',
				exp: '??',
				lvl: '100',
				ingredients: [
					{
						qtde: '??',
						name: 'noitem',
						nameBr: '??',	
					},
				],
			},
			{
				product: 'Duvet',
				productBr: 'Edredon',
				time: '??',
				timem: '??',
				exp: '??',
				lvl: '104',
				ingredients: [
					{
						qtde: '??',
						name: 'noitem',
						nameBr: '??',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Bolachas',
						item: '30x Cookies',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Bolachas',
						item: '50x Cookies',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '400 mWSO',
						item: '400 mWSO',
					},
					{
						itemBr: '40x Bolachas',
						item: '40x Cookies',
					},
					{
						itemBr: '40x Pão de Batata',
						item: '40x Potato Bread',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Paper Factory',
		machineBr: 'Fábrica de Papel',
		unlock: '13',
		products: [
			{
				product: 'Paper',
				productBr: 'Papel',
				time: '45m',
				timem: '45',
				exp: '19',
				lvl: '13',
				ingredients: [
					{
						qtde: '1x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
				],
			},
			{
				product: 'Paper Towel',
				productBr: 'Papel Toalha',
				time: '1h15m',
				exp: '39',
				lvl: '16',
				ingredients: [
					{
						qtde: '2x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
				],
			},
			{
				product: 'Wallpaper',
				productBr: 'Papel de Parede',
				time: '1h30m',
				timem: '90',
				exp: '147',
				lvl: '22',
				ingredients: [
					{
						qtde: '2x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
					{
						image: 'rubbertree',
						qtde: '1x',
						name: 'Rubber Tree',
						nameBr: 'Látex',
					},
				],
			},
			{
				product: 'Book',
				productBr: 'Livro',
				time: '1h45m',
				timem: '105',
				exp: '130',
				lvl: '27',
				ingredients: [
					{
						qtde: '4x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
					{
						qtde: '1x',
						name: 'Glue',
						nameBr: 'Cola',
					},
				],
			},
			{
				product: 'Pinata',
				productBr: 'Pinata',
				time: '1h',
				timem: '60',
				exp: '125',
				lvl: '39',
				ingredients: [
					{
						qtde: '2x',
						name: 'Paper',
						nameBr: 'Papel',
					},
					{
						qtde: '1x',
						name: 'Glue',
						nameBr: 'Cola',
					},
					{
						qtde: '1x',
						name: 'Jelly Bean',
						nameBr: 'Jujuba',
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Batata',
						item: '30x Potato',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Batata',
						item: '50x Potato',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Snack Factory',
		machineBr: 'Fábrica de Snacks',
		unlock: '14',
		products: [
			{
				product: 'Popcorn',
				productBr: 'Pipoca',
				time: '15m',
				timem: '15',
				exp: '5',
				lvl: '14',
				ingredients: [
					{
						qtde: '2x',
						name: 'Corn',
						nameBr: 'Milho',	
					},
				],
			},
			{
				product: 'Corn Chips',
				productBr: 'Chips de Milho',
				time: '30m',
				timem: '30',
				exp: '8',
				lvl: '17',
				ingredients: [
					{
						qtde: '3x',
						name: 'Corn',
						nameBr: 'Milho',	
					},
				],
			},
			{
				product: 'Granola',
				productBr: 'Granola',
				time: '20m',
				timem: '20',
				exp: '12',
				lvl: '19',
				ingredients: [
					{
						qtde: '2x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '2x',
						name: 'Strawberry',
						nameBr: 'Morango',	
					},
				],
			},
			{
				product: 'Potato Chips',
				productBr: 'Chips de Batata',
				time: '1h',
				timem: '60',
				exp: '30',
				lvl: '22',
				ingredients: [
					{
						qtde: '2x',
						name: 'Potato',
						nameBr: 'Batata',
					},
				],
			},
			{
				product: 'Canape*',
				productBr: 'Canapé*',
				time: '10m',
				timem: '10',
				exp: '132',
				lvl: '37',
				ingredients: [
					{
						qtde: '2x',
						name: 'Olive',
						nameBr: 'Azeitona',	
					},
					{
						qtde: '2x',
						name: 'Grape',
						nameBr: 'Uva',	
					},
					{
						qtde: '1x',
						name: 'Cheese',
						nameBr: 'Queijo',	
					},
				],
			},
			{
				product: 'Glazed Bacon',
				productBr: 'Bacon Frito',
				time: '40m',
				timem: '40',
				exp: '49',
				lvl: '43',
				ingredients: [
					{
						qtde: '2x',
						name: 'Bacon',
						nameBr: 'Bacon',	
					},
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',	
					},
				],
			},
			{
				product: 'Puffed Rice',
				productBr: 'Arroz Tufado',
				time: '25m',
				timem: '25',
				exp: '44',
				lvl: '56',
				ingredients: [
					{
						qtde: '4x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',	
					},
				],
			},
			{
				product: 'Dried Mushroom',
				productBr: 'Cogumelo Desidratado',
				time: '45m',
				timem: '45',
				exp: '112',
				lvl: '63',
				ingredients: [
					{
						qtde: '3x',
						name: 'Mushroom',
						nameBr: 'Cogumelo',	
					},
				],
			},
			{
				product: 'Salted Peanuts',
				productBr: 'Amendoins Salgados',
				time: '45m',
				timem: '45',
				exp: '??',
				lvl: '74',
				ingredients: [
					{
						qtde: '3x',
						name: 'Peanut',
						nameBr: 'Amendoim',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Seda',
						item: '30x Silk',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Seda',
						item: '50x Silk',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Fastfood Restaurant',
		machineBr: 'Restaurante FastFood',
		unlock: '15',
		products: [
			{
				product: 'Milkshake',
				productBr: 'Milkshake',
				time: '9m',
				timem: '9',
				exp: '13',
				lvl: '15',
				ingredients: [
					{
						qtde: '2x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
					{
						qtde: '1x',
						name: 'Strawberry',
						nameBr: 'Morango',	
					},
				],
			},
			{
				product: 'Cheeseburger',
				productBr: 'Cheeseburger',
				time: '15m',
				timem: '15',
				exp: '24',
				lvl: '17',
				ingredients: [
					{
						qtde: '2x',
						name: 'Bread',
						nameBr: 'Pão',	
					},
					{
						qtde: '1x',
						name: 'Cheese',
						nameBr: 'Queijo',	
					},
					{
						qtde: '1x',
						name: 'Tomato',
						nameBr: 'Tomate',	
					},
				],
			},
			{
				product: 'Sandwich',
				productBr: 'Sanduíche',
				time: '20m',
				timem: '20',
				exp: '34',
				lvl: '19',
				ingredients: [
					{
						qtde: '1x',
						name: 'Bread',
						nameBr: 'Pão',	
					},
					{
						qtde: '1x',
						name: 'Butter',
						nameBr: 'Manteiga',	
					},
					{
						qtde: '2x',
						name: 'Strawberry',
						nameBr: 'Morango',	
					},
				],
			},
			{
				product: 'French Fries',
				productBr: 'Batata Frita',
				time: '30m',
				timem: '30',
				exp: '38',
				lvl: '28',
				ingredients: [
					{
						qtde: '2x',
						name: 'Potato',
						nameBr: 'Batata',	
					},
					{
						qtde: '1x',
						name: 'Cream',
						nameBr: 'Creme',	
					},
					{
						qtde: '2x',
						name: 'Tomato',
						nameBr: 'Tomate',	
					},
				],
			},
			{
				product: 'Baked Potato',
				productBr: 'Batata Assada',
				time: '25m',
				timem: '25',
				exp: '48',
				lvl: '46',
				ingredients: [
					{
						qtde: '2x',
						name: 'Potato',
						nameBr: 'Batata',	
					},
					{
						qtde: '1x',
						name: 'Bacon',
						nameBr: 'Bacon',	
					},
					{
						qtde: '1x',
						name: 'Cheese',
						nameBr: 'Queijo',	
					},
				],
			},
			{
				product: 'Fish Burger*',
				productBr: 'Hamburger de Peixe*',
				time: '22m',
				timem: '22',
				exp: '79',
				lvl: '53',
				ingredients: [
					{
						qtde: '2x',
						name: 'Bread',
						nameBr: 'Pão',	
					},
					{
						qtde: '2x',
						name: 'Fish',
						nameBr: 'Peixe',	
					},
					{
						qtde: '1x',
						name: 'Pepper',
						nameBr: 'Pimenta',	
					},
				],
			},
			{
				product: 'Fish Chips',
				productBr: 'Chips de Peixe',
				time: '45m',
				timem: '45',
				exp: '84',
				lvl: '69',
				ingredients: [
					{
						qtde: '2x',
						name: 'Fish',
						nameBr: 'Peixe',	
					},
					{
						qtde: '2x',
						name: 'Potato',
						nameBr: 'Batata',	
					},
				],
			},
			{
				product: 'Peanut Butter Crepes',
				productBr: 'Crepe de Manteiga de Amendoim',
				time: '35m',
				timem: '35',
				exp: '110',
				lvl: '79',
				ingredients: [
					{
						qtde: '3x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '1x',
						name: 'Peanut Butter',
						nameBr: 'Manteiga de Amendoim',	
					},
					{
						qtde: '1x',
						name: 'Banana',
						nameBr: 'Banana',	
					},
				],
			},
			{
				product: 'Hot Dog',
				productBr: 'Cachorro Quente',
				time: '15m',
				timem: '15',
				exp: '??',
				lvl: '89',
				ingredients: [
					{
						qtde: '2x',
						name: 'Bread',
						nameBr: 'Pão',	
					},
					{
						qtde: '1x',
						name: 'Bacon',
						nameBr: 'Bacon',	
					},
					{
						qtde: '1x',
						name: 'Tomato',
						nameBr: 'Tomate',	
					},
				],
			},
			{
				product: 'Corn Dog',
				productBr: 'Lanche de Milho',
				time: '45m',
				timem: '45',
				exp: '??',
				lvl: '94',
				ingredients: [
					{
						qtde: '4x',
						name: 'Corn',
						nameBr: 'Milho',	
					},
					{
						qtde: '2x',
						name: 'Bacon',
						nameBr: 'Bacon',	
					},
					{
						qtde: '2x',
						name: 'Olive',
						nameBr: 'Azeitona',	
					},
				],
			},
			{
				product: 'Coney Dog',
				productBr: 'Coney Dog',
				time: '25m',
				timem: '25',
				exp: '??',
				lvl: '99',
				ingredients: [
					{
						qtde: '1x',
						name: 'Bread',
						nameBr: 'Pão',	
					},
					{
						qtde: '2x',
						name: 'Bacon',
						nameBr: 'Bacon',	
					},
					{
						qtde: '3x',
						name: 'Cheese',
						nameBr: 'Queijo',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Milk',
						item: '30x Milk',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Milk',
						item: '50x Milk',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Coffee Shop',
		machineBr: 'Cafeteria',
		unlock: '16',
		products: [
			{
				product: 'Espresso',
				productBr: 'Espresso',
				time: '15m',
				timem: '15',
				exp: '80',
				lvl: '16',
				ingredients: [
					{
						qtde: '3x',
						name: 'Coffee',
						nameBr: 'Café',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Capuccino',
				productBr: 'Capuccino',
				time: '7m',
				timem: '7',
				exp: '63',
				lvl: '25',
				ingredients: [
					{
						qtde: '2x',
						name: 'Coffee',
						nameBr: 'Café',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
					{
						qtde: '2x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
				],
			},
			{
				product: 'Cafe Mocha',
				productBr: 'Café Mocha',
				time: '30m',
				timem: '30',
				exp: '77',
				lvl: '34',
				ingredients: [
					{
						qtde: '2x',
						name: 'Coffee',
						nameBr: 'Café',	
					},
					{
						qtde: '2x',
						name: 'Cocoa',
						nameBr: 'Cacau',	
					},
					{
						qtde: '1x',
						name: 'Cream',
						nameBr: 'Creme',	
					},
				],
			},
			{
				product: 'Hot Chocolate*',
				productBr: 'Chocolate Quente*',
				time: '22m',
				timem: '22',
				exp: '34',
				lvl: '45',
				ingredients: [
					{
						qtde: '2x',
						name: 'Cocoa',
						nameBr: 'Cacau',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
					{
						qtde: '2x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
				],
			},
			{
				product: 'Black Tea',
				productBr: 'Chá Preto',
				time: '25m',
				timem: '25',
				exp: '63',
				lvl: '58',
				ingredients: [
					{
						qtde: '2x',
						name: 'Tea',
						nameBr: 'Chá',	
					},
				],
			},
			{
				product: 'Jasmine Tea',
				productBr: 'Chá de Jasmim',
				time: '15m',
				timem: '15',
				exp: '87',
				lvl: '70',
				ingredients: [
					{
						qtde: '2x',
						name: 'Tea',
						nameBr: 'Chá',	
					},
					{
						qtde: '1x',
						name: 'Jasmine',
						nameBr: 'Jasmim',	
					},
				],
			},
			{
				product: 'Rose Tea',
				productBr: 'Chá de Rosa',
				time: '30m',
				timem: '30',
				exp: '30',
				lvl: '76',
				ingredients: [
					{
						qtde: '3x',
						name: 'Strawberry',
						nameBr: 'Morango',	
					},
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',	
					},
				],
			},
			{
				product: 'Butter Tea',
				productBr: 'Chá Amanteigado',
				time: '1h',
				timem: '60',
				exp: '??',
				lvl: '84',
				ingredients: [
					{
						qtde: '2x',
						name: 'Tea',
						nameBr: 'Chá',	
					},
					{
						qtde: '1x',
						name: 'Butter',
						nameBr: 'Manteiga',	
					},
					{
						qtde: '2x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
				],
			},
			{
				product: 'Milk Tea',
				productBr: 'Chá com Leite',
				time: '1h15m',
				timem: '75',
				exp: '??',
				lvl: '87',
				ingredients: [
					{
						qtde: '1x',
						name: 'Tea',
						nameBr: 'Chá',	
					},
					{
						qtde: '2x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
					{
						qtde: '1x',
						name: 'Tea Set',
						nameBr: 'Jogo de Chá',	
					},
				],
			},
					{
				product: 'Petit Gateau',
				productBr: 'Petit Gateau',
				time: '??',
				timem: '??',
				exp: '??',
				lvl: '93',
				ingredients: [
					{
						qtde: '??',
						name: 'noitem',
						nameBr: 'noitem',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Açúcar',
						item: '30x Sugar',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Açúcar',
						item: '50x Sugar',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Icecream Parlor',
		machineBr: 'Sorveteria',
		unlock: '18',
		products: [
			{
				product: 'Icecream',
				productBr: 'Sorvete',
				time: '15m',
				timem: '15',
				exp: '17',
				lvl: '18',
				ingredients: [
					{
						qtde: '1x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
					{
						qtde: '1x',
						name: 'Cream',
						nameBr: 'Creme',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Popsicle',
				productBr: 'Picolé',
				time: '45m',
				timem: '45',
				exp: '19',
				lvl: '21',
				ingredients: [
					{
						qtde: '2x',
						name: 'Strawberry',
						nameBr: 'Morango',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Frozen Yogurt',
				productBr: 'Iogurte Gelado',
				time: '1h45m',
				timem: '105',
				exp: '37',
				lvl: '23',
				ingredients: [
					{
						qtde: '1x',
						name: 'Yogurt',
						nameBr: 'Iogurte',	
					},
					{
						qtde: '1x',
						name: 'Cream',
						nameBr: 'Creme',	
					},
				],
			},
			{
				product: 'Eskimo Pie',
				productBr: 'Picolé de Esquimó',
				time: '2h',
				timem: '120',
				exp: '??',
				lvl: '35',
				ingredients: [
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',	
					},
					{
						qtde: '1x',
						name: 'Cocoa',
						nameBr: 'Cacau',	
					},
					{
						qtde: '1x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
				],
			},
			{
				product: 'Pineapple Sorbet',
				productBr: 'Sorvete de Abacaxi',
				time: '1h15m',
				timem: '75',
				exp: '147',
				lvl: '51',
				ingredients: [
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',	
					},
					{
						qtde: '2x',
						name: 'Pineapple',
					},
				],
			},
			{
				product: 'Rose Sorbet*',
				productBr: 'Sorvete de Rosa*',
				time: '1h',
				timem: '60',
				exp: '51',
				lvl: '66',
				ingredients: [
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',	
					},
					{
						qtde: '2x',
						name: 'Rose',
						nameBr: 'Rosa',	
					},
					{
						qtde: '1x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
				],
			},
			{
				product: 'Peanut Parfait',
				productBr: 'Manteiga de Amendoim',
				time: '1h45m',
				timem: '105',
				exp: '114',
				lvl: '83',
				ingredients: [
					{
						qtde: '1x',
						name: 'Peanut Butter',
						nameBr: 'Manteiga de Amendoim',	
					},
					{
						qtde: '1x',
						name: 'Peanut',
						nameBr: 'Amendoim',	
					},
					{
						qtde: '2x',
						name: 'Cream',
						nameBr: 'Creme',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Melancia',
						item: '30x Watermelon',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Melancia',
						item: '50x Watermelon',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '400 mWSO',
						item: '400 mWSO',
					},
					{
						itemBr: '40x Melancia',
						item: '40x Watermelon',
					},
					{
						itemBr: '40x Cheeseburger',
						item: '40x Cheeseburger',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Rubber Factory',
		machineBr: 'Fábrica de Borracha',
		unlock: '18',
		products: [
			{
				product: 'Rubber',
				productBr: 'Borracha',
				time: '30m',
				timem: '30',
				exp: '15',
				lvl: '18',
				ingredients: [
					{
						qtde: '1x',
						name: 'Rubber Tree',
						nameBr: 'Látex',
					},
				],
			},
			{
				product: 'Plastic',
				productBr: 'Plástico',
				time: '45m',
				timem: '45',
				exp: '31',
				lvl: '28',
				ingredients: [
					{
						qtde: '2x',
						name: 'Rubber Tree',
						nameBr: 'Látex',
					},
				],
			},
			{
				product: 'Glue',
				productBr: 'Cola',
				time: '1h',
				timem: '60',
				exp: '48',
				lvl: '39',
				ingredients: [
					{
						qtde: '3x',
						name: 'Rubber Tree',
						nameBr: 'Látex',
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Arroz',
						item: '30x Rice',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Arroz',
						item: '50x Rice',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Construction Factory',
		machineBr: 'Fábrica de Construção',
		unlock: '20',
		products: [
			{
				product: 'Wood Panel',
				productBr: 'Painel de Madeira',
				time: '15m',
				timem: '15',
				exp: '25',
				lvl: '20',
				ingredients: [
					{
						qtde: '5x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
				],
			},
			{
				product: 'Bricks',
				productBr: 'Tijolos',
				time: '30m',
				timem: '30',
				exp: '41',
				lvl: '20',
				ingredients: [
					{
						qtde: '5x',
						name: 'Clay Ore',
						nameBr: 'Minério de Argila',	
					},
				],
			},
			{
				product: 'Bronze Ingot',
				productBr: 'Linguote de Bronze',
				time: '1h',
				timem: '60',
				exp: '62',
				lvl: '20',
				ingredients: [
					{
						qtde: '5x',
						name: 'Bronze Ore',
						nameBr: 'Minério de Bronze',	
					},
				],
			},
			{
				product: 'Silver Ingot',
				productBr: 'Linguote de Prata',
				time: '1h30m',
				timem: '90',
				exp: '87',
				lvl: '20',
				ingredients: [
					{
						qtde: '5x',
						name: 'Silver Ore',
						nameBr: 'Minério de Prata',	
					},
				],
			},
			{
				product: 'Golden Ingot',
				productBr: 'Linguote de Ouro',
				time: '2h',
				timem: '120',
				exp: '129',
				lvl: '20',
				ingredients: [
					{
						qtde: '5x',
						name: 'Golden Ore',
						nameBr: 'Minério de Ouro',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Brinquedos',
						item: '30x Toys',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Brinquedos',
						item: '50x Toys',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Pastry Shop',
		machineBr: 'Pastelaria',
		unlock: '24',
		products: [
			{
				product: 'Muffin',
				productBr: 'Muffin',
				time: '15m',
				timem: '15',
				exp: '29',
				lvl: '24',
				ingredients: [
					{
						qtde: '3x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '4x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Brownie',
				productBr: 'Brownie',
				time: '20m',
				timem: '20',
				exp: '55',
				lvl: '27',
				ingredients: [
					{
						qtde: '2x',
						name: 'Cocoa',
						nameBr: 'Cacau',	
					},
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',	
					},
					{
						qtde: '1x',
						name: 'Butter',
						nameBr: 'Manteiga',	
					},
				],
			},
			{
				product: 'Cupcake',
				productBr: 'Cupcake',
				time: '30m',
				timem: '30',
				exp: '40',
				lvl: '30',
				ingredients: [
					{
						qtde: '5x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
					{
						qtde: '1x',
						name: 'Cream',
						nameBr: 'Creme',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Donut',
				productBr: 'Donut',
				time: '45m',
				timem: '45',
				exp: '64',
				lvl: '33',
				ingredients: [
					{
						qtde: '1x',
						name: 'Bagel',
						nameBr: 'Donnut',	
					},
					{
						qtde: '1x',
						name: 'Caramel',
						nameBr: 'Caramelo',	
					},
					{
						qtde: '1x',
						name: 'Cocoa',
						nameBr: 'Cacau',	
					},
				],
			},
			{
				product: 'Cheesecake',
				productBr: 'Torta de Queijo',
				time: '1h30m',
				timem: '90',
				exp: '69',
				lvl: '36',
				ingredients: [
					{
						qtde: '1x',
						name: 'Cookies',
						nameBr: 'Biscoitos',	
					},
					{
						qtde: '2x',
						name: 'Cheese',
						nameBr: 'Queijo',	
					},
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',	
					},
				],
			},
			{
				product: 'Gingerbread*',
				productBr: 'Pão de Gengibre*',
				time: '30m',
				timem: '30',
				exp: '51',
				lvl: '38',
				ingredients: [
					{
						qtde: '3x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '2x',
						name: 'Honey',
						nameBr: 'Mel',	
					},
					{
						qtde: '1x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
				],
			},
			{
				product: 'Key Lime Pie',
				productBr: 'Torta de Limão',
				time: '1h',
				timem: '60',
				exp: '122',
				lvl: '42',
				ingredients: [
					{
						qtde: '3x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '2x',
						name: 'Lemon',
						nameBr: 'Limão',	
					},
					{
						qtde: '2x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Coconut Macaroons',
				productBr: 'Macarons de Coco',
				time: '45m',
				timem: '45',
				exp: '108',
				lvl: '46',
				ingredients: [
					{
						qtde: '2x',
						name: 'Coconut',
						nameBr: 'Coco',	
					},
					{
						qtde: '2x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Amendoim',
						item: '30x Peanut',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Amendoim',
						item: '50x Peanut',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Kitchenware Factory',
		machineBr: 'Utensílios de Cozinha',
		unlock: '25',
		products: [
			{
				product: 'Cup',
				productBr: 'Copo',
				time: '50m',
				timem: '50',
				exp: '43',
				lvl: '25',
				ingredients: [
					{
						qtde: '2x',
						name: 'Clay Ore',
						nameBr: 'Minério de Argila',	
					},
				],
			},
			{
				product: 'Frying Pan',
				productBr: 'Frigideira',
				time: '45m',
				timem: '45',
				exp: '60',
				lvl: '40',
				ingredients: [
					{
						qtde: '4x',
						name: 'Bronze Ore',
						nameBr: 'Minério de Bronze',	
					},
					{
						qtde: '1x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
				],
			},
			{
				product: 'Jug',
				productBr: 'Jarro',
				time: '50m',
				timem: '50',
				exp: '49',
				lvl: '50',
				ingredients: [
					{
						qtde: '3x',
						name: 'Clay Ore',
						nameBr: 'Minério de Argila',	
					},
					{
						qtde: '1x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
				],
			},
			{
				product: 'Pot',
				productBr: 'Panela',
				time: '1h',
				timem: '60',
				exp: '55',
				lvl: '58',
				ingredients: [
					{
						qtde: '2x',
						name: 'Clay Ore',
						nameBr: 'Minério de Argila',	
					},
				],
			},
			{
				product: 'Teapot',
				productBr: 'Bule de Chá',
				time: '1h10m',
				timem: '70',
				exp: '66',
				lvl: '64',
				ingredients: [
					{
						qtde: '3x',
						name: 'Clay Ore',
						nameBr: 'Minério de Argila',	
					},
				],
			},
			{
				product: 'Cutlery',
				productBr: 'Talheres',
				time: '20m',
				timem: '20',
				exp: '75',
				lvl: '72',
				ingredients: [
					{
						qtde: '7x',
						name: 'Silver Ore',
						nameBr: 'Minério de Prata',	
					},
				],
			},
			{
				product: 'Tea Set',
				productBr: 'Jogo de Chá',
				time: '1h15m',
				timem: '75',
				exp: '74',
				lvl: '78',
				ingredients: [
					{
						qtde: '2x',
						name: 'Clay Ore',
						nameBr: 'Minério de Argila',	
					},
					{
						qtde: '1x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
					{
						qtde: '1x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Garrafa de Plástico',
						item: '30x Plastic Bottle',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Garrafa de Plástico',
						item: '50x Plastic Bottle',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Jam Factory',
		machineBr: 'Fábrica de Geléias',
		unlock: '26',
		products: [
			{
				product: 'Strawberry Jam',
				productBr: 'Geléia de Morango',
				time: '45m',
				timem: '45',
				exp: '18',
				lvl: '26',
				ingredients: [
					{
						qtde: '3x',
						name: 'Strawberry',
						nameBr: 'Morango',	
					},
				],
			},
			{
				product: 'Peach Marmalade',
				productBr: 'Marmelada de Pêssego',
				time: '1h15m',
				timem: '75',
				exp: '57',
				lvl: '29',
				ingredients: [
					{
						qtde: '3x',
						name: 'Peach',
						nameBr: 'Pêssego',	
					},
				],
			},
			{
				product: 'Watermelon Jam',
				productBr: 'Geléia de Melancia',
				time: '1h30m',
				timem: '90',
				exp: '84',
				lvl: '31',
				ingredients: [
					{
						qtde: '3x',
						name: 'Watermelon',
						nameBr: 'Melancia',	
					},
				],
			},
			{
				product: 'Plum Jam',
				productBr: 'Geléia de Ameixa',
				time: '2h',
				timem: '120',
				exp: '128',
				lvl: '33',
				ingredients: [
					{
						qtde: '3x',
						name: 'Plum',
						nameBr: 'Ameixa',	
					},
				],
			},
			{
				product: 'Grape Jelly*',
				productBr: 'Geléia de Uva*',
				time: '1h45m',
				timem: '105',
				exp: '84',
				lvl: '38',
				ingredients: [
					{
						qtde: '3x',
						name: 'Grape',
						nameBr: 'Uva',	
					},
				],
			},
			{
				product: 'Rose Jam',
				productBr: 'Geléia de Rosa',
				time: '1h',
				timem: '60',
				exp: '46',
				lvl: '61',
				ingredients: [
					{
						qtde: '3x',
						name: 'Rose',
						nameBr: 'Rosa',
					},
				],
			},
			{
				product: 'Caramelized Mushroom',
				productBr: 'Cogumelos Caramelizados',
				time: '45m',
				timem: '45',
				exp: '127',
				lvl: '72',
				ingredients: [
					{
						qtde: '3x',
						name: 'Mushroom',
						nameBr: 'Cogumelo',
					},
					{
						qtde: '2x',
						name: 'Sugar',
						nameBr: 'Açúcar',
					},
				],
			},					
			{
				product: 'Peanut Butter',
				productBr: 'Manteiga de Amendoim',
				time: '1h',
				timem: '60',
				exp: '63',
				lvl: '78',
				ingredients: [
					{
						qtde: '3x',
						name: 'Peanut',
						nameBr: 'Amendoim',
					},
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Caramelo',
						item: '30x Caramel',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Caramelo',
						item: '30x Caramel',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Caramelo',
						item: '30x Caramel',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Candy Store',
		machineBr: 'Loja de Gomas',
		unlock: '32',
		products: [
			{
				product: 'Jelly Bean',
				productBr: 'Jujuba',
				time: '1h',
				timem: '60',
				exp: '34',
				lvl: '32',
				ingredients: [
					{
						qtde: '3x',
						name: 'Strawberry',
						nameBr: 'Morango',	
					},
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',	
					},
				],
			},
			{
				product: 'Toffee',
				productBr: 'Caramelos',
				time: '1h30m',
				timem: '90',
				exp: '48',
				lvl: '37',
				ingredients: [
					{
						qtde: '1x',
						name: 'Caramel',
						nameBr: 'Caramelo',	
					},
					{
						qtde: '1x',
						name: 'Butter',
						nameBr: 'Manteiga',	
					},
				],
			},
			{
				product: 'Candy Cane',
				productBr: 'Bengala Doce',
				time: '2h',
				timem: '120',
				exp: '45',
				lvl: '42',
				ingredients: [
					{
						qtde: '1x',
						name: 'Caramel',
						nameBr: 'Caramelo',	
					},
					{
						qtde: '1x',
						name: 'Cream',
						nameBr: 'Creme',	
					},
					{
						qtde: '3x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Chocolate',
				productBr: 'Chocolate',
				time: '1h30m',
				timem: '90',
				exp: '46',
				lvl: '47',
				ingredients: [
					{
						qtde: '2x',
						name: 'Strawberry',
						nameBr: 'Morango',	
					},
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',	
					},
					{
						qtde: '3x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Lollipop',
				productBr: 'Pirulito',
				time: '2h30m',
				timem: '150',
				exp: '50',
				lvl: '52',
				ingredients: [
					{
						qtde: '1x',
						name: 'Honey Caramel',
						nameBr: 'Caramelo de Mel',	
					},
					{
						qtde: '2x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
				],
			},
			{
				product: 'Marshmallow*',
				productBr: 'Marshmallow*',
				time: '2h15m',
				timem: '135',
				exp: '90',
				lvl: '54',
				ingredients: [
					{
						qtde: '1x',
						name: 'Honey',
						nameBr: 'Mel',	
					},
					{
						qtde: '2x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
				],
			},
			{
				product: 'Jelly Fruit Slices',
				productBr: 'Fatias de Gelatina',
				time: '1h45',
				timem: '105',
				exp: '??',
				lvl: '59',
				ingredients: [
					{
						qtde: '1x',
						name: 'Watermelon Jam',
						nameBr: 'Geléia de Melancia',	
					},
					{
						qtde: '1x',
						name: 'Strawberry Jam',
						nameBr: 'Geléia de Morango',	
					},
					{
						qtde: '1x',
						name: 'Key Lime Pie',
						nameBr: 'Torta de Limão',	
					},
				],
			},					
			{
				product: 'Chocolate Bar',
				productBr: 'Barra de Chocolate',
				time: '1h45m',
				timem: '105',
				exp: '68',
				lvl: '65',
				ingredients: [
					{
						qtde: '2x',
						name: 'Cocoa',
						nameBr: 'Cacau',	
					},
					{
						qtde: '2x',
						name: 'Peanut',
						nameBr: 'Amendoim',	
					},
					{
						qtde: '1x',
						name: 'Honey',
						nameBr: 'Mel',
					},
				],
			},
			{
				product: 'Green Tea Candy',
				productBr: 'Doce de Chá Verde',
				time: '45m',
				timem: '45',
				exp: '87',
				lvl: '74',
				ingredients: [
					{
						qtde: '2x',
						name: 'Tea',
						nameBr: 'Chá',
					},
					{
						qtde: '1x',
						name: 'Cream',
						nameBr: 'Creme',
					},
					{
						qtde: '2x',
						name: 'Sugar',
						nameBr: 'Açúcar',
					},
				],
			},
			{
				product: 'Cotton Candy',
				productBr: 'Algodão Doce',
				time: '30m',
				timem: '30',
				exp: '117',
				lvl: '77',
				ingredients: [
					{
						qtde: '2x',
						name: 'Sugar',
						nameBr: 'Açúcar',
					},
					{
						qtde: '1x',
						name: 'Syrup',
						nameBr: 'Xarope',
					},
					{
						qtde: '2x',
						name: 'Rose',
						nameBr: 'Rosa',
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Milkshake',
						item: '30x Milkshake',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Milkshake',
						item: '50x Milkshake',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Plastic Factory',
		machineBr: 'Fábrica de Plástico',
		unlock: '35',
		products: [
			{
				product: 'Plastic Bottle',
				productBr: 'Garrafa de Plástico',
				time: '45m',
				timem: '45',
				exp: '39',
				lvl: '35',
				ingredients: [
					{
						qtde: '1x',
						name: 'Plastic',
						nameBr: 'Plástico',	
					},
				],
			},
			{
				product: 'Toys',
				productBr: 'Brinquedos',
				time: '25m',
				timem: '25',
				exp: '56',
				lvl: '40',
				ingredients: [
					{
						qtde: '1x',
						name: 'Plastic',
						nameBr: 'Plástico',	
					},
					{
						qtde: '1x',
						name: 'Rubber Tree',
						nameBr: 'Látex',	
					},
				],
			},
			{
				product: 'Ball',
				productBr: 'Bola',
				time: '1h',
				timem: '60',
				exp: '101',
				lvl: '45',
				ingredients: [
					{
						qtde: '1x',
						name: 'Plastic',
						nameBr: 'Plástico',	
					},
					{
						qtde: '1x',
						name: 'Glue',
						nameBr: 'Cola',	
					},
				],
			},
			{
				product: 'Inflatable Boat',
				productBr: 'Bote Inflável',
				time: '1h15m',
				timem: '75',
				exp: '101',
				lvl: '48',
				ingredients: [
					{
						qtde: '2x',
						name: 'Rubber Tree',
						nameBr: 'Látex',	
					},
					{
						qtde: '1x',
						name: 'Plastic',
						nameBr: 'Plástico',	
					},
				],
			},
			{
				product: 'Shuttlecook*',
				productBr: 'Peteca*',
				time: '20m',
				timem: '20',
				exp: '??',
				lvl: '62',
				ingredients: [
					{
						qtde: '1x',
						name: 'Plastic',
						nameBr: 'Plástico',	
					},
					{
						qtde: '2x',
						name: 'Feather',
						nameBr: 'Pena',	
					},
				],
			},
			{
				product: 'Modeling Clay',
				productBr: 'Massa de Modelar',
				time: '1h',
				timem: '60',
				exp: '50',
				lvl: '75',
				ingredients: [
					{
						qtde: '4x',
						name: 'Rubber Tree',
						nameBr: 'Látex',	
					},
				],
			},
			{
				product: 'Doll',
				productBr: 'Boneca',
				time: '1h',
				timem: '60',
				exp: '135',
				lvl: '85',
				ingredients: [
					{
						qtde: '1x',
						name: 'Plastic',
						nameBr: 'Plástico',	
					},
					{
						qtde: '1x',
						name: 'Glue',
						nameBr: 'Cola',	
					},
					{
						qtde: '2x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
				],
			},
			{
				product: 'Ballon',
				productBr: 'Balão',
				time: '1h',
				timem: '60',
				exp: '50',
				lvl: '90',
				ingredients: [
					{
						qtde: '1x',
						name: 'Rubber Tree',
						nameBr: 'Látex',	
					},
					{
						qtde: '1x',
						name: 'Yarn',
						nameBr: 'Lã',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Molho de Pimenta',
						item: '30x Chili Sauce',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Molho de Pimenta',
						item: '50x Chili Sauce',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '400 mWSO',
						item: '400 mWSO',
					},
					{
						itemBr: '40x Molho de Pimenta',
						item: '40x Chili Sauce',
					},
					{
						itemBr: '40x Suchi de Lagosta',
						item: '40x Lobster Sushi',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Mexican Restaurant',
		machineBr: 'Restaurante Mexicano',
		unlock: '41',
		products: [
			{
				product: 'Chili Sauce',
				productBr: 'Molho de Pimenta',
				time: '1h',
				timem: '60',
				exp: '62',
				lvl: '41',
				ingredients: [
					{
						qtde: '3x',
						name: 'Tomato',
						nameBr: 'Tomate',	
					},
					{
						qtde: '3x',
						name: 'Pepper',
						nameBr: 'Pimenta',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Burrito',
				productBr: 'Burrito',
				time: '30m',
				timem: '30',
				exp: '42',
				lvl: '44',
				ingredients: [
					{
						qtde: '2x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '2x',
						name: 'Bacon',
						nameBr: 'Bacon',	
					},
					{
						qtde: '1x',
						name: 'Tomato',
						nameBr: 'Tomate',	
					},
				],
			},
			{
				product: 'Nachos',
				productBr: 'Nachos',
				time: '1h30m',
				timem: '90',
				exp: '48',
				lvl: '46',
				ingredients: [
					{
						qtde: '1x',
						name: 'Corn Chips',
						nameBr: 'Chips de Milho',	
					},
					{
						qtde: '1x',
						name: 'Cheese',
						nameBr: 'Queijo',	
					},
					{
						qtde: '2x',
						name: 'Pepper',
						nameBr: 'Pimenta',	
					},
				],
			},
			{
				product: 'Taco',
				productBr: 'Taco',
				time: '45m',
				timem: '45',
				exp: '47',
				lvl: '57',
				ingredients: [
					{
						qtde: '3x',
						name: 'Corn',
						nameBr: 'Milho',	
					},
					{
						qtde: '3x',
						name: 'Tomato',
						nameBr: 'Tomate',	
					},
					{
						qtde: '2x',
						name: 'Pepper',
						nameBr: 'Pimenta',	
					},
				],
			},
			{
				product: 'Wrapped Popper*',
				productBr: 'Jalapeno*',
				time: '1h',
				timem: '60',
				exp: '53',
				lvl: '65',
				ingredients: [
					{
						qtde: '2x',
						name: 'Pepper',
						nameBr: 'Pimenta',	
					},
					{
						qtde: '1x',
						name: 'Bacon',
						nameBr: 'Bacon',	
					},
					{
						qtde: '1x',
						name: 'Cheese',
						nameBr: 'Queijo',	
					},
				],
			},
			{
				product: 'Gazpacho',
				productBr: 'Gazpacho',
				time: '1h15m',
				timem: '75',
				exp: '47',
				lvl: '67',
				ingredients: [
					{
						qtde: '3x',
						name: 'Tomato',
						nameBr: 'Tomate',	
					},
					{
						qtde: '2x',
						name: 'Pepper',
						nameBr: 'Pimenta',	
					},
					{
						qtde: '1x',
						name: 'Bread',
						nameBr: 'Pão',	
					},
				],
			},
			{
				product: 'Corn Soup',
				productBr: 'Sopa de Milho',
				time: '45m',
				timem: '45',
				exp: '45',
				lvl: '73',
				ingredients: [
					{
						qtde: '3x',
						name: 'Corn',
						nameBr: 'Milho',	
					},
					{
						qtde: '2x',
						name: 'Carrot',
						nameBr: 'Cenoura',	
					},
					{
						qtde: '2x',
						name: 'Bacon',
						nameBr: 'Bacon',	
					},
				],
			},
			{
				product: 'Mole Sauce',
				productBr: 'Mole',
				time: '1h',
				timem: '60',
				exp: '65',
				lvl: '80',
				ingredients: [
					{
						qtde: '3x',
						name: 'Cocoa',
						nameBr: 'Cacau',	
					},
					{
						qtde: '3x',
						name: 'Pepper',
						nameBr: 'Pimenta',	
					},
				],
			},

			{
				product: '??',
				productBr: '??',
				time: '??',
				timem: '??',
				exp: '??',
				lvl: '91',
				ingredients: [
					{
						qtde: '??',
						name: 'noitem',
						nameBr: 'noitem',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Ameixa',
						item: '30x Plum',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Ameixa',
						item: '50x Plum',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Furniture Factory',
		machineBr: 'Fábrica de Móveis',
		unlock: '43',
		products: [
			{
				product: 'Table',
				productBr: 'Mesa',
				time: '2h',
				timem: '120',
				exp: '27',
				lvl: '43',
				ingredients: [
					{
						qtde: '3x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
				],
			},
			{
				product: 'Chair',
				productBr: 'Cadeira',
				time: '1h30m',
				timem: '90',
				exp: '71',
				lvl: '47',
				ingredients: [
					{
						qtde: '1x',
						name: 'Plastic',
						nameBr: 'Plástico',	
					},
				],
			},
			{
				product: 'Couch',
				productBr: 'Sofá',
				time: '3h',
				timem: '180',
				exp: '43',
				lvl: '53',
				ingredients: [
					{
						qtde: '2x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
					{
						qtde: '1x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
				],
			},
			{
				product: 'Bed',
				productBr: 'Cama',
				time: '2h15m',
				timem: '135',
				exp: '125',
				lvl: '68',
				ingredients: [
					{
						qtde: '2x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
					{
						qtde: '1x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
				],
			},
			{
				product: 'Floor Lamp',
				productBr: 'Luminária de Chão',
				time: '1h45m',
				timem: '105',
				exp: '99',
				lvl: '76',
				ingredients: [
					{
						qtde: '5x',
						name: 'Bronze Ore',
						nameBr: 'Minério de Bronze',	
					},
					{
						qtde: '1x',
						name: 'Plastic',
						nameBr: 'Plástico',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30x Marshmallow',
						item: '30x Marshmallow',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Marshmallow',
						item: '50x Marshmallow',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Italian Restaurant',
		machineBr: 'Restaurante Italiano',
		unlock: '49',
		products: [
			{
				product: 'Pizza',
				productBr: 'Pizza',
				time: '1h',
				timem: '60',
				exp: '29',
				lvl: '49',
				ingredients: [
					{
						qtde: '2x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '1x',
						name: 'Cheese',
						nameBr: 'Queijo',	
					},
					{
						qtde: '2x',
						name: 'Tomato',
						nameBr: 'Tomate',	
					},
				],
			},
			{
				product: 'Pasta',
				productBr: 'Massa',
				time: '45m',
				timem: '45',
				exp: '111',
				lvl: '58',
				ingredients: [
					{
						qtde: '3x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '2x',
						name: 'Pepper',
						nameBr: 'Pimenta',	
					},
					{
						qtde: '2x',
						name: 'Butter',
						nameBr: 'Manteiga',	
					},
				],
			},
			{
				product: 'Olive Oil',
				productBr: 'Azeite',
				time: '45m',
				timem: '45',
				exp: '111',
				lvl: '59',
				ingredients: [
					{
						qtde: '3x',
						name: 'Olive',
						nameBr: 'Azeitona',	
					},
				],
			},
			{
				product: 'Seafood Pizza',
				productBr: 'Pizza de Marisco',
				time: '1h15m',
				timem: '75',
				exp: '103',
				lvl: '64',
				ingredients: [
					{
						qtde: '2x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '1x',
						name: 'Cheese',
						nameBr: 'Queijo',	
					},
					{
						qtde: '1x',
						name: 'Crab',
						nameBr: 'Caranguejo',	
					},
				],
			},
			{
				product: 'Bruschetta',
				productBr: 'Bruschetta',
				time: '25m',
				timem: '25',
				exp: '48',
				lvl: '71',
				ingredients: [
					{
						qtde: '1x',
						name: 'Bread',
						nameBr: 'Pão',	
					},
					{
						qtde: '1x',
						name: 'Tomato',
						nameBr: 'Tomato',	
					},
					{
						qtde: '2x',
						name: 'Crab',
						nameBr: 'Caranguejo',	
					},
				],
			},
			{
				product: 'Ravioli*',
				productBr: 'Ravioli*',
				time: '1h',
				timem: '60',
				exp: '87',
				lvl: '77',
				ingredients: [
					{
						qtde: '3x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '1x',
						name: 'Lobster',
						nameBr: 'Lagosta',	
					},
					{
						qtde: '1x',
						name: 'Cheese',
						nameBr: 'Queijo',	
					},
				],
			},
			{
				product: 'Tiramisu',
				productBr: 'Tiramisu',
				time: '??',
				timem: '??',
				exp: '??',
				lvl: '82',
				ingredients: [
					{
						qtde: '2x',
						name: 'Espresso',
						nameBr: 'Espresso',
					},
					{
						qtde: '2x',
						name: 'Cookies',
						nameBr: 'Biscoitos',
					},
					{
						qtde: '1x',
						name: 'Chocolate',
						nameBr: 'Chocolate',
					},
				],
			},
			{
				product: 'Lasagna',
				productBr: 'Lasagna',
				time: '1h15m',
				timem: '75',
				exp: '111',
				lvl: '89',
				ingredients: [
					{
						qtde: '4x',
						name: 'Wheat',
						nameBr: 'Trigo',
					},
					{
						qtde: '2x',
						name: 'Mushroom',
						nameBr: 'Cogumelo',
					},
					{
						qtde: '2x',
						name: 'Cheese',
						nameBr: 'Queijo',
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '100 mWSO',
						item: '100 mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '200 mWSO',
						item: '200 mWSO',
					},
					{
						itemBr: '30X Azeitona',
						item: '30x Olive',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '300 mWSO',
						item: '300 mWSO',
					},
					{
						itemBr: '50x Azeitona',
						item: '50x Olive',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Shoes Factory',
		machineBr: 'Fábrica de Calçados',
		unlock: '51',
		products: [
			{
				product: 'Flip Flops',
				productBr: 'Chinelos',
				time: '45m',
				timem: '45',
				exp: '19',
				lvl: '50',
				ingredients: [
					{
						qtde: '1x',
						name: 'Rubber Tree',
						nameBr: 'Látex',	
					},
				],
			},
			{
				product: 'Sneakers',
				productBr: 'Tênis',
				time: '1h',
				timem: '60',
				exp: '100',
				lvl: '55',
				ingredients: [
					{
						qtde: '1x',
						name: 'Rubber Tree',
						nameBr: 'Látex',	
					},
					{
						qtde: '1x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
					{
						qtde: '1x',
						name: 'Glue',
						nameBr: 'Cola',	
					},
				],
			},
			{
				product: 'Boots',
				productBr: 'Chuteiras',
				time: '1h15m',
				timem: '75',
				exp: '163',
				lvl: '58',
				ingredients: [
					{
						qtde: '1x',
						name: 'Rubber Tree',
						nameBr: 'Látex',	
					},
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
					{
						qtde: '1x',
						name: 'Glue',
						nameBr: 'Cola',	
					},
				],
			},
			{
				product: 'Hig-Heeled Shoes',
				productBr: 'Sapato de Salto Alto',
				time: '1h15m',
				timem: '75',
				exp: '168',
				lvl: '60',
				ingredients: [
					{
						qtde: '2x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
					{
						qtde: '1x',
						name: 'Glue',
						nameBr: 'Cola',	
					},
				],
			},
			{
				product: 'Warm Boots',
				productBr: 'Botas Quentes',
				time: '1h45m',
				timem: '105',
				exp: '101',
				lvl: '61',
				ingredients: [
					{
						qtde: '2x',
						name: 'Feather',
						nameBr: 'Pena',	
					},
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
					{
						qtde: '1x',
						name: 'Wool',
						nameBr: 'Novelo de Lã',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Asian Restaurant',
		machineBr: 'Restaurante Asiático',
		unlock: '54',
		products: [
			{
				product: 'Sushi Roll',
				productBr: 'Sushi',
				time: '25m',
				timem: '25',
				exp: '68',
				lvl: '54',
				ingredients: [
					{
						qtde: '5x',
						name: 'Rice',
						nameBr: 'Arroz',	
					},
					{
						qtde: '1x',
						name: 'Fish',
						nameBr: 'Peixe',	
					},
				],
			},
			{
				product: 'Lobster Sushi',
				productBr: 'Sushi de Lagosta',
				time: '40m',
				timem: '40',
				exp: '99',
				lvl: '57',
				ingredients: [
					{
						qtde: '4x',
						name: 'Rice',
						nameBr: 'Arroz',	
					},
					{
						qtde: '1x',
						name: 'Lobster',
						nameBr: 'Lagosta',	
					},
				],
			},
			{
				product: 'Fried Rice',
				productBr: 'Arroz Frito',
				time: '1h',
				timem: '60',
				exp: '77',
				lvl: '60',
				ingredients: [
					{
						qtde: '4x',
						name: 'Rice',
						nameBr: 'Arroz',	
					},
					{
						qtde: '4x',
						name: 'Egg',
						nameBr: 'Ovo',
					},
				],
			},
			{
				product: 'Lobster Tempura',
				productBr: 'Lagosta Frita',
				time: '1h15m',
				timem: '75',
				exp: '62',
				lvl: '68',
				ingredients: [
					{
						qtde: '1x',
						name: 'Corn',
						nameBr: 'Milho',	
					},
					{
						qtde: '1x',
						name: 'Lobster',
						nameBr: 'Lagosta',	
					},
				],
			},
			{
				product: 'Coconut Soup*',
				productBr: 'Sopa de Coco*',
				time: '1h',
				timem: '60',
				exp: '207',
				lvl: '74',
				ingredients: [
					{
						qtde: '1x',
						name: 'Coconut',
						nameBr: 'Coco',	
					},
					{
						qtde: '2x',
						name: 'Crab',
						nameBr: 'Caranguejo',	
					},
					{
						qtde: '1x',
						name: 'Lemon',
						nameBr: 'Limão',	
					},
				],
			},
			{
				product: 'Seafood Noodle',
				productBr: 'Noodle com Marisco',
				time: '30m',
				timem: '30',
				exp: '110',
				lvl: '81',
				ingredients: [
					{
						qtde: '6x',
						name: 'Rice',
						nameBr: 'Arroz',	
					},
					{
						qtde: '2x',
						name: 'Crab',
						nameBr: 'Caranguejo',	
					},
					{
						qtde: '1x',
						name: 'Pepper',
						nameBr: 'Pimenta',	
					},
				],
			},
			{
				product: 'Sea Salad',
				productBr: 'Salada do Mar',
				time: '45m',
				timem: '45',
				exp: '101',
				lvl: '84',
				ingredients: [
					{
						qtde: '1x',
						name: 'Fish',
						nameBr: 'Peixe',	
					},
					{
						qtde: '1x',
						name: 'Crab',
						nameBr: 'Caranguejo',	
					},
					{
						qtde: '2x',
						name: 'Cheese',
						nameBr: 'Queijo',	
					},
				],
			},
			{
				product: 'Mushroom Salad	',
				productBr: 'Salada de Cogumelos',
				time: '50m',
				timem: '50',
				exp: '168',
				lvl: '88',
				ingredients: [
					{
						qtde: '2x',
						name: 'Rice',
						nameBr: 'Arroz',	
					},
					{
						qtde: '2x',
						name: 'Mushroom',
						nameBr: 'Cogumelo',	
					},
					{
						qtde: '1x',
						name: 'Pepper',
						nameBr: 'Pimenta',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Jewelry Store',
		machineBr: 'Joalheria',
		unlock: '55',
		products: [
			{
				product: 'Pendant',
				productBr: 'Pingente',
				time: '15m',
				timem: '15',
				exp: '148',
				lvl: '53',
				ingredients: [
					{
						qtde: '9x',
						name: 'Silver Ore',
						nameBr: 'Minério de Prata',	
					},
				],
			},
			{
				product: 'Ring',
				productBr: 'Anel',
				time: '6h',
				timem: '360',
				exp: '183',
				lvl: '57',
				ingredients: [
					{
						qtde: '6x',
						name: 'Silver Ore',
						nameBr: 'Minério de Prata',	
					},
					{
						qtde: '4x',
						name: 'Golden Ore',
						nameBr: 'Minério de Ouro',	
					},
				],
			},
			{
				product: 'Pearl Choker',
				productBr: 'Colar de Pérolas',
				time: '1h15m',
				timem: '75',
				exp: '144',
				lvl: '60',
				ingredients: [
					{
						qtde: '2x',
						name: 'Silver Ore',
						nameBr: 'Minério de Prata',	
					},
					{
						qtde: '3x',
						name: 'Golden Ore',
						nameBr: 'Minério de Ouro',	
					},
				],
			},
			{
				product: 'Earrings',
				productBr: 'Brincos',
				time: '45m',
				timem: '45',
				exp: '379',
				lvl: '63',
				ingredients: [
					{
						qtde: '10x',
						name: 'Silver Ore',
						nameBr: 'Minério de Prata',	
					},
					{
						qtde: '10x',
						name: 'Golden Ore',
						nameBr: 'Minério de Ouro',	
					},
				],
			},
			{
				product: 'Diadem*',
				productBr: 'Coroa*',
				time: '1h',
				timem: '60',
				exp: '434',
				lvl: '69',
				ingredients: [
					{
						qtde: '15x',
						name: 'Silver Ore',
						nameBr: 'Minério de Prata',	
					},
					{
						qtde: '15x',
						name: 'Golden Ore',
						nameBr: 'Minério de Ouro',	
					},
				],
			},
			{
				product: 'Feather Earrings',
				productBr: 'Brincos de Penas',
				time: '45m',
				timem: '45',
				exp: '111',
				lvl: '71',
				ingredients: [
					{
						qtde: '4x',
						name: 'Silver Ore',
						nameBr: 'Minério de Prata',	
					},
					{
						qtde: '4x',
						name: 'Feather',
						nameBr: 'Pena',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Grill Factory',
		machineBr: 'Churrascaria',
		unlock: '60',
		products: [
			{
				product: 'Quiche',
				productBr: 'Quiche',
				time: '45m',
				timem: '45',
				exp: '41',
				lvl: '60',
				ingredients: [
					{
						qtde: '2x',
						name: 'Wheat',
						nameBr: 'Trigo',	
					},
					{
						qtde: '2x',
						name: 'Bacon',
						nameBr: 'Bacon',	
					},
					{
						qtde: '1x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
				],
			},
			{
				product: 'Baked Lobster',
				productBr: 'Lagosta Assada',
				time: '1h30m',
				timem: '90',
				exp: '81',
				lvl: '62',
				ingredients: [
					{
						qtde: '1x',
						name: 'Lobster',
						nameBr: 'Lagosta',	
					},
					{
						qtde: '1x',
						name: 'Cream',
						nameBr: 'Creme',	
					},
				],
			},
			{
				product: 'Bacon Egg',
				productBr: 'Ovo de Bacon',
				time: '30m',
				timem: '30',
				exp: '44',
				lvl: '65',
				ingredients: [
					{
						qtde: '2x',
						name: 'Bacon',
						nameBr: 'Bacon',	
					},
					{
						qtde: '2x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
				],
			},
			{
				product: 'Fried Fish*',
				productBr: 'Peixe Frito*',
				time: '1h',
				timem: '60',
				exp: '55',
				lvl: '71',
				ingredients: [
					{
						qtde: '1x',
						name: 'Fish',
						nameBr: 'Peixe',	
					},
					{
						qtde: '1x',
						name: 'Butter',
						nameBr: 'Manteiga',	
					},
				],
			},
			{
				product: 'Pancake',
				productBr: 'Panqueca',
				time: '25m',
				timem: '25',
				exp: '34',
				lvl: '78',
				ingredients: [
					{
						qtde: '3x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
					{
						qtde: '1x',
						name: 'Honey',
						nameBr: 'Mel',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Lobster Omelet',
				productBr: 'Omelete de Lagosta',
				time: '1h10m',
				timem: '70',
				exp: '69',
				lvl: '83',
				ingredients: [
					{
						qtde: '1x',
						name: 'Lobster',
						nameBr: 'Lagosta',
					},
					{
						qtde: '2x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
					{
						qtde: '1x',
						name: 'Bread',
						nameBr: 'Pão',	
					},
				],
			},
			{
				product: 'Grilled Fish',
				productBr: 'Peixe Grelhado',
				time: '1h15m',
				timem: '75',
				exp: '153',
				lvl: '92',
				ingredients: [
					{
						qtde: '1x',
						name: 'Olive',
						nameBr: 'Azeitona',
					},
					{
						qtde: '2x',
						name: 'Fish',
						nameBr: 'Peixe',	
					},
					{
						qtde: '1x',
						name: 'Lemon',
						nameBr: 'Limão',	
					},
				],
			},
			{
				product: 'Roast Meat',
				productBr: 'Carne Assada',
				time: '1h45m',
				timem: '105',
				exp: '240',
				lvl: '98',
				ingredients: [
					{
						qtde: '2x',
						name: 'Mushroom',
						nameBr: 'Cogumelo',
					},
					{
						qtde: '2x',
						name: 'Bacon',
						nameBr: 'Bacon',	
					},
					{
						qtde: '1x',
						name: 'Peanut Butter',
						nameBr: 'Manteiga de Amendoim',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Beverage Shop',
		machineBr: 'Loja de Bebidas',
		unlock: '62',
		products: [
			{
				product: 'Vitamin Cocktail',
				productBr: 'Coquetel de Vitaminas',
				time: '15m',
				timem: '15',
				exp: '19',
				lvl: '62',
				ingredients: [
					{
						qtde: '1x',
						name: 'Carrot',
						nameBr: 'Cenoura',	
					},
					{
						qtde: '1x',
						name: 'Tomato',
						nameBr: 'Tomate',	
					},
					{
						qtde: '1x',
						name: 'Pepper',
						nameBr: 'Pimenta',	
					},
				],
			},
			{
				product: 'Grape Fizz',
				productBr: 'Fizz de Uva',
				time: '30m',
				timem: '30',
				exp: '63',
				lvl: '66',
				ingredients: [
					{
						qtde: '2x',
						name: 'Grape',
						nameBr: 'Uva',	
					},
					{
						qtde: '1x',
						name: 'Egg',
						nameBr: 'Ovo',	
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Chocolate Smoothie',
				productBr: 'Shake de Chocolate',
				time: '45m',
				timem: '45',
				exp: '128',
				lvl: '71',
				ingredients: [
					{
						qtde: '2x',
						name: 'Milk',
						nameBr: 'Leite',	
					},
					{
						qtde: '1x',
						name: 'Chocolate Bar',
						nameBr: 'Barra de Chocolate',
					},
					{
						qtde: '2x',
						name: 'Banana',
						nameBr: 'Banana',	
					},
				],
			},
			{
				product: 'Watermelon Juice*',
				productBr: 'Suco de Melancia*',
				time: '25m',
				timem: '25',
				exp: '58',
				lvl: '79',
				ingredients: [
					{
						qtde: '2x',
						name: 'Watermelon',
						nameBr: 'Melancia',
					},
					{
						qtde: '1x',
						name: 'Sugar',
						nameBr: 'Açúcar',	
					},
				],
			},
			{
				product: 'Iced Tea',
				productBr: 'Chá Gelado',
				time: '50m',
				timem: '50',
				exp: '112',
				lvl: '88',
				ingredients: [
					{
						qtde: '3x',
						name: 'Jasmine',
						nameBr: 'Jasmim',
					},
					{
						qtde: '1x',
						name: 'Lemon',
						nameBr: 'Limão',	
					},
				],
			},
			{
				product: 'Tropical Mix',
				productBr: 'Batida Tropical',
				time: '1h',
				timem: '60',
				exp: '231',
				lvl: '97',
				ingredients: [
					{
						qtde: '2x',
						name: 'Coconut',
						nameBr: 'Coco',
					},
					{
						qtde: '2x',
						name: 'Pineapple',
						nameBr: 'Abacaxi',
					},
					{
						qtde: '3x',
						name: 'Sugarcane',
						nameBr: 'Cana de Açúcar',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Bouquet Shop',
		machineBr: 'Loja de Buquês',
		unlock: '69',
		products: [
			{
				product: 'Summer Bouquet',
				productBr: 'Buquê de Verão',
				time: '45m',
				timem: '45',
				exp: '57',
				lvl: '69',
				ingredients: [
					{
						qtde: '3x',
						name: 'Rose',
						nameBr: 'Rosa',
					},
					{
						qtde: '5x',
						name: 'Wheat',
						nameBr: 'Trigo',
					},
					{
						qtde: '1x',
						name: 'Paper',
						nameBr: 'Papel',	
					},
				],
			},
			{
				product: 'Vegetable Bouquet',
				productBr: 'Buquê de Legumes',
				time: '1h15m',
				timem: '75',
				exp: '45',
				lvl: '82',
				ingredients: [
					{
						qtde: '3x',
						name: 'Tomato',
						nameBr: 'Tomate',
					},
					{
						qtde: '3x',
						name: 'Corn',
						nameBr: 'Milho',
					},
					{
						qtde: '3x',
						name: 'Carrot',
						nameBr: 'Cenoura',	
					},
				],
			},
			{
				product: 'Wedding Bouquet',
				productBr: 'Buquê de Casamento',
				time: '45m',
				timem: '45',
				exp: '129',
				lvl: '85',
				ingredients: [
					{
						qtde: '2x',
						name: 'Jasmine',
						nameBr: 'Jasmim',
					},
					{
						qtde: '3x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',
					},
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
				],
			},
			{
				product: 'Candy Bouquet',
				productBr: 'Buquê de Doces',
				time: '30m',
				timem: '30',
				exp: '135',
				lvl: '93',
				ingredients: [
					{
						qtde: '3x',
						name: 'Strawberry',
						nameBr: 'Morango',
					},
					{
						qtde: '1x',
						name: 'Gingerbread',
						nameBr: 'Biscoito de Gengibre',
					},
					{
						qtde: '1x',
						name: 'Candy Cane',
						nameBr: 'Bengala Doce',	
					},
				],
			},
			{
				product: 'Flower Basket',
				productBr: 'Cesta de Flores',
				time: '1h',
				timem: '60',
				exp: '135',
				lvl: '99',
				ingredients: [
					{
						qtde: '3x',
						name: 'Rose',
						nameBr: 'Rosa',
					},
					{
						qtde: '4x',
						name: 'Jasmine',
						nameBr: 'Jasmim',
					},
					{
						qtde: '2x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
				],
			},
			{
				product: 'Lei',
				productBr: 'Colar Havaiano',
				time: '1h',
				timem: '60',
				exp: '125',
				lvl: '103',
				ingredients: [
					{
						qtde: '5x',
						name: 'Rose',
						nameBr: 'Rosa',
					},
					{
						qtde: '5x',
						name: 'Jasmine',
						nameBr: 'Jasmim',
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Perfume Factory',
		machineBr: 'Fábrica de Perfumes',
		unlock: '70',
		products: [
			{
				product: 'Candle',
				productBr: 'Vela',
				time: '1h',
				timem: '60',
				exp: '69',
				lvl: '70',
				ingredients: [
					{
						qtde: '2x',
						name: 'Honey',
						nameBr: 'Mel',	
					},
					{
						qtde: '2x',
						name: 'Cocoa',
						nameBr: 'Cacau',	
					},
					{
						qtde: '1x',
						name: 'Caramel',
						nameBr: 'Caramelo',	
					},
				],
			},
			{
				product: 'Perfume',
				productBr: 'Perfume',
				time: '1h30m',
				timem: '90',
				exp: '127',
				lvl: '79',
				ingredients: [
					{
						qtde: '3x',
						name: 'Rose',
						nameBr: 'Rosa',	
					},
					{
						qtde: '2x',
						name: 'Banana',
						nameBr: 'Banana',	
					},
					{
						qtde: '2x',
						name: 'Strawberry',
						nameBr: 'Morango',	
					},
				],
			},
			{
				product: 'Air Freshener',
				productBr: 'Purificador de Ar',
				time: '20m',
				timem: '20',
				exp: '67',
				lvl: '86',
				ingredients: [
					{
						qtde: '2x',
						name: 'Jasmine',
						nameBr: 'Jasmim',	
					},
					{
						qtde: '2x',
						name: 'Rose',
						nameBr: 'Rosa',	
					},
				],
			},
			{
				product: 'Soap',
				productBr: 'Sabão',
				time: '1h15m',
				timem: '75',
				exp: '114',
				lvl: '91',
				ingredients: [
					{
						qtde: '3x',
						name: 'Honey',
						nameBr: 'Mel',	
					},
					{
						qtde: '2x',
						name: 'Olive',
						nameBr: 'Azeitona',	
					},
				],
			},
			{
				product: 'Jasmine Oil',
				productBr: 'Óleo de Jasmim',
				time: '1h',
				timem: '60',
				exp: '128',
				lvl: '96',
				ingredients: [
					{
						qtde: '3x',
						name: 'Jasmine',
						nameBr: 'Jasmim',	
					},
					{
						qtde: '2x',
						name: 'Olive',
						nameBr: 'Azeitona',	
					},
				],
			},
			{
				product: 'Lotion',
				productBr: 'Loção',
				time: '45m',
				timem: '45',
				exp: '140',
				lvl: '102',
				ingredients: [
					{
						qtde: '2x',
						name: 'Rose',
						nameBr: 'Rosa',	
					},
					{
						qtde: '2x',
						name: 'Coconut',
						nameBr: 'Coco',	
					},
				],
			},
			{
				product: 'Face Mask',
				productBr: 'Máscara Facial',
				time: '30m',
				timem: '30',
				exp: '167',
				lvl: '109',
				ingredients: [
					{
						qtde: '2x',
						name: 'Tea',
						nameBr: 'Chá',	
					},
					{
						qtde: '1x',
						name: 'Clay Ore',
						nameBr: 'Minério de Argila',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
	{
		type: 'machine',
		machine: 'Music Shop',
		machineBr: 'Loja de Música',
		unlock: '80',
		products: [
			{
				product: 'Ukulele',
				productBr: 'Ukulele',
				time: '40m',
				timem: '40',
				exp: '69',
				lvl: '80',
				ingredients: [
					{
						qtde: '3x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
					{
						qtde: '3x',
						name: 'Bronze Ore',
						nameBr: 'Minério de Bronze',	
					},
				],
			},
			{
				product: 'Saxophone',
				productBr: 'Saxofone',
				time: '45m',
				timem: '45',
				exp: '145',
				lvl: '86',
				ingredients: [
					{
						qtde: '1x',
						name: 'Plastic',
						nameBr: 'Plástico',	
					},
					{
						qtde: '6x',
						name: 'Bronze Ore',
						nameBr: 'Minério de Bronze',	
					},
					{
						qtde: '1x',
						name: 'Sugarcane',
						nameBr: 'Cana de Açúcar',	
					},
				],
			},
			{
				product: 'Drum',
				productBr: 'Tambor',
				time: '1h',
				timem: '60',
				exp: '135',
				lvl: '94',
				ingredients: [
					{
						qtde: '3x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
					{
						qtde: '2x',
						name: 'Cotton Fabric',
						nameBr: 'Tecido de Algodão',	
					},
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
				],
			},
			{
				product: 'Accordion',
				productBr: 'Acordeão',
				time: '1h15m',
				timem: '75',
				exp: '107',
				lvl: '100',
				ingredients: [
					{
						qtde: '2x',
						name: 'Plastic',
						nameBr: 'Plástico',	
					},
					{
						qtde: '1x',
						name: 'Silk Fabric',
						nameBr: 'Tecido de Seda',	
					},
				],
			},
			{
				product: 'Pan Flute',
				productBr: 'Flauta de Pã',
				time: '30m',
				timem: '30',
				exp: '107',
				lvl: '104',
				ingredients: [
					{
						qtde: '5x',
						name: 'Woodtrunk',
						nameBr: 'Tronco de Madeira',	
					},
					{
						qtde: '1x',
						name: 'Feather',
						nameBr: 'Pena',	
					},
				],
			},
		],
		upgrades: [
			{
				level: 'Level 2',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 3',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 4',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 5',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '5',
				exp: '0',
				slot: '0',
			},
			{
				level: 'Level 6',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '5',
				slot: '0',
			},
			{
				level: 'Level 7',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 8',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 9',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
			{
				level: 'Level 10',
				costs: [
					{
						itemBr: '?? mWSO',
						item: '?? mWSO',
					},
				],
				time: '0',
				exp: '0',
				slot: '1',
			},
		],
		purchases: [
			{
				times: '1st purchase',
				timesBr: '1ª compra',
				cost: '300 mWSO',
			},
			{
				times: '2nd purchase',
				timesBr: '2ª compra',
				cost: '1000 mWSO',
			},
			{
				times: '3rd purchase',
				timesBr: '3ª compra',
				cost: '2000 mWSO',
			},
		],
		slots: [
			{
				queue: '4th Slot',
				queueBr: '4º espaço',
				cost: '300 mWSO',
			},
			{
				queue: '5th Slot',
				queueBr: '5º espaço',
				cost: '?? mWSO',
			},
			{
				queue: '6th Slot',
				queueBr: '6º espaço',
				cost: '?? mWSO',
			},
		],
	},
];