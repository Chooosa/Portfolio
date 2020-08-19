const msgList = document.querySelector('ul');
const userTxt = document.getElementById('user-text');
const sendBtn = document.getElementById('send-btn');
let startMsg = false;
let calc = false;
let numbText = "";
let writeCounter = 0;

userTxt.oninput = function dsbBtn() {
	if (userTxt.value) {
		sendBtn.disabled = false;
		if (writeCounter < 1) {addWriteIcon(1);}
	} else {
		sendBtn.disabled = true;
		addWriteIcon(2);
		writeCounter = 0;
	}
};

function msg () {
	userTxtVl = userTxt.value;
	let botTxt = "";

	addMsg(userTxtVl, "user");
	userTxt.value = "";
	sendBtn.disabled = true;
	addWriteIcon(2);
	writeCounter = 0;

	if (startMsg) {
		if (userTxtVl.startsWith("/name:")) {
			botTxt = `Привет ${cleanWord()}, приятно познакомится.
			Я умею считать. Введите команду '/number:' и после нее
			два числа через запятую.`;
		} else if (userTxtVl.startsWith("/number:")) {
			numbText = userTxtVl;
			botTxt = `Введите одно из действий: -, +, *, /`;
			calc = true;
		} else if (calc==true) {
			botTxt = `Результат: ${calculator(numbText, userTxtVl)}`;
			calc = false;
		} else if (userTxtVl.startsWith("/stop")) {
			botTxt = `Всего доброго, если хочешь поговорить пиши /start`;
			startMsg = false;
		} else if (userTxtVl.startsWith("/weather")) {
			botTxt = `<div class="elfsight-app-3b1a3b19-7494-4689-b171-f3b17c5b8d6b weather-box"></div>`;
		} else {
		botTxt = "Я не понимаю, введите другую команду!";
		}
	} else {
		if (userTxtVl.startsWith("/start")) {
			botTxt = `Привет, меня зовут Чат-бот, а как зовут тебя?
			Перед Вашим именем ввдетие команду '/name:'.`;
			startMsg = true;
		} else {
			botTxt = `Введите команду /start, для начала общения`;
		}
	}
	addMsg(botTxt, "bot");
}

function addMsg (text, who) {
	msgList.insertAdjacentHTML("beforeend", `<li class="message">
					<img src="IMG/Avatar-${who}.svg" alt="Avatar-${who}">
					<div class="text-message text-message__${who}">
						${text}
					</div>
				</li>`);
}

function addWriteIcon (arg) {
	if (arg == 1) {
		msgList.insertAdjacentHTML("afterend", `<div class="write-msg" id="write">
				<i></i> <i></i> <i></i>
				<img src="IMG/write2.png" alt="write-msg" class="write-msg__img">
			</div>`);
		writeCounter++;
	} else {
		let writeIco = document.getElementById('write');
		writeIco.remove();
	}
}

function cleanWord () {
	let fName = userTxtVl.replace("/name:", "");
	let cName = fName.replace(/\s\p{P}/gu, "");
	return cName;
}

function calculator (numText, operText) {
	let num = numText.replace("/number:", "");
	let separ = num.indexOf(",");
	let numbA = Number(num.substring(0, separ));
	let numbB = Number(num.substring(separ+1));
	let operation = operText.substring(0,1);
	let answ;
	let answer = "";
	switch (operation) {
		case "-":
			answ = numbA - numbB;
			break;
		case "+":
			answ = numbA + numbB;
			break;
		case "*":
			answ = numbA * numbB;
			break;
		case "/":
			answ = numbA / numbB;
			break;
	}
	answer = `${numbA} ${operation} ${numbB} = ${answ}`;
	return answer;
}