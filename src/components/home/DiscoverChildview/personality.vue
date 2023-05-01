<template>
  <div class="personality">
    <!-- 轮播图 -->
    <div class="CarouselMap" v-loading="loadingcarousel">
        <el-carousel class="swiper" type="card" height="244px" >
        <el-carousel-item class="swiperitem" v-for="item in banners">
            <img :src="item.imageUrl" alt="">
            <div class="new" ><div>{{item.typeTitle}}</div></div>
        </el-carousel-item>
        </el-carousel>
    </div>

    <!-- 推荐歌单 -->
    <div class="getrecommend">
      <div class="exclusiveTitle"><p>推荐歌单 > </p></div>
        <div  class="recommendList" v-for="item in recommendlist" @click="Jump(item.id)">
            <el-image class="recommendImg" :src="item.picUrl"></el-image>
            <p>{{ item.name }}</p>
        </div>
    </div>
    <!-- 独家放送 -->
    <div class="exclusive"> 
      <div class="exclusiveTitle"><p>独家放送 > </p></div>

      <div class="Exclusivecontent" v-for="item in exclusive">
        <div class="privateicon">
                    <i class="el-icon-caret-right"></i>
                </div>
          <img :src="item.sPicUrl" alt="">
          <p class="ExclusivecontentTitle">{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {getbanners, getExclusive, recommendPlay} from '@/network/homedata'

export default {
  name:'personality',
  data() {
    return {
      banners: [],
      loadingcarousel:  true,
      exclusive: [],
      recommendlist:[]
    }
  },
  created(){
    getbanners().then(res => {
      this.banners = res.data.banners
      this.loadingcarousel = false
    })
    getExclusive().then(res => {
      this.exclusive = res.data.result
      // console.log(res.data);
    })
    this.getrecommendPlay()
  },
  methods:{
    getrecommendPlay(){
      let id = sessionStorage.getItem('id')
      console.log(id);
      recommendPlay(id).then(res => {
        // console.log(res);
        this.recommendlist = res.data.result
        // console.log( this.recommendlist);
      })
    },
    Jump(id){
    this.$router.push('/PlaylistPage/' + id);
    this.$store.commit('setplaylistID', id)
    this.$store.commit('cleansong')
    console.log("跳转");
    // this.$store.commit('PlaylistInformation', )
    }
  }
}
</script>

<style>
.personality {
  margin: 0 auto;
  width: 1000px;
  font-family: 微软雅黑;
}
.swiperitem img {
  position: relative;
  width: 100%;
    height: 100%;
    /* object-fit: cover; */
    border-radius:10px ;
}
.new {
  position: absolute;
  right: 0px;
  bottom: 0px;
  padding: 3px 10px;
  color: #fff;
  background-color: #c62f2f;
  font-size: 12px;
  border-top-left-radius:10px ;
  border-bottom-right-radius:10px ;
}

.exclusive{
  margin: 40px 0;
}

.exclusiveTitle p {
  font-size: 20px;
  color: #000;
  font-weight: 700;
}

.Exclusivecontent{
  position: relative;
  display: inline-block;
  /* align-items: center; */
  margin-left: 12px;
 width: 320px;
}

.Exclusivecontent img {
  width: 100%;
  height: 100%;
  border-radius: 2%;
  cursor: pointer;
}
.ExclusivecontentTitle{
  margin-left: 2%;
  margin-right: 2%;
  opacity: .7;
  font-size: 14px;
  color: #000;
  text-align: left;
  overflow: hidden;
}
.ExclusivecontentTitle:hover{
  opacity: 1;
  cursor: pointer;
}
.privateicon{
  position: absolute;
  left: 2px;
  top: 4px;
  z-index: 20;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  border: 1px solid #d3d3d3;
  cursor: pointer;
}
.recommendList{
  display: inline-block;
  margin-top: 20px;
  margin-left: 9px;
  vertical-align: top;
  height: 266px;
  cursor: pointer;
}
.recommendList p {
  padding: 0;
  margin: 0;
  font-size: 14px;
  text-align: left;
  overflow: hidden;
  width: 220px;
  text-align:left;
  color: #000;
  opacity: .8;
}
.recommendImg{
  width: 240px;
  height: 240px;
  border-radius: 5px;
}
</style>