// src/core/Builder.js
import { compileDeck } from "../compiler/compileDeck.js";

export default class TaleemBuilder {
    constructor() {
      // meta
      this._meta = {
        name: "untitled"
      };
  
      // background
      this._background = {
        backgroundColor: "#000000",
        backgroundImage: null,
        backgroundImageOpacity: 0.3
      };
  
      // timeline
      this._slides = [];
      this._currentSlide = null;
  
      // final end time
      this._endTime = null;
    }
  
    /* ───────────── internal helpers ───────────── */
  
    _addSlide(slide) {
      this._slides.push(slide);
      this._currentSlide = slide;
    }
  
    _getSlides() {
      return this._slides;
    }
  
    _setEnd(time) {
      this._endTime = time;
    }
  
    _getEnd() {
      return this._endTime;
    }
  
    /* ───────────── build ───────────── */
  
    // build() {
    //   if (this._endTime === null) {
    //     throw new Error("Final end time missing. Use b.end(time)");
    //   }
  
    //   // defer to compiler (added later)
    //   return {
    //     version: "taleem-deck-v2",
    //     name: this._meta.name,
    //     background: this._background,
    //     deck: this._slides // raw for now
    //   };
    // }
    build() {
        if (this._endTime === null) {
          throw new Error("Final end time missing. Use b.end(time)");
        }
      
        return compileDeck(this);
      }
  }