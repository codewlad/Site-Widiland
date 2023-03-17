// Load content in English or Portuguese on first page load
function loadContentBr() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerLands">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Terras</h1>

			<section class="lands">`
				for(reg of lands) {
					let id = reg.name.toLowerCase().replace(/\s+/g, '');
					txt += `
					<div class="mainBox flexC20 boxLands">
						<div class="nameLands">
							<h2>${reg.nameBr}</h2>
							<p>Raridade: <span class="r${reg.rarity}">${reg.rarityBr}</span></p>
						</div>
						<div class="contentLands">
							<img src="./img/${id}.png" id="${id}" class="myImg boxLandsImg" alt="${reg.nameBr}" onclick="modall('${id}')">
							<div class="infoLands">
								<p class="infoTable">
									<span class="main-h3">Plantações</span>
									<span class="main-h3">Lvl de desbloqueio</span>
									<span class="main-h3">Tempo de produção</span>
								</p>`
							for(sub of reg.crops) {
								let seedName = sub.name.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
								txt +=`
								<p class="infoTable even">
									<span><img src="./img/${seedName}.png" class="boxLandsImgSeeds">${sub.nameBr}</span>
									<span>${sub.unlock}</span>
									<span>${sub.time}</span>
								</p>`
							};
							txt +=`
							</div>
						</div>
					</div>`
				};
				txt += `
			</section>
		</div>`
	document.querySelector("main").innerHTML = txt;
}

function loadContentEn() {
    document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerLands">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Lands</h1>

			<section class="lands">`
				for(reg of lands) {
					let id = reg.name.toLowerCase().replace(/\s+/g, '');
					txt += `
					<div class="mainBox flexC20 boxLands">
						<div class="nameLands">
							<h2>${reg.name}</h2>
							<p>Rarity: <span class="r${reg.rarity}">${reg.rarity}</span></p>
						</div>
						<div class="contentLands">
							<img src="./img/${id}.png" id="${id}" class="myImg boxLandsImg" alt="${reg.name}" onclick="modall('${id}')">
							<div class="infoLands">
								<p class="infoTable">
									<span class="main-h3">Crops</span>
									<span class="main-h3">Unlock level</span>
									<span class="main-h3">Producing time</span>
								</p>`
							for(sub of reg.crops) {
								let seedName = sub.name.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
								txt +=`
								<p class="infoTable even">
									<span><img src="./img/${seedName}.png" class="boxLandsImgSeeds">${sub.name}</span>
									<span>${sub.unlock}</span>
									<span>${sub.time}</span>
								</p>`
							};
							txt +=`
							</div>
						</div>
					</div>`
				};
				txt += `
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