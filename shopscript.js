console.log(products)

let productsHTML = "<h2>Ninjago</h2>"
products.map((product)=>{
    productsHTML += `
    <article>
        <img src="website_images/PROD_${product.imagefile}" alt="${product.title}">
        <a href="#">${product.category}</a>
        <h3>${product.title}</h3>
        <span>Kr. ${product.price}</span>
        <button onclick="addToCart(${product.prodid})">LEGG I HANDLEKURV</button>
    </article>`
})



const main = document.getElementsByTagName("main");
main[0].innerHTML = productsHTML; 



// Handlevognfunksjon

document.getElementById("carttoggle").addEventListener("click"), function() {
    const cart = document.getElementById("cart")
    cart.classList.toggle("show")
}

function addToCart(prodid){

    let exist = cart.findIndex(p => productid === p.product)
    
    console.log("Exists:" + exist)

    if (exist === 1) {
        cart.push({product: prodid, quantity: 1})
    } else {
        cart[exist].quantity += 1
    }
    
    updateCartDisplay()
    
}



function updateCartDisplay(){

    let cartCount = 0 
    cart.map(p => cartCount += p.quantity)
    document.getElementById("cartcount").innerHTML = cartCount

    let cartHTML = ""
    if(cart.length === 0){
    
        cart.cartHTML += "<li> Du har ingen produkter i handlevognen"
    } else {
    cart.map((prod, index) => {
    let filtererdProduct = products.filter(filterprod => prod.product === filterprod.prodid) 
    console.log(filtererdProduct)
    cartHTML += `<li>
        <span class="title">${filtererdProduct[0].title}</span>
        <span class="price">${filtererdProduct[0].price}</span>
        <span class="quantity">x${prod.quantity}</span>
        <span class="functions">
        <Button onclick ="removeFromCart(${index})">X</Button>
        </span>
        </li>`
    })
}
    document.getElementById("cartlist").innerHTML = cartHTML
}

function removeFromCart(index){
   console.log("Removing " + index)
if (cart.quantity > 1){
    cart[index].quantity -= 1
} else {
    cart.slice(index, 1)
}

   updateCartDisplay()
}   

updateCartDisplay()