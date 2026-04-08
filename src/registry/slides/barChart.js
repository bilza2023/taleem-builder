// src/registry/slides/barChart.js
import TaleemBuilder from "../../core/Builder.js";
import Slide from "../../slide/Slide.js";

TaleemBuilder.prototype.barChart = function () {
  const start = this._pendingStart;

  if (start == null) {
    throw new Error("Call at(time) before barChart()");
  }

  const slide = new Slide("barChart", start);

  this._slides.push(slide);
  this._currentSlide = slide;

  this._pendingStart = null;

  return this;
};