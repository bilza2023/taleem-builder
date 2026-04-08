// src/registry/slides/imageStrip.js
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.imageStrip = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before imageStrip()");
  }

  const slide = new Slide("imageStrip", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};