//1.Collect 3 user inputs and allocate them to three members of a new array.Display the array on the webpage
//document.getElementById("btn1").addEventListener("click",userInputsEvaluation);
function userInputsEvaluation(){
    var firstInput = document.getElementById("firstInput").value;
    var secondInput =  document.getElementById("secondInput").value;
    var thirdInput = document.getElementById("thirdInput").value;
    
    var inputs = [firstInput,secondInput,thirdInput];
    
    document.getElementById("display").innerHTML = inputs;
}

//2.Collect a user input and allocate it to a new array using the push method
//Display the array and the length of the array (number of elements) using array.length on the webpage

//document.getElementById("btn1").addEventListener("click",arrayPush);
function arrayPush(){
    var inputs = [];
    inputs.push(document.getElementById("firstInput").value);
    
    document.getElementById("display").innerHTML = inputs + " : length of array: "+inputs.length;
}

//3.Add and remove first and last elements on and off an array using shift,unshift,push and pop methods
//document.getElementById("btn1").addEventListener("click",addAndRemove);
 var fruits = ["apple", "orange","grapes","watermelon"];

//document.getElementById("pushBtn").addEventListener("click",pushArray);
//document.getElementById("popBtn").addEventListener("click",popArray);
//document.getElementById("shiftBtn").addEventListener("click",shiftArray);
//document.getElementById("unshiftBtn").addEventListener("click",unshiftArray);

function pushArray(){
    var value = document.getElementById("lab22input").value;
    fruits.push(value);//push adds the element to the last position of an array
    displayArrayElements();
}

function popArray(){
    fruits.pop();//pop removes the last element of an array
    displayArrayElements();
}

function unshiftArray(){
    var value = document.getElementById("lab22input").value;
    fruits.unshift(value);//unshift add the element at first position of an array
    displayArrayElements();
}

function shiftArray(){     
    fruits.shift();  //shift removes the first element form the array
    displayArrayElements();
}

function displayArrayElements(){
    console.log(fruits);
    document.getElementById("lab22result").innerHTML = fruits;
}

function addAndRemove(){    
    console.log(fruits);
    
    fruits.shift();
    console.log(fruits);
    fruits.unshift("sugarcane");
    console.log(fruits);
    
    fruits.pop();
    console.log(fruits);
    fruits.push("carrot");
    console.log(fruits);
    
}


//4.Add to an array at a specific index point in the array
//document.getElementById("btn1").addEventListener("click",specificAdd);
function specificAdd(){
    var fruits = ["apple", "orange","grapes","watermelon"];
    console.log(fruits);
    fruits[fruits.length] = "carrot";
    console.log(fruits);
    fruits.splice(3,0,"Avogado");
    console.log(fruits);
}

//5.Create an array variable with 10 elements and using a for loop display each elements on the webpage
//document.getElementById("btn1").addEventListener("click",arrayLoop);
function arrayLoop(){
    var fruits = ["apple", "orange","grapes","watermelon","Avogado","Carrot","mango","BlackBerry","BlueBerry","Banana"];
    var fruitIndex;
    var fruitList = "";
    for(fruitIndex=0;fruitIndex < fruits.length;fruitIndex++ ){
        fruitList = fruitList + fruits[fruitIndex] +"<br>";
    }
    
    document.getElementById("display").innerHTML = fruitList;
}

//6.Create an array of Countries England, France ,Italy, Mexico,Poland,Russia,China,Greece,Egypt,India
//Create a user text input field.User can enter a country.The array is searched and when a match is found the position
//in the array is displayed and the user is given a message to inform whether the country is present or not in the array
document.getElementById("btn1").addEventListener("click",matchedCountry);
function matchedCountry(){
     var countries = ["England","France","Italy","Mexico","Poland","Russia","China","Greece","Egypt","India"];
    
    var userInput = document.getElementById("country").value;
    var index = countries.findIndex(item => userInput.toLowerCase() === item.toLowerCase());
    
    console.log("index"+index);
    
    //var index = countries.indexOf(userInput);
    var displayElement = document.getElementById("display");
    if(index != -1){        
        displayElement.innerHTML = "the index of the country is "+index+" and the country is "+countries[index];
    }else{
        displayElement.innerHTML = "Country "+userInput+" not found";
    }
}

//iife immediately invoked function expression
(function(){
    var countries = ["England","France","Italy","Mexico","Poland","Russia","China","Greece","Egypt","India"];
    
    var userInput = "Italy";
    
    var index = countries.indexOf(userInput);
    if(index != -1){
       console.log("the index of the country is "+index+" and the country is "+countries[index]);    
    }else{
        console.log("Country "+userInput+" not found");               
    }
}());
