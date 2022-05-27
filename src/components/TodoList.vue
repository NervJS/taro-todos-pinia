<template>
  <view class="todo-list">
    <view v-for="(todo, idx) in todos" :key="idx" class="list-item">
      <view>
        <checkbox-group @change="toggleTodo(idx)">
          <label class="checkbox-label">
            <checkbox
              class="checkbox"
              :checked="todo.type === 'compeleted'"
            />
            <text style="color: #4d4d4d">{{todo.content}}</text>
          </label>
        </checkbox-group>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodosStore } from '@/stores/todos'

export default defineComponent({
  setup () {
    const store = useTodosStore()
    const { filteredTodos: todos } = storeToRefs(store)
    const { toggleTodo } = store

    return {
      todos,
      toggleTodo
    }
  }
})
</script>

<style lang="scss">
.checkbox-group {
  margin-bottom: 10px;
}
.todo-list {
	margin: 0;
	padding: 0;
}
.checkbox-label {
  display: flex;
  margin: 10px;
  flex-direction: row;
  align-items: center;
}
.checkbox {
  margin-right: 10px;
}
</style>
