//Business logic
var pingPong = function(pingPong){
  var number =[];

  for (var i=1; i<=pingPong; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
      number.push("pingPong");
    } else if (i % 3 === 0){
      number.push("ping");
    } else if (i % 5 === 0){
      number.push("Pong");
    } else {
      number.push(i)
    };
  };
  return number;
};

$(document).ready(function(){

  $("form#numbers").submit(function(event){
    $("#results").empty();

//capture user input
    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    result.forEach(function(num){
        var li = $("#results").append("<li>" + num + "</li>");
      });
        $("#results").show();

    event.preventDefault();
  });
});
