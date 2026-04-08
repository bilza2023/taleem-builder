// src/core/errors.js

export function errorNoEnd() {
    throw new Error("Final end time missing. Use b.end(time)");
  }
  
  export function errorNoSlide() {
    throw new Error("No active slide");
  }
  
  export function errorWrongSlide(type) {
    throw new Error(`Method used outside ${type} slide`);
  }
  
  export function errorMissingAt(type) {
    throw new Error(`Call .at(time) before .${type}()`);
  }
  
  export function errorInvalidTime() {
    throw new Error("Time must be a number");
  }