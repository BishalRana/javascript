document.getElementById("button1").addEventListener('click', ageChecker);
function ageChecker() {
    var enteredAge = document.getElementById("dob").value;

    var enteredRandomDate = document.getElementById("anyDate").value;

    var currentDate = new Date();
    var enteredAgeDate = new Date(enteredAge);
    var enteredAnyDate = new Date(enteredRandomDate);
    var age;

    console.log("Calculating age");
    if(enteredRandomDate !=""  )
    {

        if (enteredAnyDate < enteredAgeDate)
        {
            alert("You cannot enter date before your birthday.");
            return;
        }
        else
        {
            age = Math.round((enteredAnyDate.getTime()-enteredAgeDate.getTime())/31536000000);
        }

    }
    else
    {
        console.log("dob")
        age = Math.round((currentDate.getTime()-enteredAgeDate.getTime())/31536000000);


    }

    document.getElementById("output").innerHTML = "the age is " +age;

}
