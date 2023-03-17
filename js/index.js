// Load content in English or Portuguese on first page load
function loadContentBr() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerHome">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Capítulo 1: A jornada começa!</h1>
				
			<p>Widiland é um jogo NFT gratuito do estilo "fazendinha" e ele pode ser jogado tanto mobile (celular, tablet) quanto na web (pelo navegador).</p>

			<p>O objetivo principal é plantar, minerar, colher, fabricar itens e entregá-los de acordo com os pedidos. Ao entregar uma certa quantidade de pedidos, você completa a tarefa diária e ganha moedas (token mWSO) que podem ser usadas para fazer melhorias no jogo. Caso você seja Widian 1 ou acima, também poderá sacar essas moedas para sua carteira e usar da forma que achar melhor.</p>				

			<div id="containerImgHome">
				<img id="index01" class="myImg imgW400" src="./img/index01.png" alt="Visão geral da fazenda" onclick="modall('index01')">
				<img id="index02" class="myImg imgW400" src="./img/index02.png" alt="Alimentando os animais" onclick="modall('index02')">
				<img id="index03" class="myImg imgW400" src="./img/index03.png" alt="Produzindo novos itens" onclick="modall('index03')">
			</div>

			<p>Está ansioso para ser um grande fazendeiro? Então dê uma olhada na <a href="./tutorials.html?lang=${lang}" class="links">seção de tutoriais</a> e começe com o pé direito!</p>
		</div>`
	document.querySelector("main").innerHTML = txt;
}

function loadContentEn() {
    document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerHome">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Chapter 1: The Journey Begins!</h1>
				
			<p>Widiland is a free-to-play NFT game in the "little farm" style and it can be played both mobile (mobile, tablet) and on the web (via browser).</p>

			<p>The main objective is to plant, mine, harvest, craft items and deliver them according to orders. By delivering a certain amount of orders, you complete the daily task and earn coins (mWSO token) that can be used to make improvements in the game. If you are Widian 1 or above, you can also withdraw these coins to your wallet and use them as you see fit.</p>				

			<div id="containerImgHome">
				<img id="index01" class="myImg imgW400" src="./img/index01.png" alt="Farm overview" onclick="modall('index01')">
				<img id="index02" class="myImg imgW400" src="./img/index02.png" alt="Feeding the animals" onclick="modall('index02')">
				<img id="index03" class="myImg imgW400" src="./img/index03.png" alt="Producing new items" onclick="modall('index03')">
			</div>

			<p>Are you looking forward to being a great farmer? So take a look at the <a href="./tutorials.html?lang=${lang}">tutorials section</a> and get off to a good start!</p>
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