/*Loading dinamico dei contenuti*/
//We declare the costant contents in a separate js file to avoid confusion
function loadContents(){
	const contacts = document.querySelector("#contacts");
	const body = document.querySelector("body");
	
	const wrapper = document.createElement('div');
	wrapper.classList.add('wrapper');
	body.insertBefore(wrapper, contacts);
	
	const container = document.createElement('div');
    container.classList.add('container');
	wrapper.appendChild(container);
	
	for(let item of contents){
		
        const card=document.createElement('div');
        card.classList.add('card');
		container.appendChild(card);
		
		const cardHeader = document.createElement('div');
		cardHeader.classList.add('cardHeader');
		card.appendChild(cardHeader);
		
		const wFull = document.createElement('img');
		wFull.src = item.image;
		wFull.classList.add('w-full');
		cardHeader.appendChild(wFull);
		
		const cardDescription = document.createElement('div');
		cardDescription.classList.add('cardDescription');
		cardHeader.appendChild(cardDescription);
		
        const cardDescriptionContent=document.createElement('span')
        cardDescriptionContent.classList.add('cardDescriptionContent');
		cardDescriptionContent.innerText = item.title;
        cardDescription.appendChild(cardDescriptionContent);
		
        const cardDescriptionP = document.createElement('p');
		cardDescriptionP.classList.add('cardDescriptionP');
		cardDescriptionP.innerText = item.description;
		cardDescription.appendChild(cardDescriptionP);
		/******************Spans**************************/
		const animeGenre = document.createElement('span');
		animeGenre.innerText = "Genre: "+item.genre;
		cardDescription.appendChild(animeGenre);
		cardDescription.appendChild(document.createElement('br'));
		
		const animeAuthor = document.createElement('span');
		animeAuthor.innerText = "Author: " + item.author;
		cardDescription.appendChild(animeAuthor);
		cardDescription.appendChild(document.createElement('br'));
		
		const animeYear = document.createElement('span');
		animeYear.innerText = "Year: " + item.year;
		cardDescription.appendChild(animeYear);
		cardDescription.appendChild(document.createElement('br'));
		
		const animeLanguage = document.createElement('span');
		animeLanguage.innerText = "Language: " + item.language;
		cardDescription.appendChild(animeLanguage);
		cardDescription.appendChild(document.createElement('br'));
		
		const animeSubtitles = document.createElement('span');
		animeSubtitles.innerText = "Subtitles: " + item.subtitles;
		cardDescription.appendChild(animeSubtitles);
		cardDescription.appendChild(document.createElement('br'));
		/******************Footer**************************/
		const footerCard = document.createElement('div');
		footerCard.classList.add('footerCard');
		cardHeader.appendChild(footerCard);
		
		const mostra = document.createElement('button');
		mostra.classList.add('mostra');
		footerCard.appendChild(mostra);
		
		const mostraIcon = document.createElement('i');
		mostraIcon.classList.add("fa", "fa-plus-square");
		mostra.appendChild(mostraIcon);

		const riduci = document.createElement('button');
		riduci.classList.add('riduci');
		footerCard.appendChild(riduci);
		
		const riduciIcon = document.createElement('i');
		riduciIcon.classList.add("fa", "fa-minus-square");
		riduci.appendChild(riduciIcon);
		
		const favourite = document.createElement('button');
		favourite.classList.add('favourite');
		footerCard.appendChild(favourite);
		
		const favouriteIcon = document.createElement('i');
		favouriteIcon.classList.add("fa", "fa-heart-o");
		favourite.appendChild(favouriteIcon);
		
		const cardTitle = document.createElement('a');
		cardTitle.innerText = item.title;
		cardTitle.href = item.urlLink;
		cardTitle.classList.add('cardTitle');
		footerCard.appendChild(cardTitle);

	}
	/*Inizializzazione dei bottoni*/
	let riduciButtons = document.querySelectorAll(".riduci");
	let mostraButtons = document.querySelectorAll(".mostra");
	mostraButtons.forEach(ele => {ele.addEventListener("click", mostra);});
	riduciButtons.forEach(ele => {ele.addEventListener("click", riduci);});
	let cuori = document.querySelectorAll(".favourite");
	
	cuori.forEach(ele => {ele.addEventListener("click", aggiungiRimuoviPreferito);});
}
let likesCounter = 0;
loadContents();
/*Parte della coolNavbar*/
let options = document.querySelectorAll(".option");
let slide = document.querySelector(".slide");
options.forEach((ele,index)=>{
	ele.addEventListener("mouseover",()=>{
	slide.style.left = 100/options.length*index + "%"});
});
//console.log("Hello")

/*Parte per mostrare le descrizioni al passaggio del mouse
let riduciButtons = document.querySelectorAll(".riduci");
let mostraButtons = document.querySelectorAll(".mostra");*/

function mostra(){
	
	this.parentNode.parentNode.childNodes[1].style.display = "block";
	//oscuro il mostra ed evidenzio il riduci
	this.style.display = "none";
	this.parentNode.childNodes[1].style.display = "block";
	
}
function riduci(){
	this.parentNode.parentNode.childNodes[1].style.display = "none";
	//oscuro il riduci ed evidenzio il mostra
	this.style.display = "none";
	this.parentNode.childNodes[0].style.display = "block";
	
}

/*mostraButtons.forEach(ele => {
  //some code here
  ele.addEventListener("mouseover", mostra);
});

riduciButtons.forEach(ele => {
  //some code here
  ele.addEventListener("mouseover", riduci);
});*/

/*Parte per gestire il riempimento del cuore al click del preferito
let cuori = document.querySelectorAll(".favourite");
let likesCounter = 0;*/

function aggiungiRimuoviPreferito(){
	//Aggiungi preferito
	if (this.firstChild.classList[1] == "fa-heart-o"){
		this.firstChild.classList.remove("fa", "fa-heart-o");
		this.firstChild.classList.add("fa", "fa-heart");
		
		//Elimino dal database di elementi il preferito
		for(let item of contents){
			
			if(item.urlLink == this.parentNode.childNodes[3].href){
				item.liked = 'Yes';
				likesCounter += 1;
			}
		}
	}
	//Rimuovi preferito
	else if(this.firstChild.classList[1] == "fa-heart"){
		this.firstChild.classList.remove("fa", "fa-heart");
		this.firstChild.classList.add("fa", "fa-heart-o");
		
		//Elimino dal database di elementi il preferito
		for(let item of contents){
			if(item.urlLink == this.parentNode.childNodes[3].href){
				item.liked = 'No';
				likesCounter -= 1;
			}
		}
	}
	//Aggiornamento del cerchio menu laterale
	let likeStatus = document.querySelector("#favouriteCircle");
	likeStatus.innerText = likesCounter;
}

/*cuori.forEach(ele => {
  ele.addEventListener("click", aggiungiRimuoviPreferito);
});*/

/*Mostra solo alcuni generi struttura di emergenza va migliorata!!!*/
function showComedy(){
	/*Soluzione temporanea maldestra in attesa di implementazione database*/
	let wrapper = document.querySelector(".wrapper");
	wrapper.remove();
	loadContents();
	//Cancello le cards che non contengono Fantasy
	let cards = document.querySelectorAll(".card");
	
	for(let i = 0; i < cards.length; i++){
		if((cards[i].childNodes[0].childNodes[1].childNodes[2].innerText) != "Genre: Comedy"){
			cards[i].remove();
		}else console.log("Ok");
	}
	//Aggiorno il titolo della pagina
	let titolo = document.querySelector("#titolo");
	titolo.innerText = "Watchlist - Comedy";
}
let comedySelector = document.querySelector("#comedySelector");
comedySelector.addEventListener("click", showComedy);

function showFantasy(){
	/*Soluzione temporanea maldestra in attesa di implementazione database*/
	let wrapper = document.querySelector(".wrapper");
	wrapper.remove();
	loadContents();
	/*let riduciButtons = document.querySelectorAll(".riduci");
	let mostraButtons = document.querySelectorAll(".mostra");
	mostraButtons.forEach(ele => {ele.addEventListener("mouseover", mostra);});
	riduciButtons.forEach(ele => {ele.addEventListener("mouseover", riduci);});
	let cuori = document.querySelectorAll(".favourite");
	let likesCounter = 0;
	cuori.forEach(ele => {ele.addEventListener("click", aggiungiRimuoviPreferito);});*/
	
	//Cancello le cards che non contengono Fantasy
	let cards = document.querySelectorAll(".card");
	for(let i = 0; i < cards.length; i++){
		if((cards[i].childNodes[0].childNodes[1].childNodes[2].innerText) != "Genre: Fantasy"){
			cards[i].remove();
		}else console.log("Ok");
	}/**/
	//Aggiorno il titolo della pagina
	let titolo = document.querySelector("#titolo");
	titolo.innerText = "Watchlist - Fantasy";
}
let fantasySelector = document.querySelector("#fantasySelector");
fantasySelector.addEventListener("click", showFantasy);

function showRomantic(){
	/*Soluzione temporanea maldestra in attesa di implementazione database*/
	let wrapper = document.querySelector(".wrapper");
	wrapper.remove();
	loadContents();
	//Cancello le cards che non contengono Fantasy
	let cards = document.querySelectorAll(".card");
	for(let i = 0; i < cards.length; i++){
		if((cards[i].childNodes[0].childNodes[1].childNodes[2].innerText) != "Genre: Romance"){
			cards[i].remove();
		}else console.log("Ok");
	}/**/
	//Aggiorno il titolo della pagina
	let titolo = document.querySelector("#titolo");
	titolo.innerText = "Watchlist - Romance";
}
let romanceSelector = document.querySelector("#romanticSelector");
romanceSelector.addEventListener("click", showRomantic);

function showShonen(){
	/*Soluzione temporanea maldestra in attesa di implementazione database*/
	let wrapper = document.querySelector(".wrapper");
	wrapper.remove();
	loadContents();
	//Cancello le cards che non contengono Fantasy
	let cards = document.querySelectorAll(".card");
	for(let i = 0; i < cards.length; i++){
		if((cards[i].childNodes[0].childNodes[1].childNodes[2].innerText) != "Genre: Shonen"){
			cards[i].remove();
		}else console.log("Ok");
	}/**/
	//Aggiorno il titolo della pagina
	let titolo = document.querySelector("#titolo");
	titolo.innerText = "Watchlist - Shonen";
}
let shonenSelector = document.querySelector("#shonenSelector");
shonenSelector.addEventListener("click", showShonen);

function showSliceOfLife(){
	/*Soluzione temporanea maldestra in attesa di implementazione database*/
	let wrapper = document.querySelector(".wrapper");
	wrapper.remove();
	loadContents();
	//Cancello le cards che non contengono Fantasy
	let cards = document.querySelectorAll(".card");
	for(let i = 0; i < cards.length; i++){
		if((cards[i].childNodes[0].childNodes[1].childNodes[2].innerText) != "Genre: Slice of life"){
			cards[i].remove();
		}else console.log("Ok");
	}/**/
	//Aggiorno il titolo della pagina
	let titolo = document.querySelector("#titolo");
	titolo.innerText = "Watchlist - Slice of life";
}
let sliceOfLifeSelector = document.querySelector("#sliceOfLifeSelector");
sliceOfLifeSelector.addEventListener("click", showSliceOfLife);

function showAll(){
	/*Soluzione temporanea maldestra in attesa di implementazione database*/
	let wrapper = document.querySelector(".wrapper");
	wrapper.remove();
	loadContents();
	//Aggiorno il titolo della pagina
	let titolo = document.querySelector("#titolo");
	titolo.innerText = "Watchlist - All";
}
let showAllSelector = document.querySelector("#showAllSelector");
showAllSelector.addEventListener("click", showAll);
