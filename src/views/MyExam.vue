<template>
  <div class="studyplan">
    <my-header title="我的考试"></my-header>
    <mt-navbar v-model="selected" class="mt40">
      <mt-tab-item id="1">未完成</mt-tab-item>
      <mt-tab-item id="2">已完成</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <task-list v-for="arr in undoneData" :content="arr" type="1"></task-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <task-list v-for="arr in completedData" :content="arr" type="3"></task-list>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<style lang="scss">
  @import "../assets/css/studyplan.scss";
</style>
<script type="text/javascript">
  import TaskList from '../components/TaskList';
  import { MainLists } from '../config';
  export default {
    data () {
      return {
        selected: "1",
        undoneData: [],
        completedData: []
      }
    },
    created () {
      this.undoneData = MainLists;
      this.completedData = MainLists;
    },
    components: {
      TaskList
    }
  }
</script>
