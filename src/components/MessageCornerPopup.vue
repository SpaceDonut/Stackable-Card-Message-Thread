<script setup lang="ts">
const props = defineProps<{
  messageNumber: number;
}>();
</script>

<template>
  <div class="message-corner-popup-container">
    {{ props.messageNumber }}
  </div>
</template>
