//Mistakes:
// Cant be tha same name than the function hahaha

var date = new Date(); // It will only update the fuctions if the page is refreshed 


function getDate() {
    //var date = new Date();
    var day = date.getDay();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
}

function getTime() {
    //var date = new Date(); // If this comes from global variable it wont update
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}

function main() {
    getDate();
    getTime();
    setInterval(getTime, 100);
}