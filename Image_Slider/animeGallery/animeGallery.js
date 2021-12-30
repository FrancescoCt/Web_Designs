/*Loading dinamico dei contenuti*/
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
		
		const imageBox = document.createElement('div');
		imageBox.classList.add('image-box');
		cardHeader.appendChild(imageBox);
		
		const wFull = document.createElement('img');
		wFull.src = item.image;
		wFull.classList.add('w-full');
		imageBox.appendChild(wFull);
		
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
		/**************Footer*****************************/
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


/*Parte di imageSlider2*/
var modalBox = document.querySelector('.modal-box'),
    modalBoxImg = modalBox.querySelector('.modal-box--image'),
    overlay  = document.querySelector('.overlay'),
    imageBox = document.querySelectorAll('.image-box'),
    modalImgBox = modalBoxImg.querySelector('img');


for (let i = 0; i < imageBox.length; i++) {
    imageBox[i].onclick = function () {
        modalBox.classList.remove('invisible');

        var imgSrc = this.querySelector('img').src;
        
        modalImgBox.src = imgSrc;
    }
}

overlay.onclick = function () {
    modalBox.classList.add('invisible');
}
window.onkeydown = function (e) {
    if (e.keyCode === 27){
        modalBox.classList.add('invisible');

    }
}