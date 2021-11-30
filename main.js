//var list

var score = 0;
var omgb = 0;
var cursurcosttauto = 100;
var omg = 0
var cursurcost = 15;
var Cursurs = 0;
var cursorcosturbo = 1500;
var omgc = 0;

//function list

function buycursor (amount) {
  if (score >= cursurcost) {
    score = score - cursurcost;
          
    omg = omg + 1;
    cursurcost = cursurcost + 7;

    document.getElementById("score").innerHTML = score;
    document.getElementById("cursurcost").innerHTML = cursurcost;
    document.getElementById("cursurs").innerHTML = cursurs;

      }
  }


  function buyTurboclick(amount) {
    if (score >= cursorcosturbo) {
      score = score - cursorcosturbo;

      omgc = omgc + 1  
      cursorcosturbo = cursorcosturbo + 17;

      document.getElementById("score").innerHTML = score;
      document.getElementById("cursorcostturbo").innerHTML = cursorcosturbo;
      }
  }

  function buyAutoclick(amount) {
    if (score >= cursurcosttauto) {
      score = score - cursurcosttauto;

      omgb = omgb + 1

      cursurcosttauto = cursurcosttauto + 13
         
      document.getElementById("score").innerHTML = score;
      document.getElementById("cursurCostauto").innerHTML = cursurcosttauto;
          

      }
  }

  function AddToScore(amount){
    score=score + amount;
    document.getElementById("score").innerHTML = score;
  }
  

//the timmer that adds the score every second

  setInterval (function () {
    score = score + omg;
    document.getElementById("score").innerHTML = score;
      
      
  }, 1000);

  setInterval (function () {
      
    score = score + omgb;

    document.getElementById("score").innerHTML = score;
      
      
  }, 300);

  setInterval (function () {
    score = score + omgc;
  }, 90);