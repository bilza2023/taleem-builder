


import { v4 as uuid } from "uuid";
import TaleemBuilder from "../../core/Builder.js";

// helper
function addLine(ctx, type, text, at) {
  if (!ctx._currentSlide) {
    throw new Error("No active slide");
  }

  const line = {
    id:  uuid(),
    type,
    text,
    at,
    spItems: []
  };

  ctx._currentSlide.addItem(line);
  ctx._currentLine = line;
}

// ───── line methods ─────

TaleemBuilder.prototype.eqHeading = function (text, at ) {
  addLine(this, "heading", text, at);
  return this;
};

TaleemBuilder.prototype.eqMath = function (text, at ) {
  addLine(this, "math", text, at);
  return this;
};

TaleemBuilder.prototype.eqText = function (text, at) {
  addLine(this, "text", text, at);
  return this;
};

// ───── spItems ─────

TaleemBuilder.prototype.eqSpText = function (text) {
  if (!this._currentLine) {
    throw new Error("spItem without line");
  }

  this._currentLine.spItems.push({
    type: "text",
    text
  });

  return this;
};

TaleemBuilder.prototype.eqSpImage = function (src) {
  if (!this._currentLine) {
    throw new Error("spItem without line");
  }

  this._currentLine.spItems.push({
    type: "image",
    text: src
  });

  return this;
};