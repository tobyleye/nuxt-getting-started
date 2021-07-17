<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
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
