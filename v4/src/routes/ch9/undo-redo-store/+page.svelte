<script lang="ts">
  import StoreSetterForm from "$lib/StoreSetterForm.svelte";
  import { writable, type Writable } from "svelte/store";

  type UndoRedoStore<T> = Writable<T> & {
    readonly undo: () => void;
    readonly redo: () => void;
  };

  const createUndoRedoStore: <T>(initial: T) => UndoRedoStore<T> = <T,>(initial: T) => {
    const store = writable<T>(initial);
    const undoHistory: T[] = [];
    const redoHistory: T[] = [];

    const set: (typeof store)["set"] = (value) => {
      undoHistory.push(value);
      redoHistory.length = 0;
      store.set(value);
    };

    const undo = () => {
      if (undoHistory.length <= 1) return;
      redoHistory.push(undoHistory.pop()!);
      store.set(undoHistory[undoHistory.length - 1]);
    };

    const redo = () => {
      if (redoHistory.length == 0) return;
      const value = redoHistory.pop()!;
      undoHistory.push(value);
      store.set(value);
    };

    return {
      ...store,
      set,
      undo,
      redo,
    };
  };

  const store = createUndoRedoStore(0);

  store.subscribe((val) => console.log(`new val: ${val}`));
</script>

<StoreSetterForm {store} />
<div>
  <button on:click={store.undo}>Undo</button>
  <button on:click={store.redo}>Redo</button>
</div>
