// ? Q24 지정된 깊이까지 재귀적으로 평탄화하여 새 배열을 생성하는 메서드는 무엇인가요?

/** 
 * * 지정된 깊이까지 재귀적으로 평탄화하여 새 배열을 생성하는 메서드는 JavaScript의 flat() 메서드입니다.
 * * 역할: flat() 메서드는 배열을 재귀적으로 평탄화하여 새 배열을 생성합니다. 인수로는 평탄화할 배열의 깊이를 지정할 수 있습니다.
 * * 사용 방법: flat() 메서드는 배열 객체에 대해 호츨되며, 깊이를 나타내는 정수를 인수로 받습니다.
 */

const nestedArray = [1, [2, [3, [4]]]];
const flattenedArray = nestedArray.flat(2);
// [1, 2, 3, [4]];
console.log(flattenedArray);

const nestedFruits = ['apple', ['banana', 'mango', ['cherry', ['pineapple', ['pear']]]]];
const flattenedFruits = nestedFruits.flat(3);
console.log(flattenedFruits);