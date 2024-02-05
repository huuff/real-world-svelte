<script lang="ts">
 import { createCounter, createAutoCounter, createUpdateCounter } from "$lib/counter";

 const {
     counter: manualCounter,
     increase: increaseManualCounter,
     reset: resetManualCounter
 } = createCounter();

 const {
     counter: autoCounter,
     stop: stopAutoCounter,
     resume: resumeAutoCounter,
 } = createAutoCounter();

 const {
     counter: updateCounter,
     start: startUpdateCounter,
     stop: stopUpdateCounter,
 } = createUpdateCounter();

</script>

<p>
    <button on:click={increaseManualCounter}>Increase</button>
    <span>Counter: { $manualCounter }</span>
    <button on:click={resetManualCounter}>Reset</button>
</p>

<p>
    <button on:click={resumeAutoCounter}>Resume</button>
    <span>Auto Counter: { $autoCounter }</span>
    <button on:click={stopAutoCounter}>Stop</button>
</p>
<p>
    <button on:click={startUpdateCounter}>Start</button>
    <span>Update Counter: { $updateCounter }</span>
    <button on:click={stopUpdateCounter}>Stop</button>
</p>


