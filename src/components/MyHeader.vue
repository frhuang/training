<template>
  <mt-header :title="title" fixed>
    <a href="javascript:;" @click="routerBack" slot="left"><i class="back-icon"></i></a>
  </mt-header>
</template>

<script>
/**
* my-header
* 头部标题返回组件
* @param {{string}} [title] , 传入标题
* @example
* <my-header title="标题"></my-header>
*/
  export default {
    name: 'my-header',
    props: {
      title: {
        type: String,
        default: "我要学习"
      }
    },
    methods: {
      routerBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss">
  .mint-header {
    background: linear-gradient(to right,#32a3fd,#32b7fd);
  } 
  .back-icon {
    width: 10px;
    height: 18px;
    display: block;
    background-image: url(/static/img/back.png);
    background-size: 100%;
  }
</style>
