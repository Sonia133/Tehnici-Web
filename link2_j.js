window.onload = function() {
var col = document.getElementsByClassName("par");
   for(var i = 0;i < col.length;i++)
     col[i].style.backgroundColor = "#ffe6f3";
col = document.getElementsByClassName("impar");
   for(var i = 0;i < col.length;i++)
     col[i].style.backgroundColor = "#ccffcc";

var col1 = document.querySelectorAll("li");
 for(var i = 0;i < col1.length;i++)
  col1[i].style.color = "red";
 var lista  = document.querySelector("h4");
  lista.style.color = "black";

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
var change = document.getElementsByClassName("date")[0];
var d = new Date();
var y = d.getFullYear();
ojs = {year : y}
localStorage.setItem("dataAcc", JSON.stringify(ojs));
change.onmouseover = function() {
  var s = localStorage.getItem("dataAcc");
  if(s)
    change.innerHTML=JSON.parse(s).year;
}
var firstButton =  document.getElementsByClassName("firstButton")[0];
firstButton.addEventListener("click", buttonFunction, true);

  function buttonFunction() {
    var names = ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "Clancy Brown", "William Sadler", "Gil Bellows"];
    names.push("James Whitmore");
    let rand = Math.floor(Math.random()*(names.length))
    document.getElementById("name").innerHTML = names[rand];

    switch (rand) {
      case 0:
        document.getElementById("story").innerHTML = "Tim Robbins (n. 16 octombrie 1958) este un actor american. A obținut Premiul Oscar pentru cel mai bun actor în rol secundar în anul 2004.";
        break;
      case 1:
        document.getElementById("story").innerHTML = "Morgan Freeman (n. 1 iunie 1937) este un actor afro-american, regizor de film și narator, câștigător al Premiului Oscar. A devenit cunoscut în anii 1990, după ce a avut roluri într-o serie de filme de succes produse la Hollywood.";
        break;
      case 2:
        document.getElementById("story").innerHTML = "Robert Patrick Gunton Jr. (n. 15 noiembrie 1945) este un actor american. Gunton este cunoscut pentru roluri autoritare, incluzand Warden Samuel Norton in The Shawshank Redemption si bucatar sef George Earle in Demolition Man.";
        break;
      case 3:
        document.getElementById("story").innerHTML = "Clarence J. Brown III (n. 5 ianuarie 1959 în Urbana, Ohio, SUA) este un actor american. Este cunoscut pentru rolurile Kurgan din Nemuritorul, Byron Hadley din Închisoarea Îngerilor și Justin Crowe din Carnivale.";
        break;
      case 4:
        document.getElementById("story").innerHTML = "William Thomas Sadler (n. 13 apriliw 1950) este un actor american. Printre rolurile sale importante se numara Chesty Puller din The Pacific, Luther Sloan in Start Trek:Deep Space Nine, si nu in ultimul rand Serif Jim Valenti in Roswell. Este casatorit cu Marni Joan Bakst si au impreuna un copil."
        break;
      case 5:
        document.getElementById("story").innerHTML = "Gil Bellows (n. 28 iunie 1967) este un actor de film si televiziune canadian. Este cunoscut pentru rolul Tommy Williams din Shawshank Redemption, precum si Billy Thomas din Ally McBeal. Este casatorit din 1988 cu Rya Kihlstedt si au impreuna doi copii.";
        break;
      case 6:
        document.getElementById("story").innerHTML = "James Whitmore (n. 1 octombrie 1921, White Plains, New York - d. 6 februarie 2009, Malibu, California) a fost un actor american de film si TV. A fost casatorit cu Noreen Nash si Audra Lindey si a avut un singur copil, James Whitmore Jr.";
        break;
    }
    if (rand % 2 == 1) {
      firstButton.className = "secondButton";
    } else {
      firstButton.className = "firstButton";
    }
  }


  var secondButton =  document.getElementsByClassName("firstButton")[1];
  secondButton.addEventListener("click", buttonFunction1);


    function buttonFunction1() {
      var names = ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "Clancy Brown", "Gil Bellows", "James Whitmore"];
      let rand = Math.floor(Math.random()*(names.length))
      document.getElementById("name1").innerHTML = names[rand];
      switch (rand) {
        case 0:
          document.getElementById("story1").innerHTML = "scenarist / producator de film / muzician / actor";
          break;
        case 1:
          document.getElementById("story1").innerHTML = "actor / apicultor / actor de voce / aviator";
          break;
        case 2:
          document.getElementById("story1").innerHTML = "actor";
          break;
        case 3:
          document.getElementById("story1").innerHTML = "actor / actor de voce / producator de film";
          break;
        case 4:
          document.getElementById("story1").innerHTML = "actor";
          break;
        case 5:
          document.getElementById("story1").innerHTML = "actor";
          break;
        case 6:
          document.getElementById("story1").innerHTML = "actor / ofiter / actor de teatru";
          break;
      }

      if (rand % 2 == 1) {
        secondButton.className = "secondButton";
      } else {
        secondButton.className = "firstButton";
      }
    }
    document.getElementById("raspuns1").addEventListener("click", yes);
    document.getElementById("raspuns2").addEventListener("click", no);

    function no(e) {
      e.preventDefault();
    }

    function yes() {
      document.getElementById("raspuns3").innerHTML = "Evident! Singurul raspuns corect :)";
    }
    document.querySelectorAll('.picture input').forEach((itm) => {
      itm.addEventListener('click', (e) => {
        console.log(e);
        document.querySelector('.showPicture').src = e.srcElement.value;
        setInterval(function(){
          document.querySelector('.showPicture').src = "";
          clearInterval();
        }, 3000);
      })
    })

    var closeAd = document.getElementsByClassName("closebtn");
    closeAd[0].onclick=function() {
        this.parentElement.style.display = 'none';
    }

    var c = document.body.children;
    var i;
    var dp = document.getElementsByClassName('dropdown-content')[0];
    var bgColor = window.getComputedStyle(dp, null).getPropertyValue("background-color");
    for (i = 0; i < c.length; i++) {
      c[i].style.backgroundColor = bgColor;
    }

    var buttons = document.querySelectorAll('input[type=radio]');
    if(localStorage.getItem('Number')){
      for(var i = 0; i < buttons.length; i++){
        if (buttons[i].value == localStorage.getItem('Number')) {
          buttons[i].checked = true;
        }
      }
    }
    buttons.forEach(function(item){
      item.addEventListener('click', rememberInput);
    })
    function rememberInput(e){
      var N = e.toElement.value;
      localStorage.setItem('Number', N);
    }

    var buttons = document.querySelectorAll('input');
    for(i of buttons) {
      i.onclick = function() {
        alert("Ai apasat un buton :)");
      }
    }
  }
