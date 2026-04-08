
// src/api/meta.js

import TaleemBuilder from "../core/Builder.js";

TaleemBuilder.prototype.meta = function (data = {}) {
  this._meta = {
    ...this._meta,
    ...data
  };

  return this; // enable chaining
};