// src/registry/slides/keyIdeasSlide.js
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.keyIdeasSlide = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before keyIdeasSlide()");
  }

  const slide = new Slide("keyIdeasSlide", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};