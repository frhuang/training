import Vue from 'vue'
import axios from 'axios'

const DEBUG = process.env.NODE_ENV;
console.log(DEBUG);
const API_URL = DEBUG == 'development' ? '' : 'https://mainsite-restapi.ele.me';

/**
 * 获取首页数据
 */
export const getIndexData = () => axios.get(`${API_URL}/v1/cities`, { type: 'hot'});

/**
 * 获取学习任务数据接口
 */
export const getStudyTask = () => axios.get('', {});

/**
 * 获取我的考试数据接口
 */
export const getMyExam = () => axios.get('', {});

/**
 * 我的直播课列表数据
 */
export const getLiveList = () => axios.get('', {});

/**
 * 获取课程库
 */
export const getCourseList = () => axios.get('', {});

/**
 * 获取消息
 */
export const getMessageList = () => axios.get('', {});

/**
 * 获取所有课程选项
 */
export const getCategoryList = () => axios.get('', {});





