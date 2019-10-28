//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

//dichiarazione variabile somma

var somma = 0;

//ciclo for per chiedere i numeri e fare la somma

for (i = 0; i < 5; i++){

    numero = parseInt(prompt("scrivi un numero"));

    console.log(numero);
    
    //ridefinizione della variabile somma
    somma = somma + numero;

}


//stampa in pagina del risultato

console.log("La somma col ciclo FOR è: " + somma);


//ciclo while per chiedere i numeri e fare la somma

var somma2 = 0;

j = 0

while (j < 5) {

    numero = parseInt(prompt("scrivi un numero"));
    
    console.log(numero);
    
    //ridefinizione della variabile somma
    somma2 = somma2 + numero;

    j++
}

console.log("La somma col ciclo WHILE è: " + somma2);

document.getElementById("risultato").innerHTML = "La somma col ciclo FOR è: " + somma + "<br>" + "La somma col ciclo WHILE è: " + somma2;

