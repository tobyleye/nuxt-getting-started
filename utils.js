import axios from 'axios'

export const fetchPosts = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    return res.data
  })
}

export const fetchPost = async (id) => {
  return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then((res) => {
    return res.data
  })
}
