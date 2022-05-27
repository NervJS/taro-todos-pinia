<template>
  <view class="main">
    <TodoList></TodoList>
    <Footer></Footer>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from '@/components/TodoList.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  components: {
    TodoList,
    Footer
  }
})
</script>

<style lang="scss">
.main {
  position: relative;
  z-index: 2;
  border-top-width: 1px;
  border-style: solid;
  border-top-color: #e6e6e6;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
}
</style>
