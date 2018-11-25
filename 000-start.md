开始一个UVE项目
-----

#安装环境
##安装nodejs和npm
###MAC
MAC下安装vue开发环境，首先需要安装node和npm。
可借助brew命令安装。

```bash
brew install node
```
这个命令会同时把node和npm都安装好，如果已经安装过，但不是最新版，需要升级，可以使用命令

```bash
brew upgrade node
```
查看npm/node版本可以通过
```
npm -v
node -v
```
###ubuntu
ubuntun上需要用apt命令安装，一般ubuntu上会带有不是最新版的node，需要先卸载掉。

```bash
sudo apt-get remove nodejs ^node-* nodejs-*
sudo apt-get autoremove
sudo apt-get clean
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install nodejs
```
升级好nodejs后，用npm命令来升级npm自身
```bash
npm install npm@latest -g
``` 

###windows
TODO:

##安装VUE 3
安装好npm后，需要安装vue-cli，我们这里使用的是VUE 3，如果之前已经安装了VUE 2.x或1.x，可以先卸载掉，用如下命令卸载：

```bash
npm uninstall vue/cli -g
```
安装VUE 3可以用如下命令（VUE 3和之前的版本包名称不同）：

```bash
npm install @vue/cli -g
```

安装完毕后，用如下命令查看下vue版本是否正确

```bash
vue -V
```
注意和node/npm查看版本的参数有区别，这里是大写的V。

#创建工程
到这里，你的开发环境应该已经安装好node、npm和vue3了，下面我们来开始创建一个工程。

首先在命令行下面进入到你希望工程所在的目录（不用手工创建工程目录，下面的命令会自动创建）。之后执行命令：

```bash
vue create 'project-name'
```
之后会出现2个选项，是使用默认的，还是手工选择功能，我们来看看Manually select features里有哪些功能：

TODO

- [x] Babel
- [ ] TypeScript
- [ ] Router
- [ ] Vuex
- [ ] Css Pre-processors
- [x] Linter / Formatter


* Babel  -------  ES6转换工具，可以把ES6转换成ES5格式，以便兼容老旧的浏览器
* TypeScript 
* Progressive Web App (PWA) Support --- Google的web
* Router  ------ VUE的页面路由管理器插件，大点的项目一般都需要
* Vuex  ---- 可用来
* CSS Pre-processors ---- CSS的预编辑处理语言，如果不喜欢直接写CSS，而是喜欢下面这几种方式，那么可以选择它，如果你对这行不了解，建议你不要选中它。
  * Sass/SCSS
  * Less
  * Stylus
* Linter / Formatter
  * ESlint with error prevention only
  * ESLint + Airbnd config
  * ESLint + Standard config
  * ESLint + Prettier
* Unit Testing
* E2E Testing

vue create命令完成后，会创建好工程，工程名就是新建的子目录名称。
进入子目录后，可以用

```bash
npm run serve
```
来启动开发环境，会在8080端口运行一个web服务器，用浏览器（强烈建议用chrome）打开这个网址

```
http://localhost:8080
```
就可以看到新创建的项目了。

## 已存在的工程
如果项目是已经创建好的（从git中获取的其他团队成员创建、从网上下载等等），进入到工程目录后，首先运行：

```bash
npm install
``
安装好依赖的node的模块，之后同样运行

```bash
npm run serve
```
就可以了。如果出错，并且在其他人那里不出错，一般是安装某个包的时候没有修改package.json，可自己安装一下需要的包，并用--save参数保存到package.json中，这样以便以后不需要再解决类似问题。

```bash
npm install 'package-name' --save
```
