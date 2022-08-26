interface stateData {
  [key: string]: string;
}
// State of input
export class State {
  private inputs: NodeListOf<HTMLInputElement>;

  constructor(selector: string) {
    this.inputs = document.querySelectorAll(selector);
  }
  // Set the state of the input fields according to the stored.
  set() {
    // Set the value of each input field.
    this.inputs.forEach((input: HTMLInputElement, index: number) => {
      const localValue = localStorage.getItem(`input${index}`);
      if (localValue) {
        input.value = localValue;
      }
    });
  }
  get(): stateData {
    const state: stateData = {};

    this.inputs.forEach((input: HTMLInputElement, index: number) => {
      state[`input${index}`] = input.value;
    });
    return state;
  }
}
