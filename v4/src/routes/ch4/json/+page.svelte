<script lang="ts">
 import JsonTree from "$lib/json/JsonTree.svelte";
 
 const data = {
     name: "John Doe",
     address: {
         street: "123 Main St",
     }
 }
</script>

<JsonTree data={data} />
