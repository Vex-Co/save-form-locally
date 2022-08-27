import { dataInterface } from './interfaces/dataInterface';

export class UI {
  private elements = document.querySelectorAll('input');
  private resetBtn: HTMLButtonElement = document.querySelector('#reset-btn')!;

  getElementCount(): number {
    return this.elements.length;
  }

  // Render UI with the help of data.
  render(data: dataInterface): void {
    this.elements.forEach((input: HTMLInputElement, index: number) => {
      if (data[`input${index}`]) {
        input.value = data[`input${index}`];
      }
    });
  }
  setOnChangeListners(callback: (ev?: Event) => void): void {
    this.elements.forEach((input: HTMLInputElement) => {
      input.addEventListener('change', callback);
    });
  }
  setOnClickListner(callback: (ev?: Event) => void): void {
    this.resetBtn.addEventListener('click', callback);
  }
  getInputData(): dataInterface {
    const data: dataInterface = {};

    this.elements.forEach((input: HTMLInputElement, index: number) => {
      data[`input${index}`] = input.value;
    });
    return data;
  }
}
