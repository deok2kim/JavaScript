// 배열의 맨 뒤에 원소 추가
var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f');
console.log(li);

// 복수의 원소를 배열에 추가
var li = ['a', 'b', 'c', 'd', 'e'];
li = li.concat(['f', 'g']);
console.log(li);

// 배열의 시작점에 원소를 추가
var li = ['a', 'b', 'c', 'd', 'e'];
li.unshift('z');
console.log(li);

// 만약 두번째 인덱스 뒤에 대문자 B를 넣고 싶다면 아래와 같이한다.
// splice는 첫번째 인자에 해당하는 원소부터 두번째 인자에 해당하는 원소의 숫자만큼의 값을 배열로부터 제거한 후에 리턴한다.
// 그리고 세번째 인자부터 전달된 인자들을 첫번째 인자의 원소 뒤에 추가한다.
var li = ['a', 'b', 'c', 'd', 'e'];
li.splice(2, 0, 'B');
console.log(li);

// 다음은 배열의 첫번째 원소를 제거하는 방법이다. shift를 사용하면 된다. 아래 결과는 b, c, d, e 다.
var li = ['a', 'b', 'c', 'd', 'e'];
li.shift();
console.log(li);

// 다음은 배열 끝점의 원소를 배열 li에서 제거한다. 이때는 pop를 사용한다. 결과는 a, b, c, d 다.
var li = ['a', 'b', 'c', 'd', 'e'];
li.pop();
console.log(li);

// 다음은 정렬하는 방법이다. 결과는 a, b, c, d, e 다.
var li = ['c', 'e', 'a', 'b', 'd'];
li.sort();
console.log(li);

// 역순으로 정렬하고 싶을 때는 아래와 같이 한다.
var li = ['c', 'e', 'a', 'b', 'd'];
li.reverse();
console.log(li);