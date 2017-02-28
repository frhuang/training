<template>
  <ul class="lesson-wrap">
    <li class="lesson-item" v-for="(list, key) in lists" @click="selectCell(list.link, key)" :class="{'isSelected': isSelected === key}" >
      <div class="lesson-index">
        <span v-if="isSelected !== key">{{key+1}}</span>
        <img src="/static/img/live.png" v-else-if="isSelected === key" />
      </div>
      <div class="lesson-content">
        <h3>{{list.title}}</h3>
        <p>2016.3.01 20:00 直播回放</p>
      </div>
      <div class="lesson-right">20%</div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "../assets/css/components/lessonlists.scss";
</style>

<script>
/**
* 课时列表
* @param {{array}} [lists] , 列表数组
* @example
* <lesson-lists :lists="标题"></lesson-lists>
*/
  export default {
    props: {
      lists: {
        default: []
      },
      callback: {
        type: Function
      }
    },
    data () {
      return {
        isSelected: -1
      }
    },
    methods: {
      selectCell (url, key)  {
        this.isSelected = key;
        if (typeof this.callback === 'function') {
          this.callback(url);
        }
        // console.log(this.$parent)
        // this.$parent.selectClick(url);
      }
    }
  }
</script>