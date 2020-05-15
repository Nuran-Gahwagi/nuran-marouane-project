window.visitor;
$(document).ready(function() { 

var quotes = [
{   "quote" : "You cannot change the circumstances but you can change yourself.",
	"writer" : "Jim Rohn"
},

 { "quote" : "Be yourself, everyone else is already taken.",
    "writer" : "Oscar Wilde"
 },

 { "quote" : "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "writer" : "Mahatma Gandhi"
},

];

$.getJSON('https://type.fit/api/quotes', function(data){
	var index = Math.floor(Math.random() * data.length)
  $("#quote").text(data[index].text)
  $("#auth").text(data[index].author)
  
})
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var t = new Date();
  var hr = t.getHours();
  var min = t.getMinutes();
  var displayTime = hr + ":" + min;
  document.getElementById("time").innerHTML = displayTime;
}

function myDate() {
	var d = new Date();
	 document.getElementById("date").innerHTML = d.toLocalDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
	 console.log(12)
}


$("#btn").click(function(){
    $("#txt").slideUp("slow");
    $("#btn").hide();


  });




})