export class LocalStorage {
  // Delete the
  static delete(key: string) {
    localStorage.removeItem(key);
  }
  static save(key: string, value: string) {
    if (value) {
      localStorage[key] = value;
    }
  }
  static reset() {
    localStorage.clear();
  }
}
