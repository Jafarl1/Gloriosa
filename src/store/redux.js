const initState = {
    bestsellers: [
        {
            id: 1,
            name: "Maiden love",
            count: 1,
            price: 100,
            type: "bouquet",
            image: "bestsellers/best1.jpg",
            content: "Ağ qortenziya, ağ yabanı qızıl gül, ağ təkbaş qızıl gül, bej təkbaş qızıl gül"
        },
        {
            id: 2,
            name: "Fountain of feelings",
            count: 1,
            price: 125,
            type: "box",
            image: "bestsellers/best2.jpg",
            content: "Çəhrayı qortenziya, 'London Eye' qızıl gül, orxideya, çəhrayı qızıl gül, qırmızı yabanı qızıl gül, tünd çəhrayı qərənfil"
        },
        {
            id: 3,
            name: "Soft dreams",
            count: 1,
            price: 250,
            type: "bouquet",
            image: "bestsellers/best3.jpg",
            content: "Çəhrayı qortenziya, çəhrayı pion, tünd çəhrayı yabanı qızıl gül, ağ xrizontema, çəhrayı eustoma, açıq-narıncı qızıl gül, açıq-narıncı qərənfil"
        },
        {
            id: 4,
            name: "Love smell",
            count: 1,
            price: 125,
            type: "basket",
            image: "bestsellers/best4.jpg",
            content: "Çəhrayı qızıl gül, ağ qızıl gül, açıq-narıncı yabanı qızıl gül, matiola, çəhrayı liliya, çəhrayı qərənfil"
        },
        {
            id: 5,
            name: "Sensual flame",
            count: 1,
            price: 70,
            type: "bouquet",
            image: "bestsellers/best5.jpg",
            content: "Qırmızı təkbaş qızıl gül, qırmızı yabanı qızıl gül, çəhrayı yabanı qızıl gül, çəhrayı liliya"
        },
        {
            id: 6,
            name: "First date",
            count: 1,
            price: 60,
            type: "box",
            image: "bestsellers/best6.jpg",
            content: "Çəhrayı yabanı qızıl gül, 'Jumelia' qızıl gül, ağ yabanı qızıl gül, ağ orxideya, ağ eustoma"
        },
        {
            id: 7,
            name: "Fiery energy",
            count: 1,
            price: 100,
            type: "bouquet",
            image: "bestsellers/best7.jpg",
            content: "21 ədəd qırmızı yabanı qızıl gül"
        }
    ],
    mainslider: [
        {
            id: 8,
            name: "Main 1",
            count: 1,
            image: "https://portofloral.ru/upload/iblock/739/73974d3ed6e7c67f144078cb2935db70.jpg"
        },
        {
            id: 9,
            name: "Main 2",
            count: 1,
            image: "https://portofloral.ru/upload/iblock/2db/2db94d12cd8ca5c3939efe13fc5c14f6.jpg"
        },
        {
            id: 10,
            name: "Main 3",
            count: 1,
            image: "https://portofloral.ru/upload/iblock/4a4/4a4bb48072165333c6bbe5f8a96509bf.jpg"
        },
        {
            id: 11,
            name: "Main 4",
            count: 1,
            image: "https://portofloral.ru/upload/iblock/078/0783c3596bf24d34489c557c5d8f6d89.jpg"
        }
    ],
    sweets: [
        {
            id: 12,
            name: "Merci",
            count: 1,
            price: 20,
            type: "sweet",
            image: "sweets/merci.jpg",
            description: "'Merci' şokoladı, 210 qr."
        },
        {
            id: 13,
            name: "Kinder",
            count: 1,
            price: 5,
            type: "sweet",
            image: "sweets/kinder.jpg",
            description: "Südlü şokoladlı Kinder Sürpriz yumurtası, oyuncaqla, 20 qr. "
        },
        {
            id: 14,
            name: "Rafaello",
            count: 1,
            price: 15,
            type: "sweet",
            image: "sweets/rafaello.jpg",
            description: "'Rafaello' konfetləri, 150qr."
        },
        {
            id: 15,
            name: "Ferrero",
            count: 1,
            price: 18,
            type: "sweet",
            image: "sweets/ferrero.jpg",
            description: "'Ferrero Roscher' konfetləri, 125 qr."
        }
    ],
    cardspage: [
        {
            id: 16,
            name: "'Sevimli anam üçün'",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card5.jpg",
            description: "'Sevimli anam üçün' açıqçası"
        },
        {
            id: 17,
            name: "'Bayramınız mübarək'",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card6.jpg",
            description: "'Bayramın mübarək' açıqçası"
        },
        {
            id: 18,
            name: "'Ad günün mübarək'",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card1.jpg",
            description: "'Ad günün mübarək' açıqçası"
        },
        {
            id: 19,
            name: "'Xoş arzular'",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card4.jpeg",
            description: "'Xoş arzular' açıqçası"
        },
        {
            id: 20,
            name: "'Ad günün mübarək'",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card3.jpg",
            description: "'Ad günün mübarək' açıqçası"
        },
        {
            id: 21,
            name: "Səni sevirəm",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card2.jpg",
            description: "'Səni sevirəm' açıqçası"
        }
    ],
    authorbouquets: [
        {
            id: 101,
            name: "Bouquet 1210",
            count: 1,
            price: 150,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/ee5/ee58792192e35fdf74d838e97c9782ac.jpg",
            image2: "https://portofloral.ru/upload/iblock/c71/c71481941a54c266de14e0edc84035a0.jpg",
            image3: "https://portofloral.ru/upload/iblock/368/368721ae5f2064d3aeb230b7b7ce3a57.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 102,
            name: "Bouquet 1211",
            count: 1,
            price: 100,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/b6d/b6d03e7caa5262dede2abe7aa3ba9bcc.jpg",
            image2: "https://portofloral.ru/upload/iblock/a27/a2754eaf4656864d4a80171843c1f9f7.jpg",
            image3: "https://portofloral.ru/upload/iblock/f10/f10d9e0f89463f24db6c2f934cf5a4dc.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 103,
            name: "Bouquet 1212",
            count: 1,
            price: 250,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/e27/e2753f343887961e545e2112ac40719b.jpg",
            image2: "https://portofloral.ru/upload/iblock/559/5592468fc73c1e9d933fe7536dc0849a.jpg",
            image3: "https://portofloral.ru/upload/iblock/e27/e2753f343887961e545e2112ac40719b.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 104,
            name: "Bouquet 1213",
            count: 1,
            price: 230,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/fd6/fd6dd6033fff31cb834f1f81a87f34e4.jpg",
            image2: "https://portofloral.ru/upload/iblock/689/6896f13a6dab9177521d36e02cc561a0.jpg",
            image3: "https://portofloral.ru/upload/iblock/fd6/fd6dd6033fff31cb834f1f81a87f34e4.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 105,
            name: "Bouquet 1214",
            count: 1,
            price: 200,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/e27/e27c57285b2f42fd15c9318d41979b69.jpg",
            image2: "https://portofloral.ru/upload/iblock/38c/38c9c0106fa98f0cdaf2d46bd38d13e2.jpg",
            image3: "https://portofloral.ru/upload/iblock/e27/e27c57285b2f42fd15c9318d41979b69.jpg",
            size: "böyük",
            color: "parlaq"
        },
        {
            id: 106,
            name: "Bouquet 1215",
            count: 1,
            price: 180,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/e0b/e0b2e1fb0cd5683a096cbedda2ca8929.jpg",
            image2: "https://portofloral.ru/upload/iblock/1ce/1ce8f9795158933d1e6c51626ea5e8d9.jpg",
            image3: "https://portofloral.ru/upload/iblock/c61/c611e1299e611f647c8a9f3da178a597.jpg",
            size: "orta",
            color: "parlaq"
        },
        {
            id: 107,
            name: "Bouquet 1216",
            count: 1,
            price: 130,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/19f/19f44effa70261e0a9f8987c8fd9463f.jpg",
            image2: "https://portofloral.ru/upload/iblock/631/6316b69d405905a4f5992c7fb997fc54.jpg",
            image3: "https://portofloral.ru/upload/iblock/19f/19f44effa70261e0a9f8987c8fd9463f.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 108,
            name: "Bouquet 1217",
            count: 1,
            price: 120,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/db9/db994efc0a738a52fd66a14954ca76a5.jpg",
            image2: "https://portofloral.ru/upload/iblock/622/6225c2407d3bd8c2804d349979256787.jpg",
            image3: "https://portofloral.ru/upload/iblock/db9/db994efc0a738a52fd66a14954ca76a5.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 109,
            name: "Bouquet 1218",
            count: 1,
            price: 145,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/902/9025dc839fa745394f3e9ed56cc2665e.jpg",
            image2: "https://portofloral.ru/upload/iblock/bd0/bd0310af47cce7efa95669e8f98180f9.jpg",
            image3: "https://portofloral.ru/upload/iblock/35f/35f28a9ad9795a1811c806f595ab0ab8.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 110,
            name: "Bouquet 1219",
            count: 1,
            price: 165,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/e9f/e9fc70872f6300128d62aff4873793e5.jpg",
            image2: "https://portofloral.ru/upload/iblock/e9f/e9fc70872f6300128d62aff4873793e5.jpg",
            image3: "https://portofloral.ru/upload/iblock/e9f/e9fc70872f6300128d62aff4873793e5.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 111,
            name: "Bouquet 1220",
            count: 1,
            price: 180,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/2ce/2ce98ab67ef8f3244f88c73d4c01719b.jpg",
            image2: "https://portofloral.ru/upload/iblock/c90/c90f40c046f81b4b4ace30801e349962.jpg",
            image3: "https://portofloral.ru/upload/iblock/2ce/2ce98ab67ef8f3244f88c73d4c01719b.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 112,
            name: "Bouquet 1221",
            count: 1,
            price: 170,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/0de/0deecf4ee2e5b86bf5dce95214515ead.jpg",
            image2: "https://portofloral.ru/upload/iblock/7c2/7c2f55cb123169f6189d354c0519a4f9.jpg",
            image3: "https://portofloral.ru/upload/iblock/0de/0deecf4ee2e5b86bf5dce95214515ead.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 113,
            name: "Bouquet 1222",
            count: 1,
            price: 130,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/f8c/f8c94ec80382d9cc6d69fb4c445c4cea.jpg",
            image2: "https://portofloral.ru/upload/iblock/fd8/fd8c3305e86e9fca4d3e36325d42179e.jpg",
            image3: "https://portofloral.ru/upload/iblock/801/80105ba6a1ede864823950c14e3f179f.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 114,
            name: "Bouquet 1223",
            count: 1,
            price: 115,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/fa2/fa2692c7c085294d80e7e6457ff080bc.jpg",
            image2: "https://portofloral.ru/upload/iblock/ca5/ca5d99c960d4a13fb8f80ad371280159.jpg",
            image3: "https://portofloral.ru/upload/iblock/6cd/6cd25631dbd2daeaef6f09f43db8fc88.jpg",
            size: "kiçik",
            color: "zəngin"
        },
        {
            id: 115,
            name: "Bouquet 1224",
            count: 1,
            price: 100,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/44c/44c529f413e082ba8e1816e43f73ea43.jpg",
            image2: "https://portofloral.ru/upload/iblock/633/633fd33c1838cf06063bd52c86e5ce41.jpg",
            image3: "https://portofloral.ru/upload/iblock/732/73261b948fb34cb1ea09724cc382e244.jpg",
            size: "kiçik",
            color: "zərif"
        },
        {
            id: 116,
            name: "Bouquet 1225",
            count: 1,
            price: 140,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/94c/94cdff832760e8b99a42d0dd59ec6d4e.jpg",
            image2: "https://portofloral.ru/upload/iblock/b87/b87c7910d8c2c94f446c6a12f72ad1ca.jpg",
            image3: "https://portofloral.ru/upload/iblock/aeb/aeb684f04d6e90d45070d690a13df1a2.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 117,
            name: "Bouquet 1226",
            count: 1,
            price: 210,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/9c3/9c3b550365e0b12b1813cefa9b0b33be.jpg",
            image2: "https://portofloral.ru/upload/iblock/00c/00ce43c19c6fee3dbb0b9b2758d17d36.jpg",
            image3: "https://portofloral.ru/upload/iblock/7a5/7a5d6d6188ed68ed5401c612bc872c41.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 118,
            name: "Bouquet 1227",
            count: 1,
            price: 155,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/fa9/fa94a1597b093eb846ef9a438d52b376.jpg",
            image2: "https://portofloral.ru/upload/iblock/8f5/8f545f3433cc6561d6a147a66312e93a.jpg",
            image3: "https://portofloral.ru/upload/iblock/412/4124d8359935b87f5773e581de44b70f.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 119,
            name: "Bouquet 1228",
            count: 1,
            price: 190,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/b4d/b4de279b2fe8d6ff8576df8741f6ee50.jpg",
            image2: "https://portofloral.ru/upload/iblock/72e/72ee00a2fbaffd401c58b6d6565fd1e6.jpg",
            image3: "https://portofloral.ru/upload/iblock/b29/b29d654139aae286974400c91849925e.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 120,
            name: "Bouquet 1229",
            count: 1,
            price: 215,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/474/47430a7a6ecd7c4f964097d244c7a061.jpg",
            image2: "https://portofloral.ru/upload/iblock/c68/c68fa6d114a0afd907e89c687cad2198.jpg",
            image3: "https://portofloral.ru/upload/iblock/3d6/3d6c2a1263f27544797bcecb013282b1.jpg",
            size: "böyük",
            color: "zərif"
        },
        {
            id: 121,
            name: "Bouquet 1230",
            count: 1,
            price: 170,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/b06/b06610abd83d9d92fdfe429fa1519f88.jpg",
            image2: "https://portofloral.ru/upload/iblock/1e0/1e00bd66296c0926894ddcfc87ed2c54.jpg",
            image3: "https://portofloral.ru/upload/iblock/0a3/0a3a9bacd52f6f3ddd5127ae5afd1776.jpg",
            size: "orta",
            color: "parlaq"
        },
        {
            id: 122,
            name: "Bouquet 1231",
            count: 1,
            price: 240,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/da9/da9fd99bd290d3a8dc0181387df96d41.jpg",
            image2: "https://portofloral.ru/upload/iblock/b39/b39b3b3c5fb268bcddb157fe8cc6f969.jpg",
            image3: "https://portofloral.ru/upload/iblock/582/582d2497decb60973eda63909073bd81.jpg",
            size: "böyük",
            color: "pastel"
        }
    ],
    compositions: [
        {
            id: 201,
            name: "Composition 1310",
            count: 1,
            price: 150,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/b5a/b5a88d481a7e4373c3109e1db5dcd3d5.jpg",
            image2: "https://portofloral.ru/upload/iblock/6ec/6ec64003c8c638bca6d2b132e79a9363.jpg",
            size: "böyük",
            color: "parlaq"
        },
        {
            id: 202,
            name: "Composition 1311",
            count: 1,
            price: 80,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/ce8/ce8152b566fcd86b2c10256967814259.jpg",
            image2: "https://portofloral.ru/upload/iblock/f06/f06d68bc1971d989e32ca9715839d506.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 203,
            name: "Composition 1312",
            count: 1,
            price: 50,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/47d/47df7f4664184b23155af220f3751f6e.jpg",
            image2: "https://portofloral.ru/upload/iblock/34e/34e050601787c5e713b10ce6cd9b3ffc.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 204,
            name: "Composition 1313",
            count: 1,
            price: 80,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/c81/c8192899d32c88686519fb8dee5b2b97.jpg",
            image2: "https://portofloral.ru/upload/iblock/608/60804ca3afb2081bc71fe11a66d80ec6.jpg",
            size: "orta",
            color: "parlaq"
        },
        {
            id: 205,
            name: "Composition 1314",
            count: 1,
            price: 130,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/40c/40c45efc068137dcc477088b3ba2b4eb.jpg",
            image2: "https://portofloral.ru/upload/iblock/b15/b156f70121078cdce58dd54e6786242f.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 206,
            name: "Composition 1315",
            count: 1,
            price: 100,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/9ba/9ba13a4dc65834d4dc41b6dd0578ab6d.jpg",
            image2: "https://portofloral.ru/upload/iblock/a32/a32fa634e7782d19fb87d0b046a26ce7.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 207,
            name: "Composition 1316",
            count: 1,
            price: 80,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/9fd/9fd3e1b54766d1ae1382be2cfb1dc65b.jpg",
            image2: "https://portofloral.ru/upload/iblock/9fd/9fd3e1b54766d1ae1382be2cfb1dc65b.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 208,
            name: "Composition 1317",
            count: 1,
            price: 90,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/c26/c26149a5cd32d27ad7dee2f20cacb9f7.jpg",
            image2: "https://portofloral.ru/upload/iblock/750/7502a02f275ebc38cf462626961a9b55.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 209,
            name: "Composition 1318",
            count: 1,
            price: 95,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/4d8/4d80872b105cac3eabc61d9f9288c19d.jpg",
            image2: "https://portofloral.ru/upload/iblock/c81/c8111c311c277e759af03a6cfd7efa9a.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 210,
            name: "Composition 1319",
            count: 1,
            price: 50,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/de2/de2645572b422a41e53b8bbea0c74f03.jpg",
            image2: "https://portofloral.ru/upload/iblock/164/164a3efe661e7b4decaeba17a395241a.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 211,
            name: "Composition 1320",
            count: 1,
            price: 80,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/6b6/6b6ee29059e4cf64d452394c307ad7e7.jpg",
            image2: "https://portofloral.ru/upload/iblock/5d1/5d1a69fbac478e8af4c4d45617d297c0.jpg",
            size: "orta",
            color: "pastel"
        },
        {
            id: 212,
            name: "Composition 1321",
            count: 1,
            price: 50,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/5d0/5d053b5f5c37f170dc002ecb7570410e.jpg",
            image2: "https://portofloral.ru/upload/iblock/5d0/5d053b5f5c37f170dc002ecb7570410e.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 213,
            name: "Composition 1322",
            count: 1,
            price: 50,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/fd4/fd4d21053216df8d249356f7860b6dd7.jpg",
            image2: "https://portofloral.ru/upload/iblock/017/0171a6b7fe02a4c8e70a8916ea89e0d9.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 214,
            name: "Composition 1323",
            count: 1,
            price: 75,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/8e4/8e42a74a86f7df83dd17671f1242922c.jpg",
            image2: "https://portofloral.ru/upload/iblock/8f6/8f67038e51028e5dc9a3734259bc53dc.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 215,
            name: "Composition 1324",
            count: 1,
            price: 80,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/d5c/d5ceb512bd097ef19d07c6d0a71eefbc.jpg",
            image2: "https://portofloral.ru/upload/iblock/be7/be78387716c305b8549cc946e8f1abd5.jpg",
            size: "orta",
            color: "pastel"
        }
    ],
    wowbouquets: [
        {
            id: 301,
            name: "Bouquet 1410",
            count: 1,
            price: 400,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/739/73974d3ed6e7c67f144078cb2935db70.jpg",
            image2: "https://portofloral.ru/upload/iblock/8d3/8d365bb25f0f0a131f983c25141a7745.jpg",
            size: "böyük",
            color: "zərif"
        },
        {
            id: 302,
            name: "Bouquet 1411",
            count: 1,
            price: 350,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/4a4/4a4bb48072165333c6bbe5f8a96509bf.jpg",
            image2: "https://portofloral.ru/upload/iblock/bfc/bfc3d9663330680d47fbc8cc2e4c78af.jpg",
            size: "böyük",
            color: "zərif"
        },
        {
            id: 303,
            name: "Bouquet 1412",
            count: 1,
            price: 375,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/955/95593e4db5ab927876cc6d70bf847ec8.jpg",
            image2: "https://portofloral.ru/upload/iblock/7c0/7c064e3d12d2a647f67a74e674c9c29b.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 304,
            name: "Bouquet 1413",
            count: 1,
            price: 330,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/e45/e45422fb041489a267f1b4a2d8188545.jpg",
            image2: "https://portofloral.ru/upload/iblock/273/27308eae38c30e8834b2668b8d82f3be.jpg",
            size: "orta",
            color: "parlaq"
        },
        {
            id: 305,
            name: "Bouquet 1414",
            count: 1,
            price: 340,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/d9f/d9fbd6da4b0cdb286823dc2e42547bf8.jpg",
            image2: "https://portofloral.ru/upload/iblock/e1d/e1d26ac66bd9a7d53c9f2853bcf3a870.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 306,
            name: "Bouquet 1415",
            count: 1,
            price: 385,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/933/9332d01c976601b94464fe2cb03829b2.jpg",
            image2: "https://portofloral.ru/upload/iblock/933/9332d01c976601b94464fe2cb03829b2.jpg",
            size: "böyük",
            color: "pastel"
        },
        {
            id: 307,
            name: "Bouquet 1416",
            count: 1,
            price: 420,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/2db/2db94d12cd8ca5c3939efe13fc5c14f6.jpg",
            image2: "https://portofloral.ru/upload/iblock/478/47838bf27528f995a24040cc87437ded.jpg",
            size: "böyük",
            color: "açıq"
        },
        {
            id: 308,
            name: "Bouquet 1417",
            count: 1,
            price: 370,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/ff8/ff82482f64457e50afb223c1c25e4d71.jpg",
            image2: "https://portofloral.ru/upload/iblock/426/4267c383e8a8e2b024d71a4a09e2e477.jpg",
            size: "böyük",
            color: "pastel"
        },
        {
            id: 309,
            name: "Bouquet 1418",
            count: 1,
            price: 320,
            type: "wowbouquets",
            image2: "https://portofloral.ru/upload/iblock/a59/a5982152646f30a12b26464d65064e01.jpg",
            image1: "https://portofloral.ru/upload/iblock/fc7/fc716118b50a266cd9a015defe3a4923.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 310,
            name: "Bouquet 1419",
            count: 1,
            price: 380,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/078/0783c3596bf24d34489c557c5d8f6d89.jpg",
            image2: "https://portofloral.ru/upload/iblock/970/9703692932e15d7480cc28077d95478f.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 311,
            name: "Bouquet 1420",
            count: 1,
            price: 300,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/6b6/6b68777ffd2c0216c7ecb57548b7d7d6.jpg",
            image2: "https://portofloral.ru/upload/iblock/451/45159f55fb22ad72836cdb4b7fe43453.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 312,
            name: "Bouquet 1421",
            count: 1,
            price: 360,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/73a/73a2c2ebe1da180dd3bab00099ec193e.jpg",
            image2: "https://portofloral.ru/upload/iblock/095/095a1fa646fedf34d5e792b318a4cce4.jpg",
            size: "böyük",
            color: "zəngin"
        }
    ],
    minibouquets: [
        {
            id: 401,
            name: "Bouquet 1510",
            count: 1,
            price: 25,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/338/3385a154779a525c404cadb2e2c7dcd2.jpg",
            image2: "https://portofloral.ru/upload/iblock/e27/e2797de5e4253c426afb3896bf208053.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 402,
            name: "Bouquet 1511",
            count: 1,
            price: 15,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/193/1930652ec58835fdcf6e97c95e528353.jpg",
            image2: "https://portofloral.ru/upload/iblock/db8/db8bf102d3bc8c6743f4e961799d50cb.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 403,
            name: "Bouquet 1512",
            count: 1,
            price: 20,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/d22/d2281bbbbe7a5dac4a2aab38f1879bad.jpg",
            image2: "https://portofloral.ru/upload/iblock/d22/d2281bbbbe7a5dac4a2aab38f1879bad.jpg",
            size: "kiçik",
            color: "zəngin"
        },
        {
            id: 404,
            name: "Bouquet 1513",
            count: 1,
            price: 15,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/94c/94c3bfb5569ca0aebc3a3867095d8a68.jpg",
            image2: "https://portofloral.ru/upload/iblock/1b7/1b7cb3788feb2da6400059073a574aff.jpg",
            size: "kiçik",
            color: "zərif"
        },
        {
            id: 405,
            name: "Bouquet 1514",
            count: 1,
            price: 20,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/fa1/fa1c85124d708f760bc5fbc313a9408b.jpg",
            image2: "https://portofloral.ru/upload/iblock/37b/37bf7429abd7244ba9304a3d3a98884a.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 406,
            name: "Bouquet 1515",
            count: 1,
            price: 20,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/907/90765f2b748028549e2a60db06eef1b5.jpg",
            image2: "https://portofloral.ru/upload/iblock/f94/f9438d11c62841a9352eacac2af741b8.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 407,
            name: "Bouquet 1516",
            count: 1,
            price: 20,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/d41/d41323bf879e501599e80b40d95d5e2d.jpg",
            image2: "https://portofloral.ru/upload/iblock/9dd/9dd422bce8a85344f06b412586071d4b.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 408,
            name: "Bouquet 1517",
            count: 1,
            price: 25,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/8d3/8d376941a039860eed30a3152bdd0977.jpg",
            image2: "https://portofloral.ru/upload/iblock/2b0/2b004d00408fd9a52b9d65d810f3cd04.jpg",
            size: "kiçik",
            color: "pastel"
        }
    ],
    mensbouquets: [
        {
            id: 501,
            name: "Bouquet 1610",
            count: 1,
            price: 100,
            type: "mensbouquets",
            image1: "https://portofloral.ru/upload/iblock/e42/e4207cee1e4174b7d418c2f2a66b3c1d.jpg",
            image2: "https://portofloral.ru/upload/iblock/a91/a9190b6cdbbd9616c8237cabdabd1951.jpg",
            size: "böyük",
            color: "parlaq"
        },
        {
            id: 502,
            name: "Bouquet 1611",
            count: 1,
            price: 60,
            type: "mensbouquets",
            image1: "https://portofloral.ru/upload/iblock/b95/b95257365fdea3b818074900c1ad2aab.jpg",
            image2: "https://portofloral.ru/upload/iblock/a4c/a4cd7feb4bd6f6fdb338f4843cc90fa2.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 503,
            name: "Bouquet 1612",
            count: 1,
            price: 80,
            type: "mensbouquets",
            image1: "https://portofloral.ru/upload/iblock/7e9/7e9ff1801de3d24e68fc8f34d7aa480a.jpg",
            image2: "https://portofloral.ru/upload/iblock/291/291af2db2fdc972e943c3b44458412ab.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 504,
            name: "Bouquet 1613",
            count: 1,
            price: 70,
            type: "mensbouquets",
            image1: "https://portofloral.ru/upload/iblock/c9f/c9f7e721c83eb246bfcb710e6462267e.jpg",
            image2: "https://portofloral.ru/upload/iblock/e66/e66fc620f97d6efc687a5eed7440aa7b.jpg",
            size: "orta",
            color: "zəngin"
        }
    ],
    monobouquets: [
        {
            id: 601,
            name: "Bouquet 1710",
            count: 1,
            price: 260,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/436/500_500_140cd750bba9870f18aada2478b24840a/436df20a11af90a8097ba643c09bca8e.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/d80/500_500_140cd750bba9870f18aada2478b24840a/d80368de6a14fc85d6abe5e394a7abb9.jpg",
            size: "böyük",
            color: "zərif"
        },
        {
            id: 602,
            name: "Bouquet 1711",
            count: 1,
            price: 140,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/322/500_500_140cd750bba9870f18aada2478b24840a/322070d43bfbb27d1852d7b87cd4281a.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/f30/500_500_140cd750bba9870f18aada2478b24840a/f30f78ea0425596e2a148529104dbfbf.jpg",
            size: "orta",
            color: "pastel"
        },
        {
            id: 603,
            name: "Bouquet 1712",
            count: 1,
            price: 155,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/iblock/ec7/ec7e9d0222e51ac377520240f07e1d17.jpg",
            image2: "https://portofloral.ru/upload/iblock/cc5/cc509ba6ddf7e46084888bb77fca9446.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 604,
            name: "Bouquet 1713",
            count: 1,
            price: 80,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/640/500_500_140cd750bba9870f18aada2478b24840a/640bc779dcd6056a8e3e939979f36e96.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/640/500_500_140cd750bba9870f18aada2478b24840a/640bc779dcd6056a8e3e939979f36e96.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 605,
            name: "Bouquet 1714",
            count: 1,
            price: 80,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/68e/500_500_140cd750bba9870f18aada2478b24840a/68ed1e58f089d86a971ccd492c8a262a.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/68e/500_500_140cd750bba9870f18aada2478b24840a/68ed1e58f089d86a971ccd492c8a262a.jpg",
            size: "kiçik",
            color: "zərif"
        },
        {
            id: 606,
            name: "Bouquet 1715",
            count: 1,
            price: 120,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/2a1/500_500_140cd750bba9870f18aada2478b24840a/2a1b1b76acf93d0d79f4220ed44743cc.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/049/500_500_140cd750bba9870f18aada2478b24840a/049685e8f506931392a77567cea7f574.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 607,
            name: "Bouquet 1716",
            count: 1,
            price: 90,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/49b/500_500_140cd750bba9870f18aada2478b24840a/49be2a78aea08a4e8ef675559853462c.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/089/500_500_140cd750bba9870f18aada2478b24840a/0892201509ac982581d04ac306dde414.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 608,
            name: "Bouquet 1717",
            count: 1,
            price: 80,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/507/500_500_140cd750bba9870f18aada2478b24840a/507e44f7ce97cdd211b938782be3e4de.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/507/500_500_140cd750bba9870f18aada2478b24840a/507e44f7ce97cdd211b938782be3e4de.jpg",
            size: "kiçik",
            color: "zəngin"
        },
        {
            id: 609,
            name: "Bouquet 1718",
            count: 1,
            price: 80,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/2c4/500_500_140cd750bba9870f18aada2478b24840a/2c4eb779cd299def341d3588950766c8.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/901/500_500_140cd750bba9870f18aada2478b24840a/9016ffdd0153ff2d0b5aea0f963fca68.jpg",
            size: "kiçik",
            color: "açıq"
        }
    ],
    seasonbouquets: [
        {
            id: 701,
            name: "Bouquet 1810",
            count: 1,
            price: 80,
            type: "seasonbouquets",
            image1: "https://portofloral.ru/upload/iblock/c8a/c8ad468172bf283bdf5d66f14fa47cdd.jpg",
            image2: "https://portofloral.ru/upload/iblock/1df/1df541a6ec47e4b99d84348cab009cfe.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 702,
            name: "Bouquet 1811",
            count: 1,
            price: 100,
            type: "seasonbouquets",
            image1: "https://portofloral.ru/upload/iblock/387/387d22488b4ac14bdad43c2692d36c53.jpg",
            image2: "https://portofloral.ru/upload/iblock/487/487d2cc7044ec1e453bd802ea16f76a0.jpg",
            size: "böyük",
            color: "pastel"
        },
        {
            id: 703,
            name: "Bouquet 1812",
            count: 1,
            price: 50,
            type: "seasonbouquets",
            image1: "https://portofloral.ru/upload/iblock/81a/81a5486af87d0f7b62a056fd711cf4ee.jpg",
            image2: "https://portofloral.ru/upload/iblock/905/905908ce386f2effda3b971585dc9486.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 704,
            name: "Bouquet 1813",
            count: 1,
            price: 40,
            type: "seasonbouquets",
            image1: "https://portofloral.ru/upload/iblock/fab/fab4c1718639d1316a9faf5a24ade648.jpg",
            image2: "https://portofloral.ru/upload/iblock/6df/6df92decf24895c1051ba7d77508a24a.jpg",
            size: "kiçik",
            color: "açıq"
        }
    ],
    weddingbouquets: [
        {
            id: 801,
            name: "Bouquet 1910",
            count: 1,
            price: 80,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/f16/f1649a361f7476cd2a7ef2669f004b53.jpg",
            image2: "https://portofloral.ru/upload/iblock/33e/33eac04b8e2a3206efb6e6e02534a6bf.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 802,
            name: "Bouquet 1911",
            count: 1,
            price: 100,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/b46/b464330d2b2b0e761e26310f218a394b.jpg",
            image2: "https://portofloral.ru/upload/iblock/470/470f7e960673471eebfa682529a230ac.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 803,
            name: "Bouquet 1912",
            count: 1,
            price: 90,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/b46/b46cf8ea47b735fab91ffb1f334f6b9f.jpg",
            image2: "https://portofloral.ru/upload/iblock/960/960f8851cf783a2dedffe55e1d7d6243.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 804,
            name: "Bouquet 1913",
            count: 1,
            price: 70,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/670/67093ccb7bc46a14b031a25be7db6f45.jpg",
            image2: "https://portofloral.ru/upload/iblock/4e1/4e1251e5cbb3806834d4087e0681866a.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 805,
            name: "Bouquet 1914",
            count: 1,
            price: 60,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/0a0/0a05164ac5f70832262fc5d264ffd99c.jpg",
            image2: "https://portofloral.ru/upload/iblock/3f6/3f604f10623f24585e29a7230383023e.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 806,
            name: "Bouquet 1915",
            count: 1,
            price: 110,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/55f/55f2788ca0ec7f64d6ad998c0fcccead.jpg",
            image2: "https://portofloral.ru/upload/iblock/88f/88fbbb2322ed7eb135e6378eaf16f7a8.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 807,
            name: "Bouquet 1916",
            count: 1,
            price: 65,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/88a/88addff0542ac5e4c44779948c4dd08e.jpg",
            image2: "https://portofloral.ru/upload/iblock/3f6/3f686cd708d8ee30d3a95af5cb7699f1.jpg",
            size: "orta",
            color: "pastel"
        },
        {
            id: 808,
            name: "Bouquet 1917",
            count: 1,
            price: 50,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/c69/c69231e96d8e19dc936d7cd853f5a005.jpg",
            image2: "https://portofloral.ru/upload/iblock/e29/e2933d526d910685e5336f83a5d1c72d.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 809,
            name: "Bouquet 1918",
            count: 1,
            price: 85,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/e4c/e4caae6dddd8db4effabd793edf6ed1f.jpg",
            image2: "https://portofloral.ru/upload/iblock/989/9896d473ee09bcbd31ae02ec851affc9.jpg",
            size: "orta",
            color: "pastel"
        },
        {
            id: 810,
            name: "Bouquet 1919",
            count: 1,
            price: 95,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/669/669dd8846ad1e336a9664a867b8c86ae.jpg",
            image2: "https://portofloral.ru/upload/iblock/011/0116971ef073c40c159ce9186e01c894.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 811,
            name: "Bouquet 1920",
            count: 1,
            price: 60,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/f41/f411ba846a69025d3fdad2185f2dc385.jpg",
            image2: "https://portofloral.ru/upload/iblock/405/405ba67d880a65fb5075ac8bae41875e.jpg",
            size: "kiçik",
            color: "zəngin"
        },
        {
            id: 812,
            name: "Bouquet 1921",
            count: 1,
            price: 80,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/16b/16b903b56b1e86ca47adc62ac8ffb7a8.jpg",
            image2: "https://portofloral.ru/upload/iblock/839/8395a7e4f000fca7c8101eb570a35ed6.jpg",
            size: "orta",
            color: "zərif"
        }
    ],
    blogs: [
        {
            id: 30,
            name: "Güllər dünyasına xoş gəlmisiniz!",
            count: 1,
            type: "Müştərilərə məsləhətlər",
            image: "../blog/small/welcome-blog.jpg"
        },
        {
            id: 31,
            name: "Import qızıl güllər",
            count: 1,
            type: "Məhsul haqda məlumat",
            image: "../blog/small/ecuador-blog.jpg"
        },
        {
            id: 32,
            name: "Qortenziya",
            count: 1,
            type: "Məhsul haqda məlumat",
            image: "../blog/small/hydrangea-blog.jpg"
        },
        {
            id: 33,
            name: "Bouquetə qulluq",
            count: 1,
            type: "Müştərilərə məsləhətlər",
            image: "../blog/small/bouquet-blog.jpg"
        },
        {
            id: 34,
            name: "Compositionya qulluq",
            count: 1,
            type: "Müştərilərə məsləhətlər",
            image: "../blog/small/composition-blog.jpg"
        },
        {
            id: 35,
            name: "Qladiolus",
            count: 1,
            type: "Məhsul haqda məlumat",
            image: "../blog/small/gladiolus-blog.jpg"
        },
        {
            id: 36,
            name: "Yabanı qızıl güllər",
            count: 1,
            type: "Məhsul haqda məlumat",
            image: "../blog/small/brush-blog.jpg"
        }
    ],
    allData: [
        {
            id: 1,
            name: "Maiden love",
            count: 1,
            price: 100,
            image: "bestsellers/best1.jpg",
            content: "Ağ qortenziya, ağ yabanı qızıl gül, ağ təkbaş qızıl gül, bej təkbaş qızıl gül"
        },
        {
            id: 2,
            name: "Fountain of feelings",
            count: 1,
            price: 125,
            image: "bestsellers/best2.jpg",
            content: "Çəhrayı qortenziya, 'London Eye' qızıl gül, orxideya, çəhrayı qızıl gül, qırmızı yabanı qızıl gül, tünd çəhrayı qərənfil"
        },
        {
            id: 3,
            name: "Soft dreams",
            count: 1,
            price: 250,
            image: "bestsellers/best3.jpg",
            content: "Çəhrayı qortenziya, çəhrayı pion, tünd çəhrayı yabanı qızıl gül, ağ xrizontema, çəhrayı eustoma, açıq-narıncı qızıl gül, açıq-narıncı qərənfil"
        },
        {
            id: 4,
            name: "Love smell",
            count: 1,
            price: 125,
            image: "bestsellers/best4.jpg",
            content: "Çəhrayı qızıl gül, ağ qızıl gül, açıq-narıncı yabanı qızıl gül, matiola, çəhrayı liliya, çəhrayı qərənfil"
        },
        {
            id: 5,
            name: "Sensual flame",
            count: 1,
            price: 70,
            image: "bestsellers/best5.jpg",
            content: "Qırmızı təkbaş qızıl gül, qırmızı yabanı qızıl gül, çəhrayı yabanı qızıl gül, çəhrayı liliya"
        },
        {
            id: 6,
            name: "First date",
            count: 1,
            price: 60,
            image: "bestsellers/best6.jpg",
            content: "Çəhrayı yabanı qızıl gül, 'Jumelia' qızıl gül, ağ yabanı qızıl gül, ağ orxideya, ağ eustoma"
        },
        {
            id: 7,
            name: "Fiery energy",
            count: 1,
            price: 100,
            image: "bestsellers/best7.jpg",
            content: "21 ədəd qırmızı yabanı qızıl gül"
        },
        {
            id: 8,
            name: "Main 1",
            count: 1,
            image: "mainslider/main1.jpg"
        },
        {
            id: 9,
            name: "Main 2",
            count: 1,
            image: "mainslider/main2.jpg"
        },
        {
            id: 10,
            name: "Main 3",
            count: 1,
            image: "mainslider/main3.jpg"
        },
        {
            id: 11,
            name: "Main 4",
            count: 1,
            image: "mainslider/main4.jpg"
        },
        {
            id: 12,
            name: "Merci",
            count: 1,
            price: 20,
            type: "sweet",
            image: "sweets/merci.jpg",
            description: "'Merci' şokoladı, 210 qr."
        },
        {
            id: 13,
            name: "Kinder",
            count: 1,
            price: 5,
            type: "sweet",
            image: "sweets/kinder.jpg",
            description: "Südlü şokoladlı Kinder Sürpriz yumurtası, oyuncaqla, 20 qr. "
        },
        {
            id: 14,
            name: "Rafaello",
            count: 1,
            price: 15,
            type: "sweet",
            image: "sweets/rafaello.jpg",
            description: "'Rafaello' konfetləri, 150qr."
        },
        {
            id: 15,
            name: "Ferrero",
            count: 1,
            price: 18,
            type: "sweet",
            image: "sweets/ferrero.jpg",
            description: "'Ferrero Roscher' konfetləri, 125 qr."
        },
        {
            id: 16,
            name: "'Sevimli anam üçün'",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card5.jpg",
            description: "'Sevimli anam üçün' açıqçası"
        },
        {
            id: 17,
            name: "'Bayramınız mübarək'",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card6.jpg",
            description: "'Bayramın mübarək' açıqçası"
        },
        {
            id: 18,
            name: "'Ad günün mübarək'",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card1.jpg",
            description: "'Ad günün mübarək' açıqçası"
        },
        {
            id: 19,
            name: "'Xoş arzular'",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card4.jpeg",
            description: "'Xoş arzular' açıqçası"
        },
        {
            id: 20,
            name: "'Ad günün mübarək'",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card3.jpg",
            description: "'Ad günün mübarək' açıqçası"
        },
        {
            id: 21,
            name: "'Səni sevirəm'",
            count: 1,
            price: 3,
            type: "cardspage",
            image: "cards/card2.jpg",
            description: "'Səni sevirəm' açıqçası"
        },
        {
            id: 101,
            name: "Bouquet 1210",
            count: 1,
            price: 150,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/ee5/ee58792192e35fdf74d838e97c9782ac.jpg",
            image2: "https://portofloral.ru/upload/iblock/c71/c71481941a54c266de14e0edc84035a0.jpg",
            image3: "https://portofloral.ru/upload/iblock/368/368721ae5f2064d3aeb230b7b7ce3a57.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 102,
            name: "Bouquet 1211",
            count: 1,
            price: 100,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/b6d/b6d03e7caa5262dede2abe7aa3ba9bcc.jpg",
            image2: "https://portofloral.ru/upload/iblock/a27/a2754eaf4656864d4a80171843c1f9f7.jpg",
            image3: "https://portofloral.ru/upload/iblock/f10/f10d9e0f89463f24db6c2f934cf5a4dc.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 103,
            name: "Bouquet 1212",
            count: 1,
            price: 250,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/e27/e2753f343887961e545e2112ac40719b.jpg",
            image2: "https://portofloral.ru/upload/iblock/559/5592468fc73c1e9d933fe7536dc0849a.jpg",
            image3: "https://portofloral.ru/upload/iblock/e27/e2753f343887961e545e2112ac40719b.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 104,
            name: "Bouquet 1213",
            count: 1,
            price: 230,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/fd6/fd6dd6033fff31cb834f1f81a87f34e4.jpg",
            image2: "https://portofloral.ru/upload/iblock/689/6896f13a6dab9177521d36e02cc561a0.jpg",
            image3: "https://portofloral.ru/upload/iblock/fd6/fd6dd6033fff31cb834f1f81a87f34e4.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 105,
            name: "Bouquet 1214",
            count: 1,
            price: 200,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/e27/e27c57285b2f42fd15c9318d41979b69.jpg",
            image2: "https://portofloral.ru/upload/iblock/38c/38c9c0106fa98f0cdaf2d46bd38d13e2.jpg",
            image3: "https://portofloral.ru/upload/iblock/e27/e27c57285b2f42fd15c9318d41979b69.jpg",
            size: "böyük",
            color: "parlaq"
        },
        {
            id: 106,
            name: "Bouquet 1215",
            count: 1,
            price: 180,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/e0b/e0b2e1fb0cd5683a096cbedda2ca8929.jpg",
            image2: "https://portofloral.ru/upload/iblock/1ce/1ce8f9795158933d1e6c51626ea5e8d9.jpg",
            image3: "https://portofloral.ru/upload/iblock/c61/c611e1299e611f647c8a9f3da178a597.jpg",
            size: "orta",
            color: "parlaq"
        },
        {
            id: 107,
            name: "Bouquet 1216",
            count: 1,
            price: 130,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/19f/19f44effa70261e0a9f8987c8fd9463f.jpg",
            image2: "https://portofloral.ru/upload/iblock/631/6316b69d405905a4f5992c7fb997fc54.jpg",
            image3: "https://portofloral.ru/upload/iblock/19f/19f44effa70261e0a9f8987c8fd9463f.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 108,
            name: "Bouquet 1217",
            count: 1,
            price: 120,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/db9/db994efc0a738a52fd66a14954ca76a5.jpg",
            image2: "https://portofloral.ru/upload/iblock/622/6225c2407d3bd8c2804d349979256787.jpg",
            image3: "https://portofloral.ru/upload/iblock/db9/db994efc0a738a52fd66a14954ca76a5.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 109,
            name: "Bouquet 1218",
            count: 1,
            price: 145,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/902/9025dc839fa745394f3e9ed56cc2665e.jpg",
            image2: "https://portofloral.ru/upload/iblock/bd0/bd0310af47cce7efa95669e8f98180f9.jpg",
            image3: "https://portofloral.ru/upload/iblock/35f/35f28a9ad9795a1811c806f595ab0ab8.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 110,
            name: "Bouquet 1219",
            count: 1,
            price: 165,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/e9f/e9fc70872f6300128d62aff4873793e5.jpg",
            image2: "https://portofloral.ru/upload/iblock/e9f/e9fc70872f6300128d62aff4873793e5.jpg",
            image3: "https://portofloral.ru/upload/iblock/e9f/e9fc70872f6300128d62aff4873793e5.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 111,
            name: "Bouquet 1220",
            count: 1,
            price: 180,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/2ce/2ce98ab67ef8f3244f88c73d4c01719b.jpg",
            image2: "https://portofloral.ru/upload/iblock/c90/c90f40c046f81b4b4ace30801e349962.jpg",
            image3: "https://portofloral.ru/upload/iblock/2ce/2ce98ab67ef8f3244f88c73d4c01719b.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 112,
            name: "Bouquet 1221",
            count: 1,
            price: 170,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/0de/0deecf4ee2e5b86bf5dce95214515ead.jpg",
            image2: "https://portofloral.ru/upload/iblock/7c2/7c2f55cb123169f6189d354c0519a4f9.jpg",
            image3: "https://portofloral.ru/upload/iblock/0de/0deecf4ee2e5b86bf5dce95214515ead.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 113,
            name: "Bouquet 1222",
            count: 1,
            price: 130,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/f8c/f8c94ec80382d9cc6d69fb4c445c4cea.jpg",
            image2: "https://portofloral.ru/upload/iblock/fd8/fd8c3305e86e9fca4d3e36325d42179e.jpg",
            image3: "https://portofloral.ru/upload/iblock/801/80105ba6a1ede864823950c14e3f179f.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 114,
            name: "Bouquet 1223",
            count: 1,
            price: 115,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/fa2/fa2692c7c085294d80e7e6457ff080bc.jpg",
            image2: "https://portofloral.ru/upload/iblock/ca5/ca5d99c960d4a13fb8f80ad371280159.jpg",
            image3: "https://portofloral.ru/upload/iblock/6cd/6cd25631dbd2daeaef6f09f43db8fc88.jpg",
            size: "kiçik",
            color: "zəngin"
        },
        {
            id: 115,
            name: "Bouquet 1224",
            count: 1,
            price: 100,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/44c/44c529f413e082ba8e1816e43f73ea43.jpg",
            image2: "https://portofloral.ru/upload/iblock/633/633fd33c1838cf06063bd52c86e5ce41.jpg",
            image3: "https://portofloral.ru/upload/iblock/732/73261b948fb34cb1ea09724cc382e244.jpg",
            size: "kiçik",
            color: "zərif"
        },
        {
            id: 116,
            name: "Bouquet 1225",
            count: 1,
            price: 140,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/94c/94cdff832760e8b99a42d0dd59ec6d4e.jpg",
            image2: "https://portofloral.ru/upload/iblock/b87/b87c7910d8c2c94f446c6a12f72ad1ca.jpg",
            image3: "https://portofloral.ru/upload/iblock/aeb/aeb684f04d6e90d45070d690a13df1a2.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 117,
            name: "Bouquet 1226",
            count: 1,
            price: 210,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/9c3/9c3b550365e0b12b1813cefa9b0b33be.jpg",
            image2: "https://portofloral.ru/upload/iblock/00c/00ce43c19c6fee3dbb0b9b2758d17d36.jpg",
            image3: "https://portofloral.ru/upload/iblock/7a5/7a5d6d6188ed68ed5401c612bc872c41.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 118,
            name: "Bouquet 1227",
            count: 1,
            price: 155,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/fa9/fa94a1597b093eb846ef9a438d52b376.jpg",
            image2: "https://portofloral.ru/upload/iblock/8f5/8f545f3433cc6561d6a147a66312e93a.jpg",
            image3: "https://portofloral.ru/upload/iblock/412/4124d8359935b87f5773e581de44b70f.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 119,
            name: "Bouquet 1228",
            count: 1,
            price: 190,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/b4d/b4de279b2fe8d6ff8576df8741f6ee50.jpg",
            image2: "https://portofloral.ru/upload/iblock/72e/72ee00a2fbaffd401c58b6d6565fd1e6.jpg",
            image3: "https://portofloral.ru/upload/iblock/b29/b29d654139aae286974400c91849925e.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 120,
            name: "Bouquet 1229",
            count: 1,
            price: 215,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/474/47430a7a6ecd7c4f964097d244c7a061.jpg",
            image2: "https://portofloral.ru/upload/iblock/c68/c68fa6d114a0afd907e89c687cad2198.jpg",
            image3: "https://portofloral.ru/upload/iblock/3d6/3d6c2a1263f27544797bcecb013282b1.jpg",
            size: "böyük",
            color: "zərif"
        },
        {
            id: 121,
            name: "Bouquet 1230",
            count: 1,
            price: 170,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/b06/b06610abd83d9d92fdfe429fa1519f88.jpg",
            image2: "https://portofloral.ru/upload/iblock/1e0/1e00bd66296c0926894ddcfc87ed2c54.jpg",
            image3: "https://portofloral.ru/upload/iblock/0a3/0a3a9bacd52f6f3ddd5127ae5afd1776.jpg",
            size: "orta",
            color: "parlaq"
        },
        {
            id: 122,
            name: "Bouquet 1231",
            count: 1,
            price: 240,
            type: "authorbouquets",
            image1: "https://portofloral.ru/upload/iblock/da9/da9fd99bd290d3a8dc0181387df96d41.jpg",
            image2: "https://portofloral.ru/upload/iblock/b39/b39b3b3c5fb268bcddb157fe8cc6f969.jpg",
            image3: "https://portofloral.ru/upload/iblock/582/582d2497decb60973eda63909073bd81.jpg",
            size: "böyük",
            color: "pastel"
        },
        {
            id: 201,
            name: "Composition 1310",
            count: 1,
            price: 150,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/b5a/b5a88d481a7e4373c3109e1db5dcd3d5.jpg",
            image2: "https://portofloral.ru/upload/iblock/6ec/6ec64003c8c638bca6d2b132e79a9363.jpg",
            size: "böyük",
            color: "parlaq"
        },
        {
            id: 202,
            name: "Composition 1311",
            count: 1,
            price: 80,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/ce8/ce8152b566fcd86b2c10256967814259.jpg",
            image2: "https://portofloral.ru/upload/iblock/f06/f06d68bc1971d989e32ca9715839d506.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 203,
            name: "Composition 1312",
            count: 1,
            price: 50,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/47d/47df7f4664184b23155af220f3751f6e.jpg",
            image2: "https://portofloral.ru/upload/iblock/34e/34e050601787c5e713b10ce6cd9b3ffc.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 204,
            name: "Composition 1313",
            count: 1,
            price: 80,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/c81/c8192899d32c88686519fb8dee5b2b97.jpg",
            image2: "https://portofloral.ru/upload/iblock/608/60804ca3afb2081bc71fe11a66d80ec6.jpg",
            size: "orta",
            color: "parlaq"
        },
        {
            id: 205,
            name: "Composition 1314",
            count: 1,
            price: 130,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/40c/40c45efc068137dcc477088b3ba2b4eb.jpg",
            image2: "https://portofloral.ru/upload/iblock/b15/b156f70121078cdce58dd54e6786242f.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 206,
            name: "Composition 1315",
            count: 1,
            price: 100,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/9ba/9ba13a4dc65834d4dc41b6dd0578ab6d.jpg",
            image2: "https://portofloral.ru/upload/iblock/a32/a32fa634e7782d19fb87d0b046a26ce7.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 207,
            name: "Composition 1316",
            count: 1,
            price: 80,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/9fd/9fd3e1b54766d1ae1382be2cfb1dc65b.jpg",
            image2: "https://portofloral.ru/upload/iblock/9fd/9fd3e1b54766d1ae1382be2cfb1dc65b.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 208,
            name: "Composition 1317",
            count: 1,
            price: 90,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/c26/c26149a5cd32d27ad7dee2f20cacb9f7.jpg",
            image2: "https://portofloral.ru/upload/iblock/750/7502a02f275ebc38cf462626961a9b55.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 209,
            name: "Composition 1318",
            count: 1,
            price: 95,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/4d8/4d80872b105cac3eabc61d9f9288c19d.jpg",
            image2: "https://portofloral.ru/upload/iblock/c81/c8111c311c277e759af03a6cfd7efa9a.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 210,
            name: "Composition 1319",
            count: 1,
            price: 50,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/de2/de2645572b422a41e53b8bbea0c74f03.jpg",
            image2: "https://portofloral.ru/upload/iblock/164/164a3efe661e7b4decaeba17a395241a.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 211,
            name: "Composition 1320",
            count: 1,
            price: 80,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/6b6/6b6ee29059e4cf64d452394c307ad7e7.jpg",
            image2: "https://portofloral.ru/upload/iblock/5d1/5d1a69fbac478e8af4c4d45617d297c0.jpg",
            size: "orta",
            color: "pastel"
        },
        {
            id: 212,
            name: "Composition 1321",
            count: 1,
            price: 50,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/5d0/5d053b5f5c37f170dc002ecb7570410e.jpg",
            image2: "https://portofloral.ru/upload/iblock/5d0/5d053b5f5c37f170dc002ecb7570410e.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 213,
            name: "Composition 1322",
            count: 1,
            price: 50,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/fd4/fd4d21053216df8d249356f7860b6dd7.jpg",
            image2: "https://portofloral.ru/upload/iblock/017/0171a6b7fe02a4c8e70a8916ea89e0d9.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 214,
            name: "Composition 1323",
            count: 1,
            price: 75,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/8e4/8e42a74a86f7df83dd17671f1242922c.jpg",
            image2: "https://portofloral.ru/upload/iblock/8f6/8f67038e51028e5dc9a3734259bc53dc.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 215,
            name: "Composition 1324",
            count: 1,
            price: 80,
            type: "compositions",
            image1: "https://portofloral.ru/upload/iblock/d5c/d5ceb512bd097ef19d07c6d0a71eefbc.jpg",
            image2: "https://portofloral.ru/upload/iblock/be7/be78387716c305b8549cc946e8f1abd5.jpg",
            size: "orta",
            color: "pastel"
        },
        {
            id: 301,
            name: "Composition 1410",
            count: 1,
            price: 400,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/739/73974d3ed6e7c67f144078cb2935db70.jpg",
            image2: "https://portofloral.ru/upload/iblock/8d3/8d365bb25f0f0a131f983c25141a7745.jpg",
            size: "böyük",
            color: "zərif"
        },
        {
            id: 302,
            name: "Composition 1411",
            count: 1,
            price: 350,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/4a4/4a4bb48072165333c6bbe5f8a96509bf.jpg",
            image2: "https://portofloral.ru/upload/iblock/bfc/bfc3d9663330680d47fbc8cc2e4c78af.jpg",
            size: "böyük",
            color: "zərif"
        },
        {
            id: 303,
            name: "Composition 1412",
            count: 1,
            price: 375,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/955/95593e4db5ab927876cc6d70bf847ec8.jpg",
            image2: "https://portofloral.ru/upload/iblock/7c0/7c064e3d12d2a647f67a74e674c9c29b.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 304,
            name: "Composition 1413",
            count: 1,
            price: 330,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/e45/e45422fb041489a267f1b4a2d8188545.jpg",
            image2: "https://portofloral.ru/upload/iblock/273/27308eae38c30e8834b2668b8d82f3be.jpg",
            size: "orta",
            color: "parlaq"
        },
        {
            id: 305,
            name: "Composition 1414",
            count: 1,
            price: 340,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/d9f/d9fbd6da4b0cdb286823dc2e42547bf8.jpg",
            image2: "https://portofloral.ru/upload/iblock/e1d/e1d26ac66bd9a7d53c9f2853bcf3a870.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 306,
            name: "Composition 1415",
            count: 1,
            price: 385,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/933/9332d01c976601b94464fe2cb03829b2.jpg",
            image2: "https://portofloral.ru/upload/iblock/933/9332d01c976601b94464fe2cb03829b2.jpg",
            size: "böyük",
            color: "pastel"
        },
        {
            id: 307,
            name: "Composition 1416",
            count: 1,
            price: 420,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/2db/2db94d12cd8ca5c3939efe13fc5c14f6.jpg",
            image2: "https://portofloral.ru/upload/iblock/478/47838bf27528f995a24040cc87437ded.jpg",
            size: "böyük",
            color: "açıq"
        },
        {
            id: 308,
            name: "Composition 1417",
            count: 1,
            price: 370,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/ff8/ff82482f64457e50afb223c1c25e4d71.jpg",
            image2: "https://portofloral.ru/upload/iblock/426/4267c383e8a8e2b024d71a4a09e2e477.jpg",
            size: "böyük",
            color: "pastel"
        },
        {
            id: 309,
            name: "Composition 1418",
            count: 1,
            price: 320,
            type: "wowbouquets",
            image2: "https://portofloral.ru/upload/iblock/a59/a5982152646f30a12b26464d65064e01.jpg",
            image1: "https://portofloral.ru/upload/iblock/fc7/fc716118b50a266cd9a015defe3a4923.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 310,
            name: "Composition 1419",
            count: 1,
            price: 380,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/078/0783c3596bf24d34489c557c5d8f6d89.jpg",
            image2: "https://portofloral.ru/upload/iblock/970/9703692932e15d7480cc28077d95478f.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 311,
            name: "Composition 1420",
            count: 1,
            price: 300,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/6b6/6b68777ffd2c0216c7ecb57548b7d7d6.jpg",
            image2: "https://portofloral.ru/upload/iblock/451/45159f55fb22ad72836cdb4b7fe43453.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 312,
            name: "Composition 1421",
            count: 1,
            price: 360,
            type: "wowbouquets",
            image1: "https://portofloral.ru/upload/iblock/73a/73a2c2ebe1da180dd3bab00099ec193e.jpg",
            image2: "https://portofloral.ru/upload/iblock/095/095a1fa646fedf34d5e792b318a4cce4.jpg",
            size: "böyük",
            color: "zəngin"
        },
        {
            id: 401,
            name: "Composition 1510",
            count: 1,
            price: 25,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/338/3385a154779a525c404cadb2e2c7dcd2.jpg",
            image2: "https://portofloral.ru/upload/iblock/e27/e2797de5e4253c426afb3896bf208053.jpg",
            size: "kiçik",
            color: ""
        },
        {
            id: 402,
            name: "Composition 1511",
            count: 1,
            price: 15,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/193/1930652ec58835fdcf6e97c95e528353.jpg",
            image2: "https://portofloral.ru/upload/iblock/db8/db8bf102d3bc8c6743f4e961799d50cb.jpg",
            size: "kiçik",
            color: ""
        },
        {
            id: 403,
            name: "Composition 1512",
            count: 1,
            price: 20,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/d22/d2281bbbbe7a5dac4a2aab38f1879bad.jpg",
            image2: "https://portofloral.ru/upload/iblock/d22/d2281bbbbe7a5dac4a2aab38f1879bad.jpg",
            size: "kiçik",
            color: ""
        },
        {
            id: 404,
            name: "Composition 1513",
            count: 1,
            price: 15,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/94c/94c3bfb5569ca0aebc3a3867095d8a68.jpg",
            image2: "https://portofloral.ru/upload/iblock/1b7/1b7cb3788feb2da6400059073a574aff.jpg",
            size: "kiçik",
            color: ""
        },
        {
            id: 405,
            name: "Composition 1514",
            count: 1,
            price: 20,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/fa1/fa1c85124d708f760bc5fbc313a9408b.jpg",
            image2: "https://portofloral.ru/upload/iblock/37b/37bf7429abd7244ba9304a3d3a98884a.jpg",
            size: "kiçik",
            color: ""
        },
        {
            id: 406,
            name: "Composition 1515",
            count: 1,
            price: 20,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/907/90765f2b748028549e2a60db06eef1b5.jpg",
            image2: "https://portofloral.ru/upload/iblock/f94/f9438d11c62841a9352eacac2af741b8.jpg",
            size: "kiçik",
            color: ""
        },
        {
            id: 407,
            name: "Composition 1516",
            count: 1,
            price: 20,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/d41/d41323bf879e501599e80b40d95d5e2d.jpg",
            image2: "https://portofloral.ru/upload/iblock/9dd/9dd422bce8a85344f06b412586071d4b.jpg",
            size: "kiçik",
            color: ""
        },
        {
            id: 408,
            name: "Composition 1517",
            count: 1,
            price: 25,
            type: "minibouquets",
            image1: "https://portofloral.ru/upload/iblock/8d3/8d376941a039860eed30a3152bdd0977.jpg",
            image2: "https://portofloral.ru/upload/iblock/2b0/2b004d00408fd9a52b9d65d810f3cd04.jpg",
            size: "kiçik",
            color: ""
        },
        {
            id: 501,
            name: "Composition 1610",
            count: 1,
            price: 100,
            type: "mensbouquets",
            image1: "https://portofloral.ru/upload/iblock/e42/e4207cee1e4174b7d418c2f2a66b3c1d.jpg",
            image2: "https://portofloral.ru/upload/iblock/a91/a9190b6cdbbd9616c8237cabdabd1951.jpg",
            size: "böyük",
            color: "parlaq"
        },
        {
            id: 502,
            name: "Composition 1611",
            count: 1,
            price: 60,
            type: "mensbouquets",
            image1: "https://portofloral.ru/upload/iblock/b95/b95257365fdea3b818074900c1ad2aab.jpg",
            image2: "https://portofloral.ru/upload/iblock/a4c/a4cd7feb4bd6f6fdb338f4843cc90fa2.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 503,
            name: "Composition 1612",
            count: 1,
            price: 80,
            type: "mensbouquets",
            image1: "https://portofloral.ru/upload/iblock/7e9/7e9ff1801de3d24e68fc8f34d7aa480a.jpg",
            image2: "https://portofloral.ru/upload/iblock/291/291af2db2fdc972e943c3b44458412ab.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 504,
            name: "Composition 1613",
            count: 1,
            price: 70,
            type: "mensbouquets",
            image1: "https://portofloral.ru/upload/iblock/c9f/c9f7e721c83eb246bfcb710e6462267e.jpg",
            image2: "https://portofloral.ru/upload/iblock/e66/e66fc620f97d6efc687a5eed7440aa7b.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 601,
            name: "Bouquet 1710",
            count: 1,
            price: 260,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/436/500_500_140cd750bba9870f18aada2478b24840a/436df20a11af90a8097ba643c09bca8e.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/d80/500_500_140cd750bba9870f18aada2478b24840a/d80368de6a14fc85d6abe5e394a7abb9.jpg",
            size: "böyük",
            color: "zərif"
        },
        {
            id: 602,
            name: "Bouquet 1711",
            count: 1,
            price: 140,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/322/500_500_140cd750bba9870f18aada2478b24840a/322070d43bfbb27d1852d7b87cd4281a.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/f30/500_500_140cd750bba9870f18aada2478b24840a/f30f78ea0425596e2a148529104dbfbf.jpg",
            size: "orta",
            color: "pastel"
        },
        {
            id: 603,
            name: "Bouquet 1712",
            count: 1,
            price: 155,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/iblock/ec7/ec7e9d0222e51ac377520240f07e1d17.jpg",
            image2: "https://portofloral.ru/upload/iblock/cc5/cc509ba6ddf7e46084888bb77fca9446.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 604,
            name: "Bouquet 1713",
            count: 1,
            price: 80,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/640/500_500_140cd750bba9870f18aada2478b24840a/640bc779dcd6056a8e3e939979f36e96.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/640/500_500_140cd750bba9870f18aada2478b24840a/640bc779dcd6056a8e3e939979f36e96.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 605,
            name: "Bouquet 1714",
            count: 1,
            price: 80,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/68e/500_500_140cd750bba9870f18aada2478b24840a/68ed1e58f089d86a971ccd492c8a262a.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/68e/500_500_140cd750bba9870f18aada2478b24840a/68ed1e58f089d86a971ccd492c8a262a.jpg",
            size: "kiçik",
            color: "zərif"
        },
        {
            id: 606,
            name: "Bouquet 1715",
            count: 1,
            price: 120,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/2a1/500_500_140cd750bba9870f18aada2478b24840a/2a1b1b76acf93d0d79f4220ed44743cc.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/049/500_500_140cd750bba9870f18aada2478b24840a/049685e8f506931392a77567cea7f574.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 607,
            name: "Bouquet 1716",
            count: 1,
            price: 90,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/49b/500_500_140cd750bba9870f18aada2478b24840a/49be2a78aea08a4e8ef675559853462c.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/089/500_500_140cd750bba9870f18aada2478b24840a/0892201509ac982581d04ac306dde414.jpg",
            size: "orta",
            color: "açıq"
        },
        {
            id: 608,
            name: "Bouquet 1717",
            count: 1,
            price: 80,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/507/500_500_140cd750bba9870f18aada2478b24840a/507e44f7ce97cdd211b938782be3e4de.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/507/500_500_140cd750bba9870f18aada2478b24840a/507e44f7ce97cdd211b938782be3e4de.jpg",
            size: "kiçik",
            color: "zəngin"
        },
        {
            id: 609,
            name: "Bouquet 1718",
            count: 1,
            price: 80,
            type: "monobouquets",
            image1: "https://portofloral.ru/upload/resize_cache/iblock/2c4/500_500_140cd750bba9870f18aada2478b24840a/2c4eb779cd299def341d3588950766c8.jpg",
            image2: "https://portofloral.ru/upload/resize_cache/iblock/901/500_500_140cd750bba9870f18aada2478b24840a/9016ffdd0153ff2d0b5aea0f963fca68.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 701,
            name: "Composition 1810",
            count: 1,
            price: 80,
            type: "seasonbouquets",
            image1: "https://portofloral.ru/upload/iblock/c8a/c8ad468172bf283bdf5d66f14fa47cdd.jpg",
            image2: "https://portofloral.ru/upload/iblock/1df/1df541a6ec47e4b99d84348cab009cfe.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 702,
            name: "Composition 1811",
            count: 1,
            price: 100,
            type: "seasonbouquets",
            image1: "https://portofloral.ru/upload/iblock/387/387d22488b4ac14bdad43c2692d36c53.jpg",
            image2: "https://portofloral.ru/upload/iblock/487/487d2cc7044ec1e453bd802ea16f76a0.jpg",
            size: "böyük",
            color: "pastel"
        },
        {
            id: 703,
            name: "Composition 1812",
            count: 1,
            price: 50,
            type: "seasonbouquets",
            image1: "https://portofloral.ru/upload/iblock/81a/81a5486af87d0f7b62a056fd711cf4ee.jpg",
            image2: "https://portofloral.ru/upload/iblock/905/905908ce386f2effda3b971585dc9486.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 704,
            name: "Composition 1813",
            count: 1,
            price: 40,
            type: "seasonbouquets",
            image1: "https://portofloral.ru/upload/iblock/fab/fab4c1718639d1316a9faf5a24ade648.jpg",
            image2: "https://portofloral.ru/upload/iblock/6df/6df92decf24895c1051ba7d77508a24a.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 801,
            name: "Bouquet 1910",
            count: 1,
            price: 80,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/f16/f1649a361f7476cd2a7ef2669f004b53.jpg",
            image2: "https://portofloral.ru/upload/iblock/33e/33eac04b8e2a3206efb6e6e02534a6bf.jpg",
            size: "kiçik",
            color: "pastel"
        },
        {
            id: 802,
            name: "Bouquet 1911",
            count: 1,
            price: 100,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/b46/b464330d2b2b0e761e26310f218a394b.jpg",
            image2: "https://portofloral.ru/upload/iblock/470/470f7e960673471eebfa682529a230ac.jpg",
            size: "kiçik",
            color: "parlaq"
        },
        {
            id: 803,
            name: "Bouquet 1912",
            count: 1,
            price: 90,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/b46/b46cf8ea47b735fab91ffb1f334f6b9f.jpg",
            image2: "https://portofloral.ru/upload/iblock/960/960f8851cf783a2dedffe55e1d7d6243.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 804,
            name: "Bouquet 1913",
            count: 1,
            price: 70,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/670/67093ccb7bc46a14b031a25be7db6f45.jpg",
            image2: "https://portofloral.ru/upload/iblock/4e1/4e1251e5cbb3806834d4087e0681866a.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 805,
            name: "Bouquet 1914",
            count: 1,
            price: 60,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/0a0/0a05164ac5f70832262fc5d264ffd99c.jpg",
            image2: "https://portofloral.ru/upload/iblock/3f6/3f604f10623f24585e29a7230383023e.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 806,
            name: "Bouquet 1915",
            count: 1,
            price: 110,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/55f/55f2788ca0ec7f64d6ad998c0fcccead.jpg",
            image2: "https://portofloral.ru/upload/iblock/88f/88fbbb2322ed7eb135e6378eaf16f7a8.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 807,
            name: "Bouquet 1916",
            count: 1,
            price: 65,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/88a/88addff0542ac5e4c44779948c4dd08e.jpg",
            image2: "https://portofloral.ru/upload/iblock/3f6/3f686cd708d8ee30d3a95af5cb7699f1.jpg",
            size: "orta",
            color: "pastel"
        },
        {
            id: 808,
            name: "Bouquet 1917",
            count: 1,
            price: 50,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/c69/c69231e96d8e19dc936d7cd853f5a005.jpg",
            image2: "https://portofloral.ru/upload/iblock/e29/e2933d526d910685e5336f83a5d1c72d.jpg",
            size: "kiçik",
            color: "açıq"
        },
        {
            id: 809,
            name: "Bouquet 1918",
            count: 1,
            price: 85,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/e4c/e4caae6dddd8db4effabd793edf6ed1f.jpg",
            image2: "https://portofloral.ru/upload/iblock/989/9896d473ee09bcbd31ae02ec851affc9.jpg",
            size: "orta",
            color: "pastel"
        },
        {
            id: 810,
            name: "Bouquet 1919",
            count: 1,
            price: 95,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/669/669dd8846ad1e336a9664a867b8c86ae.jpg",
            image2: "https://portofloral.ru/upload/iblock/011/0116971ef073c40c159ce9186e01c894.jpg",
            size: "orta",
            color: "zəngin"
        },
        {
            id: 811,
            name: "Bouquet 1920",
            count: 1,
            price: 60,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/f41/f411ba846a69025d3fdad2185f2dc385.jpg",
            image2: "https://portofloral.ru/upload/iblock/405/405ba67d880a65fb5075ac8bae41875e.jpg",
            size: "kiçik",
            color: "zəngin"
        },
        {
            id: 812,
            name: "Bouquet 1921",
            count: 1,
            price: 80,
            type: "weddingbouquets",
            image1: "https://portofloral.ru/upload/iblock/16b/16b903b56b1e86ca47adc62ac8ffb7a8.jpg",
            image2: "https://portofloral.ru/upload/iblock/839/8395a7e4f000fca7c8101eb570a35ed6.jpg",
            size: "orta",
            color: "zərif"
        },
        {
            id: 30,
            name: "Güllər dünyasına xoş gəlmisiniz!",
            count: 1,
            type: "Müştərilərə məsləhətlər",
            image: "../blog/small/welcome-blog.jpg"
        },
        {
            id: 31,
            name: "Import qızıl güllər",
            count: 1,
            type: "Məhsul haqda məlumat",
            image: "../blog/small/ecuador-blog.jpg"
        },
        {
            id: 32,
            name: "Qortenziya",
            count: 1,
            type: "Məhsul haqda məlumat",
            image: "../blog/small/hydrangea-blog.jpg"
        },
        {
            id: 33,
            name: "Bouquetə qulluq",
            count: 1,
            type: "Müştərilərə məsləhətlər",
            image: "../blog/small/bouquet-blog.jpg"
        },
        {
            id: 34,
            name: "Compositionya qulluq",
            count: 1,
            type: "Müştərilərə məsləhətlər",
            image: "../blog/small/composition-blog.jpg"
        },
        {
            id: 35,
            name: "Qladiolus",
            count: 1,
            type: "Məhsul haqda məlumat",
            image: "../blog/small/gladiolus-blog.jpg"
        },
        {
            id: 36,
            name: "Yabanı qızıl güllər",
            count: 1,
            type: "Məhsul haqda məlumat",
            image: "../blog/small/brush-blog.jpg"
        }
    ],
    comments: [
        {
            name: "Zohrab",
            surname: "Jafarli",
            comment: "Salam",
            date: "11.08.2022 14:59",
            id: 1
        }
    ]
}

export default function reducer (state = initState){
    return state
}
