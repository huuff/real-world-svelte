<script lang="ts">
  import type { Action } from "svelte/action";

  const validateOnType: Action<HTMLInputElement> = (node) => {
    const onInput = () => {
      const isValid = node.checkValidity();
      const errorMessage = isValid ? "" : "ERROR!!!!!!!!";

      node.dispatchEvent(new CustomEvent("validate", { detail: { isValid, errorMessage } }));
    };
    node.addEventListener("input", onInput);

    return {
      destroy: () => node.removeEventListener("input", onInput),
    };
  };

  let isValid = false;
</script>

<input
  required
  class:invalid={!isValid}
  use:validateOnType
  on:validate={(event) => (isValid = event.detail.isValid)}
/>

<style>
  .invalid {
    border: red 1px solid;
  }
</style>
