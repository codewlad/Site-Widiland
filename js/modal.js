// Get the modal
let imgOrigin, modalImg, captionText, span, modal;

// Get the image and insert it inside the modal - use its "alt" text as a caption
function modall(idImg){
	let modalOpen = true;
	modal = document.getElementById("myModal");
	imgOrigin = document.getElementById(idImg);
	modalImg = document.getElementById("img01");
	//var captionText = document.getElementById("caption");
	modal.style.display = "flex";
	modalImg.src = imgOrigin.src;
	modalImg.alt = imgOrigin.alt;
	//captionText.innerHTML = this.alt;
	unloadScrollBars();

	// Get the <span> element that closes the modal
	span = document.getElementsByClassName("close")[0];

	// Function to close the window
	function infoClose() {
		modal.style.display = "none";
		modalOpen = false;
		reloadScrollBars();
	};

	// Close window by pressing esc
	window.addEventListener('keydown', function (a) {
		if(a.key === "Escape") {
			if(modalOpen === true){
				infoClose();
			}
		}
	});

	// When the user clicks on <span> (x)
	span.addEventListener("click", () => { 
		infoClose();
	});

}

function unloadScrollBars() {
	document.documentElement.style.overflow = 'hidden';
	document.body.scroll = "no"; // IE
	buttonTop.style.display = "none";
}

function reloadScrollBars() {
	document.documentElement.style.overflow = 'auto';
	document.body.scroll = "yes"; // IE
	if(mainScroll == true) {
		buttonTop.style.display = "block";
	}	
}