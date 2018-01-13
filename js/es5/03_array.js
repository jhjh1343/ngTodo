/**
 * Created by eastflag on 2016-10-14.
 */
// 1. 아래의 내용을 리터럴 객체로 담는 array list를 생성하시오.
//title	          price	  author	order
//--------------------------------------
//콩쥐팥쥐	      20000	  미상	  1
//흥부놀부	      25000	  미상	  2
//자바의정석	    35000	  정석	  3
//안드로이드정복	15000	  김상형	4
var books = [
  {title: "콩쥐팥쥐", price: 20000, author: "미상", order: 1},
  {title: "흥부놀부", price: 25000, author: "미상", order: 2},
  {title: "자바의정석", price: 35000, author: "정석", order: 3},
  {title: "안드로이드정복", price: 15000, author: "김상형", order: 4},
];

// 2. books의 type은 무엇인가? 자바스크립트의 타입은 몇가지가 있는가?
console.log(typeof books);
/*
Object이다
2가지타입
primitiae - boolean, number, symbol, null, undefined
Object
*/


//3. 맨 앞쪽에 이것이자바다, 40000, 김상형, 5를 추가하시오 (힌트: unshift)
books.unshift({title: "이것이자바다", price: 40000, author: "김상형,", order: 5})
console.log(books);

//4. 맨 앞쪽에 추가한것을 지우시오,(shift)


// 5. 맨 뒷쪽에 추가하시오. (힌트: push)

// 6. 맨 뒤쪽에 추가한것을 지우시오,



// 7. 흥부놀부와 자바의정석 사이에 삽입하시오. (힌트: splice(2,0,개체))

// 8. 방금 삽입한거를 삭제하시오.



// 9. 원본 배열에서 자바의 정석을 찾아서 저자를 남궁성으로 바꾸시오(힌트: forEach)


// 10. 책의 총 비용을 출력하시오



// 11. 제목앞에 판매순위를 등수를 붙인 새로운 배열을 생성하시오.(힌트: map)
//맵은 돌린후 결과를 받을수 있다.


// 12. 새로운 배열을 만들되 3등안에 있는것만 따로 만든다. (힌트: filter)

