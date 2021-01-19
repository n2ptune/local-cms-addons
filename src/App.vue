<template>
  <el-container>
    <Menus />
    <el-main>
      <div>
        {{ 'body'.repeat(123) }}
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Menus from '@/components/layouts/Menus.vue'

export default {
  components: {
    Menus
  },

  setup() {
    console.log('setup')
  }
}
</script>

<style lang="scss" scoped></style>
