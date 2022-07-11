
function showName(){

	pointID = this.id.replace(/pel_/g, '');
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

//Draggable elements
// Make the DIV element draggable:
dragElement(document.getElementById("army"));
dragElement(document.getElementById("army1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}