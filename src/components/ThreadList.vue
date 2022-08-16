<script setup lang="ts">
import { ThreadsList } from "../assets/types";
import { API } from "../consts/apiConsts";
import axios from "axios";
import { reactive, onMounted } from "vue";

interface Threads {
  list: ThreadsList;
}

const threads: Threads = reactive({
  list: [],
});

const getThreadList = async () => {
  try {
    const result = await axios.get(API.GET_THREADS_URL);
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

onMounted(async () => {
  threads.list = await getThreadList();
});
</script>

<template>
  <div class="top-container">
    <ul>
      <li v-for="(messages, i) in threads.list" :key="i">
        <div v-for="message in messages" :key="message.id">
          {{ message }}
        </div>
      </li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
