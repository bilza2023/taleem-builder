// src/registry/items/row.js
import TaleemBuilder from "../../core/Builder.js";
import { v4 as uuid } from "uuid";

TaleemBuilder.prototype.row = function (text, at = 0) {
  this._currentSlide.addItem({
    id: uuid(),
    type: "row",
    text,
    at
  });

  return this;
};