import TaleemBuilder from "../src/index.js";

const b = new TaleemBuilder();

b.meta({ name: "Golden Test" });

// 1️⃣ titleAndSubtitle
b.at(0)
  .titleAndSubtitle()
  .title("Taleem Slides", 0)
  .subtitle("Structured learning", 3);

// 2️⃣ titleAndPara
b.at(10)
  .titleAndPara()
  .title("What is Taleem?", 10)
  .para("A system for structured slides", 13);

// 3️⃣ bulletList
b.at(20)
  .bulletList()
  .heading("Key Points", 20)
  .bullet("Clean data", 22)
  .bullet("Predictable slides", 24)
  .bullet("Full control", 26);

// 4️⃣ imageSlide
b.at(30)
  .imageSlide()
  .image("image.png", 30);

// 5️⃣ imageWithTitle
b.at(40)
  .imageWithTitle()
  .title("Visual Support", 40)
  .image("image.png", 43);

// 6️⃣ imageWithCaption
b.at(50)
  .imageWithCaption()
  .image("image.png", 50)
  .caption("Images improve clarity", 53);

// 7️⃣ imageLeftBulletsRight
b.at(60)
  .imageLeftBulletsRight()
  .image("image.png", 60)
  .bullet("One idea per slide", 62)
  .bullet("Step-by-step reveal", 64)
  .bullet("Clear structure", 66);

// 8️⃣ imageRightBulletsLeft
b.at(70)
  .imageRightBulletsLeft()
  .image("image.png", 70)
  .bullet("Stable layout", 72)
  .bullet("Controlled pace", 74)
  .bullet("Better focus", 76);

// 9️⃣ table
b.at(80)
  .table()
  .row("Layer , Role", 80)
  .row("Builder , Creates slides", 82)
  .row("Compiler , Transforms data", 84);

// 🔟 barChart
b.at(90)
  .barChart()
  .bar("Clarity", 6, 90)
  .bar("Structure", 5, 92)
  .bar("Visual", 4, 94);

// 1️⃣1️⃣ progressbar
b.at(100)
  .progressbar()
  .progress("Lesson Progress", 60, 100);

// 1️⃣2️⃣ eq
b.at(110)
  .eq()
  .eqHeading("Math", 110)
  .eqMath("a + b", 113);

// end
b.end(120);

console.log(JSON.stringify(b.build(), null, 2));