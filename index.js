//버튼을 누르면 user id, age, gender, user_count, round_count, user_draw 값을 받아옴
//값을 다 채우고 버튼을 누르면 게임을 시작함
//한사람씩 뽑게 되면 순서를 정해줌
//게임 라운드 마다 점수를 보여줌 총 점수는 마지막에만 보여줌
//카드를 뽑을때마다 점수를 보여줌
//카드를 뽑을때마다 2초가 걸림
class User{
	constructor(userId, age, gender) {
		this.userId = userId;
		this.age = age;
		this.gender = gender;
	}
}
class Game{
	constructor(userId, user_count, round_count, user_draw) {
		this.userId = userId;
		this.user_count = user_count;
		this.round_count = round_count;
		this.user_draw = user_draw;
	}
}

//마지막 라운드일 경우 끝나고 총점수 보여주고 우승자를 알려줌

function StartGame(){
	const container = document.getElementById('container');
	const texts = [];
	const inputs = [];
	const content_text = document.createElement('div')
	container.appendChild(content_text);
	const table = document.createElement('table')
	container.appendChild(table);
	for(var i=0;i<5;i++){
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
		for(let i=0;i<6;i++){
			if(inputs[i].value.trim() ==''){
				EmptyInput = true;
				alert("값을 입력해주세요");
				break;
			}
		}
		if(EmptyInput == false){
			createInstance();
			let Card_Stack = [];
			let user_card =0;
			Card_Stack = make_CardDeck(inputs[2]);
			Card_Stack = card_Shuffle(Card_Stack);
			user_card = card_draw(Card_Stack);
			btn.remove();
			//유저 아이디 랜덤으로 만들어서 유저 수 맞추는 로직, 그리고 그에 맞게 함수를 만들어줘야함.
		}
	});
}
function createInstance(){
	const inputElement = document.getElementById('userName');
    const nameValue = inputElement.value;
    
    // 생성자에 값 전달
    const user = new User(nameValue);
}
function make_CardDeck(deck_count){
	let Card_Stack = [];
	for(let i = 0; i<deck_count;i++){
		Card_Stack[i]=i;
		//카드 묶음 추가
	}
	return Card_Stack
}
function card_Shuffle(Card_Stack){
	for (let i = Card_Stack.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[Card_Stack[i], Card_Stack[j]] = [Card_Stack[j], Card_Stack[i]];
	}
	return Card_Stack;
}
function card_draw(Card_Stack) {
	let card = Card_Stack[0];
	Card_Stack.shift();
	return card
}
//점수 넣어주는 함수
StartGame();