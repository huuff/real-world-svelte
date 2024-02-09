<script lang="ts">
  import { writable, type Writable } from "svelte/store";

  type Tween = {
    readonly initialValue: number;
    readonly totalDurationMillis?: number;
    readonly iterationDurationMillis?: number;
  };

  const createTweenedStore: (tween: Tween) => Writable<number> = ({
    initialValue,
    totalDurationMillis = 5000,
    iterationDurationMillis = 1000,
  }) => {
    const iterations = totalDurationMillis / iterationDurationMillis;

    if (iterations < 1) {
      throw new Error(
        `Iteration duration (${iterationDurationMillis}) can't be longer than total duration (${totalDurationMillis})`
      );
    }

    const store = writable(initialValue);
    let pastIterations = 0;
    let updateIntervalId: ReturnType<typeof setInterval>;

    const set: (typeof store)["set"] = (newVal) => {
      clearInterval(updateIntervalId);
      pastIterations = 0;
      setInterval(() => {
        // TODO: Actual tween using newVal

        store.update((val) => val + 1);
        pastIterations++;

        if (pastIterations >= iterations) {
          pastIterations = 0;
          clearInterval(updateIntervalId);
        }
      }, iterationDurationMillis);
    };

    return {
      ...store,
      set,
    };
  };

  const tweenedStore = createTweenedStore({ initialValue: 0 });
  tweenedStore.set(10);
</script>

<span>{$tweenedStore}</span>
