/*Parte della coolNavbar*/
let options = document.querySelectorAll(".option");
let slide = document.querySelector(".slide");
options.forEach((ele,index)=>{
	ele.addEventListener("mouseover",()=>{
	slide.style.left = 100/options.length*index + "%"});
});
/*Parte per gestire l'Array di espressioni non registrate da inserire dopo*/
let new_words = Array()
/*Parte chatbot vero e proprio*/
/*const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");*/
const BOT_IMG = "bot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "Frank";

const prompts = [
	["hi", "hey", "hello", "good morning", "good afternoon"],
	["how are you", "how is life", "how are things"],
	["what are you doing", "what is going on", "what is up"],
	["how old are you"],
	["who are you", "are you human", "are you bot", "are you human or bot"],
	
	["who created you", "who made you"],
	["your name please", "your name", "may I know your name", "what is your name", "what call yourself"],
	["i love you"],
	["happy", "good", "fun", "wonderful", "fantastic", "cool"],
	["bad", "bored", "tired"],
	
	["help me", "tell me story", "tell me joke"],
	["ah", "ok", "okay", "nice"],
	["bye", "good bye", "goodbye", "see you later"],
	["what should i eat today"],
	["bro", "aaaa"],
	
	["what", "why", "how", "where", "when"],
	["no", "not sure", "maybe", "no thanks"],
	[""],
	["haha", "ha", "lol", "hehe", "funny", "joke"]
]

const replies = [
	["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
	["Fine... how are you", "Pretty well, how are you?", "Fantastic, how are you?"],
	["Nothing much", "About to go to sleep", "Can you guess?"],
	["I am infinte"],
	["I am just a bot", "I am a bot. What are you?"],
	
	["Javascript of course"],
	["I am nameless", "I don't have a name"],
	["I love you too", "Me too"],
	["Have you ever felt bad?", "Glad to hear it"],
	["Why?", "Why? You shouldn't!", "Try watching TV"],
	
	["What about?", "Once upon a time..."],
	["Tell me a story", "Tell me a joke", "Tell me about yourself"],
	["Bye", "Goodbye", "See you later"],
	["Sushi", "Pizza"],
	["Bro!", "Aaaaaaaa"],
	
	["Great question"],
	["That's ok", "I understand", "What do you want to talk about?"],
	["Please say something :("],
	["Haha!", "Good one!"]

]
const alternative = [
	"Same",
	"Go on...",
	"Bro...",
	"Try again",
	"I'm listening...",
	"I don't understand :/"
]
const robot = ["How do you do, fellow human", "I am not a bot"];
/*msgerForm.addEventListener("submit", event =>{
	event.preventDefault();
	const msgText = msgerInput.value;
	if(!msgText) return;
	msgerInput.value = "";
	addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
	output(msgText);
});*/
function output(input){
	let product;
	let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
	/*text = text
		.replace(/ a/g, " ")
		.replace(/i feel/g, "")
		.replace(/whats/g, "what is")
		.replace(/please/g, "")
		.replace(/ please/g, "")
		.replace(/r u/g, "are you")
		console.log(text);*/
	if(compare(prompts, replies, text)){
		product = compare(prompts, replies, text);
	}else if (text.match(/thank/gi)){
		product = "You're welcome!";
	}else if (text.match(/(robot|bot|robo)/gi)){
		product = robot[Math.floor(Math.random()*alternative.length)];
	}else if (text.match(/hello there/gi)){
		product = "General Kenobi!";
	}
	else{
		product = alternative[Math.floor(Math.random()*alternative.length)];
		new_words.push(text)
		console.log(new_words)
	}
	
	const delay = input.split(" ").length * 100;
	setTimeout(()=>{
		addChat(BOT_NAME, BOT_IMG, "left", product);
	}, delay);
}	

function compare(promptsArray, repliesArray, string){
	let reply;
	let replyFound = false;
	for(let x = 0; x < promptsArray.length; x++){
		for(let y = 0; y < promptsArray[x].length; y++){
			if(promptsArray[x][y] == string){
				let replies = repliesArray[x];
				reply = replies[Math.floor(Math.random()*replies.length)];
				replyFound = true;
				break;
			}
		}
		if(replyFound){
			break;
		}
	}
	return reply;
}
function addChat(name, img, side, text){
	//Dichiarazione costanti chatbot
	const msgerForm = get(".msger-inputarea");
	const msgerInput = get(".msger-input");
	const msgerChat = get(".msger-chat");
	let data = new Date();
	const msgHTML = "	<div class='msg "+side+"-msg'>"+
					"<div class='msg-img' style='background-image: url("+img+")'></div>"+
					"<div class='msg-bubble'>"+
						"<div class='msg-info'>"+
							"<div class='msg-info-name'>"+name+"</div>"+
							"<div class='msg-info-time'>"+formatDate(data)+"</div>"+
						"</div>"+
						"<div class='msg-text'>"+text+"</div>"+
					"</div>"+
				"</div>";
	msgerChat.insertAdjacentHTML("beforeend",  msgHTML);
	msgerChat.scrollTop += 500;
}
function get(selector, root = document){
	return root.querySelector(selector);
}
function formatDate(date){
	const h = 0 + date.getHours();
	const m = 0 + date.getMinutes();
	
	return h+":"+m;
}
function random(min, max){
	return Math.floor(Math.random() * (max-min) + min);
}
/*Fine chatbot*/
/*Richiamo chatbot da pulsante*/
function loadChatbot(){
	//Cancello la situazione di partenza
	const container1 = document.querySelector(".container1");
	if (container1){
	container1.remove();
	}
	const chatbotHTML = '<section class="msger">'+
			'<header class="msger-header">'+
				'<div class="msger-header-title">'+
					'<img src="bot.png" alt="" srcset=""/>'+
					'<p>Chatbot</p>'+
				'</div>'+
			'</header>'+
			'<main class="msger-chat">'+
				'<div class="msg left-msg">'+
					'<div class="msg-img" style="background-image: url(bot.png)"></div>'+
					'<div class="msg-bubble">'+
						'<div class="msg-info">'+
							'<div class="msg-info-name">BOT</div>'+
							'<div class="msg-info-time"><script language="Javascript">'+
							'<!--'+
							'today = new Date()'+
							'document.write(today.getHours(),":",today.getMinutes());'+
							'//-->'+
							'</script></div>'+
						'</div>'+
						'<div class="msg-text">Hi, welcome to Anime-Collection ChatBot! Go ahead and send me a message.</div>'+
					'</div>'+
				'</div>'+
			'</main>'+
			'<form class="msger-inputarea">'+
				'<input type="text" class="msger-input" placeholder="Enter your message..."/>'+
				'<button type="submit" class="msger-send-btn">'+
					'<i class="fa fa-paper-plane" aria-hidden="true"></i>'+
				'</button>'+
			'</form>'+
		'</section>';
	const contacts = document.querySelector("#contacts");
	contacts.insertAdjacentHTML("beforebegin", chatbotHTML);
	
	//Dichiarazione costanti chatbot
	const msgerForm = get(".msger-inputarea");
	const msgerInput = get(".msger-input");
	const msgerChat = get(".msger-chat");
	//Avviamento chatbot
	msgerForm.addEventListener("submit", event =>{
	event.preventDefault();
	const msgText = msgerInput.value;
	if(!msgText) return;
	msgerInput.value = "";
	addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
	output(msgText);


})  
	const titolo = document.querySelector("#titolo");
	if(titolo){
	titolo.innerText = 'Chatbot';
	}
}
const showChatBot = document.querySelector("#chatBot");
showChatBot.addEventListener('click', loadChatbot);

//Const show FAQ
function loadFAQ(){
	//Cancello la situazione di partenza
	const section = document.querySelector("section");
	const container1 = document.querySelector(".container1");
	
	if(section){
		section.remove();
	}else {container1.remove();}
	const FAQHTML = '<div class="container1">'+
						//Card
						'<div class="card1">'+
							'<div class="icon1">'+
								'<i class="fa fa-user" aria-hidden="true"></i>'+
							'</div>'+
							'<h4>PROFILE</h4>'+
							"<p>It's the logo on the navbar. Not available at the moment</p>"+
						'</div>'+
						//Card
						'<div class="card1">'+
							'<div class="icon1">'+
								'<i class="fa fa-address-book" aria-hidden="true"></i>'+
							'</div>'+
							'<h4>CONTACTS</h4>'+
							"<p>I haven't loaded my social link yet.</p>"+
						'</div>'+
						//Card
						'<div class="card1">'+
							'<div class="icon1">'+
								'<i class="fa fa-thumbs-up" aria-hidden="true"></i>'+
							'</div>'+
							'<h4>FAVOURITE</h4>'+
							'<p>I need to work on the database, for now the favourite system works fine only on the same session in page.</p>'+
						'</div>'+
						//Card
						'<div class="card1">'+
							'<div class="icon1">'+
								'<i class="fa fa-android" aria-hidden="true"></i>'+
							'</div>'+
							'<h4>CHATBOT</h4>'+
							'<p>There are no hidden function yet. Just speak in English with him, otherwise he will not understand you.</p>'+
						'</div>'+
						//Card
						'<div class="card1">'+
							'<div class="icon1">'+
								'<i class="fa fa-globe" aria-hidden="true"></i>'+
							'</div>'+
							'<h4>LOCAL</h4>'+
							'<p>The app is too weak for being published online. It works locally but you cannot access from another device yet.</p>'+
						'</div>'+
						//Card
						'<div class="card1">'+
							'<div class="icon1">'+
								'<i class="fa fa-link" aria-hidden="true"></i>'+
							'</div>'+
							'<h4>LINKS</h4>'+
							'<p>The links in the app are connected to other streaming sites.</p>'+
						'</div>'+
						//Card
						'<div class="card1">'+
							'<div class="icon1">'+
								'<i class="fa fa-wifi" aria-hidden="true"></i>'+
							'</div>'+
							'<h4>WIFI</h4>'+
							'<p>Once I release the new update everyone on the same wifi can access this web app.</p>'+
						'</div>'+
					'</div>';
	const contacts = document.querySelector("#contacts");
	contacts.insertAdjacentHTML("beforebegin", FAQHTML);
	const titolo = document.querySelector("#titolo");
	titolo.innerText = 'FAQ';
}
const showFAQ = document.querySelector("#FAQ");
showFAQ.addEventListener('click', loadFAQ);

//Const show FAQ
function loadProject(){
	//Cancello la situazione di partenza
	
	const section = document.querySelector("section");
	const container1 = document.querySelector(".container1");
	
	if(section){
		section.remove();
	}else {container1.remove();}
	const projectHTML = '<div class="container1">'+
						
						//Card
						'<div class="card1">'+
							'<div class="icon1">'+
								'<i class="fa fa-picture-o" aria-hidden="true"></i>'+
							'</div>'+
							'<h4>GALLERY</h4>'+
							'<p>Anime Wallpapers and icons.</p>'+
						'</div>'+
						//Card
						'<div class="card1">'+
							'<div class="icon1">'+
								'<i class="fa fa-video-camera" aria-hidden="true"></i>'+
							'</div>'+
							'<h4>WATCHLIST</h4>'+
							'<p>Films and series ordered by categories.</p>'+
						'</div>'+
						//Card
						'<div class="card1">'+
							'<div class="icon1">'+
								'<i class="fa fa-user" aria-hidden="true"></i>'+
							'</div>'+
							'<h4>PROFILE</h4>'+
							'<p>Set your profile image and personal motto.</p>'+
						'</div>'+
					'</div>';
	const contacts = document.querySelector("#contacts");
	contacts.insertAdjacentHTML("beforebegin", projectHTML);
	const titolo = document.querySelector("#titolo");
	titolo.innerText = 'Project';
}
const showProject = document.querySelector("#project");
showProject.addEventListener('click', loadProject);

/*Parte orologio digitale*/

function updateTime() {
  var dateInfo = new Date();

  /* time */
  var hr,
    _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
    sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
    ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

  // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
  if (dateInfo.getHours() == 0) {
    hr = 12;
  } else if (dateInfo.getHours() > 12) {
    hr = dateInfo.getHours() - 12;
  } else {
    hr = dateInfo.getHours();
  }

  var currentTime = hr + ":" + _min + ":" + sec;

  // print time
  document.getElementsByClassName("hms")[0].innerHTML = currentTime;
  document.getElementsByClassName("ampm")[0].innerHTML = ampm;

  /* date */
  var dow = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    day = dateInfo.getDate();

  // store date
  var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

  document.getElementsByClassName("date")[0].innerHTML = currentDate;
};

// print time and date once, then update them every second
updateTime();
setInterval(function() {
  updateTime()
}, 1000);