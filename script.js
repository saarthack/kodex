const inventory = [
    {
        productName: "Amul Milk 500ml",
        category: "Dairy",
        sellingPrice: 28,
        quantityInStock: 120,
        expiryDate: "2026-03-02"
    },
    {
        productName: "Tata Sampann Toor Dal 1kg",
        category: "Groceries",
        sellingPrice: 165,
        quantityInStock: 60,
        expiryDate: "2026-08-15"
    },
    {
        productName: "Lay's Classic Chips 50g",
        category: "Snacks",
        sellingPrice: 20,
        quantityInStock: 200,
        expiryDate: "2026-06-10"
    },
];

var allData = document.querySelector('.all-data')
var form = document.querySelector('form')

function printData() {
    var sum = ''
    inventory.forEach(function (elem, idx) {
        sum += `<div class="item">
                <h3>${elem.productName}</h3>
                <h4>Category : <span>${elem.category}</span></h4>
                <h4>Price : <span>₹${elem.sellingPrice}</span></h4>
                <h4>Quantity : ${elem.quantityInStock}</h4>
                <h4>Expiry Date : <span>${elem.expiryDate}</span></h4>
                <div>
                    <button>Edit</button>
                    <button id=${idx}>Remove</button>
                </div>
            </div>`
    })

    allData.innerHTML = sum
}

printData()


form.addEventListener('submit', function (e) {
    e.preventDefault()
    let newProduct = {
        productName: form.childNodes[1].value,
        category: form.childNodes[3].value,
        sellingPrice: form.childNodes[5].value,
        quantityInStock: form.childNodes[7].value,
        expiryDate: form.childNodes[9].value
    }
    inventory.push(newProduct)
    form.reset()
    printData()
})

allData.addEventListener('click', function (dets) {
    if (dets.target.id && dets.target.innerHTML == 'Remove') {
        inventory.splice(Number(dets.target.id), 1)
    }
    printData()
})
