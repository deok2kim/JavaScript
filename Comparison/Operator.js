// 대입 연산자
var a = 1
console.log();
// 동등 연산자
console.log(1==1)
console.log(1==2)
console.log("one"=="two")
console.log("one"=="one")
console.log();

// 일치 연산자 == 엄격한 동등 연산자!!
console.log(1=="1");  // 동등연산자 - 트루 : 데이터 타입은 달라도... (자바스크립트 언어에서)
console.log(1==="1");  // 일치연산자 - 펄스 : 데이터 타입까지도 같아야함
console.log();



//결론부터 말하면 == 연산자 대신 === 연산자를 쓰는 것을 강력하게 권한다. 몇가지 사례를 더 살펴보자.
// 프로그램이 커지면 커질수록 == 를 쓰면 버그를 발생시킬 수 있다.

var b; //undefined: 값이 정의도지 않았다. 의도X
console.log(b)
var c = null // null: 값이 없다 의도O
console.log(c)

console.log(undefined == null)  // true
console.log(undefined === null)  // false

// 데이터 타입
// Boolean: true/false
// Number: -1, 0, 1, 2 ...
// String: "a", "b", "c", ...
// undefined: undefined
// null: null
console.log()
// 자바스크립트에서는 숫자 1은 true 로 간주한다. ("==" 동등 연산자 일 경우!!)
// 나머지 숫자는 false
console.log(true == "1")  // true
console.log(true == 1)  // ture
console.log(true == 2)  // false
console.log();
// 하지만 === 일치 연산자에서는 아니다
console.log(true === "1")  // false
console.log(0 === -0)  // true

// NaN은 0/0과 같은 연산의 결과로 만들어지는 특수한 데이터 형인데 숫자가 아니라는 뜻이다.
console.log(NaN == NaN)  // false

// 기타 false로 간주되는 데이터 형
// ''
// undefined
// var a; a
// null
// NaN
