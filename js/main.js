/*$(document).ready(function(){
	$("#img_2").hover(function(){
	$(this).css("background-color", "pink");
	});
});



//circulos fondo
onload = inicia; 

var cantidadCirculos = 5; 

function inicia() {
  for(c=0; c<cantidadCirculos; c++) {
  circulos = document.createElement("div"); 
  circulos.setAttribute("class", "nieve"); 
  document.getElementById("fondoTotal").appendChild(circulos); 
  }
  for(c=0; c<cantidadCirculos; c++) {
  circulos = document.createElement("div"); 
  circulos.setAttribute("class", "nieve"); 
  document.getElementById("fondoTotal").appendChild(circulos); 
  }

  for(n=0; n<cantidadCirculos; n++) {
  document.querySelectorAll("#fondoTotal .nieve")[n].addEventListener("transitionend", function(){caida(this)}, false); 
  }

  setTimeout(function(){
    for(c=0; c<cantidadCirculos; c++) {
    elCirculo = document.querySelectorAll("#fondoTotal .nieve")[c]; 
    elCirculo.style.left = Math.floor(Math.random()*100)+ "vw"; 
    elCirculo.style.transition = "top 10ms linear"; 
    elCirculo.style.top = elCirculo.style.top = ".5vh";
    }
  }, 15);
}

function caida(T) {

  T.style.transition = "";
  T.style.top = "0"; 

  setTimeout(function(){
  T.style.transitionProperty = "left, top"; 
  T.style.transitionDelay = Math.floor(Math.random()*1000)+ "ms"; 
  T.style.transitionDuration = (Math.floor(Math.random()*15000) + 5000)+ "ms"; 
  T.style.transitionTimingFunction = "ease-in, ease-out"; 
  T.style.left = Math.floor(Math.random()*100)+ "vw"; 
  T.style.top = "110vh"; 
  }, 15);  
}
*/

/*$(document).ready(function(){
    $("#img_2").hover(function(){
      $(this).css("background-color", "pink");
    });
});

//para controlar el video de zlup y empiece a correr cuando se le dé click
$(document).ready (function() {
  $('#video_zlup').click (function playVideo() {
    $(this).get(0).play();
  });
});
  
  $('#video_zlup').click (function pauseVideo() {
    $(this).get(0).pause();
  });
*/

function playVideo() {
  
  var video = document.getElementById("video_zlup");
  var button = document.getElementById("play")
       
    if (video.paused) {
      video.play();
      button.textContent = "pause";
    } else {
      video.pause();
      button.textContent = "play";
    }

    function restart() {
      video.currentTime = 0;
    }

    function skip(value) {
      video.currentTime += value;
    } 
}

 
