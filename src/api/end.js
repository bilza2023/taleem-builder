
// src/api/end.js

import TaleemBuilder from "../core/Builder.js";

TaleemBuilder.prototype.end = function (time) {
  if (typeof time !== "number") {
    throw new Error("end(time) requires a number");
  }

  this._setEnd(time);

  return this;
};