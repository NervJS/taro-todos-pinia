<template>
  <view class="filters">
    <view v-for="item in filters" :key="item" class="filters-item" @tap="onSelected(item)">
      <text :class="['filters-link', filter === item && 'selected']" >
        {{ upperFirstLetter(item) }}
      </text>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodosStore } from '@/stores/todos'

export default defineComponent({
  setup() {
    const store = useTodosStore()
    const { filter } = storeToRefs(store)
    const filters = reactive(['all', 'active', 'compeleted'])

    function onSelected (current) {
      store.setFilter(current)
    }

    function upperFirstLetter (str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return {
      filter,
      filters,
      onSelected,
      upperFirstLetter
    }
  }
})
</script>

<style lang="scss">
.filters {
  display: flex;
  font-weight: 400;
  margin: 0;
  padding: 0;
  flex-direction: row;
  background-color: #F5F5F5;
}
.filters-item {
  margin: 6px;
}
.filters-link {
  display: flex;
  padding: 6px 14px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: 6px;
  &:hover {
    border-color:  #efd5d5;
  }
  &.selected {
    border-color:  #efd5d5;
    border-width: 2px;
  }
}
</style>
