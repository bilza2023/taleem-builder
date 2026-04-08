// src/registry/items/author.js
import TaleemBuilder from "../../core/Builder.js";
import { v4 as uuid } from "uuid";

TaleemBuilder.prototype.author = function (text, at) {
  this._currentSlide.addItem({
    id: uuid(),
    type: "author",
    text,
    at
  });

  return this;
};