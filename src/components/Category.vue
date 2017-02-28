<template>
  <div class="category">
    <div class="category-title" @click="() => {flag = !flag}">
      {{title}}
      <i class="iconfont category-icon1" v-if="flag===false"></i>
      <i class="iconfont category-icon2" v-else-if="flag===true"></i>
    </div>
    <ul v-show="flag===true" class="category-list">
      <li class="category-item" v-for="list in lists">
        <a :href="list.link">{{list.title}}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/css/components/category.scss";
</style>

<script>
/**
* category
* 目录分类组件
* @param {{string}} [title] , 传入目录标题
* @param {{Array }} [lists] , 目录详细分类, 对象数组 eg. { title : '**', link: '**'}
* @example
* <category title="课程目录" :lists="[{title: 'pdf' , link: '#'}]" />
*/
  export default {
    props: {
      title: {
        type: String,
        default: "所有课程"
      },
      lists: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        flag: false
      }
    }
  }
</script>
