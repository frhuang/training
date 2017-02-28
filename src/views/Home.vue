<template>
  <div class="home mb50">
    <mt-header title="我要学习">
      <router-link to="/message" slot="right">
        <mt-button class="icon-msg"></mt-button>
      </router-link>
    </mt-header>
    <div class="slider">
      <mt-swipe :auto="0">
        <mt-swipe-item>
          <a href="#"><img src="/static/img/bg.jpg" alt=""></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#"><img src="/static/img/bg.jpg" alt=""></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#"><img src="/static/img/bg.jpg" alt=""></a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="nav">
      <nav-cell v-for="data in navData" :data="data"></nav-cell>
    </div>
    <div class="content">
      <h3 class="content-title"><span class="title-icon"></span><span class="title-con">待处理</span></h3>
      <simple-list v-for="arr in contentData" :content="arr"></simple-list>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../assets/css/home.scss";
</style>

<script>
  import SimpleList from '../components/SimpleList';
  import NavCell from '../components/NavCell';
  import { MainLists } from '../config';
  export default {
    data (){
      return {
        contentData: [],
        navData: []
      }
    },
    created () {
      this.contentData = MainLists;
      this.navData = [
        {
          title: "学习任务",
          link: "/studyplan",
          icon: "icon1",
          num: 2
        },
        {
          title: "我的考试",
          link: "/myexam",
          icon: "icon2",
          num: 0
        },
        {
          title: "我的直播课",
          link: "/livecourse",
          icon: "icon3",
          num: 0
        },
        {
          title: "课程库",
          link: "/courselibrary",
          icon: "icon4",
          num: 0
        }
      ]
    },
    components: {
      SimpleList,
      NavCell
    }
  }
</script>
