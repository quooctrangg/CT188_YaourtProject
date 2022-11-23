const runScript = (e) => {
    if (e.keyCode === 13) {
        search()
        return false
    }
}

const search = () => {
    let valueText = document.getElementById('value__text')
    let value = valueText.value
    if (value.length) {
        console.log(value)
        window.location = 'timkiem.html'
    }
}

const checkValue = (frm) => {
    return frm.checkValidity();
}

var itemList = {
    "sp001": {
        "name": "Sữa Chua Vị Kiwi",
        "price": 21000,
        "photo": "IMAGES/sanpham/kiwi.jpg"
    },
    "sp002": {
        "name": "Sữa Chua Vị Xoài",
        "price": 22000,
        "photo": "IMAGES/sanpham/mango.jpg"
    },
    "sp003": {
        "name": "Sữa Chua Vị Dưa lưới",
        "price": 23000,
        "photo": "IMAGES/sanpham/cantaloupe.jpg"
    },
    "sp004": {
        "name": "Sữa Chua Vị Mâm Xôi",
        "price": 24000,
        "photo": "IMAGES/sanpham/blackberry.jpg"
    },
    "sp005": {
        "name": "Sữa Chua Vị Dâu Tây",
        "price": 25000,
        "photo": "IMAGES/sanpham/strawberry.jpg"
    },
    "sp006": {
        "name": "Sữa Chua Vị Việt Quất",
        "price": 26000,
        "photo": "IMAGES/sanpham/blueberry.jpg"
    },
    "sp007": {
        "name": "Sữa Chua Vị Bưởi",
        "price": 27000,
        "photo": "IMAGES/sanpham/grapes.jpg"
    },
    "sp008": {
        "name": "Sữa Chua Vị Táo Xanh",
        "price": 28000,
        "photo": "IMAGES/sanpham/green-apple.jpg"
    },
    "sp009": {
        "name": "Sữa Chua Vị Dứa",
        "price": 29000,
        "photo": "images/sanpham/pineapple.jpg"
    }
};

let addCart = (code) => {
    let item = itemList[code]
    let valueItem = document.getElementById(code)

    number = parseInt(valueItem.value)
    console.log(number);

    if (number > 100) {
        alert('So luong toi da la 100')
    } else if (number < 1) {
        alert('So luong toi thieu la 1')
    } else {
        alert(`Dat hang thanh cong: ${JSON.stringify(item.name)}, SL: ${number}, Thanh tien: ${item.price * number}`)
    }
}