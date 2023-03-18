addPokemon()

function addPokemon() {
    const galleryAddChild = document.getElementById("gallery")    
    console.log(galleryAddChild)
}

function max_imgData(){        
    document.getElementById("menu_left").style.filter = "blur(2px)"
    document.getElementById("menu_right").style.filter = "blur(2px)"
    document.getElementById("logo").style.filter = "blur(2px)"       
    document.getElementById("gallery").style.filter = "blur(2px)"    
    document.getElementById("home_menu").style.pointerEvents = "none"
    document.getElementById("news_menu").style.pointerEvents = "none"
    document.getElementById("trivia_menu").style.pointerEvents = "none"
    document.getElementById("about_menu").style.pointerEvents = "none"
    
    const elements = document.querySelectorAll('.gallery_poke')

    elements.forEach(element => {
      element.style.pointerEvents = 'none'
    });

    document.getElementById("poke_info").style.display = "flex"   
    
    // fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    // .then (res => res.json())
    // .then (data => console.log(data))
    // .catch (error => console.log(error))
    
    async function obtenerDatosAPI() {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        const datos = await respuesta.json()
        return datos       
      }    

      obtenerDatosAPI().then(datos => {
        const name = (datos.species.name)
        const ability = (datos.abilities[1].ability.name);

        pokeData(name,ability)
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
    
    const elements = document.querySelectorAll('.gallery_poke')

    elements.forEach(element => {
      element.style.pointerEvents = 'auto'
    });

    document.getElementById("poke_info").style.display = "none"
}

function pokeData (name, ability) {
    console.log(name, ability)
}