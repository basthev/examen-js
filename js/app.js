var calculadora ={
 numeroa: 0,
 numerob: 0,
 operacion: "",
 resultado:"",
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
 o: 0,
 //numero 1
 numerop1 : function (e) {
 if (calculadora.pantalla.innerHTML.length == 8) {
 calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML;
} else if (calculadora.o >= 1 && calculadora.resultado == calculadora.pantalla.innerHTML) {
   calculadora.pantalla.innerHTML="1";
 } else if (calculadora.pantalla.innerHTML == "0")  {
   calculadora.pantalla.innerHTML = "1";
 }else {
 calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "1";
 }
 },
 numero1e : function() {
   calculadora.numero1.addEventListener("click", calculadora.numerop1);
 },
 //Numero2
 numerop2 : function (e) {
 if (calculadora.pantalla.innerHTML.length == 8) {
 calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML;
}
 else if (calculadora.o >= 1 && calculadora.resultado == calculadora.pantalla.innerHTML) {
    calculadora.pantalla.innerHTML="2";
  } else if (calculadora.pantalla.innerHTML == "0")  {
   calculadora.pantalla.innerHTML = "2";
 }else {
 calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "2";
 }
 },
 numero2e : function() {
  calculadora.numero2.addEventListener("click", calculadora.numerop2);
 },
 //numero 3
 numerop3 : function (e) {
    if (calculadora.pantalla.innerHTML.length == 8) {
    calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML;
  }
  else if (calculadora.o >= 1 && calculadora.resultado == calculadora.pantalla.innerHTML) {
     calculadora.pantalla.innerHTML="3";
   } else if (calculadora.pantalla.innerHTML == "0")  {
    calculadora.pantalla.innerHTML = "3";
  }else {
  calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "3";
  }
  },
  numero3e : function() {
    calculadora.numero3.addEventListener("click", calculadora.numerop3);
  },
    //Numero4
    numerop4 : function (e) {
        if (calculadora.pantalla.innerHTML.length == 8) {
        calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML;
      }
  else if (calculadora.o >= 1 && calculadora.resultado == calculadora.pantalla.innerHTML) {
     calculadora.pantalla.innerHTML="4";
   } else if (calculadora.pantalla.innerHTML == "0")  {
    calculadora.pantalla.innerHTML = "4";
  }else {
  calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "4";
  }
  },
  numero4e : function() {
    calculadora.numero4.addEventListener("click", calculadora.numerop4);
  },
        //Numero 5
 numerop5 : function (e) {
    if (calculadora.pantalla.innerHTML.length == 8) {
    calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML;
  }
    else if (calculadora.o >= 1 && calculadora.resultado == calculadora.pantalla.innerHTML) {
       calculadora.pantalla.innerHTML="5";
     } else if (calculadora.pantalla.innerHTML == "0")  {
      calculadora.pantalla.innerHTML = "5";
    }else {
    calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "5";
    }
    },
    numero5e : function() {
      calculadora.numero5.addEventListener("click", calculadora.numerop5);
    },
    //numero6
 numerop6 : function (e) {
     if (calculadora.pantalla.innerHTML.length == 8) {
     calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML;
   }
     else if (calculadora.o >= 1 && calculadora.resultado == calculadora.pantalla.innerHTML) {
        calculadora.pantalla.innerHTML="6";
      } else if (calculadora.pantalla.innerHTML == "0")  {
       calculadora.pantalla.innerHTML = "6";
     }else {
     calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "6";
     }
     },
     numero6e : function() {
       calculadora.numero6.addEventListener("click", calculadora.numerop6);
     },
     //Numero 7
 numerop7 : function (e) {
     if (calculadora.pantalla.innerHTML.length == 8) {
     calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML;
   }
   else if (calculadora.o >= 1 && calculadora.resultado == calculadora.pantalla.innerHTML) {
      calculadora.pantalla.innerHTML="7";
    } else if (calculadora.pantalla.innerHTML == "0")  {
     calculadora.pantalla.innerHTML = "7";
   }else {
   calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "7";
   }
   },
   numero7e : function() {
     calculadora.numero7.addEventListener("click", calculadora.numerop7);
   },
  //numero 8
  numerop8 : function (e) {
      if (calculadora.pantalla.innerHTML.length == 8) {
      calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML;
    }
    else if (calculadora.o >= 1 && calculadora.resultado == calculadora.pantalla.innerHTML) {
       calculadora.pantalla.innerHTML="8";
     } else if (calculadora.pantalla.innerHTML == "0")  {
      calculadora.pantalla.innerHTML = "8";
    }else {
    calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "8";
    }
    },
    numero8e : function() {
      calculadora.numero8.addEventListener("click", calculadora.numerop8);
    },
    //numero 9
  numerop9 : function (e) {
      if (calculadora.pantalla.innerHTML.length == 8) {
      calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML;
    }
    else if (calculadora.o >= 1 && calculadora.resultado == calculadora.pantalla.innerHTML) {
       calculadora.pantalla.innerHTML="9";
     } else if (calculadora.pantalla.innerHTML == "0")  {
      calculadora.pantalla.innerHTML = "9";
    }else {
    calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "9";
    }
    },
    numero9e : function() {
      calculadora.numero9.addEventListener("click", calculadora.numerop9);
    },
  limpiarp : function (e) {
    calculadora.pantalla.innerHTML = "0";
    calculadora.numeroa = 0;
    calculadora.numerob = 0;
    calculadora.operacion = "";
    calculadora.o=0;
      },
      limpiare : function() {
        calculadora.limpiar.addEventListener("click", calculadora.limpiarp);
      },
  //numero 0
numerop0 : function (e) {
    if (calculadora.pantalla.innerHTML.length == 8) {
    calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML;
  }
    else if (calculadora.o >= 1 && calculadora.resultado == calculadora.pantalla.innerHTML) {
       calculadora.pantalla.innerHTML = "0"
     } else if (calculadora.pantalla.innerHTML == "0")  {
      calculadora.pantalla.innerHTML = "0";
    }else {
 calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "0";
 }
 },
numero0e : function() {
  calculadora.numero0.addEventListener("click", calculadora.numerop0);
 },
//clean
clean: function() {
  calculadora.pantalla.innerHTML= ""
},
//suma
sumap: function ()
{
  if (calculadora.o >= 1) {
    calculadora.igualp()
  }else {
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.operacion = "+";
    calculadora.clean();
    calculadora.o= calculadora.o + 1
  };
},
sumae: function (){
  calculadora.suma.addEventListener("click", calculadora.sumap);
},
//resta
restap: function ()
{
  if (calculadora.o >= 1) {
    calculadora.igualp();
    calculadora.cadena();
  }else {
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.operacion = "resta";
    calculadora.clean();
    calculadora.o= calculadora.o + 1
  };
},
restae: function (){
  calculadora.resta.addEventListener("click", calculadora.restap);
},
//division
divisionp: function ()
{
  if (calculadora.o >= 1) {
    calculadora.igualp()
  }else {
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.operacion = "/";
    calculadora.clean();
    calculadora.o= calculadora.o + 1;
  };
},
divisione: function (){
  calculadora.division.addEventListener("click", calculadora.divisionp);
},
//multiplicacion
multiplicacionp: function ()
{
  if (calculadora.o >= 1) {
    calculadora.igualp()
  }else {
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.operacion = "*";
    calculadora.clean();
    calculadora.o= calculadora.o + 1
  };
},
multiplicacione: function (){
  calculadora.multiplica.addEventListener("click", calculadora.multiplicacionp);
},
//cadena
cadena: function(){
  calculadora.addEventListener("click",calculadora.cadenae)
},
cadenae: function(){
    calculadora.pantalla.innerHTML="";
  },
//punto
puntop: function (){
  if (calculadora.pantalla.innerHTML.indexOf(".") == -1) {
    calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + ".";
  }else {
    calculadora.pantalla = calculadora.pantalla
  }
},
puntoe: function (){
  calculadora.punto.addEventListener("click", calculadora.puntop);
},
//negativo
negativop: function () {
  if (calculadora.pantalla.innerHTML.indexOf("-") == -1 && calculadora.pantalla.innerHTML != "0") {
    calculadora.pantalla.innerHTML = "-" + calculadora.pantalla.innerHTML;
  }else {
    calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML.replace("-","");
  }
},
negativoe: function () {
  calculadora.negativo.addEventListener("click", calculadora.negativop);
},
//igual
igualp: function () {
  calculadora.numerob = calculadora.pantalla.innerHTML;
  calculadora.resolver()
  calculadora.confirmar()
  calculadora.o= 0;
},
iguale: function (){
  calculadora.igual.addEventListener("click", calculadora.igualp)
},
resolver: function () {
  switch (calculadora.operacion) {
    case "+":
    calculadora.resultado = parseFloat(calculadora.numeroa) + parseFloat(calculadora.numerob);
      break;
    case "resta":
    calculadora.resultado = parseFloat(calculadora.numeroa) - parseFloat(calculadora.numerob);
    break;
    case "*":
        calculadora.resultado = parseFloat(calculadora.numeroa) * parseFloat(calculadora.numerob);
    break;
    case "/":
      calculadora.resultado = parseFloat(calculadora.numeroa) / parseFloat(calculadora.numerob);
      break;
    default:
    };
    calculadora.pantalla.innerHTML = calculadora.resultado;

},
confirmar: function () {
  if (calculadora.pantalla.innerHTML.length >= 8) {
    calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML.substring(0,8);
  }else {
    calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML
  };
},
};
calculadora.numero1e()
calculadora.numero2e()
calculadora.numero3e()
calculadora.numero4e()
calculadora.numero5e()
calculadora.numero6e()
calculadora.numero7e()
calculadora.numero8e()
calculadora.numero9e()
calculadora.numero0e()
calculadora.limpiare()
calculadora.sumae()
calculadora.restae()
calculadora.puntoe()
calculadora.negativoe()
calculadora.iguale()
calculadora.divisione()
calculadora.multiplicacione()
