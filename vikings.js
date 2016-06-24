//ITERATION NUMBER 1 y 2. THE VIKING PIT. THE VIKING TRAIN
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var soldiersVikings = [], soldiersSaxons = [];

var Warriors = function(type, health, strength) {
	this.type = type,
	this.health = health,
	this.strength = strength
}

function createVikingsWarriors() {
	return vikings = new Warriors("viking", getRandomInt(20,30),getRandomInt(10,15));
}

function createSaxonsWarriors() {
	return saxons = new Warriors("saxon", getRandomInt(20,30),getRandomInt(1,10));
}	

function createWarriors(numbersVikings, numbersSaxons) {
	counterV = 0;
	while(counterV < numbersVikings){
		soldiersVikings.push(createVikingsWarriors(numbersVikings,numbersSaxons));
		counterV++;
	}

	counterS = 0;
	while(counterS < numbersSaxons){
		soldiersSaxons.push(createSaxonsWarriors(numbersVikings,numbersSaxons));
		counterS++;
	}
}
createWarriors(4,4); //Poner el número de vikingos y saxones

function Different (array,individuo) {
	var j = array.indexOf(individuo);
		if(j != -1) {
		array.splice(j, 1);
	}
	return array;
}

var Train = function() {
	if(soldiersVikings.length < 2) {
		console.log("No hay soldados disponibles para el entrenamiento");
	} else {

		var vikingsA = soldiersVikings[getRandomInt(0,(soldiersVikings.length -1))];	
		var resto = Different(soldiersVikings, vikingsA);
		var vikingsB = resto[getRandomInt(0,(soldiersVikings.length -1))];
		console.log("--- COMIENZA EL ENTRENAMIENTO ---");
		console.log("Salud inicial vikings A: " + vikingsA.health + "Salud inicial vikings B: " + vikingsB.health);
		console.log("Fuerza inicial vikings A: " + vikingsA.strength + "Fuerza inicial vikings B: " + vikingsB.strength);
		
		var counter = 0;
		while (counter < counter + 1) {
			var reduce_health, last_viking;

			if((reduce_health ? last_viking : getRandomInt(0,1)) === 1) {
				console.log("VikingoA da el primer golpe");
				reduce_health = vikingsB.health - vikingsA.strength;
				console.log("VikingoB pierde : " + vikingsA.strength + " de vida");
				vikingsB.health = reduce_health;
				last_viking = 2;
			} else {
				console.log("VikingoB da el primer golpe");
				reduce_health = vikingsA.health - vikingsB.strength;
				console.log("VikingoA pierde: " + vikingsB.strength + " de vida");
				vikingsA.health = reduce_health;
				last_viking = 1;
			}
			counter++;
			if(counter % 2 == 0) {
				console.log(" ---- Round " + counter/2 + " ----");
				console.log("Resumen:") 
				console.log("Fuerza VikingoA : " + vikingsA.strength + " Salud VikingoA: " + vikingsA.health);
				console.log("Fuerza VikingoB : " + vikingsB.strength + " Salud VikingoB: " + vikingsB.health);
				vikingsA.strength = getRandomInt(1,vikingsA.strength);
				vikingsB.strength = getRandomInt(1,vikingsB.strength);
			}
			if(vikingsA.health <= vikingsB.strength){
				counter = undefined;
				console.log("--- Final ---");
				console.log("Ha ganado VikingoB")
				console.log("Ha perdido VikingoA")			
			}
			if(vikingsB.health <= vikingsA.strength) {
				counter = undefined;
				console.log("--- Final ---");
				console.log("Ha ganado VikingoA")
				console.log("Ha perdido VikingoB")				
			}
		}
	}
}
Train();
console.log("------------------------------------------------------------");

//ITERATION NUMBER 3. THE VIKING PIT
var encounter = function() {
	if(soldiersVikings.length < 1 || soldiersSaxons.length < 1) {
		console.log("Todos los soldados están entrenando o en la guerra");
	} else {
		var vikingsA = soldiersVikings[getRandomInt(0,(soldiersVikings.length -1))];	
		var saxonA = soldiersSaxons[getRandomInt(0,(soldiersSaxons.length -1))];
		console.log("--- ENCUENTRO HOSTIL ---");
		console.log("Salud inicial vikingo: " + vikingsA.health + " Salud inicial saxon: " + saxonA.health);
		console.log("Fuerza inicial vikingo: " + vikingsA.strength + " Fuerza inicial saxon: " + saxonA.strength);

		var counter = 0;
		while (counter < counter + 1) {
			var reduce_health;
			var last_viking;
			if((reduce_health ? last_viking : getRandomInt(0,1)) === 1) {
				console.log("Vikingo da el primer golpe");
				reduce_health = saxonA.health - vikingsA.strength;
				console.log("Saxon pierde : " + vikingsA.strength + " de vida");
				saxonA.health = reduce_health;
				console.log("Salud final: " + saxonA.health);
				last_viking = 2;
			} else {
				console.log("Saxon da el primer golpe");
				reduce_health = vikingsA.health - saxonA.strength;
				console.log("Vikingo pierde: " + saxonA.strength + " de vida");
				vikingsA.health = reduce_health;
				console.log("Salud final: " + vikingsA.health);
				last_viking = 1;
			}
			counter++;
			if(counter % 2 == 0) {
				console.log(" ---- Round " + counter/2 + " ----");
				console.log("Resumen:");
				console.log("Fuerza Vikingo: " + vikingsA.strength + " Salud Vikingo: " + vikingsA.health);
				console.log("Fuerza Saxon: " + saxonA.strength + " Salud Saxon: " + saxonA.health);
				vikingsA.strength = getRandomInt(1, vikingsA.strength);
				saxonA.strength = getRandomInt(1, saxonA.strength);
			}
			if(saxonA.health <= vikingsA.strength){
				counter = undefined;
				console.log("Ha muerto el Saxon");
				console.log("El Vikingo sigue su curso");		
			}

			if(vikingsA.health <= saxonA.strength){
				counter = undefined;
				console.log("Ha muerto el Vikingo");
				console.log("El Saxon sigue su curso");		
			}
		}
	}	
}
encounter();
console.log("------------------------------------------------------------");

//ITERATION NUMBER 4. VIKINGS VS SAXON(ASSAULT)
var battle = function() {
	console.log("--- COMIENZA LA BATALLA ---");
	var counterB = 0;
	while (counterB < counterB + 1) {
		var vikingA = soldiersVikings[getRandomInt(0,soldiersVikings.length - 1)];
		var saxonA = soldiersSaxons[getRandomInt(0,soldiersSaxons.length - 1)];
		var reduce_health;
		var last_viking;
		
		if((reduce_health ? last_viking : 1) === 1) {
			console.log("Un Vikingo da el primer golpe");
			reduce_health = saxonA.health - vikingA.strength;
			console.log("El saxon pierde: " + vikingA.strength + " de vida");
			saxonA.health = reduce_health;
			console.log("Salud final: " + saxonA.health);
			last_viking = 2;
		} else {
			console.log("Saxon se defiende");
			reduce_health = vikingA.health - saxonA.strength;
			console.log("Vikingo pierde: " + saxonA.strength + " de vida");
			vikingA.health = reduce_health;
			console.log("Salud final: " + vikingA.health);
			last_viking = 1;
		}
		counterB++;
		if(counterB % 2 == 0) {
			console.log(" ---- Round " + counterB/2 + " ----");
			console.log("Resumen:");
			console.log("Fuerza Vikingo: " + vikingA.strength + " Salud Vikingo: " + vikingA.health);
			console.log("Fuerza Saxon: " + saxonA.strength + " Salud Saxon: " + saxonA.health);
			vikingA.strength = getRandomInt(1,vikingA.strength);
			saxonA.strength = getRandomInt(1,saxonA.strength);
		} 

		if(saxonA.health <= vikingA.strength){
			console.log("¡¡¡¡¡Ha muerto saxon!!!!!");
			var j = soldiersSaxons.indexOf(saxonA);
				if(j != -1) {
				soldiersSaxons.splice(j, 1);
			}
			console.log("El Vikingo sigue luchando");		
		}

		if(vikingA.health <= saxonA.strength){
			console.log("¡¡¡¡¡Ha muerto el Vikingo!!!!!");
			var j = soldiersVikings.indexOf(vikingA);
				if(j != -1) {
				soldiersVikings.splice(j, 1);
			}
			console.log("El saxon sigue luchando");		
		}

		if(soldiersVikings.length === 0 || soldiersSaxons.length === 0) {
		console.log("¡¡¡LA BATALLA HA ACABADO!!!");
		counterB = undefined;
			if(soldiersVikings.length === 0) {
				console.log("¡¡¡EL PUEBLO SAXON HA SOBREVIVIDO!!!");
			} else {
				console.log("¡¡¡LOS VIKINGOS HAN CONQUISTADO EL PUEBLO!!!");
			}
		}
	}
}
battle();
console.log("------------------------------------------------------------");

/*INTENTAMOS PONERLES NOMBRES A LOS VIKINGOS DESDE UN ARCHIVO EXTERNO .TXT
var fs = require('fs');
var arrayNames = [];
	function print (error, content) {
		var users = content.split("\r\n");
		console.log(users)
		var counter = 0;
		while(counter < users.length) {
			var user = users[counter];
			var user2 = arrayNames.push(user[0]);
			counter++;
		}
		return user2 = "paz";//Introducir un ramdon
	}
fs.readFile('nameVikings.txt', 'utf-8', print); 
*/