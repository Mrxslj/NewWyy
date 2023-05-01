<template>
  <div id="app">
    <nav-bar id="navbar"/>

    <el-container id="home-container">
      <sidebar></sidebar>
        <el-main id="main">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
    </el-container>

    <div id="Player">
      <Player></Player>
    </div>
  </div>
</template>
<link rel="stylesheet" href="@/assets/iconfont/iconfont.css"></link>
<script>
import NavBar from '@/components/home/NavBar.vue'
import sidebar from '@/components/home/sidebar.vue'
import Player from '@/components/Player.vue'

export default{
  name: 'App',
  components: {
    NavBar,
    sidebar,
    Player
  }
}
</script>

<style>
@import url(./assets/css/base.css);
/*  设置最小宽度 */
#app {
  min-width: 1528px;
  position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
overflow-x: hidden !important;
}
/* #navbar{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
} */
#main{
  padding: 10px 0px 10px 0px;
  overflow-x: hidden !important;
  overflow-y: auto;
  scroll-behavior: smooth;
}
#Player{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
}
</style>
