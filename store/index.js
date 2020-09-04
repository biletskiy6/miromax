export const state = () => ({

  // activeElement: {},
  error: null,
  isSingleMoviePage: false,
  breadcrumbs: [
    { title: 'Місця', active: false, type: 'seats' },
    { title: 'Підтвердження', active: false, type: 'confirm' },
    { title: 'Оплата', active: false, type: 'payment' },
  ]

});

export const actions = {
  // nuxtServerInit({ dispatch }) {
  //   dispatch('auth/autoLogin');
  // }
}

export const mutations = {
  setActiveBreadcrumb(state, type) {
    const breadcrumb = state.breadcrumbs.find(b => b.type === type);
    breadcrumb.active = true;
  },

  setSingleMoviePage(state) {
    state.isSingleMoviePage = true;
  },
  removeSingleMoviePage(state) {
    state.isSingleMoviePage = false;
  },

  setError(state, error) {
    state.error = error;
  },
  clearError(state) {
    state.error = null;
  }
}

export const getters = {
  error: state => state.error,
  breadcrumbs: state => state.breadcrumbs,
  isSingleMoviePage: state => state.isSingleMoviePage
}
