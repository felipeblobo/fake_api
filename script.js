const cards = document.querySelector("#container");
const button = document.querySelector("button");
button.addEventListener("click", showProducts);

function showProducts() {

    for (let id = 1; id < 21; id++) {
    console.log(id)
  

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => {
    const productData = json;
    
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

  });
  }
};


