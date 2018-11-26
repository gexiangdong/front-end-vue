# MVVM
----


MVVM (Model-View-ViewModel)是由微软架构师提出的概念，并与2005首次发表。在MVVM中，View和Model的同步逻辑会交由框架自动处理，不再需要手工编写代码。除用ViewModel取代了Presenter外，其它和MVP基本相同。View和ViewModel之间采用双向数据绑定，model中数据变化了，会自动在view中呈现，反之亦然。

![MVVM](../images/mvvm.png)

VUE里就是用的MVVM这种方式，在一个扩展名是.vue的视图内，template部分是MVVM中的第一个V(View)，script部分中的data()则对应MVVM中的M(Model)，其余部分的script则对应VM(ViewModel)。如果要给style分布也归类，可放到View部分。

