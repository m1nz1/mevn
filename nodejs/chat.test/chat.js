 // 필요한 모듈을 가져옵니다.
 const express = require("express");  // Express 모듈
 const app = express();  // Express 애플리케이션 객체
 const http = require("http").createServer(app);  // HTTP 서버 생성
 const io = require("socket.io")(http);  // Socket.IO 서버 생성
 
 // 정적 파일을 제공하기 위해 Express에게 "static" 디렉토리를 사용하도록 지시합니다.
 app.use('/', express.static(_path));
 
 // 루트 URL("/")로 접속했을 때 "index.html" 파일을 클라이언트에게 전송하는 라우트 핸들러를 정의합니다.
 app.get("/", (req, res) => {
   res.sendFile(__dirname + "./index.html");
 });
 
 // 클라이언트와의 소켓 연결이 생성되었을 때 실행되는 이벤트 핸들러입니다.
 io.on("connection", (socket) => {
   console.log("a user connected");
   let users = [];  // 접속한 사용자들의 정보를 담는 배열
 
   // 클라이언트에서 'login' 이벤트를 수신하면 실행되는 콜백 함수입니다.
   // 수신된 데이터를 사용하여 사용자 객체를 생성하고 배열에 추가합니다.
   socket.on("login", (data) => {
     const user = { socketId: socket.id, ...data };
     users.push(user);
     // 'update' 이벤트를 발생시켜 모든 클라이언트에게 사용자가 접속했음을 알립니다.
     io.emit("update", { type: "connect", ...user });
   });
 
   // 클라이언트에서 'sendMessage' 이벤트를 수신하면 실행되는 콜백 함수입니다.
   // 메시지를 보낸 사용자를 찾고, 해당 메시지를 모든 클라이언트에게 전달합니다.
   socket.on("sendMessage", (message) => {
     const sender = users.find((user) => user.socketId === socket.id);
     io.emit("update", {
       type: "message",
       nickname: sender.nickname,
       displayName: sender.displayName,
       message,
     });
   });
 
   // 클라이언트와의 연결이 끊겼을 때 실행되는 콜백 함수입니다.
   // 연결이 끊긴 사용자를 찾고, 해당 사용자를 사용자 배열에서 제거합니다.
   socket.on("disconnect", () => {
     const disconnectedUser = users.find((user) => user.socketId === socket.id);
     if (disconnectedUser) {
       const nickname = disconnectedUser.nickname;
       const displayName = disconnectedUser.displayName;
       users = users.filter((user) => user.socketId !== socket.id);
       // 'update' 이벤트를 발생시켜 모든 클라이언트에게 사용자가 접속을 종료했음을 알립니다.
       io.emit("update", {
         type: "disconnect",
         nickname,
         displayName,
       });
     }
   });
 });
 
 // 서버를 특정 포트에서 실행합니다.
 const port = process.env.PORT || 3000;
 http.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
 });