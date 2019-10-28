// // L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

 //dichiarazioni variabili
 var num1, num2;

 //chiedo all'utente1 un numero
 num1 = parseInt(prompt("Scegli un numero, utente1"));

 console.log(num1);

 document.getElementById("user1").innerHTML = "Il numero scelto dall'user1 è: " + num1;


 //chiedo all'utente2 un numero
 num2 = parseInt(prompt("Scegli un numero, utente2"));

 console.log(num2);

 document.getElementById("user2").innerHTML = "Il numero scelto dall'user2 è: " + num2;


 //stampa in pagina del numero più grande
 if (num1 > num2){

     document.getElementById("maggiore").innerHTML = "Il numero più alto è: " + num1;

 } else if (num1 < num2){

     document.getElementById("maggiore").innerHTML = "Il numero più alto è: " + num2;

 } else {

     document.getElementById("maggiore").innerHTML = "Avete scelto lo stesso numero.";

}
