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

    miFuncion() 
    .then (data => {
        const pokemon = data     
        resolve(pokemon)
    })
    .catch (error => {
        console.log(error)
    });

    console.log(pokemon)
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

function miFuncion() {
    return new Promise((resolve, reject) => {
      fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => response.json())
        .then(data => {         
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
    
  }
