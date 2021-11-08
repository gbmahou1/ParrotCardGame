let numero;
var imgArray = new Array();
let contadormax = 0;
let contadorpontos = 0;
let contacarta = 0;
let contadorjogadas = 0;
var carta1;
var carta2;


function comparador() { 
	return Math.random() - 0.5; 
}

function inicializar() {

    numero = prompt("Com quantas cartas você deseja jogar? (numero par entre 4 e 14");
    while (numero != 4 && numero != 6 && numero != 8 && numero != 10 && numero != 12 && numero != 14)
    {
        alert ("Numero invalido de cartas :/");
        numero = prompt("Com quantas cartas você deseja jogar? (numero par entre 4 e 14");
    }

    if(numero == 4)
    {
        let aux = document.getElementById("layout4");
        aux.classList.remove("hidden");
        contadormax = 2;

        const srcs = ["Arquivos Úteis/explodyparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/explodyparrot.gif"];

        srcs.sort(comparador);

        aux = document.getElementById("l4c1cb");
        aux.src = srcs[0];
        aux = document.getElementById("l4c2cb");
        aux.src = srcs[1];
        aux = document.getElementById("l4c3cb");
        aux.src = srcs[2];
        aux = document.getElementById("l4c4cb");
        aux.src = srcs[3];
    }
    else if(numero == 6)
    {
        let aux = document.getElementById("layout6");
        aux.classList.remove("hidden");
        contadormax = 3;

        const srcs = ["Arquivos Úteis/explodyparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/explodyparrot.gif",
        "Arquivos Úteis/unicornparrot.gif",
        "Arquivos Úteis/unicornparrot.gif"];

        srcs.sort(comparador);

        aux = document.getElementById("l6c1cb");
        aux.src = srcs[0];
        aux = document.getElementById("l6c2cb");
        aux.src = srcs[1];
        aux = document.getElementById("l6c3cb");
        aux.src = srcs[2];
        aux = document.getElementById("l6c4cb");
        aux.src = srcs[3];
        aux = document.getElementById("l6c5cb");
        aux.src = srcs[4];
        aux = document.getElementById("l6c6cb");
        aux.src = srcs[5];

    }
    else if(numero == 8)
    {
        let aux = document.getElementById("layout8");
        aux.classList.remove("hidden");
        contadormax = 4;

        const srcs = ["Arquivos Úteis/explodyparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/explodyparrot.gif",
        "Arquivos Úteis/unicornparrot.gif",
        "Arquivos Úteis/unicornparrot.gif",
        "Arquivos Úteis/tripletsparrot.gif",
        "Arquivos Úteis/tripletsparrot.gif"];

        srcs.sort(comparador);

        aux = document.getElementById("l8c1cb");
        aux.src = srcs[0];
        aux = document.getElementById("l8c2cb");
        aux.src = srcs[1];
        aux = document.getElementById("l8c3cb");
        aux.src = srcs[2];
        aux = document.getElementById("l8c4cb");
        aux.src = srcs[3];
        aux = document.getElementById("l8c5cb");
        aux.src = srcs[4];
        aux = document.getElementById("l8c6cb");
        aux.src = srcs[5];
        aux = document.getElementById("l8c7cb");
        aux.src = srcs[6];
        aux = document.getElementById("l8c8cb");
        aux.src = srcs[7];
    }
    else if(numero == 10)
    {
        let aux = document.getElementById("layout10");
        aux.classList.remove("hidden");
        contadormax = 5;

        const srcs = ["Arquivos Úteis/explodyparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/explodyparrot.gif",
        "Arquivos Úteis/unicornparrot.gif",
        "Arquivos Úteis/unicornparrot.gif",
        "Arquivos Úteis/tripletsparrot.gif",
        "Arquivos Úteis/tripletsparrot.gif",
        "Arquivos Úteis/revertitparrot.gif",
        "Arquivos Úteis/revertitparrot.gif"];

        srcs.sort(comparador);

        aux = document.getElementById("l10c1cb");
        aux.src = srcs[0];
        aux = document.getElementById("l10c2cb");
        aux.src = srcs[1];
        aux = document.getElementById("l10c3cb");
        aux.src = srcs[2];
        aux = document.getElementById("l10c4cb");
        aux.src = srcs[3];
        aux = document.getElementById("l10c5cb");
        aux.src = srcs[4];
        aux = document.getElementById("l10c6cb");
        aux.src = srcs[5];
        aux = document.getElementById("l10c7cb");
        aux.src = srcs[6];
        aux = document.getElementById("l10c8cb");
        aux.src = srcs[7];
        aux = document.getElementById("l10c9cb");
        aux.src = srcs[8];
        aux = document.getElementById("l10c10cb");
        aux.src = srcs[9];
    }
    else if(numero == 12)
    {
        let aux = document.getElementById("layout12");
        aux.classList.remove("hidden");
        contadormax = 6;

        const srcs = ["Arquivos Úteis/explodyparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/explodyparrot.gif",
        "Arquivos Úteis/unicornparrot.gif",
        "Arquivos Úteis/unicornparrot.gif",
        "Arquivos Úteis/tripletsparrot.gif",
        "Arquivos Úteis/tripletsparrot.gif",
        "Arquivos Úteis/revertitparrot.gif",
        "Arquivos Úteis/revertitparrot.gif",
        "Arquivos Úteis/fiestaparrot.gif",
        "Arquivos Úteis/fiestaparrot.gif"];

        srcs.sort(comparador);

        aux = document.getElementById("l12c1cb");
        aux.src = srcs[0];
        aux = document.getElementById("l12c2cb");
        aux.src = srcs[1];
        aux = document.getElementById("l12c3cb");
        aux.src = srcs[2];
        aux = document.getElementById("l12c4cb");
        aux.src = srcs[3];
        aux = document.getElementById("l12c5cb");
        aux.src = srcs[4];
        aux = document.getElementById("l12c6cb");
        aux.src = srcs[5];
        aux = document.getElementById("l12c7cb");
        aux.src = srcs[6];
        aux = document.getElementById("l12c8cb");
        aux.src = srcs[7];
        aux = document.getElementById("l12c9cb");
        aux.src = srcs[8];
        aux = document.getElementById("l12c10cb");
        aux.src = srcs[9];
        aux = document.getElementById("l12c11cb");
        aux.src = srcs[10];
        aux = document.getElementById("l12c12cb");
        aux.src = srcs[11];
    }
    else if(numero == 14)
    {
        let aux = document.getElementById("layout14");
        aux.classList.remove("hidden");
        contadormax = 7;

        const srcs = ["Arquivos Úteis/explodyparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/bobrossparrot.gif", 
        "Arquivos Úteis/explodyparrot.gif",
        "Arquivos Úteis/unicornparrot.gif",
        "Arquivos Úteis/unicornparrot.gif",
        "Arquivos Úteis/tripletsparrot.gif",
        "Arquivos Úteis/tripletsparrot.gif",
        "Arquivos Úteis/revertitparrot.gif",
        "Arquivos Úteis/revertitparrot.gif",
        "Arquivos Úteis/fiestaparrot.gif",
        "Arquivos Úteis/fiestaparrot.gif",
        "Arquivos Úteis/metalparrot.gif",
        "Arquivos Úteis/metalparrot.gif"];

        srcs.sort(comparador);

        aux = document.getElementById("l14c1cb");
        aux.src = srcs[0];
        aux = document.getElementById("l14c2cb");
        aux.src = srcs[1];
        aux = document.getElementById("l14c3cb");
        aux.src = srcs[2];
        aux = document.getElementById("l14c4cb");
        aux.src = srcs[3];
        aux = document.getElementById("l14c5cb");
        aux.src = srcs[4];
        aux = document.getElementById("l14c6cb");
        aux.src = srcs[5];
        aux = document.getElementById("l14c7cb");
        aux.src = srcs[6];
        aux = document.getElementById("l14c8cb");
        aux.src = srcs[7];
        aux = document.getElementById("l14c9cb");
        aux.src = srcs[8];
        aux = document.getElementById("l14c10cb");
        aux.src = srcs[9];
        aux = document.getElementById("l14c11cb");
        aux.src = srcs[10];
        aux = document.getElementById("l14c12cb");
        aux.src = srcs[11];
        aux = document.getElementById("l14c13cb");
        aux.src = srcs[12];
        aux = document.getElementById("l14c14cb");
        aux.src = srcs[13];
    }

}

function clicarcarta(carta) {

    

    
    if(contacarta == 0) {
        
        carta1 = carta;
        contadorjogadas ++;
        
        let aux = carta.querySelector(".cardfront");
        aux.classList.add("hidden");

        aux = carta.querySelector(".cardback");
        aux.classList.remove("hidden");
        
        contacarta = 1;

    } else if(contacarta == 1) {

        carta2 = carta;
        contadorjogadas ++;

        let aux = carta.querySelector(".cardfront");
        aux.classList.add("hidden");

        aux = carta.querySelector(".cardback");
        aux.classList.remove("hidden");
        
        setTimeout(function(){
        if(carta1.querySelector(".cardback").src == carta2.querySelector(".cardback").src)
        {
            contadorpontos ++;
            carta1.disabled = true;
            carta2.disabled = true;

            if (contadorpontos == contadormax)
            {
                alert("Você ganhou em " + parseInt(contadorjogadas) + " jogadas!");
            }
            
        }
        else {
            
            let aux = carta1.querySelector(".cardfront");
            aux.classList.remove("hidden");

            aux = carta1.querySelector(".cardback");
            aux.classList.add("hidden");

            aux = carta2.querySelector(".cardfront");
            aux.classList.remove("hidden");

            aux = carta2.querySelector(".cardback");
            aux.classList.add("hidden");

            carta1 = null;
            carta2 = null;

        }
    },1000);

        contacarta = 0;
    }

}
