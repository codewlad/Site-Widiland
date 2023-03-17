let machineId;

// Load content in English or Portuguese on first page load
function loadContentBr() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerMachines">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Máquinas</h1>

			<section class="machines">`
				for(reg of machines) {
					let id = reg.machine.toLowerCase().replace(/\s+/g, '');
					txt += `
					<div class="mainBox flexC20 boxMachines">
						<h2 id="title-${id}" class="links">${reg.machineBr}</h2>
						<img src="./img/${id}.png" id="img-${id}" class="links" alt="${reg.machineBr}">
						<p><strong>Desbloqueia no lvl: ${reg.unlock}</strong></p>
					</div>
					<div id="info-${id}" class="infoMachines">
						<div id="alignInfo-${id}" class="alignInfo">
							<span class="close close-${id}">&times;</span>
							<h2>${reg.machineBr}</h2>
							<img src="./img/${id}.png" class="imgW200" alt="${reg.machineBr}">
							<h3>Produtos</h3>
							<div class="infoMachineContainer">`
								for(sub of reg.products) {
									let productId = sub.product.toLowerCase().replace(/\s+|-/g, '').replace('*','');
									txt += `
									<div class="mainBox infoMachineBox">
										<div>
											<h3 style="justify-content: center;">${sub.productBr}</h3>
											<img src="./img/${productId}.png" class="imgW70">
											<div class="subIngredients">
												<p><span class="main-h3">Ingredientes:&nbsp;</span></p>
												<div>`
													for (sub2 of sub.ingredients) {
														let ingredient = sub2.name.toLowerCase().replace(/\s+/g, '');
														txt += `
														<p><img src="./img/${ingredient}.png" class="imgW30">${sub2.qtde} ${sub2.nameBr}</p>`
													};
													txt += `
												</div>
											</div>
											<p><span class="main-h3">Tempo:</span>&nbsp;${sub.time}</p>
											<p><span class="main-h3">Exp:</span>&nbsp;${sub.exp}</p>
											<p><span class="main-h3">Lvl Desbloq.:</span>&nbsp;${sub.lvl}</p>
										</div>
									</div>`
								};
								txt += `
							</div>
							<h3>Melhorias</h3>
							<div class="infoMachineContainer">`
								for(sub of reg.upgrades) {
									txt += `
									<div class="mainBox infoMachineBox">
										<div>
											<h3 style="justify-content: center;">${sub.level}</h3>
											<div class="subUpgrades">
												<div><p><span class="main-h3">Custo:&nbsp;</span></p></div>
												<div>`
													for (sub2 of sub.costs) {
														let result = sub2.itemBr.indexOf("mWSO");
														txt += `
														<p>`
														if(result < 0) {
															let position = sub2.item.indexOf(" ") + 1;
															let myString = sub2.item.slice(position).toLowerCase().replace(/\s+/g, '');
															txt += `
															<img src="./img/${myString}.png" class="imgW30">`;
														}
														else {
															txt += `
															<img src="./img/mwso.png" class="imgW30">`;
														}
														txt += `
														${sub2.itemBr}</p>`
													};
													txt += `
												</div>
											</div>
											<p><span class="main-h3">Tempo de Redução (%):</span>&nbsp;${sub.time}</p>
											<p><span class="main-h3">Exp (%):</span>&nbsp;${sub.exp}</p>
											<p><span class="main-h3">Espaço:</span>&nbsp;${sub.slot}</p>
										</div>
									</div>`
								};
								txt += `
							</div>
							<h3>Preço de compra</h3>
							<div class="infoMachineContainer">`
								for(sub of reg.purchases) {
									txt += `
									<div class="mainBox infoMachineBox">
										<h3>${sub.timesBr}</h3>
										<div class="subPurchases">
											<div><p><span class="main-h3">Custo:&nbsp;</span></p></div>
											<div>
												<p><img src="./img/mwso.png" class="imgW30">${sub.cost}</p>
											</div>
										</div>
									</div>`
								};
								txt += `
							</div>
							<h3>Espaço extra</h3>
							<div class="infoMachineContainer">`
								for(sub of reg.slots) {
									txt += `
									<div class="mainBox infoMachineBox">
										<h3>${sub.queueBr}</h3>
										<div class="subSlots">
											<div><p><span class="main-h3">Custo:&nbsp;</span></p></div>
											<div>
												<p><img src="./img/mwso.png" class="imgW30">${sub.cost}</p>
											</div>
										</div>
									</div>`
								};
								txt += `
							</div>
						</div>
					</div>`
				};
				txt +=`
			</section>
		</div>`
	document.querySelector("main").innerHTML = txt;
	activateFarmButtons();
}

function loadContentEn() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerMachines">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Machines</h1>

			<section class="machines">`
				for(reg of machines) {
					let id = reg.machine.toLowerCase().replace(/\s+/g, '');
					txt += `
					<div class="mainBox flexC20 boxMachines">
						<h2 id="title-${id}" class="links">${reg.machine}</h2>
						<img src="./img/${id}.png" id="img-${id}" class="links" alt="${reg.machine}">
						<p><strong>Unlocks at lvl: ${reg.unlock}</strong></p>
					</div>
					<div id="info-${id}" class="infoMachines">
						<div id="alignInfo-${id}" class="alignInfo">
							<span class="close close-${id}">&times;</span>
							<h2>${reg.machine}</h2>
							<img src="./img/${id}.png" class="imgW200" alt="${reg.machine}">
							<h3>Products</h3>
							<div class="infoMachineContainer">`
								for(sub of reg.products) {
									let productId = sub.product.toLowerCase().replace(/\s+|-/g, '').replace('*','');
									txt += `
									<div class="mainBox infoMachineBox">
										<div>
											<h3 style="justify-content: center;">${sub.product}</h3>
											<img src="./img/${productId}.png" class="imgW70">
											<div class="subIngredients">
												<div><p><span class="main-h3">Ingredients:&nbsp;</span></p></div>
												<div>`
													for (sub2 of sub.ingredients) {
														let ingredient = sub2.name.toLowerCase().replace(/\s+/g, '');
														txt += `
														<p><img src="./img/${ingredient}.png" class="imgW30">${sub2.qtde} ${sub2.name}</p>`
													};
													txt += `
												</div>
											</div>
											<p><span class="main-h3">Time:</span>&nbsp;${sub.time}</p>
											<p><span class="main-h3">Exp:</span>&nbsp;${sub.exp}</p>
											<p><span class="main-h3">Lvl Desbloq.:</span>&nbsp;${sub.lvl}</p>
										</div>
									</div>`
								};
								txt += `
							</div>
							<h3>Upgrades</h3>
							<div class="infoMachineContainer">`
								for(sub of reg.upgrades) {
									txt += `
									<div class="mainBox infoMachineBox">
										<div>
											<h3 style="justify-content: center;">${sub.level}</h3>
											<div class="subUpgrades">
												<div><p><span class="main-h3">Cost:&nbsp;</span></p></div>
												<div>`
													for (sub2 of sub.costs) {
														let result = sub2.item.indexOf("mWSO");
														txt += `
														<p>`
														if(result < 0) {
															let position = sub2.item.indexOf(" ") + 1;
															let myString = sub2.item.slice(position).toLowerCase().replace(/\s+/g, '');
															txt += `
															<img src="./img/${myString}.png" class="imgW30">`;
														}
														else {
															txt += `
															<img src="./img/mwso.png" class="imgW30">`;
														}
														txt += `
														${sub2.item}</p>`
													};
													txt += `
												</div>
											</div>
											<p><span class="main-h3">Reduction Time (%):</span>&nbsp;${sub.time}</p>
											<p><span class="main-h3">Exp (%):</span>&nbsp;${sub.exp}</p>
											<p><span class="main-h3">Slot:</span>&nbsp;${sub.slot}</p>
										</div>
									</div>`
								};
								txt += `
							</div>
							<h3>Purchase price</h3>
							<div class="infoMachineContainer">`
								for(sub of reg.purchases) {
									txt += `
									<div class="mainBox infoMachineBox">
										<h3>${sub.times}</h3>
										<div class="subPurchases">
											<div><p><span class="main-h3">Cost:&nbsp;</span></p></div>
											<div>
												<p><img src="./img/mwso.png" class="imgW30">${sub.cost}</p>
											</div>
										</div>
									</div>`
								};
								txt += `
							</div>
							<h3>Extra queue slot</h3>
							<div class="infoMachineContainer">`
								for(sub of reg.slots) {
									txt += `
									<div class="mainBox infoMachineBox">
										<h3>${sub.queue}</h3>
										<div class="subSlots">
											<div><p><span class="main-h3">Cost:&nbsp;</span></p></div>
											<div>
												<p><img src="./img/mwso.png" class="imgW30">${sub.cost}</p>
											</div>
										</div>
									</div>`
								};
								txt += `
							</div>
						</div>
					</div>`
				};
				txt +=`
			</section>
		</div>`
	document.querySelector("main").innerHTML = txt;
	activateFarmButtons();
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

// Creating machine links/buttons
function activateFarmButtons () {
	for(reg of machines) {
		let id = reg.machine.toLowerCase().replace(/\s+/g, '');

		document.getElementById(`title-${id}`).addEventListener("click", () => { machineId = id; machineOpen(); });

		document.getElementById(`img-${id}`).addEventListener("click", () => { machineId = id; machineOpen(); });
	}
}

// Get the element with the machine information
machine = document.getElementById(`info-${machineId}`);

function machineOpen() {
	let machineOpen = true, machineIdHeight;
	unloadScrollBars();

	// Get the element with the machine information
	machine = document.getElementById(`info-${machineId}`);

	// Change the display to flex
	machine.style.display = "flex";

	//Function to align the height
	function alignHeight() {
		machineIdHeight = document.querySelector(`#alignInfo-${machineId}`).clientHeight;
		if(window.innerHeight > machineIdHeight) {
			machine.style.justifyContent = "center";
		} else {
			machine.style.justifyContent = "normal";
		}
	}

	alignHeight();
	
	window.addEventListener("resize", function() {
		machineIdHeight = document.querySelector(`#alignInfo-${machineId}`).clientHeight;
		alignHeight();
	});

	// Get the <span> element that close the window
	const span = document.getElementsByClassName(`close-${machineId}`)[0];

	// Show/hide top button when scrolling
	machine.addEventListener("scroll", () => {
		switchScroll = "machine";
		if (machine.scrollTop == 0) { // Se a página está no topo
			buttonTop.style.display = "none"; // Oculta o botão
		} else { // Se a página não estiver no topo
			buttonTop.style.display = "block"; // Mostra o botão
		}
	});

	// Function to close the window
	function infoClose() {
		machine.style.display = "none";
		machineOpen = false;
		reloadScrollBars();
	};

	// Close window by pressing esc
	window.addEventListener('keydown', function (a) {
		if(a.key === "Escape") {
			if(machineOpen === true){
				infoClose();
			}
		}
	});

	// When the user clicks on <span> (x)
	span.addEventListener("click", () => { 
		infoClose();
	});
}
