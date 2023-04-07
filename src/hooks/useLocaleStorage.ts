export function useLocalStorage(key: string) {
  const get = () => {
    if (localStorage.getItem(key) !== undefined) {
      const item = localStorage.getItem(key);

      return JSON.parse(item);
    }
  };

  const set = (item: unknown) => {
    localStorage.setItem(key, JSON.stringify(item));
  };

  const remove = () => {
    if (localStorage.getItem(key) !== undefined) localStorage.removeItem(key);
  };

  return { get, set, remove };
}
