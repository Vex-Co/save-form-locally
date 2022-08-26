interface stateData {
  [key: string]: string;
}
// State of input
export class State {
  private inputs?: NodeListOf<HTMLInputElement>;

  constructor(selector: string) {
    const inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(selector);
    if (inputs) {
      this.inputs = inputs;
    }
  }
  set() {
    if (this.inputs) {
      // Set the value of each input field.
      this.inputs.forEach((input: HTMLInputElement, index: number) => {
        const localValue = localStorage.getItem(`input${index}`);
        if (localValue) {
          input.value = localValue;
        }
      });
    } else {
      console.log('There is an error while setting input fields.');
    }
  }
  get(): stateData {
    const state: stateData = {};

    if (this.inputs) {
      this.inputs.forEach((input: HTMLInputElement, index: number) => {
        state[`input${index}`] = input.value;
      });
    }
    return state;
  }
}
