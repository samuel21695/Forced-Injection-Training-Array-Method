// ? Q9 배열의 순서를 반전시키는 메서드는 무엇인가요?

/**
 * * 배열의 순서를 반전시키는 메서드는 JavaScript의 reverse() 메서드입니다.
 * * 역할: reverse() 메서드는 배열의 순서를 반대로 뒤집어 놓습니다. 즉 배열의 첫 번째 요소가 마지막 요소로, 두 번쨰 요소가 뒤에서 두 번째 요소로 이동됩니다.
 * * 사용 방법: reverse() 메서드는 배열 객체에 대해 호출되며, 아무 인수도 필요하지 않습니다.
 */ 

const myArray = [1, 2, 3, 4, 5];
myArray.reverse();
console.log(myArray);
// [5, 4, 3, 2, 1]

const fruits = ['apple', 'banana', 'peach', 'mango', 'orange'];
fruits.reverse();
console.log(fruits);