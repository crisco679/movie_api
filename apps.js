
$(function(){
    $.get('http://www.omdbapi.com/?t=Forrest+Gump&y=&plot=full&r=json').done(function(response){
    var movieData = response;
    console.log(movieData);
    $(".gump").append("<h1> " + movieData.Title + " </h1>");
    $(".gump").append("<p> " + movieData.Plot + " </p>");
  });
  $.get("http://www.omdbapi.com/?t=Good+Will+Hunting&y=&plot=full&r=json").done(function(response){
    var movieData = response;
    console.log(movieData);
    $(".hunting").append("<h1> " + movieData.Title + "</h1>");
    $(".hunting").append("<p> " + movieData.Plot + "</p>")
  });
  $.get("http://www.omdbapi.com/?t=Gladiator&y=&plot=full&r=json").done(function(response){
    var movieData = response;
    console.log(movieData);
    $(".gladiator").append("<h1> " + movieData.Title + "</h1>");
    $(".gladiator").append("<p> " + movieData.Plot + "</p>");
  });
$(".gump").append('<img src=\'forrestimage.jpeg\'>');
$(".hunting").append('<img class=\"huntingPicture\" src=\'goodwillimage.jpeg\'>');
$(".gladiator").append('<img class=\"gladiatorPicture\" src=\'gladiatorimage.jpg\'>')
$(".gumpButton").on("click",function(){
  $(".gump").toggle("slow");
});
$(".huntingButton").on("click",function(){
  $(".hunting").toggle("slow");
});
$(".gladiatorButton").on("click",function(){
  $(".gladiator").toggle("slow");
});
$(".catThing").on("click",function(){
  $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=nyan+cat").done(function(response){
    console.log(response);
    var catThingGif = response.data;
    $("div").html("<img src=" + catThingGif.image_url + ">");
    console.log(catThingGif);
  });
});


});
