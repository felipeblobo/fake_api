const button = document.querySelector("#productsButton");
button.addEventListener("click", showProducts);
button.addEventListener("click", hideButton);

const cards = document.querySelector("#container");

const addProductButton = document.getElementById("addProductButton");
addProductButton.addEventListener("click", hideForm);

const newProductSave = document.getElementById("newProductSave");
newProductSave.addEventListener("click", addProduct);



function showProducts() {
  
  for (let id = 1; id < 21; id++) {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        const productData = json;

        const card = document.createElement("div");
        card.setAttribute("class", `card${id}`);
        cards.appendChild(card);

        const imageDiv = document.createElement("div");
        card.appendChild(imageDiv);
        const image = document.createElement("img");
        image.setAttribute("src", productData.image);
        imageDiv.appendChild(image);
        imageDiv.setAttribute("id", "imageDiv");

        const title = document.createElement("h3");
        title.innerText = productData.title;
        card.appendChild(title);

        const description = document.createElement("p");
        description.innerText = productData.description;
        card.appendChild(description);

        const priceCategory = document.createElement("div");
        card.appendChild(priceCategory);
        priceCategory.setAttribute("id", "priceCategory");
        const price = document.createElement("p");
        const category = document.createElement("p");

        price.innerText = "$ " + productData.price;
        priceCategory.appendChild(price);

        category.innerText = productData.category;
        priceCategory.appendChild(category);
      });
  }
}

function hideForm() {
  const form = document.querySelector("form");
  form.classList.toggle("hide");
}

function hideButton() {
  button.classList.toggle("hide");
}

//   Adicionando produtos

function addProduct() {
 
const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const category = document.getElementById('category');
const image = document.getElementById('imageUrl');

formValidation();

cards.innerHTML += 

`<div class="card">
<div id='imageDiv'><img src='${image.value}' alt='foto'></div>
<h3>${title.value}</h3>
<p class="description">${description.value}</p>
<div id='priceCategory'>
    <p>$ ${price.value}</p>
    <p>${category.value}</p>
</div>


</div>`

}


function formValidation(event) {
  event.preventDefault();
 
  const title = document.getElementById('title');
  const price = document.getElementById('price');
  const description = document.getElementById('description');
  

  if (title.value === '' || price.value === '' || description.value === '') {
    alert('Preencha todos os campos!')
  }
}