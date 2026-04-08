

import { v4 as uuid } from "uuid";
import TaleemBuilder from "../../core/Builder.js";

TaleemBuilder.prototype.para = function (text, at) {
  if (!this._currentSlide) {
    throw new Error("No active slide. Call a slide method first.");
  }

  this._currentSlide.addItem({
    id:  uuid(),
    type: "para",
    text,
    at
  });

  return this;
};