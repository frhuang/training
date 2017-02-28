<template>
  <div class="course-center">
    <my-header title="课程中心"></my-header>
    <div class="category-wrap">
      <category title="所有课程" :lists="categoryLists"/>
    </div>
    <div class="course-wrap mt40">
      <ul class="course-box">
        <li v-for="list in courseLists" class="course-item">
          <course-cell :list="list" :to="'/live/'+list.id" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Category from '../components/Category';
  import CourseCell from "../components/CourseCell";
  import { CourseClass } from '../config';
  export default {
    data () {
      return {
        categoryLists: [],
        courseLists: []
      }
    },
    created() {
      this.categoryLists = CourseClass;
      this.courseLists = [
        {
        id: 1,
        img: "http://f.cdn.xsteach.cn/uploaded/ce/d9/61/ced961660d86289b09660f4b446bdcc4001.jpg",
        title: "揭开Photoshop的神秘面纱",
        content: "主讲：蓝翔　｜　管理类"
      },
      {
        id: 1,
        img: "http://f.cdn.xsteach.cn/uploaded/ce/d9/61/ced961660d86289b09660f4b446bdcc4001.jpg",
        title: "Photoshop",
        content: "主讲: jacky　｜　管理类"
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
