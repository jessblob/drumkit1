let A = document.getElementById("A");
A.addEventListener("click", myPlayA)
function myPlayA(){
    let audio = new Audio("boom.wav")
    audio.play();
   
}
let S = document.getElementById("S");
S.addEventListener("click", myPlayS)
function myPlayS(){
    let audio = new Audio("clap.wav")
    audio.play();
   
}

let D = document.getElementById("D");
D.addEventListener("click", myPlayD)
function myPlayD(){
    let audio = new Audio("hihat.wav")
    audio.play();
}
let F = document.getElementById("F");
F.addEventListener("click", myPlayF)
function myPlayF(){
    let audio = new Audio("kick.wav")
    audio.play();
}
let G = document.getElementById("G");
G.addEventListener("click", myPlayG)
function myPlayG(){
    let audio = new Audio("openhat.wav")
    audio.play();
}
let H = document.getElementById("H");
H.addEventListener("click", myPlayH)
function myPlayH(){
    let audio = new Audio("ride.wav")
    audio.play();
}
let J = document.getElementById("J");
J.addEventListener("click", myPlayJ)
function myPlayJ(){
    let audio = new Audio("snare.wav")
    audio.play();
}
let K = document.getElementById("K");
K.addEventListener("click", myPlayK)
function myPlayK(){
    let audio = new Audio("tink.wav")
    audio.play();
}
let L = document.getElementById("L");
L.addEventListener("click", myPlayL)
function myPlayL(){
    let audio = new Audio("hihat.wav")
    audio.play();
   
}
document.addEventListener("keydown", (event) =>{
    let key = event.key
    if (key = 'a'){
        myPlayA()
    }
    else if (key = 's'){
        myPlayS()
    }
    else if (key = 'd')
       { myPlayD()}
    else if (key = 'f')
        {myPlayF()}
    else if (key = 'g')
        {myPlayG()}
    else if (key = 'h'){
        myPlayH()
    }
    else if (key = 'j'){
        myPlayJ()
    }
    else if (key = 'k'){
        myPlayK()}
    else if (key = 'l'){
        myPlayL()
    }})
    

    