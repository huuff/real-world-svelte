<script lang="ts">
  import JsonTree from "$lib/json/JsonTree.svelte";

  const data = {
    name: "John Doe",
    address: {
      street: "123 Main St",
    },
  };
</script>

<JsonTree {data}>
  {#snippet keySnippet(k)}
    <em>{k}</em>
  {/snippet}

  {#snippet valueSnippet(v)}
    <u>{v}</u>
  {/snippet}
</JsonTree>
