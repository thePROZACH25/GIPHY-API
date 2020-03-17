// document.ready function (Loads after the Html is loads)
$(document).ready(function() {
  console.log("document ready");

  var topics = ["Dragon Ball", "Pokemon", "Sailor Moon", "One Piece"];

  function renderButtons() {
    $("#buttons").empty();

    for (var i = 0; i < topics.length; i++) {
      var a = $("<button>");
      a.addClass("anime");
      a.attr("anime-show", topics[i]);
      a.text(topics[i]);
      $("#buttons").append(a);
    }
  }
  console.log(renderButtons);

  // $("button").on("click", function(){
  //     var anime = $(this).attr("anime-show");
  //     console.log(anime);

  // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  // anime + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  // // AJAX GET request
  // $.ajax({
  //     url: queryURL,
  //     method: "GET"
  // })
  // .then(function(response){
  //     $("#img-div").text(JSON.stringify(response));
  //     // var results = response.data;

  //     // for (var i =0; i< results.length;i++){
  //     //     console.log(results);
  //     // }
  //     // })
  //     renderButtons();
  // })
  renderButtons();
});
