// 全局自定义指令
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }
});