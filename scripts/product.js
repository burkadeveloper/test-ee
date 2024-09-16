const sizeButton = document.querySelectorAll('.size-button');
sizeButton.forEach((button)=>{
    button.addEventListener('click',()=>{
       if(button.innerText == '36'){
       
        document.querySelector('.size-36').classList.add('selected')
        document.querySelector('.size-37').classList.remove('selected')
        document.querySelector('.size-38').classList.remove('selected')
        document.querySelector('.size-39').classList.remove('selected')
        document.querySelector('.size-40').classList.remove('selected')
        document.querySelector('.size-41').classList.remove('selected')
       }
       else if(button.innerText == '37'){
        document.querySelector('.size-36').classList.remove('selected')
        document.querySelector('.size-37').classList.add('selected')
        document.querySelector('.size-38').classList.remove('selected')
        document.querySelector('.size-39').classList.remove('selected')
        document.querySelector('.size-40').classList.remove('selected')
        document.querySelector('.size-41').classList.remove('selected')
       }
       else if(button.innerText == '38'){
        document.querySelector('.size-36').classList.remove('selected')
        document.querySelector('.size-37').classList.remove('selected')
        document.querySelector('.size-38').classList.add('selected')
        document.querySelector('.size-39').classList.remove('selected')
        document.querySelector('.size-40').classList.remove('selected')
        document.querySelector('.size-41').classList.remove('selected')
       }
       else if(button.innerText == '39'){
        document.querySelector('.size-36').classList.remove('selected')
        document.querySelector('.size-37').classList.remove('selected')
        document.querySelector('.size-38').classList.remove('selected')
        document.querySelector('.size-39').classList.add('selected')
        document.querySelector('.size-40').classList.remove('selected')
        document.querySelector('.size-41').classList.remove('selected')
       }
       else if(button.innerText == '40'){
        document.querySelector('.size-36').classList.remove('selected')
        document.querySelector('.size-37').classList.remove('selected')
        document.querySelector('.size-38').classList.remove('selected')
        document.querySelector('.size-39').classList.remove('selected')
        document.querySelector('.size-40').classList.add('selected')
        document.querySelector('.size-41').classList.remove('selected')
       }
       else if(button.innerText == '41'){
        document.querySelector('.size-36').classList.remove('selected')
        document.querySelector('.size-37').classList.remove('selected')
        document.querySelector('.size-38').classList.remove('selected')
        document.querySelector('.size-39').classList.remove('selected')
        document.querySelector('.size-40').classList.remove('selected')
        document.querySelector('.size-41').classList.add('selected')
       }
       else{
        document.querySelector('.size-36').classList.remove('selected')
        document.querySelector('.size-37').classList.remove('selected')
        document.querySelector('.size-38').classList.remove('selected')
        document.querySelector('.size-39').classList.remove('selected')
        document.querySelector('.size-40').classList.remove('selected')
        document.querySelector('.size-41').classList.remove('selected')
       }

    });
})

const products=[{
    image:'jumper.jpg',
    name:'Black medium size jumper for men and women ',
    realprice:5,
    overprice:9.9

},
 {
  image:'losangelsshor.jpg',
  name:'brand new short for men 100% cotton',
  realprice:7,
  overprice:10.9,
},
{
    image:'jackeet.jpg',
    name:'High quality turkey product jacket for men ',
    realprice:75.99,
    overprice:80.99
}
  ]
let producthtml = "";
products.forEach((product)=>{
    producthtml+=` <div class="product">
          <div class="yml-header">
            <img class="yml-images" src="images/${product.image}">
          </div>
          <div class="yml-body">
            <div class="rating">
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              <span class="rating-count">(126)</span>
            </div>
           <div class="yml-product-descriptio">
            <p class="descrp">${product.name}</p>
           </div>
           <div class="yml-price">
            <p class="red-price">$${product.realprice}<span class="over-red-price">$${product.overprice}</span></p>
           </div>
           <div class="shop-button">
           <button class="shop">shop</button>
           </div>
          </div>
        </div>`
})
document.querySelector('.yml-product-grid').innerHTML += producthtml
let redBg = false
let button =  document.querySelector(".btn-favourite ")
button.addEventListener("click",()=>{
  let heart = document.querySelector('.like-heart')
  if(redBg == false){
    heart.classList.add('icon')
    redBg = true
  }
  else if(redBg == true){
    heart.classList.remove('icon')
    redBg =false
  }
 
})
