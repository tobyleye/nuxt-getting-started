<template>
  <div class="bg-gray-300 min-h-screen w-full grid items-center">

    <div class="w-2/5 mx-auto mt-5 bg-white py-3 px-5 rounded">
        <p>{{ $auth.loggedIn }}</p>
        <p v-if="error" class="text-red-500 my-3 text-center text-sm">Ooops! bad credentials.</p>

      <form @submit.prevent="login">
        <h3 class="text-2xl mb-4 text-center">
          Login
        </h3>
        <div class="">
          <label for="email">
            Email:
            <input
              v-model="form.email"
              required
              class="block w-full border border-gray-300 rounded px-3 py-2"
              type="email"
              placeholder="email address"
            >
          </label>
          <label for="password">
            Password:
            <input
              v-model="form.password"
              required
              class="block w-full border border-gray-300 rounded px-3 py-2"
              type="password"
              placeholder="password"
            >
          </label>
          <button
            class="
              mt-5
              bg-green-400
              text-white
              px-2
              py-2
              w-full
              block
              rounded
              cursor
            "
          >
            login
          </button>
        </div>
        <p class="text-center mt-2 text-sm">
          don't have an account? consider
          <nuxt-link :to="{ name: 'register' }">
            registering
          </nuxt-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  data () {
    return {
      form: {
        email: 'johndoe@gmail.com',
        password: 'password'
      },
      error: false
    }
  },
  methods: {
    async login () {
        this.error = false;
      try {
        const res = await this.$auth.loginWith('cookie', { data: this.form })
        this.$auth.setUser(this.form)

        console.log('login successful:', res)
        this.$router.push({ name: 'index' })
      } catch (err) {
          this.error = true;
        console.log('login failed', err)
      }
    }
  }
}
</script>
