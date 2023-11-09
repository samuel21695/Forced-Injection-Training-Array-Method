// ? Q6 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경하는 메서드는 무엇인가요?

/**
 * * 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경하는 메서드는 JavaScript의 splice 메서드입니다.
 * * 역할: splice() 메서드는 배열의 내용을 변경하는 다양한 작업을 수행합니다. 이를 통해 배열 요소를 삭제, 교체 또는 새 요소를 추가할 수 있습니다.
 * * 사용 방법: splice()메서드는 배열 객체에 대해 호출하며, 시작 인덱스, 삭제할 요소의 개수 및 필요한 경우 새로운 요소를 추가하는 데 사용되는 인수를 받습니다.
 */

const myArray = [1, 2, 3, 4, 5];
// 인덱스 2부터 시작해 2개의 요소를 삭제하고, 그 자리에 50, 100를 추가합니다.
myArray.splice (2, 2, 50, 100)
// myArray = [1, 2, 50, 100, 5]
console.log(myArray);

const fruits = ['apple', 'banana', 'mango', 'peach', 'pear'];
fruits.splice(0, 2, 'durian', 'starfruit')
console.log(fruits);