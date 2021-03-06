
import { setItem, remItem } from '@/utils/storage'
import * as types from './mutations-types'

const mutations = {
  // navBar
  [types.setActiveIndex] (state, i) {
    state.activeIndex = i
  },
  // 用户信息
  [types.setUserInfo] (state, data) {
    state.profile = data
    if (data === null) {
      remItem('profile')
    } else {
      setItem('profile', state.profile)
    }
    console.log('用户信息', data)
  },
  // 播放列表 接收数组
  [types.setPlayList] (state, data) {
    const result = []
    state.playlist.unshift(...data)
    // 去除重复歌曲
    for (const item of state.playlist) {
      var flag = true
      for (const item1 of result) {
        if (item.id === item1.id) {
          flag = false
        }
      }
      if (flag) {
        result.push(item)
      }
    }
    state.playlist = result
    setItem('playlist', state.playlist)
  },
  // 设置正在播放的歌曲
  [types.setCurrentSong] (state, data) {
    state.currentSong = data
    setItem('current', state.currentSong)
  },
  // 播放状态
  [types.setPlay] (state, data) {
    state.isPlay = data
  },
  // 获取播放当前进度
  [types.getcurrentTime] (state, data) {
    state.currentTime = data
  },
  // 总进度
  [types.getmaxTime] (state, data) {
    state.maxTime = data
  },
  // 提供下在的资源
  [types.setFile] (state, data) {
    state.flie = data
  },
  // 歌曲详情
  [types.setArtists] (state, data) {
    state.artists = data
    setItem('currently', state.artists)
  }
}
export default mutations
