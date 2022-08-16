<script setup lang="ts">
import { Message } from "../assets/types";
import { getDateFormat } from "../utils/formatDate";
import { ref, onMounted } from "vue";
import { RATING, RatingType, CSS_CLASSES } from "../consts/messageConsts";

const props = defineProps<{
  message: Message;
}>();

const dayAndMonthFormat = ref(getDateFormat(props.message.created_at));
const rating = ref<RatingType>("");

const changeSubjectColor = () => {
  if (rating.value === RATING.HIGH) {
    return CSS_CLASSES.HIGH_RATING_SUBJECT;
  } else {
    return CSS_CLASSES.LOW_RATING_SUBJECT;
  }
};

const changePopupColor = () => {
  if (rating.value === RATING.HIGH) {
    return CSS_CLASSES.HIGH_RATING_POPUP;
  } else {
    return CSS_CLASSES.LOW_RATING_POPUP;
  }
};

onMounted(() => {
  if (props.message.score !== undefined && props.message.score <= 5) {
    rating.value = RATING.LOW;
  } else {
    rating.value = RATING.HIGH;
  }
});
</script>

<template>
  <div class="message-container">
    <div class="row">
      <div class="subject" :class="changeSubjectColor()">
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
