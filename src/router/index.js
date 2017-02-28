import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'
import StudyPlan from 'views/StudyPlan'
import MyExam from 'views/MyExam'
import LiveCourse from 'views/LiveCourse'
import CourseDetail from 'views/CourseDetail'
import CourseLibrary from 'views/CourseLibrary'
import Message from 'views/Message'
import LiveDetail from 'views/LiveDetail'
import NoFound from 'views/NoFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '',
      redirect: Home
    },
    {
      path: '/studyplan',
      component: StudyPlan
    },
    {
      path: '/myexam',
      component: MyExam
    },
    {
      path: '/livecourse',
      component: LiveCourse
    },
    {
      path: '/courselibrary',
      component: CourseLibrary
    },
    {
      path: '/coursedetail/:id',
      component: CourseDetail
    },
    {
      path: '/message',
      component: Message
    }, 
    {
      path: '/live/:id',
      component: LiveDetail
    },
    {
      path: "*",
      component: NoFound
    }
  ]
})
