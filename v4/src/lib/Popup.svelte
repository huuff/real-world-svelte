<script lang="ts">
  export let offset: number;
</script>

<div class="popup" style:top="{10 + offset * 10}px" style:left="{10 + offset * 10}px">
  <slot />
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
