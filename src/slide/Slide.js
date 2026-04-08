
export default class Slide {
    constructor(type, startTime) {
      this.type = type;
      this.start = startTime;
  
      this.items = [];        // visual items
      this.actions = [];      // timeline actions

    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    addAction(action) {
      this.actions.push(action);
    }
  }