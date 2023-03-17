let oldValueQtde, oldValuepQtdeSeeds, oldValuepQtdeAnimals, oldValueChar, oldValueMachine;

function onlyNumbers(char, id) {
	if(char == ' ') {
		calcLog.style.display = 'block';
		if(lang == 'br') {
			calcLog.innerHTML = "Apenas números são permitidos.";
		} else {
			calcLog.innerHTML = "Only numbers are allowed.";
		}
		document.getElementById(id).value = "";
	} else if (char >= 0 && char <= 9) {
		switch(id) {
			case 'pQtde':
				if(input_pQtde.value > 99) {
					calcLog.style.display = 'block';
					if(lang == 'br') {
						calcLog.innerHTML = "A quantidade máxima é 99.";
					} else {
						calcLog.innerHTML = "The maximum amount is 99.";
					}
					input_pQtde.value = oldValueQtde;
				} else {
					calcLog.innerHTML = "";
					calcLog.style.display = 'none';
					oldValueQtde = input_pQtde.value;
				}
			break;
			case 'pQtdeSeeds':
				if(input_pQtdeSeeds.value > 9) {
					calcLog.style.display = 'block';
					if(lang == 'br') {
						calcLog.innerHTML = "A quantidade máxima é 9.";
					} else {
						calcLog.innerHTML = "The maximum amount is 9.";
					}
					input_pQtdeSeeds.value = oldValuepQtdeSeeds;
				} else {
					calcLog.innerHTML = "";
					calcLog.style.display = 'none';
					oldValuepQtdeSeeds = input_pQtdeSeeds.value;
				}
			break;
			case 'pQtdeAnimals':
				if(input_pQtdeAnimals.value > 6) {
					calcLog.style.display = 'block';
					if(lang == 'br') {
						calcLog.innerHTML = "A quantidade máxima é 6.";
					} else {
						calcLog.innerHTML = "The maximum amount is 6.";
					}
					input_pQtdeAnimals.value = oldValuepQtdeAnimals;
				} else {
					calcLog.innerHTML = "";
					calcLog.style.display = 'none';
					oldValuepQtdeAnimals = input_pQtdeAnimals.value;
				}
			break;
			case 'pTimeChar':
				if(input_pTimeChar.value > 33) {
					calcLog.style.display = 'block';
					if(lang == 'br') {
						calcLog.innerHTML = "A quantidade máxima é 33.";
					} else {
						calcLog.innerHTML = "The maximum amount is 33.";
					}
					input_pTimeChar.value = oldValueChar;
				} else {
					calcLog.innerHTML = "";
					calcLog.style.display = 'none';
					oldValueChar = input_pTimeChar.value;
				}
			break;
			case 'pTimeMachine':
				if(input_pTimeMachine.value > 10) {
					calcLog.style.display = 'block';
					if(lang == 'br') {
						calcLog.innerHTML = "A quantidade máxima é 10.";
					} else {
						calcLog.innerHTML = "The maximum amount is 10.";
					}
					input_pTimeMachine.value = oldValueMachine;
				} else {
					calcLog.innerHTML = "";
					calcLog.style.display = 'none';
					oldValueMachine = input_pTimeMachine.value;
				}
			break;
		}
	} else {
		calcLog.style.display = 'block';
		if(lang == 'br') {
			calcLog.innerHTML = "Apenas números são permitidos.";
		} else {
			calcLog.innerHTML = "Only numbers are allowed.";
		}
		document.getElementById(id).value = "";
	}

	if(document.getElementById('pTime').value == ''){
		return false;
	}
    timeToSec();
}

function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}

function calcTotalTime() {
	let now = new Date;
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
	let nowDate = hours+':'+minutes+':'+seconds;
	document.getElementById('pTimeStart').value = nowDate;
	let calcMinutes = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds() + endTime;
	let endCalcTime = convertHMS(calcMinutes)
	if(calcMinutes < 75600) {
		document.getElementById('pTimeEnd').value = endCalcTime;
		document.getElementById('pTimeEnd').style.color = "rgb(84, 84, 84)";
	} else if(calcMinutes >= 75600 && calcMinutes < 86400) {
		document.getElementById('pTimeEnd').value = endCalcTime;
	} else {
		if(calcMinutes != "Infinity") {
			while(calcMinutes >= 86400) {
				calcMinutes -= 86400;
			}
			let endCalcTime = convertHMS(calcMinutes);
			document.getElementById('pTimeEnd').value = endCalcTime;
		} else {
			document.getElementById('pTimeEnd').value = convertHMS((now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds());
		}
	}
}

setInterval(calcTotalTime, 1000);

function timeToSec() {
	let qtde = Number(document.getElementById('pQtde').value);
    let input_pQtdeSeeds = document.getElementById('pQtdeSeeds').value;
    let input_pQtdeAnimals = document.getElementById('pQtdeAnimals').value;
	let pTimeChar = Number(document.getElementById('pTimeChar').value);
	let pTimeMachine = Number(document.getElementById('pTimeMachine').value);
    let input_pTimeStart = document.getElementById('pTimeStart').value;
	let descMachine = 1 - ((pTimeChar + pTimeMachine) / 100);
    let descLand = 1 - ((pTimeChar) / 100);
	let descFarm = 1 - ((pTimeChar) / 100);
	if(productTime == '??') {
		if(lang == 'br') {
			document.getElementById('pTotal').value = "??";
		} else {
			document.getElementById('pTotal').value = "??";
		}		
	} else if (productTime != '00:00:00') {
        switch(itemType) {
            case "land":
				let calcSeed;
                if(qtde % 2 === 1) {
                    qtde +=1
                }
                input_pQtdeSeeds *= 2;
                if(input_pQtdeSeeds > qtde) {
                    calcSeed = 1;
					console.log(calcSeed);
                } else {
                    calcSeed = Math.ceil(qtde / input_pQtdeSeeds);
					if(!calcSeed) {
						calcSeed = 0;
					}
                }
				endTime = ((productTime * 60) * calcSeed) * descLand;
                let resultSeed = convertHMS(((productTime * 60) * calcSeed) * descLand);
                if(qtde > 0 && input_pQtdeSeeds > 0) {
                    document.getElementById('pTotal').value = resultSeed;
                } else {
                    document.getElementById('pTotal').value = "00:00:00";
                }
            break;
            case "farm":
				
				let calcAnimals;
				if(input_pQtdeAnimals > qtde) {
					calcAnimals = 1;
				} else {
					calcAnimals = Math.ceil(qtde / input_pQtdeAnimals);
					if(!calcAnimals) {
						calcAnimals = 0;
					}
				}
				endTime = ((productTime * 60) * calcAnimals) * descFarm;
                let resultAnimals = convertHMS(((productTime * 60) * calcAnimals) * descFarm);
				if(qtde > 0 && input_pQtdeAnimals > 0) {
                    document.getElementById('pTotal').value = resultAnimals;
                } else {
                    document.getElementById('pTotal').value = "00:00:00";
                }
            break;
            case "machine":
				endTime = ((productTime * 60) * qtde) * descMachine;
                document.getElementById('pTotal').value = convertHMS(((productTime * 60) * qtde) * descMachine);
            break;
        }
		calcTotalTime();
	} else {
		return false;
	}
}

function showModifiers() {
    document.getElementById("calcModifiers").style.display = "flex";
    switch(itemType) {
        case "land":
            document.getElementById("l-pQtdeAnimals").style.display = "none";
            document.getElementById("l-pTimeMachine").style.display = "none";
            document.getElementById("l-pQtdeSeeds").style.display = "block";
        break;
        case "farm":
            document.getElementById("l-pQtdeAnimals").style.display = "block";
            document.getElementById("l-pTimeMachine").style.display = "none";
            document.getElementById("l-pQtdeSeeds").style.display = "none";
        break;
        case "machine":
            document.getElementById("l-pQtdeAnimals").style.display = "none";
            document.getElementById("l-pTimeMachine").style.display = "block";
            document.getElementById("l-pQtdeSeeds").style.display = "none";
        break;
    }
    timeToSec();
    activateInputText();
}