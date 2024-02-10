<script lang="ts" generics="C extends ComponentType">
  import type { ComponentType, ComponentProps } from "svelte";

  const { component, props } = $props<{
    readonly component: C;
    readonly props: ComponentProps<InstanceType<C>>;
  }>();
</script>

<svelte:component this={component} {...props} />
