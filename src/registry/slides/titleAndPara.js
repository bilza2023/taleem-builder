import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.titleAndPara = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before titleAndPara()");
  }

  const slide = new Slide("titleAndPara", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};