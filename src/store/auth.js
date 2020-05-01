import firebase from 'firebase'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },

    async register({ dispatch, commit }, { name, email, password }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)

        const uid = await dispatch('getUserId')

        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name
        })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },

    getUserId() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },

    async logout() {
      await firebase.auth().signOut()
    }
  },
  modules: {
  }
}
