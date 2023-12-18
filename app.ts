function addTs(a:number, b:number) {
  if(typeof(a) === "number" && typeof(b) === "number") {
    return a + b;
  }
}

console.log(addTs(1,2)); //3, 정상 출력됨
console.log(addTs("a", "b")); // undefinde 리턴 오류 발생
// 에디터에서도, 콘솔 출력에서도 어디가 에러가 발생하는 원인인지 알려줌
// ts-node 로 실행하여 값을 받으면 위와 같이 에러가 발생하는 부분이 어디인지를 '정확하게 어디 지점'이라는 것을 확연하게 알려줌