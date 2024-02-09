<script lang="ts">
  import IframePopup from "$lib/IframePopup.svelte";
  import type { Action } from "svelte/action";

  const previewAction: Action = (element) => {
    let iframe: IframePopup;
    const onMouseOver = () => {
      iframe = new IframePopup({
        target: element,
        props: { src: element.getAttribute("href") },
        intro: true,
      });
    };

    const onMouseOut = () => {
      iframe.$destroy();
    };

    element.addEventListener("mouseover", onMouseOver);
    element.addEventListener("mouseout", onMouseOut);

    return {
      destroy: () => {
        element.removeEventListener("mouseover", onMouseOver);
        element.removeEventListener("mouseout", onMouseOut);
      },
    };
  };
</script>

<a href="http://wikipedia.org" use:previewAction>Wikipedia</a>

<style>
  a {
    position: relative;
  }
</style>
