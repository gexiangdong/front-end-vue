# 文件上传


文件上传在[表单章节的上传File Object](../form/file-object.md#上传File-Object)中已经讲到。

vue-resource还可以增加进度监视器在客户端显示上传进度

```vue
  var uploadProgress = function(processEvent){
    //上传进度更新时会调用这个函数
    //lengthComputable是boolean型，true表示能够计算上传的大小
    //loaded表示已经上传的字节数；total表示总共需要上传的字节数，两者一起可以计算已上传百分比，进而预估剩余时间
    console.log(processEvent.lengthComputable, processEvent.loaded, processEvent.total)
  }
  //设置的参数里，uploadProgress 是上传进度的监视器
  this.$http.post('/api/files/exam', formData, {
    headers: {'Content-Type': 'multipart/form-data'},
    uploadProgress: uploadProgress
  }).then(response=>{
    console.log("uploaded", response)
  }, response => {
    console.log("error", response)
  })


```
