// Load content in English or Portuguese on first page load
function loadContentBr() {
	document.querySelector("main").innerHTML = "";
	let txt = `
		<div id="containerHome">
			<div id="myModal" class="modal">
				<span class="close">&times;</span>
				<img class="modal-content" id="img01" alt="img01">
			</div>

			<h1></h1>
		</div>
	`
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

			<h1></h1>
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