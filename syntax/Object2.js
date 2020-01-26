var f = function(){
  console.log(1+1);
  console.log(1+2);
}

// 배열의 원소 - 함수
var a = [f];
a[0]();

// 객체의 멤버 - 함수
var o = {
  func:f
}
o.func();
