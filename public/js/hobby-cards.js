//HOBBY CARDS
const hobbyDeck = document.getElementById('hobby-card-deck');
const bounds = hobbyDeck.getBoundingClientRect();
const xPos = bounds.left + window.scrollX;
const yPos = bounds.top + window.scrollY;

console.log('X/Left:', xPos);
console.log('Y/Top:', yPos);


const hobbyCards = document.getElementsByClassName('hobby-card');

let activeCard = null;
let offsetX = 0;
let offsetY = 0;
let zIndex = 1;

for (const hobbyCard of hobbyCards) {
    hobbyCard.addEventListener("mousedown", (e) => {
        activeCard = hobbyCard;

        // Bring this card to the front
        zIndex++;
        activeCard.style.zIndex = zIndex;

        // Calculate cursor offset relative to the card
        offsetX = e.clientX - activeCard.offsetLeft;
        offsetY = e.clientY - activeCard.offsetTop;

        // Start dragging
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
};

function handleMouseMove(e) {
    if (!activeCard) return;

    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    activeCard.style.left = `${newX}px`;
    activeCard.style.top = `${newY}px`;
}

function handleMouseUp() {
    activeCard = null;

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
}

function organizeCards(){
    let setLocationY = yPos + 2;
    for (const hobbyCard of hobbyCards) {
        hobbyCard.style.top = `${setLocationY}px`;
        setLocationY+= 5;
    };
};
organizeCards();