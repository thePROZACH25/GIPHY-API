// document.ready function (Loads after the Html is loads)
$(document).ready(function() {
    console.log("ready!");

    $("button").on("click", function(){
        var anime = $(this).attr("anime-show");
        console.log(anime)
    })
});