import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.eq = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before eq()");
  }

  const slide = new Slide("eq", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};