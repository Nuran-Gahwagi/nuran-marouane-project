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
var myVar = setInterval(setCurrentTimeAndDate, 1000);
function setCurrentTimeAndDate(){
  var now = new Date();
  $('#time').html(now.getHours()+":"+now.getMinutes())
  $('#date').html(now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }));
}
/*function myTimer() {
  var t = new Date();
  var hr = t.getHours();
  var min = t.getMinutes();
  var displayTime = hr + ":" + min;
  document.getElementById("time").innerHTML = displayTime;
}
*/

$("#btn").click(function(){
    $("#txt").slideUp("slow");
    $("#btn").hide();


  });




})