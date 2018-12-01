# 完整的表单的例子
====

下面这个例子用到了表单中的各项元素，单行、多行输入框、单选按钮、复选框和下拉列表。

```vue
<template>
  <div>
    <h1>表单的例子</h1>
    <form>
      <div>姓名：</div>
      <div><input type="text" autofocus="autofocus" v-model="name" /></div>

      <div>性别：</div>
      <div>
        <input type="radio" id="gender-male" name="gender" value="男" v-model="gender" /><label for="gender-male">男</label>
        <input type="radio" id="gender-female" name="gender" value="女" v-model="gender" /><label for="gender-female">女</label>
      </div>

      <div>来自：</div>
      <div>
        <select v-model="province">
          <option value="北京">北京</option>
          <option value="上海">上海</option>
          <option value="广州">广州</option>
          <option value="深圳">深圳</option>
        </select>
      </div>
      
      <div>简介：</div>
      <div><textarea v-model="intro"></textarea></div>

      <div>爱好：</div>
      <div>
        <input type="checkbox" value="吃" id="chi" v-model="hobbies" /><label for="chi">吃</label>
        <input type="checkbox" value="喝" id="he" v-model="hobbies" /><label for="he">喝</label>
        <input type="checkbox" value="玩" id="wan" v-model="hobbies" /><label for="wan">玩</label>
        <input type="checkbox" value="乐" id="le" v-model="hobbies" /><label for="le">乐</label>
      </div>

      <div></div>
      <div><input type="checkbox" id="iagreewithite" v-model="agree"><label for="iagreewithite">我同意注册协议……</label></div>

      <div></div>
      <div><input type="submit" value="submit button" /> <button v-on:click="submitForm">提交</button></div>
    </form>

    <div class="display">
      <div>姓名：{{name}}</div>
      <div>性别：{{gender}}</div>
      <div>简介：{{intro}}</div>
      <div>爱好：{{hobbies}}</div>
      <div>是否同意注册协议：{{agree}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      name: null,
      gender: null,
      intro: null,
      province: null,
      hobbies: [],
      agree: false
    }
  },
  methods:{
    submitForm: function(){
      console.log("submitForm")
    }
  }
}
</script>

<style scoped>
form {display: grid; grid-template-columns: 50px auto; grid-row-gap:20px; text-align: left; width: 600px; }
input[type=text] {width: 500px;}
textarea{width: 500px; height: 50px;}
</style>
```

