<!--
 * @Description: 
 * @Author: wgy
 * @CreateTime: 2022-10-11 12:00:15
 * @UpdateTime: 2022-10-11 12:00:16
 * @FilePath: \HongYe-Vue\src\views\redirect.vue
-->
<script>
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
