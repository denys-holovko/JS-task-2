var unitEuro=29.3220;
var unitDollar=26.4840;
var dev = unitEuro/unitDollar;
var euro = prompt("How much euro", 228);
var dollars = prompt("How much dollars", 420);
var sumEuro = euro*unitEuro;
var sumDollars = dollars*unitDollar;
alert(euro + " euros are equal " + sumEuro.toFixed(0) + " grns, " + dollars + " dollars are equal " + sumDollars.toFixed(0)  + ", one euro is equal " + dev.toFixed(3) + " dollars.");
