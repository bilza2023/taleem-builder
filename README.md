
# taleem-builder (v2)

Deterministic builder for creating `taleem-deck-v2` slide decks using a timeline-first API.

---

## Overview

`taleem-builder` is a **DSL (Domain Specific Language)** for authoring slide decks.

It converts **chainable builder calls** into **validated `taleem-deck-v2` JSON**.

The system is:

- deterministic  
- timeline-driven  
- schema-enforced  
- safe by default  

---

## Core Model

### 1. Timeline is absolute

- All time values are **absolute (seconds)**
- No durations
- No relative offsets

---

### 2. Slides are continuous

```js
import TaleemBuilder, { validateDeck } from "taleem-builder";
```

```js
b.at(0).titleAndSubtitle()
b.at(10).bulletList()
````

→ slide 1: `[0 → 10]`
→ slide 2: `[10 → ...]`

---

### 3. No manual slide end

* No `.to()` or per-slide `.end()`
* Prevents gaps and overlaps

---

### 4. Final deck end is required

```js
b.end(60)
```

* Defines end of last slide
* Required
* Throws if missing

---

### 5. Items use absolute show time

```js
.bullet("Text", 22)
```

→

```json
"timings": [{ "time": 22, "event": "show" }]
```

---

## Basic Usage

```js
import Builder from "taleem-builder";

const b = new Builder();

b.meta({ name: "Demo Deck" });

b.background()
  .color("#111111")
  .image(null)
  .opacity(0.3);

b.at(0)
  .titleAndSubtitle()
  .title("Taleem Slides", 0)
  .subtitle("Structured learning", 3);

b.at(10)
  .bulletList()
  .bullet("Point 1", 10)
  .bullet("Point 2", 12);

b.at(20)
  .imageSlide()
  .image("image.png", 20);

b.end(30);

const deck = b.build();
```

---

## Supported Slide Types

```
titleAndSubtitle
titleAndPara
bulletList
twoColumnText
imageSlide
imageWithTitle
imageWithCaption
imageLeftBulletsRight
imageRightBulletsLeft
table
barChart
progressbar
quoteSlide
keyIdeasSlide
focusList
eq
fillImage
imageStrip
imageGrid
textGrid
skeleton
```

---

## Item API (Common)

```js
.title(content, time)
.subtitle(content, time)
.para(content, time)
.bullet(content, time)
.image(src, time)
.leftText(content, time)
.rightText(content, time)
```

---

## EQ Slide

```js
b.at(140)
  .eq()
  .eqHeading("Structured Explanation", 140)
    .eqSpText("Intro")
    .eqSpImage("/img.png")

  .eqMath("a + b", 143)
    .eqSpText("Step");
```

### Rules

* `.eqHeading()` / `.eqMath()` → create new line
* `.eqSpText()` / `.eqSpImage()` → attach to last line
* Order is preserved

---

## Background

```js
b.background()
  .color("#111")
  .image("/img/bg.png")
  .opacity(0.2);
```

---

## Meta

```js
b.meta({
  name: "Deck Name"
});
```

---

## Output

```js
const deck = b.build();
```

Returns:

```json
{
  "version": "taleem-deck-v2",
  "name": "...",
  "background": { ... },
  "deck": [ ... ]
}
```

---

## Validation (IMPORTANT)

All decks are **automatically validated** during build.

```js
const deck = b.build(); // validated here
```

If invalid:

* builder throws immediately
* no invalid deck is ever returned

This guarantees:

* strict structure
* renderer safety
* no silent failures

---

## Design Principles

1. **Deterministic**
   Same input → same output

2. **Timeline-first**
   Everything anchored in absolute time

3. **No implicit durations**
   Only start points

4. **Builder-first authoring**
   JSON is output, not source

5. **Schema-enforced**
   All output must pass validation

---

## Anti-Patterns (Forbidden)

```js
// ❌ no per-slide end
b.at(0).to(10)

// ❌ no overlapping slides
b.at(10)
b.at(5)

// ❌ no missing final end
b.build()
```

---

## Summary

* define slides using `.at(time)`
* define items using absolute time
* do NOT define slide durations
* MUST define final `.end(time)`
* builder always returns validated JSON

---

## Status

✅ Builder API stable
✅ Schema enforced
✅ Fully deterministic
🚀 Ready for production use


