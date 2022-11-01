export const generatedId = (index: number): number => {
  const id = index + Math.round(Math.floor(Math.random() * 10));
  return id;
};
