// 함수 실행시 디폴트 값을 설정하는 방법
function myFunction(x = 1, y = 2, z = 3 + 5) {
    console.log(x, y, z);
}

// 1.
myFunction(6);

// 2.
myFunction(6,7);

// 3. 3번째 파라메터 z로 넘기는 방법
myFunction(undefined, undefined, 1);

// 3. 2번째 파라메터 z로 넘기는 방법
myFunction(undefined, 1, undefined);

//var는 scope 없다
//EM6에 추가된 2가지 타입
// let는 scope 있다. 지역변수
//const는 scope 있다.
/*
오버로딩 안된다. 같은 이름의 함수를 매개변수가 다르게 만들수 없다는 소리
typescript는 오버로딩 가능하다.

? optional
*/
