import {Observable} from "rxjs";

// 최종처리 operator: 한개의 최종값을 Observable로 리턴
//Observable 의 단일값
//reduce이 Sum의 역할이다

const source = Observable.of(1, 2, 3, 4);
const result = source.reduce((prev, curr) => prev + curr); // prev + curr 값이 prev로 들어간다.

const subscribe = result.subscribe(val => console.log('Sum:', val));
