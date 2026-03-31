
//먼저 화면에 게임 시작 버튼
//버튼을 누르면 user id, age, gender, user_count, round_count, user_draw 값을 받아옴
//값을 다 채우고 버튼을 누르면 게임을 시작함
//한사람씩 뽑게 되면 순서를 정해줌
//게임 라운드 마다 점수를 보여줌 총 점수는 마지막에만 보여줌
//카드를 뽑을때마다 점수를 보여줌
//카드를 뽑을때마다 2초가 걸림

const { Number } = require("three/examples/jsm/transpiler/AST.js");

//마지막 라운드일 경우 끝나고 총점수 보여주고 우승자를 알려줌
function StartGame() {
	const container = document.getElementById('container');

	const btn = document.createElement('button');
	btn.textContent = '게임 시작';
	container.appendChild(btn);

	btn.addEventListener('click', function () {
		btn.remove();

		GetUserInfo();
	});
}
function GetUserInfo(){
	const container = document.getElementById('container');
	const texts = [];
	const inputs = [];
	const content_text = document.createElement('div')
	container.appendChild(content_text);
	const table = document.createElement('table')
	container.appendChild(table);
	for(var i=0;i<4;i++){
		const text = document.createElement('div')
		const input = document.createElement('input')
		texts[i] = text;
		inputs[i] = input;
		table.appendChild(text);
		table.appendChild(input);
	}
	content_text.textContent = '유저 정보를 입력해주세요.';
	texts[0].textContent = '유저 아이디';
	texts[1].textContent = '유저 수';
	texts[2].textContent = '라운드 수';
	texts[3].textContent = '카드 수';
	texts[4].textContent = '한사람씩 뽑을지';
	const btn = document.createElement('button');
	btn.textContent = '게임 시작';
	container.appendChild(btn);

	btn.addEventListener('click', function () {
		let EmptyInput = false;
		for(var i=0;i<6;i++){
			if(inputs[i].value.trim() ==''){
				EmptyInput = true;
				alert("값을 입력해주세요");
				break;
			}
		}
		if(EmptyInput == false){
			btn.remove();
			//유저 아이디 랜덤으로 만들어서 유저 수 맞추는 로직, 그리고 그에 맞게 함수를 만들어줘야함.
		}
	});
}
function card_Shuffle(card_count){
	//카드 섞는 로직
}
function card_draw(card_count, already_draw) {
	let draw_card;

	do {
		draw_card = Math.floor(Math.random() * card_count);
	} while (already_draw.includes(draw_card));
	already_draw.push(draw_card);
	return draw_card;
}
StartGame();