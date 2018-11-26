# 生命周期
----

![View的生命周期钩子](../images/view-lifecycle.png)

在每个view的生命周期中有几个钩子，我们可以在相应的时机进行些程序处理。

* beforeCreate
* created 一般我们在这里做些数据的初始化
* beforeMount
* mounted
* beforeUpdate
* updated
* beforeDestroy 如果view内定义了些离开需要销毁的变量，可在这里处理。例如仅本view使用的websocket连接，可以在这里关闭
* destroyed

