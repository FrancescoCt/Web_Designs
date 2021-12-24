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

/*Parte della coolNavbar*/
let options = document.querySelectorAll(".option");
let slide = document.querySelector(".slide");
options.forEach((ele,index)=>{
	ele.addEventListener("mouseover",()=>{
	slide.style.left = 100/options.length*index + "%"});
});
console.log("Hello")