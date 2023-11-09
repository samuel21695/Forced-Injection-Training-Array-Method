// ? Q14 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환하는 메서드는 무엇인가요?

/**
 * * 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환하는 메서드는 JavaScript의 findIndex() 메서드입니다.
 * * 역할: findIndex() 메서드는 배열의 각 요소에 대해 주어진 테스트 함수를 호출하고, 테스트 함수가 True를 반환하는 첫 번째 요소의 인덱스를 반환합니다. 만약 어떤 요소도 조건을 만족하지 않으면 -1을 반환합니다.
 * * 사용 방법: findIndex() 메서드는 배열 객체에 대해 호출되며, 테스트 함수를 인수로 받습니다.
 */

const MyArray = [10, 20, 30, 40, 50];
const findIndex = MyArray.findIndex( element => element > 20)
// 2 (첫 번째로 25보다 큰 요소의 인덱스)
console.log(findIndex);

const fruits = ['apple', 'banana', 'pear', 'cherry'];
const foundFruit = fruits.findIndex( element => element === 'apple');
console.log(foundFruit)