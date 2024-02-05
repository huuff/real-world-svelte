import { get, writable, derived } from "svelte/store";

export function createPopupManager() {
  const count = writable(0);
  const isLocked = derived(count, it => it > 0, false);

  const createPopup = () => count.update(it => it+1);
  const removePopup = () => count.update(it => it > 0 ? it-1 : it );

  // const isLocked = () => get(count) > 0;

  return { createPopup, removePopup, isLocked }
}
