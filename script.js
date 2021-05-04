const cards = document.querySelector("#container");
const button = document.querySelector("#productsButton");
button.addEventListener("click", showProducts);
const form = document.querySelector('form');
const addProductButton = document.getElementById('addProductButton');

addProductButton.addEventListener("click", hideForm);

async function showProducts() {

    for (let id = 1; id < 21; id++) {
    
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const productData = await res.json();
    console.log(productData)
        
    const card = document.createElement('div');
    card.setAttribute('class', `card${id}`);
    cards.appendChild(card);

    const imageDiv = document.createElement('div');
    card.appendChild(imageDiv);
    const image = document.createElement('img');
    image.setAttribute('src', productData.image);
    imageDiv.appendChild(image);
    imageDiv.setAttribute('id', 'imageDiv');

    const title = document.createElement('h3');
    title.innerText = productData.title;
    card.appendChild(title);
    
    const description = document.createElement('p');
    description.innerText =  productData.description;
    card.appendChild(description);

    const priceCategory = document.createElement('div');
    card.appendChild(priceCategory);
    priceCategory.setAttribute('id', 'priceCategory');
    const price = document.createElement('p');
    const category = document.createElement('p');

    price.innerText = '$ ' + productData.price;
    priceCategory.appendChild(price);
    
    category.innerText = productData.category;
    priceCategory.appendChild(category);

  }
}


function addProduct () {
  fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: '',
                    price: '',
                    description: '',
                    image: '',
                    category: ''
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}

function hideForm() {
    form.classList.toggle('hide');
}