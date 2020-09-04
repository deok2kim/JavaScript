var numbering = function (){
  i = 0;
  while(i < 10){
      console.log(i)
      i += 1;
  }   
}
numbering();

// 위와 아래는 같다.

function numbering() {
  i = 0;
  while(i < 10){
      console.log(i)
      i += 1;
  }
}
numbering();

// 함수의 정의와 호출을 동시에. 익명 함수. 일회성 함수
(function () {
  i = 0;
  while(i < 10){
      console.log(i)
      i += 1;
  }
})()

// 자바스크립트는 함수형 언어!