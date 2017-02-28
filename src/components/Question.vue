<template>
  <div class="question-wrap">
    <div class="question-title">
      <i class="choice-icon"></i>
      <h3 class="">{{questions.title}}</h3>
    </div>
    <div class="questions-list">
      <ul v-if="questions.type == 1">
        <li v-for="(answer, key) in questions.answers" 
          class="choice-item" 
          @click="selectChoice(key)"
          :class="{'active': activeName == key}">
          <i class="ch-icon">{{key}}</i>{{answer}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/components/question.scss";
</style>

<script>
  export default {
    props: {
      questions: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        activeName: ""
      }
    },
    methods: {
      selectChoice (key) {
        this.activeName = key;
      }
    }
  }
</script>