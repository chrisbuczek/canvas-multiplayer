export const DirectionEnum = {
  left: "left",
  right: "right",
} as const;

export type DirectionEnumType =
  (typeof DirectionEnum)[keyof typeof DirectionEnum];
