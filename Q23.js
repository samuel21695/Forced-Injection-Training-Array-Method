// ? Q23 먼저 주어진 함수를 각 요소에 매핑한 다음 결과를 새 배열로 평탄화하는 메서드는 무엇인가요?

/**
 * * 먼저 주어진 함수를 각 요소에 매핑한 다음 결과를 새 배열로 평탄화하는 메서드는 JavaScript의 flatMap() 메서드입니다.
 * * 역할: flatMap() 메서드는 배열의 각 요소에 대해 주어진 함수를 호출하고, 각 함수 호츨의 결과를 하나의 평탄화된 배열로 반환합니다.
 * * 사용 방법: flatMap() 메서드는 배열 객체에 대해 호출되며, 각 요소에 대한 매핑 함수를 인수로 받습니다.
 */

const myArray = [1, 2, 3, 4, 5];
const squaredAndDoubled = myArray.flatMap(element => [element * element, element * 2]);
// [1, 2, 4, 4, 9, 6, 16, 8, 25, 10]
console.log(squaredAndDoubled);

// map과의 차이점 비교
const mapSquaredAndDoubled = myArray.map ( element => [element * element, element * 2]);
console.log(mapSquaredAndDoubled);
// [ [ 1, 2 ], [ 4, 4 ], [ 9, 6 ], [ 16, 8 ], [ 25, 10 ] ]

// 평탄화되지 않은 배열 평탄화
const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8]];

const flattenedArray = nestedArray.flatMap (element => element);
console.log(flattenedArray);