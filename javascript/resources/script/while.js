//6.create a while loop that displays the numbers 1 to 10 onto the webpage.
document.getElementById("button1").addEventListener("click",displayNumbers);
function displayNumbers(){
    var number = 1;
    var res = "";
    while(number <= 10){
        res = res + "Current Number "+number + "<br>";
        number++;        
    }
    document.getElementById("output").innerHTML = res;
}