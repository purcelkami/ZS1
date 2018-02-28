var a = 10, b ='5a';
var wynik = a + b;
//alert(wynik);
//alert(a * b);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(wynik)); //string

var _zmienna1 = 10;
console.log(typeof(_zmienna1));

//zmienno przecinkowa
var zmiennoprzecinkowa = 2.5;
console.log(zmiennoprzecinkowa);
console.log(typeof(zmiennoprzecinkowa)); //number


//boolean
//true lub false      prawda lub fałsz        1 lub 0

var prawda = true;
var falsz = false;

console.log(typeof(prawda));
console.log(typeof(falsz));


//string
var imie = 'Janusz';
console.log(typeof(imie));


//undefined

var nazwisko;
console.log(typeof(nazwisko));

//object
var tablica = ['czerwony', 'czarny', 'bialy'];
console.log(tablica);
console.log(typeof(tablica));



//############################################################
//ctrl + kliknięcie zaznaczasz w wielu miejscach

//var liczba = prompt('podaj liczbe');


var wiek1 = prompt('podaj wiek', 'np. 18');
console.log('Twój wiek: ' + wiek1 + ' lat');
console.log(typeof(wiek1)); //string

var wiek2 = prompt('Podaj wiek');
//var suma = wiek1 + wiek2;
//document.write(wiek1 + ' + ' + wiek2 + ' = ' + suma);


//rzutowanie typów danych na liczbe

var wiek3 = Number(prompt('podaj wiek'));

//zamiana na liaczbe całkowitą


//ctrl+shift+/

/*wiek1 = parseInt(wiek1);
wiek2 = parseInt(wiek2);

var suma = wiek1 + wiek2;
document.write(wiek1 + ' + ' + wiek2 + ' = ' + suma);*/

//zamiana typu danych na zmiennoprzecinkowy

wiek1 = parseFloat(wiek1);
wiek2 = parseFloat(wiek2);

var suma = wiek1 + wiek2 + wiek3;
var sredniWiek = suma / 3;
sredniWiek = sredniWiek.toFixed(2);
document.write(wiek1 + ' + ' + wiek2 + ' + ' + wiek3 + ' = ' + suma);
document.write('<br>Sredni wiek wynosi ' + sredniWiek);











