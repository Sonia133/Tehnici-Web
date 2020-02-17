window.onload = function(){
var butonG = document.getElementById("addMore94");
butonG.style.borderRadius = "50px";
butonG.style.border = "none";
butonG.style.backgroundColor = "lightblue";
butonG.onclick = function(){
  var addImg = document.createElement("img");
  addImg.src = "94.jpg";
  addImg.style.width = "30%";
  addImg.style.height = "auto";
  document.body.append(addImg);
  addImg.onclick = function(){
    addImg.remove();
  }
}
var butonG1 = document.getElementById("addMore14");
butonG1.style.borderRadius = "50px";
butonG1.style.border = "none";
butonG1.style.backgroundColor = "lightblue";
butonG1.onclick = function(){
  var addImg1 = document.createElement("img");
  addImg1.src = "14.jpg";
  addImg1.style.width = "30%";
  addImg1.style.height = "auto";
  document.body.append(addImg1);
  addImg1.onclick = function(){
    addImg1.remove();
  }
 }

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
