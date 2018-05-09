//6.create a while loop that displays the numbers 1 to 10 onto the webpage.
document.getElementById("button1").addEventListener("click",displayNumbers);
function displayNumbers(){
    var number = 1;
    var res = "";
    
    do{
        res = res + "Current number "+number+"<br>";
        number++;
    }while(number < 10);
    
    document.getElementById("output").innerHTML = res;
}