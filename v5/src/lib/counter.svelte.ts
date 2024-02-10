import { onMount } from "svelte";

/**
 * Creates a manual counter that can be incremented or reset
 */
export function createCounter() {
  let count = $state(0);
  const increase = () => (count += 1);
  const reset = () => (count = 0);

  return {
    get count() {
      return count;
    },
    increase,
    reset,
  };
}

/**
 * Creates a counter that's incremented on an interval
 */
export function createAutoCounter(intervalMillis?: number) {
  const actualInterval = intervalMillis ?? 1000;

  let count = $state(0);
  let enabled = $state(true);

  let stop = () => (enabled = false);
  let resume = () => {
    enabled = true;
    count = 0;
  };

  onMount(() => {
    const intervalId = setInterval(() => {
      if (enabled) {
        count++;
      }
    }, actualInterval);
    return () => clearInterval(intervalId);
  });

  return {
    get count() {
      return count;
    },
    get enabled() {
      return enabled;
    },
    stop,
    resume,
  };
}
