// ? 주어진 테스트 함수를 만족하는 배열의 첫 번쨰 요소의 값을 반환하는 메서드는 무엇인가요?

/**
 * * 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소의 값을 반환하는 메서드는 JavaScript의 find() 메서드 입니다.
 * * 역할: find() 메서드는 배열의 각 요소에 대해 주어진 테스트 함수를 호출하고, 테스트 함수가 True를 반환하는 첫 번째 요소를 반환합니다. 만약 어떤 요소도 조건을 만족하지 않으면 undefined를 반환합니다.
 * * 사용 방법: find() 메서드는 배열 객체에 대해 호출되며, 테스트 함수를 인수로 받습니다.
 */

const MyArray = [10, 20, 30, 40, 50];
const findElement = MyArray.find( element => element === 20)
// 30 (첫 번째로 25보다 큰 요소)
console.log(findElement);

const fruits = ['apple', 'banana', 'pear', 'cherry'];
const foundFruit = fruits.find( element => element === 'apple');
console.log(foundFruit)