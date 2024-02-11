<script lang="ts">
  import type { Action } from "svelte/action";

  class DragPosition {
    constructor(
      public x: number,
      public y: number
    ) {}

    public diff(other: DragPosition): DragPosition {
      return new DragPosition(other.x - this.x, other.y - this.y);
    }
  }

  const getPosition = (e: MouseEvent) => new DragPosition(e.clientX, e.clientY);

  type DragAndDropCallbacks = {
    readonly ondragstart?: (pos: DragPosition) => void;
    readonly ondragmove?: (pos: DragPosition, diff: DragPosition) => void;
    readonly ondragend?: (pos: DragPosition) => void;
  };

  const dragAndDrop: Action<HTMLElement, DragAndDropCallbacks> = (
    elem,
    { ondragstart, ondragmove, ondragend }
  ) => {
    let dragStartPosition: DragPosition | undefined;

    const mouseDownHandler = (e: MouseEvent) => {
      const pos = getPosition(e);
      dragStartPosition = pos;
      ondragstart && ondragstart(pos);
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      if (!dragStartPosition) return;
      const pos = getPosition(e);
      const diff = dragStartPosition.diff(pos);
      ondragmove && ondragmove(pos, diff);
    };

    const mouseUpHandler = (e: MouseEvent) => {
      if (!dragStartPosition) return;
      const pos = getPosition(e);
      ondragend && ondragend(pos);
      dragStartPosition = undefined;
    };

    elem.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    return {
      destroy: () => {
        elem.removeEventListener("mousedown", mouseDownHandler);
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      },
    };
  };

  const ondragstart = (pos: DragPosition) => console.log(`drag start ${JSON.stringify(pos)}`);
  const ondragmove = (pos: DragPosition, diff: DragPosition) =>
    console.log(`drag move at ${JSON.stringify(pos)}, diff: ${JSON.stringify(diff)}`);
  const ondragend = (pos: DragPosition) => console.log(`drag end ${JSON.stringify(pos)}`);
</script>

<div class="draggable" use:dragAndDrop={{ ondragstart, ondragmove, ondragend }} />

<style>
  .draggable {
    width: 40px;
    height: 40px;
    background-color: red;
  }
</style>
