<template>
  <view class="header">
    <view class="header-title-wrap">
      <text class="title">todos</text>
    </view>
    <Filters />
    <ContentInput />
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Filters from './Filters.vue'
import ContentInput from './Input.vue'

export default defineComponent({
  setup() {
  },
  components: {
    Filters,
    ContentInput
  }
})
</script>

<style lang="scss">
.title {
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.55);
}

.header-title-wrap {
  display: flex;
  background-color: #F5F5F5;
}

.textinput-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e6e6e6;
}

.textinput-wrap-icon {
  font-size: 44px;
  color: #e6e6e6;
  padding: 20px 54px 20px 54px;
  transform: rotate(90deg);
}

.todo-text-input {
  flex: 1;
}

.textinput-wrap-input {
  flex: 1;
}
</style>
