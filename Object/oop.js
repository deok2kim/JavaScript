// 객체지향프로그래밍
var grades = {
  'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
  // this: 이 함수가 속해있는 객체를 가리키는 변수
  'show' : function(){
      for(var name in this.list){
          console.log(name+':'+this.list[name]);
      }
  }
};
grades.show();