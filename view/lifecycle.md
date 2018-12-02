# 生命周期


![View的生命周期钩子](../images/view-lifecycle.png)

在每个view的生命周期中有几个钩子，我们可以在相应的时机进行些程序处理。

* beforeCreate
* created 一般我们在这里做些数据的初始化
* beforeMount
* mounted  -- 如果需要获得界面上某个元素的实际占用的宽高(offsetWidth, offsetHeight)等，在这个事件里可以获得
* beforeUpdate
* updated  -- 界面发生变化后
* beforeDestroy 如果view内定义了些离开需要销毁的变量，可在这里处理。例如仅本view使用的websocket连接，可以在这里关闭
* destroyed

