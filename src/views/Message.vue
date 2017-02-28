<template>
  <div class="message-wrap">
    <my-header title="消息"></my-header>
    <div class="message-lists">
      <message-cell v-for="message in messages" :message="message"></message-cell>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.message-wrap {
  background: #f0f4f8;
}
.message-lists {
  margin-top: 60px;
  padding: 0 15px;
}
</style>
<script>
import MessageCell from "../components/MessageCell";
  export default {
    data () {
      return {
        messages: []
      }
    },
    created () {
      this.messages = [
        {
          type: 1,
          title: "新的学习任务通知",
          saying: "安东尼",
          content: "您有新的学习任务需要处理，请于2017.03.13之前完成",
          time: "2017.02.13 11:30",
          person: "蓝翔"
        },
         {
          type: 2,
          title: "新的学习任务通知",
          saying: "安东尼",
          content: "您有新的学习任务需要处理，请于2017.03.13之前完成",
          time: "2017.02.13 11:30",
          person: "蓝翔"
        }
      ]
    },
    components: {
      MessageCell
    }
  }
</script>