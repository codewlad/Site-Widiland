// Defining global variables
let baseSearch = [], baseSearchJoin, productTime = '', filtro = [], itemType, itemName;
let baseSearchIngredients = [], baseSearchIngredientsJoin;

function mergeDatabase() {
    for(land of lands) {
        for(seed of land.crops) {
            baseSearchJoin = {
				type: seed.type,
				local: land.name,
                localBr: land.nameBr,
                name: seed.name,
				nameBr: seed.nameBr,
				unlock: seed.unlock,
				time: seed.time,
                timem: seed.timem,
			};
			baseSearch.push(baseSearchJoin);
        }
    }

    for(animal of animalFarms) {
        baseSearchJoin = {
            type: animal.type,
            local: animal.farm,
            localBr: animal.farmBr,
            name: animal.name,
            nameBr: animal.nameBr,
            unlock: animal.unlock,
            time: animal.time,
            timem: animal.timem,
            food: animal.food,
		    foodBr: animal.foodBr,
        };
        baseSearch.push(baseSearchJoin);
    }

    for(machine of machines) {
        for(product of machine.products) {
            baseSearchJoin = {
                type: machine.type,
                local: machine.machine,
                localBr: machine.machineBr,
                name: product.product,
                nameBr: product.productBr,
                unlock: product.lvl,
                time: product.time,
                timem: product.timem,
                ingredients: product.ingredients,
            };
            baseSearch.push(baseSearchJoin);
        }
    }    
    //console.log(baseSearch);
}

mergeDatabase();

//
function clearAllCalc() {
    langCheck();
}

// Loading product content in Portuguese
function callProductBr(nameProduct){
    nameProduct = nameProduct.replace("product-", "");
    clearAllCalc();
    baseSearchIngredients = [];
    let txt = "";
    for(reg of baseSearch) {
        let item = reg.name.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
        let local = reg.local.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
        if(item === nameProduct){
            itemName = reg.nameBr;
            document.getElementById("input").value = reg.nameBr;
            document.getElementById('calcTime').style.display = 'block';
            document.getElementById('pTime').value = reg.time;
            productTime = reg.timem
			document.getElementsByClassName('bg')[0].style.backgroundImage = `url("img/${local}.png")`;
			document.getElementById('calcMachineName').style.display = 'block';
			document.getElementById('calcMachineName').innerHTML = `
			<div class="backOp"></div>
			<p>${reg.localBr}</p>`
			document.getElementById('calcBowl').style.display = 'block';
			document.getElementById('calcBowl').innerHTML = `
			<img id="calcImgBowl" src="./img/${item}.png" style="width: 60px; height: 60px">
			`
            itemType = reg.type;
            switch(reg.type) {
                case "land":
                    txt += `
                    <div id="searchItemInfo">
                        <img src="./img/${item}.png" class="imgW70">
                        <p><span class="main-h3">Produto:</span>&nbsp;${reg.nameBr}</p>
                        <p><span class="main-h3">Tempo de cultivo:</span>&nbsp;${reg.time}</p>
                        <p><span class="main-h3">Lvl de Desbloqueio:</span>&nbsp;${reg.unlock}</p>
                        <p><span class="main-h3">Terra:</span>&nbsp;${reg.localBr}</p>
                    </div>`
                break;
                case "farm":
                    let food = reg.food.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
                    txt += `
                    <div id="searchItemInfo">
                        <img src="./img/${item}.png" class="imgW70">
                        <p><span class="main-h3">Produto:</span>&nbsp;${reg.nameBr}</p>
                        <p><span class="main-h3">Tempo de produção:</span>&nbsp;${reg.time}</p>
                        <p><span class="main-h3">Lvl de Desbloqueio:</span>&nbsp;${reg.unlock}</p>
                        <p><span class="main-h3">Animais:</span>&nbsp;${reg.localBr}</p>
                        <p><span class="main-h3">Alimento requerido:</span>&nbsp;2x<img src="./img/${food}.png" class="imgW30">${reg.foodBr}</p>
                    </div>`
                break;
                case "machine":
                    if(reg.name.indexOf("*") != -1){
                        txt += `
                        <p>* Este produto é especial e para produzí-lo é necessário um cozinheiro épico ou lendário com esta habilidade.</p>
                        `
                    }
                    txt += `
                    <div id="searchItemInfo">
                        <img src="./img/${item}.png" class="imgW70">
                        <p><span class="main-h3">Produto:</span>&nbsp;${reg.nameBr}</p>
                        <p><span class="main-h3">Tempo de preparo:</span>&nbsp;${reg.time}</p>
                        <p><span class="main-h3">Lvl de Desbloqueio:</span>&nbsp;${reg.unlock}</p>
                        <p><span class="main-h3">Máquina:</span>&nbsp;${reg.localBr}</p>
                        <div id="searchItemInfoSub">
                            <div><p class="main-h3">Ingredientes:&nbsp;</p></div>
                            <div>`
                            for(ing of reg.ingredients) {
                                let ingredient = ing.name.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
                                txt += `
                                <p>${ing.qtde}<img src="./img/${ingredient}.png" class="imgW30">${ing.nameBr}</p>`
                            };
                            txt += `
                            </div>
                        </div>
                    </div>`
                break;
            }
            showModifiers();
            saidaInfoItem.innerHTML = txt;
        }
        if(reg.type === "machine") {
            for(el of reg.ingredients){
                let ingredient = el.name.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
                if(ingredient === nameProduct){
                    baseSearchIngredientsJoin = {
                        type: "machine",
                        name: reg.name,
                        nameBr: reg.nameBr,
                        qtde: el.qtde,
                        unlock: reg.unlock,
                    };
                    baseSearchIngredients.push(baseSearchIngredientsJoin);
                }
            }
        }
        if(reg.type === "farm") {
            let ingredient = reg.food.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
            if(ingredient === nameProduct){
                baseSearchIngredientsJoin = {
                    type: "farm",
                    name: reg.local,
                    nameBr: reg.localBr,
                    qtde: "2x",
                    unlock: reg.unlock,
                };
                baseSearchIngredients.push(baseSearchIngredientsJoin);
            }
        }
    }

    if(baseSearchIngredients.length != 0){
        txt = `
        <div id="searchOtherItems">
        
            <h3>Itens que usam ${itemName}:</h3>
            <div id="searchOtherItemsSub">`
            for(reg of baseSearchIngredients) {
                let item = reg.name.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
                if(reg.type === "farm") {
                    txt += `
                    <div class="searchRevenues">
                        <p><img src="./img/${item}.png" class="imgW50"></p>
                        <p>${reg.nameBr}</p>
                        <p>Qtde: ${reg.qtde}</p>
                        <p>Lvl: ${reg.unlock}</p>
                    </div>`
                } else {
                    txt += `
                    <div class="searchRevenues">
                        <a onclick="callProductBr(this.id)" id="product-${item}" class="links">
                            <p><img src="./img/${item}.png" class="imgW50"></p>
                            <p>${reg.nameBr}</p>
                            <p>Qtde: ${reg.qtde}</p>
                            <p>Lvl: ${reg.unlock}</p>
                        </a>
                    </div>`
                }
            }
            txt += `
            </div>
        </div>`
        saidaInfoItem.innerHTML += txt;
    }    
};

// Loading product content in English
function callProductEn(nameProduct){
    nameProduct = nameProduct.replace("product-", "");
    clearAllCalc();
    baseSearchIngredients = [];
    let txt = "";
    for(reg of baseSearch) {
        let item = reg.name.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
        let local = reg.local.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
        if(item === nameProduct){
            itemName = reg.name;
            document.getElementById("input").value = reg.name;
            document.getElementById('calcTime').style.display = 'block';
            document.getElementById('pTime').value = reg.time;
            productTime = reg.timem
			document.getElementsByClassName('bg')[0].style.backgroundImage = `url("img/${local}.png")`;
			document.getElementById('calcMachineName').style.display = 'block';
			document.getElementById('calcMachineName').innerHTML = `
			<div class="backOp"></div>
			<p>${reg.local}</p>`
			document.getElementById('calcBowl').style.display = 'block';
			document.getElementById('calcBowl').innerHTML = `
			<img id="calcImgBowl" src="./img/${item}.png" style="width: 60px; height: 60px">
			`
            itemType = reg.type;
            switch(reg.type) {
                case "land":
                    txt += `
                    <div id="searchItemInfo">
                        <img src="./img/${item}.png" class="imgW70">
                        <p><span class="main-h3">Product:</span>&nbsp;${reg.name}</p>
                        <p><span class="main-h3">Cultivation time:</span>&nbsp;${reg.time}</p>
                        <p><span class="main-h3">Unlock Level:</span>&nbsp;${reg.unlock}</p>
                        <p><span class="main-h3">Land:</span>&nbsp;${reg.local}</p>
                    </div>`
                break;
                case "farm":
                    let food = reg.food.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
                    txt += `
                    <div id="searchItemInfo">
                        <img src="./img/${item}.png" class="imgW70">
                        <p><span class="main-h3">Product:</span>&nbsp;${reg.name}</p>
                        <p><span class="main-h3">Production time:</span>&nbsp;${reg.time}</p>
                        <p><span class="main-h3">Unlock Level:</span>&nbsp;${reg.unlock}</p>
                        <p><span class="main-h3">Animals:</span>&nbsp;${reg.local}</p>
                        <p><span class="main-h3">Required food:</span>&nbsp;2x<img src="./img/${food}.png" class="imgW30">${reg.food}</p>
                    </div>`
                break;
                case "machine":
                    if(reg.name.indexOf("*") != -1){
                        txt += `
                        <p>* This product is special and requires an epic or legendary cook with this skill to produce it.</p>
                        `
                    }
                    txt += `
                    <div id="searchItemInfo">
                        <img src="./img/${item}.png" class="imgW70">
                        <p><span class="main-h3">Product:</span>&nbsp;${reg.name}</p>
                        <p><span class="main-h3">Preparation time:</span>&nbsp;${reg.time}</p>
                        <p><span class="main-h3">Unlock Level:</span>&nbsp;${reg.unlock}</p>
                        <p><span class="main-h3">Machine:</span>&nbsp;${reg.local}</p>
                        <div id="searchItemInfoSub">
                            <div><p class="main-h3">Ingredients:&nbsp;</p></div>
                            <div>`
                            for(ing of reg.ingredients) {
                                let ingredient = ing.name.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
                                txt += `
                                <p>${ing.qtde}<img src="./img/${ingredient}.png" class="imgW30">${ing.name}</p>`
                            };
                            txt += `
                            </div>
                        </div>
                    </div>`
                break;
            }
            showModifiers();
            saidaInfoItem.innerHTML = txt;
        }
        if(reg.type === "machine") {
            for(el of reg.ingredients){
                let ingredient = el.name.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
                if(ingredient === nameProduct){
                    baseSearchIngredientsJoin = {
                        type: "machine",
                        name: reg.name,
                        nameBr: reg.nameBr,
                        qtde: el.qtde,
                        unlock: reg.unlock,
                    };
                    baseSearchIngredients.push(baseSearchIngredientsJoin);
                }
            }
        }
        if(reg.type === "farm") {
            let ingredient = reg.food.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
            if(ingredient === nameProduct){
                baseSearchIngredientsJoin = {
                    type: "farm",
                    name: reg.local,
                    nameBr: reg.localBr,
                    qtde: "2x",
                    unlock: reg.unlock,
                };
                baseSearchIngredients.push(baseSearchIngredientsJoin);
            }
        }
    }

    if(baseSearchIngredients.length != 0){
        txt = `
        <div id="searchOtherItems">
            <h3>Items that use ${itemName}:</h3>
            <div id="searchOtherItemsSub">`
            for(reg of baseSearchIngredients) {
                let item = reg.name.toLowerCase().replace(/([*]|[-]|[\s+])/g, "");
                console.log(baseSearchIngredients);
                if(reg.type === "farm") {
                    txt += `
                    <div class="searchRevenues">
                        <p><img src="./img/${item}.png" class="imgW50"></p>
                        <p>${reg.name}</p>
                        <p>Qtde: ${reg.qtde}</p>
                        <p>Lvl: ${reg.unlock}</p>
                    </div>`
                } else {                    
                    txt += `
                    <div class="searchRevenues">
                        <a onclick="callProductEn(this.id)" id="product-${item}" class="links">
                            <p><img src="./img/${item}.png" class="imgW50"></p>
                            <p>${reg.name}</p>
                            <p>Qtde: ${reg.qtde}</p>
                            <p>Lvl: ${reg.unlock}</p>
                        </a>
                    </div>`
                }
            }
            txt += `
            </div>
        </div>`
        saidaInfoItem.innerHTML += txt;
    }    
};

// Checking if typed item exists in db and load content in Portuguese
function filtrarPCalcBr() {
    input = document.getElementById("input");
	saida = document.getElementById("saidaTxtCalc");
	saida.innerHTML = '';
	filtro = [];

    if (!input.value) {
		saida.innerHTML = '';
		saida.style.display = 'none';
		clearAllCalc();
		return false;
	};

	for(let cont = 0; cont < baseSearch.length; cont++){
		if((baseSearch[cont].nameBr).toLowerCase().indexOf(input.value.toLowerCase()) > -1){
            let item = baseSearch[cont].name.toLowerCase().replace(/([*]|[-]|[\s+])/g, '');
			saida.innerHTML += `<p class="odd" style="border-radius: 10px"><a onclick="callProductBr(this.id)" id="product-${item}" class="links"><img src="./img/${item}.png" class="imgW30 imgInput" />${baseSearch[cont].nameBr}</a></p>`;
			filtro.push(baseSearch[cont].id);
		} ;
	};

	if(filtro.length == 0){
		saida.innerHTML = 'Item não encontrado.';
	};	

	saida.style.display = 'block';
};

// Checking if typed item exists in db and load content in English
function filtrarPCalcEn() {
    input = document.getElementById("input");
	saida = document.getElementById("saidaTxtCalc");
	saida.innerHTML = '';
	filtro = [];

    if (!input.value) {
		saida.innerHTML = '';
		saida.style.display = 'none';
		clearAllCalc();
		return false;
	};

	for(let cont = 0; cont < baseSearch.length; cont++){
		if((baseSearch[cont].name).toLowerCase().indexOf(input.value.toLowerCase()) > -1){
            let item = baseSearch[cont].name.toLowerCase().replace(/([*]|[-]|[\s+])/g, '');
			saida.innerHTML += `<p class="odd" style="border-radius: 10px"><a onclick="callProductEn(this.id)" id="product-${item}" class="links"><img src="./img/${item}.png" class="imgW30 imgInput" />${baseSearch[cont].name}</a></p>`;
			filtro.push(baseSearch[cont].id);
		} ;
	};

	if(filtro.length == 0){
		saida.innerHTML = 'Item não encontrado.';
	};	

	saida.style.display = 'block';
};