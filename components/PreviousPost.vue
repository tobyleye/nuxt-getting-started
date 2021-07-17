<template>
  <div class="fixed  text-sm container bg-white border-gray-200 border  p-4 rounded  ">
    <div class="border-b border-gray-100 pb-1 text-sm mb-4">
      Previous Post
    </div>
    <div v-if="post">
      <h3 class="font-semibold mb-2">
        {{ post.title }}
      </h3>
      <p>{{ post.body }}</p>
    </div>
    <div v-else>
      no post selected yet
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['post'])
  }
}
</script>

<style scoped>
    .container {
        bottom: 10px;
        right: 10px;
        width: 300px;
    }
</style>
