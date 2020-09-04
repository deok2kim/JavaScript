// 객체는 순서가 없다. 다만 키와 밸류가 있을 뿐!!!!

var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(key in grades) {
    console.log("key : "+key+" value : "+grades[key]);
}