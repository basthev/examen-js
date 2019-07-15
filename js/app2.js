
  var calculadora = {
    pantalla: document.getElementById('display'),
    numero1: document.getElementById('1'),
    numero2: document.getElementById('2'),
    numero3: document.getElementById('3'),
    numero4: document.getElementById('4'),
    numero5: document.getElementById('5'),
    numero6: document.getElementById('6'),
    numero7: document.getElementById('7'),
    numero8: document.getElementById('8'),
    numero9: document.getElementById('9'),
    numero0: document.getElementById('0'),
    suma: document.getElementById('mas'),
    resta: document.getElementById('menos'),
    division: document.getElementById('dividido'),
    multiplica: document.getElementById('por'),
    limpiar: document.getElementById('on'),
    negativo: document.getElementById('sign'),
    punto: document.getElementById('punto'),
    igual: document.getElementById('igual'),
    pnumero1: function (){
    this.numero1 =  function(){
        pantalla.innerHTML = this.pantalla + "1";
      }();
    }(),
  }
