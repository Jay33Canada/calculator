document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
//all of the button values
var seven = parseInt(document.getElementById("7").innerHTML);
var eight = parseInt(document.getElementById("8").innerHTML);
var nine = parseInt(document.getElementById("9").innerHTML);
var four = parseInt(document.getElementById("4").innerHTML);
var five = parseInt(document.getElementById("5").innerHTML);
var six = parseInt(document.getElementById("6").innerHTML);
var one = parseInt(document.getElementById("1").innerHTML);
var two = parseInt(document.getElementById("2").innerHTML);
var three = parseInt(document.getElementById("3").innerHTML);
var zero = parseInt(document.getElementById("0").innerHTML);
var showCalc = document.getElementById("show-calculations");
//an onclick function to run whenever a button is clicked
var tally = 0;
var clear = false;
document.addEventListener("click", function(element){
  switch(element.target.id){
    case "0":
      showCalc.innerHTML += "0";
      break;
    case "1":
      //do something;
      showCalc.innerHTML += "1";
      break;
    case "2":
      //do something;
      showCalc.innerHTML += "2";
      break;
    case "3":
      showCalc.innerHTML += "3";
      break;
    case "4":
      showCalc.innerHTML += "4";
      break;
    case "5":
      showCalc.innerHTML += "5";
      break;
    case "6":
      showCalc.innerHTML += "6";
      break;
    case "7":
      showCalc.innerHTML += "7";
      break;
    case "8":
      showCalc.innerHTML += "8";
      break;
    case "9":
      showCalc.innerHTML += "9";
      break;
    case "addition":
      showCalc.innerHTML += "+";
      break;
    case "subtraction":
      showCalc.innerHTML += "-";
      break;
    case "multiplication":
      showCalc.innerHTML += "*";
      break;
    case "division":
      showCalc.innerHTML += "/";
      break;
    case "equals":
      showCalc.innerHTML = tally;
      break;
    case "clear":
      showCalc.innerHTML = "";
      clear = true;
      break;
  }
  if(/^(\+|-|\*|\/|=)/.test(showCalc.innerHTML)){
     alert("you can't apply an operator without a number");
  }
  else if(/(\+|-|\*|\/|=)(\+|-|x|\/|=)/.test(showCalc.innerHTML)){
     alert("you can't have two operators side by side");
  }
  else if(clear === true){
     tally = 0;
     document.getElementById("screen").innerHTML = tally;
     clear = false;
          }
  else{
     tally = eval(showCalc.innerHTML);
    console.log(tally);
  }
  document.getElementById("screen").innerHTML = tally;
});
});//end of DOM loaded  check
