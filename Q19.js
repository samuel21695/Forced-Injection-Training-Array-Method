// ? 19. 배열의 모든 요소가 주어진 테스트 함수를 통과하는지 테스트하는 메서드는 무엇인가요?

/**
 * * 배열의 모든 요소가 주어진 테스트 함수를 통과하는지 테스트하는 메서드는 JavaScript의 every() 메서드입니다.
 * * 역할: every() 메서드는 배열의 각 요소에 대해 주어진 테스트 함수를 호출하고, 모든 요소가 테스트를 통과하면 true를 반환합니다. 하나라도 테스트를 통과하지 않으면 false를 반환합니다.
 * * 사용 방법: every() 메서드는 배열 객체에 대해 호출되며, 테스트 함수를 인수로 받습니다.
 */

const myArray = [10, 20, 30, 40, 50]
const hasEvenNumber = myArray.every( element => element % 2 === 0);
console.log(hasEvenNumber);
// true (모든 요소가 짝수임)

const filterEvenNumber = myArray.filter( element => element % 2 === 0);
console.log(filterEvenNumber);

const mapEvenNumber = myArray.map( element => element % 2);
console.log(mapEvenNumber);