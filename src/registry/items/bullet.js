

import { v4 as uuid } from "uuid";
import TaleemBuilder from "../../core/Builder.js";

TaleemBuilder.prototype.bullet = function (text, at = 0) {
  if (!this._currentSlide) {
    throw new Error("No active slide.");
  }

  this._currentSlide.addItem({
    id: "item_" + this._currentSlide.items.length,
    type: "bullet",
    text,
    at
  });

  return this;
};