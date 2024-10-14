
let addListAdd = () => {
    let productName = document.getElementById("product-name")
    let productValue = productName.value
    let quentityNumber = document.getElementById("quentity-number")
    let quentityValue = quentityNumber.value
   
    if(productValue.length > 18){
        alert("product lenght high")
        return
     }
     
     if(productValue === "" || quentityValue === ""){
        alert("Plz type Product name and quantity")
        return
     }
    
     if(!isNaN(productValue)){
        alert("Product Not String")
        return
     }


     if(quentityValue < 0){
        alert("quantity type positive")
        return
     }
    productName.value = ""
    quentityNumber.value = ""
    contentAddBody(productValue, quentityValue)
    displaydata(productValue, quentityValue)
}

let contentAddBody = (productValue, quentityValue) => {

    let bodypart = document.getElementById("body-part")
    let div = document.createElement("div")
    div.innerHTML = `
       <div id="itemlist" class="grid grid-cols-2 border border-solid">
        <h3 class="border border-solid px-2 py-2 text-black font-bold sm:text-xl text-sm">${productValue}</h3>
        <h3 class="border border-solid px-2 py-2 text-black font-bold sm:text-xl text-sm">${quentityValue}</h3>
     </div>
    `
    bodypart.appendChild(div)
}


let localDataChek = () => {
    let dataChek = {}
    let cartChek = localStorage.getItem('dataChek')
    if (cartChek) {
        dataChek = JSON.parse(cartChek) 
    }
    return dataChek;
}


let displaydata = (productValue,quentityValue) => {
   let dataChek = localDataChek()
   dataChek[productValue] = quentityValue
    let dataStringify = JSON.stringify(dataChek)
    localStorage.setItem('dataChek',dataStringify)
}

let locaDataSave = () => {
    let savedata = localDataChek()

    for(let productValue in savedata){
        let quentityValue = savedata[productValue]
        contentAddBody (productValue,quentityValue)
    }
}

locaDataSave()