import request from '@/utils/request'

export default {

  // 查询角色详细
  getRole(roleId) {
    return request({
      url: '/sys/role/' + roleId,
      method: 'get'
    })
  },

  // 查询角色按条件分页
  listRole(query) {
    return request({
      url: '/sys/role/page',
      method: 'get',
      data: query
    })
  },


  //  新增角色
  addRole(data) {
    return request({
      url: '/sys/role',
      method: 'post',
      data: data
    })
  },

  // 修改角色
  updateRole(data) {
    return request({
      url: '/sys/role',
      method: 'put',
      data: data
    })
  },

  // 删除菜单
  delRole(roleId) {
    return request({
      url: '/sys/role/' + roleId,
      method: 'delete'
    })
  }

}







