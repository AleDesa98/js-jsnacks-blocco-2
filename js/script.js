// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var inventarioBici = [
    {
        nome : "bici1",
        peso : 15
    },
    {
        nome : "bici2",
        peso : 10
    },
    {
        nome : "bici3",
        peso : 20
    }
]
var pesoBici = [];

for (i = 0; i < inventarioBici.length; i++) {
    pesoBici.push (inventarioBici[i].peso);
    pesoBici.sort();
}
var nomeBiciLeggera = ""

for (i = 0; i < inventarioBici.length; i++) {
    if (pesoBici[0] == inventarioBici[i].peso) {
        nomeBiciLeggera = inventarioBici[i].nome;
    }
}
console.log("La bici con il peso minore è: " + nomeBiciLeggera);

// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var squadre = [
    {
        nome : "juve",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "roma",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "milan",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "inter",
        puntiFatti : 0,
        falliSubiti : 0
    },
]

for (i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = getRandomNumber(1, 10);
    squadre[i].falliSubiti = getRandomNumber(1, 10);
}

var squadreDopo = [];

for (i = 0; i < squadre.length; i++) {
    squadreDopo.push(squadre[i].nome + " " + squadre[i].falliSubiti);
}

console.log(squadreDopo);

// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = 3;
var b = 7;
var nuovoArray = [];
function snack3(array, a, b) {
    for (i = a; i <= b; i++) {
        nuovoArray.push(array[i])
    }
    return nuovoArray;
}

nuovoArray = snack3(array, a, b);
console.log(nuovoArray);