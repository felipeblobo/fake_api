const cards = document.querySelector("#container")

for (let id = 1; id < 21; id++) {
  produto(id);
  }

function produto(id) {

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => {
    const dadosProduto = json;
    
    const card = document.createElement('div');
    card.setAttribute('class', `card${id}`);
    cards.appendChild(card);

    const imageDiv = document.createElement('div');
    card.appendChild(imageDiv);
    const image = document.createElement('img');
    image.setAttribute('src', dadosProduto.image);
    imageDiv.appendChild(image);
    imageDiv.setAttribute('id', 'imageDiv');

    const title = document.createElement('h3');
    title.innerText = dadosProduto.title;
    card.appendChild(title);
    
    const description = document.createElement('p');
    description.innerText =  dadosProduto.description;
    card.appendChild(description);

    const priceCategory = document.createElement('div');
    card.appendChild(priceCategory);
    priceCategory.setAttribute('id', 'priceCategory');
    const price = document.createElement('p');
    const category = document.createElement('p');

    price.innerText = '$ ' + dadosProduto.price;
    priceCategory.appendChild(price);
    
    category.innerText = dadosProduto.category;
    priceCategory.appendChild(category);

  });
}
