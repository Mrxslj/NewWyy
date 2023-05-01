import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    playlistID:0,
    songlist:[],
    Music:{}

  },
  mutations:{
    setplaylistID:(state,ID) =>{
      state.playlistID = ID
    },
    setSonglistID(state,song){
      state.songlist.push(song)
      // console.log("添加");
      // console.log(state.songlist);
      
    },
    // 清空歌单
    cleansong(state){
      state.songlist = []
      console.log("清空");
      console.log(state.songlist);
    },
    // 音乐id
    setMusic(state, Music){
      state.Music = Music
    },
  },
  getters:{
    getsonglist(state){
      return state.songlist
    }

  }
})

export default store;