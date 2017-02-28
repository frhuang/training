<template>
  <!--<transition name="introsheet">-->
    <div class="introsheet-wrap">
      <div class="introsheet-content">
        <div class="introsheet-title">
          <a href="javascript:;" class="close-icon" @click="close"></a>
          <h3>课程介绍</h3>
        </div>
        <div class="content">
          <h3>平面淘宝设计班</h3>
          <p>主讲：周伟　｜　视觉设计</p>
          <p>PS高级班是系统培训，分为淘宝装修，影楼后期，VI设计以及创意合成。PS高级班主要针对已经有一定PS基础的同学，通过系统学习，可以快速了解行业流程和规则，熟练掌握实际工作中的技巧与经验，让你快速成为老板手里必不可少的员工！</p>
        </div>
      </div>
    </div>
  <!--</transition>-->
</template>

<style lang="scss">
@import "../assets/css/components/introsheet.scss";
</style>

<script>
  export default {
    props: {
      toggle: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object
      }
    },
    methods: {
      close () {
        if(typeof this.options.method === 'function') {
          this.options.method();
        }
      }
    }
  }
</script>
