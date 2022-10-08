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
