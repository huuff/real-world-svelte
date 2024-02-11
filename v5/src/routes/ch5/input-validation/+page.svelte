<script lang="ts">
  import { inputValidation } from "$lib/input-validation-action";

  let isValid = $state(true);
</script>

<input
  use:inputValidation={(newValidity) => (isValid = newValidity)}
  class={isValid ? "" : "invalid"}
  required
/>

<style>
  .invalid {
    outline: 1px solid red;
  }
</style>
