 var calculadora ={
  inicio: function ini() {
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
      pantalla.innerHTML = pantalla.innerHTML + "1";
    };
  numero2.onclick = function(e){
    pantalla.innerHTML = pantalla.innerHTML + "2";
  };
  numero3.onclick = function(e){
  pantalla.innerHTML = pantalla.innerHTML + "3";
  };
  numero4.onclick = function(e){
  pantalla.innerHTML = pantalla.innerHTML + "4";
  };
  numero5.onclick = function(e){
  pantalla.innerHTML = pantalla.innerHTML + "5";
  };
  numero6.onclick = function(e){
  pantalla.innerHTML = pantalla.innerHTML + "6";
  };
  numero7.onclick = function(e){
  pantalla.innerHTML = pantalla.innerHTML + "7";
  };
  numero8.onclick = function(e){
  pantalla.innerHTML = pantalla.innerHTML + "8";
  };
  numero9.onclick = function(e){
  pantalla.innerHTML = pantalla.innerHTML + "9";
  };
  numero0.onclick = function(e){
  if (pantalla = "0") {
    pantalla.innerHTML = "0"
  }else {
  pantalla.innerHTML = pantalla.innerHTML + "0";
  }

  };
  limpiar.onclick= function(e){
    pantalla.innerHTML = "0"
  };
  }()
};
