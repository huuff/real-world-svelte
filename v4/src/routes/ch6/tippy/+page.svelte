<script lang="ts">
  import type { Action } from "svelte/action";
  import tippy from "tippy.js";
  import "tippy.js/dist/tippy.css";

  const tippyAction: Action<HTMLElement, string> = (element, content) => {
    const tooltipInstance = tippy(element, { content });
    return {
      update: (newContent) => {
        tooltipInstance.setContent(newContent);
      },
      destroy: () => {
        tooltipInstance.destroy();
      },
    };
  };
</script>

<div use:tippyAction={"and this is the tooltip"}>This has a tooltip</div>
