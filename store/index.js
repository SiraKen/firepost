export const state = () => ({
  isLoggingIn: false,
  user: {
    uid: '',
    email: '',
    emailVerified: ''
  }
})

export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  }
}

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // perform logout operations
      state.isLoggingIn = false
      state.user = {}
    } else {
      // Do something with the authUser and the claims object...
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified }
      state.isLoggingIn = true
    }
  }
}
