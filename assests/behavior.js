// document.ready function (Loads after the Html is loads)
$(document).ready(function() {
  console.log("document ready");

  //   Anime Array
  var topics = ["Hunter x Hunter", "Akame ga Kill", "Inuyasha", "Fist of the North Star", "Initial D"];

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
      console.log(response.data);
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          var animeDiv = $("<div class='animeGif'>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var animeImg = $("<img>");
          animeImg.attr("src", results[i].images.fixed_height_still.url);
          animeImg.attr("anime-still", results[i].images.fixed_height_still.url);
          animeImg.attr("anime-animate", results[i].images.fixed_height.url);
          animeImg.attr("img-state", "still");
          animeImg.attr("class", "gif");
          
          animeDiv.append(p);
          animeDiv.append(animeImg);
          
          $("#img-div").prepend(animeDiv);
          // animate on click event
          $(".gif").on("click", function() {
            var state = $(this).attr("img-state");
            if (state === "still") {
              $(this).attr("src", $(this).attr("anime-animate"));
              $(this).attr("img-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("anime-still"));
              $(this).attr("img-state", "still");
            }
          });
        }
      };
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
  
  $(".anime").on("click", function(event){
    event.preventDefault();
    $(".animeGif").remove();
  });
  //   On Click Event
  $("#add-anime").on("click", function(event) {
    // remove method to remove old div
    $(".animeGif").remove();
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
