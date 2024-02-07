<script lang="ts">
  import type { Action } from "svelte/action";

  type MousePosition = { x: number; y: number };

  const getPosition = (e: MouseEvent) => {
    return { x: e.clientX, y: e.clientY };
  };

  const getDiff = (start: MousePosition, end: MousePosition) => {
    return {
      x: end.x - start.x,
      y: end.y - start.y,
    };
  };

  const dragAndDrop: Action<HTMLElement> = (node) => {
    let dragStartPosition: MousePosition | undefined;
    let lastMovePosition: MousePosition | undefined;

    const onMouseDown = (e: MouseEvent) => {
      dragStartPosition = getPosition(e);
      lastMovePosition = dragStartPosition;
      node.dispatchEvent(
        new CustomEvent("dragStart", {
          detail: {
            position: dragStartPosition,
          },
        })
      );
    };

    const onMouseUp = (e: MouseEvent) => {
      if (!!dragStartPosition) {
        const dragEndPosition = getPosition(e);
        const diff = getDiff(dragStartPosition, dragEndPosition);

        node.dispatchEvent(
          new CustomEvent("dragEnd", {
            detail: {
              position: dragEndPosition,
              movement: diff,
            },
          })
        );

        dragStartPosition = undefined;
        lastMovePosition = undefined;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!!lastMovePosition) {
        const currentPos = getPosition(e);
        const diff = getDiff(lastMovePosition, currentPos);

        node.dispatchEvent(
          new CustomEvent("dragMove", {
            detail: {
              movement: diff,
            },
          })
        );

        lastMovePosition = diff;
      }
    };

    node.addEventListener("mousedown", onMouseDown);
    node.addEventListener("mouseup", onMouseUp);
    node.addEventListener("mousemove", onMouseMove);

    return {
      destroy: () => {
        node.removeEventListener("mousedown", onMouseDown);
        node.removeEventListener("mouseup", onMouseUp);
        node.removeEventListener("mousemove", onMouseMove);
      },
    };
  };
</script>

<style>
 .square {
     width: 50px;
     height: 50px;
     background-color: red;
 }
</style>

<div
    class="square"
    use:dragAndDrop
    on:dragStart={(e) => console.log("dragStart")}
    on:dragMove={(e) => console.log("dragMove")}
    on:dragEnd={(e) => console.log("dragEnd")}
>
    Drag me
</div>
