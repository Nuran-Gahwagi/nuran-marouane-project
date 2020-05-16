window.visitor;
$(document).ready(function() { 

$.getJSON('https://type.fit/api/quotes', function(data){
	setInterval(function(){
    var index = Math.floor(Math.random() * data.length)
  $("#quote").text(data[index].text)
  $("#auth").text(data[index].author)
  },10000)  
})

  
var myVar = setInterval(setCurrentTimeAndDate, 1000);
function setCurrentTimeAndDate(){
  var now = new Date();
  $('#time').html(now.getHours()+":"+now.getMinutes())
  $('#date').html(now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }));
}

$('#txt').keypress(function(e) {
    var src = $('#txt').val()
    if(e.which == 13) {
    $('#head').text('Welcome, ' + src)
    $("#txt").slideUp("slow");
    $("#btn").hide();
    $("#cheering").text("Here are the Quotes of the day.")
      }
    })
  /*  var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
 $('body').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});

$.getJSON('pictures', function(images){
  setInterval(function(){
    var index = Math.floor(Math.random() * images.length)
  $("background-image").css(images[index])
  },1000)  
  })
*/




})




