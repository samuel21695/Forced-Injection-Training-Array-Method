// ? 테스트 함수를 통과하는 모든 요소를 모아 새 배열로 반환하는 메서드는 무엇인가요?

/**
 * * 테스트 함수를 통과하는 모든 요소를 모아 새 배열로 반환하는 메서드는 JavaScript의 filter() 메서드입니다.
 * * 역할: filter() 메서드는 배열의 각 요소에 대해 주어진 테스트 함수를 호출하고, 테스트 함수가 참을 반환하는 모든 요소를 포함하는 새로운 배열을 반환합니다.
 * * 사용 방법: filter() 메서드는 배열 객체에 대해 호출되며, 테스트 함수를 인수로 받습니다.
 */

const MyArray = [10, 20, 30, 40, 50];
const arrayFilter = MyArray.filter( element => element > 20)
// [30, 40, 50] (35보다 큰 요소)
console.log(arrayFilter);

const fruits = [ 'apple', 'banana', 'pear', 'cherry', 'b', '3', 'awegwefefed', 'c'];
const foundFruit = fruits.filter( element => element > 'banana');
console.log(foundFruit)