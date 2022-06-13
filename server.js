//서버 사용을 위해 http 모듈을 http 변수에 담는다. 
let http = require('http');
// 요청한 rul을 객체로 만들기 위해 url 모듈 사용
let url = require('url');
// 요청한 url 중에 query string 을 객체로 만들기 위해 querystring 모듈 사용
let querystring = require('querystring');
//2.http 모듈로 서버를 생성 
let server = http.createServer(function(request,response){
    console.log('--- log start ---');
    //브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력 
    let parsedUrl = url.parse(request.url); 
    console.log(parsedUrl);
    // 객체화된 url 중에 query string 부분만 따로 객체화 후 출력
    let parsedquery = querystring.parse(parsedUrl.query,'&','=');
    console.log(parsedquery);
    console.log('--- log end ---');
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.end('hello node js'); 
});
//3. listen 함수로 8080 포트를 가진 서버를 실행. 
server.listen(8080,function(){
    console.log('Server is running');
});