export type InferDtoType<T> = {
  [K in keyof T]: T[K] extends { [P in keyof T[K]]: any }
    ? T[K]
    : T[K] extends (...args: any[]) => any
      ? ReturnType<T[K]>
      : T[K];
};
