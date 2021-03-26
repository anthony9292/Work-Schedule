$("#today").text(moment().format("Do MMMM YYYY, h:mm:ss a"));

   setInterval(function() { 

$("#today").text(moment().format("Do MMMM YYYY, h:mm:ss a"));


   }, 1000)

   const createContainer = $(".container");
   const saveButton = document.querySelectorAll("button");
   const timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
   const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];


for(let i= 0; i < timeList.length; i++) { 
   let createRow = $("< class='row time-block'>").attr("id",timeId[i]);
   let createTime = $("< class='hour col-1'>") 


   let createTextarea = $("<textarea class='col-10'>");
   createTextarea.attr("id", timeList[i]);

   let createButton = $("<button type='button' class='saveBtn col-1 far fa-save'>");

   createContainer.append(createRow);
   createTime.text(timeList[i]);
   createRow.append(createTime);

   createRow.append(createTextarea); 
   createButton.text();
   createRow.append(createButton);

}

   localStorageFunction();

   function localStorageFunction() { 

    for (let index = 0; index < numbers.length; index++) { 
       $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));
    }
   }

   $("button").on("click", function (event) { 
     event.preventDefault(); 

     for (let index = 0; index < numbers.length; index++) { 
        localStorage.setItem('textarea' + String(index + 1 ), $("textarea")[index].value)

     }
   });




function updateByTheHour() { 
var currentHour = moment().hours();
$(".time-block").each(function ()  { 
  var blockHour = parseInt($(this).attr("id").split(" ")[0]);

    if (blockHour < currentHour) { 
     $(this).addClass("past"); 
    } else if (blockHour === currentHour) { 
        $(this).removeClass("past");
        $(this).addClass("present"); 
    } else {  
         $(this).removeClass("past");
         $(this).removeClass("present");
         $(this).addClass("future"); 
    }

});



}

   








