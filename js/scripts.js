// Inventory data structure
const inventoryItems = {
    mainWarehouse: [
        { id: 'cup7oz', name: 'Cup 7OZ - كوب ورقي 7 اونص', unit: 'CTN', imageUrl: 'images/cup7oz.jpg' },
        { id: 'cuplid7oz', name: 'Cuplid 7OZ - غطاء ورقي 7 اونص', unit: 'CTN', imageUrl: 'images/cuplid7oz.jpg' },
        { id: 'cup9oz', name: 'Cup 9OZ - كوب ورقي 9 اونص', unit: 'CTN', imageUrl: 'images/cup9oz.jpg' },
        { id: 'cuplid9oz', name: 'Cuplid 9OZ - غطاء ورقي 9 اونص', unit: 'CTN', imageUrl: 'images/cuplid9oz.jpg' },
        { id: 'cup12oz', name: 'Cup 12OZ - كوب ورقي 12 اونص', unit: 'CTN', imageUrl: 'images/cup12oz.jpg' },
        { id: 'cuplid12oz', name: 'Paper Cuplid 12OZ - غطاء ورقي 12 اونص', unit: 'CTN', imageUrl: 'images/cuplid12oz.jpg' },
        { id: 'plasticCup12oz', name: 'Plastic cup 12OZ ONS - كوب بلاستيك 12 اونص', unit: 'CTN', imageUrl: 'images/plasticCup12oz.jpg' },
        { id: 'plasticCuplid12oz', name: 'Plastic Paper Cuplid 12 - غطاء أكواب بلاستيك 12 اونص', unit: 'CTN', imageUrl: 'images/plasticCuplid12oz.jpg' },
        { id: 'plasticCup16oz', name: 'Plastic cup 16OZ - كوب بلاستيك 16 اونص', unit: 'CTN', imageUrl: 'images/plasticCup16oz.jpg' },
        { id: 'takeOutHandleBag', name: 'Take out Handle Bag - هاندل باج سفري', unit: 'CTN', imageUrl: 'images/takeOutHandleBag.jpg' },
        { id: 'sweetTakeOutBox', name: 'Sweet Take-out Box - بوكس حلي سفري', unit: 'CTN', imageUrl: 'images/sweetTakeOutBox.jpg' },
        { id: 'sweetDineInPlate', name: 'Sweet Dine-in Plate - طبق حلي ورقي محلي', unit: 'CTN', imageUrl: 'images/sweetDineInPlate.jpg' },
        { id: 'takeOutSmallPacket', name: 'Take out Small Packet - باكت سفري صغير', unit: 'BKT', imageUrl: 'images/takeOutSmallPacket.jpg' },
        { id: 'takeOutBigPacket', name: 'Take out Big Packet - باكت سفري كبير', unit: 'BKT', imageUrl: 'images/takeOutBigPacket.jpg' }
    ],
    filters: [
        { id: 'v60', name: 'V60 Filters', unit: 'Box', imageUrl: 'images/v60.jpg' },
        { id: 'chemex', name: 'Chemex Filters', unit: 'Box', imageUrl: 'images/chemex.jpg' }
    ],
    cleaning: [
        { id: 'sanitizer', name: 'Sanitizer', unit: 'Bottle', imageUrl: 'images/sanitizer.jpg' },
        { id: 'detergent', name: 'Detergent', unit: 'Container', imageUrl: 'images/detergent.jpg' }
    ]
};

// Selected items storage
const selectedItems = {
    mainWarehouse: {},
    filters: {},
    cleaning: {}
};

function login() {
    if (!document.getElementById('branch').value || !document.getElementById('username').value) {
        alert('Branch and Username are required!');
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
    updateInventorySection();
}

function updateQuantity(category, itemId, delta) {
    const item = selectedItems[category][itemId];
    if (item) {
        const newQuantity = item.quantity + delta;
        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            delete selectedItems[category][itemId];
        }
        updateDisplay();
        updateInventorySection();
    }
}

function removeItem(category, itemId) {
    delete selectedItems[category][itemId];
    updateDisplay();
    updateInventorySection();
}

function updateDisplay() {
    // Update Main Warehouse section
    updateCategoryDisplay('mainWarehouse', 'mainWarehouseItems');
    // Update Filters section
    updateCategoryDisplay('filters', 'filtersItems');
    // Update Cleaning Materials section
    updateCategoryDisplay('cleaning', 'cleaningItems');
}

function updateCategoryDisplay(category, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    Object.values(selectedItems[category]).forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'selected-item';
        itemElement.innerHTML = `
            <span>${item.name}</span>
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
    });
}

function updateInventorySection() {
    const inventorySection = document.getElementById('inventoryTab');
    inventorySection.innerHTML = '';

    for (const category in inventoryItems) {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'inventory-category';
        categoryElement.innerHTML = `
            <h3 id="${category}" class="category-title text-xl font-bold">${category.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <div class="items-grid">
        `;

        inventoryItems[category].forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item-card';
            itemElement.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <h4 class="font-bold">${item.name}</h4>
                <p>Unit: ${item.unit}</p>
                <p>Quantity per Unit: ${item.quantity}</p>
                <p>Order Point: ${item.orderPoint}</p>
            `;
            categoryElement.querySelector('.items-grid').appendChild(itemElement);
        });

        inventorySection.appendChild(categoryElement);
    }
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
    return new Promise((resolve, reject) => {
        const doc = new jspdf.jsPDF();
        let y = 20;

        // Set color scheme
        doc.setFillColor(123, 160, 132); // Primary
        doc.rect(0, 0, doc.internal.pageSize.width, 20, 'F');

        doc.setFontSize(18);
        doc.setTextColor(255, 255, 255);
        doc.text("Purchase Order", doc.internal.pageSize.width / 2, 15, { align: 'center' });

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "bold");
        y += 20; // Add space for the top header

        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "normal");
        doc.text("Item Name", 10, y);
        doc.text("Unit", 70, y);
        doc.text("Quantity", 130, y);
        y += 10;

        doc.setDrawColor(0, 0, 0);
        doc.line(10, y, 190, y);
        y += 5;

        // Load Arabic and English font
        doc.addFileToVFS('NotoSans-Regular.ttf', 'BASE64_ENCODED_FONT_DATA');
        doc.addFont('NotoSans-Regular.ttf', 'NotoSans', 'normal');

        for (const category in selectedItems) {
            const items = selectedItems[category];
            if (Object.keys(items).length > 0) {
                Object.values(items).forEach(item => {
                    // Set font for Arabic and English text
                    doc.setFont('NotoSans', 'normal');
                    doc.text(item.name, 10, y);
                    doc.setFont("helvetica", "normal");
                    doc.text(item.unit, 70, y);
                    doc.text(item.quantity.toString(), 130, y);
                    y += 10;

                    // Add small photo for each item
                    const img = new Image();
                    img.src = item.imageUrl;
                    img.onload = function() {
                        doc.addImage(img, 'JPEG', 10, y, 20, 20);
                        y += 25;
                        if (y > 280) {
                            doc.addPage();
                            y = 20;
                        }
                    };

                    // Add line after every item
                    doc.setDrawColor(224, 104, 65); // Accent
                    doc.line(10, y, 190, y);
                    y += 5;
                });
            }
        }

        // Add bottom header
        doc.setFillColor(70, 101, 100); // Secondary
        doc.rect(0, doc.internal.pageSize.height - 20, doc.internal.pageSize.width, 20, 'F');
        doc.setFontSize(10);
        doc.setTextColor(255, 255, 255);
        doc.text("Ons Coffee Shop", 10, doc.internal.pageSize.height - 10);
        doc.text("Brand Manager - Ahmed Hassan", doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 10, { align: 'right' });

        // Reposition Branch, Date, and User at the end of the PDF
        doc.setFontSize(12); // Adjusted font size
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0, 0, 0); // Black color
        const branch = document.getElementById('branch').value;
        const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }).replace(/\s/g, '-');
        const fileName = `${branch}_${date}.pdf`;
        doc.text(`Branch: ${branch}`, 10, doc.internal.pageSize.height - 70); // Adjusted position
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, doc.internal.pageSize.height - 60); // Adjusted position
        doc.text(`User: ${document.getElementById('username').value}`, 10, doc.internal.pageSize.height - 50); // Adjusted position

        doc.save(fileName);
        resolve();
    });
}

// Function to dynamically adjust font size
function adjustFontSize(text, maxWidth, maxFontSize, doc) {
    let fontSize = maxFontSize;
    doc.setFontSize(fontSize);
    while (doc.getTextWidth(text) > maxWidth && fontSize > 1) {
        fontSize -= 1;
        doc.setFontSize(fontSize);
    }
    return fontSize;
}
