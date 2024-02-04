import { writable, get } from "svelte/store";
import { afterUpdate } from "svelte";

export function createUpdateCounter() {
  let updateCount = writable(0);
  let measuring = writable(false);

  afterUpdate(() => {
    if (get(measuring) === true) {
      updateCount.update(it => it+1);
    }
  });

  const startMeasuring = () => {
    updateCount.update(() => 0);
    measuring.update(() => true);
  };
  const stopMeasuring = () => measuring.update(() => false);

  return { updateCount, startMeasuring, stopMeasuring };
}