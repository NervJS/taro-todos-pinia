import { defineStore } from 'pinia'

type Filter = 'all' | 'active' | 'compeleted'

interface Todo {
  content: string,
  type: Filter
}

interface State {
  todos: Todo[]
  filter: Filter
}

type Getters = {
  filteredTodos(): Todo[]
  todosCount(): {
    total: number
    active: number
    compeleted: number
  }
}

interface Action {
  addTodo(content: string): void
  changeTodo(content: string, idx: number): void
  toggleTodo(idx: number): void
  compeleteAllTodos(): void
  removeCompeletedTodos(): void
  setFilter(current: Filter): void
}

export const useTodosStore = defineStore<'todos', State, Getters, Action>('todos', {
  state: () => ({
    todos: [{
      content: 'Use Pinia',
      type: 'active'
    }],
    filter: 'all'
  }),
  getters: {
    filteredTodos () {
      const filter = this.filter
      switch (filter) {
        case 'active':
        case 'compeleted':
          return this.todos.filter(item => item.type === filter)
        case 'all':
        default:
          return this.todos
      }
    },
    todosCount () {
      const todos = this.todos
      const activeCount = todos.filter(item => item.type === 'active').length
      const total = todos.length
      return {
        total,
        active: activeCount,
        compeleted: total - activeCount
      }
    }
  },
  actions: {
    addTodo (content) {
      this.todos.push({
        content,
        type: 'active'
      })
    },
    changeTodo (content, idx) {
      this.todos[idx].content = content
    },
    toggleTodo (idx) {
      const todo = this.todos[idx]
      todo.type = todo.type === 'active' ? 'compeleted' : 'active'
    },
    compeleteAllTodos () {
      const todos = this.todos
      const isAllCompeleted = todos.filter(todo => todo.type !== 'compeleted').length === 0
      this.todos.forEach(todo => {
        todo.type = isAllCompeleted ? 'active' : 'compeleted'
      })
    },
    removeCompeletedTodos () {
      this.todos = this.todos.filter(item => item.type === 'active')
    },
    setFilter (current) {
      this.filter = current
    }
  }
})
