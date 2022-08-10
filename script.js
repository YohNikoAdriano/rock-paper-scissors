const imageLink = ["https://cdn-icons-png.flaticon.com/512/7218/7218720.png", "https://cdn-icons-png.flaticon.com/512/7218/7218708.png", "https://cdn-icons-png.flaticon.com/512/7218/7218658.png"];

let player1ImgLoc = document.querySelector(".player1-img");
let player2ImgLoc = document.querySelector(".player2-img");
let player1ScoreLoc = document.querySelector(".score1");
let player2ScoreLoc = document.querySelector(".score2");
let player1Score = 0;
let player2Score = 0;
let player1NameLoc = document.querySelector(".player1Name");
let player2NameLoc = document.querySelector(".player2Name");
let inputLoc = document.querySelector(".input");
let validation1MessageLoc = document.querySelector(".validation1"); 
let validation2MessageLoc = document.querySelector(".validation2"); 
let inputFilled = false;
let inputTurn;
let turn = 0;
let playButtonLoc = document.querySelector(".play");
let finalScoreLoc = document.querySelector(".final");

function play(){
    if(checkTurnInput() === true){
        inputTurn = inputLoc.value;
        let random1 = Math.floor(Math.random()*3);
        let random2 = Math.floor(Math.random()*3);
        player1ImgLoc.setAttribute("src", imageLink[random1]);
        player2ImgLoc.setAttribute("src", imageLink[random2]);
        checkGame(random1, random2);
        turn++;
        checkTurn();
    };
    
}

function checkTurnInput(){
    if(inputLoc.value == ""){
        validation1MessageLoc.classList.remove("d-none");
    }else if(inputLoc.value < 1 || inputLoc.value > 10){
        validation2MessageLoc.classList.remove("d-none");
    }else{
        validation1MessageLoc.classList.add("d-none");
        validation2MessageLoc.classList.add("d-none");
        inputFilled = true;
        return inputFilled;
    }
}

function checkTurn(){
    if(turn >= inputTurn){
        playButtonLoc.classList.add("disabled");
        finalScoreLoc.classList.remove("d-none");
        if(player1Score > player2Score){
            player1NameLoc.innerHTML = "👑 Player 1";
        }else if(player2Score > player1Score){
            player2NameLoc.innerHTML = "Player 2 👑";
        }
    }
}

function checkGame(random1, random2){
    if(random1 === 0 && random2 === 1){
        player2Score++;
    }else if(random1 === 0 && random2 === 2){
        player1Score++;
    }else if(random1 === 1 && random2 === 0){
        player1Score++;
    }else if(random1 === 1 && random2 === 2){
        player2Score++;
    }else if(random1 === 2 && random2 === 0){
        player2Score++;
    }else if(random1 === 2 && random2 === 1){
        player1Score++;
    }
    player1ScoreLoc.innerHTML = player1Score;
    player2ScoreLoc.innerHTML = player2Score;
}