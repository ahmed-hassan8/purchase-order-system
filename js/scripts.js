// Inventory data structure

const inventoryItems = {
    cupsLids: [
        { id: 'cup7oz', name: 'Cup 7OZ | كوب 7 اونص', unit: 'Carton', imageUrl: 'images/cup7oz.jpg' ,maxQuantity: 1 , description: 'Carton = 1000 cups | كرتون 1000 كوب'},
        { id: 'cuplid7oz', name: 'Cuplid 7OZ | غطاء 7 اونص', unit: 'Carton', imageUrl: 'images/cuplid7oz.jpg' ,maxQuantity: 1, description: 'Carton = 1000 Lids | كرتون 1000 غطاء'},
        { id: 'cup9oz', name: 'Cup 9OZ | كوب 9 اونص', unit: 'Carton', imageUrl: 'images/cup9oz.jpg' ,maxQuantity: 2 , description: 'Carton = 500 Cups | كرتون 500 كوب' },
        { id: 'cuplid9oz', name: 'Cuplid 9OZ | غطاء 9 اونص', unit: 'Carton', imageUrl: 'images/cuplid9oz.jpg' ,maxQuantity: 1 , description: 'Carton = 1000 Lids | كرتون 1000 غطاء'},
        { id: 'cup12oz', name: 'Cup 12OZ | كوب 12 اونص', unit: 'Carton', imageUrl: 'images/cup12oz.jpg'  ,maxQuantity: 2, description: 'Carton = 500 Cups | كرتون 500 كوب'},
        { id: 'paperCupid12oz', name: 'Paper Cuplid 12OZ | غطاء 12 اونص', unit: 'Carton', imageUrl: 'images/paperCupid12oz.jpg',maxQuantity: 1, description: 'Carton = 1000 Lids | كرتون 1000 غطاء' },
        { id: 'plasticCup12oz', name: 'Plastic cup 12OZ ONS | كوب بلاستيك 12 اونص', unit: 'Carton', imageUrl: 'images/plasticCup12oz.jpg',maxQuantity: 2, description: 'Carton = 1000 Lids | كرتون 1000 غطاء' },
        { id: 'plasticPaperCupid12', name: 'Plastic Paper Cuplid 12 | غطاء أكواب بلاستيك 12 اونص', unit: 'Carton', imageUrl: 'images/plasticPaperCupid12.jpg',maxQuantity: 2, description: 'Carton = 1000 Lids | كرتون 1000 غطاء' },
        { id: 'plasticCup16oz', name: 'Plastic cup 16OZ | كوب بلاستيك 16 اونص', unit: 'Carton', imageUrl: 'images/plasticCup16oz.jpg',maxQuantity: 1, description: 'Carton = 1000 cups | كرتون 1000 كوب' },
        { id: 'takeOutHandleBag', name: 'Take out Handle Bag | هاندل باج سفري', unit: 'Carton', imageUrl: 'images/takeOutHandleBag.jpg',maxQuantity: 2, description: '250 PCS | كرتون 250 حبة' },
        { id: 'sweetTakeOutBox', name: 'Sweet Take-out Box | بوكس حلي سفري', unit: 'Carton', imageUrl: 'images/sweetTakeOutBox.jpg',maxQuantity: 2, description: 'Carton = 350 PCS | كرتون 350 حبة' },
        { id: 'sweetDineInPlate', name: 'Sweet Dine-in Plate | طبق حلي ورقي محلي', unit: 'Carton', imageUrl: 'images/sweetDineInPlate.jpg',maxQuantity: 2, description: 'Carton = 900 Plates | كرتون 900 طبق' },
        { id: 'takeOutSmallPacket', name: 'Take out Small Packet | باكت سفري صغير', unit: 'Baket', imageUrl: 'images/takeOutSmallPacket.jpg',maxQuantity: 2 , description: '500 Pakets | 500 باكت'}
    ],
    filters: [
        { id: 'ColdBrew', name: 'Cold Brew Filter Bag | فلتر كولد برو كركدية', unit: 'BKT', imageUrl: 'images/ColdBrew.jpg' ,maxQuantity: 1, description: 'BKT = 50 Filters | باكت 50 فلتر'},
        { id: 'CoffeeFilters', name: 'FETCO Coffee Filters | فلتر قهوةاليوم فيتكو مقاس 13', unit: 'CTN', imageUrl: 'images/CoffeeFilters.jpg',maxQuantity: 1, description: 'Carton = 500 Filters | كرتون 500 فلتر' },
        { id: 'CafettoEspressoCleaner', name: 'Cafetto Espresso Cleaner |  منظف الة الاسبريسو كفيتو أحمر لتر', unit: 'PC', imageUrl: 'images/CafettoEspressoCleaner.jpg',maxQuantity: 1, description: 'PC = 1 Litter | حبة 1 لتر' },
        { id: 'V60CoffeeServer', name: 'V60 Coffee Server 600ml - 02  | ڤي سكستي سيرفر 02 - حجم  600  مل ', unit: 'PC', imageUrl: 'images/V60CoffeeServer.jpg' ,maxQuantity: 2, description: 'PC | حبة'},
        { id: 'CafizaEspresooMachine', name: 'أقراص تنظيف مكائن القهوة كافيزا | Cafiza Espresoo Machine Cleaning Bills', unit: 'Baket', imageUrl: 'images/CafizaEspresooMachine.jpg' ,maxQuantity: 1, description: '100 Bills | 100 حبة'},
    ],
        consumable: [
            { id: 'coveredPlasticFork', name: 'Covered Plastic Fork | شوكة بلاستيك مغلفة', unit: 'Carton', imageUrl: 'images/coveredPlasticFork.jpg', maxQuantity: 1, description: 'Carton = 1000 Fork | كرتون 1000 شوكة' },
            { id: 'coveredPlasticSpoon', name: 'Covered Plastic Spoon | معلقة بلاستيك مغلفة', unit: 'Carton', imageUrl: 'images/coveredPlasticSpoon.jpg', maxQuantity: 1, description: 'Box = 1000 Spoon | كرتون 1000 معلقة' },
            { id: 'coveredPlasticKnife', name: 'Covered Plastic Knife | سكين بلاستيك مغلفة', unit: 'Carton', imageUrl: 'images/coveredPlasticKnife.jpg', maxQuantity: 1, description: 'Box = 1000 Knife | كرتون 1000 سكين' },
            { id: 'strawBlack6mm', name: 'STRAW BLACK 6MM | مصاص مغلف 6 مم', unit: 'Carton', imageUrl: 'images/strawBlack6mm.jpg', maxQuantity: 1, description: 'Carton = 10000 Pieces | كرتون 10000 قطعة' },
            { id: 'woodenCoffeeStirrerSticks', name: 'Wooden Coffee Stirrer Sticks | محرك خشبي', unit: 'Carton', imageUrl: 'images/woodenCoffeeStirrerSticks.jpg', maxQuantity: 1, description: 'Carton = 5000 Pieces | كرتون 5000 قطعة' },
            { id: 'cupHolder2', name: 'Cup Holder 2 | حامل اكواب جواد ورقية ٢ كوب', unit: 'Carton', imageUrl: 'images/cupHolder2.jpg', maxQuantity: 2, description: 'Carton = 250 Pieces | كرتون 250 قطعة' },
            { id: 'cupHolder4', name: 'Cup Holder 4 | حامل اكواب ورقية ٤ كوب', unit: 'Carton', imageUrl: 'images/cupHolder4.jpg', maxQuantity: 2, description: 'Carton = 250 Pieces | كرتون 250 قطعة' },
            { id: 'atmPaperRoll', name: 'ATM Paper Roll | ورق مكائن شبكة', unit: 'Carton', imageUrl: 'images/atmPaperRoll.jpg', maxQuantity: 3, description: 'Bkt = 000 Pieces | باكت 000 ' },
            { id: 'thermalPaperRoll70mm80mm', name: 'Thermal paper roll 70MM*80 | ورق رول كاشير70مم*80', unit: 'Carton', imageUrl: 'images/thermalPaperRoll70mm80mm.jpg', maxQuantity: 1, description: 'Carton = 50 ٌRolls | كرتون 50 رول' },
            { id: 'floorDisinfectant30L', name: 'Floor Disinfectant 30L | مطهر أرضيات 30 لتر', unit: 'PC', imageUrl: 'images/floorDisinfectant30L.jpg', maxQuantity: 1, description: 'Gallon = 30 L | جالون 30 لتر' },
            { id: 'glassCleaner30L', name: 'Glass Cleaner 30L | منظف زجاج  30 لتر', unit: 'PC', imageUrl: 'images/glassCleaner30L.jpg', maxQuantity: 1, description: 'Gallon = 30 L | جالون 30 لتر' },
            { id: 'areonPerfumeSticks', name: 'Areon Perfume Sticks | اريون اعواد معطرة لافندر', unit: 'PC', imageUrl: 'images/areonPerfumeSticks.jpg', maxQuantity: 2, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'blackGlovesLarge', name: 'Black Gloves large | قفازات مقاس لارج', unit: 'Carton', imageUrl: 'images/blackGlovesLarge.jpg', maxQuantity: 1, description: 'Caton = 10 Boxes | كرتون 10 بوكسات' },
            { id: 'cleaningSponge', name: 'Cleaning Sponge | سفينج تنظيف', unit: 'PCS', imageUrl: 'images/cleaningSponge.jpg', maxQuantity: 4, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'whiteGarbageBagRoll10Gallon', name: 'White Garbage Bag Roll 10 Gallon | أكياس بلدية رول ابيض 10 جالون', unit: 'BKT', imageUrl: 'images/whiteGarbageBagRoll10Gallon.jpg', maxQuantity: 1, description: 'Baket = 5 Roll | باكت 5 رول' },
            { id: 'blackGarbageBagRoll50Gallon', name: 'Black Garbage Bag Roll 50 Gallon | اكياس بلدية رول اسود 50 جالون', unit: 'BKT', imageUrl: 'images/blackGarbageBagRoll50Gallon.jpg', maxQuantity: 2, description: 'Baket = 10 Roll | باكت 10 رول' },
            { id: 'sanitaInterfoldCoarseWipes', name: 'Sanita Interfold Coarse Wipes | مناديل سانيتا', unit: 'Carton', imageUrl: 'images/sanitaInterfoldCoarseWipes.jpg', maxQuantity: 3, description: 'Carton = 18 Paket | كرتون 18 باكت' },
            { id: 'blueRollTissues', name: 'Blue Roll Tissues | مناديل رول أزرق', unit: 'Roll', imageUrl: 'images/blueRollTissues.jpg', maxQuantity: 1, description: 'Roll = 375 sheets | الرول 375 شيت' },
            { id: 'MopHeadRefill', name: 'Mop Head Refill | غيار ممسحة موب', unit: 'PCS', imageUrl: 'images/MopHeadRefill.jpg', maxQuantity: 2, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'DishwashingLiquid', name: 'Dishwashing Liquid | سائل غسيل صحون', unit: 'PCS', imageUrl: 'images/DishwashingLiquid.jpg', maxQuantity: 1, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'Facemask', name: 'Face Mask |ماسك وجه', unit: 'CTN', imageUrl: 'images/Facemask.jpg', maxQuantity: 1, description: 'CTN = 10 BKT |  10 باكت' },
            { id: 'alEmlaqSuperGel', name: 'Al Emlaq Super Gel | العملاق جيل', unit: 'PCS', imageUrl: 'images/alEmlaqSuperGel.jpg', maxQuantity: 1, description: 'Piece = 1 Piece |  1 حبة' }
        ],
        beverage: [
            { id: 'nestleCondensedMilk', name: 'Nestlé Sweetened Condensed Milk |حليب مكثف نستله ', unit: 'CTN', imageUrl: 'images/nestle_condensed_milk.jpg', maxQuantity: 1, description: 'Carton = 48 Pieces | كرتون 48 قطعة' },
            { id: 'PerrierSparklingWater', name: 'Perrier Sparkling Water 200ML |مياة غازية بيريه 200 مل', unit: 'CTN', imageUrl: 'images/PerrierSparklingWater.jpg', maxQuantity: 2, description: 'Carton = 24 Pieces | كرتون 24 حبة' },
            { id: 'jevanSugarcaneSyrup', name: 'Jevan Sugarcane Syrup | سكر سيرب (سكر قصب) جفان 1000 مل', unit: 'BTL', imageUrl: 'images/jevan_sugarcane_syrup.jpg', maxQuantity: 1, description: 'Carton = 4 BTL | كرتون 4 عبوة' },
            { id: 'alproAlmondMilk', name: 'Alpro Almond Milk | حليب البرو عضوي لوز باريستا', unit: 'BTL', imageUrl: 'images/alpro_almond_milk.jpg', maxQuantity: 2, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'alproCoconutMilk', name: 'Alpro Coconut Milk | حليب البرو عضوي كوكنت باريستا', unit: 'PC', imageUrl: 'images/alpro_coconut_milk.jpg', maxQuantity: 2, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'alMaraiWhippingCream', name: 'Al Marai Whipping Cream | كريمة خفق المراعي', unit: 'PC', imageUrl: 'images/al_marai_whipping_cream.jpg', maxQuantity: 2, description: 'Piece = 1 Piece |  1 حبة' },
            { id: 'twiningsEnglishBreakfastTea', name: 'Twinings English Breakfast Tea | شاي توينجز احمر', unit: 'BKT', imageUrl: 'images/twinings_english_breakfast_tea.jpg', maxQuantity: 1, description: 'BKT = 50 Pieces | باكت 50 قطعة' },
            { id: 'twiningsPureGreenTea', name: 'Twinings Pure Green Tea | شاي توينجز اخضر', unit: 'BKT', imageUrl: 'images/twinings_pure_green_tea.jpg', maxQuantity: 1, description: 'BKT = 50 Pieces | باكت 50 قطعة' },
            { id: 'whiteSugarSachets', name: 'White Sugar Sachets | سكر شفرات باكت ابيض', unit: 'CTN', imageUrl: 'images/white_sugar_sachets.jpg', maxQuantity: 1, description: 'CTN = 1000 Pieces | كرتون 1000 حبة' },
            { id: 'brownSugarSachets', name: 'Brown Sugar Sachets | سكر شفرات باكت بني', unit: 'CTN', imageUrl: 'images/brown_sugar_sachets.jpg', maxQuantity: 1, description: 'CTN = 1000 Pieces | كرتون 1000 حبة' },
            { id: 'steviaDietSugar', name: 'Stevia Diet Sugar | سكر ستيفيا دايت', unit: 'BKT', imageUrl: 'images/stevia_diet_sugar.jpg', maxQuantity: 1, description: 'BKT = 100 Pieces | باكت 100 حبة' },
            { id: 'matchaGreenTeaPowder', name: 'Matcha Green Tea Powder | ماتشا', unit: 'KG', imageUrl: 'images/matcha_green_tea_powder.jpg', maxQuantity: 1, description: 'Matcha green tea powder' },
            { id: 'dryBlueberry', name: 'Dry Blueberry | توت مجفف', unit: 'KG', imageUrl: 'images/dry_blueberry.jpg', maxQuantity: 1, description: 'Dry blueberry' },
            { id: 'dryOrange', name: 'Dry Orange | برتقال مجفف', unit: 'KG', imageUrl: 'images/dry_orange.jpg', maxQuantity: 1, description: 'Dry orange' },
            { id: 'sugar10k', name: 'Sugar 10 kg | سكرغير مغلف 10 ك', unit: 'KG', imageUrl: 'images/sugar_10k.jpg', maxQuantity: 1, description: '10 kg bag of sugar' },
            { id: 'redCherry', name: 'Red Cherry | كرز مجفف', unit: 'KG', imageUrl: 'images/red_cherry.jpg', maxQuantity: 1, description: 'Red cherry' },
            { id: 'rawRoselle', name: 'Raw Roselle | كركديه خام', unit: 'KG', imageUrl: 'images/raw_roselle.jpg', maxQuantity: 1, description: 'Raw roselle' },
            { id: 'mint', name: 'Mint | نعناع', unit: 'PACK', imageUrl: 'images/mint.jpg', maxQuantity: 1, description: 'Mint' },
            { id: 'lemon', name: 'Lemon | ليمون', unit: '،KG', imageUrl: 'images/lemon.jpg', maxQuantity: 1, description: 'Lemon' }
        ]
    };


const sweetInventory = {
    'Al-Nafl': {
        'Banana cake - كيكة الموز': {
            'Friday': 5, 'Saturday': 5, 'Sunday': 5, 'Monday': 5, 'Tuesday': 5, 'Wednesday': 7, 'Thursday': 6, 'imageUrl': 'images/banana_cake.jpg'
        },
        'Chocolate Cookies - كوكيز': {
            'Friday': 20, 'Saturday': 17, 'Sunday': 17, 'Monday': 16, 'Tuesday': 14, 'Wednesday': 19, 'Thursday': 26, 'imageUrl': 'images/chocolate_cookies.jpg'
        },
        'Cinnabon - سينابون': {
            'Friday': 5, 'Saturday': 4, 'Sunday': 6, 'Monday': 4, 'Tuesday': 3, 'Wednesday': 3, 'Thursday': 8, 'imageUrl': 'images/cinnabon.jpg'
        },
        'Creme brulee - كريم بروليه': {
            'Friday': 3, 'Saturday': 2, 'Sunday': 1, 'Monday': 2, 'Tuesday': 3, 'Wednesday': 1, 'Thursday': 3, 'imageUrl': 'images/creme_brulee.jpg'
        },
        'Date with Cheese - سخان تشيز التمر': {
            'Friday': 1, 'Saturday': 1, 'Sunday': 1, 'Monday': 1, 'Tuesday': 1, 'Wednesday': 1, 'Thursday': 2, 'imageUrl': 'images/date_with_cheese.jpg', dozen: true
        },
        'Hazelnut dates and pecans - بودنق التمر والبيكان': {
            'Friday': 1, 'Saturday': 1, 'Sunday': 1, 'Monday': 1, 'Tuesday': 1, 'Wednesday': 1, 'Thursday': 2, 'imageUrl': 'images/hazelnut_dates_pecans.jpg', dozen: true
        },
        'Lamington - لامنغتون': {
            'Friday': 10, 'Saturday': 12, 'Sunday': 12, 'Monday': 6, 'Tuesday': 10, 'Wednesday': 10, 'Thursday': 12, 'imageUrl': 'images/lamington.jpg'
        },
        'Latte cake - لاتيه كيك': {
            'Friday': 7, 'Saturday': 4, 'Sunday': 4, 'Monday': 4, 'Tuesday': 5, 'Wednesday': 4, 'Thursday': 7, 'imageUrl': 'images/latte_cake.jpg'
        },
        'Lemon Cake - كيكة ليمون': {
            'Friday': 4, 'Saturday': 5, 'Sunday': 7, 'Monday': 5, 'Tuesday': 6, 'Wednesday': 6, 'Thursday': 6, 'imageUrl': 'images/lemon_cake.jpg'
        },
        'Magic bar coconut - بار جوز الهند': {
            'Friday': 10, 'Saturday': 7, 'Sunday': 7, 'Monday': 7, 'Tuesday': 5, 'Wednesday': 8, 'Thursday': 10, 'imageUrl': 'images/magic_bar_coconut.jpg'
        },
        'Brownies - براونيز': {
            'Friday': 9, 'Saturday': 6, 'Sunday': 3, 'Monday': 6, 'Tuesday': 6, 'Wednesday': 7, 'Thursday': 10, 'imageUrl': 'images/brownies.jpg'
        },
        'Chocolate cake - تشوكلت كيك': {
            'Friday': 6, 'Saturday': 3, 'Sunday': 3, 'Monday': 3, 'Tuesday': 2, 'Wednesday': 5, 'Thursday': 6, 'imageUrl': 'images/chocolate_cake.jpg'
        },
        'Magic bar Loz - بار اللوز': {
            'Friday': 5, 'Saturday': 8, 'Sunday': 5, 'Monday': 8, 'Tuesday': 9, 'Wednesday': 7, 'Thursday': 7, 'imageUrl': 'images/magic_bar_loz.jpg'
        },
        'Marble cake - ماربل كيك': {
            'Friday': 6, 'Saturday': 5, 'Sunday': 5, 'Monday': 7, 'Tuesday': 8, 'Wednesday': 5, 'Thursday': 9, 'imageUrl': 'images/marble_cake.jpg'
        },
        'Tiramisu cacke - تيرامسيو كيك': {
            'Friday': 7, 'Saturday': 4, 'Sunday': 2, 'Monday': 5, 'Tuesday': 4, 'Wednesday': 5, 'Thursday': 7, 'imageUrl': 'images/tiramisu_cake.jpg'
        }
    },
    'Aqiq': {
        'Banana cake - كيكة الموز': {
            'Friday': 8, 'Saturday': 8, 'Sunday': 8, 'Monday': 8, 'Tuesday': 8, 'Wednesday': 8, 'Thursday': 8, 'imageUrl': 'images/banana_cake.jpg'
        },
        'Big Cookies - كوكيز كبير': {
            'Friday': 25, 'Saturday': 15, 'Sunday': 15, 'Monday': 15, 'Tuesday': 15, 'Wednesday': 17, 'Thursday': 17, 'imageUrl': 'images/big_cookies.jpg'
        },
        'Chocolate Cookies - كوكيز': {
            'Friday': 20, 'Saturday': 20, 'Sunday': 20, 'Monday': 20, 'Tuesday': 20, 'Wednesday': 20, 'Thursday': 23, 'imageUrl': 'images/chocolate_cookies.jpg'
        },
        'Chocolate Hazeinut - بودنق الشوكلاته': {
            'Friday': 1, 'Saturday': 1, 'Sunday': 1, 'Monday': 1, 'Tuesday': 1, 'Wednesday': 1, 'Thursday': 1, 'imageUrl': 'images/chocolate_hazelnut.jpg', dozen: true
        },
        'Cinnabon - سينابون': {
            'Friday': 20, 'Saturday': 11, 'Sunday': 10, 'Monday': 12, 'Tuesday': 10, 'Wednesday': 10, 'Thursday': 20, 'imageUrl': 'images/cinnabon.jpg'
        },
        'Creme brulee - كريم بروليه': {
            'Friday': 6, 'Saturday': 4, 'Sunday': 4, 'Monday': 4, 'Tuesday': 4, 'Wednesday': 4, 'Thursday': 6, 'imageUrl': 'images/creme_brulee.jpg'
        },
        'Date with Cheese - سخان تشيز التمر': {
            'Friday': 3, 'Saturday': 1, 'Sunday': 1, 'Monday': 1, 'Tuesday': 1, 'Wednesday': 1, 'Thursday': 2, 'imageUrl': 'images/date_with_cheese.jpg', dozen: true
        },
        'Hazelnut dates and pecans - بودنق التمر والبيكان': {
            'Friday': 3, 'Saturday': 1, 'Sunday': 1, 'Monday': 1, 'Tuesday': 1, 'Wednesday': 1, 'Thursday': 3, 'imageUrl': 'images/hazelnut_dates_pecans.jpg', dozen: true
        },
        'Lamington - لامنغتون': {
            'Friday': 22, 'Saturday': 18, 'Sunday': 14, 'Monday': 10, 'Tuesday': 10, 'Wednesday': 14, 'Thursday': 16, 'imageUrl': 'images/lamington.jpg'
        },
        'Latte cake - لاتيه كيك': {
            'Friday': 6, 'Saturday': 6, 'Sunday': 6, 'Monday': 6, 'Tuesday': 5, 'Wednesday': 4, 'Thursday': 5, 'imageUrl': 'images/latte_cake.jpg'
        },
        'Lemon Cake - كيكة ليمون': {
            'Friday': 9, 'Saturday': 8, 'Sunday': 8, 'Monday': 8, 'Tuesday': 8, 'Wednesday': 8, 'Thursday': 9, 'imageUrl': 'images/lemon_cake.jpg'
        },
        'Magic bar coconut - بار جوز الهند': {
            'Friday': 12, 'Saturday': 10, 'Sunday': 10, 'Monday': 10, 'Tuesday': 10, 'Wednesday': 10, 'Thursday': 12, 'imageUrl': 'images/magic_bar_coconut.jpg'
        },
        'Brownies - براونيز': {
            'Friday': 10, 'Saturday': 7, 'Sunday': 7, 'Monday': 7, 'Tuesday': 7, 'Wednesday': 7, 'Thursday': 7, 'imageUrl': 'images/brownies.jpg'
        },
        'Chocolate cake - تشوكلت كيك': {
            'Friday': 8, 'Saturday': 7, 'Sunday': 5, 'Monday': 3, 'Tuesday': 5, 'Wednesday': 6, 'Thursday': 8, 'imageUrl': 'images/chocolate_cake.jpg'
        },
        'Magic bar Loz - بار اللوز': {
            'Friday': 12, 'Saturday': 12, 'Sunday': 12, 'Monday': 12, 'Tuesday': 12, 'Wednesday': 12, 'Thursday': 12, 'imageUrl': 'images/magic_bar_loz.jpg'
        },
        'Marble cake - ماربل كيك': {
            'Friday': 9, 'Saturday': 7, 'Sunday': 7, 'Monday': 7, 'Tuesday': 7, 'Wednesday': 7, 'Thursday': 9, 'imageUrl': 'images/marble_cake.jpg'
        },
        'Tiramisu cacke - تيرامسيو كيك': {
            'Friday': 7, 'Saturday': 7, 'Sunday': 4, 'Monday': 4, 'Tuesday': 6, 'Wednesday': 5, 'Thursday': 10, 'imageUrl': 'images/tiramisu_cake.jpg'
        }
    }
};

const selectedItems = {
    cupsLids: {},
    filters: {},
    consumable: {},
    beverage: {}
};

// Selected sweet items storage
const selectedSweetItems = {};

function login() {
    const branch = document.getElementById('branch').value;
    const username = document.getElementById('username').value;

    // Validate branch and username
    if (branch === '' || username === '') {
        alert('Please select a branch and enter a username.');
        return;
    }

    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
    updateBranchInformation();
}

function updateBranchInformation() {
    const branch = document.getElementById('branch').value;
    document.getElementById('branch-information').innerText = `Branch: ${branch}`;
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    
    // Update button styles
    const buttons = document.querySelectorAll('.tabs button');
    buttons.forEach(button => {
        button.classList.remove('btn-primary');
    });
    event.target.classList.add('btn-primary');

    // Update branch information if Sweet Order tab is active
    if (tabId === 'sweetOrderTab') {
        updateBranchInformation();
    }
}

function updateBranchInformation() {
    const branch = document.getElementById('branch').value;
    document.getElementById('branch-information').innerText = `Branch: ${branch}`;
    document.getElementById('sweetBranch-information').innerText = `Branch: ${branch}`;
}

function showCategoryItems(category) {
    const items = inventoryItems[category];
    items.forEach(item => {
        if (!selectedItems[category][item.id]) {
            addItem(category, item);
        }
    });
    updateDisplay();
}

function addItem(category, item) {
    if (!selectedItems[category][item.id]) {
        selectedItems[category][item.id] = {
            ...item,
            quantity: 1
        };
    }
    updateDisplay();
}

function updateQuantity(category, itemId, delta) {
    const item = selectedItems[category][itemId];
    if (item) {
        const newQuantity = item.quantity + delta;
        const maxQuantity = inventoryItems[category].find(i => i.id === itemId).maxQuantity;
        if (newQuantity > 0 && newQuantity <= maxQuantity) {
            item.quantity = newQuantity;
        } else if (newQuantity > maxQuantity) {
            alert(`Maximum quantity limit for ${item.name} is ${maxQuantity}.`);
        }
        updateDisplay();
    }
}

function removeItem(category, itemId) {
    delete selectedItems[category][itemId];
    updateDisplay();
}

function updateDisplay() {
    updateCategoryDisplay('cupsLids', 'cupsLidsItems');
    updateCategoryDisplay('filters', 'filtersItems');
    updateCategoryDisplay('consumable', 'consumableItems');
    updateCategoryDisplay('beverage', 'beverageItems');
}

function updateCategoryDisplay(category, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    Object.values(selectedItems[category]).forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'selected-item';
        itemElement.innerHTML = `
            <span class="item-name" data-image="${item.imageUrl}" data-description="${item.description}">${item.name}</span>
            <div class="quantity-control">
                <button class="quantity-btn" onclick="updateQuantity('${category}', '${item.id}', -1)">
                    <i class="fas fa-minus"></i>
                </button>
                <span>${item.quantity} ${item.unit}</span>
                <button class="quantity-btn" onclick="updateQuantity('${category}', '${item.id}', 1)">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="quantity-btn text-red-500" onclick="removeItem('${category}', '${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        container.appendChild(itemElement);

        // Add click event listener to the item name
        const itemName = itemElement.querySelector('.item-name');
        itemName.addEventListener('click', function() {
            showPopup(this.getAttribute('data-image'), this.getAttribute('data-description'));
        });
    });
}

function showPopup(imageUrl, description) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <img src="${imageUrl}" alt="Item Image">
            <div class="item-description">${description}</div>
        </div>
    `;

    // Append the popup to the body
    document.body.appendChild(popup);

    // Display the popup
    popup.style.display = 'flex';

    // Add event listener to close the popup
    popup.querySelector('.close-popup').addEventListener('click', function() {
        document.body.removeChild(popup);
    });

    // Close the popup if the user clicks outside the popup content
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            document.body.removeChild(popup);
        }
    });
}
function submitOrder() {
    generatePDF().then(() => {
        const message = "Purchase Order:\n\n";
        for (const category in selectedItems) {
            const items = selectedItems[category];
            if (Object.keys(items).length > 0) {
                message += `${category.replace(/([A-Z])/g, ' $1').trim()}:\n`;
                Object.values(items).forEach(item => {
                    message += `- ${item.name}: ${item.quantity} ${item.unit}\n`;
                });
                message += '\n';
            }
        }
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://chat.whatsapp.com/Fyoa3jnYx1ZERYB90DkVRX?text=${encodedMessage}`;
        window.open(whatsappUrl);
    });
}

function generatePDF() {
    // Populate printable area with the current order details
    const branch = document.getElementById('branch').value;
    const username = document.getElementById('username').value;
    const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    document.getElementById('pdfBranch').innerText = branch;
    document.getElementById('pdfDate').innerText = `${date} - ${username}`;

    // Generate item list in the printable area
    const pdfItemsContainer = document.getElementById('pdfItems');
    pdfItemsContainer.innerHTML = ''; // Clear previous content

    // Create a table for the items
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginBottom = '20px';

    // Create table header
    const headerRow = document.createElement('tr');
    ['Item Name', 'Unit', 'Quantity'].forEach(headerText => {
        const th = document.createElement('th');
        th.style.border = '1px solid #000';
        th.style.padding = '8px';
        th.style.backgroundColor = '#7BA084'; // Primary Green
        th.style.color = '#fff';
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Populate table with items
    for (const category in selectedItems) {
        const items = selectedItems[category];
        if (Object.keys(items).length > 0) {
            Object.values(items).forEach(item => {
                const row = document.createElement('tr');
                ['name', 'unit', 'quantity'].forEach(field => {
                    const td = document.createElement('td');
                    td.style.border = '1px solid #000';
                    td.style.padding = '8px';
                    td.innerText = item[field];
                    row.appendChild(td);
                });
                table.appendChild(row);
            });
        }
    }

    pdfItemsContainer.appendChild(table);

    // Add footer
    const footer = document.createElement('div');
    footer.style.display = 'flex';
    footer.style.justifyContent = 'space-between';
    footer.style.padding = '10px';
    footer.style.backgroundColor = '#466564'; // Secondary Green
    footer.style.color = '#fff';
    footer.style.fontWeight = 'lighter'; // Thinner font
    footer.style.fontSize = '12px'; // Smaller font
    footer.style.position = 'absolute';
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.left = '0';
    footer.style.right = '0';

    const leftText = document.createElement('span');
    leftText.innerText = 'Business Manager - Ahmed Hassan | Ons Coffee';
    leftText.style.color = '#fff'; // White color

    footer.appendChild(leftText);

    pdfItemsContainer.appendChild(footer);

    // Display the printable area and convert it to PDF
    const printableOrder = document.getElementById('printableOrder');
    printableOrder.style.display = 'block';

    // Use html2pdf to generate PDF
    html2pdf(printableOrder, {
        margin:       0.5,
        filename:     `${branch}_${date}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).then(() => {
        // Hide the printable area after PDF generation
        printableOrder.style.display = 'none';
    });
}

function showSweetOrderItems() {
    const branch = document.getElementById('branch').value;
    const sweetItems = sweetInventory[branch];
    const sweetOrderItemsContainer = document.getElementById('sweetOrderItems');
    sweetOrderItemsContainer.innerHTML = '';

    for (const itemName in sweetItems) {
        const item = sweetItems[itemName];
        const itemElement = document.createElement('div');
        itemElement.className = 'selected-item';
        itemElement.innerHTML = `
            <span class="item-name" data-image="${item.imageUrl}">${itemName}</span>
            <div class="quantity-control">
                <button class="quantity-btn" onclick="updateSweetQuantity('${itemName}', -1)">
                    <i class="fas fa-minus"></i>
                </button>
                <input type="number" class="quantity-input" placeholder="On Hand" data-item="${itemName}" value="0">
                <button class="quantity-btn" onclick="updateSweetQuantity('${itemName}', 1)">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
        sweetOrderItemsContainer.appendChild(itemElement);

        // Add click event listener to the item name
        const itemNameElement = itemElement.querySelector('.item-name');
        itemNameElement.addEventListener('click', function() {
            showPopup(this.getAttribute('data-image'));
        });
    }
}

function updateSweetQuantity(itemName, delta) {
    const input = document.querySelector(`input[data-item="${itemName}"]`);
    let currentValue = parseInt(input.value);
    currentValue += delta;
    if (currentValue < 0) {
        currentValue = 0;
    }
    input.value = currentValue;
}

// Existing code for submitting order and updating display
// ...


function submitSweetOrder() {
    const branch = document.getElementById('branch').value;
    const sweetItems = sweetInventory[branch];
    const sweetOrderItemsContainer = document.getElementById('sweetOrderItems');
    const inputs = sweetOrderItemsContainer.querySelectorAll('.quantity-input');

    const creationDate = new Date();
    const creationDayOfWeek = getDayOfWeek(creationDate);
    const creationTime = creationDate.getHours();

    // Determine the order day based on the creation time
    let orderDayOfWeek = creationDayOfWeek;
    let orderDate = new Date(creationDate);
    if (creationTime >= 15) {
        orderDayOfWeek = getNextDayOfWeek(creationDayOfWeek);
        orderDate.setDate(orderDate.getDate() + 1); // Move to the next day
    }

    inputs.forEach(input => {
        const itemName = input.getAttribute('data-item');
        const inventoryOnHand = parseInt(input.value);
    
        const adjustedQuantity = getAdjustedQuantity(itemName, inventoryOnHand, orderDayOfWeek, sweetItems);
    
        if (adjustedQuantity > 0) {
            selectedSweetItems[itemName] = {
                name: itemName,
                quantity: adjustedQuantity
            };
        }
    });
    

    generateSweetOrderPDF(orderDate).then(() => {
        const message = "Sweet Order:\n\n";
        for (const itemName in selectedSweetItems) {
            const item = selectedSweetItems[itemName];
            message += `- ${item.name}: ${item.quantity}\n`;
        }
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://chat.whatsapp.com/Fyoa3jnYx1ZERYB90DkVRX?text=${encodedMessage}`;
        window.open(whatsappUrl);
    });
}

function getAdjustedQuantity(itemName, inventoryOnHand, orderDayOfWeek, sweetItems) {
    const orderQuantity = sweetItems[itemName][orderDayOfWeek];
    let adjustedQuantity = orderQuantity - inventoryOnHand;

    // Ensure the adjusted quantity is not negative
    if (adjustedQuantity < 0) {
        adjustedQuantity = 0;
    }

    // Check if the item has the dozen property
    if (sweetItems[itemName].dozen) {
        if (inventoryOnHand >= 7) {
            // Reduce by 1 if on hand quantity >= 7
            adjustedQuantity = orderQuantity - 1;
        } else {
            // Else keep the default order quantity
            adjustedQuantity = orderQuantity;
        }
    }

    return adjustedQuantity;
}

function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

function getNextDayOfWeek(currentDay) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentIndex = daysOfWeek.indexOf(currentDay);
    const nextIndex = (currentIndex + 1) % 7;
    return daysOfWeek[nextIndex];
}


function generateSweetOrderPDF(orderDate) {
    const branch = document.getElementById('branch').value;
    const username = document.getElementById('username').value;
    const date = orderDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    document.getElementById('pdfSweetBranch').innerText = branch;
    document.getElementById('pdfSweetDate').innerText = `${date} - ${username}`;

    const pdfSweetItemsContainer = document.getElementById('pdfSweetItems');
    pdfSweetItemsContainer.innerHTML = '';

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginBottom = '20px';

    const headerRow = document.createElement('tr');
    ['Item Name', 'Quantity'].forEach(headerText => {
        const th = document.createElement('th');
        th.style.border = '1px solid #000';
        th.style.padding = '8px';
        th.style.backgroundColor = '#7BA084'; // Primary Green
        th.style.color = '#fff';
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    for (const itemName in selectedSweetItems) {
        const item = selectedSweetItems[itemName];
        const row = document.createElement('tr');
        ['name', 'quantity'].forEach(field => {
            const td = document.createElement('td');
            td.style.border = '1px solid #000';
            td.style.padding = '8px';
            td.innerText = item[field];
            row.appendChild(td);
        });
        table.appendChild(row);
    }

    pdfSweetItemsContainer.appendChild(table);

    // Add footer after the table
    const footer = document.createElement('div');
    footer.style.display = 'flex';
    footer.style.justifyContent = 'space-between';
    footer.style.padding = '10px';
    footer.style.backgroundColor = '#466564'; // Secondary Green
    footer.style.color = '#fff';
    footer.style.fontWeight = 'lighter'; // Thinner font
    footer.style.fontSize = '12px'; // Smaller font
    footer.style.width = '100%';

    const leftText = document.createElement('span');
    leftText.innerText = 'Business Manager - Ahmed Hassan | Ons Coffee';
    leftText.style.color = '#fff'; // White color

    footer.appendChild(leftText);

    pdfSweetItemsContainer.appendChild(footer);

    const printableSweetOrder = document.getElementById('printableSweetOrder');
    printableSweetOrder.style.display = 'block';

    html2pdf(printableSweetOrder, {
        margin: 0.5,
        filename: `${branch}_${date}_sweet_order.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).then(() => {
        printableSweetOrder.style.display = 'none';
    });
}

function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}
