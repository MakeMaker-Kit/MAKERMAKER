let random = Math.round(Math.floor(Math.random() * 100));

export const LocalStorageStore = (name: string, itemValue: any): void => {
  const mainName = `item${random}`;
  let mainValue = localStorage.setItem(`${name}`, JSON.stringify(itemValue));
  return mainValue;
};
