//wait for the Dom content to be loaded before running the game 
//get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    //"let button of buttons" is similar to using the iterations of i=0; i<element.longth; i++
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data type")==="submit"){
                alert("You clicked submit!");   
            }else {
                let gametype = this.getAttribute("data-type");
                alert("You clicked $(gameType");
            }
})
    }
})
function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}