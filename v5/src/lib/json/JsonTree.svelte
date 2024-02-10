<script lang="ts">
  import JsonString from "./StringValue.svelte";
  import JsonNumber from "./NumberValue.svelte";
  import JsonAny from "./JsonAnyValue.svelte";
  import JsonValue from "./JsonValue.svelte";
  import { match } from "ts-pattern";
  import type { Snippet } from "svelte";

  const { data, keySnippet, valueSnippet } = $props<{
    readonly data: any;
    keySnippet?: Snippet<[string]>;
    valueSnippet?: Snippet<[any]>;
  }>();

  function getComponent(type: string): typeof JsonString | typeof JsonAny | typeof JsonNumber {
    return match(type)
      .with("string", () => JsonString)
      .with("number", () => JsonNumber)
      .otherwise(() => JsonAny);
  }
</script>

<ul>
  {#each Object.entries(data) as [key, value]}
    <li>
      {#if keySnippet}
        {@render keySnippet(key)}
      {:else}
        {key}:
      {/if}
      {#if typeof value === "object"}
        <svelte:self data={value} />
      {:else if valueSnippet}
        {@render valueSnippet(value)}
      {:else}
        <JsonValue component={getComponent(typeof value)} props={{ value }} />
      {/if}
    </li>
  {/each}
</ul>
