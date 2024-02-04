import { writable } from "svelte/store";
import { onMount } from "svelte";

export function startCounterOnMount() {
  const counter = writable(0);

  onMount(() => {
    const intervalId = setInterval(() => counter.update($counter => $counter+1), 1000);
    return () => clearInterval(intervalId);
  });

  return counter;
}