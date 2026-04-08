// src/core/SlideStore.js

export default class SlideStore {
    constructor() {
      this.slides = [];
    }
  
    add(slide) {
      this.slides.push(slide);
    }
  
    getAll() {
      return this.slides;
    }
  
    getLast() {
      if (!this.slides.length) return null;
      return this.slides[this.slides.length - 1];
    }
  
    isEmpty() {
      return this.slides.length === 0;
    }
  }