export type RatingType = "HIGH" | "LOW" | "";

export interface Rating {
  HIGH: RatingType;
  LOW: RatingType;
}

export const RATING: Rating = {
  HIGH: "HIGH",
  LOW: "LOW",
};

export const CSS_CLASSES = {
  HIGH_RATING_POPUP: "popup-high-rating-color",
  LOW_RATING_POPUP: "popup-low-rating-color",
  HIGH_RATING_SUBJECT: "high-rating-subject",
  LOW_RATING_SUBJECT: "low-rating-subject",
};
