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
                        }
                }

                interface HTMLAttributes<T> {
                        'on:validate'?: (e: ValidateEvent) => void;
                }
        }
}

export { };
