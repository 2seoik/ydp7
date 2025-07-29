// src/sum.ts
export const sum = (...args: number[]) => {
  return args.reduce((acc, n) => acc + n, 0);
};
