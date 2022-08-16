<script setup lang="ts">
import { Threads } from "../assets/types";

const props = defineProps<{
  threadList: Threads;
}>();
</script>

<template>
  <div class="top-container">
    <ul>
      <li v-for="(threads, i) in props.threadList" :key="i">
        <div v-for="thread in threads" :key="thread.id">
          {{ thread }}
        </div>
      </li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
