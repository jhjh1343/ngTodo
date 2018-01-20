"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// 중간처리 operator
new rxjs_1.Observable(function (observer) {
    var count = 0;
    var timeout = setInterval(function () {
        ++count;
        observer.next(count);
    }, 1000);
}).filter(function (data) { return data % 2 === 0; }).subscribe(function (data) { return console.log(data); });
