<template>
  <div v-if="post" class="w-3/5 mx-auto mt-5">
    <h2 class="text-green-500 mb-2 text-2xl capitalize mb-2">
      {{ post.title }}
    </h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  fetch () {
    return this.$store.dispatch('fetchPost', this.$route.params.id)
  },
  computed: {
    ...mapState(['post'])
  },
  mounted () {}
}
</script>
