<template>
  <div class="tasklist" @click="detailList" :class="{'unfolded': flag }">
    <div class="task-box">
      <div class="task-left">
        <i class="left-icon" :class="{'type1': content.type == 1 , 'type2': content.type == 2}"></i>
      </div>
      <div class="task-right">
        <h3 class="task-time">2017.3.20 <span class="title-delay">已延期3天</span></h3>
        <div class="task-con-wrap">
          <div class="task-content">
            <h3 class="task-time">{{content.title}}</h3>
            <div class="left-down">
              <span v-show="content.timedec"><i class="icon10"></i>{{content.timedec}}</span>
              <span v-show="content.perdec != ''" class="dec"><i class="icon11"></i>20人参与</span>
            </div>
          </div>
          <div class="circle_wrap" v-if="type==1">
            <div v-show="num === 0" class="circle-0">
              <div class="circle-num"><span>{{num}}%</span></div>
            </div>
            <div v-show="num > 0" class="circle" >
              <div class="wrapper right">
              <div class="circleProgress rightcircle" :style="{'transform' : 'rotate('+ rCircleNum +'deg)', 'transition': 'all ' + rtime + 's linear'}"></div>
              </div>
              <div class="wrapper left">
                  <div class="circleProgress leftcircle" :style="{'transform' : 'rotate('+ lCircleNum +'deg)', 'transition': 'all ' + ltime + 's linear'}"></div>
              </div>
              <div class="circle-num">
                <!--<span>继续学习</span>-->
                <span>{{num}}%</span>
              </div>
            </div>
          </div>
          <div class="task-done" v-else-if="type == 2"></div>
          <div class="exam-done" v-else-if="type == 3">
            <i class="idone icon-pass" v-if="doneType == 1"></i>
            <i class="idone icon-no-pass"v-else-if="doneType == 2"></i>
            <i class="idone icon-done" v-else-if="doneType == 3"></i>
            <span v-else>待批阅</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <transition name="fade"> -->
      <div class="list-box" v-show="flag && content.details">
        <ul>
          <li v-for="detail in content.details" class="simple-item">
            <div class="left-box item-cc">
              <i :class="'item-icon item-icon'+detail.type"></i>
            </div>
            <div class="center-box">
              <h3 class="item-center">{{ detail.title }} <span class="lesson">{{ detail.times }}</span></h3>
            </div>
            <div class="right-box">
              <div class="item-right">20%</div>
            </div>
          </li>
        </ul>
      </div>
    <!-- </transition> -->
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/css/components/tasklist.scss";
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

<script>
/**
*
*/
  export default {
    props: {
      content: {
        type: Object,
        default: {}
      },
      type: {
        default: 1
      }
    },
    data () {
      return {
        num: 0,
        flag: false,
        isAnimate: false,
        lCircleNum: -135,
        rCircleNum: -135,
        ltime: 1,
        rtime: 1,
        doneType: 1,
      }
    },
    created () {
      this.num = this.content.percent;
      this.updateCircle();
    },
    methods: {
      detailList () {
        this.flag = !this.flag;
      },
      updateCircle () {
        var self = this;
        var num = self.num;
        if (num > 0 && num <= 50) {
          var r1 = num / 50 * 180 - 135;
          setTimeout(function() {
            self.rtime = 0.5;
            self.rCircleNum = r1;
          }, 100)
        } else {
          var r = 50 / num * 0.5;
          setTimeout(function() {
            var r2 = (num - 50) / 50 * 180 - 135;
            self.rtime = r;
            self.rCircleNum = 45;
            setTimeout(() => {
              self.ltime =  0.5 - self.rtime;
              self.lCircleNum = r2;
            }, 1000 * r)
          }, 100)
        }
      }
    }
  }
</script>