<script setup lang="ts">
import { Message } from "../assets/types";

const props = defineProps<{
  message: Message;
}>();
</script>

<template>
  <div class="message-container">
    <div class="row">
      <div class="subject">
        {{ props.message.subject }}
      </div>
      <div class="team">{{ props.message.team }}</div>
    </div>
    <div class="row">
      <div class="question">{{ props.message.question }}</div>
      <div class="created">{{ props.message.created_at }}</div>
    </div>
    <div class="text">{{ props.message.text }}</div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
