#NPM

在[开发环境搭建](../start/devtools.md)章节我们已经安装好npm了。

npm的全称是 Node Package Manager（Node的包管理工具），NodeJS开发，无论前端还是后端都可以用NPM来管理包。

如果你了解maven，会发现npm和maven有类似之处，都是做包管理。npm也有“仓库”，叫做registry，我们用 `npm install xxx` 安装的xxx就是一个包，会自动从registry上下载。

如果团队开发，公司内也可以做自己的npm私服，可以用 [nexus](https://www.sonatype.com/nexus-repository-sonatype) 来做npm的私服。



## 用npm创建一个新项目

首先创建一个目录，进入目录后后，执行 `npm init`即可创建一个新项目。

```bash
mkdir newproject
cd newproject
npm init
```
运行 `npm init` 会询问一些项目的基本信息，回答完毕后，目录下会创建一个 package.json 的文件，这个文件保存了项目的信息，项目依赖的包等。

创建好项目后，我们可以通过 `npm install xxx `命令来给项目添加依赖的包。  npm install命令会从网上下载对应的包，并保存到 node_modules目录内。

npm install 可以增加 --save 或 --save-dev参数

| 参数 | 含义 |
|:---- |:---- |
| --save | 保存此包到 package.json ；项目代码中依赖此包，生成环境运行时需要，应该增加此参数 |
| --save-dev | 保存此包到 package.json，但不会在最终发布时包含此包，近进开发环境需要，例如一些代码格式检查、代码版本转换、打包工具等。 |

### npm install

仅仅运行 `npm install` 不带任何参数，则是根据package.json里的设置安装所有的模块。

## package-lock.json

运行npm install 后会发现目录下多了个 package-lock.json。

package.json里定义的版本号是一个范围，例如 ^4.0.0，表示4.0.0以上版本皆可，`npm install` 后会根据package.json中所有的依赖的版本，来决定某个依赖具体安装哪个版本，而确定好后就把版本写在了 package-lock.json内。

## 安装特定的版本

只要在包名称后增加 @版本号 就可以了， 还可以使用 @latest 来表示最新版

```bash
npm install xxx@3.2.0
npm install xxx@latest
```

## 删除某个包

```
npm uninstall xxx --save
```
