<script setup lang="ts">
import { reactive } from "vue";
import { THREADS } from "../assets/data";
import { Threads } from "../assets/types";

const threadList = reactive<Threads>(THREADS);
</script>

<template>
  <div class="hello">
    <h1>{{ threadList.length && threadList[0][0].question }}</h1>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
