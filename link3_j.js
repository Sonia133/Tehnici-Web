window.onload = function(){
  var butonCrP = document.createElement("p");
  document.body.appendChild(butonCrP);
  var butonTeN = document.createTextNode("Speram ca v-au placut aceste dezvaluiri!");
  butonCrP.appendChild(butonTeN);

  document.getElementById("typeHere").addEventListener("keydown", event => {
  document.getElementById('what').innerHTML = `Ati tastat : ${event.key}`;
});
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  document.getElementsByClassName("date")[0].innerHTML = day;
}
