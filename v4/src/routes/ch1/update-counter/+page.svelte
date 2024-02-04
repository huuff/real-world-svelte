<script lang="ts">
 import { afterUpdate } from "svelte";
 import { createUpdateCounter } from "$lib/update-counter.ts";

 // let updateCount = 0;
 // let measuring = false;
 // 
 //  afterUpdate(() => {
 //      if (measuring) {
 //          updateCount++;
 //      }
 //  });
 // 
 // function startMeasuring() {
 //     updateCount = 0;
 //     measuring = true;
 // }
 // 
 // function stopMeasuring() {
 //     measuring = false;
 // }

 const { updateCount, startMeasuring, stopMeasuring } = createUpdateCounter();

 let counter = 0;
</script>
<p>
    <button on:click={startMeasuring}>Measure</button>
    <button on:click={stopMeasuring}>Stop</button>
    <span>Updated {$updateCount}</span>
</p>
<p>
    <button on:click={() => counter++}>Click counter: {counter}</button>
</p>


