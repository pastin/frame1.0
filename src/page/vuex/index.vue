
<template>
  <div id="vuexdemo">
      
      <h1>getters 获取</h1>
      <h1>{{getChangedNum}}</h1>
  </div>
</template>

<script>
export default {
  name: "vuexdemo",
  data()  {
    return {
    }
  },
  mounted(){
      console.log(this.$store);
      
  },
  computed:{
    isShow() {
        return this.$store.getters.isShow;
    },
    getChangedNum(){
        return this.$store.getters.getChangedNum;
    },
    getNewNum(){
        this.$store.dispatch('getNewNum', 20)
    }
  },
  watch:{
      $route(to,from){ //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
          console.log(to)
        if(to.name=='book'||to.name=='my'){ // to.name来获取当前所显示的页面，从而控制该显示或隐藏footerBar组件
           this.$store.dispatch('showFooter') // 利用派发全局state.showFooter的值来控制        }else{
           this.$store.dispatch('hideFooter')
        }
      },
      getNewNum(){
          this.$store.dispatch('getNewNum', 20)
      }
  }
};
</script>