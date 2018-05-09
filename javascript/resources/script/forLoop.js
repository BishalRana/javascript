//3.Scope:declare the same variable inside a function (local) and outside(global),giving it different values.Display the two values.
function scope(){
    var a = 10;
    console.log(a);
}

var a = 40;

console.log(a);

//4.Create a function that contains a for loop that loops through from 1 to 50 and displays the number on the webpage.
document.getElementById("button1").addEventListener("click",displayNumbers);
function displayNumbers(){
    var res = 0;
    var number;
    for(number= 1;number <= 50;number++){
        res = res + number+" <br> ";       
    }
    
     document.getElementById("output").innerHTML = res;
}

//4a.Write a for loop that will iterate from 0 to 20 ;For each iteration check if the number is either odd or even.(displaying the result on the screen)
document.getElementById("button2").addEventListener("click",evenOrOdd);
function evenOrOdd(){
    var number;
    var res = 0;
    for(number = 0;number <= 20; number++){
        var status = number%2;
        if(status == 0){
            res = res + number + " is even.<br>";   
        }else{
            res = res + number + " is odd.<br>";
        }
    }
    
    document.getElementById("output").innerHTML = res;
}
