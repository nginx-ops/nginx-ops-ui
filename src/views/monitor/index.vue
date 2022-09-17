<template>
  <div>我是monitor页面</div>
</template>
// http://49.232.174.49:9988/conf/info/template/ //
http://wthrcdn.etouch.cn/weather_mini 天气查询接口
<script>
export default {
  name: "monitor",
  // 挂载生命周期
  mounted() {
    // aixos请求
    this.$http
      .post("http://49.232.174.49:9988/conf/info/comm", [
        {
          type: "我是type",
          name: "张三a",
          value: "我是value",
        },
      ])
      .then(function (response) {
        // 处理成功情况
        console.log(response, "post成功");
      })
      .catch(function (error) {
        // 处理错误情况
        console.log(error, "post失败");
      })
      .then(function () {
        // 总是会执行
      });
    // this.$http
    //   .get("http://49.232.174.49:9988/conf/info/template/")
    //   .then(function (response) {
    //     // 处理成功情况
    //     console.log(response, "get成功");
    //   })
    //   .catch(function (error) {
    //     // 处理错误情况
    //     console.log(error, "get失败");
    //   })
    //   .then(function () {
    //     // 总是会执行
    //   });
  },
};
</script>

<style></style>
