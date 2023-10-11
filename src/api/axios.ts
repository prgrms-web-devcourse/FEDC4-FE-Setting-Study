import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10_000
})

// TODO : 여기에 필요한 미들웨어 사용
