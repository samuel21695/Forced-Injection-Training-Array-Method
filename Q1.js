// ? 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환하는 메서드는 무엇인가요?

// * 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환하는 메서드는 JavaScript의 push() 메서드입니다.
// * 역할: push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하는 역할을 합니다. 이후 배열의 길이를 반환합니다.
// * 사용 방법: push() 메서드는 배열 객체에 대해 호출하며, 하나 이상의 인자(요소)를 받아 배열의 끝에 추가합니다.

const myArray = [1, 2, 3];
const newLength = myArray.push(4, 5);
console.log(newLength);
// myArray는 이제 [1, 2, 3, 4, 5]가 되고, newLength는 5를 반환합니다.


const fruits = ['apple', 'banana'];
const newfruits = fruits.push('cheery', 'melon');
console.log(fruits);
console.log(newfruits);
// ["apple", "banana", "cherry", "date"]
