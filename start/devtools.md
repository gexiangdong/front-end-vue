# 开发环境的搭建


## 安装nodejs和npm
### MAC
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
### ubuntu
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

下载nodejs并安装: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

安装完后到命令行(Windows PowerShell)下查看是否正确安装

```
node -v
npm -v
```

## 安装VUE 3
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


## 使用国内镜像服务器

npm使用过程中，需要下载一些第三方包、插件等，这些服务器在国外，访问起来有时速度很慢，可以使用淘宝镜像。

在自己的home目录下创建一个 .npmrc 文件（注意以"."开始），内容如下：

```
sass_binary_site = https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl = https://npm.taobao.org/mirrors/phantomjs/
registry = https://registry.npm.taobao.org
```
如果是团队开发，也可搭建自己的私有镜像服务器，可使用nexus搭建。nexus可以做maven私服、npm私服，前后端都囊括了。

## 开发环境和生产运行环境

前面要安装nodejs, npm, vue等等都是开发环境。最终的生产环境不需要这些。生产环境只需要一个webserver，例如：NGINX，Apache都可以，不需要其它的了。 把开发环境编译出来的html、js、css拷贝上web服务器的web目录下就可以了（为了性能最好优化下配置）。

