<script lang="ts">
  import StringValue from "./StringValue.svelte";
  import NumberValue from "./NumberValue.svelte";
  import JsonAnyValue from "./JsonAnyValue.svelte";
  import JsonValue from "./JsonValue.svelte";
  import { match } from "ts-pattern";

  export let data: any;

  function getComponent(
    type: string
  ): typeof StringValue | typeof NumberValue | typeof JsonAnyValue {
    return match(type)
      .with("string", () => StringValue)
      .with("number", () => NumberValue)
      .otherwise(() => JsonAnyValue);
  }
</script>

<ul>
  {#each Object.entries(data) as [key, value]}
    <li>
      <slot name="obj-key" {key}>{key}:</slot>
      {#if typeof value == "object"}
        <svelte:self data={value} />
      {:else}
        <slot name="obj-value" {value}>
          <JsonValue component={getComponent(typeof value)} props={{ value }} />
        </slot>
      {/if}
    </li>
  {/each}
</ul>
