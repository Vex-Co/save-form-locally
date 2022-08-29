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
    try {
      this.elements.forEach((input: HTMLInputElement) => {
        input.addEventListener('change', callback);
      });
    } catch (err) {
      console.log('Please Add an input field to use features of this library.');
    }
  }
  setOnClickListner(callback: (ev?: Event) => void): void {
    try {
      this.resetBtn.addEventListener('click', callback);
    } catch (err) {
      console.log('Please Add an reset button to reset the saved form.');
    }
  }
  getInputData(): dataInterface {
    const data: dataInterface = {};

    this.elements.forEach((input: HTMLInputElement, index: number) => {
      data[`input${index}`] = input.value;
    });
    return data;
  }
}
