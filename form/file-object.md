# 使用File Object


这节内容和VUE无关，是纯HTML/Javascript的内容，讲解如何在分离的前端中处理文件上传的需求。 

在前后端尚未分离的时代，文件上传是通过提交FORM，form带有`content-type=multipart/form-data`, 并且有`<input type="file" >`这样的元素来处理的。提交后页面被重定向到了一个新页面，这不符合单页面应用的处理方式，不是我们需要的。有种变通办法是，页面里增加一个隐藏的iframe，把form的target设置成这个iframe，用户看不到，但这不优雅，也不是我们期望的。

现在的浏览器都支持File Object（IE需要10以上），这个解决起来就优雅了，而且可以在用户选取文件后，获得文件的大小(size)、内容，显示上传进度等等。

## 使用input type="file"获取File Object

下面这个例子是使用 type="file" 的输入框获取File Object的例子，选择文件后，javascript会得到文件名, 文件大小和文件类型，并在界面上显示出来。

```vue
<template>
  <div>
    <div>
      <input type="file" multiple v-on:change="handleFiles" />
    </div>
    <div v-if="fileList != null">
      <h3>选择的文件</h3>
      <ul>
        <li v-for="file in fileList">
          {{file.name}}  ({{file.size + 'bytes'}})  {{file.type}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileObject',
  data() {
    return {
      fileList: null
    }
  },
  methods:{
    handleFiles: function(event){
      console.log(event)
      this.fileList = event.target.files
    }
  }
}
</script>
```

input的multiple参数声明可以一次选择多个文件，如果不写此参数则只能选择一个文件，还可以增加类似`accept="image/*"`这样的参数来限定只能选择图片。

如果需要图片预览，可以使用FileReader对象，把file读取成DataURL。 `FileReader.readAsDataURL` 然后赋值给image标签的src属性。

input的美化和图片的预览在[本书附带的例子项目](../sample-project)里有简单的示例。

## 使用拖拽

使用拖拽处理文件上传，是要在页面上接收ondrop事件。

下面是把之前的例子文件上传的input处的改造：

```vue
  <div class="fileinputer" v-bind:class="showAcceptFileStyle ? 'accept-files' : ''"
      v-on:dragenter.stop.prevent="showAcceptFile"  v-on:dragover.stop.prevent  
      v-on:dragleve.stop.prevent="restoreStyle" v-on:drop.stop.prevent="fileDroped" >
    <input id="fileinputer" type="file" accept="image/*" multiple v-on:change="fileChanged" />
    <div class="drophint">将图片拖到此处即可上传</div>
  </div>
```

事件处理的方法：

```
  methods:{
    fileDroped: function(event){
      this.fileList = event.dataTransfer.files
      this.restoreStyle()
      event.dataTransfer.clearData() 
    },
    showAcceptFile: function(event){
      this.showAcceptFileStyle = true
    },
    restoreStyle: function(event){
      this.showAcceptFileStyle = false
    }
  }
```
改造后，外面的div增加了4个事件的处理 dragenter, dragover, dragleve, drop分别对应拖拽进入、拖拽在上面移动、拖拽离开和拖拽在此放下。四个事件的默认行为和向父级传递都被通过.stop.prevent两个修饰符禁止掉了。drop事件是最关键的事件，它通过`event.dataTransfer.files`得到被拖拽的文件，后面的处理和通过`input type="file"`的处理就一样的逻辑了。

另外两个方法仅仅是为配合拖拽的文件移动到对应的层上时，改变div的样式，显示出来一个可以放下内容的提示信息。需要配合css使用

```css
.fileinputer {width:300px; height: 80px; border:1px solid #DDD; position: relative;}
.fileinputer .drophint{display: none;}

.accept-files{border: 1px dashed #666;}
.accept-files input {opacity: 0.2}
.accept-files .drophint{display:block; font-size:32px; text-align: center; line-height: 80px; background-color: #666; color:#FFF; position: absolute; left: 0px; top:0px; width:100%; height:100%; z-index:20;}
```

完整详细的例子请看[本书附带的例子项目](../sample-project)里有简单的示例。

## 上传FileObject

得到file后，可以用FormData生成Post Body数据，然后通过AJAX上传。

```
  let formData = new FormData()
  //把每个文件都增加进入FormData
  for (var i=0; i < this.fileList.length; i++){
    var f = this.fileList[i]
    formData.append("file", f)
  }
  //增加其它内容
  formData.append("fileType", "myimages")
  
  this.$http.post('/api/fileupload', formData, {
    headers: {'Content-Type': 'multipart/form-data'}
  }).then(response=>{
    console.log("上传成功", response)
  }, response => {
    console.log("出错了", response)
  })
}
```
