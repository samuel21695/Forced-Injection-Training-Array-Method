// ? Q20 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고 하나의 결과값을 반환하는 메서드는 무엇인가요?

/**
 * * 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고 하나의 결과값을 반환하는 메서드는 JavaScript의 reduce() 메서드입니다.
 * * 역할: reduce() 메서드는 배열의 각 요소에 개해 주어진 리듀서 함수를 실행하고, 각 단계에서 이전 결과값과 현재 요소를 사용하여 최종 결과값을 계산합니다.
 * * 사용 방법: reduce() 메서드는 배열 객체에 대해 호출되며, 리듀서 함수와 초기값(initial value)을 인수로 받습니다.
 */

//• accumulator: 누산기로서 현재까지의 계산 결과를 나타냅니다.
// • currentValue: 현재 순회 중인 배열의 요소입니다.
// • currentIndex: 현재 순회 중인 배열의 요소의 인덱스입니다.
// • array: reduce를 호출한 배열 자체입니다.
// • initialValue: 초기 누산값으로, 생략할 수 있습니다.
array.reduce(function(accumulator, currentValue, currentIndex, array) {
  // 리듀서 로직
}, initialValue);


const myArray = [1, 2, 3, 4, 5];
const sum = myArray.reduce((accumlator, currentValue) => accumlator + currentValue, 0);
// sum은 15를 반환합니다. (모든 요소를 더한 결과)
console.log(sum);