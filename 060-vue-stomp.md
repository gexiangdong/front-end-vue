使用stomp
----

使用websocket


## 安装模块
```bash
npm install stompjs --save
npm install sockjs-client --save
```

## 使用

###先import
```javascript
import StompJs from "stompjs";
import SockJS from  'sockjs-client'
```

### 调用
```javascript
socket = new SockJS('http://localhost:8080/websocket')
stompClient = StompJs.over(socket);
//connect有3个参数： 头信息、成功回调函数、失败回调函数
stompClient.connect({'Authorization': 'Bearer ' + this.token}, function(){
	//连接成功
	console.log("connected.")
	//订阅消息；单独一个用户的url前有/user；发送给全部用户没有/user
	stompClient.subscribe("/user/topic/somemessage", function(message){
		//收到消息的回调函数
	})
}, function(){
	//出错啦
	console.log("连接websocket失败.")
})
```

stompjs详细用法参考 http://jmesnil.net/stomp-websocket/doc/