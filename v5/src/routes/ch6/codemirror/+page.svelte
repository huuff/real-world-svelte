<script lang="ts">
  import { EditorView, basicSetup } from "codemirror";
  import type { Action } from "svelte/action";

  type CodemirrorCallbacks = {
    readonly onchange?: Parameters<(typeof EditorView)["updateListener"]["of"]>[0];
  };

  const codemirror: Action<HTMLElement, CodemirrorCallbacks> = (elem, { onchange }) => {
    const updateListenerExtension = onchange && EditorView.updateListener.of(onchange);
    const editor = new EditorView({
      doc: "Hello world",
      extensions: !!updateListenerExtension ? [basicSetup, updateListenerExtension] : [basicSetup],
      parent: elem,
    });

    return {
      destroy: editor.destroy,
    };
  };
</script>

<div use:codemirror={{ onchange: () => console.log("codemirror updated") }} />
