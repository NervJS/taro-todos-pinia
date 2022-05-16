<template>
  <view class="todoapp">
    <Header />
    <!-- <MainSection /> -->
  </view>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'

export default {
  name: 'Index',
  components: {
    Header
  }
}
</script>

<style lang="scss">
.todaoapp{
  background-color: white;
}
</style>
