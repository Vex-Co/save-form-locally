import { LocalStorage } from './lib/LocalStorage';
import { UI } from './lib/UI';

export class App {
  ui = new UI();
  localStorage = new LocalStorage();

  constructor() {
    const localData = this.localStorage.get('input', this.ui.getElementCount());

    this.ui.render(localData);

    this.ui.setOnChangeListners(() => {
      const inputData = this.ui.getInputData();
      this.localStorage.store(inputData);
    });
    // Reset Button Logic
    this.ui.setOnClickListner((ev) => {
      ev?.preventDefault();
      this.localStorage.reset();
    });
  }
}

new App();
