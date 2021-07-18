<template>
  <div class="w-4/5 md:w-3/5 mx-auto mt-5">
    <div class="flex justify-between items-center mb-8">
      <h3 class="text-2xl font-bold">Top rated posts</h3>
      <button @click="removeCookie">logout</button>
    </div>

    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
        class="mb-5 border-b border-gray-200 pb-2 rounded"
      >
        <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">
          <h3 class="text-2xl font-bold capitalize text-green-500">
            {{ post.title }}
          </h3>
        </nuxt-link>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <previous-post />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PreviousPost from "@/components/PreviousPost.vue";
export default {
  computed: mapState(["posts"]),
  components: {
    PreviousPost,
  },
  fetch() {
    return this.$store.dispatch("fetchPosts");
  },
  methods: {
    removeCookie() {
      try {
         this.$auth.logout();
      } catch(err) {
        console.log('err:', err)
      } finally {
         this.$router.push({ name: "login" });
      }
     
     
    },
  },
};
</script>
