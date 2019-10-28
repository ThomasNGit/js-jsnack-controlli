//In un array sono contenuti i nomi degli invitati alla festa 
//del grande Gatsby, chiedi all’utente il suo nome e comunicagli
//se può partecipare o no alla festa.

//dichiarazione delle variabili
var invitati, username, invitato;

//creo l'array
invitati = ["Pino", "Caio", "Sempronio"];

console.log(invitati);

//creo il prompt per chiedere all'utente il suo nome

username = prompt("Come ti chiami?");

console.log(username);

//variabile appoggio
invitato = false;



//creazione ciclo per verificare mail
for (i = 0; i < invitati.length; i++){

    if (username == invitati[i]) {

        invitato = true;

    }


}

//stampa in pagina

if (invitato == true) {

    document.getElementById("risultato").innerHTML = "Ciao, " + username + ", sei nella lista."

} else {

    document.getElementById("risultato").innerHTML = "Ciao, " + username + ", non sei nella lista."

}

