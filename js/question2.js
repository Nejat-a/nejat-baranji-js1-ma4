const baseUrl = "https://api.rawg.io/api/games";
const resultsDiv = document.querySelector(".results");

fetch(baseUrl)
  .then(createGames => createGames.json())
  .then(json => {
    let newContent = "";
    json.results.forEach(games => {
      newContent += `
        <div class="game">
            <h2>${games.name}</h2>
            <img src="${games.background_image}" alt="${games.name}">
        </div>`;
    });

    resultsDiv.innerHTML = newContent;
  })

  .catch(error => error);
