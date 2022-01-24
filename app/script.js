


const recipes = [{
  id: "",
  recipeName: "briyani",
  recipeImg: {
    url: "./images/grill.png",
    altinfo: "grill",
  },
  option: "non-veg",
  ingridents: "chicken 1 kg",
  stepsToPrepare: "note",
},
];

function addRecipeForm(recipes) {
  const div = document.creatElement("img");
  img.setAtrribute("width", 99);
  img.setAtrribute("height", 273);
  img.setAtrribute("src", movie.image.url);
  img.setAtrribute("alt", movie.images.altInfo);
  div.appendChild(img);

  const h2 = document.createElement("h2");
  h2.contentText(recipes.recipeName);
  div.appendChild(h2);

  const p = document.createElement("p");
  p.contentText(recipes.ingridents);
  div.appendChild(p);

  const p = document.createElement("p");
  p.contentText(recipes.ingridents);
  div.appdendChild(p);

}

const addRecipeForm = document.querSelector("#add-recipe-form");
addRecipeForm.addEventListener("submit", function (event) {
  const formData = new FormData(addRecipeForm);
  const recipes = {
    id: new Date().getTime(),
    name: formData.get("recipeName"),
    img: formData.get("recipe-Img-altinfo"),
    image: {
      url: formData.get(""),
      altInfo: formData.get("movie-image-alt"),
    },
  }
});

