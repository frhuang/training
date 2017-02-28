<template>
  <div class="message-cell">
    <i class="noread-icon" v-if="message.type === 1"></i>
    <div class="message-box">
      <h3 class="message-title">{{message.title}}</h3>
      <p class="message-content">
        <span class="saying">{{message.saying}}</span> : {{message.content}}
      </p>
      <p class="create-time">
        <span class="little-title">创建人：</span> {{message.person}}
      </p>
      <p class="create-time">
        <span class="little-title">创建时间：</span> {{message.time}}
      </p>
    </div>
    <div class="message-todo">
      <a @click="setReaded" v-if="message.type === 1">设为已读</a>
      <p v-else>已读</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/css/components/messagecell.scss";
</style>

<script>
  export default {
    props: {
      message: {
        type: Object,
        default: {}
      }
    },
    methods: {
      setReaded () {
        this.message.type = 2;
      }
    }
  }
</script>