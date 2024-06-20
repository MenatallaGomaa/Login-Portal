<template>
  <div class="container">
    <div class="left">
      <form class="form" @submit.prevent="handleLoginSubmit">
        <h1>Login</h1>
        <div class="input-block">
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            class="input"
            autocomplete="off"
            placeholder="Email"
          />
        </div>
        <div class="input-block">
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            class="input"
            autocomplete="off"
            placeholder="Password"
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
    <div class="right">
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <div class="img">
        <!-- Your SVG or image here -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, inject } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const API_URL = import.meta.env.VITE_API_URL

export default {
  name: 'LoginPage',
  setup() {
    const email = ref('')
    const password = ref('')
    const errorMessage = ref(undefined)

    const router = useRouter()
    const { storeToken, authenticateUser } = inject('authContext')

    const handleLoginSubmit = () => {
      const requestBody = { email: email.value, password: password.value }

      axios
        .post(`${API_URL}/auth/login`, requestBody)
        .then((response) => {
          console.log('JWT token', response.data.authToken)
          storeToken(response.data.authToken)
          authenticateUser()
          router.push('/')
        })
        .catch((error) => {
          const errorDescription = error.response.data.message
          errorMessage.value = errorDescription
        })
    }

    return {
      email,
      password,
      errorMessage,
      handleLoginSubmit
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
}

.left,
.right {
  flex: 1;
  padding: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-block {
  margin-bottom: 15px;
}

.input {
  width: 100%;
  padding: 10px;
}

button {
  padding: 10px;
  cursor: pointer;
}

.error-message {
  color: red;
}

.img {
  /* Your styles here */
}
</style>
