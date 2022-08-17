<script setup lang="ts">
import { Message, MessageWithCollapsed } from "../assets/types";
import { getDateFormat } from "../utils/formatDateUtils";
import { ref, onMounted } from "vue";
import { changeSubjectColor } from "../utils/messageCardUtils";

const props = defineProps<{
  message: Message | MessageWithCollapsed;
  messageNumber: number;
}>();

const emit = defineEmits(["onClickMessageCard"]);

const dayAndMonthFormat = ref(getDateFormat(props.message.created_at));
let ratingClass = ref("");
let stackedClass = ref("");

const emitOnClickMessage = (message: Message | MessageWithCollapsed) => {
  emit("onClickMessageCard", message);
};

onMounted(() => {
  if (props.message.score !== undefined) {
    ratingClass.value = changeSubjectColor(props.message.score);
  }
  if ("collapsed" in props.message) {
    stackedClass.value = props.message.collapsed ? "" : "stacked";
  }
});
</script>

<template>
  <div
    class="message-container"
    :class="stackedClass"
    v-on:click="emitOnClickMessage(props.message)"
  >
    <div class="">
      <div class="row">
        <div class="subject" :class="ratingClass">
          {{ props.message.subject }}
        </div>
        <div class="team">{{ props.message.team }}</div>
      </div>
      <div class="row">
        <div class="question">{{ props.message.question }}</div>
        <div class="created">{{ dayAndMonthFormat }}</div>
      </div>
      <div class="text">{{ props.message.text }}</div>
    </div>
  </div>
</template>
