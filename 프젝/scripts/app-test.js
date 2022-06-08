// console.log(window.localStorage);
// console.log(window.sessionStorage);
// console.log(document.cookie);

// localStorage.setItem('testKey', 2022);
// console.log(localStorage.getItem('testKey'));

// JSON.parse(): json 문자열을 JavaScript 객체로 변환
const json = '[{"todo": "programming"}, {"todo": "gaming"}]';
const obj = JSON.parse(json);

obj.forEach((object) => {
    console.log(object.todo)
});

// JSON.stringify(): JavaScript 객체를 json 문자열로 변환
console.log(JSON.stringify({todo: "sleep"}));

//Array,prototype.filter()
// 테스트 함수를 만족하는 요소만을 모아 새로운 배열로 반환
const arr = ['123', '1234','12345', '123456','1234567','12345678'];
const result = arr.filter(str => str.length > 5);

console.log(result);