import { get, writable, type Writable } from "svelte/store";

type UndoRedoStore<T> = Writable<T> & {
  readonly undo: () => void;
  readonly redo: () => void;
};
export const undoRedo: <T>(store: Writable<T>) => UndoRedoStore<T> = <T>(store: Writable<T>) => {
  const undoHistory: T[] = [];
  const redoHistory: T[] = [];

  const undoRedoStore = writable<T>(get(store));

  const set: (typeof store)["set"] = (newVal) => {
    undoHistory.push(newVal);
    redoHistory.length = 0;
    undoRedoStore.set(newVal);
  };

  const undo = () => {
    if (undoHistory.length <= 1) return;
    redoHistory.push(undoHistory.pop()!);
    undoRedoStore.set(undoHistory[undoHistory.length - 1]);
  };

  const redo = () => {
    if (redoHistory.length == 0) return;
    const value = redoHistory.pop()!;
    undoHistory.push(value);
    undoRedoStore.set(value);
  };

  return {
    ...undoRedoStore,
    set,
    undo,
    redo,
  };
};
