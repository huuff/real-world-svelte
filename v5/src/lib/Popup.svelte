<script lang="ts">
  import type { Snippet } from "svelte";

  const { offset, children } = $props<{
    readonly offset: number;
    readonly children: Snippet;
  }>();
</script>

<div class="popup" style:top="{10 + offset * 10}px" style:left="{10 + offset * 10}px">
  {@render children()}
</div>

<style>
  .popup {
    position: absolute;
    max-width: 200px;
    max-height: 80px;
    border: 1px solid black;
    background-color: white;
    padding: 1rem;
  }
</style>
