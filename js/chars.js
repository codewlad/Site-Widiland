// Load content in English or Portuguese on first page load
function loadContentBr() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerChars">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Personagens</h1>

			<p>Atualmente, nós temos 4 tipos de trabalhadores: <strong>Fazendeiro</strong>, <strong>Criador</strong>, <strong>Cozinheiro</strong> e <strong>Mineiro</strong>. Cada um deles, possui 5 raridades diferentes: <strong class="rCommon">Comum</strong>, <strong class="rUncommon">Incomum</strong>, <strong class="rRare">Raro</strong>, <strong class="rEpic">Épico</strong> e <strong class="rLegendary">Lendário.</strong></p>

			<section class="chars">`
				for(reg of chars) {
					let id = reg.name.toLowerCase();
					txt += `
					<div class="mainBox flexC20 boxChars">
						<h2>${reg.nameBr}</h2>
						<p>${reg.descBr}</p>
						<div class="containerImgChars">
							<img src="./img/${id}.png" id="${id}" class="myImg" alt="${reg.nameBr}" onclick="modall('${id}')">
							<img src="./img/${id}job.png" id="${id}job" class="myImg"  alt="${reg.nameBr} trabalhando" onclick="modall('${id}job')">
						</div>
						<div class="infoChars">
							<p class="infoTable even">
								<span class="main-h3">Raridade</span>
								<span class="main-h3">Tempo de produção</span>
								<span class="main-h3">+1 Chance de item</span>
								<span class="main-h3">Bônus de Exp.</span>`
								if(reg.name == "Cook") {
									txt += `
									<span class="main-h3">Produto Especial</span>`
								};
								if(reg.name == "Miner") {
									txt += `
									<span class="main-h3">-1 Gasto de energia</span>`
								};
							txt += `
							</p>`
							for(sub of reg.raritys) {
								txt +=`
								<p class="infoTable even">
									<span class="r${sub.rarity}">${sub.rarityBr}</span>
									<span>${sub.time}</span>
									<span>${sub.luck}</span>
									<span>${sub.exp}</span>`
									if(reg.name == "Cook" || reg.name == "Miner") {
										txt += `
										<span>${sub.extra}</span>`
									};
								txt += `
								</p>
								`
							};
							txt +=`
						</div>
					</div>`
				};
				txt +=`
			</section>
		</div>`
	document.querySelector("main").innerHTML = txt;
}

function loadContentEn() {
    document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerChars">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Characters</h1>

			<p>Currently, we have 4 types of workers: <strong>Farmer</strong>, <strong>Breeder</strong>, <strong>Cook</strong> and <strong>Miner</strong>. Each of them has 5 different rarities: <strong class="rCommon">Common</strong>, <strong class="rUncommon">Uncommon</strong>, <strong class="rRare">Rare</strong>, <strong class="rEpic">Epic</strong> and <strong class="rLegendary">Legendary.</strong></p>

			<section class="chars">`
				for(reg of chars) {
					let id = reg.name.toLowerCase();
					txt += `
					<div class="mainBox flexC20 boxChars">
						<h3>${reg.name}</h3>
						<p>${reg.desc}</p>
						<div class="containerImgChars">
							<img src="./img/${id}.png" id="${id}" class="myImg" alt="${reg.name}" onclick="modall('${id}')">
							<img src="./img/${id}job.png" id="${id}job" class="myImg"  alt="${reg.name} working" onclick="modall('${id}job')">
						</div>
						<div class="infoChars">
							<p class="infoTable even">
								<span class="main-h3">Rarity</span>
								<span class="main-h3">Producing Time</span>
								<span class="main-h3">+1 Item Chance</span>
								<span class="main-h3">Bonus Exp</span>`
								if(reg.name == "Cook") {
									txt += `
									<span class="main-h3">Special Good</span>`
								};
								if(reg.name == "Miner") {
									txt += `
									<span class="main-h3">-1 Energy</span>`
								};
							txt += `
							</p>`
							for(sub of reg.raritys) {
								txt +=`
								<p class="infoTable even">
									<span class="r${sub.rarity}">${sub.rarity}</span>
									<span>${sub.time}</span>
									<span>${sub.luck}</span>
									<span>${sub.exp}</span>`
									if(reg.name == "Cook" || reg.name == "Miner") {
										txt += `
										<span>${sub.extra}</span>`
									};
								txt += `
								</p>
								`
							};
							txt +=`
						</div>
					</div>`
				};
				txt +=`
			</section>
		</div>`
	document.querySelector("main").innerHTML = txt;
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