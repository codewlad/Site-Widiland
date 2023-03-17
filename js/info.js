// Load content in English or Portuguese on first page load
function loadContentBr() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerInfo">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Informações</h1>

			<section class="info">
				<h2>Level Widian</h2>
				<div class="mainBox flexC20center" style="gap: 0px;">
					<div class="widthLevel">
						<div id="lw-full">
							<p class="infoTable even">
								<span class="main-h3">Level</span>
								<span class="main-h3">Total de pontos hash</span>
								<span class="main-h3">Qtde de bilhetes ganhos</span>
								<span class="main-h3">Tempo de espera p/ ordens excluídas</span>
								<span class="main-h3">mWSO total possível de missões diárias</span>
								<span class="main-h3">Tempo para restaurar 1 energia</span>
								<span class="main-h3">Energia total restaurada em 24h</span>
							</p>`
							for(reg of widianLevel){
								txt += `
									<p class="infoTable even">
										<span>${reg.level}</span>
										<span>${reg.hashpoint}</span>
										<span>${reg.ticket}</span>
										<span>${reg.ordercooldown}</span>
										<span>${reg.mwso}</span>
										<span>${reg.restoreenergy}</span>
										<span>${reg.energyrestored}</span>
									</p>`
							};
							txt += `
						</div>
					</div>
					<div class="widthLevel">
						<div id="lw-mob1">
							<p class="infoTable">
								<span class="main-h3">Level</span>
								<span class="main-h3">Total de pontos hash</span>
								<span class="main-h3">Qtde de bilhetes ganhos</span>
								<span class="main-h3">Tempo de espera p/ ordens excluídas</span>
							</p>`
							for(reg of widianLevel){
								txt += `
									<p class="infoTable even">
										<span>${reg.level}</span>
										<span>${reg.hashpoint}</span>
										<span>${reg.ticket}</span>
										<span>${reg.ordercooldown}</span>
									</p>`
							};
							txt += `
						</div>
						<div id="lw-mob2">
							<p class="infoTable">
								<span class="main-h3">Level</span>
								<span class="main-h3">mWSO total possível de missões diárias</span>
								<span class="main-h3">Tempo para restaurar 1 energia</span>
								<span class="main-h3">Energia total restaurada em 24h</span>
							</p>`
							for(reg of widianLevel){
								txt += `
									<p class="infoTable even">
										<span>${reg.level}</span>
										<span>${reg.mwso}</span>
										<span>${reg.restoreenergy}</span>
										<span>${reg.energyrestored}</span>
									</p>`
							};
							txt += `
						</div>
					</div>
				</div>
			</section>

			<section class="info">
				<h2>Energia para Mineração</h2>

				<p>Cada NFT tem um valor de acordo com o seu tipo e raridade. A soma desses valores é a sua quantidade total de energia disponível para mineração.</p>

				<div class="mainBox flexC20center">
					<div class="widthEnergy">
						<div id="infoEnergy">
							<p class="infoTable">
								<span class="main-h3">Raridade</span>
								<span class="main-h3">Personagens</span>
								<span class="main-h3">Terras</span>
							</p>`
							for(reg of miningEnergy){
								txt += `
									<p class="infoTable even">
										<span class="r${reg.rarity}">${reg.rarityBr}</span>
										<span>${reg.character}</span>
										<span>${reg.land}</span>
									</p>`
							};
							txt += `
						</div>
					</div>
				</div>
			</section>

			<section class="info">
				<h2>Explorando Recursos</h2>

				<div class="mainBox flexC20center">
					<div class="widthResources">`
						for(reg of exploringResources) {
							txt += `
							<div>
								<h3>Level ${reg.level}</h3>
								<p class="infoTable odd">
									<span class="main-h3">Recurso</span>
									<span class="main-h3">Energia requerida</span>
									<span class="main-h3">Tempo de coleta</span>
									<span class="main-h3">Tempo para restaurar</span>
								</p>`
								for (sub of reg.subitem) {
									txt += `
									<p class="infoTable odd">
										<span>${sub.resourceBr}</span>
										<span>${sub.energy}</span>
										<span>${sub.time}</span>
										<span>${sub.restore}</span>
									</p>`
								};
							txt += `
							</div>`
						};
						txt += `
					</div>					
				</div>
			</section>

			<section class="info">
				<h2>Recompensa em mWSO para os Desafios Diários</h2>

				<div class="mainBox flexC20center">
					<div class="widthReward">
						<div>
							<p class="infoTable">
								<span class="main-h3">Desafios Diários</span>
								<span class="main-h3">1ª Estrela</span>
								<span class="main-h3">2ª Estrela</span>
								<span class="main-h3">3ª Estrela</span>
							</p>`
							for(reg of dailyQuest) {
								txt += `
								<p class="infoTable even">
									<span>${reg.dq}</span>
									<span>${reg.star1}</span>
									<span>${reg.star2}</span>
									<span>${reg.star3}</span>
								</p>`
							};
							txt += `
						</div>
					</div>
				</div>
			</section>

			<section class="info">
				<h2>Valor do Campo de Plantação</h2>

				<div class="mainBox flexC20center">
					<div class="widthField">
						<div class="infoPlantationField">
							<img id="infoField" src="./img/field.png" class="myImg" alt="" onclick="modall('infoField')">
							<div>
								<p class="infoTable">
									<span class="main-h3">Compras</span>
									<span class="main-h3">Custo em mWSO</span>
								</p>`
								for(reg of plantationField) {
									txt += `
									<p class="infoTable even">
										<span>${reg.purchasesBr}</span>
										<span>${reg.cost}</span>
									</p>`
								};
								txt += `
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="info">
				<h2>Depósito</h2>

				<div class="mainBox flexC20center">
					<div class="widthStorage">
						<div class="infoStorage">
							<p class="infoTable">
								<span class="main-h3">Aumento na capacidade</span>
								<span class="main-h3">Capacidade total</span>
								<span class="main-h3">Custo em mWSO</span>
								<span id="infoStorageItems1" class="main-h3">Itens necessários</span>
							</p>`
							for(reg of storage) {
								txt += `
								<p class="infoTable even">
									<span>${reg.increase}</span>
									<span>${reg.total}</span>
									<span>${reg.cost}</span>
									<span id="infoStorageItems2">`
										for(sub of reg.items) {
											if(sub.item != "") {
												let item = sub.item.toLowerCase().replace(/\s+/g, '');
												txt += `
												<img src="./img/${item}.png">${sub.qty}&nbsp;${sub.itemBr}<br>`
											};
										};
										txt += `									
									</span>
								</p>`
							};
							txt += `
						</div>
					</div>
				</div>
			</section>
		</div>`
	document.querySelector("main").innerHTML = txt;
}

function loadContentEn() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerInfo">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Informações</h1>

			<section class="info">
				<h2>Level Widian</h2>
				<div class="mainBox flexC20center" style="gap: 0px;">
					<div class="widthLevel">
						<div id="lw-full">
							<p class="infoTable even">
								<span class="main-h3">Level</span>
								<span class="main-h3">Hash point total</span>
								<span class="main-h3">Treasure ticket earned</span>
								<span class="main-h3">Delete order cooldown</span>
								<span class="main-h3">Total possible mWSO from daily quests</span>
								<span class="main-h3">Time to restore 1 energy</span>
								<span class="main-h3">Total energy restored in 24h</span>
							</p>`
							for(reg of widianLevel){
								txt += `
									<p class="infoTable even">
										<span>${reg.level}</span>
										<span>${reg.hashpoint}</span>
										<span>${reg.ticket}</span>
										<span>${reg.ordercooldown}</span>
										<span>${reg.mwso}</span>
										<span>${reg.restoreenergy}</span>
										<span>${reg.energyrestored}</span>
									</p>`
							};
							txt += `
						</div>
					</div>
					<div class="widthLevel">
						<div id="lw-mob1">
							<p class="infoTable">
								<span class="main-h3">Level</span>
								<span class="main-h3">Hash point total</span>
								<span class="main-h3">Treasure ticket earned</span>
								<span class="main-h3">Delete order cooldown</span>
							</p>`
							for(reg of widianLevel){
								txt += `
									<p class="infoTable even">
										<span>${reg.level}</span>
										<span>${reg.hashpoint}</span>
										<span>${reg.ticket}</span>
										<span>${reg.ordercooldown}</span>
									</p>`
							};
							txt += `
						</div>
						<div id="lw-mob2">
							<p class="infoTable">
								<span class="main-h3">Level</span>
								<span class="main-h3">Total possible mWSO from daily quests</span>
								<span class="main-h3">Time to restore 1 energy</span>
								<span class="main-h3">Total energy restored in 24h</span>
							</p>`
							for(reg of widianLevel){
								txt += `
									<p class="infoTable even">
										<span>${reg.level}</span>
										<span>${reg.mwso}</span>
										<span>${reg.restoreenergy}</span>
										<span>${reg.energyrestored}</span>
									</p>`
							};
							txt += `
						</div>
					</div>
				</div>
			</section>

			<section class="info">
				<h2>Mining Energy</h2>

				<p>Each NFT has a value according to its type and rarity. The sum of these values ​its the your total amount of energy available for mining.</p>

				<div class="mainBox flexC20center">
					<div class="widthEnergy">
						<div id="infoEnergy">
							<p class="infoTable">
								<span class="main-h3">Rarity</span>
								<span class="main-h3">Character</span>
								<span class="main-h3">Land</span>
							</p>`
							for(reg of miningEnergy){
								txt += `
									<p class="infoTable even">
										<span class="r${reg.rarity}">${reg.rarity}</span>
										<span>${reg.character}</span>
										<span>${reg.land}</span>
									</p>`
							};
							txt += `
						</div>
					</div>
				</div>
			</section>

			<section class="info">
				<h2>Exploring Resources</h2>

				<div class="mainBox flexC20center">
					<div class="widthResources">`
						for(reg of exploringResources) {
							txt += `
							<div>
								<h3>Level ${reg.level}</h3>
								<p class="infoTable odd">
									<span class="main-h3">Resource</span>
									<span class="main-h3">Required energy</span>
									<span class="main-h3">Collect time</span>
									<span class="main-h3">Time to restore</span>
								</p>`
								for (sub of reg.subitem) {
									txt += `
									<p class="infoTable odd">
										<span>${sub.resource}</span>
										<span>${sub.energy}</span>
										<span>${sub.time}</span>
										<span>${sub.restore}</span>
									</p>`
								};
							txt += `
							</div>`
						};
						txt += `
					</div>		
				</div>
			</section>

			<section class="info">
				<h2>Reward in mWSO for daily quests</h2>

				<div class="mainBox flexC20center">
					<div class="widthReward">
						<div>
							<p class="infoTable">
								<span class="main-h3">Daily Quests</span>
								<span class="main-h3">1st Star</span>
								<span class="main-h3">2nd Star</span>
								<span class="main-h3">3rd Star</span>
							</p>`
							for(reg of dailyQuest) {
								txt += `
								<p class="infoTable even">
									<span>${reg.dq}</span>
									<span>${reg.star1}</span>
									<span>${reg.star2}</span>
									<span>${reg.star3}</span>
								</p>`
							};
							txt += `
						</div>
					</div>
				</div>
			</section>

			<section class="info">
				<h2>Value of the Plantation Field</h2>

				<div class="mainBox flexC20center">
					<div class="widthField">
						<div class="infoPlantationField">
							<img id="infoField" src="./img/field.png" class="myImg" alt="" onclick="modall('infoField')">
							<div>
								<p class="infoTable">
									<span class="main-h3">Purchases</span>
									<span class="main-h3">mWSO Cost</span>
								</p>`
								for(reg of plantationField) {
									txt += `
									<p class="infoTable even">
										<span>${reg.purchases}</span>
										<span>${reg.cost}</span>
									</p>`
								};
								txt += `
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="info">
				<h2>Storage</h2>

				<div class="mainBox flexC20center">
					<div class="widthStorage">
						<div class="infoStorage">
							<p class="infoTable">
								<span class="main-h3">Increase in capacity</span>
								<span class="main-h3">Total storage</span>
								<span class="main-h3">mWSO Cost</span>
								<span id="infoStorageItems1" class="main-h3">Necessary items</span>
							</p>`
							for(reg of storage) {
								txt += `
								<p class="infoTable even">
									<span>${reg.increase}</span>
									<span>${reg.total}</span>
									<span>${reg.cost}</span>
									<span id="infoStorageItems2">`
										for(sub of reg.items) {
											if(sub.item != "") {
												let item = sub.item.toLowerCase().replace(/\s+/g, '');
												txt += `
												<img src="./img/${item}.png">${sub.qty}&nbsp;${sub.item}<br>`
											};
										};
										txt += `									
									</span>
								</p>`
							};
							txt += `
						</div>
					</div>
				</div>
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