// src/core/Builder.js
import { compileDeck } from "../compiler/compileDeck.js";
import { validateDeck } from "../schema/taleem-schema.js";

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
  
    build() {
      if (this._endTime === null) {
        throw new Error("Final end time missing. Use b.end(time)");
      }
    
      const deck = compileDeck(this);
    
      // 🔥 enforce schema
      try {
        validateDeck(deck);
      } catch (err) {
        console.error(JSON.stringify(err.errors, null, 2));
        throw err;
      }
    
      return deck;
    }
  }