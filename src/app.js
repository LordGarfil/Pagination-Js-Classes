const dataContainer = document.querySelector('.data-container')

function renderData(data){
  dataContainer.innerHTML = data
}

export function renderCharacters(characters = []){
  dataContainer.innerHTML = ""
characters.forEach(character =>{
    const characterCard = document.createElement('div')
  characterCard.className = 'characterCard'
  const body = `<div class="character-card">
            <div class="image-container">
              <img src="${character.image}" alt="">
            </div>
            <div class="title-card">
              <h4>${character.name}</h4>
            </div>
            <div class="stats">
              <div class="stats-card">
                ${character.species}
              </div>
              <div class="stats-card">
                ${character.gender}
              </div>
              <div class="stats-card">
                ${character.status}
              </div>
            </div>
        </div>`
    characterCard.innerHTML = body
    dataContainer.appendChild(characterCard)
  })
}