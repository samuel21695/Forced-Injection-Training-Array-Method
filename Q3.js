// ? Q3 배열에서 첫 번쨰 요소를 제거하고 그 요소를 반환하는 메서드는 무엇인가요?

/**
 * * 배열에서 첫 번째 요소를 제거하고 그 요소를 반환하는 메서드는 JavaScript의 'shift()' 메서드입니다.
 * * 역할 'shift()' 메서드는 배열의 첫 번째 요소를 제거하고 그 요소를 반환합니다.
 * * 사용 방법: 'shift()' 메서드는 배열 객체에 대해 호출하며, 어떤 인자도 필요로 하지 않습니다.
 */

const myArray = [1, 2, 3];
const firstElement = myArray.shift();
console.log(myArray);
console.log(firstElement);

const fruits = ['apple', 'banana', 'melon'];
const firstFruit = fruits.shift();
console.log(fruits);
console.log(firstFruit);