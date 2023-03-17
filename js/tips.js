// Load content in English or Portuguese on first page load
function loadContentBr() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerTips">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Dicas</h1>

			<section class="tips">
				<h2>Comece ganhando 50 moedas!</h2>
					
				<p>Você irá ganhar 50 mWSO assim que colocar o código de referência de algum jogador! Para isso, é só clicar em configurações, digitar ou colar o código lá em baixo e clicar em enviar. O meu código é: <span class="referral">NCNNN6Y4</span>. Você também pode enviar seu código de referência para outros jogadores e irá ganhar 5 mWSO para os 4 primeiros que usá-lo e mais 10 mWSO a cada vez que todos os jogadores que colocaram seu cógigo chegarem nos leveis 20, 30, 35, 40 e 50. Quando chegarem nos leveis 60, 70, 80, 90 e 100 ganhará mais 20 mWSO em cada. Acompanhe as imagens para facilitar:</p>

				<div id="containerImgHome">
					<img id="index01" class="myImg imgW400" src="./img/config.png" alt="Botão de configurações" onclick="modall('index01')">
					<img id="index02" class="myImg imgW400" src="./img/configreferral.png" alt="Configurações" onclick="modall('index02')">
				</div>
			</section>
		</div>
	`
	document.querySelector("main").innerHTML = txt;
}

function loadContentEn() {
    document.querySelector("main").innerHTML = "";
	let txt = `
	<div id="containerTips">
	<div id="myModal" class="modal">
		<span class="close">&times;</span>
		<img class="modal-content" id="img01" alt="img01">
	</div>

	<h1>Tips</h1>

	<section class="tips">
		<h2>Start by earning 50 coins!</h2>
			
		<p>You will earn 50 mWSO as soon as you enter a player's referral code! To do this, just click on settings, type or paste the code below and click submit. My code is: <span class="referral">NCNNN6Y4</span>. You can also send your referral code to other players and you will earn 5 mWSO for the first 4 who use it and another 10 mWSO each time all players who have entered their code reach levels 20, 30, 35, 40 and 50. When you reach levels 60, 70, 80, 90 and 100 you will earn another 20 mWSO each. Follow the images to make it easier:</p>

		<div id="containerImgHome">
			<img id="index01" class="myImg imgW400" src="./img/config.png" alt="Settings button" onclick="modall('index01')">
			<img id="index02" class="myImg imgW400" src="./img/configreferral.png" alt="Settings" onclick="modall('index02')">
		</div>
	</section>
</div>
	`
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