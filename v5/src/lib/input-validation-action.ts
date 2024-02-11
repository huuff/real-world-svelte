import type { Action } from "svelte/action";

type ValidityChangeHandler = (newValidity: boolean) => void;
export const inputValidation: Action<HTMLInputElement, ValidityChangeHandler> = (
  elem,
  validityChangeHandler
) => {
  let isValid = elem.checkValidity();
  validityChangeHandler(isValid);

  const inputHandler = (e: Event) => {
    let newValidity = (e.currentTarget as HTMLInputElement).checkValidity();
    console.log({ isValid, newValidity });

    if (isValid !== newValidity) {
      validityChangeHandler(newValidity);
      isValid = newValidity;
    }
  };

  elem.addEventListener("input", inputHandler);

  return {
    destroy: () => elem.removeEventListener("input", inputHandler),
  };
};
