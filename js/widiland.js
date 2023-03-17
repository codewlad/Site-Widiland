// Defining global variables
let btn_en = "";
let btn_br = "";
let lang, hrefLang, imgDark, darkmode, iconTelegram, iconEmail;
let verifyHref = window.location.href;
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const html = document.querySelector("html");
let farm, machine;

// Checking the contents of the address bar
if(verifyHref.indexOf("?lang=") < 0){
	lang = "en";
} else {
	hrefLang = verifyHref.split("lang=");
	hrefLang = hrefLang[1].toLowerCase();
	if(hrefLang === "br") {
		lang = "br";
	} else {
		lang = "en";
	};
};

// Checking if dark mode is active
function checkDarkMode() {
	darkmode =  localStorage.getItem("dark");
	imgDark = document.querySelector("#darkmode img");
	iconTelegram = document.querySelector("#iconTelegram");
	iconEmail = document.querySelector("#iconEmail");
	
	if(darkmode == "true") {
		darkmode = true;
		html.classList.add("dark-mode");
		imgDark.src = "./img/darkoff.png";
		iconTelegram.src = "./img/icon_telegram_off.png";
		iconEmail.src = "./img/icon_email_off.png";
	} else {
		darkmode = false;
		html.classList.remove("dark-mode");
		imgDark.src = "./img/darkon.png";
		iconTelegram.src = "./img/icon_telegram_on.png";
		iconEmail.src = "./img/icon_email_on.png";
	};
}

// Loading the menu in English or Portuguese
function loadHeaderBr(){
	header.innerHTML = `
	<a href="./index.html?lang=${lang}"><img src="./img/logo.png" alt="Logo do Widiland" class="logo"></a>
	<nav id="hamNav">
		<label for="hamburger" class="pointer">&#9776;&nbsp;<strong>MENU</strong></label>
		<input type="checkbox" id="hamburger"/>
		<div id="hamItems">
			<ul>
				<li><a href="./index.html?lang=${lang}">INÍCIO</a></li>
				<li><a href="./tutorials.html?lang=${lang}">TUTORIAIS</a></li>
				<li><a href="./info.html?lang=${lang}">INFORMAÇÕES</a></li>
				<li><a href="./tools.html?lang=${lang}">FERRAMENTAS</a></li>
				<li><a href="./tips.html?lang=${lang}">DICAS</a></li>
				<li><a href="./chars.html?lang=${lang}">PERSONAGENS</a></li>
				<li><a href="./lands.html?lang=${lang}">TERRAS</a></li>
				<li><a href="./farms.html?lang=${lang}">ANIMAIS</a></li>
				<li><a href="./machines.html?lang=${lang}">MÁQUINAS</a></li>
			</ul>
		</div>
	</nav>
	`
};

function loadHeaderEn(){
	header.innerHTML = `
	<a href="./index.html?lang=${lang}"><img src="./img/logo.png" alt="Logo do Widiland" class="logo"></a>
	<nav id="hamNav">
		<label for="hamburger" class="pointer">&#9776;&nbsp;<strong>MENU</strong></label>
		<input type="checkbox" id="hamburger"/>
		<div id="hamItems">
			<ul>
				<li><a href="./index.html?lang=${lang}">HOME</a></li>
				<li><a href="./tutorials.html?lang=${lang}">TUTORIALS</a></li>
				<li><a href="./info.html?lang=${lang}">INFORMATIONS</a></li>
				<li><a href="./tools.html?lang=${lang}">TOOLS</a></li>
				<li><a href="./tips.html?lang=${lang}">TIPS</a></li>
				<li><a href="./chars.html?lang=${lang}">CHARACTERS</a></li>
				<li><a href="./lands.html?lang=${lang}">LANDS</a></li>
				<li><a href="./farms.html?lang=${lang}">ANIMAL FARMS</a></li>
				<li><a href="./machines.html?lang=${lang}">MACHINES</a></li>
			</ul>
		</div>
	</nav>
	`
};

// Loading the toolbar in English or Portuguese
function loadToolbarBr(){
	document.getElementById("toolbar").innerHTML = `
		<div id="darkmode">
			Modo escuro: 
			<label for="dark"><input type="checkbox" name="dark" id="dark">
				<img src="./img/darkon.png" alt="Ligar/desligar o modo escuro">
			</label>	
		</div>
		<div>
			Mudar Idioma:
			<img src="./img/br.png" alt="Mudar o idioma para Português" id="btn_br">
			<img src="./img/en.png" alt="Mudar o idioma para Inglês" id="btn_en">
		</div>
	`
	activateButton();
};

function loadToolbarEn(){
	document.getElementById("toolbar").innerHTML = `
		<div id="darkmode">
			Dark Mode: 
			<label for="dark"><input type="checkbox" name="dark" id="dark">
				<img src="./img/darkon.png" alt="Turn on/off dark mode">
			</label>	
		</div>
		<div>
			Change Language:
			<img src="./img/br.png" alt="Change language to Portuguese" id="btn_br">
			<img src="./img/en.png" alt="Change language to English" id="btn_en">
		</div>
	`
	activateButton();
};

// Defining the functions of the buttons on the toolbar
function activateButton(){ 
	btn_en = document.getElementById("btn_en");
	btn_br = document.getElementById("btn_br");
	const checkbox = document.querySelector("#dark");
	const checkboxMenu = document.querySelector("#hamburger");
	const hamItems = document.querySelector("#hamItems");
	imgDark = document.querySelector("#darkmode img");
	iconTelegram = document.querySelector("#iconTelegram");
	iconEmail = document.querySelector("#iconEmail");
	
	// Loads the header, toolbox, content and footer when changing the language to portuguese by the buttons
	btn_br.onclick = function () {
		lang = "br";
		header.style.height = "100px";
		loadHeaderBr();
		loadToolbarBr();
		loadContentBr();
		loadFooterBr();
		checkDarkMode();
	};

	// Loads the header, toolbox, content and footer when changing the language to english by the buttons
	btn_en.onclick = function () {
		lang = "en";
		header.style.height = "100px";
		loadHeaderEn();
		loadToolbarEn();
		loadContentEn();
		loadFooterEn();
		checkDarkMode();
	};

	// Defining the dark mode button
	checkbox.addEventListener("change", function() {
		html.classList.toggle("dark-mode");
		if(darkmode === false){
			darkmode = true;
			imgDark.src = "./img/darkoff.png";
			iconTelegram.src = "./img/icon_telegram_off.png";
			iconEmail.src = "./img/icon_email_off.png";
			localStorage.setItem("dark", "true");
		} else {
			darkmode = false;
			imgDark.src = "./img/darkon.png";
			iconTelegram.src = "./img/icon_telegram_on.png";
			iconEmail.src = "./img/icon_email_on.png";
			localStorage.setItem("dark", "false");
		}
	});

	// Defining the menu animation
	const menuClosed = "100px";
	const menuOpened = "370px";

	function verifyMenu() {
		if(checkboxMenu.checked === true) {
			header.style.height = menuOpened;
			hamItems.style.display = "block";
		} else {
			header.style.height = menuClosed;
			hamItems.style.display = "none";
		}
	}
	
	checkboxMenu.addEventListener("change", verifyMenu);

	window.addEventListener("resize", function() {
		if(window.innerWidth > 700) {
			header.style.height = menuClosed;
			hamItems.style.display = "block";
		} else {
			verifyMenu();
		}
	});
};

// Botão para voltar ao topo
let buttonTop; // Definindo a variável do botão
let mainScroll = false;
let switchScroll = "main";

function goToTheTop() {
	const body = document.querySelector("body"); // Localiza a tag body
	const footer = document.querySelector("footer"); // Localiza a tag footer
	const el = document.createElement("div"); // Cria uma div
	el.setAttribute("id", "backtotop"); // Adiciona o atributo id para a div
	body.insertBefore(el, footer); // Insere a div dentro de body e antes do footer
	buttonTop = document.getElementById("backtotop"); // Localiza a div criada

	buttonTop.addEventListener("click", function() {
		if(switchScroll === "main") {
			html.style.scrollBehavior = "smooth";
			window.scrollTo(0, 0);
		}
		if(switchScroll === "farm") {
			farm.scrollTo(0, 0);
		}
		if(switchScroll === "machine") {
			machine.scrollTo(0, 0);
		}		
	});
}

goToTheTop(); // Chamando a função para criar o botão

function backToTop() {
	switchScroll = "main";
	if (document.documentElement.scrollTop == 0) { // Se a página está no topo
		buttonTop.style.display = "none"; // Oculta o botão
		mainScroll = false;
	} else { // Se a página não estiver no topo
		buttonTop.style.display = "block"; // Mostra o botão
		mainScroll = true;
	}
}

window.onscroll = function() {
	switchScroll = "main";
	backToTop(); // Ativa a função ao rolar a página
}; 

// Loading the footer in English or Portuguese
function loadFooterBr() {
	footer.innerHTML = `
		<p>Fã site desenvolvido pela Comunidade Widiland Brasil</p>
		<div class="footerContacts">
			<p>
				<a href="https://t.me/codewlad">
					<img id="iconTelegram" src="./img/icon_telegram_off.png" alt="">&nbsp;@codewlad
				</a>
			</p>
			<p>
				<a href="mailto:codewlad@gmail.com">
					<img id="iconEmail"  src="./img/icon_email_off.png" alt="">&nbsp;codewlad@gmail.com
				</a>
			</p>
		</div>
		<p>Última atualização: 08-02-2023</p>
	`
};

function loadFooterEn() {
	footer.innerHTML = `
		<p>Fan site developed by the Widiland Brazil Community</p>
		<div class="footerContacts">
			<p>
				<a href="https://t.me/codewlad">
					<img id="iconTelegram" src="./img/icon_telegram_off.png" alt="">&nbsp;@codewlad
				</a>
			</p>
			<p>
				<a href="mailto:codewlad@gmail.com">
					<img id="iconEmail"  src="./img/icon_email_off.png" alt="">&nbsp;codewlad@gmail.com
				</a>
			</p>
		</div>
		<p>Last update: 2023-02-08</p>	
	`
};

// Function to check the language
function langCheck(){
	if(lang === "br") {
		loadHeaderBr();
		loadToolbarBr();
		loadFooterBr();
		checkDarkMode();
	} else {
		lang = "en";
		loadHeaderEn();
		loadToolbarEn();
		loadFooterEn();
		checkDarkMode();
	};
};

// Call the function that checks the language
langCheck();