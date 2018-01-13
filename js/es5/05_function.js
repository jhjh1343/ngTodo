// 1.생성자 함수에서의 this의 의미
function person() {
    this.someValue = 2;
    var someValue2 = 3;
}

//console.log(person()); //실행결과는? 그 이유는? undefined

//내부적으로 this가 생성됨 만일 리턴문이 없으면 this를 리턴함.
//console.log(new person()); // 생성자 함수로 생성시 실행결과는? person { someValue: 2 }

//2. 일반적인 this의 의미
console.log(someValue); // 실행결과와, 이유를 말하시오. ReferenceError: someValue is not defined
