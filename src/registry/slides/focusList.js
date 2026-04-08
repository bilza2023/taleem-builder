// src/registry/slides/focusList.js
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.focusList = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before focusList()");
  }

  const slide = new Slide("focusList", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};