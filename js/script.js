// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

var arrayRandom = [];

// Un alert espone 5 numeri casuali.
for (var i = 0; i < 5; i++) {
  var numRandom = getRandomNumber (1, 100);
  arrayRandom.push(numRandom);
  console.log(numRandom);
}

alert('Ricorda i seguenti numeri' + ' ' + arrayRandom);

console.log(arrayRandom);


// Parte un timer di 30 secondi.

// L'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
setTimeout(insertNumber, 30000);

function insertNumber() {
  var arrayUser = [];
  for (var i = 0; i < 5; i++) {
    var numUser = parseInt(prompt('Inserisci un numero alla volta'));
    for (var j = 0; j < arrayRandom.length; j++) {
      if(arrayRandom[j] == numUser){
        arrayUser.push(numUser);
      }
    }
    console.log(numUser);
  }
  alert(' Hai indovinato ' + arrayUser.length + ' numeri' +
  '\nQuesti i numeri indovinati: ' + arrayUser);
}

// Funzione dei numeri random
function getRandomNumber (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}
