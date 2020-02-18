/*
//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
// A -> B -> C
*/

// readFileSync 동기 : 처리 순서가 순차적
// readFile 비동기 : 순서와 상관없이 다음 작업 처리
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
// A  ->  C -> B


// tip
/*
async await, Promise 방법이 있습니다.
짧은 견해로 답변 드려요. 자세한 사항은 아래 링크를 참고해주세요 :)
- async function
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
- Promise
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
- [번역] async/await 를 사용하기 전에 promise를 이해하기
https://medium.com/@kiwanjung/%EB%B2%88%EC%97%AD-async-await-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-%EC%A0%84%EC%97%90-promise%EB%A5%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-955dbac2c4a4
- [Async, 비동기와 동기] Promise에서 Await까지
https://velog.io/@rohkorea86/Promiseis-%EB%B9%84%EB%8F%99%EA%B8%B0%EB%8F%99%EA%B8%B0%EC%97%90%EC%84%9C-Promise%EA%B9%8C%EC%A7%80
*/


// ex
/*
인터넷 사용환경에서 예를 들어드리자면,
유튜브 영상이나 웹페이지가 로딩되는동안 로딩표시가 되는걸 보신적이 있으시죠?
만약 이걸 동기방식으로 프로그래밍 했으면 어떻게 될까요?

<예상했던 결과>
버튼클릭 -> 로딩 시작 및 로딩 이미지 표시 -> 로딩이 완료되면 로딩 이미지가 사라지고 로딩된 결과 표시
<동기방식으로 프로그래밍시 나타날 수 있는 잘못된 결과>
1. 버튼클릭 -> '로딩중' 이미지 표시 -> '로딩중' 이미지가 사라지고 로딩 하는동안 아무런 변화가 없음 -> 로딩된 결과가 보여짐
2. 버튼클릭 -> 로딩 하는동안 아무런 변화가 없음 -> 로딩된 결과가 보여짐 -> 로딩된 결과 위에 '로딩중' 이미지가 표시 되거나 이미 결과가 로딩되었기 때문에 '로딩중' 이미지 표시되지 않음

위의 예시를 보시면 비동기 방식의 필요성이 이해가 되실까요? (초보인 제 실력에서 생각해본 극단적인 설명입니다.)

P.S: Node.js는 단일 쓰레드 방식이므로 멀티쓰레드 개념과는 차이가 있음을 유의하셔야합니다.
*/
