function addJs(a, b) {
  if(typeof(a) === "number" && typeof(b) === "number") {
    return a + b;
  }
}

console.log(addJs(1,2)); //3, 정상 출력됨
console.log(addJs("a", "b")); // undefinde 리턴 오류 발생