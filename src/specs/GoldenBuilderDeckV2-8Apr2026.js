

import TaleemBuilder from "taleem-builder";



export default function () {
  const b = new TaleemBuilder();


b.meta({ name: "Golden Deck V2 – Full Schema Coverage" });

// 1
b.at(0)
  .titleAndSubtitle()
  .title("Taleem Slides", 0)
  .subtitle("A calm, structured way to present ideas", 3);

// 2
b.at(10)
  .titleAndPara()
  .title("What is Taleem Slides?", 10)
  .para("Taleem Slides is a simple system that turns structured data into clear visual slides. Each slide is predictable, controlled, and designed to help students understand ideas step by step.", 13);

// 3
b.at(20)
  .bulletList()
  .bullet("Slides are generated from clean data", 20)
  .bullet("Nothing changes behind the scenes.However some lines do wrap.", 22)
  .bullet("The author controls what appears", 24)
  .bullet("The same lesson looks the same everywhere", 26);

// 4
b.at(30)
  .twoColumnText()
  .leftText("taleem-browser shows one complete slide at a time. Each slide appears fully and clearly.", 30)
  .rightText("taleem-player shows ideas gradually. Content appears step by step as the lesson progresses.", 34);

// 5
b.at(40)
  .imageSlide()
  .image("image.png", 40);

// 6
b.at(50)
  .imageWithTitle()
  .title("Visual Support Matters", 50)
  .image("image.png", 53);

// 7
b.at(60)
  .imageWithCaption()
  .image("image.png", 60)
  .caption("Images help anchor understanding", 63);

// 8
b.at(70)
  .imageLeftBulletsRight()
  .image("image.png", 70)
  .bullet("Each slide focuses on one idea", 72)
  .bullet("Points are revealed in order", 74)
  .bullet("No random or sudden changes", 76)
  .bullet("Students follow step by step", 78);

// 9
b.at(80)
  .imageRightBulletsLeft()
  .image("image.png", 80)
  .bullet("Slides remain stable and predictable", 82)
  .bullet("The teacher controls the pace", 84)
  .bullet("Students are never rushed", 86)
  .bullet("Learning stays calm and focused", 88);

// 10
b.at(90)
  .table()
  .row("Layer , Role", 90)
  .row("taleem-core , Defines the schema", 92)
  .row("taleem-slides , Renders slides", 94)
  .row("taleem-browser , Index-based viewing", 96)
  .row("taleem-player , Time-based playback", 98);

// 11
b.at(100)
  .barChart()
  .bar("Clarity", 6, 100)
  .bar("Structure", 5, 102)
  .bar("Visual Support", 4, 104)
  .bar("Consistency", 6, 106);

// 12
b.at(110)
  .progressbar()
  .progress("Lesson Progress", 60, 110);

// 13
b.at(120)
  .quoteSlide()
  .quote("Clarity makes learning easier for everyone.", 120)
  .author("— Taleem", 123);

// 14
b.at(130)
  .keyIdeasSlide()
  .card("Focus", "🧠", 130)
  .card("Clarity", "📘", 132)
  .card("Pace", "⏱️", 134)
  .card("Understanding", "🎯", 136);

// 15
b.at(140)
  .eq()
  .eqHeading("Structured Explanation", 140)
  .eqSpText("This is the first like ")
  .eqSpImage("/public/images/image.png")

  .eqMath("$(a + b)^2 = (a + b)(a + b)$", 143)
  .eqSpText("2nd line side panel content")
  .eqSpImage("/public/images/box.webp")

  .eqMath("$= a^2 + 2ab + b^2$", 146)
  .eqSpText("This is spItem of the third line.")
  .eqSpImage("/public/images/image.png");

// 16
b.at(150)
  .fillImage()
  .image("image.png", 150);

// 17
b.at(160)
  .focusList()
  .heading("Step-by-step focus", 160)
  .bullet("Understand the idea", 162)
  .bullet("Break it into parts", 164)
  .bullet("Apply the method", 166)
  .bullet("Verify the result", 168);

// 18
b.at(170)
  .imageStrip()
  .image("box.webp", 170)
  .image("image.png", 172)
  .image("box.webp", 174)
  .image("box.webp", 176)
  .image("whatisforce.webp", 177)
  .image("image.png", 178);

// 19
b.at(180)
  .imageGrid()
  .image("box.webp", 180)
  .image("whatisforce.webp", 182)
  .image("image.png", 183)
  .image("box.webp", 184)
  .image("whatisforce.webp", 185)
  .image("image.png", 186);

// 20
b.at(190)
  .skeleton()
  .title("Understanding Force", 190)
  .image("whatisforce.webp", 192)
  .para("Force is a push or pull that can change motion.", 194);

// 21
b.at(200)
  .textGrid()
  .text("Clear structure improves understanding", 200)
  .text("Each idea should be isolated", 202)
  .text("Visual layout reduces confusion", 204)
  .text("Clear structure improves understanding", 205)
  .text("Each idea should be isolated", 206)
  .text("Visual layout reduces confusion", 207);

// end
b.end(210);
return b.build();
}
// console.log(JSON.stringify(b.build(), null, 2));