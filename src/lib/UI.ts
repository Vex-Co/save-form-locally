import { dataInterface } from './interfaces/dataInterface';

export class UI {
  private elements: NodeListOf<HTMLInputElement>;

  constructor(selector: string) {
    this.elements = document.querySelectorAll(selector);
  }

  getElementCount(): number {
    return this.elements.length;
  }

  // Render UI with the help of data.
  render(data: dataInterface): void {
    this.elements.forEach((input: HTMLInputElement, index: number) => {
      input.value = data[`input${index}`];
    });
  }
  setOnChangeListners(callback: (ev?: Event) => void): void {
    this.elements.forEach((input: HTMLInputElement) => {
      input.addEventListener('change', callback);
    });
  }
  getInputData(): dataInterface {
    const data: dataInterface = {};

    this.elements.forEach((input: HTMLInputElement, index: number) => {
      data[`input${index}`] = input.value;
    });
    return data;
  }
}
