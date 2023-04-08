export const getFromLS = (key: string) => {
  if (localStorage.getItem(key) !== undefined) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
  }
};

export const saveToLS = (key: string, item: unknown) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const removeFromLS = (key: string) => {
  if (localStorage.getItem(key) !== undefined) localStorage.removeItem(key);
};
