import { fetchPosts as $fetchPosts, fetchPost as $fetchPost } from '@/utils'

export const state = () => ({
  posts: [],
  post: null
})

export const mutations = {
  setPosts (state, payload) {
    state.posts = payload
  },
  setPost (state, payload) {
    state.post = payload
  }
}

export const actions = {
  async fetchPosts (context) {
    const posts = await $fetchPosts()
    context.commit('setPosts', posts)
  },

  async fetchPost ({ commit }, id) {
    const post = await $fetchPost(id)
    commit('setPost', post)
  }
}
