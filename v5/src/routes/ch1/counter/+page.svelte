<script lang="ts">
  import { createAutoCounter, createCounter, createUpdateCounter } from "$lib/counter.svelte";

  const manualCounter = createCounter();
  const autoCounter = createAutoCounter(1000);
  const updateCounter = createUpdateCounter();
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

<section>
  <span>Update Counter: {updateCounter.count}</span>
  <button on:click={updateCounter.resume} disabled={updateCounter.enabled}>Start</button>
  <button on:click={updateCounter.stop} disabled={!updateCounter.enabled}>Stop</button>
</section>
