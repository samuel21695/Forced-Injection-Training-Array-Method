// ? Q22 배열이 특정 요소를 포함하고 있는지 판별하는 메서드는 무엇인가요?

/**
 * * 배열이 특정 요소를 포함하고 있는지 판별하는 메서드는 JavaScript의 includes() 메서드입니다.
 * * 역할: includes() 메서드는 배열이 특정 요소를 포함하고 있는지 여부를 판단하여 true 또는 false를 반환합니다.
 * * 사용 방법: includes() 메서드는 배열 객체에 대해 호출되며, 찾고자 하는 요소를 인수로 받습니다.
 */

const myArray = [1, 2, 3, 4, 5];
const includesArray = myArray.includes(3);
// true
console.log(includesArray);

const fruits = ['apple', 'banana', 'mango', 'peach', 'cherry']
const includesFruit = fruits.includes('tomato');
console.log(includesFruit);