
// let addbutton = () => {
//     let inputName = document.getElementById("productName")
//     let inputQuentity = document.getElementById("quentityNumber")
//     let inputvalue = inputName.value;
//     let quentitytvalue = inputQuentity.value;
//     if(inputvalue === "" || quentitytvalue === ""){
//         alert("plz type phone name and quentity")
//         return
//     }
//     inputName.value = ""
//     inputQuentity.value = ""
//     display(inputvalue, quentitytvalue)
//     productDataSave(inputvalue, quentitytvalue)
// }


// let display = (inputvalue, quentitytvalue) => {
//     let ul = document.getElementById("itemList")
//     let li = document.createElement("li")
//     li.style.paddingBottom = "20px"
//     li.innerHTML = `
//            ${inputvalue} -  ${quentitytvalue}
//      `
//     ul.appendChild(li)
// }
// // fngvn vgbn /?

// let productDataChek = () => {
//     let cart = {}
//     let cartChek = localStorage.getItem('cart')
//     if (cartChek) {
//         cart = JSON.parse(cartChek)
//     }
//     return cart
// }


// let productDataSave = (inputvalue, quentitytvalue) => {
//     let cart = productDataChek();
//     cart[inputvalue] = quentitytvalue;
//     let cardstringconvart = JSON.stringify(cart);
//     localStorage.setItem('cart', cardstringconvart)
// }

// let displayproduct = () => {
//     let saveCart = productDataChek();
//     for (let inputvalue in saveCart) {
//         let quentitytvalue = saveCart[inputvalue ]
//         display(inputvalue, quentitytvalue)
//     }
// }

// displayproduct()





let addListAdd = () => {
    let productName = document.getElementById("product-name")
    let productValue = productName.value
    let quentityNumber = document.getElementById("quentity-number")
    let quentityValue = quentityNumber.value
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