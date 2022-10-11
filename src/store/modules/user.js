import adminApi from '@/api/adminApi'
import { getToken, setToken, removeToken } from '@/utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    permissions: [],
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 登陆
  login({ commit }, loginForm) {
    return new Promise((resolve, reject) => {
      adminApi.login(loginForm).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.tokenValue)
        setToken(data.tokenValue)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取用户详细信息
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      adminApi.getInfo().then(response => {
        const { data } = response

        if (!data) {
          return reject('用户信息获取失败')
        }
        // 解析data中的信息
        const { sysUser, permList, sysRoleList } = data

        if (sysRoleList && sysRoleList.length > 0) { // 验证返回的roles是否是一个非空数组
          commit('SET_ROLES', sysRoleList)
          commit('SET_PERMISSIONS', permList)
        } else {
          commit('SET_ROLES', ['ROLE_DEFAULT'])
        }
        commit('SET_NAME', sysUser.nickName)
        commit('SET_AVATAR', sysUser.avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 退出
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      adminApi.logout().then(() => {
        removeToken()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  // resetToken({ commit }) {
  //   return new Promise(resolve => {
  //     removeToken() // must remove  token  first
  //     commit('RESET_STATE')
  //     resolve()
  //   })
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

