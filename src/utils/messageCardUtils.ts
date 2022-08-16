import { CSS_CLASSES } from "../consts/messageConsts";

export const changeSubjectColor = (score: number) => {
  if (score <= 5) {
    return CSS_CLASSES.LOW_RATING;
  } else {
    return CSS_CLASSES.HIGH_RATING;
  }
};
