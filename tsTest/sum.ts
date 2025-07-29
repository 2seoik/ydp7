export const sum = (...args: []): string => {
  return args.reduce((acc, a) => acc + a, 0);
};
