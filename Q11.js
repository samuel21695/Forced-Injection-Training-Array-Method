// ? Q11 배열에서 지정된 요소를 찾고, 그 인덱스를 반환하는 메서드는 무엇인가요?

/**
 * * 배열에서 지정된 요소를 찾고 그 인덱스를 반환하는 메서드는 JavaScript의 indexOf() 메서드입니다.
 * * 역할: indexOf() 메서드는 배열에서 지정된 요소를 검색하고, 해당 요소가 발견되면 그 요소의 첫 번째 인덱스를 반환합니다. 요소가 배열 안에 없으면 -1을 반환합ㄴ디ㅏ.
 * * 사용 방법: indexOf() 메서드는 배열 객체에 대해 호출되며, 검색하려는 요소를 인수로 받습니다.
 */

const myIndex = [10, 20, 30, 40, 50]
const index = myIndex.indexOf(30);
console.log(index);
// 2

const fruits = ['apple', 'banana', 'orange'];
const indexF = fruits.indexOf('banana');
console.log(indexF)