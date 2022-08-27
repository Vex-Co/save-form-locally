import { LocalStorage } from './lib/LocalStorage';
import { UI } from './lib/UI';

export class App {
  ui = new UI('input');
  localStorage = new LocalStorage();

  constructor() {
    const localData = this.localStorage.get('input', this.ui.getElementCount());

    this.ui.render(localData);

    this.ui.setOnChangeListners(() => {
      const inputData = this.ui.getInputData();
      this.localStorage.store(inputData);
    });
  }
}

new App();
