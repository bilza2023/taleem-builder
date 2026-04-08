import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.imageWithCaption = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before imageWithCaption()");
  }

  const slide = new Slide("imageWithCaption", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};