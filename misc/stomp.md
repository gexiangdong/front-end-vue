# websocket stomp



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

#### 建立连接和订阅消息

订阅消息的方法`stompClient.subscribe()`一定要连接成功后调用，在成功建立连接前调用会出错。因此最合适的位置是写在连接成功的回调函数里。

```javascript
var socket = new SockJS('http://localhost:8080/websocket')
//一般情况下stompClient需要定义称全局变量，后续还要使用它发送消息和关闭连接
var stompClient = StompJs.over(socket);
//connect有3个参数： 头信息、成功回调函数、失败回调函数
//这里直接定义了回调函数，建议把回调函数定义到methods:{}内，用this.funcitonName引用
stompClient.connect({'Authorization': 'Bearer ' + this.token}, function(){
	//连接成功
	console.log("connected.")
	//订阅消息；单独一个用户的url前有/user；发送给全部用户没有/user
	stompClient.subscribe("/user/topic/somemessage", function(message){
		//收到消息的回调函数; message.body是消息正文，字符串类型；如果服务器传递回来的是JSON格式，需要自行转换 var jsonBody = JSON.parse(message.body)
	})
}, function(){
	//连接失败的回调函数；
	//连接成功后，由于网络或其他原因断开，也会调用此回调函数
	//如果需要，可以在这里写上连接断开后，过一段时间自动重新连接的方法
	console.log("连接websocket失败.")
})
```

#### 发送消息

```
//发送消息有3个参数： 1、消息发送到的地址url；2、消息头信息，JSON格式； 3、消息正文，字符串，如果是json格式，需要自行转换
stompClient.send(destination, {}, body);
```

stompjs详细用法参考 http://jmesnil.net/stomp-websocket/doc/
