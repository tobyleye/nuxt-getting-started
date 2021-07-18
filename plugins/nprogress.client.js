import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

axios.interceptors.request.use((config) => {
  NProgress.start()
  return config
}, err => {
  NProgress.done();
  return Promise.reject(err);
})

axios.interceptors.response.use((response) => {
  NProgress.done()
  return response
}, err => {
  NProgress.done()
  return Promise.reject(err);
})
