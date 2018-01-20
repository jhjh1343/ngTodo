let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};

// 위의 문장을 한줄로 작성하시오.
//매개변수가 한개면() 생략 가능. 현재는 두개라 생략못하고  매개변수가 없다면 ()생략불가능
// return생략가능한 경우는 함수표현식(expression)일때만 가능하다!!!!
//본문은 한줄이면 {}생략 가능.
let circleArea = (pi,r) => pi * r * r ;

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
