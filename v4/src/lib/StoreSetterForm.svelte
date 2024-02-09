<script lang="ts">
  import type { Action } from "svelte/action";
  import type { Writable } from "svelte/store";

  export let store: Writable<number>;

  const submitToStore: Action<HTMLFormElement, Writable<number>> = (form) => {
    const onSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      const formData = new FormData(form);

      const nextVal = formData.get("nextval");

      if (nextVal != null) {
        store.set(+nextVal);
      }

      form.reset();
    };

    form.addEventListener("submit", onSubmit);

    return {
      destroy: () => form.removeEventListener("submit", onSubmit),
    };
  };
</script>

<section>
  <span class="store-content">{$store}</span>
  <form use:submitToStore={store}>
    <input type="number" name="nextval" />
    <button>Submit</button>
  </form>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100px;
    padding-block: 1rem;
  }

  input {
    width: 80px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .store-content {
    font-size: 2rem;
  }
</style>
