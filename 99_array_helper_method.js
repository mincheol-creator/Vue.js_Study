//Array Helper Method

//for Each

const colors = ["red", "blue", "green"];

//배열의 요소를 순회(특정한 자료내에 1번씩만 탐색)하며 출력
//0. 전통적인 for문
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//1. 순회문으로서의 forans
for (let color of colors) {
  console.log(color);
}

//2. forEach 핼퍼 매서드
const result = colors.forEach(function (color) {
  console.log(color);
}); //forEach의 return값은 있다? X 없다? O
console.log(result);

//filter()
const numbers = [-20, -15, 5, 10];
positiveNumber1 = [];
numbers.forEach((number) => {
  if (number > 0) {
    positiveNumber1.push(number);
  }
});
console.log(positiveNumber1);

const positiveNumber2 = numbers.filter((number) => number > 0);
console.log(positiveNumber2);

//3. map()
//-> 순회를 하며, 내부의 모든 요소에 동일한 작업을 해야하는 경우
//-> 숫자 배열 <-> 글자 배열, 동일한 데이터를 적용해야하는 경우

inputs = ["1", "5", "3", "6"];
const numberInputs = inputs.map(
  (input) => parseInt(input)
  //Number(input)
  //return parseInt(input)
);
console.log(numberInputs);

let sum = 0;

//4. reduce()
//-> 순회를 하며, 내부의 모든 요소를 하나의 값으로 환원해야하는 경우

sum = numberInputs.reduce((a /*누적값*/, b /*현재값*/) => {
  a + b;
});
console.log(sum);

//find, some, every
