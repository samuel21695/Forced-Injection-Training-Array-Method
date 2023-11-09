// ? Q17 배열의 각 요소에 대해 주어진 함수를 실행하는 메서드는 무엇인가요?

/**
 * * 배열의 각 요소에 대해 주어진 함수를 실행하는 메서드는 JavaScript의 forEach() 메서드입니다.
 * * 역할: forEach() 메서드는 배열의 각 요소에 대해 주어진 함수를 한 번씩 실행합니다. 이 메서드는 반환값이 없으며, 주로 배열의 각 요소를 반복하며 특정 동작을 수행할 때 사용됩니다.
 * * 사용 방법: forEach() 메서드는 배열 객체에 대해 호출되며, 각 요소에 대한 실행 함수를 인수로 받습니다.
 */

const myArray = [1, 2, 3, 4, 5];
myArray.forEach( element => {
  console.log(element); // 각 요소를 출력
})
// 1
// 2
// 3
// 4
// 5

const fruits = ['apple', 'banana', 'mango', 'pineapple', 'cherry']
fruits.forEach( element => {
  console.log(element);
})