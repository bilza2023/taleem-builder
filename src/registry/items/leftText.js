
import TaleemBuilder from "../../core/Builder.js";
import { v4 as uuid } from "uuid";

TaleemBuilder.prototype.leftText = function (text, at = 0) {
  this._currentSlide.addItem({
    id: uuid(),
    type: "leftText",
    text,
    at
  });

  return this;
};