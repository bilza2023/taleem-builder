// Core
import TaleemBuilder from "./core/Builder.js";

// API
import "./api/meta.js";
import "./api/background.js";
import "./api/at.js";
import "./api/end.js";

// ───────────── Slides ─────────────

// basic
import "./registry/slides/titleAndSubtitle.js";
import "./registry/slides/titleAndPara.js";
import "./registry/slides/bulletList.js";
import "./registry/slides/twoColumnText.js";

// image family
import "./registry/slides/imageSlide.js";
import "./registry/slides/imageWithTitle.js";
import "./registry/slides/imageWithCaption.js";
import "./registry/slides/imageLeftBulletsRight.js";
import "./registry/slides/imageRightBulletsLeft.js";

// advanced
import "./registry/slides/table.js";
import "./registry/slides/barChart.js";
import "./registry/slides/progressbar.js";

// conceptual
import "./registry/slides/quoteSlide.js";
import "./registry/slides/keyIdeasSlide.js";
import "./registry/slides/focusList.js";

// eq
import "./registry/slides/eq.js";

// layout
import "./registry/slides/fillImage.js";
import "./registry/slides/imageStrip.js";
import "./registry/slides/imageGrid.js";
import "./registry/slides/textGrid.js";
import "./registry/slides/skeleton.js";

// ───────────── Items ─────────────

// text
import "./registry/items/title.js";
import "./registry/items/subtitle.js";
import "./registry/items/para.js";
import "./registry/items/heading.js";
import "./registry/items/text.js";

// list
import "./registry/items/bullet.js";

// image
import "./registry/items/image.js";
import "./registry/items/caption.js";

// table
import "./registry/items/row.js";

// charts
import "./registry/items/bar.js";
import "./registry/items/progress.js";

// cards
import "./registry/items/card.js";

// eq
import "./registry/items/eq.js";


///////////////////////////////////////

import "./registry/items/quote.js";
import "./registry/items/author.js";
import "./registry/items/leftText.js";
import "./registry/items/rightText.js";
// export
export default TaleemBuilder;
export { validateDeck, deckSchema } from "./schema/taleem-schema.js";