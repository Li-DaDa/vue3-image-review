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
    const pic = [
      'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
      'https://up.enterdesk.com/edpic_source/53/0a/da/530adad966630fce548cd408237ff200.jpg'
    ]

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
