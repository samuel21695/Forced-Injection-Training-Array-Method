// ? Q16 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새 배열로 반환하는 메서드는 무엇인가요?

/**
 * * 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새 배열로 반환하는 메서드는 JavaScript의 map() 메서드입니다.
 * * 역할: map() 메서드는 배열의 각 요소에 대해 주어진 함수를 호출하고, 각 요소에 대한 함수의 반환값을 모아서 새로운 배열을 반환합니다.
 * * 사용 방법: map() 메서드는 배열 객체에 대해 호출되며, 각 요소에 대한 변환 함수를 인수로 받습니다.
 */

const myArray = [10, 20, 30, 40, 50];
const arrayMap = myArray.map( element => element * 2)
// [10, 20, 30, 40, 50] (각 요소에 2를 곱한 결과)
console.log(arrayMap);

const squaredAndDoubled = myArray.map ( element => [element * element, element * 2]);
console.log(squaredAndDoubled);