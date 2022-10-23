import defaultSettings from '@/settings'

const { showSettings, fixedHeader, sidebarLogo, sidebarLogoTitle, sidebarLogoUrl, loginTile } = defaultSettings

const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  sidebarLogoTitle: sidebarLogoTitle,
  sidebarLogoUrl: sidebarLogoUrl,
  loginTile: loginTile
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

