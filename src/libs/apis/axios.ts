import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10_000
})

// TODO : 여기다가 middleware써주시면 될 것 같습니다!
