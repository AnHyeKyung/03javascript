// 객체 생성
const userA = {
  name: "안혜경",
  age: 30,
  address: {
    city: "서울",
    detail: "영등포구 양평동",
    postNumber: 77777,
  },
};

const userB = {
  name: "에론",
  age: 26,
  address: {
    city: "서울",
    detail: "용산 이태원",
  },
};

// 객체접근
console.log(userB.address.postNumber);
// 선택적 체이닝
console.log(userB.address?.postNumber || "우편번호가 없습니다.");

// 구조분해 할당
const { name, age, address } = userA;
const { city, detail, postNumber } = address;
console.log(address);
