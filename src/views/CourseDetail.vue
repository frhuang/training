<template>
  <div class="course-detail" :class="{'no-scroll': toggle}">
    <my-header title="平面淘宝设计培训"></my-header>
    <div class="video-wrap mt40">
      <img src="http://f.cdn.xsteach.cn/uploaded/86/2b/d8/862bd8bfb6111fcb8a249603487241a4001.jpg" alt="" v-show="!isVideo">
      <div id="player" v-show="isVideo"></div>
    </div>
    <div class="cell-wrap">
      <h3>平面淘宝设计培训<a class="intro" @click="showIntro">课程介绍</a></h3>
      <p class="dec"><span >20直播</span><span>18视频课时</span><span>5试题</span></p>
    </div>
    <div class="schedule-wrap">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">视频课时</mt-tab-item>
        <mt-tab-item id="2">直播课时</mt-tab-item>
        <mt-tab-item id="3">学习关卡</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
         <lesson-lists :lists="lists1" :callback="selectClick"></lesson-lists>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <lesson-lists :lists="lists2" :callback="selectClick"></lesson-lists>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <level-lists :lists="lists3"></level-lists>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <intro-sheet v-show="toggle" :options="options" />
  </div>
</template>

<style lang="scss">
@import "../assets/css/coursedetail.scss";
</style>

<script>
  import IntroSheet from '../components/IntroSheet';
  import { CourseDetailList } from "../config";
  import LessonLists from '../components/LessonLists';
  import LevelLists from '../components/LevelLists';
  export default {
    data () {
      return {
        toggle: false,
        lists1: [],
        lists2: [],
        lists3: [],
        isVideo: false,
        selected: "1",
        options: {},

      }
    },
    created () {
      this.lists1 = CourseDetailList;
      this.lists2 = CourseDetailList.filter((list) => {
        return list.title != '课程预告片'
      });
      this.lists3 = CourseDetailList;
      this.options = {
        method: this.closeIntro
      }
    },
    methods: {
      selectClick (url) {
        var self = this;
        var vid="";
        if(!url) return;
        if (url.indexOf('=') != -1) {
          vid = url.split('=')[1];
        } else {
          var regEx = new RegExp();
          regEx.compile(/(.*)\/videos\/([0-9a-zA-Z_-]*).swf/i);
          vid = regEx.exec(url)[2];
        }
        if(!self.isVideo){
          self.isVideo = true;
          self.player = polyvObject('#player').videoPlayer({
            'width':'100%',
            'height':'200',
            'vid' : vid
          });
        } else {
          self.player.changeVid(vid);
        }
      },
      showIntro () {
        this.toggle = true;
        // alert('showintro');
      },
      closeIntro () {
        this.toggle = false;
      },
      showQuestions () {
        alert('showQuestions');
      }
    },
    components: {
      IntroSheet,
      LessonLists,
      LevelLists
    }
  }
</script>
