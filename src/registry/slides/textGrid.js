// src/registry/slides/textGrid.js
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.textGrid = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before textGrid()");
  }

  const slide = new Slide("textGrid", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};