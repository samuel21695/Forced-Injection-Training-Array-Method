// ? reduce() 와 같지만 배열의 끝에서부터 함수를 적용하는 메서드는 무엇인가요?

/**
 * * reduce()와 비슷하지만 배열의 끝에서부터 함수를 적용하는 메서드는 JavaScript의 reduceRight() 메서드입니다.
 * * 역할: reduceRight() 메서드는 reduce()와 유사하지만, 배열의 끝에서부터 시작하여 주어진 리듀서 함수를 실행하고, 각 단계에서 이전 결과값과 현재 요소를 사용하여 최종 결과값을 계산합니다.
 * * 사용 방법: reduceRight() 메서드는 배열 객체에 대해 호출되며, 리듀서 함수와 초기값(initial value)을 인수로 받습니다.
 */

const myArray = [1, 2, 3, 4, 5];
const sumFromRight = myArray.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
// sumFromRight은 15를 반환합니다. (배열의 끝에서부터 모든 요소를 더한 결과)
console.log(sumFromRight);
