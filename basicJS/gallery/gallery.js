var imageNameArray = ["gecko0.jpg", "gecko1.jpg", "gecko2.jpg", "gecko3.jpg"]
var i = 1;
var right = () => {
    if(i===3) i = 0 
    else i++
    document.getElementById("image").src = "images/"+imageNameArray[i];
    
}

var left = () => {
    if(i===0) i = 3 
    else i--
    document.getElementById("image").src = "images/"+imageNameArray[i];
 
}
