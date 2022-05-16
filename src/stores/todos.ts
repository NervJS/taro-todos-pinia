import { defineStore } from 'pinia'

export const useTodosStore = defineStore<'todos'>('todos', {
  state: () => ({
    todos: [],
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
      this.todos[idx].type === 'active' ? 'compeleted' : 'active'
    },
    removeCompeletedTodos () {
      this.todos = this.todos.filter(item => item.type === 'active')
    },
    setFilter (current) {
      this.filter = current
    }
  }
})
