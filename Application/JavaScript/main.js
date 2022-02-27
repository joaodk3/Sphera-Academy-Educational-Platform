// Declares the variables
var goalButton1 = document.getElementById("goal-option1");
var goalButton2 = document.getElementById("goal-option2");
var goalButton3 = document.getElementById("goal-option3");

var goal1p = document.getElementById("description1");
var goal2p = document.getElementById("description2");
var goal3p = document.getElementById("description3");

// Functions that opens and close the goals <p> 

let showGoal1 = function () {
    if (goal1p.style.display == "none") {
    goal1p.style.display = "block";
    goal2p.style.display = "none";
    goal3p.style.display = "none";
}
}

goalButton1.onclick = showGoal1;

let showGoal2 = function () {
    if(goal2p.style.display == "none") {
        goal2p.style.display = "block";
        goal1p.style.display = "none";
        goal3p.style.display = "none";
    } else {
        goal2p.style.display = "none";
    }
    }
    
    goalButton2.onclick = showGoal2;

    let showGoal3 = function () {
        if(goal3p.style.display == "none") {
            goal3p.style.display = "block";
            goal1p.style.display = "none";
            goal2p.style.display = "none";
        } else {
            goal3p.style.display = "none";
        }
        }
        
        goalButton3.onclick = showGoal3;


