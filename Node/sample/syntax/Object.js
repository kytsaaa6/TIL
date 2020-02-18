// Array - 순서에 따라 데이터 정렬
var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]); // k8805
// 배열의 반복
while(i < members.length){
  console.log('array loop', members[i]);
  i = i + 1;
}

// Object - 순서가 없는 데이터를 저장
var roles = {
  'programmer':'egoing',
  'designer' : 'k8805',
  'manager' : 'hoya'
}
console.log(roles.designer); //k8805
console.log(roles['designer']); //k8805
// 객체의 반복
for(var n in roles){
  console.log('object => ', n, 'value => ', roles[n]);
}
