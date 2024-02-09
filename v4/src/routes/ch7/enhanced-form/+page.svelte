<script lang="ts">
  import type { Action } from "svelte/action";

  const enhance: Action<HTMLFormElement> = (form) => {
    const handleSubmit = async (e: SubmitEvent) => {
      e.preventDefault();

      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      });

      console.log(response.body);

      form.reset();
    };

    form.addEventListener("submit", handleSubmit);
    return {
      destroy: () => {
        form.removeEventListener("submit", handleSubmit);
      },
    };
  };
</script>

<form action="/api/enhanced-form" method="post" use:enhance>
  <input name="lol" />
  <button type="submit">Submit</button>
</form>
