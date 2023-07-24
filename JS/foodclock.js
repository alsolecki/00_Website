//Variables and Selection

const select = document.querySelector('#sel')
const input = document.querySelector('input[type="button"]')
const foodPic = document.getElementById('placemat')

// Functions
function showDumplings() 
{
    let name = document.querySelector('.name')
    let place = document.querySelector('.restaurant')
    let desc = document.querySelector('.desc')
    
    name.textContent = "Mama's Special Dumpling" 
    place.textContent = 'China Bistro, Rockville'
    desc.textContent = "Mama's Dumplings with Pork, Shrimp and Napa Cabbage, pan fried and served with a vinegary dipping sauce"

    foodPic.classList.remove('pmFood2')
    foodPic.classList.remove('pmFood3')
    foodPic.classList.remove('pmFood4')
    foodPic.classList.remove('pmFood5')
    foodPic.classList.remove('pmFood6')
    foodPic.classList.add('pmFood1')

    /// Let coordinates of map show correct location




}

function showPapusas() 
{
    let name = document.querySelector('.name')
    let place = document.querySelector('.restaurant')
    let desc = document.querySelector('.desc')
    
    name.textContent = "Papusa Revueltas" 
    place.textContent = 'La Casita, Silver Spring'
    desc.textContent = 'Flour cakes filled with chopped fried pork and cheese, served with slaw and red sauce'

    foodPic.classList.remove('pmFood1')
    foodPic.classList.remove('pmFood3')
    foodPic.classList.remove('pmFood4')
    foodPic.classList.remove('pmFood5')
    foodPic.classList.remove('pmFood6')
    foodPic.classList.add('pmFood2')
}

function showPizza() 
{
    let name = document.querySelector('.name')
    let place = document.querySelector('.restaurant')
    let desc = document.querySelector('.desc')
    
    name.textContent = "Clam Pizza" 
    place.textContent = 'Frank Pepe Apizza, Bethesda'
    desc.textContent = 'New Haven style apizza with clams'

    foodPic.classList.remove('pmFood1')
    foodPic.classList.remove('pmFood2')
    foodPic.classList.remove('pmFood4')
    foodPic.classList.remove('pmFood5')
    foodPic.classList.remove('pmFood6')
    foodPic.classList.add('pmFood3')
}

function showBurger()
{
    let name = document.querySelector('.name')
    let place = document.querySelector('.restaurant')
    let desc = document.querySelector('.desc')
    
    name.textContent = "Cheeseburger & Fries" 
    place.textContent = 'Five Guys'
    desc.textContent = 'Little Cheeseburger with lettuce, tomato, onion, cheese, mayo, ketchup, pickles and jalapenos with a side of fries'

    foodPic.classList.remove('pmFood1')
    foodPic.classList.remove('pmFood2')
    foodPic.classList.remove('pmFood3')
    foodPic.classList.remove('pmFood5')
    foodPic.classList.remove('pmFood6')
    foodPic.classList.add('pmFood4')
}

function showWings()
{
    let name = document.querySelector('.name')
    let place = document.querySelector('.restaurant')
    let desc = document.querySelector('.desc')
    
    name.textContent = "Hot Wing Combo" 
    place.textContent = 'Wingstop'
    desc.textContent = 'Bone-in, mixed, hot flavor, extra crispy, with ranch dip and veggie sticks'

    foodPic.classList.remove('pmFood1')
    foodPic.classList.remove('pmFood2')
    foodPic.classList.remove('pmFood3')
    foodPic.classList.remove('pmFood4')
    foodPic.classList.remove('pmFood6')
    foodPic.classList.add('pmFood5')
}

function showLox()
{
    let name = document.querySelector('.name')
    let place = document.querySelector('.restaurant')
    let desc = document.querySelector('.desc')
    
    name.textContent = "Bagel with Nova Lox" 
    place.textContent = 'Jewish Deli (or home)'
    desc.textContent = 'Toasted Sesame Bagel open-faced with Nova Lox, plain cream cheese, red onion, tomato, capers and fresh dill'

    foodPic.classList.remove('pmFood1')
    foodPic.classList.remove('pmFood2')
    foodPic.classList.remove('pmFood3')
    foodPic.classList.remove('pmFood4')
    foodPic.classList.remove('pmFood5')
    foodPic.classList.add('pmFood6')
}


//EVENT LISTENERS

select.addEventListener("change", (event) => {
    let pick = event.target.value
        if(pick === 'dumpling') {showDumplings()} 
        if (pick === 'papusas') {showPapusas()}
        if (pick === 'pizza') {showPizza()}
        if (pick === 'burger') {showBurger()}
        if (pick === 'wings') {showWings()}
        if (pick === 'lox') {showLox()}
  });



  //GoogleMap API

  let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 39.093, lng: -77.153 },
    zoom: 15,
    mapTypeId: "satellite"
  });

  new google.maps.Marker({
    position: { lat: 39.093, lng: -77.153 },
    map: map,
    label: "A",
    title: "China Bistro",
    draggable: false,
    animation: google.maps.Animation.DROP,
    // icon: "images/mamaSpecialDumpling.jpg"

  })
}




initMap();
