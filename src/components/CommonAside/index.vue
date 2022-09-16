// CommonAside
<template>
  <div>
    <!-- 侧边栏 -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- 本地start -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>本地</span>
        </template>

        <el-menu-item-group>
          <el-menu-item
            @click="clickMenu(item)"
            v-for="item in menu"
            :key="item.path"
          >
            <span>{{ item.label }}</span>
          </el-menu-item>
        </el-menu-item-group>

        <!-- ----- -->
        <el-menu-item-group title="------">
          <el-menu-item index="1-3">启用配置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 本地end -->
      <!-- 系统管理 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 侧边栏菜单
      menu: [
        {
          path: "/",
          name: "monitor",
          label: "系统运行状态"
        },
        {
          path: "/basic",
          name: "basic",
          label: "基本参数配置"
        },
        {
          path: "/http",
          name: "http",
          label: "http参数配置"
        },
        {
          path: "/server",
          name: "server",
          label: "反向代理(server)"
        },
        {
          path: "/stream",
          name: "stream",
          label: "Stream参数配置"
        },
        {
          path: "/upstream",
          name: "upstream",
          label: "负载均衡(upstream)"
        },
      ],
    };
  },
  methods: {
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });
    },
  },
};
</script>

<style scoped>
.el-menu {
  height: 100vh;
  border: none;
}
</style>
