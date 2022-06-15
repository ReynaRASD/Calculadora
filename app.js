
//Declaramos variables
var operandoa;
var operandob;
var operacion;

   function temas(){

    var seleccion = document.getElementById('optionoOne');
    seleccion.addEventListener("click", ()=>{
    seleccion.className='optionOne';
    seleccion0.className='default';
    seleccion1.className='default'; 
    body.className='body';
    opciones.className='opciones';
    container.className="container";
    theme.className="theme";
    calc.className="calc";
    choose.className="choose";
    uno.className="btn";
    dos.className="btn";
    tres.className="btn";
    cuatro.className="btn";
    cinco.className="btn";
    seis.className="btn";
    siete.className="btn";
    ocho.className="btn";
    nueve.className="btn";
    del.className="dell";
    reset.className="reset";
    igual.className="equal";
    resultado.className="calculadora";
    botones.className="botones";
    suma.className="btn";
    resta.className="btn";
    multiplicacion.className="btn";
    division.className="btn";
    cero.className="btn";
    decimal.className="btn";
    });

    var seleccion0 = document.getElementById('optionoDos');
    seleccion0.addEventListener("click", ()=>{
    seleccion0.className='optionTwo2';
    seleccion.className='default2';
    seleccion1.className='default2';
    body.className='body2';
    opciones.className='opciones2';
    container.className="container2";
    theme.className="theme2";
    calc.className="calc2";
    choose.className="choose2";
    uno.className="btn2";
    dos.className="btn2";
    tres.className="btn2";
    cuatro.className="btn2";
    cinco.className="btn2";
    seis.className="btn2";
    siete.className="btn2";
    ocho.className="btn2";
    nueve.className="btn2";
    del.className="dell2";
    reset.className="reset2";
    igual.className="equal2";
    resultado.className="calculadora2";
    botones.className="botones2";
    suma.className="btn2";
    resta.className="btn2";
    multiplicacion.className="btn2";
    division.className="btn2";
    cero.className="btn2";
    decimal.className="btn2";
});

   var seleccion1 = document.getElementById('optionoTres');
   seleccion1.addEventListener("click", ()=>{
     seleccion1.className='optionThree3';
     seleccion.className='default3';
     seleccion0.className='default3';
     body.className='body3';
    opciones.className='opciones3';
    container.className="container3";
    theme.className="theme3";
    calc.className="calc3";
    choose.className="choose3";
    uno.className="btn3";
    dos.className="btn3";
    tres.className="btn3";
    cuatro.className="btn3";
    cinco.className="btn3";
    seis.className="btn3";
    siete.className="btn3";
    ocho.className="btn3";
    nueve.className="btn3";
    del.className="dell3";
    reset.className="reset3";
    igual.className="equal3";
    resultado.className="calculadora3";
    botones.className="botones3";
    suma.className="btn3";
    resta.className="btn3";
    multiplicacion.className="btn3";
    division.className="btn3";
    cero.className="btn3";
    decimal.className="btn3";
   });
}
    

function init(){

    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var del= document.getElementById('del');
    var decimal= document.getElementById('decimal');

//Eventos de click
    del.onclick = function(e){
        let cad = resultado.textContent;
        cad = cad.split('') // separa el string según espacios en blanco
         .slice(0, -1) // toma todos los elementos menos el último
         .join(''); // vuelve a armar el string
        resultado.textContent = cad;
    }

    decimal.onclick = function(e){
        resultado.textContent = resultado.textContent  + ".";
    }

uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}

function limpiar(){
    resultado.textContent = "";
  }


  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }


  }
