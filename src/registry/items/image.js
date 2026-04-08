
// src/registry/items/image.js
import TaleemBuilder from "../../core/Builder.js";
import { v4 as uuid } from "uuid";

TaleemBuilder.prototype.image = function (src, at = 0) {
  this._currentSlide.addItem({
    id: uuid(),
    type: "image",   // MUST match golden deck name
    text: src,
    at
  });

  return this;
};