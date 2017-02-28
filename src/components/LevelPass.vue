<template>
  <div class="introsheet-wrap">
    <div class="introsheet-content">
       <div class="introsheet-title">
         <a href="javascript:;" class="close-icon" @click="close"></a>
         <h3>关卡闯关</h3>
       </div>
       <div class="pass-content">
         <question :questions="currentQuestions"></question>
         <div class="pass-btn">
            <a class="abtn btn-pre" @click="next">上一关</a>
            <a class="abtn btn-next" @click="next">下一关</a>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
import Question from './Question';
  export default {
    props: {
      id: {
        type: Number,
        default: 0
      },
      callback: {
        type: Function
      }
    },
    data () {
      return {
        questions: [],
        currentQuestion: {}
      }
    },
    created () {
      this.currentQuestions = {
        title: "以下哪种变成语言是世界上最好的语言，以下哪种语言是世界上最好的语言？",
        type: 1,
        answers: {
          "A": "面向对象C++语言",
          "B": "面向对象Java",
          "C": "高级PHP语言",
          "D": "前端html + css"
        }
      }
    },
    methods: {
      close () {
        if(typeof this.callback === 'function') {
          this.callback();
        }
      },
      next () {
        this.currentQuestions = {
          title: "以下哪种语言是世界上最好的语言？",
          type: 1,
          answers: {
            "A": "SEX",
            "B": "DDC",
            "C": "CCN"
          }
        }
      }
    },
    components: {
      Question
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/components/levelpass.scss";
</style>