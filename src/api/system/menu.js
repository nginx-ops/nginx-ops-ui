import request from '@/utils/request'

export default {

  // 查询菜单详细
  getMenu(menuId) {
    return request({
      url: '/sys/menu/' + menuId,
      method: 'get'
    })
  },

  // 查询菜单按条件
  listMenu(query) {
    return request({
      url: '/sys/menu',
      method: 'get',
      data: query
    })
  },

  // 查询菜单下拉树结构
  treeMenu() {
    return request({
      url: '/sys/tree-list',
      method: 'get'
    })
  },


  //  新增菜单
  addMenu(data) {
    return request({
      url: '/sys/menu',
      method: 'post',
      data: data
    })
  },

  // 修改菜单
  updateMenu(data) {
    return request({
      url: '/sys/menu',
      method: 'put',
      data: data
    })
  },

  // 删除菜单
  delMenu(menuId) {
    return request({
      url: '/sys/menu/' + menuId,
      method: 'delete'
    })
  }

}







