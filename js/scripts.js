//Business logic
function pingPong(inputNumber) {
  var output = [];

  for (var i = 1; i <= inputNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("pingpong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output ;
  };

//user interface logic
  $(function() {
    $("form#pingPong").submit(function(event){
      var userInput = parseInt($("#userInput").val());
      var result = pingPong(userInput);
      $('#result').empty();
      $('#result').append(result.join(", "));
      $('#result').show();

        event.preventDefault();
    });
  });
