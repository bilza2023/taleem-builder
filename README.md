# taleem-builder (v2)

Deterministic builder for creating `deck-v2` slide decks using a timeline-first API.

---

## Overview

`taleem-builder` is a **DSL (Domain Specific Language)** for authoring slide decks.

It converts **chainable builder calls** into **canonical `deck-v2` JSON**.

The system is:

* deterministic
* timeline-driven
* schema-aligned
* AI-friendly

---

## Core Model

### 1. Timeline is absolute

* All time values are **absolute (seconds)**
* No durations are used
* No relative offsets at API level

---

### 2. Slides are continuous

* A slide **starts at `b.at(time)`**
* A slide **ends at the start of the next slide**

```js
b.at(0).titleSlide()
b.at(10).bulletList()
```

→ slide 1: `[0 → 10]`
→ slide 2: `[10 → ...]`

---

### 3. No manual end per slide

* `.to()` / `.end()` per slide is **NOT allowed**
* Prevents:

  * time gaps
  * overlaps
  * inconsistent timelines

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

→ becomes:

```json
"timings": [{ "time": 22, "event": "show" }]
```

---

### 6. Missing item time

If time is not provided:

* fallback = previous item time OR slide start
* resolved during compile

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

b.at(0).titleAndSubtitle()
  .title("Taleem Slides", 0)
  .subtitle("Structured learning", 3);

b.at(10).bulletList()
  .bullet("Point 1", 10)
  .bullet("Point 2", 12);

b.at(20).imageSlide()
  .image("image.png", 20);

b.end(30);

const deck = b.build();
```

---

## Slide API

Each slide is started with:

```js
b.at(time).<slideType>()
```

---

### Supported slide types

* `titleSlide`
* `titleAndSubtitle`
* `titleAndPara`
* `bulletList`
* `twoColumnText`
* `imageSlide`
* `imageWithTitle`
* `imageWithCaption`
* `imageLeftBulletsRight`
* `imageRightBulletsLeft`
* `table`
* `statistic`
* `donutChart`
* `bigNumber`
* `barChart`
* `quoteSlide`
* `quoteWithImage`
* `cornerWordsSlide`
* `contactSlide`
* `fillImage`
* `eq`

---

## Item API (General)

Common item methods:

```js
.title(content, time)
.subtitle(content, time)
.para(content, time)
.bullet(content, time)
.image(src, time)
.left(content, time)
.right(content, time)
```

---

## EQ Slide

EQ slides support structured reasoning with side panels.

---

### Example

```js
b.at(140).eq()

  .heading("Structured Explanation", 140)
    .spText("This is the first line")
    .spImage("/images/image.png")

  .math("$(a + b)^2 = (a + b)(a + b)$", 143)
    .spText("Second line explanation")
    .spImage("/images/box.webp")

  .math("$= a^2 + 2ab + b^2$", 146)
    .spText("Final step explanation")
    .spImage("/images/image.png");
```

---

### Rules

* `.heading()` or `.math()` creates a **new line**
* `.spText()` / `.spImage()` attach to **last line**
* Order is preserved
* Max ~6 lines recommended (content rule, not enforced)

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
  "version": "deck-v2",
  "name": "...",
  "background": { ... },
  "deck": [ ... ]
}
```

---

## Validation Rules

Builder enforces:

* monotonic time (strictly increasing slides)
* final `.end()` present
* valid slide types
* valid item structure

Throws on failure.

---

## Design Principles

1. **Deterministic**

   * same input → same output

2. **Timeline-first**

   * everything anchored in time

3. **No implicit slide durations**

   * only start points

4. **No JSON authoring**

   * builder is the only authoring surface

5. **Compiler owns schema**

   * DSL does not expose JSON structure

---

## Anti-Patterns (Forbidden)

```js
// ❌ no end per slide
b.at(0).to(10)

// ❌ no overlapping times
b.at(10)
b.at(5)

// ❌ no missing final end
b.build()
```

---

## Summary

* define slides using `.at(time)`
* define items using absolute times
* do NOT define slide ends
* MUST define final `.end(time)`
* builder produces valid `deck-v2` JSON

---
