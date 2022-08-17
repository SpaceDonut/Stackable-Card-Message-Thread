<script setup lang="ts">
import { Message, MessageWithCollapsedAndPopup } from "../assets/types";
import { getDateFormat } from "../utils/formatDateUtils";
import { ref, onMounted } from "vue";
import { changeSubjectColor } from "../utils/messageCardUtils";
import MessageCornerPopup from "./MessageCornerPopup.vue";

const props = defineProps<{
  message: Message | MessageWithCollapsedAndPopup;
  messageNumber: number;
}>();

const emit = defineEmits(["onClickMessageCard"]);

const dayAndMonthFormat = ref(getDateFormat(props.message.created_at));
let ratingClass = ref("");
let stackedClass = ref("");
let showMessagePopup = ref(false);

const emitOnClickMessage = (
  message: Message | MessageWithCollapsedAndPopup
) => {
  emit("onClickMessageCard", message);
};

onMounted(() => {
  if (props.message.score !== undefined) {
    ratingClass.value = changeSubjectColor(props.message.score);
  }
  if ("collapsed" in props.message) {
    stackedClass.value = props.message.collapsed ? "" : "stacked";
  }
  if ("showMessagePopup" in props.message) {
    showMessagePopup.value = props.message.showMessagePopup
      ? props.message.showMessagePopup
      : false;
  }
});
</script>

<template>
  <div
    class="message-container"
    :class="stackedClass"
    v-on:click="emitOnClickMessage(props.message)"
  >
    <div>
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
    <MessageCornerPopup
      :messageNumber="props.messageNumber"
      :showMessagePopup="showMessagePopup"
    />
  </div>
</template>
