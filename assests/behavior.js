// document.ready function (Loads after the Html is loads)
$(document).ready(function() {
  console.log("document ready");

  //   Anime Array
  var topics = ["Dragon Ball", "Pokemon", "Sailor Moon", "One Piece"];

  function displayAnimeInfo() {
    var anime = $(this).attr("anime-show");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      anime +
      "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#img-div").text(JSON.stringify(response.data));

      console.log(response.data);
    });
  }

  function alertTopicsName() {
    var animeName = $(this).attr("anime-show");

    alert(animeName);
  }

  //   Render Button Function
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

  //   On Click Event
  $("#add-anime").on("click", function(event) {
    event.preventDefault();

    var anime = $("#search-input")
      .val()
      .trim();
    topics.push(anime);

    renderButtons();
  });
  $(document).on("click", ".anime", alertTopicsName);
  $(document).on("click", ".anime", displayAnimeInfo);
  renderButtons();
});
