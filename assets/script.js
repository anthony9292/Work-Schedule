//tells engine to load html & css first 
$(document).ready(function(){ 
   //displays the date & time 
$("#today").text(moment().format('MMMM Do YYYY, h:mm:ss a')); 
$(".saveBtn").on("click", function () { 
//get the nearby values
console.log(this); 
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id"); 
//sets the items into local storage.
localStorage.setItem(time, text); 
})
//load any save from the saved data from LocalStorage
$("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


function onupdate() { 
//gets the current number of hours 
var currentHour = moment().hour(); 
//loops over time blocks 
$(".time-block").each(function(){ 
var blockHour = parseInt($(this).attr("id").split("hour")[1]);
     console.log( blockHour, currentHour)
     //checks if we have moved past the listed time, clicks into html/css disposed classed of past, present, or future 
     if (blockHour < currentHour) { 
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present"); 
     } else if ( blockHour === currentHour) { 
       $(this).removeClass("past");
       $(this).addClass("present");
       $(this).removeClass("future");
     } else { 
   $(this).removeClass("present"); 
   $(this).removeClass("past");
   $(this).removeClass("future")
     }
})

}

 onupdate(); // re-runs the function 
})




