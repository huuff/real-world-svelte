<script lang="ts">
  import { fade } from "svelte/transition";

  export let src: string | null;
</script>

<iframe {src} title="popup" transition:fade />

<style>
  iframe {
    position: absolute;
    left: 0;
    top: 100%;
  }
</style>
