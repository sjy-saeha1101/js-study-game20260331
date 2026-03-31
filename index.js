
//먼저 화면에 게임 시작 버튼
//버튼을 누르면 user id, age, gender, user_count, round_count, user_draw 값을 받아옴
//값을 다 채우고 버튼을 누르면 게임을 시작함
//한사람씩 뽑게 되면 순서를 정해줌
//게임 라운드 마다 점수를 보여줌 총 점수는 마지막에만 보여줌
//카드를 뽑을때마다 점수를 보여줌
//카드를 뽑을때마다 2초가 걸림
//마지막 라운드일 경우 끝나고 총점수 보여주고 우승자를 알려줌
function StartGame(){
  const container = document.getElementById('container');

  const btn = document.createElement('button');
  btn.textContent = '게임 시작';
  container.appendChild(btn);

  btn.addEventListener('click',function(){
    btn.remove();

    //함수 호출하면 됨
  });
}
