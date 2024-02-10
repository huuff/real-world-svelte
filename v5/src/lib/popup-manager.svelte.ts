export function createPopupManager() {
  let count = $state(0);
  let isLocked = $derived(count > 0);

  const createPopup = () => (count += 1);
  const removePopup = () => (count = Math.max(0, count - 1));

  return {
    get count() {
      return count;
    },
    get isLocked() {
      return isLocked;
    },
    createPopup,
    removePopup,
  };
}
