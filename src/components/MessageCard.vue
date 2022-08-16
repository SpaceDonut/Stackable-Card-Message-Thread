<script setup lang="ts">
import { Message } from "../assets/types";
import { getDateFormat } from "../utils/formatDateUtils";
import { ref, onMounted } from "vue";
import { changeSubjectColor } from "../utils/messageCardUtils";

const props = defineProps<{
  message: Message;
}>();

const dayAndMonthFormat = ref(getDateFormat(props.message.created_at));
let ratingClassObject = ref("");

onMounted(() => {
  if (props.message.score !== undefined) {
    ratingClassObject.value = changeSubjectColor(props.message.score);
  }
});
</script>

<template>
  <div class="message-container">
    <div class="row">
      <div class="subject" :class="ratingClassObject">
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
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
