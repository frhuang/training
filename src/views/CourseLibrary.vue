<template>
  <div class="course-center">
    <my-header title="课程库"></my-header>
    <div class="category-wrap">
      <category title="所有课程" :lists="lists1"/>
    </div>
    <div class="course-wrap mt40">
      <ul class="course-box">
        <li v-for="list in lists" class="course-item">
          <course-cell :list="list" :to="'/coursedetail/'+list.id"></course-cell>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Category from '../components/Category';
  import CourseCell from '../components/CourseCell';
  import { CourseClass } from '../config';
  export default {
    data () {
      return {
        lists1: CourseClass,
        lists: []
      }
    },
    created () {
      this.lists = [{
        id: 1,
        img: "http://f.cdn.xsteach.cn/uploaded/ce/d9/61/ced961660d86289b09660f4b446bdcc4001.jpg",
        title: "2222",
        content: "主讲：蓝翔　｜　管理类"
      }]
    },
    components: {
      Category,
      CourseCell
    }
  }
</script>

<style lang="scss">
  @import "../assets/css/coursecenter.scss";
</style>
