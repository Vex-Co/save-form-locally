import { LocalStorage } from './lib/LocalStorage';
import { UI } from './lib/UI';

export class SaveInputLocally {
  static ui = new UI();
  static localStorage = new LocalStorage();

  static start() {
    // Get the local data saved in browser.
    const localData = SaveInputLocally.localStorage.get(
      'input',
      SaveInputLocally.ui.getElementCount()
    );

    // Render the ui with the localData
    SaveInputLocally.ui.render(localData);

    // On change in input values.
    SaveInputLocally.ui.setOnChangeListners(() => {
      const inputData = SaveInputLocally.ui.getInputData();
      SaveInputLocally.localStorage.store(inputData);
    });
    // Reset Button Logic
    SaveInputLocally.ui.setOnClickListner((ev) => {
      ev?.preventDefault();
      SaveInputLocally.localStorage.reset();
    });
  }
}
