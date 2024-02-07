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
  <svelte:fragment slot="obj-key" let:key>
    <em>{key}</em>
  </svelte:fragment>

  <svelte:fragment slot="obj-value" let:value>
    <u>{value}</u>
  </svelte:fragment>
</JsonTree>
