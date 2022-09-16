<template>
  <el-container style="height: 100%">
    <el-header>Header</el-header>
    <el-container style="">
      <el-aside width="200px">
        <common-aside></common-aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside";

export default {
  name: "Main",
  components: {
    CommonAside,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-header {
  background-color: #545c64;
}
.el-main {
  padding-top: 0;
}
</style>
