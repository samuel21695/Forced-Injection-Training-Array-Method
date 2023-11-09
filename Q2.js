// ? Q2 배열에서 마지막 요소를 제거하고 그 요소를 반환하는 메서드는 무엇인가요?

/**
 * * 배열에서 마지막 요소를 제거하고 그 요소를 반환하는 메서드는 JavaScript의 pop() 메서드입니다.
 * * 역할: pop() 메서드는 배열의 마지막 요소를 제거하고 그 요소를 반환합니다.
 * * 사용 방법: pop() 메서드는 배열 객체에 대해 호출하며, 어떤 인자도 필요로 하지 않습니다.
 */

const myArray = [1, 2, 3];
const lastElement = myArray.pop();
console.log(lastElement);
// MyArray가 [1, 2가 되고, lastElement는 제거한 요소인 3을 반환합니다.

const fruit = ['apple', 'banana', 'watermelon']
const lastFruit = fruit.pop();
console.log(fruit);
console.log(lastFruit);