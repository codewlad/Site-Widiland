// Defining global variables
let input, saida, input_pQtde, input_pQtdeSeeds, input_pQtdeAnimals, input_pTimeChar, input_pTimeMachine, input_pTimeStart, calcLog, endTime = 0;

// Activating buttons and textbox
function activateInputText(){
	input_pQtde = document.getElementById('pQtde');
    input_pQtdeSeeds = document.getElementById('pQtdeSeeds');
    input_pQtdeAnimals = document.getElementById('pQtdeAnimals');
	input_pTimeChar = document.getElementById('pTimeChar');
	input_pTimeMachine = document.getElementById('pTimeMachine');
    input_pTimeStart = document.getElementById('pTimeStart');
	calcLog = document.getElementById('calcLog');
		
	input_pQtde.addEventListener('input', function (a) {
		let char = a.data; // a = "a"
		onlyNumbers(char, input_pQtde.id);
	});

    input_pQtdeSeeds.addEventListener('input', function (b) {
		let char = b.data; // a = "a"
		onlyNumbers(char, input_pQtdeSeeds.id);
	});

    input_pQtdeAnimals.addEventListener('input', function (c) {
		let char = c.data; // a = "a"
		onlyNumbers(char, input_pQtdeAnimals.id);
	});
	
	input_pTimeChar.addEventListener('input', function (d) {
		let char = d.data; // a = "a"
		onlyNumbers(char, input_pTimeChar.id);
	});
	
	input_pTimeMachine.addEventListener('input', function (e) {
		let char = e.data; // a = "a"
		onlyNumbers(char, input_pTimeMachine.id);
	});

    input_pTimeStart.addEventListener('input', function (f) {
		let char = f.data; // a = "a"
		onlyNumbers(char, input_pTimeStart.id);
	});
}

// Load content in English or Portuguese on first page load
function loadContentBr() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerTools">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Ferramentas</h1>

			<p>Aqui você encontrará algumas ferramentas úteis para facilitar a sua vida no jogo.</p>
			
			<section class="search">
				<div id="searchItens">
					<h2>Buscar itens</h2>

					<button id="clearSearch" onclick="clearAllCalc()">Limpar dados</button>
					<label for="input">Qual item deseja buscar?</label>
					<input type="text" id="input" onkeyup="filtrarPCalcBr()" placeholder="Ex: Pão" onpaste="return false" ondrop="return false">
				</div>
				
				<div id="saidaTxtCalc"></div>
				<div id="saidaInfoItem"></div>
			</section>

			<section class="calc">
				<div id="calcItens">
					<h2>Calculadora de Tempo de Produção</h2>

					<div id="calcMachineImg">
						<div class="bg"></div>
						<div id="calcMachineName"></div>
						<div id="calcBowl"></div>
						<div id="calcTime">
							<div class="backOp"></div>
							<label for="pTime" class="pTime">Tempo unitário: </label><br>
							<input type="text" id="pTime" class="pTime" value="-" disabled>
						</div>
					</div>
					<div id="calcModifiers">
						<div class="calcRow1">
							<label for="pQtde" class="calcCol1">Quantidade de itens: </label>
							<input type="text" id="pQtde" placeholder="Ex: 5" onpaste="return false" ondrop="return false" class="calcCol2"><br>
						</div>
						<div class="calcRow1" id="l-pQtdeSeeds">
							<label for="pQtdeSeeds" class="calcCol1">Quantidade de sementes plantadas: </label>
							<input type="text" id="pQtdeSeeds" placeholder="Ex: 7" onpaste="return false" ondrop="return false" class="calcCol2"><br>
						</div>
						<div class="calcRow1" id="l-pQtdeAnimals">
							<label for="pQtdeAnimals" class="calcCol1">Quantidade de animais produzindo: </label>
							<input type="text" id="pQtdeAnimals" placeholder="Ex: 6" onpaste="return false" ondrop="return false" class="calcCol2"><br>
						</div>
						<div class="calcRow1">
							<label for="pTimeChar" class="calcCol1">Redução de tempo pelo person.(%): </label>
							<input type="text" id="pTimeChar" placeholder="Ex: 3" onpaste="return false" ondrop="return false" class="calcCol2"><br>
						</div>
						<div class="calcRow1" id="l-pTimeMachine">
							<label for="pTimeMachine" class="calcCol1">Redução de tempo pela fábrica (%): </label>
							<input type="text" id="pTimeMachine" placeholder="Ex: 10" onpaste="return false" ondrop="return false" class="calcCol2"><br>
						</div>
						<div class="calcRow1">
							<label for="pTotal" class="calcCol1 pTimeTotal">Tempo total: </label>
							<input type="text" id="pTotal" disabled class="calcCol2 pTimeTotal">
						</div>
						<div class="calcRow1">
							<label for="pTimeStart" class="calcCol1">Horário atual: </label>
							<input type="text" id="pTimeStart" placeholder="Ex: 15:45:00" onpaste="return false" ondrop="return false" disabled class="calcCol2"><br>
						</div>
						<div class="calcRow1">
							<label for="pTimeEnd" class="calcCol1 pTimeTotal">Horário de término: </label>
							<input type="text" id="pTimeEnd" disabled class="calcCol2 pTimeTotal">
						</div>						
					</div>
					<div id="calcLog"></div>
				</div>
			</section>
		</div>`
	document.querySelector("main").innerHTML = txt;
	document.getElementById("input").focus();
}

function loadContentEn() {
    document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerTools">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Tools</h1>

			<p>Here you will find some useful tools to make your life in the game easier.</p>
			
			<section class="search">
				<div id="searchItens">
					<h2>Search items</h2>

					<button id="clearSearch" onclick="clearAllCalc()">Clear data</button>
					<label for="input">Which item do you want to search?</label>
					<input type="text" id="input" onkeyup="filtrarPCalcEn()" placeholder="Ex: Bread" onpaste="return false" ondrop="return false">
				</div>
				
				<div id="saidaTxtCalc"></div>
				<div id="saidaInfoItem"></div>
			</section>

			<section class="calc">
				<div id="calcItens">
					<h2>Production time calculator</h2>

					<div id="calcMachineImg">
						<div class="bg"></div>
						<div id="calcMachineName"></div>
						<div id="calcBowl"></div>
						<div id="calcTime">
							<div class="backOp"></div>
							<label for="pTime" class="pTime">Unit time: </label><br>
							<input type="text" id="pTime" class="pTime" value="-" disabled>
						</div>
					</div>
					<div id="calcModifiers">
						<div class="calcRow1">
							<label for="pQtde" class="calcCol1">Quantity of items: </label>
							<input type="text" id="pQtde" placeholder="Ex: 5" onpaste="return false" ondrop="return false" class="calcCol2"><br>
						</div>
						<div class="calcRow1" id="l-pQtdeSeeds">
							<label for="pQtdeSeeds" class="calcCol1">Number of seeds planted: </label>
							<input type="text" id="pQtdeSeeds" placeholder="Ex: 7" onpaste="return false" ondrop="return false" class="calcCol2"><br>
						</div>
						<div class="calcRow1" id="l-pQtdeAnimals">
							<label for="pQtdeAnimals" class="calcCol1">Number of animals producing: </label>
							<input type="text" id="pQtdeAnimals" placeholder="Ex: 6" onpaste="return false" ondrop="return false" class="calcCol2"><br>
						</div>
						<div class="calcRow1">
							<label for="pTimeChar" class="calcCol1">Time reduction per character (%): </label>
							<input type="text" id="pTimeChar" placeholder="Ex: 3" onpaste="return false" ondrop="return false" class="calcCol2"><br>
						</div>
						<div class="calcRow1" id="l-pTimeMachine">
							<label for="pTimeMachine" class="calcCol1">Machine time reduction (%): </label>
							<input type="text" id="pTimeMachine" placeholder="Ex: 10" onpaste="return false" ondrop="return false" class="calcCol2"><br>
						</div>
						<div class="calcRow1">
							<label for="pTotal" class="calcCol1 pTimeTotal">Total time: </label>
							<input type="text" id="pTotal" disabled class="calcCol2 pTimeTotal">
						</div>
						<div class="calcRow1">
							<label for="pTimeStart" class="calcCol1">Current time: </label>
							<input type="text" id="pTimeStart" placeholder="Ex: 15:45:00" onpaste="return false" ondrop="return false" disabled class="calcCol2"><br>
						</div>
						<div class="calcRow1">
							<label for="pTimeEnd" class="calcCol1 pTimeTotal">End time: </label>
							<input type="text" id="pTimeEnd" disabled class="calcCol2 pTimeTotal">
						</div>						
					</div>
					<div id="calcLog"></div>
				</div>
			</section>
		</div>`
	document.querySelector("main").innerHTML = txt;
	document.getElementById("input").focus();
}

// Function to check the language
function langCheck(){
	if(lang === 'br') {
		loadContentBr();
	} else {
		lang = 'en';
		loadContentEn();
	};
};

// Call the function that checks the language
langCheck();