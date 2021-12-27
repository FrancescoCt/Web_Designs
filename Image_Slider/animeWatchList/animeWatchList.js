/*Parte della coolNavbar*/
let options = document.querySelectorAll(".option");
let slide = document.querySelector(".slide");
options.forEach((ele,index)=>{
	ele.addEventListener("mouseover",()=>{
	slide.style.left = 100/options.length*index + "%"});
});
console.log("Hello")

/*Parte per mostrare le descrizioni al passaggio del mouse*/
let riduciButtons = document.querySelectorAll(".riduci");
let mostraButtons = document.querySelectorAll(".mostra")

function mostra(){
	this.parentNode.parentNode.childNodes[3].style.display = "block";
	//oscuro il mostra ed evidenzio il riduci
	this.style.display = "none";
	this.parentNode.childNodes[3].style.display = "block";
	
}
function riduci(){
	this.parentNode.parentNode.childNodes[3].style.display = "none";
	//oscuro il riduci ed evidenzio il mostra
	this.style.display = "none";
	this.parentNode.childNodes[1].style.display = "block";
	
}

mostraButtons.forEach(ele => {
  //some code here
  ele.addEventListener("mouseover", mostra);
});

riduciButtons.forEach(ele => {
  //some code here
  ele.addEventListener("mouseover", riduci);
});

/*Parte per gestire il riempimento del cuore al click del preferito*/
let cuori = document.querySelectorAll(".favourite");
function aggiungiRimuoviPreferito(){
	
	//Aggiungi preferito
	if (this.firstChild.classList[1] == "fa-heart-o"){
		this.firstChild.classList.remove("fa", "fa-heart-o");
		this.firstChild.classList.add("fa", "fa-heart");
	}
	//Rimuovi preferito
	else if(this.firstChild.classList[1] == "fa-heart"){
		this.firstChild.classList.remove("fa", "fa-heart");
		this.firstChild.classList.add("fa", "fa-heart-o");
	}
	console.log(this.firstChild.classList);
}

cuori.forEach(ele => {
  //some code here
  ele.addEventListener("click", aggiungiRimuoviPreferito);
  
});