// ? Q4, 배열의 시작에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환하는 메서드는 무엇인가요?

/**
 * * 배열의 시작에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환하는 메서드는 JavaScript의 'unshift()' 메서드입니다.
 * * 역할: 'unshift()' 메서드는 배열의 시작에 하나 이상의 요소를 추가하는 역할을 합니다.
 * * 사용 방법: 'unshift()' 메서드는 배열 객체에 대해 호출하며, 하나 이상의 인자(요소)를 받아 배열의 시작에 추가합니다.
 */

const myArray = [1, 2, 3]
const newArrayLength = myArray.unshift(0)
// 여러 개의 인자도 가능하다.
console.log(myArray);
console.log(newArrayLength);

const fruits = ['apple', 'banana', 'melon'];
const newFruitsLength = fruits.unshift('durian', 'pear', 'peach')
console.log(fruits);
console.log(newFruitsLength);