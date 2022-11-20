import request from './base.service'

export const fetchPosts = () => {
  return request
    .get('/posts')
    .then(res => [null, res.data])
    .catch(err => [err])
}