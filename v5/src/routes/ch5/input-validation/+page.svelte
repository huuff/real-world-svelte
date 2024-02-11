<script lang="ts">
  import ValidatedInput from "$lib/ValidatedInput.svelte";

  let classname = $state("");

  const validityChangeHandler = (newValidity: boolean) => {
    classname = newValidity ? "" : "invalid";
  };
</script>

<ValidatedInput class={classname} onvaliditychange={validityChangeHandler} required />

<style>
  :global(.invalid) {
    outline: 1px solid red;
  }
</style>
