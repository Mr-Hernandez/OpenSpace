document.getElementById("click-me").addEventListener("click", function() {
    let words = document.getElementById("text-area1").value;
    console.log(words);
    if (words == "Enter Password") {
        console.log("twas true");
        document.getElementById("check1").disabled = false;
        document.getElementById("check2").disabled = false;
        document.getElementById("check3").disabled = false;
        document.getElementById("check4").disabled = false;
        document.getElementById("check5").disabled = false;
        document.getElementById("check6").disabled = false;

        document.getElementById("myRange1").disabled = false;
        document.getElementById("myRange2").disabled = false;
        document.getElementById("myRange3").disabled = false;
        document.getElementById("myRange4").disabled = false;
        document.getElementById("myRange5").disabled = false;
        document.getElementById("myRange6").disabled = false;

        document.getElementById("launch-button").disabled = false;
    }
})

document.getElementById("launch-button").addEventListener("click", function() {

    if(systemsGo() == true) {
        countDown();
        setTimeout(function() {launcher()}, 12000);
        
    } else {
        console.log("no go");
    }

})

function systemsGo() {
    if (document.getElementById("check1").checked == true 
    &&  document.getElementById("check2").checked == true
    &&  document.getElementById("check3").checked == true
    &&  document.getElementById("check4").checked == true
    &&  document.getElementById("check5").checked == true
    &&  document.getElementById("check6").checked == true
    &&  document.getElementById("myRange1").value == 50
    &&  document.getElementById("myRange2").value == 50
    &&  document.getElementById("myRange3").value == 50
    &&  document.getElementById("myRange4").value == 50
    &&  document.getElementById("myRange5").value == 50
    &&  document.getElementById("myRange6").value == 50) {
        return true;
    } else {
        return false;
    }
}

function countDown() {
    let timer = 10;
    let timesRun = 0;
    let interval = setInterval(function(){
    document.getElementById("countdown").play();   
        if(timesRun == 10){
            console.log("LAUNCH!");
            document.getElementById("text-area1").value = "LIFTOFF!";
            clearInterval(interval);
        } else {
            document.getElementById("text-area1").value = "T-minus " + (timer-timesRun);
            console.log("T-minus " + (timer-timesRun));
            timesRun += 1;
        }

    }, 1000); 
}

function launcher() {
    console.log("inlauncher");
    let timesRun2 = 0;
    let pixels = 10;
    let rocket = document.getElementsByClassName("rocket")[0];
    document.getElementById("r-sound").play();
    let interval2 = setInterval(function(){
        console.log("in translates");
        rocket.style.transform = "translateX(" + (pixels * (timesRun2 + 1)).toString() + "px)"
                                + "translateY(" + (-1 * pixels * (timesRun2 + 1)).toString() + "px)"
                                + "rotate(45deg)";
        // rocket.style.transform = "translateY(10px)";
        // rocket.style.transform = "rotate(45deg)";

        timesRun2 += 1;
        if(timesRun2 > 130) {
            console.log("Later Space Cowboy");
            clearInterval(interval2);
        }
    }, 100)
    
}