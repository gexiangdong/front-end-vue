# 使用vuex


在中大型web应用中，存储较多的全局数据，用prototype方式管理就会容易混乱，这个的时候，一般都用 vuex 来管理。

vuex提供了一个store，数据都存储在store内，store内有state和mutation两个概念。

通过state可以访问数据，但不能直接改变它，要改变数据必须向store commit mutation。（mutation是我们自定义的改变方法/函数）

再大型项目中，可以对数据进行归类，划分不同的Model，存储在store内。


[vuex官方文档](https://vuex.vuejs.org/zh/guide/)

