import type { Todo } from './todoType'
import { api } from '../axios'

export const TodoApi = {
  GET_ALL_TODOS: async (): Promise<Todo[]> => {
    try {
      const allTodos = await api.get('/todos')
      return allTodos.data
    } catch {
      throw new Error('Error getting all todos')
    }
  },
  GET_TODO: async (todoId: number): Promise<Todo> => {
    try {
      const todo = await api.get(`/todos/${todoId}`)
      return todo.data
    } catch {
      throw new Error('Error getting todo')
    }
  }
}
