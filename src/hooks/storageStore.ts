let random = Math.round(Math.floor(Math.random() * 100));

export const LocalStorageStore = (itemValue: any): void => {
  const mainName = `item${random}`;
  let mainValue = localStorage.setItem(
    `${mainName}`,
    JSON.stringify(itemValue)
  );
  return mainValue;
};
