var acumulado = "";
var resultado = 0;
var valor1 = 0;
var suma = false;
var resta = false;
var multi = false;
var div = false;
var decimal = false;

function clearValue(id) {
    var texto = document.getElementById(id);
    texto.value = "";
    acumulado = "";
}

function cambiaTitulo(id) {
    var texto = document.getElementById(id);
    texto.setAttribute("style", "font-size: 100%");
    texto.value = "Click para borrar";
}

function restaurar(id) {
    var texto = document.getElementById(id);
    texto.setAttribute("style", "font-size: 130%");
    texto.value = acumulado;
}

function addElement(elemento) {
    var pantalla = document.getElementById('valores');
    if (!isNaN(elemento)) {
        acumulado += elemento;
        pantalla.value = acumulado;
    } else if (elemento === '=') {
        var texto = document.getElementById('valores');

        if (suma) {
            resultado = valor1 + parseFloat(acumulado);
        }
        if (resta) {
            resultado = valor1 - parseFloat(acumulado);
        }
        if (multi) {
            resultado = valor1 * parseFloat(acumulado);
        }
        if (div) {
            resultado = valor1 / parseFloat(acumulado);
        }
        texto.value = resultado;
        acumulado = resultado;
        decimal = false;

    } else if (elemento === '.' && !decimal){
        decimal = true;
        acumulado += '.';

    }else {
        valor1 = parseFloat(acumulado);
        acumulado = "";
        decimal = false;
        switch (elemento) {
            case '+':
                suma = true;
                resta = false;
                multi = false;
                div = false;
                break;

            case '-':
                suma = false;
                resta = true;
                multi = false;
                div = false;
                break;

            case '*':
                suma = false;
                resta = false;
                multi = true;
                div = false;
                break;

            case '/':
                suma = false;
                resta = false;
                multi = false;
                div = true;
                break;
        }
    }
}