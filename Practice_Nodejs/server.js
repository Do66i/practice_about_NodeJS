const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.listen(8080, () => {
  console.log('listening on 8080')
}); //.listen() <- 내 컴터에 서버오픈 삽가능
// 8080 port 에 웹서버 열고, 잘 열리면 console.log 출력 구다사이
//! 서버를 띄우기 위한 기본 셋팅(express 라이브러리)
/* xx경로로 들어오면 xx를 보내줌 -> GETreq!*/
//! .get('경로', (요청내용, 응답할방법) => {})
app.get('/pet', (req, res) => { // 함수 안에 함수 -> 콜백함수 (순차적으로 실행하고플 때 사용)
  res.send('펫쇼핑 삽가능 사이트');
});
app.get('/beauty', (req, res) => {
  res.send('뷰리용품 페이지다');
});
app.get('/', (req, res) => { // '/'하나만 쓰면 홈
  res.sendFile(__dirname + '/index.html');
});
app.get('/write', (req, res) => {
  res.sendFile(__dirname + '/write.html');
});
app.post('/add', (req, res) => { // req에 저장됨! 세상에 ( 근데 이거 쉽게 꺼내쓰려면 라이브러리 필요 => body-parser)
  res.send('전송완료');
  console.log(req.body)
  // DB에 저장해주쇼 ?
  
});
