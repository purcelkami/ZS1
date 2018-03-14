//document.getElementById('div1').innerHTML = 'czerwony';

var d1 = document.getElementById('div1');
var d2 = document.getElementById('div2');
var d3 = document.getElementById('div3');
var d4 = document.getElementById('div4');
var inner = document.getElementById('inner');
var content = document.getElementById('content');

d1.innerHTML = 'czerwony';
d1.innerHTML = 'zmieniony na czerwony';

var kolor1 = 'czarny';
d2.innerHTML = kolor1;

var ulubionyKolor = prompt('Podaj kolor');
d3.innerHTML = ulubionyKolor;

d4.textContent = 'granatowy';

//różnica pomiędzy text content a inner html
inner.innerHTML = '<h1>inner</h1>';
content.textContent = '<h1>content</h1>';
