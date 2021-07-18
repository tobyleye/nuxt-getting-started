<template>
  <div class="bg-gray-300 min-h-screen w-full grid items-center">
    <div class="w-2/5 mx-auto mt-5 bg-white py-3 px-5 rounded">
        <p v-if="error" class="text-red-500 my-3 text-center text-sm">Ooops! credentials probably exist</p>
      <form @submit.prevent="register">
        <h3 class="text-2xl mb-4 text-center">Register</h3>
        <div class="">
          <label for="email">
            Email:
            <input
              v-model="form.email"
              required
              class="block w-full border border-gray-300 rounded px-3 py-2"
              type="email"
              placeholder="email address"
            />
          </label>
          <label for="password">
            Password:
            <input
              v-model="form.password"
              required
              class="block w-full border border-gray-300 rounded px-3 py-2"
              type="password"
              placeholder="password"
            />
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
            Register
          </button>

          <p class="text-center mt-2 text-sm">
            already have an account?
            <nuxt-link :to="{ name: 'login' }"> login </nuxt-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  auth: "guest",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: false
    };
  },
  methods: {
    async register() {
      this.error = false;
      try {
        let data = await this.$axios.post("/register", this.form);
        console.log("signup successful -->", data);
        this.$router.push({ name: "login" });
      } catch (error) {
          this.error = true
      }
    },
  },
};
</script>
