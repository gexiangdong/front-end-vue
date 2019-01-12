<template>
  <div>
    <h1>
      文件上传
      <p class="page-desc">文件上传的例子。</p>
    </h1>

    <div>
      <div class="fileinputer" v-bind:class="showAcceptFileStyle ? 'accept-files' : ''"
        v-on:dragenter.stop.prevent="showAcceptFile"  v-on:dragover.stop.prevent  
        v-on:dragleve.stop.prevent="restoreStyle" v-on:drop.stop.prevent="fileDroped" >
        <input id="fileinputer" type="file" accept="image/*" multiple v-on:change="fileChanged" />
        <label for="fileinputer">+选择图片</label><!-- 这个label和下面的CSS是提供界面定制，不显示type=file 的input的一个方法-->
        <div class="drophint">将图片拖到此处即可上传</div>
      </div>
      <div v-if="list != null">
        <h3>选择的文件</h3>
        <ul>
          <li v-for="(item, index) in list" :key="index">
            {{item.file.name}}  ({{item.file.size + 'bytes'}})  {{item.file.type}}
            <img v-bind:src="item.url" class="image-preview" />

          </li>
        </ul>
        <button v-on:click="uploadFiles">开始上传</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileObject',
  data() {
    return {
      showAcceptFileStyle: false,
      list: null
    }
  },
  methods:{
    fileChanged: function(event){
      console.log(event)
      this.handleFiles(event.target.files)
    },
    handleFiles: function(files){
      console.log('handleFiles', files)
      if(files && files.length > 0){
        this.list = []
      }else{
        this.list = null
        return
      }
      for (var i=0; i < files.length; i++){
        var f = files[i]
        let item = {}
        item.file = f
        if(f.type.startsWith('image/')){
          let reader = new FileReader();
          reader.onload = (() => {
            item.url = reader.result
            this.list.push(item)
          })
          reader.readAsDataURL(f)
        }else{
          item.url = null
          this.list.push(item)
        }
      }
    },
    fileDroped: function(event){
      console.log(event)
      this.handleFiles(event.dataTransfer.files)
      this.restoreStyle()
      event.dataTransfer.clearData() 
    },
    showAcceptFile: function(event){
      console.log("showAcceptFile", event)
      this.showAcceptFileStyle = true
    },
    restoreStyle: function(event){
      console.log("restoreStyle", event)
      this.showAcceptFileStyle = false
    },

    uploadFiles: function(){
      let formData = new FormData()
      //把每个文件都增加进入FormData
      for (var i=0; i < this.list.length; i++){
        var f = this.list[i].file
        formData.append("file", f)
      }
      //增加其它内容
      formData.append("fileType", "myimages")
      
      this.$http.post('/api/files/exam', formData, {
        headers: {'Content-Type': 'multipart/form-data'},
        uploadProgress: (processEvent => {
          console.log(processEvent.lengthComputable, processEvent.loaded, processEvent.total)
        })
      }).then(response=>{
        console.log("uploaded", response)
      }, response => {
        console.log("error", response)
      })
    }
  }
}
</script>

<style scoped>
.fileinputer {width:300px; height: 80px; border:1px solid #DDD; position: relative;}
.fileinputer input{display:none;}
.fileinputer label{display: block; width: 100%; height: 100%; text-align: center; font-size:48px; line-height: 80px; cursor: pointer;}
.fileinputer .drophint{display: none;}

.accept-files{border: 1px dashed #666;}
.accept-files label {opacity: 0.2}
.accept-files .drophint{display:block; font-size:32px; text-align: center; line-height: 80px; background-color: #666; color:#FFF; position: absolute; left: 0px; top:0px; width:100%; height:100%; z-index:20;}

.image-preview {max-width:80px; max-height:80px; border:1px solid #CCC;}
</style>
