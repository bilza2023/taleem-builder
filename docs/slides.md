
# 🎬 Slides Reference

This document defines all available slide types and their required items.

Each slide follows:

```js
b.at(time)
  .slideType()
  .item(...)
````

---

# 🟢 Basic Slides

## titleAndSubtitle

```js
b.at(0)
  .titleAndSubtitle()
  .title("Main Title", 0)
  .subtitle("Subtitle text", 2);
```

---

## titleAndPara

```js
b.at(10)
  .titleAndPara()
  .title("Topic", 10)
  .para("Explanation text", 13);
```

---

## bulletList

```js
b.at(20)
  .bulletList()
  .bullet("Point 1", 20)
  .bullet("Point 2", 22)
  .bullet("Point 3", 24);
```

---

## twoColumnText

```js
b.at(30)
  .twoColumnText()
  .leftText("Left content", 30)
  .rightText("Right content", 34);
```

---

# 🟡 Image Slides

## imageSlide

```js
b.at(40)
  .imageSlide()
  .image("image.png", 40);
```

---

## imageWithTitle

```js
b.at(50)
  .imageWithTitle()
  .title("Visual Title", 50)
  .image("image.png", 53);
```

---

## imageWithCaption

```js
b.at(60)
  .imageWithCaption()
  .image("image.png", 60)
  .caption("Description", 63);
```

---

## imageLeftBulletsRight

```js
b.at(70)
  .imageLeftBulletsRight()
  .image("image.png", 70)
  .bullet("Point 1", 72)
  .bullet("Point 2", 74);
```

---

## imageRightBulletsLeft

```js
b.at(80)
  .imageRightBulletsLeft()
  .image("image.png", 80)
  .bullet("Point 1", 82)
  .bullet("Point 2", 84);
```

---

# 🔵 Data Slides

## table

```js
b.at(90)
  .table()
  .row("A , B", 90)
  .row("1 , 2", 92);
```

---

## barChart

```js
b.at(100)
  .barChart()
  .bar("Clarity", 6, 100)
  .bar("Structure", 5, 102);
```

---

## progressbar

```js
b.at(110)
  .progressbar()
  .progress("Lesson Progress", 60, 110);
```

---

# 🟣 Conceptual Slides

## quoteSlide

```js
b.at(120)
  .quoteSlide()
  .quote("Learning should be simple", 120)
  .author("— Taleem", 123);
```

---

## keyIdeasSlide

```js
b.at(130)
  .keyIdeasSlide()
  .card("Focus", "🧠", 130)
  .card("Clarity", "📘", 132);
```

---

## focusList

```js
b.at(160)
  .focusList()
  .heading("Steps", 160)
  .bullet("Step 1", 162)
  .bullet("Step 2", 164);
```

---

# 🔴 Advanced Slides

## eq

```js
b.at(140)
  .eq()
  .eqHeading("Equation", 140)
  .eqSpText("Explanation")
  .eqMath("a + b", 143);
```

---

## fillImage

```js
b.at(150)
  .fillImage()
  .image("image.png", 150);
```

---

## imageStrip

```js
b.at(170)
  .imageStrip()
  .image("a.png", 170)
  .image("b.png", 172);
```

---

## imageGrid

```js
b.at(180)
  .imageGrid()
  .image("a.png", 180)
  .image("b.png", 182);
```

---

## textGrid

```js
b.at(200)
  .textGrid()
  .text("Item 1", 200)
  .text("Item 2", 202);
```

---

## skeleton

```js
b.at(190)
  .skeleton()
  .title("Topic", 190)
  .image("image.png", 192)
  .para("Explanation", 194);
```

---

# 🧠 Notes

* All slides are **data-only**
* Layout is handled by renderer
* Order of items matters
* Timing controls visibility

