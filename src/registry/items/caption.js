import TaleemBuilder from "../../core/Builder.js";
import { v4 as uuid } from "uuid";

TaleemBuilder.prototype.caption = function (text, at ) {
  this._currentSlide.addItem({
    id: uuid(),
    type: "caption",
    text,
    at
  });

  return this;
};