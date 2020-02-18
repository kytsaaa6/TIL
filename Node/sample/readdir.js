var testFolder = './data';
var fs = require('fs');

// readdir : 특정 director의 파일들을 읽어서 배열로 나타냄
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
