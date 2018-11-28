<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/aform">表单</router-link></li>
      </ul>
    </div>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {display: flex;}
#nav { width:80px; border-right: 1px solid #CCC;  padding: 30px;}
#main{flex-grow: 1; padding-left: 20px;}
#nav a {font-weight: bold; color: #2c3e50;}
#nav ul{margin: 0; padding: 0;}
#nav li{list-style:none; padding: 2px; }
h1{margin: 10px 0 30px 0; border-bottom: 1px dashed #CCC;}
</style>
