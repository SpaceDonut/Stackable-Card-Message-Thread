export type RatingType = "high" | "low" | "";

export interface Rating {
  HIGH: RatingType;
  LOW: RatingType;
}

export const RATING: Rating = {
  HIGH: "high",
  LOW: "low",
};

export type ClassesType = "high-rating" | "low-rating";

export interface CssClasses {
  HIGH_RATING: ClassesType;
  LOW_RATING: ClassesType;
}

export const CSS_CLASSES: CssClasses = {
  HIGH_RATING: "high-rating",
  LOW_RATING: "low-rating",
};
