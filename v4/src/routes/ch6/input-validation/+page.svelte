<script lang="ts">
    import type { Action } from 'svelte/action';

    const validateOnType: Action<HTMLInputElement> = (node) => {
            const onInput = () => {
                    // TODO: Try to use 'this'?
                    const isValid = node.checkValidity();
                    const errorMessage = isValid ? '' : 'ERROR!!!!!!!!';

                    node.dispatchEvent(new CustomEvent('validate', { detail: { isValid, errorMessage } }));
            };
            node.addEventListener('input', onInput);

            return {
                    destroy: () => node.removeEventListener('input', onInput)
            };
    };

 let isValid = false;
</script>

<style>
 .invalid {
     border: red 1px solid;
 }
</style>

<input
    required
    class:invalid={!isValid}
    use:validateOnType
    on:validate={(event) => isValid = event.detail.isValid}
  />
