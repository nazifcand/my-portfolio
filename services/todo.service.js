import request from './base.service'

export const fetchTodos = () => {
  return request
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(res => [null, res.data])
    .catch(err => [err])
}