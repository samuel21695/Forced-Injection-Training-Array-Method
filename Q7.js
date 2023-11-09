// ? Q7 두 개 이상의 배열을 결합하여 새 배열을 만드는 메서드는 무엇인가요?

/**
 * * 두 개 이상의 배열으 결합하여 새 배열을 만드는 메서드는 JavaScript의 concat() 메서드입니다.
 * * 역할: concat() 메서드는 하나 이상의 배열을 결합하여 새로운 배열을 생성합니다. 이 때 기존 배열은 변경되지 않습니다.
 * * 사용 방법: concat() 메서드는 배열 객체에 대해 호출되며, 하나 이상의 배열을 인수로 받아 이들을 결합한 새 배열을 반환합니다.
 */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
// [1, 2, 3, 4, 5, 6]

const fruits = ['apple', 'banana', 'peach'];
const veg = ['brocolli', 'tomato', 'carrot'];
const foods = fruits.concat(veg);
console.log(foods);