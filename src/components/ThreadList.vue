<script setup lang="ts">
import { ThreadsList, Message, MessageWithCollapsed } from "../assets/types";
import MessageCard from "./MessageCard.vue";
import { API } from "../consts/apiConsts";
import axios from "axios";
import { ref, reactive, onMounted } from "vue";
import { createCollapsedThreadList } from "../utils/threadListUtils";

interface Threads {
  list: ThreadsList;
}

const threads: Threads = reactive({
  list: [],
});

const forceUpdate = ref(0);

const getThreadList = async () => {
  try {
    const result = await axios.get(API.GET_THREADS_URL);
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

const onClickHandler = (messageClicked: Message | MessageWithCollapsed) => {
  threads.list = createCollapsedThreadList(threads.list, messageClicked);
  forceUpdate.value++;
};

onMounted(async () => {
  const threadList = await getThreadList();
  const collapsableThreadList = createCollapsedThreadList(threadList);
  threads.list = collapsableThreadList;
});
</script>

<template>
  <div class="top-container" :key="forceUpdate">
    <ul>
      <li v-for="(messages, i) in threads.list" :key="i">
        <ul class="thread-list">
          <MessageCard
            v-for="message in messages"
            :key="message.id"
            :message="message"
            :messageNumber="messages.length"
            @onClickMessageCard="onClickHandler"
          />
        </ul>
      </li>
    </ul>
  </div>
</template>
