<script lang="ts">
  import { derived, writable, type Writable } from "svelte/store";

  const debounce: <T>(store: Writable<T>) => Writable<T> = <T,>(store: Writable<T>) => {
    const debounced = derived<Writable<T>, T>(store, (value, set) => {
      let timeoutId: ReturnType<typeof setTimeout> | undefined = setTimeout(() => {
        timeoutId = undefined;
        set(value);
      }, 200);

      return () => {
        if (timeoutId !== undefined) clearTimeout(timeoutId);
      };
    });

    return {
      ...store,
      subscribe: debounced.subscribe,
    };
  };

  const store = debounce(writable(0));
</script>

<input type="number" bind:value={$store} />
<span>{$store}</span>
