

import TaleemBuilder from "../core/Builder.js";

TaleemBuilder.prototype.at = function (time) {
  if (typeof time !== "number") {
    throw new Error("at(time) requires a number");
  }

  this._pendingStart = time;
  return this;
};