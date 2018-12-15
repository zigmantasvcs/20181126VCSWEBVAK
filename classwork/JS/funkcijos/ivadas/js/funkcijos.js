function spausdintiDviejuSkaiciuSuma(skaicius1, skaicius2){
	var suma = skaicius1 + skaicius2;
	document.write(suma);
}

function getDviejuSkaiciuSuma(skaicius1, skaicius2){
	var suma = skaicius1 + skaicius2;
	return suma;
}

function getRandomNumberBetween(max){
	var randNumber = Math.random()*(max+1);
	var finalNumber = Math.floor(randNumber);
	return finalNumber;
}

function getFive(){
	return 5;
}
