import {Observable} from "rxjs";

// observable: stream of data
new Observable(observer => {
    let count = 0;
    let timeout = setInterval(() => {
        ++count;
        observer.next(count);
    }, 1000);
}).subscribe(data => console.log(data));
//연산자
// 중간처리 연산자  MAP, FILTER
// 최종처리 연산자  SUM(X) -> reduce, COUNT
