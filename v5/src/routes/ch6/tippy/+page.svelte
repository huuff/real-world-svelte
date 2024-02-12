<script lang="ts">
  import type { Action } from "svelte/action";
  import tippyjs from "tippy.js";
  import "tippy.js/dist/tippy.css";

  const tippy: Action<HTMLElement, string> = (element, content) => {
    const tooltipInstance = tippyjs(element, { content });
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

<span use:tippy={"and this is the tooltip"}>This has a tooltip</span>
