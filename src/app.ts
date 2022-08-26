import { State } from './lib/State';

const state = new State('input');

state.get();
// // ---------------------------
// // Proof of Concept
// // ---------------------------
// const inputs = document.querySelectorAll('input');

// inputs.forEach((input: HTMLInputElement, index: number) => {
//   input.addEventListener('change', () => {
//     localStorage.setItem(`input${index}`, input.value);
//   });
// });

// // Check if the values exsists
// inputs.forEach((input: HTMLInputElement, index: number) => {
//   const localValue = localStorage.getItem(`input${index}`);
//   if (localValue) {
//     input.value = localValue;
//   }
// });
