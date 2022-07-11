
function showName(){

	pointID = this.id.replace(/gaul_/g, '');
	const selectedPoint = document.querySelector("#"+pointID);
	selectedPoint.style.backgroundColor = "red";
	
}
function changeMode(){
	if (mode.innerText == "Player mode"){
		mode.innerText = "Spectator mode";
		let regionSelector = document.querySelectorAll(".region");
		for (let i = 0; i < regionSelector.length;i++){
		//console.log(regionSelector[i].id)
			regionSelector[i].addEventListener("click", showName);
		}
		let regionPoints = document.querySelectorAll(".regionDiv");
		for (let i = 0; i < regionPoints.length;i++){
		//console.log(regionSelector[i].id)
			regionPoints[i].style.display = "block";
		}
	}
	else if (mode.innerText == "Spectator mode"){
		mode.innerText = "Player mode";
		let regionPoints = document.querySelectorAll(".regionDiv");
		for (let i = 0; i < regionPoints.length;i++){
		//console.log(regionSelector[i].id)
			regionPoints[i].style.display = "none";
		}
	}
	
}
function newGame(){
	let regionPoints = document.querySelectorAll(".regionDiv");
		for (let i = 0; i < regionPoints.length;i++){
		//console.log(regionSelector[i].id)
			regionPoints[i].style.background = "none";
		}
}



const mode = document.querySelector("#mode")
mode.addEventListener("click", changeMode);
const resetTable = document.querySelector("#newGame")
resetTable.addEventListener("click", newGame);
