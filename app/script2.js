

const addRecipeForm = document.querySelector("#addRecipeForm");
const updateimg = document.getElementById("buttonclr")

const reader = new FileReader(updateimg);
var imgurl = "";
var path = "";

updateimg.addEventListener("change", function (event) {
    console.log("working......");
    imgurl = event.target.files[0].name;
    document.getElementById("recipeImages").value = imgurl;
    path = imgurl;
    console.log("path,path");
    console.log(imgurl);
    if (imgurl) {
        console.log(imgurl);
    } else {
        console.log("working but file not uploaded");
    }
});


addRecipeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(addRecipeForm);
    const recipes = {
        id: new Date().getTime(),
        name: formData.get("recipeName"),
        foodtype: formData.get("radioveg"),
        indrgtype: formData.get("mention"),
        stepstoprepare: formData.get("mention1"),
        image: {
            url: formData.get("recipeImages"),
            altInfo: formData.get("recipeCard") + " " + "Image",
        },
    };
    console.log("recipes" + " " + JSON.stringify(recipes));
    sessionStorage.setItem("recipe", JSON.stringify(recipes));
    console.log(recipes);

    if (recipes) {
        window.location.href = "index3.html";
    } else {
        console.log("working");
    }

});

















