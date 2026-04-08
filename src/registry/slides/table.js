// src/registry/slides/table.js
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.table = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before table()");
  }

  const slide = new Slide("table", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};