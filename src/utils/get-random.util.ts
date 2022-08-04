export const getRandom = <R extends unknown>(arr: unknown[]): R => {
  const random = Math.floor(Math.random() * arr.length);

  return arr[random] as R;
};
