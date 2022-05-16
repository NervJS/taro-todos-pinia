<template>
  <view class="textinput-wrap">
    <text class="textinput-wrap-icon">❯</text>
    <view class="textinput-wrap-input">
      <input
        class="new-todo"
        type="text"
        placeholder="What needs to be done?"
        :autofocus="true"
        confirmtype="done"
      />
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {

  }
})
</script>

<style lang="scss">
.textinput-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e6e6e6;

  &-icon {
    font-size: 44px;
    color: #e6e6e6;
    padding: 20px 54px 20px 54px;
    transform: rotate(90deg);
  }

  &-input {
    flex: 1;
  }
}
.new-todo {
  padding: 32px;
  font-size: 48px;
  font-style: italic;
  font-weight: 300;
  color: black;
  box-shadow: none;
  background: rgba(0, 0, 0, 0.003);
}
</style>
