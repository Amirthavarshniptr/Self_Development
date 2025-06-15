let cards=[]
let sum=0
let message =""
let isAlive = true
let hasblackjack = false
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function getRandomCard(){
    let card=Math.floor(Math.random()*13) +1
    if (card==1){
        return 11
    }
    else if (card>10){
        return 10
    }
    else{
        return card
    }
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard,secondCard]
    sum=firstCard+secondCard
    isAlive = true
    hasblackjack = false
    renderGame()
}

function renderGame(){
    sumEl.textContent="Sum: "+sum
    cardsEl.textContent = "Cards: "
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent+=cards[index]+" "
    }
if (sum<21){
    message = "Do you want to draw a new card?"
}
else if(sum===21){
    message ="Wohoo! You've got Blackjack"
    hasblackjack=true
}
else{
    message = "You're out of the game!"
    isAlive = false
}
messageEl.textContent = message
}

function newGame(){
    if (isAlive === true && hasblackjack === false){
    console.log("Drawing a new card from the deck!")
    let newcard=getRandomCard()
    sum+=newcard
    cards.push(newcard)
    renderGame()}
}