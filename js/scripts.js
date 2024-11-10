// Inventory data structure
// Updated inventory data structure
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
        { id: 'takeOutSmallPacket', name: 'Take out Small Packet | باكت سفري صغير', unit: 'Baket', imageUrl: 'images/takeOutSmallPacket.jpg',maxQuantity: 2 , description: '500 Pakets | 500 باكت'},
        { id: 'takeOutBigPacket', name: 'Take out Big Packet | باكت سفري كبير', unit: 'Baket', imageUrl: 'images/takeOutBigPacket.jpg' ,maxQuantity: 2, description: '500 Pakets | 500 باكت'},
    ],
    filters: [
        { id: 'v60', name: 'V60 Filters | فلاتر V60', unit: 'Box', imageUrl: 'images/v60.jpg' ,maxQuantity: 10, description: 'Carton = 1000 Lids | كرتون 1000 غطاء'},
        { id: 'chemex', name: 'Chemex Filters | فلاتر كيميكس', unit: 'Box', imageUrl: 'images/chemex.jpg',maxQuantity: 10, description: 'Carton = 1000 Lids | كرتون 1000 غطاء' }
    ],
    consumable: [
        { id: 'coveredPlasticFork', name: 'شوكة بلاستيك مغلفة | Covered Plastic Fork', unit: 'Carton', imageUrl: 'images/coveredPlasticFork.jpg', maxQuantity: 1, description: 'Carton = 1000 Fork | كرتون 1000 شوكة' },
        { id: 'coveredPlasticSpoon', name: 'معلقة بلاستيك مغلفة | Covered Plastic Spoon', unit: 'Carton', imageUrl: 'images/coveredPlasticSpoon.jpg', maxQuantity: 1, description: 'Box = 1000 Spoon | كرتون 1000 معلقة' },
        { id: 'coveredPlasticKnife', name: 'سكين بلاستيك مغلفة | Covered Plastic Knife', unit: 'Carton', imageUrl: 'images/coveredPlasticKnife.jpg', maxQuantity: 1, description: 'Box = 1000 Knife | كرتون 1000 سكين' },
        { id: 'strawBlack6mm', name: 'مصاص مغلف 6 مم | STRAW BLACK 6MM', unit: 'Carton', imageUrl: 'images/strawBlack6mm.jpg', maxQuantity: 1, description: 'Carton = 10000 Pieces | كرتون 10000 قطعة' },
        { id: 'woodenCoffeeStirrerSticks', name: 'محرك خشبي | Wooden Coffee Stirrer Sticks', unit: 'Carton', imageUrl: 'images/woodenCoffeeStirrerSticks.jpg', maxQuantity: 1, description: 'Carton = 5000 Pieces | كرتون 5000 قطعة' },
        { id: 'cupHolder2', name: 'حامل اكواب جواد ورقية ٢ كوب | Cup Holder 2', unit: 'Carton', imageUrl: 'images/cupHolder2.jpg', maxQuantity: 2, description: 'Carton = 250 Pieces | كرتون 250 قطعة' },
        { id: 'cupHolder4', name: 'حامل اكواب ورقية ٤ كوب | Cup Holder 4', unit: 'Carton', imageUrl: 'images/cupHolder4.jpg', maxQuantity: 2, description: 'Carton = 250 Pieces | كرتون 250 قطعة' },
        { id: 'atmPaperRoll', name: 'ورق مكائن شبكة | ATM Paper Roll', unit: 'Carton', imageUrl: 'images/atmPaperRoll.jpg', maxQuantity: 3, description: 'Bkt = 000 Pieces | باكت 000 ' },
        { id: 'thermalPaperRoll70mm80mm', name: 'ورق رول كاشير70مم*80 | Thermal paper roll 70MM*80', unit: 'Carton', imageUrl: 'images/thermalPaperRoll70mm80mm.jpg', maxQuantity: 1, description: 'Carton = 50 ٌRolls | كرتون 50 رول' },
        { id: 'floorDisinfectant30L', name: 'مطهر أرضيات 30 لتر | Floor Disinfectant 30L', unit: 'PC', imageUrl: 'images/floorDisinfectant30L.jpg', maxQuantity: 1, description: 'Gallon = 30 L | جالون 30 لتر' },
        { id: 'glassCleaner30L', name: 'منظف زجاج  30 لتر | Glass Cleaner 30L', unit: 'PC', imageUrl: 'images/glassCleaner30L.jpg', maxQuantity: 1, description: 'Gallon = 30 L | جالون 30 لتر' },
        { id: 'areonPerfumeSticks', name: 'اريون اعواد معطرة لافندر | Areon Perfume Sticks', unit: 'PC', imageUrl: 'images/areonPerfumeSticks.jpg', maxQuantity: 2, description: 'Piece = 1 Piece |  1 حبة' },
        { id: 'blackGlovesLarge', name: 'قفازات مقاس لارج | Black Gloves large', unit: 'Carton', imageUrl: 'images/blackGlovesLarge.jpg', maxQuantity: 1, description: 'Caton = 10 Boxes | كرتون 10 بوكسات' },
        { id: 'cleaningSponge', name: 'سفينج تنظيف | Cleaning Sponge', unit: 'PCS', imageUrl: 'images/cleaningSponge.jpg', maxQuantity: 4, description: 'Piece = 1 Piece |  1 حبة' },
        { id: 'whiteGarbageBagRoll10Gallon', name: 'أكياس بلدية رول ابيض 10 جالون | White Garbage Bag Roll 10 Gallon', unit: 'BKT', imageUrl: 'images/whiteGarbageBagRoll10Gallon.jpg', maxQuantity: 1, description: 'Baket = 5 Roll | باكت 5 رول' },
        { id: 'blackGarbageBagRoll50Gallon', name: 'اكياس بلدية رول اسود 50 جالون | Black Garbage Bag Roll 50 Gallon', unit: 'BKT', imageUrl: 'images/blackGarbageBagRoll50Gallon.jpg', maxQuantity: 2, description: 'Baket = 10 Roll | باكت 10 رول' },
        { id: 'sanitaInterfoldCoarseWipes', name: 'مناديل سانيتا | Sanita Interfold Coarse Wipes', unit: 'Carton', imageUrl: 'images/sanitaInterfoldCoarseWipes.jpg', maxQuantity: 3, description: 'Carton = 18 Paket | كرتون 18 باكت' },
        { id: 'blueRollTissues', name: 'مناديل رول أزرق | Blue Roll Tissues', unit: 'Roll', imageUrl: 'images/blueRollTissues.jpg', maxQuantity: 1, description: 'Roll = 375 sheets | الرول 375 شيت' },
        { id: 'MopHeadRefill', name: 'غيار ممسحة موب | Mop Head Refill', unit: 'PCS', imageUrl: 'images/MopHeadRefill.jpg', maxQuantity: 1, description: 'Piece = 1 Piece |  1 حبة' },
        { id: 'DishwashingLiquid', name: 'سائل غسيل صحون | Dishwashing Liquid', unit: 'PCS', imageUrl: 'images/DishwashingLiquid.jpg', maxQuantity: 1, description: 'Piece = 1 Piece |  1 حبة' },
        { id: 'alEmlaqSuperGel', name: 'العملاق جيل | Al Emlaq Super Gel', unit: 'PCS', imageUrl: 'images/alEmlaqSuperGel.jpg', maxQuantity: 1, description: 'Piece = 1 Piece |  1 حبة' }
    ]
};



// Selected items storage
const selectedItems = {
    cupsLids: {},
    filters: {},
    consumable: {}
};

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
    // Update Cups & Lids section
    updateCategoryDisplay('cupsLids', 'cupsLidsItems');
    // Update Filters section
    updateCategoryDisplay('filters', 'filtersItems');
    // Update Cleaning Materials section
    updateCategoryDisplay('consumable', 'consumableItems');
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
            <p class="item-description">${description}</p>
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
