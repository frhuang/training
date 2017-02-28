<template>
  <div>
    <ul class="lesson-wrap">
      <li class="lesson-item" v-for="(list, key) in lists" :class="{'isSelected': isSelected === key}" >
        <div class="lesson-index">
          <span v-if="isSelected !== key">{{key+1}}</span>
          <img src="/static/img/live.png" v-else-if="isSelected === key" />
        </div>
        <div class="lesson-content">
          <h3>{{list.title}}</h3>
        </div>
        <div class="lesson-right">
          <mt-button type="primary" @click="passLevel(key)">马上闯关</mt-button>
        </div>
      </li>
    </ul>
    <level-pass v-show="passVisible" :id="id" :callback="closeLevelPass"></level-pass>
  </div>
</template>
<style lang="scss" scoped>
  .lesson-right .mint-button {
    border-radius: 20px;
    background: #55b4ff;
    font-size: 12px;
    height: 30px;
  }
  @import "../assets/css/components/lessonlists.scss";
  
</style>
<script>

  import LevelPass from "./LevelPass";
  export default {
    props: {
      lists: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        isSelected: -1,
        id: 0,
        passVisible: false
      }
    },
    methods: {
      passLevel (key) {
        this.id = key;
        this.passVisible = true;
      },
      closeLevelPass () {
        this.passVisible = false;
      }
    },
    components: {
      LevelPass
    }
  }
</script>