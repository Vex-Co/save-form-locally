import { dataInterface } from './interfaces/dataInterface';

export class LocalStorage {
  store(data: dataInterface) {
    for (let key in data) {
      localStorage[key] = data[key];
    }
  }
  get(slug: string, length: number) {
    const data: dataInterface = {};

    for (let index = 0; index < length; index++) {
      data[`${slug}${index}`] = localStorage[`${slug}${index}`];
    }

    return data;
  }
  reset() {
    localStorage.clear();
  }
}
