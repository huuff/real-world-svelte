<script lang="ts">
  import { createAutoCounter, createCounter } from "$lib/counter.svelte";

  const manualCounter = createCounter();
  const autoCounter = createAutoCounter(1000);
</script>

<section>
  <span>Manual Counter: {manualCounter.count}</span>
  <button on:click={manualCounter.increase}>Increase</button>
  <button on:click={manualCounter.reset}>Reset</button>
</section>

<section>
  <span>Auto Counter: {autoCounter.count}</span>
  <button on:click={autoCounter.resume} disabled={autoCounter.enabled}>Start</button>
  <button on:click={autoCounter.stop} disabled={!autoCounter.enabled}>Stop</button>
</section>
