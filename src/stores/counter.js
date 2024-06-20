import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authToken: null
  }),
  actions: {
    storeToken(token) {
      this.authToken = token
      localStorage.setItem('authToken', token)
    },
    authenticateUser() {
      // Logic to authenticate user
    }
  }
})
