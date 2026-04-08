// src/registry/slides/progressbar.js
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.progressbar = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before progressbar()");
  }

  const slide = new Slide("progressbar", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};