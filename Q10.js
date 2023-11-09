// ? Q10 배열의 요소를 적절한 위치에 정렬하는 메서드는 무엇인가요?
/**
 * * 배열의 요소를 적절한 위치에 정렬하는 메서드는 JavaScript의 sort() 메서드입니다.
 * * 역할: sort() 메서드는 배열의 요소를 알파벳 순서 또는 숫자 순서로 정렬합니다. 정렬은 기본적으로 배열의 요소를 문자열로 변환한 후 비교합니다. 정렬된 배열은 원본 배열을 변경시킵니다.
 * * 사용방법: sort() 메서드는 배열 객체에 대해 호출되며, 어떤 인자도 필요로 하지 않습니다.
 */

const myArray = [6, 4, 7, 9, 1];
myArray.sort();
console.log(myArray);
// [1, 4, 6, 7, 9]

const fruits = ['mango', 'orange', 'banana', 'pear', 'apple']
fruits.sort();
console.log(fruits);