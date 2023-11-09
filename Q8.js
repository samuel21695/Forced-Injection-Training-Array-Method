// ? Q8 배열의 모든 요소를 연결해 하나의 문자열로 만드는 메서드는 무엇인가요?

/**
 * * 배열의 모든 요소를 연결해 하나의 문자열로 만드는 메서드는 JavaScript의 join()메서드 입니다.
 * * 사용 방법: join() 메서드는 배열 객체에 대해 호출되며, 구분자를 인수로 받아 해당 구분자로 배열의 모든 요소를 연결한 문자열을 반환합니다. 만약 구분자를 지정하지않으면 기본값으로 쉼표(,)가 사용됩니다.
 */

const myArray = ['apple', 'banana', 'cherry'];
const newArray = myArray.join(', ')
// "apple, banana, cherry"
console.log(newArray);