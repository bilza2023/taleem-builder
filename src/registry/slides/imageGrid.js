// src/registry/slides/imageGrid.js
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.imageGrid = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before imageGrid()");
  }

  const slide = new Slide("imageGrid", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};