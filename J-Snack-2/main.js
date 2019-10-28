//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


//dichiarazione variabili
var parola1, parola2, risultato;

//chiedo all'utente1 la parola
parola1 = prompt("Scrivi una parola");

console.log(parola1);


//chiedo all'utente2 la parola
parola2 = prompt("Scrivi anche tu una parola");

console.log(parola2);

risultato = document.getElementById("risultato");

//stampo la parola più grande
if (parola1.length > parola2.length) {

    risultato.innerHTML = "La parola più corta è: " + parola2 + "." + "<br>" + " Quella più lunga è: " + parola1;
   
} else if (parola1.length < parola2.length) {

    risultato.innerHTML = "La parola più corta è: " + parola1 + "." + "<br>" + " Quella più lunga è: " + parola2;

} else {

    risultato.innerHTML = "Le parole hanno la stessa lunghezza."
    
}
