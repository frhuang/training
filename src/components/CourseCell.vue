<template>
  <router-link :to="to" class="course-cell">
    <div class="course-pic">
      <img :src="list.img" alt="">
    </div>
    <h3>{{ list.title }}</h3>
    <p>{{ list.content }}</p>
  </router-link>
</template>

<script>
  /**
* course-cell
* 课程块组件
* @param {{Object}} [list] , 传入块的参数 eg. { title : '**', link: '**', img: '**'}
* @param {{String }} [to] , 传入跳转链接
* @example
* <course-cell to="/live/1" :list="{title: 'pdf' , link: '#', img: ''}" />
*/
  export default {
    props: {
      list: {
        type: Object,
        default: {}
      },
      to: {
        type: String,
        default: ""
      }
    }
  }
</script>


<style lang="scss" scoped>
@import "../assets/css/components/coursecell.scss";
</style>