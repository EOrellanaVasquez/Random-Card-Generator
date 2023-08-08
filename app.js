/*Definir los array con los elementos de la carta */
const cardSimbols =  ["♦", "♥", "♠", "♣"];
const cardContent = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

/*Definir índices para variables aleatorias */
const randomCardSimbolIndex = Math.floor(Math.random() * cardSimbols.length);
const randomCardContentIndex = Math.floor(Math.random() * cardContent.length);

/*Definir variables aleatorias */
const randomCardSimbol = cardSimbols[randomCardSimbolIndex];
const randomCardContent = cardContent[randomCardContentIndex];

/*Hacer que las funciones corran al entrar a la página con los colores debidos*/
function onLoadTopside() {
    const cardTopsideGenerator = document.getElementById("topsideSimbol");
    cardTopsideGenerator.innerHTML = randomCardSimbol;
    cardTopsideGenerator.style.fontSize = "60px"
    if (randomCardSimbol == "♦" || randomCardSimbol == "♥") {
        cardTopsideGenerator.style.color = "red";
    }
}

function onLoadContent() {
    const cardContentGenerator = document.getElementById("cardContent");
    cardContentGenerator.innerHTML = randomCardContent;
    cardContentGenerator.style.fontSize = "150px"
    if (randomCardSimbol == "♦" || randomCardSimbol == "♥") {
        cardContentGenerator.style.color = "red";
    }
}

function onLoadBotside() {
    const cardBotsideGenerator = document.getElementById("botsideSimbol");
    cardBotsideGenerator.innerHTML = randomCardSimbol;
    cardBotsideGenerator.style.fontSize = "60px"
    cardBotsideGenerator.style.rotate = "180deg";
    if (randomCardSimbol == "♦" || randomCardSimbol == "♥") {
        cardBotsideGenerator.style.color = "red";
    }
}

function onLoadPageContainer(){
    const loadPageContainer = document.getElementById("pageContainer");
    loadPageContainer.style.paddingLeft = "200px";
    loadPageContainer.style.paddingRight = "200px";
    loadPageContainer.style.paddingTop = "15px";
}

/*Definir una función que genere aleatoreamente los elementos al cargar la página */
window.onload = () => {
    onLoadTopside();
    onLoadContent();
    onLoadBotside();
    onLoadPageContainer();
};


/*Hacer que el botón recargue la página */
const buttonRefreshPage = document.getElementById("refreshButton");
buttonRefreshPage.addEventListener('click', () => {
    location.reload();
});

