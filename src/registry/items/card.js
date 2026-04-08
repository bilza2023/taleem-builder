
// src/registry/items/card.js
import TaleemBuilder from "../../core/Builder.js";
import { v4 as uuid } from "uuid";

TaleemBuilder.prototype.card = function (text, icon, at ) {
  this._currentSlide.addItem({
    id: uuid(),
    type: "card",
    text,
    at,
    spItems: [
      {
        name: "icon",
        content: icon
      }
    ]
  });

  return this;
};