<script lang="ts">
 export let data: any;
</script>

<ul>
    {#each Object.entries(data) as [key,value]}
        <li>
            {key}:
            {#if typeof value == "object" }
                <svelte:self data={value} />
            {:else}
                {value}
            {/if}
        </li>
    {/each}
</ul>
