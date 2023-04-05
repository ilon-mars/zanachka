export function useLocalStorage(key: string, item: unknown) {
  const get = () => {
    if (localStorage.getItem(key) !== undefined) {
      const item = localStorage.getItem(key);

      return JSON.parse(item);
    }
  };

  const set = () => {
    localStorage.setItem(key, JSON.stringify(item));
  };

  const remove = () => {
    if (localStorage.getItem(key) !== undefined) localStorage.removeItem(key);
  };

  return { get, set, remove };
}
