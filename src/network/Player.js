import { request } from "./request";

// 获取音乐Url
export function MusicUrl(id){
  return request({
    url:'/song/url',
    params:{
      id
    }
  })
}