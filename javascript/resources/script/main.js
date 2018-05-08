//console.log("hello testing!");
//
////var is the declaration of a variable
////"name" is what we have decided to call it
//var name = "Bishal";
//var job;
//var salary;
//
//job = "Developer";
//salary = 25000;
//
////data types for javascript numbers,string , boolean ,undefined and null
//console.log(job);
//
//var 1Student;//variable declaration does not start with number
//var _1Student;//underscore can be added before the number
//var student;//javascript is case sensitive
//var Student;
//
//

//window.alert("hello world");
//var ele = document.getElementById("demo");
//ele.innerHTML = "Hello world";

//function formInput(){    
//    document.getElementById("output").innerHTML = document.getElementById("firstIput").value;
//}

//set up an eventListener on button click
//document.getElementById("button1").addEventListener("click",formInput);

//collect a user value from the webpage DOM and display
//document.getElementById("secondSpan").innerHTML = "First Input :"+document.getElementById("firstSpan").innerHTML;
document.getElementById("btn1").addEventListener("click",firstValue);
function firstValue(){
    document.getElementById("output").innerHTML = document.getElementById("firstInput").value;
}

//4
document.getElementById("button1").addEventListener("click",sum);

function sum(){
    var sum = parseInt(document.getElementById("firstInput").value) + parseInt(document.getElementById("secondInput").value);
    document.getElementById("output").innerHTML = sum;
}

//5
document.getElementById("button2").addEventListener("click",large);

function large(){
    var firstInput = parseInt(document.getElementById("firstInput").value);
    var secondInput = parseInt(document.getElementById("secondInput").value);
    
    var largeNumber;
    
    if(firstInput > secondInput){
       largeNumber = firstInput;
    }else{
        largeNumber = secondInput;
    }    
    document.getElementById("output").innerHTML = largeNumber;
}

//6
document.getElementById("button3").addEventListener("click",check);
function check(){
    var firstInput = parseInt(document.getElementById("firstInput").value);
    var secondInput = parseInt(document.getElementById("secondInput").value);
    var diff = firstInput - secondInput;
    var outputElement = document.getElementById("output");
    if(diff == 0){
        outputElement.innerHTML = "Same";   
    }else{
        outputElement.innerHTML = "Different";
    }            
}

//7
document.getElementById("button4").addEventListener("click",prepost);
function prepost(){
    var firstInput = parseInt(document.getElementById("firstInput").value);    
    document.getElementById("output").innerHTML = (firstInput - 1)+","+(firstInput +1);
}

//8
//(a+b)*c and (a+b+c)
document.getElementById("button5").addEventListener("click",difference);
function difference(){
    var firstInput = parseInt(document.getElementById("firstInput").value);
    var secondInput = parseInt(document.getElementById("secondInput").value);
    var thirdInput = parseInt(document.getElementById("thirdInput").value);
    
    var res1 = (firstInput + secondInput)*thirdInput;
    var res2 = (firstInput + secondInput + thirdInput);
    
     document.getElementById("output").innerHTML =  res1 - res2;
    
}

