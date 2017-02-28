<template>
  <router-link :to="data.link" class="nav-item">
    <div class="box">
      <div class="icon" :class="data.icon">
        <i class="msg-icon" v-if="data.num > 0">{{ data.num }}</i>
      </div>
    </div>
    <p>{{ data.title }}</p>
  </router-link>
</template>

<script>
/**
* nav-cell
* 导航栏cell组件
* @param {{string}} [data] , 传入初始数据
* {{data.title}} 标题
* {{data.link}} 跳转链接
* {{data.icon}} icon的标记
* {{data.num}} 新消息的个数
* @example
* <nav-cell data="{title: '11', link: '/', num: 0, icon: 'icon1'}"/>
*/
  export default {
    props: {
      data: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/css/components/navcell.scss";
</style>