var pingPong = function(pingPong){
  var num =[];

  for (var i=1; i<=pingPong; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
      num.push("pingPong");
    } else if (i % 3 === 0){
      num.push("ping");
    } else if (i % 5 === 0){
      num.push("Pong");
    } else {
      num.push(i)
    };
  };
  return num;
};

$(document).ready(function(){

  $("form#numbers").submit(function(event){
    $("#results").empty();

    var number = parseInt($("#input#number").val());
    var result = pingPong(number);

    result.forEach(function(num){
        var li = $("#results").append("<li>" + num + "</li>");
      });
        $("#results").show();

    event.preventDefault();
  });
});
