<template>
  <div class="Player">
    <!-- audio音频播放标签 autoplay自动播放 -->
    <audio :src="getmusic.MusicUrl" autoplay></audio>
    <!-- 左侧歌曲信息 -->
    <div class="songInfo-left">
      <el-image :src=" getmusic.MusicCover" class="songInfo-img"></el-image>
      <div class="songInfo-songname">{{ getmusic.MusicName }}</div>
      <div class="songInfo-songer">{{ getmusic.MusicSinger }}</div>

    </div>

    <!-- 中间播放区域 -->
    <div class="playback">
      <!-- 播放器操作 -->
      <div class="playback-top">
        <!-- 循环播放 -->
        <div   ><i class="iconfont icon-xunhuanbofang" style="font-size:15px; margin-right: 30px;"></i></div>
        <!-- 上一首 -->
        <div  ><i class="iconfont icon-shangyishou" style="font-size:25px; margin-right: 40px;"></i></div>
        <!-- 暂停播放或者开始bof -->
        <div>
          <!-- 暂停 -->
          <div><i class="iconfont icon-bofang" style="font-size:30px; margin-right: 40px;"></i></div>
           <!-- 播放 -->
        </div>
        <!-- 下一首 -->
        <div  ><i  class="iconfont icon-xiayishou" style="font-size:25px; margin-right: 40px;"></i></div>
        <!-- 是否显示歌词 -->
        <div class="playback-lyrics">词</div>
      </div>
      <!-- 歌曲进度条 -->
      <div class="ProgressBar">
        <!-- 已经播放的时间 -->
        <span>{{this.musicDuration | TimeRevise}}</span>
        <!-- 进度条 -->
        <!-- v-model双向绑定  v-bind :  单向绑定 -->
        <div id="playSlider">
          <el-slider  v-model="musicDuration" :max="musicDurationAll" :show-tooltip="false"></el-slider >
        </div>
        <!-- 一首歌的时间 -->
        <span>{{ this.musicDurationAll | TimeRevise}}</span>
      </div>
    </div>

    <!-- 右侧控制区域 -->
    <div></div>
  </div>
</template>

<script>
export default {
  name:'Player',
  data(){
    return {
      // 歌曲当前时长
      musicDuration:0,
      // 歌曲总时长
      musicDurationAll:0
    }
  },
  created(){
  },
  computed:{
    getmusic(){
     return  this.$store.state.Music
    },
    getmusicId(){
      return  this.$store.state.Music.MusicID
    }
  },
  watch:{
    getmusicId(){
      console.log(this.getmusic);
    }
  }
}
</script>

<style>
.Player{
  display: flex;
  height: 75px;
  width: 1528px;
  background-color: #fff;
  border-top: 1px solid #a9a9a9;
}
.songInfo-left{
  position: relative;
  display:flex;
  margin: 5px 10px;
  width: 200px;
  height: 65px;
  color: #000;
}
.songInfo-img{
  margin-top: 7px;
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 10%;
  /* flex布局中固定宽度,防止宽度被压缩 */
  flex-shrink:0; 
}
.songInfo-songname{
  margin-top: 14px;
  margin-left: 12px;
  font-size: 14px;
  white-space: nowrap;
  Overflow:hidden;
  font-family: 微软雅黑;
  opacity: .8;
}
.songInfo-songer{
  position: absolute;
  top: 34px;
  left: 72px;
  font-size: 14px;
  font-family: 微软雅黑;
  opacity: .8;
  white-space: nowrap;
  Overflow:hidden;
}
.playback{
  display: inline-block;
  margin-left: 200px;
  width: 640px;
  height: 100%;
  /* background-color: pink; */
 
}
.playback-top{
  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.playback-lyrics{
  font-size: 12px;
  color: #000;
}
.ProgressBar{
  display: flex;
  /* 居中 */
  justify-content: center;
  align-items: center;
}
  /* 播放条样式 */
  #playSlider {
    width: 35%;
    margin-top: -5px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
</style>