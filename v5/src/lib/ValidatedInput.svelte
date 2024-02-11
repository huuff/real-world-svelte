<script lang="ts">
  import { onMount } from "svelte";
  import type { HTMLInputAttributes } from "svelte/elements";

  const { onvaliditychange, oninput, ...inputProps } = $props<
    {
      readonly onvaliditychange?: (isValid: boolean) => void;
    } & HTMLInputAttributes
  >();

  let ref: HTMLInputElement | undefined = $state(undefined);
  let isValid = $state(true);

  onMount(() => {
    if (ref) {
      isValid = ref.checkValidity();
      onvaliditychange && onvaliditychange(isValid);
    }
  });

  const handleInput = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
    console.log("Handling change");
    oninput && oninput(e);

    const newValidity = e.currentTarget.checkValidity();
    console.log({ isValid, newValidity });

    if (isValid != newValidity) {
      onvaliditychange && onvaliditychange(newValidity);
      isValid = newValidity;
    }
  };
</script>

<input bind:this={ref} {...inputProps} oninput={handleInput} />
