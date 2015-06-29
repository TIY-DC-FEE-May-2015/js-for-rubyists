var circleClickHandler = function() {
  $("#circle-name").val( $(this).attr("data-name") )
}

$(document).on("ready", function(){

  $("#add-circle-button").on("click", function(evt){

    var circleName = $("#circle-name").val()

    var colors = [ "blue", "red", "yellow", "green" ]

    var randomColor = _.sample(colors)

    var htmlString = "<div class='circle'></div>"

    var $div = $(htmlString)
    $div.addClass(randomColor)
    $div.attr("data-name", circleName)
    $div.on("click", circleClickHandler)

    $("#circles").append($div)

  })

  $(".square").on("click", function(evt){

    $(".circle").show()

  })

  $(".circle").on("click", circleClickHandler)

})