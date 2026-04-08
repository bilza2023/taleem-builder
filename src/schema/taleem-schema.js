import { z } from "zod";

/* ------------------ COMMON ------------------ */

const timing = z.object({
  time: z.number(),
  event: z.string()
});

const withTiming = (schema) =>
  schema.extend({
    timings: z.array(timing).min(1)
  });

/* ------------------ ITEMS ------------------ */

const title = withTiming(z.object({ name: z.literal("title"), content: z.string() }));
const subtitle = withTiming(z.object({ name: z.literal("subtitle"), content: z.string() }));
const para = withTiming(z.object({ name: z.literal("para"), content: z.string() }));
const heading = withTiming(z.object({ name: z.literal("heading"), content: z.string() }));
const text = withTiming(z.object({ name: z.literal("text"), content: z.string() }));

const bullet = withTiming(z.object({ name: z.literal("bullet"), content: z.string() }));

const image = withTiming(z.object({ name: z.literal("image"), content: z.string() }));
const caption = withTiming(z.object({ name: z.literal("caption"), content: z.string() }));

const row = withTiming(z.object({ name: z.literal("row"), content: z.string() }));

const bar = withTiming(
  z.object({
    name: z.literal("bar"),
    content: z.string(),
    spItems: z.array(
      z.object({ name: z.literal("value"), content: z.number() })
    ).length(1)
  })
);

const progress = withTiming(
  z.object({
    name: z.literal("progress"),
    content: z.string(),
    spItems: z.array(
      z.object({ name: z.literal("value"), content: z.number() })
    ).length(1)
  })
);

const card = withTiming(
  z.object({
    name: z.literal("card"),
    content: z.string(),
    spItems: z.array(
      z.object({ name: z.literal("icon"), content: z.string() })
    ).length(1)
  })
);

const quote = withTiming(z.object({ name: z.literal("quote"), content: z.string() }));
const author = withTiming(z.object({ name: z.literal("author"), content: z.string() }));

const leftText = withTiming(z.object({ name: z.literal("leftText"), content: z.string() }));
const rightText = withTiming(z.object({ name: z.literal("rightText"), content: z.string() }));

const spItem = z.object({
  name: z.enum(["text", "image"]),
  content: z.string()
});

const eqLine = withTiming(
  z.object({
    name: z.enum(["heading", "math"]),
    content: z.string(),
    spItems: z.array(spItem).optional()
  })
);

/* ------------------ SLIDES ------------------ */

const titleAndSubtitle = z.object({
  type: z.literal("titleAndSubtitle"),
  data: z.tuple([title, subtitle])
});

const titleAndPara = z.object({
  type: z.literal("titleAndPara"),
  data: z.tuple([title, para])
});

const bulletList = z.object({
  type: z.literal("bulletList"),
  data: z.array(bullet).min(1)
});

const twoColumnText = z.object({
  type: z.literal("twoColumnText"),
  data: z.tuple([leftText, rightText])
});

const imageSlide = z.object({
  type: z.literal("imageSlide"),
  data: z.tuple([image])
});

const imageWithTitle = z.object({
  type: z.literal("imageWithTitle"),
  data: z.tuple([title, image])
});

const imageWithCaption = z.object({
  type: z.literal("imageWithCaption"),
  data: z.tuple([image, caption])
});

const imageLeftBulletsRight = z.object({
  type: z.literal("imageLeftBulletsRight"),
  data: z.array(z.union([image, bullet])).min(2)
});

const imageRightBulletsLeft = z.object({
  type: z.literal("imageRightBulletsLeft"),
  data: z.array(z.union([image, bullet])).min(2)
});

const table = z.object({
  type: z.literal("table"),
  data: z.array(row).min(1)
});

const barChart = z.object({
  type: z.literal("barChart"),
  data: z.array(bar).min(1)
});

const progressbar = z.object({
  type: z.literal("progressbar"),
  data: z.tuple([progress])
});

const quoteSlide = z.object({
  type: z.literal("quoteSlide"),
  data: z.tuple([quote, author])
});

const keyIdeasSlide = z.object({
  type: z.literal("keyIdeasSlide"),
  data: z.array(card).length(4)
});

const focusList = z.object({
  type: z.literal("focusList"),
  data: z.array(z.union([heading, bullet])).min(2)
});

const eq = z.object({
  type: z.literal("eq"),
  data: z.array(eqLine).min(1)
});

const fillImage = z.object({
  type: z.literal("fillImage"),
  data: z.tuple([image])
});

const imageStrip = z.object({
  type: z.literal("imageStrip"),
  data: z.array(image).min(1)
});

const imageGrid = z.object({
  type: z.literal("imageGrid"),
  data: z.array(image).min(1)
});

const textGrid = z.object({
  type: z.literal("textGrid"),
  data: z.array(text).min(1)
});

const skeleton = z.object({
  type: z.literal("skeleton"),
  data: z.array(z.union([title, image, para])).min(1)
});

/* ------------------ UNION ------------------ */

const slide = z.union([
  titleAndSubtitle,
  titleAndPara,
  bulletList,
  twoColumnText,
  imageSlide,
  imageWithTitle,
  imageWithCaption,
  imageLeftBulletsRight,
  imageRightBulletsLeft,
  table,
  barChart,
  progressbar,
  quoteSlide,
  keyIdeasSlide,
  focusList,
  eq,
  fillImage,
  imageStrip,
  imageGrid,
  textGrid,
  skeleton
]);

/* ------------------ DECK ------------------ */

export const deckSchema = z.object({
  version: z.string(),
  name: z.string(),
  background: z.object({
    backgroundColor: z.string(),
    backgroundImage: z.any(),
    backgroundImageOpacity: z.number()
  }),
  deck: z.array(slide)
});

export const validateDeck = (deck) => deckSchema.parse(deck);