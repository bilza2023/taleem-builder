// src/registry/items/quote.js
import TaleemBuilder from "../../core/Builder.js";
import { v4 as uuid } from "uuid";

TaleemBuilder.prototype.quote = function (text, at) {
  this._currentSlide.addItem({
    id: uuid(),
    type: "quote",
    text,
    at
  });

  return this;
};