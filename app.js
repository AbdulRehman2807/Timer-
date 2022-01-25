var start = document.getElementById("start");
var stop = document.getElementById("stop")
var reset = document.getElementById("reset");
var hour = document.getElementById("hour");
var minut = document.getElementById("minute");
var sec = document.getElementById("sec");
var interval;


  function timer (){
    if(hour.value == 0 && minut.value == 0 && sec.value == 0){
    hour.value =0;
    minut.value =0; 
    sec.value =0;
  } else if(sec.value != 0 ){
      sec.value--;
  } else if(minut.value != 0 && sec.value == 0){
      sec.value =59;
      minut.value--;
  } else if(hour.value != 0 && minut.value == 0 && sec.value == 0){
    sec.value =59;
    minut.value=59;
    hour.value--;
}
};
  function startFunction(){
    interval = setInterval(timer, 1000)
  start.disabled = true
  };
  function stopFunction(){
      clearInterval(interval)
      start.disabled = false;
  }
  function resetFunction(){
    clearInterval(interval);
    start.disabled = false;
    hour.value = "00";
    minut.value = "00"; 
    sec.value = "00";
  }

