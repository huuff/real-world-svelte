<script lang="ts">
  import StoreSetterForm from "$lib/StoreSetterForm.svelte";
  import { undoRedo } from "$lib/undo-redo";
  import { writable } from "svelte/store";

  const store = undoRedo(writable(0));

  store.subscribe((val) => console.log(`new val: ${val}`));
</script>

<StoreSetterForm {store} />
<div>
  <button on:click={store.undo}>Undo</button>
  <button on:click={store.redo}>Redo</button>
</div>
