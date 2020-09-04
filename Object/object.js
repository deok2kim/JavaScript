// 다음은 객체를 만드는 법이다.
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
// 위의 예제에서 egoing은 key가 되고, 10은 value가 된다.

// 아래는 객체를 만드는 다른 방법이다.
var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;
// 아래와 같은 방법으로 객체를 만들수도 있다.

var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

// 객체를 만들었으니 이제는 객체에서 필요한 값을 가져와보자. 다음은 sorialgi라는 이름(key)으로 저장된 값을 가져오는 법이다. 결과는 80이다.
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
console.log(grades['sorialgi']);

// 다음 방법으로도 객체의 속성에 접근 할 수 있다.
console.log(grades.sorialgi);
