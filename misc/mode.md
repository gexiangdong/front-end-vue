# 使用Mode对开发环境与生产环境的不同配置


在开发环境中会有些变量需要设置成和生产环境不同，例如后台接口的地址，某些图片等资源文件的网址前缀等。VUE把这种不同的环境叫做 Mode，它默认有3个Mode： development, production, test。分别对应开发环境、生产环境和测试环境。我们用`npm run serve`运行起来的环境就是mode=development；用`npm run build`编译出来的html/js/css被访问时mode=production。

了解后端开发Spring框架的会发现VUE的Mode和Spring的Profile有些类似。

在程序中，我们可以通过`process.env.NODE_ENV`来获得当前的运行环境。可以根据不同的环境执行不同的代码（这会给测试带来麻烦，如非必需，建议不要这么做）。如果仅仅是需要不同环境配置不同的变量，可以通过环境变量文件来实现。

可以在项目根目录下根据需要创建如下文件。

* .env       任何mode下都可使用
* .env.local  不进入git的本地版
* .env.[mode]  例如 .env.development  特定模式下才应用
* .env.[mode].local  特定模式下应用，且不进入git

以上4种文件会全部被加载（不符合特定模式除外），其中内容相同的以从上至下优先级越来越高。

内容为KEY=value 的格式，例如：

```
FOO=bar
VUE_APP_SECRET=secret
```
其中以VUE_APP_开头的变量会被导入到process.env中，在程序中可以访问，上述配置中 `process.evn.VUE_APP_SECRET` 可以获得到配置的VUE_APP_SECRET的值。


