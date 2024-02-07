<script lang="ts" generics="C extends ComponentType">
  import type { ComponentType, ComponentProps } from "svelte";

  export let component: C;
  export let props: ComponentProps<InstanceType<C>>;
</script>

<svelte:component this={component} {...props} />
