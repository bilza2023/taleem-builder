
import TaleemBuilder from "../../core/Builder.js";
import { v4 as uuid } from "uuid";

TaleemBuilder.prototype.rightText = function (text, at) {
  this._currentSlide.addItem({
    id: uuid(),
    type: "rightText",
    text,
    at
  });

  return this;
};