//**변수데이터
// let a = "사과";
// let b = 100;

// **string
// let name = "안혜경";
// //let address = '서울';
// let email = `ahk0816@gmail.com`;

// let nameData = "이름" + name + "이메일" + email;
// console.log(nameData);

// let nameData = `이름 ${name} 입니다. 안녕하세요`;
// console.log(nameData);

// **number
let age = 43;
let birth = 1981;
let sum = age + birth;
//console.log(typeof String(age));

// **boolean
let isShow = true;
let isHide = false;
//console.log(typeof isShow);
if (age === 40) {
  console.log("40세 입니다.");
} else {
  //  console.log("40세가 아닙니다.");
}

// undefined
let undef;
//console.log(undef);
let obj = {
  name: "안혜경",
};
//console.log(obj.nickname);

// null
let empty = null;
//console.log(empty);
// setTimeout(() => {
//   let empty = 10;
//   console.log(empty);
// }, 1000);
empty = 10;
//console.log(empty);

// object 객체
let user = {
  //key:value;
  name: "안혜경",
  birth: 1993,
  address: "서울",
};
//console.log(user.address);
const div = document.querySelector("div");
div.innerHTML = `생일이 ${user.birth}이신 ${user.name}님 안녕하세요.`;

// array 배열
let hobby = ["photo", "piano", "swim", 777, true];
//console.log(hobby[0]);
//console.log(hobby.length);

// function 함수
//함수명(); 함수실행
//함수정의
function result() {
  //함수식
  console.log("함수 실행");
}
result();
result();
result();
