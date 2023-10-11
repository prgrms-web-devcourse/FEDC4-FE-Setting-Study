import type { Todo } from './todoType'
import { api } from '../axios'

export const TODO_API = {
  GET_ALL_TODOS: async (): Promise<Todo> => {
    try {
      const allTodos = await api.get('/todos')
      return allTodos.data
    } catch {
      throw new Error(`Error fetching all todos`)
    }
  },
  GET_TODO: async (todoId: number): Promise<Todo> => {
    try {
      const todo = await api.get(`/todos/${todoId}`)
      return todo.data
    } catch {
      throw new Error(`Error fetching todo`)
    }
  }
}
