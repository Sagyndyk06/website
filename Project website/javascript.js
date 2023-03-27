const logoSound = document.getElementById('cyber');
logoSound.addEventListener("click", function(){
  var audio = new Audio('sound.mp3')
  audio.play();
});

window.addEventListener("resize", function(){
  document.getElementById("asd").innerHTML = Math.random();
});


$(document).ready(function(){
  $("#test").mouseover(function(){
    $("#test").css("background-color", "gainsboro");
  });
  $("#test").mouseout(function(){
    $("#test").css("background-color", "#F8F8FF");
  });
});

$(document).ready(function(){
  $("#fgh").mouseover(function(){
    $("#fgh").css("background-color", "gainsboro");
  });
  $("#fgh").mouseout(function(){
    $("#fgh").css("background-color", "#F8F8FF");
  });
});

i = 0;
$(document).ready(function(){
  $("input").keypress(function(){
    $("span").text(i += 1);
  });
});
