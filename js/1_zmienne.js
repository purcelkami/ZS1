var imie, nazwisko1 = "Kowalski";
imie = "Janusz";
document.write(imie);
// + konkatenacja
document.write("<br> Masz na imię: "+imie);
var nazwisko;
nazwisko = "Purcel";
document.write("<br> Masz na nazwisko: "+nazwisko +"<br>");
//document.write("<br> Masz na nazwisko: "+nazwisko1 + "<br>");
var wiek = 10;
if(wiek >=65)
    document.write("Jesteś na emeryturze");
else if (wiek >=18)
     document.write("Jesteś pełnoletni");
else if (wiek <=15)
    document.write("Jesteś dzieckiem");
else
    document.write("Nie jesteś pełnoletni");
/*>65 masz dużo lat
>=18 jesteś pełnoletni
<=15 Jesteń dzieckiem
nie jesteśpełnoletni 16,17 */
var x,y;
x=10;
y=7;
var suma = x + y ;
//alert("suma wynosi: " +suma);
var ruznica =x - y;
var dzielenie;
dzielenie = x / y;
mnozenie = x % y;
modulo = x % y;
console.log(modulo);
