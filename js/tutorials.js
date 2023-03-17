// Load content in English or Portuguese on first page load
function loadContentBr() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerTutorials">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Tutoriais</h1>

			<section class="tutorials">
		
				<h2>O início do jogo!</h2>
					
				<p>Assim que finalizar o tutorial, você estará pronto para tomar suas próprias decisões, mas vou deixar aqui uma forma simples para começar bem e não travar no início do jogo. Só lembrando, no menu de configurações, você pode trocar o idioma para o que se sinta mais a vontade.</p>
				
				<p>Vamos lá! A primeira coisa a fazer é dar uma olhada no quadro de pedidos (imagem 2). Você começa com um armazém de capacidade limitada (apenas 100 espaços), então o ideal é plantar, colher e entregar somente o que é pedido. O grande segredo é: não lotar o armazém! Caso isso aconteça, terá que ir excluindo as ordens até vir alguma com os itens que lotaram seu estoque e no widian 0 (level widian inicial) , cada ordem demora 60 minutos para aparecer novamente.</p>
				
				<p>Do level 3 ao 15, sempre que você sobe, irá receber 5 sementes que não podem ser plantadas na terra inicial (Terra Cultivada) e o melhor a se fazer é aguardar ordens em que é pedido para entregar 4 dessas sementes (imagem 3). Você nunca ficará com 0. Sempre terá 1 em estoque, ou 0 em estoque e uma plantada.</p>

				<p>Ao entregar 20 ordens no mesmo dia, você irá finalizar a primeira Missão Diária (imagem 4) e ganhará 50 mWSO (moeda do jogo). A contagem de ordens irá reiniciar às 21h aqui no Brasil, então certifique-se de finalizar e resgatar as moedas antes disso. As outras missões irão liberar quando você subir o seu level widian e para isso, terá que investir no jogo, mas falaremos sobre isto mais para frente.</p>

				<div id="containerImgTutorials">
					<div class="imgTuto">
						<img id="tutoStart01br" class="myImg imgW400" src="./img/tutostart01br.png" alt="Imagem 1: Visão geral" onclick="modall('tutoStart01br')">
						<span>Imagem 1: Visão geral</span>
					</div>
					<div class="imgTuto">
						<img id="tutoStart02" class="myImg imgW400" src="./img/tutostart02.png" alt="Imagem 2: Quadro de pedidos<" onclick="modall('tutoStart02')">
						<span>Imagem 2: Quadro de pedidos</span>
					</div>
					<div class="imgTuto">
						<img id="tutoStart03" class="myImg imgW400" src="./img/tutostart03.png" alt="Imagem 3: Ordens de 4 sementes" onclick="modall('tutoStart03')">
						<span>Imagem 3: Ordens de 4 sementes</span>
					</div>
					<div class="imgTuto">
						<img id="tutoStart04" class="myImg imgW400" src="./img/tutostart04.png" alt="Imagem 4: Missões diárias" onclick="modall('tutoStart04')">
						<span>Imagem 4: Missões diárias</span>
					</div>
				</div>
			</section>
		</div>`
	document.querySelector("main").innerHTML = txt;
}

function loadContentEn() {
    document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerTutorials">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1>Tutorials</h1>

			<section class="tutorials">
		
				<h2>The start of the game!</h2>
					
				<p>Once you're done with the tutorial, you'll be ready to make your own decisions, but here's a simple way to get off to a good start and not crash at the beginning of the game. Just remembering, in the settings menu, you can change the language to the one you feel more comfortable with.</p>
				
				<p>Come on! The first thing to do is take a look at the order board (image 2). You start with a limited-capacity warehouse (only 100 spaces), so the ideal is to plant, harvest and deliver only what is ordered. The big secret is: don't fill the warehouse! If this happens, you will have to delete the orders until you see one with the items that filled your stock and at widian 0 (initial widian level), each order takes 60 minutes to appear again.</p>
				
				<p>From level 3 to 15, whenever you go up, you will receive 5 seeds that cannot be planted in the initial land (Cropland) and the best thing to do is wait for orders in which you are asked to deliver 4 of these seeds (image 3). You will never have 0. You will always have 1 in stock, or 0 in stock and 1 planted.</p>

				<p>By delivering 20 orders on the same day, you will complete the first Daily Quest (image 4) and earn 50 mWSO (in-game currency). The order count will restart at 0h00 UTC, so make sure you finish and redeem the coins before then. The other missions will unlock when you level up your widian and for that, you will have to invest in the game, but we will talk about this later.</p>

				<div id="containerImgTutorials">
					<div class="imgTuto">
						<img id="tutoStart01" class="myImg imgW400" src="./img/tutostart01en.png" alt="Image 1: Overview" onclick="modall('tutoStart01')">
						<span>Image 1: Overview</span>
					</div>
					<div class="imgTuto">
						<img id="tutoStart02" class="myImg imgW400" src="./img/tutostart02.png" alt="Image 2: Order board" onclick="modall('tutoStart02')">
						<span>Image 2: Order board</span>
					</div>
					<div class="imgTuto">
						<img id="tutoStart03" class="myImg imgW400" src="./img/tutostart03.png" alt="Image 3: 4 Seed orders" onclick="modall('tutoStart03')">
						<span>Image 3: 4 Seed orders</span>
					</div>
					<div class="imgTuto">
						<img id="tutoStart04" class="myImg imgW400" src="./img/tutostart04.png" alt="Image 4: Daily Quests" onclick="modall('tutoStart04')">
						<span>Image 4: Daily Quests</span>
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