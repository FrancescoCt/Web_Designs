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
	//console.log(this.parentNode.childNodes[5]);
	this.style.display = "none";
	this.parentNode.childNodes[5].style.display = "block";
	//aggiusto il cardtitle
	this.parentNode.childNodes[3].style.marginLeft = "60%";
	this.parentNode.childNodes[5].style.marginTop = "-7%";
	
}
function riduci(){
	this.parentNode.parentNode.childNodes[3].style.display = "none";
	//oscuro il riduci ed evidenzio il mostra
	//console.log(this.parentNode.childNodes[1]);
	this.style.display = "none";
	this.parentNode.childNodes[1].style.display = "block";
	//aggiusto il cardtitle
	this.parentNode.childNodes[3].style.marginLeft = "60%";
	this.parentNode.childNodes[1].style.marginBottom = "-6%";
}

mostraButtons.forEach(ele => {
  //some code here
  ele.addEventListener("mouseover", mostra);
});

riduciButtons.forEach(ele => {
  //some code here
  ele.addEventListener("mouseover", riduci);
});