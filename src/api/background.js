// src/api/background.js

import TaleemBuilder from "../core/Builder.js";

TaleemBuilder.prototype.background = function () {
  const self = this;

  return {
    color(value) {
      self._background.backgroundColor = value;
      return this;
    },

    image(value) {
      self._background.backgroundImage = value;
      return this;
    },

    opacity(value) {
      self._background.backgroundImageOpacity = value;
      return this;
    }
  };
};