
# 📄 `taleem-builder-technical-doc.md`

---

## 1. Core Philosophy

Taleem Builder is a **linear, single-timeline slide system**.

* There is **only one global timeline**
* All timings are **absolute**
* No relative timing, no nested timelines
* Builder creates structured data → compiler transforms → player renders

---

## 2. System Architecture

```
Builder → Slides → Items → Compiler → Deck JSON → Player/Stepper → Renderer
```

### Responsibilities

| Layer    | Responsibility                |
| -------- | ----------------------------- |
| Builder  | API for creating slides       |
| Slide    | Groups items                  |
| Item     | Holds content + timing        |
| Compiler | Converts items → final format |
| Player   | Executes timeline             |
| Renderer | Displays UI                   |

---

## 3. Core Concepts

### 3.1 Single Timeline Rule

```js
.title("Hello", 0)
.subtitle("World", 2)
```

* `0`, `2` are **absolute times**
* No `slide.start + offset`
* No relative interpretation

---

### 3.2 Slide

```js
class Slide {
  constructor(type, start) {
    this.type = type;
    this.start = start;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }
}
```

* Slide is a **container only**
* No timing logic
* No behavior

---

### 3.3 Item

Internal format:

```js
{
  id: uuid(),
  type: "title",
  text: "Hello",
  at: 0
}
```

Rules:

* `type` must match renderer expectation
* `at` = absolute time
* item does NOT know about slide

---

## 4. Builder API

### 4.1 Context System (IMPORTANT)

```js
b.at(0).titleAndSubtitle().title("Hello")
```

Flow:

1. `at()` → sets `_pendingStart`
2. `slide()` → creates Slide + sets `_currentSlide`
3. `item()` → pushes into `_currentSlide`

---

### 4.2 Core State

```js
this._slides
this._currentSlide
this._pendingStart
this._currentLine // for EQ only
```

---

### 4.3 `at()` method

```js
TaleemBuilder.prototype.at = function (time) {
  this._pendingStart = time;
  return this;
};
```

👉 Does NOT create slide
👉 Only prepares timing

---

### 4.4 Slide Creation Pattern

```js
TaleemBuilder.prototype.titleAndSubtitle = function () {
  const slide = new Slide("titleAndSubtitle", this._pendingStart);

  this._slides.push(slide);
  this._currentSlide = slide;
  this._pendingStart = null;

  return this;
};
```

---

### 4.5 Item Pattern

```js
TaleemBuilder.prototype.title = function (text, at = 0) {
  this._currentSlide.addItem({
    id: uuid(),
    type: "title",
    text,
    at
  });

  return this;
};
```

---

## 5. Slide Types Implemented

### 5.1 Title + Subtitle

```js
.title("Hello", 0)
.subtitle("World", 2)
```

---

### 5.2 Title + Para

```js
.title("What is Taleem?", 10)
.para("Structured learning system", 12)
```

---

### 5.3 Bullet List

```js
.heading("Points", 10)
.bullet("A", 11)
.bullet("B", 12)
```

⚠️ Important:

* `"heading"` NOT `"title"`

---

### 5.4 EQ Slide

Structure:

```js
.eqHeading("Math", 20)
  .eqSpText("Intro")

.eqMath("a + b", 22)
  .eqSpText("Step")
```

Internal:

```js
{
  type: "math",
  text: "a + b",
  at: 22,
  spItems: [...]
}
```

---

## 6. Compiler

### 6.1 Purpose

Convert:

```js
{ type, text, at }
```

→

```js
{ name, content, timings }
```

---

### 6.2 `compileSlide`

```js
{
  name: item.type,
  content: item.text,
  timings: [{ time: item.at, event: "show" }]
}
```

---

### 6.3 `compileEq`

Same logic + `spItems`

---

### 6.4 `timings.js`

```js
export function toTimings(time) {
  return [{ time, event: "show" }];
}
```

---

## 7. Timeline Rules

### Rule 1

```
item.at = absolute time
```

---

### Rule 2

```
deck.end >= max(item.at)
```

---

### Rule 3

Slides must not overlap incorrectly

---

## 8. Renderer Contract

Renderer expects:

| Slide            | Items               |
| ---------------- | ------------------- |
| titleAndSubtitle | title, subtitle     |
| bulletList       | heading, bullet     |
| eq               | heading, math, text |

👉 Builder must match these EXACTLY

---

## 9. Key Design Decisions

### ✔ Single timeline

No relative offsets

### ✔ Slide = container only

No logic inside slide

### ✔ Items = pure data

No behavior

### ✔ Compiler = transformation layer

### ✔ Renderer = dumb

No logic, just render

---

## 10. What We Removed (Important)

❌ No `getLastSlide()`
❌ No `ensureType()`
❌ No global mutation
❌ No relative timings
❌ No hidden logic

---

## 11. Current System Strength

* Simple mental model
* No hidden state
* Fully predictable
* Easy to extend
* Production-ready

---

## 12. Next Work (Future)

* More slide types (trivial now)
* CLI for deck generation
* Validation layer (optional)
* Player/Stepper refinement

---

## 🔥 Final Summary

```text
Builder creates structure
Items carry absolute time
Compiler converts structure
Renderer displays it
```

👉 That’s the entire system.
