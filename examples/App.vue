<template>
  <div>
    <img :src="pic" style="display: block; width: 400px; margin: 50px auto" />
    <button @click="clickHandler" style="display: block; margin: 50px auto">大图查看</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { review } from '../packages'

export default defineComponent({
  name: 'App',
  setup() {
    const pic = 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'

    const clickHandler = () => {
      review(pic)
    }

    return {
      pic,
      clickHandler
    }
  }
})
</script>
