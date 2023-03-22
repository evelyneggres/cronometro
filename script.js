window.onload = function () {
    //Executa um JS imediatamente após o carregamento de uma página. 


// variaveis para os segundos
    var seconds = 00;
    var tens = 00;

// variaveis para acrescentar 
    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');

 // variaveis para ps botões   
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
  
 // função para contagem de tempo   
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval) // O método clearInterval limpa o temporizador definido com o método setinterval(). 

        Interval = setInterval (startTimer, 10) //O método setinterval() chama a função em intervalos especificos (milissegundos)

    };

    buttonStop.onclick = function() {
        clearInterval(Interval);
    };

    buttonReset.onclick = function () {
        clearInterval (Interval)

        tens = "00";
        seconds = "00";

        appendTens.innerHTML = tens; 
        appendSeconds.innerHTML = seconds;
    }

    function startTimer () {
        tens++ //INCREMENTO

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens
        }

        if (tens > 9){
            appendTens.innerHTML = tens 
        }

        if (tens > 99) {
            console.log('seconds')
            seconds++
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds
        }
    }

}