<script setup lang="ts">
const props = defineProps<{
  messageNumber: number;
  showMessagePopup: boolean;
}>();
</script>

<template>
  <div
    class="message-corner-popup-container"
    v-if="props.showMessagePopup && props.messageNumber > 1"
  >
    {{ props.messageNumber }}
  </div>
</template>
