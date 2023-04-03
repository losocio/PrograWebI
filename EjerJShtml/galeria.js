var img = 1;

function right(){
    img++;
    if(img > 4)
        img = 1;
    document.getElementById("imagen").src="gecko"+ img +".jpg";
}


function left(){
    img--;
    if(img < 1)
        img = 4;
    document.getElementById("imagen").src="gecko"+ img +".jpg";
}