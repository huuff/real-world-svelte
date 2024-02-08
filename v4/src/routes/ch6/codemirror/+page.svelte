<script lang="ts">
  import { EditorView, basicSetup } from "codemirror";
  import type { Action } from "svelte/action";

  const codemirrorAction: Action = (element) => {
    const updateListenerExtension = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        element.dispatchEvent(new CustomEvent("change"));
      }
    });
    const editor = new EditorView({
      doc: "Hello world",
      extensions: [basicSetup, updateListenerExtension],
      parent: element,
    });

    return {
      destroy: editor.destroy,
    };
  };
</script>

<div use:codemirrorAction on:change={() => console.log("changed codemirror")} />
