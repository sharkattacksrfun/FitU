
window.onload = function () {
    document.addEventListener("deviceready", init, false);
    //init();
};

function init(){
    var options = {
    quality: 50,
    sourceType: Camera.PictureSourceType.CAMERA,
    encodingType: Camera.EncodingType.JPEG,
    correctOrientaition: true,
    allowEdit: true,
    targetHeight: 100
    
   
    
   
    }
    
    $("#takepic").on("click", takepic); 
    
    function takepic() {
    console.log("works")
    navigator.camera.getPicture(success, error, options)
}
    function success(imageData){
        var desc = "Walk";
        $("#result").append("<img src='" + imageData + "'>");
        $("#cardTitle").append(desc);
        var totMin = document.getElementById("min");
        var totSec = document.getElementById("sec");
        $("#descript").append(totMin, ":", totSec);
        document.location.href = "#results";
        var minNum = document.getElementById("min").innerHTML;
        var timeNum = Number(minNum);
        var totCals = actCals * minNum;
    
        //date generator from: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
        
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

        if(dd<10) {
        dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = mm + '/' + dd + '/' + yyyy;
        $("#date").append(today);
        
        
        
        $("#Cals").append(totCals);
      
        
        
        
        
        
        
    };
    
    function error(message){
        //document.write(message)
    };
    
    $("#journalSubmit").on("click", journalEntry)
    
    function journalEntry () {
        var jorn = prompt("Add a description of your workout!");
    
        
        $("#journal").append(jorn);
   
    }
    
    var actCals;
      
    function setmoodGreat () {
    takepic();
    $("#mood").append("Great!");    
    }
    
    $("#setmoodGreat").on("click", setmoodGreat);
    
    function setmoodBad () {
        takepic();
        $("#mood").append("Awful!");
    }
    
    $("#setmoodBad").on("click", setmoodBad);
    
    function setmoodKBad () {
        takepic();
        $("#mood").append("Bad!");
        
    }
    
    $("#setmoodKBad").on("click", setmoodKBad);
    
    function setmoodMeh () {
        takepic();
        $("#mood").append("Meh!");
    }
    
    $("#setmoodMeh").on("click", setmoodMeh);
    
    function setmoodGood () {
        takepic();
        $("#mood").append("Good!");
    }
    
    $("#setmoodGood").on("click", setmoodGood);
    
  



$("#startTime").on("click", setWalk);

function setWalk () {
    document.location.href = "#time";
    actCals = 3;
    desc = "Walk";
}

$("#startRun").on("click", setRun);

function setRun (){
    actCals = 13;
    document.location.href = "#time";
    desc = "Run";
}

$("#startYoga").on("click", startYoga);

function startYoga () {
    actCals = 3;
    document.location.href = "#time";
    desc = "Yoga"
}

$("#startJacks").on("click", startJacks);

function startJacks (){
    actCals = 5;
    document.location.href = "#time";
    desc = "Calisthenics"
}


$("#resetWork").on("click", newWorkout);

function newWorkout (){
    document.location.href = "#select";
    location.reload();  
  
}





//New timer from: https://stackoverflow.com/questions/12487352/how-do-i-pause-and-resume-a-timer/12487467

$('#startButton').on("click", TIMER);


var Clock = {
  totalSeconds: 0,

  start: function () {
    var self = this;

    this.interval = setInterval(function () {
      self.totalSeconds += 1;

      
      $("#min").text(Math.floor(self.totalSeconds / 60 % 60));
      $("#sec").text(parseInt(self.totalSeconds % 60));
    }, 1000);
  },

  pause: function () {
    clearInterval(this.interval);  
    delete this.interval;
    
  },

  resume: function () {
    if (!this.interval) this.start();
  }
};

function TIMER (){   
Clock.start();
};

function RESET (){
    
}



$('#resumeButton').click(function () { Clock.resume(); });
$("#resetButton").on("click", RESET);







//popup box code from https://www.w3schools.com/howto/howto_css_modals.asp

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    
     Clock.pause();
    
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}