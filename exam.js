const studentList = [
  "김우진",
  "김현",
  "방승희",
  "변호녕",
  "소사무엘",
  "송영준",
  "신동현",
  "오승민",
  "유승민",
  "윤준현",
  "이민구",
  "이유안",
  "이은정",
  "정영식",
  "최성민",
  "최은철",
  "홍문기"
];

const pokemonList = [ "피카츄", "라이츄", "파이리", "꼬부기"];


// ? 문항 1. 전체 명단을 문자열로 출력하여, 모든 학생의 이름이 쉼표로 구분되도록 하려고 합니다. 이를 구현하는 코드를 작성하세요.

const allStudent = studentList.join(", ")
console.log(allStudent);

// ? 문항 2. 명단에서 마지막 학생이 전학을 갔습니다. 이 학생을 명단에서 제거하고, 그 학생의 이름을 출력하는 코드를 작성하세요.

const deleteLastStudent = studentList.pop()
console.log(deleteLastStudent)

// ? 문항 3. 명단 중 세 번째 학생이 전학을 갔고, 새 학생이 그 자리에 왔습니다. 기존 학생을 제거하고 새 학생을 추가하는 코드를 작성하세요.

studentList.splice(2, 1, "김철수")
console.log(studentList);

// ? 문항 4. 명단의 순서를 역순으로 바꾸고자 합니다. 이를 위한 코드를 작성하세요.

studentList.reverse();
console.log(studentList);

// ? 문항 5. 임의의 학생(본인이름) 명단에서 몇 번째에 있는지 찾아서 그 위치를 출력하는 코드를 작성하세요.

const index = studentList.indexOf("소사무엘")
console.log(index);

// ?! 문항 6. 명단에 같은 이름(성씨제외)을 가진 학생이 두 명 있습니다. 이 중 마지막에 있는 학생의 위치를 찾아 출력하는 코드를 작성하세요.

const lastIndex = studentList.includes("이")
console.log(lastIndex)

// // ?! 문항 7. 명단에서 성씨가 ‘김’씨인 학생의 이름을 찾아 출력하는 코드를 작성하세요.

// const kimStudentList = studentList.filter(name => name.startsWith("김"));
// console.log(kimStudentList);

// // ? 문항 8. 기초데이터(studentList, pokemonList) 두 개의 명단을 합쳐 전체 학생 명단을 만들려고 합니다. 두 명단을 결합하는 코드를 작성하세요.

// const combinedList = studentList.concat(pokemonList);
// console.log(combinedList);

// // ? 문항 9. 모든 학생의 이름 앞에 '학생_'을 붙여 새로운 형식으로 명단을 만드는 코드를 작성하세요.

// const nicknameStudent = studentList.map(student => '학생_' + student);
// console.log(nicknameStudent);

// // ? 문항 10. 명단에 있는 모든 학생들의 이름을 하나의 문자열로 연결하여 출력하는 코드를 작성하세요.

// const integrateStudent = studentList.reduce((accumlator, value) => accumlator + value)
// console.log(integrateStudent);

// // ? 문항 11. 모든 학생들의 이름이 세 글자인지 확인하는 코드를 작성하세요.
// const lengthStudentName = studentList.every((string) => string.length === 2 );
// console.log(lengthStudentName);

// // ? 문항 12.명단에서 마지막 학생이 전학을 갔습니다. 이 학생을 명단에서 제거하고, 그 학생의 이름을 출력하는 코드를 작성하세요.


// // ? 문항 13. 명단 중에서 두 번째부터 네 번째 학생까지만 따로 명단을 만들려고 합니다. 이 부분 명단을 복사하여 새로운 배열을 만드는 코드를 작성하세요.
// const sliceStudentList = studentList.slice(1, 4);
// console.log(sliceStudentList);


// // ? 문항 14. 명단에서 이름에 '승'을 포함하는 모든 학생들의 이름을 찾아 새로운 명단을 만드는 코드를 작성하세요.
// const seungStudentList = studentList.filter( name => name.includes("승"))
// console.log(seungStudentList);

// // ? 문항 15. 명단에 '홍'으로 시작하는 학생이 한 명이라도 있는지 확인하는 코드를 작성하세요.
// const hongStudentList = studentList.some(name => name.startsWith("홍"));
// console.log(hongStudentList);
