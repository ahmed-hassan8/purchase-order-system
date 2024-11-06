// Inventory data structure
const inventoryItems = {
    cupsLids: [
        { id: 'cup9oz', name: '9OZ', unit: 'Carton', imageUrl: 'images/cup9oz.jpg' },
        { id: 'cup12oz', name: '12OZ', unit: 'Carton', imageUrl: 'images/cup12oz.jpg' },
        { id: 'lids9oz', name: 'Lids 9OZ', unit: 'Carton', imageUrl: 'images/lids9oz.jpg' }
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
    cupsLids: {},
    filters: {},
    cleaning: {}
};

function login() {
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
        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            delete selectedItems[category][itemId];
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
        const branch = document.getElementById('branch').value;
        doc.text(`Branch: ${branch}`, 10, y);
        y += 10;
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, y);
        y += 10;
        doc.text(`User: ${document.getElementById('username').value}`, 10, y);
        y += 20;

        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text("Item Name", 10, y);
        doc.text("Unit", 70, y);
        doc.text("Quantity", 130, y);
        y += 10;

        doc.setDrawColor(0, 0, 0);
        doc.line(10, y, 190, y);
        y += 5;

        for (const category in selectedItems) {
            const items = selectedItems[category];
            if (Object.keys(items).length > 0) {
                Object.values(items).forEach(item => {
                    doc.text(item.name, 10, y);
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
                });
            }
        }

        // Add footer
        doc.setFillColor(123, 160, 132); // Primary
        doc.rect(0, doc.internal.pageSize.height - 20, doc.internal.pageSize.width, 20, 'F');
        doc.setFontSize(10);
        doc.setTextColor(255, 255, 255);
        doc.text("Ons Coffee", 10, doc.internal.pageSize.height - 10);
        doc.text("Brand Manager-Ahmed Hassan", 100, doc.internal.pageSize.height - 10);

        doc.save("purchase_order.pdf");
        resolve();
    });
}
