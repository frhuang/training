<template>
  <div class="live-wrap">
    <my-header title="平面淘宝设计培训"></my-header>
    <div class="video-wrap mt40">
      <img src="http://f.cdn.xsteach.cn/uploaded/86/2b/d8/862bd8bfb6111fcb8a249603487241a4001.jpg" alt="" v-show="!isVideo">
      <div id="player" class="play-wrap" v-show="isVideo"></div>
    </div>
    <div class="chat_wrap" v-show="chatList">
      <div class="chat_hd">
        <span class="fr red-color">
          <i class="iconfont"></i> {{ onlineList.length || 0 }}
        </span>
        <h2>课堂交流</h2>
      </div>
      <div class="chat_bd">
        <div class="chat_main">
          <ul class="chat_list" v-if="chatList.length">
            <li v-for="item in chatList" :class="item.id == userId ? 'chat_me' : 'chat_you'">
              <div class="chat_flex" v-if="item.id == userId"></div>
              <div class="chat_item">
                <p>{{ item.name }}<span>{{ item.time }}</span></p>
                <div class="chat_msg">{{ item.message }}</div>
              </div>
              <div v-if="item.id != userId" class="chat_flex"></div>
            </li>
          </ul>
          <div class="empty_wrap" v-if="!chatList.length">知识改变命运~</div>
        </div>
      </div>
      <div class="chat_ft">
        <div class="chat_form">
          <input type="text" class="chat_input" v-model="chatInput" placeholder="我也来聊几句" />
          <button class="chat_send" @click="submit">
            <i class="btn-icon"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/css/livedetail.scss";
</style>

<script>
  export default {
    data () {
      return {
        isVideo: false,
        chatList: [],
        onlineList: [],
        chatInput: "",
        userId: "1"
      }
    },
    created () {
      this.chatList = [
        {
          id: "2",
          name: '小小鸟',
          time: "20:30",
          message: "傻逼沙发松岛枫是否是否阿斯蒂芬所发生的是的防守打法是的发是的发"
        },
        {
          id: "1",
          name: '我自己',
          time: "20:30",
          message: "你才是傻逼"
        },
        {
          id: "2",
          name: '小小鸟',
          time: "20:30",
          message: "hello hello 傻逼沙发松岛枫是否是否阿斯蒂芬所发生的是的防守打法是的发是的发"
        },
        {
          id: "2",
          name: '小小鸟',
          time: "20:30",
          message: "hello hello 傻逼沙发松岛枫是否是否阿斯蒂芬所发生的是的防守打法是的发是的发"
        }
      ]
    },
    methods: {
      submit () {

      }
    }
  }
</script>