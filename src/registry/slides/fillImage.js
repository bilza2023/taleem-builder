// src/registry/slides/fillImage.js
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.fillImage = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before fillImage()");
  }

  const slide = new Slide("fillImage", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};