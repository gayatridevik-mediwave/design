const recipes = JSON.parse(sessionStorage.getItem("recipe"));
//console.log(recipes);
function displayRecipe(recipe) {
    // document.getElementsByClassName(".headertext").innerHTML = recipe.name;
    // document.getElementById("#headercover").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0,5)).url(${recipe.image.url})`;
    //document.getElementsByName("text").innerHTML = recipe.name;
    // document.getElementById("#imagesecond").style.backgroundImage = `url(${recipe.image.url})`;
    // if (recipe.foodType == "Non-Vegetarian") {
    //     document.getElementById("#imagesnveg").src = "./images/icred.jpg";
    // } else {
    //     document.getElementById("#imagesnveg").src = "./images/igren.png";
    // }
    // document.getElementsByClassName("#cont_rec").innerHTML = recipe.indrgtype;
    // document.getElementsByClassName("#cont_rec1").innerHTML = recipe.stepstoprepare;


    document.getElementById("headertext").innerHTML = recipe.name;
    document.getElementById("headercover").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${recipe.image.url})`;
    document.getElementById("text").innerHTML = recipe.name;
    document.getElementById("imagesecond").style.backgroundImage = `url(${recipe.image.url})`;
    if (recipe.foodType == "Non-Vegetarian") {
        document.getElementById("imagesnveg").src = "./images/icred.jpg";
    } else {
        document.getElementById("imagesnveg").src = "./images/igren.png";
    }
    document.getElementById("cont_rec").innerText = recipe.indrgtype;
    document.getElementById("cont_rec1").innerText = recipe.stepstoprepare;
    console.log(recipe);
}
displayRecipe(recipes);
