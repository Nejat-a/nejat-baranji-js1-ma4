const gameUrl = "https://api.rawg.io/api/games/4200";
const gameTitle = document.querySelector("h1");
const imageDiv = document.querySelector(".image");
const description = document.querySelector(".description");

fetch(gameUrl)
  .then(createGameDetails => createGameDetails.json())
  .then(json => {
    let newImageDiv = "";
    const bgImg = json.background_image;
    console.log(json);
    gameTitle.innerHTML = json.name;
    newImageDiv = `<div class="image" style="background-image: url('${json.background_image}')">
                   </div>`;
    imageDiv.innerHTML += newImageDiv;
    description.innerHTML = json.description;
  })
  .catch(error => error);
