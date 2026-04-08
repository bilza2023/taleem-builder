// src/items/bar.js
import TaleemBuilder from "../../core/Builder.js";
import { v4 as uuid } from "uuid";

TaleemBuilder.prototype.bar = function (label, value, at = 0) {
  this._currentSlide.addItem({
    id: uuid(),
    type: "bar",
    text: label,
    at,
    spItems: [
      {
        name: "value",
        content: value
      }
    ]
  });

  return this;
};