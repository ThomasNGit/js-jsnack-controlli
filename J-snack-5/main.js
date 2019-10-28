//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
//un numero, se è dispari inseriscilo nell’array.


//creazione array vuoto

var numbers = [];

//ciclo che chiede sei numeri all'utente
for(i = 1; i <= 6; i++){

    usernumber = parseInt(prompt("Dimmi un numero."))

    console.log(usernumber);
    
    //verifico che il numero sia dispari
 if (usernumber % 2 !== 0){

    //e in caso positivo le pusho nell'array
    numbers.push(usernumber);
 }

}


//stampa in pagina
document.getElementById("risultato").innerHTML = numbers;

console.log(numbers);
