// ? Q5 배열의 일부를 얕은 복사본으로 추출하고 새로운 배열 객체로 반환하는 메서드는 무엇인가요?

/**
 * * 배열의 일부를 얕은 복사본으로 추출하고 새로운 배열 객체로 반환하는 메서드는 JavaScript의 slice() 메서드입니다.
 * * 역할: slice() 메서드는 배열의 일부를 얕은 복사본으로 추출하고, 새로운 배열 객체로 반환합니다. 이를 통해 원본 배열을 변경하지 않고 특정 범위의 요소를 가져올 수 있습니다.
 * * 사용 방법: slice() 메서드는 배열 객체에 대해 호출하며, 시작 인덱스와 종료 인덱스를 인수로 받아 추출 범위를 지정합니다.
 */

const myArray = [1, 2, 3, 4, 5]
const newMyArray = myArray.slice(1, 4)
// newMyArray는 [2, 3, 4]의 얕은 복사본이 되며, myArray는 변경되지 않습니다.
console.log(myArray);
console.log(newMyArray); 

const fruits = ['apple', 'banana', 'melon', 'peach', 'starfruit'];
const newFruits = fruits.slice(0, 3);
console.log(fruits);
console.log(newFruits); // ['apple', 'banana', 'melon']