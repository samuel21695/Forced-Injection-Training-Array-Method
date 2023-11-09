// ? Q12 배열에서 지정된 요소를 뒤에서부터 찾고, 그 인덱스를 반환하는 메서드는 무엇인가요?

/**
 * * 배열에서 지정된 요소를 뒤에서부터 찾고, 그 요소의 인덱스를 반환하는 메서드는 JavaScript의 lastIndexOf() 메서드입니다.
 * * 역할: lastIndexOf() 메서드는 배열에서 지정된 요소를 뒤에서부터 검색하고, 해당 요소가 발견되면 그 요소의 마지막 인덱스를 반환합니다. 요소가 배열 안에 없으면 -1을 반환합니다.
 * * 사용 방법: lastIndexOf() 메서드는 배열 객체에 대해 호출되며, 검색하려는 요소를 인수로 받습니다.
 * */

const myArray = [10, 20, 30, 20, 40];
const lastIndex = myArray.lastIndexOf(20);
console.log(lastIndex);
// 3

const fruits = ['apple', 'mango', 'pineapple', 'orange', 'apple']
const lastIndexF = fruits.lastIndexOf('apple')
console.log(lastIndexF);