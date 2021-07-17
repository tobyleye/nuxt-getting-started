<template>
  <div class="mt-40 center text-center">
    <h3 class="text-2xl mb-2">
      Helloworld
    </h3>
    <button class="bg-green-500 text-white rounded-md px-2 py-2 text-sm shadow-md w-32" @click="times++">
      click me ({{ times }})
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      times: 0
    }
  }
}
</script>
