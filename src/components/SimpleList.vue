<template>
  <div class="simplelist" @click="() => { flag = !flag }" :class="{'unfolded': flag }">
    <div class="main-box">
      <div class="left-box">
        <div class="left-bg" :class="{'type1': content.type == 1 , 'type2': content.type == 2}">
        </div>
      </div>
      <div class="center-box">
        <h3 class="left-title">{{content.title}}</h3>
        <div class="left-down">
            <span v-show="content.timedec"><i class="icon10"></i>{{content.timedec}}</span>
            <span v-show="content.perdec != ''" class="dec"><i class="icon11"></i>20人参与</span>
        </div>
      </div>
      <!--<div class="right-box">-->
        <div class="circle_wrap">
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
        <!--</div>-->
      </div>
    </div>
      <div class="list-box" v-show="flag && content.details">
        <ul>
          <li v-for="detail in content.details" class="simple-item item-cc">
            <div class="left-box">
              <i :class="'item-icon item-icon'+detail.type"></i>
            </div>
            <div class="center-box">
              <h3 class="item-center">{{ detail.title }} <span class="lesson">{{ detail.times }}</span></h3>
            </div>
            <div class="right-percent">
              <div class="item-right">20%</div>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<style lang="scss">
  @import "../assets/css/components/simplelist.scss";
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
      }
    },
    data () {
      return {
        num: 0,
        flag: false,
        lCircleNum: -135,
        rCircleNum: -135,
        ltime: 1,
        rtime: 1
      }
    },
    created () {
      this.num = this.content.percent;
      this.updateCircle();
    },
    methods: {
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
