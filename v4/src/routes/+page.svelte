<script lang="ts">
  import type { PageData } from "./$types";

  // TODO: I need to type this!
  export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<ul>
  {#each data.routes as route}
    <li>
      <a href={route}>{route}</a>
    </li>
  {/each}
</ul>
