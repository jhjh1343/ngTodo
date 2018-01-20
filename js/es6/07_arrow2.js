// arrow 펑션과 lexical function
// 1,2,3 출력 되도록 수정하시오.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
// function Person() {
//     // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
//     this.age = 0;
//
//     //윈도우가 갖고있다가 실행함. 1초후에.. window의 context이다!
//    //Context 코드 실행영역
//     setInterval(function growUp() {
//         // 비엄격 모드에서, growUp() 함수는 `this`를
//         // 전역 객체로 정의하고, 이는 Person() 생성자에
//         // 정의된 `this`와 다름.
//         this.age++; //this는 윈도우이다.
//         console.log(this.age);
//     }, 1000);
// }
//
// var p = new Person(); //결과는 NnN
//
function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| 는 정확히 person 객체를 참조 //에로우에서의 this는 현재 context(lexical)의 this이다
        console.log(this.age);
    }, 1000);
}

var p = new Person();
