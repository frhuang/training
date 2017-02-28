<template>
  <div class="studyplan">
    <my-header title="学习任务"></my-header>
    <mt-navbar v-model="selected" class="mt40">
      <mt-tab-item id="1">未完成</mt-tab-item>
      <mt-tab-item id="2">已完成</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <task-list v-for="arr in undoneData" :content="arr" type="1"></task-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <task-list v-for="arr in completedData" :content="arr" type="2"></task-list>
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
  import { getIndexData } from "../service/getData";
  export default {
    data () {
      return {
        selected: "1",
        undoneData: [],
        completedData: []
      }
    },
    created () {
      // console.log(MainLists)
      this.undoneData = MainLists.filter((list) => {
        return list.type === 1;
      });
      this.completedData =  MainLists.filter((list) => {
        return list.type === 2;
      });;
      this.fetchData();
    },
    methods: {
      fetchData () {
        console.log(getIndexData);
        getIndexData().then((data) => {
          console.log(data)
        })
      }
    },
    components: {
      TaskList
    }
  }
</script>
