$(document).ready(function () {

    $(".btn-primary").click(function () {
        var colors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#C0C0C0'];
        var rand = colors[Math.floor(Math.random() * colors.length)];
        $(".container-fluid, .btn-primary").css("background-color", rand);
    });

    /**
     * Random quote generator 
     */

    var quoteText =["Don't cry because it's over, smile because it happened. ― Dr. Seuss",
    "Be yourself; Everyone else is taken - Oscar Wilde",
    "So many books, so little time. - Frank Zappa",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe - Albert Einstein",
    "In three words I can sum up everything I've learned about life: it goes on - Robert Frost"];
    
    $("#generateBtn").click(function () {
        $("#quotes").html(quoteText[Math.floor(Math.random()* quoteText.length)]);
    });
    
    /**
     * Getting your IP Address
     */
    $.get("http://ipinfo.io", function(response) {
     $("#myIP").text(response.ip);
}, "jsonp");
    
});