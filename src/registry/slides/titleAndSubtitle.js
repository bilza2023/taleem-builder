
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.titleAndSubtitle = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before titleAndSubtitle()");
  }

  const slide = new Slide("titleAndSubtitle", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null; // IMPORTANT -// IMPORTANT-// IMPORTANT

  return this;
};