let search = () => {
    let element = document.getElementById("input-search")
    let checkvalue = element.value
    console.log(checkvalue)
    if (!checkvalue) {
        element.setAttribute('action', '#')
    }
    window.stop()
}