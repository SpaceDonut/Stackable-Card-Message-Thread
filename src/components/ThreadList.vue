<script setup lang="ts">
import { ThreadsList } from "../assets/types";
import MessageCard from "./MessageCard.vue";
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
  const threadList = await getThreadList();
  threads.list = threadList;
});
</script>

<template>
  <div class="top-container">
    <ul>
      <li v-for="(messages, i) in threads.list" :key="i">
        <div v-for="message in messages" :key="message.id">
          <MessageCard :message="message" />
        </div>
      </li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
