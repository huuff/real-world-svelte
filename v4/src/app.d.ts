// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  declare namespace svelteHTML {
    interface ValidateEvent {
      readonly detail: {
        readonly isValid: boolean;
        readonly message: string;
      };
    }

    interface MousePosition {
      readonly x: number;
      readonly y: number;
    }

    interface DragStartEvent {
      readonly detail: {
        readonly position: MousePosition;
      };
    }

    interface DragEndEvent {
      readonly detail: {
        readonly position: MousePosition;
        readonly movement: MousePosition;
      }
    }

    interface DragMoveEvent {
      readonly detail: {
        readonly movement: MousePosition;
      }
    }

    interface HTMLAttributes<T> {
      "on:validate"?: (e: ValidateEvent) => void;
      "on:dragStart"?: (e: DragStartEvent) => void;
      "on:dragEnd"?: (e: DragEndEvent) => void;
      "on:dragMove"?: (e: DragMoveEvent) => void;
    }
  }
}

export {};
