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
 e: 0,
 u: 0,
 //numero 1
 numerop1 : function (e) {
 if (calculadora.pantalla.innerHTML.length == 8) {
 calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML;
} else if (calculadora.o >= 1 && calculadora.resultado == calculadora.pantalla.innerHTML) {
  if (calculadora.u == 0) {
    calculadora.pantalla.innerHTML="1";
    calculadora.u = calculadora.u + 1;
   } else {
     calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "1";
   };
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
  if (calculadora.u == 0) {
    calculadora.pantalla.innerHTML="2";
    calculadora.u = calculadora.u + 1;
   } else {
     calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "2";
   };
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
    if (calculadora.u == 0) {
      calculadora.pantalla.innerHTML="3";
      calculadora.u = calculadora.u + 1;
     } else {
       calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "3";
     };
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
    if (calculadora.u == 0) {
      calculadora.pantalla.innerHTML="4";
      calculadora.u = calculadora.u + 1;
     } else {
       calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "4";
     };
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
      if (calculadora.u == 0) {
        calculadora.pantalla.innerHTML="5";
        calculadora.u = calculadora.u + 1;
       } else {
         calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "5";
       };
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
      if (calculadora.u == 0) {
        calculadora.pantalla.innerHTML="6";
        calculadora.u = calculadora.u + 1;
       } else {
         calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "6";
       };
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
      if (calculadora.u == 0) {
      calculadora.pantalla.innerHTML="7";
      calculadora.u = calculadora.u + 1;
      }else {
       calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "7";;
      };
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
      if (calculadora.u == 0) {
        calculadora.pantalla.innerHTML="8";
        calculadora.u = calculadora.u + 1;
       } else {
         calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "8";
       };
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
       if (calculadora.u == 0) {
        calculadora.pantalla.innerHTML="9"
        calculadora.u = calculadora.u + 1
       } else {
         calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "9"
       };
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
      if (calculadora.u == 0) {
        calculadora.pantalla.innerHTML="0"
        calculadora.u = calculadora.u + 1
       } else {
         calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + "0"
       };
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
  if (calculadora.e >= 1) {
    calculadora.e=0;
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.operacion = "+";
    calculadora.clean();
    calculadora.o= calculadora.o + 1
    calculadora.u = 0;        
  } else if (calculadora.o >= 1) {
    calculadora.igualp()
    calculadora.operacion = "+";
    calculadora.o= calculadora.o + 1;
    calculadora.numeroa= calculadora.resultado;
    calculadora.e=0;
    calculadora.u = 0;                                    
  }else {
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.operacion = "+";
    calculadora.clean();
    calculadora.o= calculadora.o + 1
    calculadora.u = 0;
  };
},
sumae: function (){
  calculadora.suma.addEventListener("click", calculadora.sumap);
},
//resta
restap: function ()
{
  if (calculadora.e >= 1) {
    calculadora.e=0;
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.operacion = "resta";
    calculadora.clean();
    calculadora.o= calculadora.o + 1
    calculadora.u = 0;
  } else if (calculadora.o >= 1) {
    calculadora.igualp();
    calculadora.operacion = "resta";
    calculadora.o= calculadora.o + 1;
    calculadora.numeroa= calculadora.resultado;
    calculadora.e=0;
    calculadora.u = 0;
  }else {
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.operacion = "resta";
    calculadora.clean();
    calculadora.o= calculadora.o + 1
    calculadora.u = 0;
  };
},
restae: function (){
  calculadora.resta.addEventListener("click", calculadora.restap);
},
//division
divisionp: function ()
{
  if (calculadora.e >= 1) {
    calculadora.e=0;
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.operacion = "/";
    calculadora.clean();
    calculadora.o= calculadora.o + 1
    calculadora.u = 0;
  } else if (calculadora.o >= 1) {
    calculadora.igualp();
    calculadora.o= calculadora.o + 1;
    calculadora.operacion="/"
    calculadora.numeroa= calculadora.resultado;
    calculadora.e = 0;
    calculadora.u = 0;
  }else {
    calculadora.operacion = "/";
    calculadora.clean();
    calculadora.o= calculadora.o + 1;
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.u = 0;
  };
},
divisione: function (){
  calculadora.division.addEventListener("click", calculadora.divisionp);
},
//multiplicacion
multiplicacionp: function ()
{
  if (calculadora.e >= 1) {
    calculadora.e=0;
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.operacion = "*";
    calculadora.clean();
    calculadora.o= calculadora.o + 1
    calculadora.u = 0;
  } else if (calculadora.o >= 1) {
    calculadora.igualp()
    calculadora.o= calculadora.o + 1;
    calculadora.operacion = "*"
    calculadora.numeroa= calculadora.resultado;
    calculadora.e=0
    calculadora.u = 0;
  }else {
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.operacion = "*";
    calculadora.clean();
    calculadora.o= calculadora.o + 1
    calculadora.u = 0;
  };
},
multiplicacione: function (){
  calculadora.multiplica.addEventListener("click", calculadora.multiplicacionp);
},

//punto
puntop: function (){
  if (calculadora.pantalla.innerHTML.indexOf(".") == -1) {
    calculadora.pantalla.innerHTML = calculadora.pantalla.innerHTML + ".";
  }else {
    calculadora.pantalla = calculadora.pantalla;
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
  if (calculadora.e >= 1) {
    calculadora.numeroa = calculadora.pantalla.innerHTML;
    calculadora.resolver()
    calculadora.confirmar()
    calculadora.u = 0;
  } else {
    calculadora.numerob = calculadora.pantalla.innerHTML;
  calculadora.resolver()
  calculadora.confirmar()
  calculadora.o= 0;
  calculadora.e = calculadora.e + 1;
  calculadora.u = 0;
  }
   
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
normal: function (x){
  document.getElementsByClassName('tecla')[x].style.width = "29%";
  document.getElementsByClassName('tecla')[x].style.height = "62.91px";
},
normal2: function (x){
  document.getElementsByClassName('tecla')[x].style.width = "22%";
  document.getElementsByClassName('tecla')[x].style.height = "62.91px";
},
normal3: function (x){
  document.getElementsByClassName('tecla')[x].style.width = "90%";
  document.getElementsByClassName('tecla')[x].style.height = "100%";
},
pulsar1: function () {
  function pulsar1 () {
    document.getElementsByClassName('tecla')[12].style.width = "27.5%";
    document.getElementsByClassName('tecla')[12].style.height = "60.91px";
    setTimeout("calculadora.normal(12)",50)
  }
     calculadora.numero1.addEventListener("click", pulsar1);
},
pulsar2: function () {
  function pulsar2 () {
    document.getElementsByClassName('tecla')[13].style.width = "27.5%";
    document.getElementsByClassName('tecla')[13].style.height = "60.91px";
    setTimeout("calculadora.normal(13)",50)
  }
     calculadora.numero2.addEventListener("click", pulsar2);
},
pulsar3: function () {
  function pulsar3 () {
    document.getElementsByClassName('tecla')[14].style.width = "27.5%";
    document.getElementsByClassName('tecla')[14].style.height = "60.91px";
    setTimeout("calculadora.normal(14)",50)
  }
     calculadora.numero3.addEventListener("click", pulsar3);
},
pulsar4: function () {
  function pulsar4 () {
    document.getElementsByClassName('tecla')[8].style.width = "20%";
    document.getElementsByClassName('tecla')[8].style.height = "60.91px";
    setTimeout("calculadora.normal2(8)",50)
  }
     calculadora.numero4.addEventListener("click", pulsar4);
},
pulsar5: function () {
  function pulsar5 () {
    document.getElementsByClassName('tecla')[9].style.width = "20%";
    document.getElementsByClassName('tecla')[9].style.height = "60.91px";
    setTimeout("calculadora.normal2(9)",50)
  }
     calculadora.numero5.addEventListener("click", pulsar5);
},
pulsar6: function () {
  function pulsar6 () {
    document.getElementsByClassName('tecla')[10].style.width = "20%";
    document.getElementsByClassName('tecla')[10].style.height = "60.91px";
    setTimeout("calculadora.normal2(10)",50)
  }
     calculadora.numero6.addEventListener("click", pulsar6);
},
pulsar7: function () {
  function pulsar7 () {
    document.getElementsByClassName('tecla')[4].style.width = "20%";
    document.getElementsByClassName('tecla')[4].style.height = "60.91px";
    setTimeout("calculadora.normal2(4)",50)
  }
     calculadora.numero7.addEventListener("click", pulsar7);
},
pulsar8: function () {
  function pulsar8 () {
    document.getElementsByClassName('tecla')[5].style.width = "20%";
    document.getElementsByClassName('tecla')[5].style.height = "60.91px";
    setTimeout("calculadora.normal2(5)",50)
  }
     calculadora.numero8.addEventListener("click", pulsar8);
},
pulsar9: function () {
  function pulsar9 () {
    document.getElementsByClassName('tecla')[6].style.width = "20%";
    document.getElementsByClassName('tecla')[6].style.height = "60.91px";
    setTimeout("calculadora.normal2(6)",50)
  }
     calculadora.numero9.addEventListener("click", pulsar9);
},
pulsar0: function () {
  function pulsar0 () {
    document.getElementsByClassName('tecla')[15].style.width = "20%";
    document.getElementsByClassName('tecla')[15].style.height = "60.91px";
    setTimeout("calculadora.normal(15)",50)
  }
     calculadora.numero0.addEventListener("click", pulsar0);
},
pulsarigual: function () {
  function pulsarigual () {
    document.getElementsByClassName('tecla')[17].style.width = "27.5%";
    document.getElementsByClassName('tecla')[17].style.height = "60.91px";
    setTimeout("calculadora.normal(17)",50)
  }
     calculadora.igual.addEventListener("click", pulsarigual);     
},
pulsarpunto: function () {
  function pulsarpunto () {
    document.getElementsByClassName('tecla')[16].style.width = "27.5%";
    document.getElementsByClassName('tecla')[16].style.height = "60.91px";
    setTimeout("calculadora.normal(16)",50)
  }
     calculadora.punto.addEventListener("click", pulsarpunto);     
},
pulsarsuma: function (){
  function pulsarsuma () {
    document.getElementsByClassName('tecla')[18].style.width = "85%";
    document.getElementsByClassName('tecla')[18].style.height = "95%";
    setTimeout("calculadora.normal3(18)",30)
  }
     calculadora.suma.addEventListener("click", pulsarsuma);   
},
pulsaresta: function () {
  function pulsaresta() {
    document.getElementsByClassName('tecla')[11].style.width = "20%";
    document.getElementsByClassName('tecla')[11].style.height = "60.91px";
    setTimeout("calculadora.normal2(11)",50)
  }
     calculadora.resta.addEventListener("click", pulsaresta);
},
pulsarmultiplicacion: function () {
  function pulsarmultiplicacion () {
    document.getElementsByClassName('tecla')[7].style.width = "20%";
    document.getElementsByClassName('tecla')[7].style.height = "60.91px";
    setTimeout("calculadora.normal2(7)",50)
  }
     calculadora.multiplica.addEventListener("click", pulsarmultiplicacion);
},
pulsardivision: function () {
  function pulsardivision () {
    document.getElementsByClassName('tecla')[3].style.width = "20%";
    document.getElementsByClassName('tecla')[3].style.height = "60.91px";
    setTimeout("calculadora.normal2(3)",50)
  }
     calculadora.division.addEventListener("click", pulsardivision);
},
pulsarnegativo: function () {
  function pulsarnegativo () {
    document.getElementsByClassName('tecla')[1].style.width = "20%";
    document.getElementsByClassName('tecla')[1].style.height = "60.91px";
    setTimeout("calculadora.normal2(1)",50)
  }
     calculadora.negativo.addEventListener("click", pulsarnegativo);
},
pulsarlimpiar: function () {
  function pulsarlimpiar () {
    document.getElementsByClassName('tecla')[0].style.width = "20%";
    document.getElementsByClassName('tecla')[0].style.height = "60.91px";
    setTimeout("calculadora.normal2(0)",50)
  }
     calculadora.limpiar.addEventListener("click", pulsarlimpiar);
},
}
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
calculadora.pulsar1()
calculadora.pulsar2()
calculadora.pulsar3()
calculadora.pulsar4()
calculadora.pulsar5()
calculadora.pulsar6()
calculadora.pulsar7()
calculadora.pulsar8()
calculadora.pulsar9()
calculadora.pulsar0()
calculadora.pulsarigual()
calculadora.pulsarlimpiar()
calculadora.pulsaresta()
calculadora.pulsardivision()
calculadora.pulsarmultiplicacion()
calculadora.pulsarnegativo()
calculadora.pulsarlimpiar()
calculadora.pulsarpunto()
calculadora.pulsarsuma()