<script lang="ts">
  import { writable, type Writable } from "svelte/store";

  const debounce: <T>(store: Writable<T>) => Writable<T> = <T,>(store: Writable<T>) => {
    const debounced = writable<T>();
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const subscribe: (typeof debounced)["subscribe"] = (fn) => {
      const debouncedUnsubscribe = debounced.subscribe(fn);
      const unsubscribe = store.subscribe((value) => {
        if (timeoutId !== null) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          timeoutId = undefined;
          debounced.set(value);
        }, 200);
      });

      return () => {
        debouncedUnsubscribe();
        unsubscribe();
      };
    };

    return {
      ...store,
      subscribe,
    };
  };

  const store = debounce(writable(0));
</script>

<input type="number" bind:value={$store} />
<span>{$store}</span>
