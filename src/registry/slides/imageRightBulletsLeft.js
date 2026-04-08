
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.imageRightBulletsLeft = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before imageRightBulletsLeft()");
  }

  const slide = new Slide("imageRightBulletsLeft", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};