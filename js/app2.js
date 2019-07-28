
 var calculadora ={
  inicio: function ini() {
    var numeroa ;
    var numerob ;
    var operacion ;
    var pantalla = document.getElementById('display');
    var numero1 = document.getElementById('1');
    var numero2 = document.getElementById('2');
    var numero3 = document.getElementById('3');
    var numero4 = document.getElementById('4');
    var numero5 = document.getElementById('5');
    var numero6 = document.getElementById('6');
    var numero7 = document.getElementById('7');
    var numero8 = document.getElementById('8');
    var numero9 = document.getElementById('9');
    var numero0 = document.getElementById('0');
    var suma = document.getElementById('mas');
    var resta = document.getElementById('menos');
    var division = document.getElementById('dividido');
    var multiplica = document.getElementById('por');
    var limpiar = document.getElementById('on');
    var negativo = document.getElementById('sign');
    var punto = document.getElementById('punto');
    var igual = document.getElementById('igual');
    numero1.onclick = function(e){
      if (pantalla.innerHTML.length == 8) {
      pantalla.innerHTML = pantalla.innerHTML;
    }
      else if (pantalla.innerHTML == "0")  {
        pantalla.innerHTML = "1";
      }else {
      pantalla.innerHTML = pantalla.innerHTML + "1";
      }
    };
  numero2.onclick = function(e){
    if (pantalla.innerHTML.length == 8) {
    pantalla.innerHTML = pantalla.innerHTML;
  }
    else if (pantalla.innerHTML == "0")  {
      pantalla.innerHTML = "2";
    }else {
    pantalla.innerHTML = pantalla.innerHTML + "2";
    }
  };
  numero3.onclick = function(e){
    if (pantalla.innerHTML.length == 8) {
    pantalla.innerHTML = pantalla.innerHTML;
  }
    else if (pantalla.innerHTML == "0")  {
      pantalla.innerHTML = "3";
    }else {
    pantalla.innerHTML = pantalla.innerHTML + "3";
    }
  };
  numero4.onclick = function(e){
    if (pantalla.innerHTML.length == 8) {
    pantalla.innerHTML = pantalla.innerHTML;
  }
    else if (pantalla.innerHTML == "0")  {
      pantalla.innerHTML = "4";
    }else {
    pantalla.innerHTML = pantalla.innerHTML + "4";
    }
  };
  numero5.onclick = function(e){
    if (pantalla.innerHTML.length == 8) {
    pantalla.innerHTML = pantalla.innerHTML;
  }
    else if (pantalla.innerHTML == "0")  {
      pantalla.innerHTML = "5";
    }else {
    pantalla.innerHTML = pantalla.innerHTML + "5";
    }
  };
  numero6.onclick = function(e){
    if (pantalla.innerHTML.length == 8) {
    pantalla.innerHTML = pantalla.innerHTML;
  }
    else if (pantalla.innerHTML == "0")  {
      pantalla.innerHTML = "6";
    }else {
    pantalla.innerHTML = pantalla.innerHTML + "6";
    }
  };
  numero7.onclick = function(e){
    if (pantalla.innerHTML.length == 8) {
    pantalla.innerHTML = pantalla.innerHTML;
  }
    else if (pantalla.innerHTML == "0")  {
      pantalla.innerHTML = "7";
    }else {
    pantalla.innerHTML = pantalla.innerHTML + "7";
    }
  };
  numero8.onclick = function(e){
    if (pantalla.innerHTML.length == 8) {
    pantalla.innerHTML = pantalla.innerHTML;
  }
    else if (pantalla.innerHTML == "0")  {
      pantalla.innerHTML = "8";
    }else {
    pantalla.innerHTML = pantalla.innerHTML + "8";
    }
  };
  numero9.onclick = function(e){
    if (pantalla.innerHTML.length == 8) {
    pantalla.innerHTML = pantalla.innerHTML;
  }
    else if (pantalla.innerHTML == "0")  {
      pantalla.innerHTML = "9";
    }else {
    pantalla.innerHTML = pantalla.innerHTML + "9";
    }
  };
  numero0.onclick = function(){
    if (pantalla.innerHTML.length == 8) {
    pantalla.innerHTML = pantalla.innerHTML;
  }
    else if (pantalla.innerHTML == "0")  {
    pantalla.innerHTML = "0"
  }else {
  pantalla.innerHTML = pantalla.innerHTML + "0";
  }
  };
  limpiar.onclick= function(e){
    pantalla.innerHTML = "0";
    numeroa = 0;
    numerob = 0;
    operacion = "";
  };
  suma.onclick = function(e) {
    numeroa = pantalla.innerHTML;
    operacion = "+";
    clean();
  };
  resta.onclick = function(e) {
    numeroa = pantalla.innerHTML;
    operacion = "resta";
    clean();
  };
  multiplica.onclick =function(e) {
    numeroa = pantalla.innerHTML;
    operacion = "*";
    clean();
  };
  division.onclick = function(e) {
    numeroa = pantalla.innerHTML;
    operacion = "/";
    clean();
  };
  punto.onclick = function (e) {
    if (pantalla.innerHTML.indexOf(".") == -1) {
      pantalla.innerHTML = pantalla.innerHTML + ".";
    }else {
      pantalla = pantalla;
    }
  };
  negativo.onclick = function (){
    if (pantalla.innerHTML.indexOf("-") == -1 && pantalla.innerHTML !== "0") {
      pantalla.innerHTML = "-" + pantalla.innerHTML;
    }else {
      pantalla.innerHTML = pantalla.innerHTML.replace("-", "");
    }
  };
  function clean() {
    pantalla.innerHTML = "";
  };
  igual.onclick =function (e) {
    numerob = pantalla.innerHTML;
    resolver();
    confirmar();
  }
  function resolver(){
    var resultado = "";
    switch (operacion) {
      case "+":
      resultado = parseFloat(numeroa) + parseFloat(numerob);
        break;
      case "resta":
      resultado = parseFloat(numeroa) - parseFloat(numerob);
      break;
      case "*":
          resultado = parseFloat(numeroa) * parseFloat(numerob);
      break;
      case "/":
        resultado = parseFloat(numeroa) / parseFloat(numerob);
        break;
      default:
    };
    pantalla.innerHTML = resultado;
  }
  function confirmar () {
    if (pantalla.innerHTML.length >= 8) {
      pantalla.innerHTML = pantalla.innerHTML.substring(0,8);
    }else {
      pantalla.innerHTML = pantalla.innerHTML
    }
  }
  }(),
 }
