// src/registry/slides/skeleton.js
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.skeleton = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before skeleton()");
  }

  const slide = new Slide("skeleton", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};