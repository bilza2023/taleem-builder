
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.imageLeftBulletsRight = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before imageLeftBulletsRight()");
  }

  const slide = new Slide("imageLeftBulletsRight", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};