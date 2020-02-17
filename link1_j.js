window.onload = function(){
  var col = document.getElementsByTagName("a");
  for(var i = 0;i < col.length;i++)
   col[i].style.color = "green";
  alert(col.length);
  col[col.length-1].remove();
  alert(col.length);

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
