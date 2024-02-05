import { afterUpdate, onMount } from "svelte";
import { get, writable } from "svelte/store";

/**
 * Creates a manual counter that can be increased or reset
 */
export function createCounter() {
  const counter = writable(0);

  const increase = () => counter.update(it => it+1);
  const reset = () => counter.set(0);

  return { counter, increase, reset };
}

/**
 * Creates a counter that's automatically increased and can be stopped and resumed
 */
export function createAutoCounter() {
  const counter = writable(0);
  const enabled = writable(true);

  const stop = () => enabled.set(false);
  const resume = () => enabled.set(true);

  onMount(() => {
    const intervalId = setInterval(() => {
      if (get(enabled)) {
        counter.update(it => it+1)
      }
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return { counter, stop, resume }
}

/**
 * Creates a counter that's increased with each render
 */
export function createUpdateCounter() {
  let counter = writable(0);
  let enabled = writable(false);

  afterUpdate(() => {
    if (get(enabled)) {
      counter.update(it => it+1);
    }
  });

  const start = () => {
    counter.update(() => 0);
    enabled.update(() => true);
  };
  const stop = () => enabled.update(() => false);

  return { counter, start, stop };
}

