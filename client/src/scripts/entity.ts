const KindEnum = {
  player: "player",
  gun: "gun",
  bullet: "bullet",
} as const;

type KindType = (typeof KindEnum)[keyof typeof KindEnum];

export type Entity = {
  kind: KindType;
  x: number;
  y: number;
};
