<template>
  <div>
    <h3>Top rated posts</h3>
    <ul>
      <li v-for="post in posts" :key="post.id" class="mb-2 border-gray-100 rounded p-4">
        <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">
          <h3>{{ post.title }}</h3>
        </nuxt-link>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <previous-post />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PreviousPost from '@/components/PreviousPost.vue'
export default {
  computed: mapState(['posts']),
  components: {
    PreviousPost
  },
  fetch () {
    return this.$store.dispatch('fetchPosts')
  }
}
</script>
