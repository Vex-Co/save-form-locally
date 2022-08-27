interface dataInterface {
  [key: string]: string;
}

export class App {
  private inputs: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('input')!;

  constructor() {
    this.render();
    this.setOnChangeListners(() => {
      this.setLocalValues();
    });
  }

  setOnChangeListners(callback: (ev?: Event) => void) {
    this.inputs.forEach((input: HTMLInputElement) => {
      input.addEventListener('change', callback);
    });
  }

  render() {
    const data = this.getLocalValues();
    this.inputs.forEach((input: HTMLInputElement, index: number) => {
      input.value = data[`input${index}`];
    });
  }

  setLocalValues() {
    const inputs: dataInterface = this.getInputValues();

    for (let key in inputs) {
      localStorage[key] = inputs[key];
    }
  }
  getLocalValues() {
    const data: dataInterface = {};

    this.inputs.forEach((_: HTMLInputElement, index: number) => {
      data[`input${index}`] = localStorage[`input${index}`];
    });

    return data;
  }
  getInputValues(): dataInterface {
    const data: dataInterface = {};

    this.inputs.forEach((input: HTMLInputElement, index: number) => {
      data[`input${index}`] = input.value;
    });
    return data;
  }
}

new App();
