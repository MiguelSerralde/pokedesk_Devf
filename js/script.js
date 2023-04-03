document.getElementById('btn_back').style.display = 'none'
const pokeCount = 21
let quantity = 0

pokemonLoad(quantity, pokeCount)

function pokemonLoad(quantity, pokeCount){  
  for (let i=quantity; i<pokeCount; i++){
    addPokemon(i)  
  }
  return quantity + pokeCount
}

function addPokemon(pokenum) {    
    const divPokeGallery = document.createElement('div')
    const imgPokeGallery = document.createElement('img')
    const galleryAddChild = document.getElementById('gallery')    
    const divPokeNameLabel = document.createElement('div')
    const pPokeNameLabel = document.createElement('p')
    const pPokeName = document.createElement('p')
    const divPokeAbilityLabel = document.createElement('div')
    const pPokeAbilityLabel = document.createElement('p')
    const pPokeAbility = document.createElement('p')
    const divPokeTypeLabel = document.createElement('div')
    const pPokeTypeLabel = document.createElement('p')
    const pPokeType = document.createElement('p')
    
    const divPokeData = document.createElement('div')

    pokenum = pokenum + 1    
    const pokeURL = 'https://pokeapi.co/api/v2/pokemon/' + pokenum   
    galleryAddChild.appendChild(divPokeGallery)       
    divPokeGallery.classList.add('poke')
    divPokeGallery.setAttribute('id', 'poke' + pokenum)  
    const pokemonFlex = document.getElementById('poke'+pokenum)    
    
    imgPokeGallery.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokenum +'.png'    
    imgPokeGallery.alt=''
    imgPokeGallery.title=''
    imgPokeGallery.classList.add('gallery_poke')         
    pokemonFlex.appendChild(imgPokeGallery)
    divPokeGallery.appendChild(divPokeData)   
    divPokeData.setAttribute('id', 'pokeData' + pokenum)
    divPokeData.classList.add('pokeData')    

    document.getElementById('poke' + pokenum).style.width = '220px'
    document.getElementById('poke' + pokenum).style.height = '250px'
    

    obtenerDatosAPI(pokeURL).then(datos => {
      const name = (datos.name)
      const ability = (datos.abilities[0].ability.name)
      const typeP = (datos.types[0].type.name)
      
      if (typeP == 'fire'){
        document.getElementById('poke' + pokenum).style.backgroundColor = '#f36d54'
      }
      if (typeP == 'grass'){
        document.getElementById('poke' + pokenum).style.backgroundColor = '#e6f1ba'
      }
      if (typeP == 'water'){
        document.getElementById('poke' + pokenum).style.backgroundColor = '#c7dbee'
      }
      if (typeP == 'bug'){
        document.getElementById('poke' + pokenum).style.backgroundColor = '#fee965'
      }
      if (typeP == 'normal'){
        document.getElementById('poke' + pokenum).style.backgroundColor = '#0fffff'
      }
      if (typeP == 'electric'){
        document.getElementById('poke' + pokenum).style.backgroundColor = '#ffff00'
      }

      pPokeNameLabel.textContent = 'Nombre'
      pPokeAbilityLabel.textContent = 'Habilidad'
      pPokeName.textContent = name 
      pPokeAbility.textContent = ability
      pPokeTypeLabel.textContent = 'Tipo'
      pPokeType.textContent =  typeP
      
    }).catch(error => {
      console.error(error);
  }); 


  const addWindow = document.getElementById('poke'+pokenum)
    addWindow.addEventListener('click', function(){
      max_imgData(pokenum, pokeURL)
    });
  
  pPokeNameLabel.classList.add('label')
  pPokeAbilityLabel.classList.add('label')
  pPokeTypeLabel.classList.add('label')
  

  divPokeData.appendChild(divPokeNameLabel)  
  divPokeData.appendChild(divPokeAbilityLabel)
  divPokeData.appendChild(divPokeTypeLabel)

  divPokeNameLabel.appendChild(pPokeNameLabel)  
  divPokeNameLabel.classList.add('Labeldiv')  
  divPokeAbilityLabel.classList.add('Labeldiv')
  divPokeTypeLabel.classList.add('Labeldiv')
  divPokeNameLabel.appendChild(pPokeName)
  pPokeAbilityLabel.classList.add('Labeldiv')
  divPokeAbilityLabel.appendChild(pPokeAbilityLabel)
  divPokeAbilityLabel.appendChild(pPokeAbility)  
  divPokeTypeLabel.appendChild(pPokeTypeLabel)  
  divPokeTypeLabel.appendChild(pPokeType)
  pPokeName.classList.add("pData_Principal")
  pPokeAbility.classList.add("pData_Principal")
  pPokeType.classList.add("pData_Principal")  

return pokeURL
}

function max_imgData(pokenum, pokeURL){        
    

    document.getElementById("menu_left").style.filter = "blur(2px)"
    document.getElementById("menu_right").style.filter = "blur(2px)"
    document.getElementById("logo").style.filter = "blur(2px)"       
    document.getElementById("gallery").style.filter = "blur(2px)"    
    document.getElementById("home_menu").style.pointerEvents = "none"
    document.getElementById("news_menu").style.pointerEvents = "none"
    document.getElementById("trivia_menu").style.pointerEvents = "none"
    document.getElementById("about_menu").style.pointerEvents = "none"
    
    const elements = document.querySelectorAll('.gallery')    

    elements.forEach(element => {
      element.style.pointerEvents = 'none'
    });

    document.getElementById("poke_info").style.display = "flex"          
    
    obtenerDatosAPI(pokeURL).then(datos => {      
      const name = (datos.name)
      const typeP = (datos.types[0].type.name)
      const abilitiesCount = (datos.abilities.length)      
      const typeCount = (datos.types.length)
      let abilities = []
      let abilitiesText = ''
      let typeS = []
      let typeText = ''

      
      for (let i=0; i < abilitiesCount; i++ ){
        abilities[i] = (datos.abilities[i].ability.name)
        if (i==0) {
          abilitiesText = abilitiesText + abilities[i] 
        }
        else {
          abilitiesText = abilitiesText + '/' + abilities[i] 
        }
      }

      for (let i=0; i < typeCount; i++ ){
        typeS[i] = (datos.types[i].type.name)
        if (i==0) {
          typeText = typeText + typeS[i] 
        }
        else {
          typeText = typeText + '/' + typeS[i] 
        }
      }
      
            
      document.getElementById('tableName').innerHTML = name
      document.getElementById('tableAbilities').innerHTML = abilitiesText
      document.getElementById('tableType').innerHTML = typeText

      document.getElementById('poke_img').src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+ pokenum +'.png'

      if (typeP == 'fire'){
        document.getElementById('poke_info').style.backgroundColor = '#f36d54'
      }
      if (typeP == 'grass'){
        document.getElementById('poke_info').style.backgroundColor = '#e6f1ba'
      }
      if (typeP == 'water'){
        document.getElementById('poke_info').style.backgroundColor = '#c7dbee'
      }
      if (typeP == 'bug'){
        document.getElementById('poke_info').style.backgroundColor = '#fee965'
      }
      if (typeP == 'normal'){
        document.getElementById('poke_info').style.backgroundColor = '#0fffff'
      }
      if (typeP == 'electric'){
        document.getElementById('poke_info').style.backgroundColor = '#ffff00'
      }
      
    }).catch(error => {
      console.error(error);
  }); 
              
}    

function backStart() {
    document.getElementById("menu_left").style.filter = "none"
    document.getElementById("menu_right").style.filter = "none"
    document.getElementById("logo").style.filter = "none"       
    document.getElementById("gallery").style.filter = "none"    
    document.getElementById("home_menu").style.pointerEvents = "auto"
    document.getElementById("news_menu").style.pointerEvents = "auto"
    document.getElementById("trivia_menu").style.pointerEvents = "auto"
    document.getElementById("about_menu").style.pointerEvents = "auto"
    
    const elements = document.querySelectorAll('.gallery')

    elements.forEach(element => {
      element.style.pointerEvents = 'auto'
    });

    document.getElementById("poke_info").style.display = "none"
}
async function obtenerDatosAPI(pokeURL) {
    const respuesta = await fetch(pokeURL)
    const datos = await respuesta.json()
    return datos       
}    

function pokemonNewLoad() {  
//   const gallery = document.getElementById('gallery')          
  
//  for (let i= quantity + 1; i<=pokeCount; i++) {
//   const poke = document.getElementById('poke'+ i)
//   gallery.removeChild(poke)
//  } 

//  pokemonLoad(0, 21) 
}




