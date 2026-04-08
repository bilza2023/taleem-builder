


import { v4 as uuid } from "uuid";
import TaleemBuilder from "../../core/Builder.js";

TaleemBuilder.prototype.heading = function (text, at = 0) {
  if (!this._currentSlide) {
    throw new Error("No active slide.");
  }

  this._currentSlide.addItem({
    id:  uuid(),
    type: "heading",
    text,
    at
  });

  return this;
};