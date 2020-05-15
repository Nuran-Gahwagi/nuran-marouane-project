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


/*
function randomQuotes(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

 
// $(".quote-text").text('dhhdhdhd')

*/

})