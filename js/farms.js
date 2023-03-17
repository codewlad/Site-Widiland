let farmId;

// Load content in English or Portuguese on first page load
function loadContentBr() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerFarms">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Fazendas de Animais</h1>

			<section class="farms">`
				for(reg of animalFarms) {
					let id = reg.farm.toLowerCase().replace(/\s+/g, '');
					let name = reg.name.toLowerCase().replace(/\s+/g, '');
					let food = reg.food.toLowerCase().replace(/\s+/g, '');
					txt += `
					<div class="mainBox flexC20 boxFarms">
						<h2 id="title-${id}" class="links">${reg.farmBr}</h2>
						<img src="./img/${id}.png" id="img-${id}" class="links" alt="${reg.farmBr}">
						<p><strong>Desbloqueia no lvl: ${reg.unlock}</strong></p>
					</div>
					<div id="info-${id}" class="infoFarms">
						<div id="alignInfo-${id}" class="alignInfo">
							<span class="close close-${id}">&times;</span>
							<h2>${reg.farmBr}</h2>
							<div class="infoFarmContainer">
								<div>
									<img src="./img/${id}.png" class="imgW200" alt="${reg.farmBr}">
								</div>
								<div class="mainBox infoFarmBox">
									<h3>${reg.nameBr}</h3>
									<img src="./img/${name}.png" class="imgW70">
									<div style="max-width: fit-content;	align-items: start;">
										<p><span class="main-h3">Alimento:</span>&nbsp;<img src="./img/${food}.png" class="imgW30">${reg.qtde} ${reg.foodBr}</p>
										<p><span class="main-h3">Tempo:</span>&nbsp;${reg.time}</p>
										<p><span class="main-h3">Exp:</span>&nbsp;${reg.exp}</p>
									</div>
								</div>
								<div class="mainBox infoFarmBox">
									<h3>Preço</h3>
									<p><span class="main-h3">1ª compra:</span>&nbsp;${reg.price1}</p>
									<p><span class="main-h3">2ª compra:</span>&nbsp;${reg.price2}</p>
									<p><span class="main-h3">3ª compra:</span>&nbsp;${reg.price3}</p>
								</div>
								<div class="mainBox infoFarmBox">
									<h3>Animal extra</h3>
									<p><span class="main-h3">4º:</span>&nbsp;${reg.extra4}</p>
									<p><span class="main-h3">5º:</span>&nbsp;${reg.extra5}</p>
									<p><span class="main-h3">6º:</span>&nbsp;${reg.extra6}</p>
								</div>
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
		<div id="containerFarms">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Animal Farms</h1>

			<section class="farms">`
				for(reg of animalFarms) {
					let id = reg.farm.toLowerCase().replace(/\s+/g, '');
					let name = reg.name.toLowerCase().replace(/\s+/g, '');
					let food = reg.food.toLowerCase().replace(/\s+/g, '');
					txt += `
					<div class="mainBox flexC20 boxFarms">
						<h2 id="title-${id}" class="links">${reg.farm}</h2>
						<img src="./img/${id}.png" id="img-${id}" class="links" alt="${reg.farm}">
						<p><strong>Unlocks at lvl: ${reg.unlock}</strong></p>
					</div>
					<div id="info-${id}" class="infoFarms">
						<div id="alignInfo-${id}" class="alignInfo">
							<span class="close close-${id}">&times;</span>
							<h2>${reg.farm}</h2>
							<div class="infoFarmContainer">
								<div>
									<img src="./img/${id}.png" class="imgW200" alt="${reg.farm}">
								</div>
								<div class="mainBox infoFarmBox">
									<h3>${reg.name}</h3>
									<img src="./img/${name}.png" class="imgW70">
									<div style="max-width: fit-content;	align-items: start;">
										<p><span class="main-h3">Food:</span>&nbsp;<img src="./img/${food}.png" class="imgW30">${reg.qtde} ${reg.food}</p>
										<p><span class="main-h3">Time:</span>&nbsp;${reg.time}</p>
										<p><span class="main-h3">Exp:</span>&nbsp;${reg.exp}</p>
									</div>
								</div>
								<div class="mainBox infoFarmBox">
									<h3>Price</h3>
									<p><span class="main-h3">1st purchase:</span>&nbsp;${reg.price1}</p>
									<p><span class="main-h3">2nd purchase:</span>&nbsp;${reg.price2}</p>
									<p><span class="main-h3">3rd purchase:</span>&nbsp;${reg.price3}</p>
								</div>
								<div class="mainBox infoFarmBox">
									<h3>Extra animal</h3>
									<p><span class="main-h3">4th:</span>&nbsp;${reg.extra4}</p>
									<p><span class="main-h3">5th:</span>&nbsp;${reg.extra5}</p>
									<p><span class="main-h3">6th:</span>&nbsp;${reg.extra6}</p>
								</div>
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

// Creating farm links/buttons
function activateFarmButtons () {
	for(reg of animalFarms) {
		let id = reg.farm.toLowerCase().replace(/\s+/g, '');

		document.getElementById(`title-${id}`).addEventListener("click", () => { farmId = id; farmOpen(); });

		document.getElementById(`img-${id}`).addEventListener("click", () => { farmId = id; farmOpen(); });
	}
}

// Get the element with the farm information
farm = document.getElementById(`info-${farmId}`);

function farmOpen() {
	let farmOpen = true, farmIdHeight;
	unloadScrollBars();

	// Get the element with the farm information
	farm = document.getElementById(`info-${farmId}`);

	// Change the display to flex
	farm.style.display = "flex";

	//Function to align the height
	function alignHeight() {
		farmIdHeight = document.querySelector(`#alignInfo-${farmId}`).clientHeight;
		if(window.innerHeight > farmIdHeight) {
			farm.style.justifyContent = "center";
		} else {
			farm.style.justifyContent = "normal";
		}
	}

	alignHeight();
	
	window.addEventListener("resize", function() {
		farmIdHeight = document.querySelector(`#alignInfo-${farmId}`).clientHeight;
		alignHeight();
	});

	// Get the <span> element that close the window
	const span = document.getElementsByClassName(`close-${farmId}`)[0];

	// Show/hide top button when scrolling
	farm.addEventListener("scroll", () => {
		switchScroll = "farm";
		if (farm.scrollTop == 0) { // Se a página está no topo
			buttonTop.style.display = "none"; // Oculta o botão
		} else { // Se a página não estiver no topo
			buttonTop.style.display = "block"; // Mostra o botão
		}
	});

	// Function to close the window
	function infoClose() {
		farm.style.display = "none";
		farmOpen = false;
		reloadScrollBars();
	};

	// Close window by pressing esc
	window.addEventListener('keydown', function (a) {
		if(a.key === "Escape") {
			if(farmOpen === true){
				infoClose();
			}
		}
	});

	// When the user clicks on <span> (x)
	span.addEventListener("click", () => { 
		infoClose();
	});
}
