/*Definir los array con los elementos de la carta */
const cardSymbols =  ["♦", "♥", "♠", "♣"];
const cardContent = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

/*Definir índices para variables aleatorias */
const randomCardSymbolIndex = Math.floor(Math.random() * cardSymbols.length);
const randomCardContentIndex = Math.floor(Math.random() * cardContent.length);

/*Definir variables aleatorias */
const randomCardSymbol = cardSymbols[randomCardSymbolIndex];
const randomCardContent = cardContent[randomCardContentIndex];

/*Hacer que las funciones corran al entrar a la página con los colores debidos*/
function onLoadTopside() {
    const cardTopsideGenerator = document.getElementById("topsideSymbol");
    cardTopsideGenerator.innerHTML = randomCardSymbol;
    cardTopsideGenerator.style.fontSize = "60px"
    if (randomCardSymbol == "♦" || randomCardSymbol == "♥") {
        cardTopsideGenerator.style.color = "red";
    }
}

function onLoadContent() {
    const cardContentGenerator = document.getElementById("cardContent");
    cardContentGenerator.innerHTML = randomCardContent;
    cardContentGenerator.style.fontSize = "150px"
    if (randomCardSymbol == "♦" || randomCardSymbol == "♥") {
        cardContentGenerator.style.color = "red";
    }
}

function onLoadBotside() {
    const cardBotsideGenerator = document.getElementById("botsideSymbol");
    cardBotsideGenerator.innerHTML = randomCardSymbol;
    cardBotsideGenerator.style.fontSize = "60px"
    cardBotsideGenerator.style.rotate = "180deg";
    if (randomCardSymbol == "♦" || randomCardSymbol == "♥") {
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