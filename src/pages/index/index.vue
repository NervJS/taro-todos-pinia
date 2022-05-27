<template>
  <view class="todoapp">
    <Header />
    <MainSection />
  </view>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import MainSection from '@/components/MainSection.vue'

export default {
  name: 'Index',
  components: {
    Header,
    MainSection
  }
}
</script>

<style lang="scss">
.todaoapp{
  background-color: white;
}
</style>
