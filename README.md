# Radix Colors
A quick guide on using Radix Colors with Stitches.

## Installation

`yarn add @radix-ui/colors`

## Import scales
Import only the scales you need for your project. Dark mode scale variants use a `Dark` suffix.

```
import {
  // Grays
  gray,
  quartz,
  slate,
  sage,
  olive,
  sand,
  
  // Colors
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  sky,
  mint,
  cyan,
  teal,
  green,
  grass,
  lime,
  yellow,
  amber,
  orange,
  brown,
  bronze,
  gold,
  
  // Dark mode. All hues have a dark mode variant.
  slateDark,
  blueDark,
  redDark,
  yellowDark,
  greenDark,
} from "@radix-ui/colors";
```

## Define your themes

```
import { createCss } from "@stitches/react";
import {
  slate,
  blue,
  red,
  yellow,
  green,
  slateDark,
  blueDark,
  redDark,
  yellowDark,
  greenDark,
} from "@radix-ui/colors";

const { styled, theme } = createCss({
  theme: {
    colors: {
      ...slate,
      ...blue,
      ...red,
      ...yellow,
      ...green,
    }
  }
});

const darkTheme = theme({
  colors: {
    ...slateDark,
    ...blueDark,
    ...redDark,
    ...yellowDark,
    ...greenDark,
  },
});
```

## Use the colors
Each scale has 11 steps, from `000` to `1000`.
```
const Button = styled("button", {
  backgroundColor: "$blue200",
  color: "$blue900",
  "&:hover": {
    backgroundColor: "$blue300"
  },
  "&:active": {
    backgroundColor: "$blue400"
  }
});
```
----

## Choosing the right scale steps
Each of the 11 steps are designed for a specific use case.

### 000–100 Backgrounds

#### 000
For your main app/site background.

#### 100
For very subtle backgrounds.

- Striped table rows
- Alert/Banner backgrounds.
- Code block backgrounds.
- Header backgrounds.
- Sidebar/Panel backgrounds.
- Outlined Button backgrounds.

### 200–400 Interactive backgrounds

#### 200
For static backgrounds.

- Website sections
- Soft buttons
- Badges
- Chips

#### 300
For UI element background hover states.

#### 400
For UI element background pressed/selected states.

### 500–700 Lines & Borders

#### 500
For subtle lines/borders.

- Sidebar borders
- Header borders
- Separators/Dividers
- Non-interactive Card borders
- Alert/Banner borders etc.

#### 600
For interative UI element borders.

- Buttons
- Interactive card borders
- Interactive badge borders
- Form control borders etc.

#### 700
For interative UI element hover state borders.

### 800 Pure
For solid backgrounds.

- Solid button background.
- Accent Header background.
- Text field placeholder text.

### 900–1000 Text

#### 900
Low-contrast text

#### 1000
High-contrast text

-----

## Aliasing
It can be helpful to provide semantic token aliases, so devs don't need to think as much about mapping steps to use cases.

```
const { styled, theme } = createCss({
  theme: {
    colors: {
      ...slate,
      ...blue,
      ...red,
      ...green,

      // Semantic aliases

      grayBgApp: "$slate000",
      grayBgLight: "$slate100",
      grayBg: "$slate200",
      grayBgHover: "$slate300",
      grayBgActive: "$slate400",
      grayLine: "$slate500",
      grayBorder: "$slate600",
      grayBorderHover: "$slate700",
      grayPure: "$slate800",
      grayText: "$slate900",

      accentBase: "$blue000",
      accentBgLight: "$blue100",
      accentBg: "$blue200",
      accentBgHover: "$blue300",
      accentBgActive: "$blue400",
      accentLine: "$blue500",
      accentBorder: "$blue600",
      accentBorderHover: "$blue700",
      accentPure: "$blue800",
      accentText: "$blue900",
      
      dangerBase: "$red000",
      dangerBgLight: "$red100",
      dangerBg: "$red200",
      dangerBgHover: "$red300",
      dangerBgActive: "$red400",
      dangerLine: "$red500",
      dangerBorder: "$red600",
      dangerBorderHover: "$red700",
      dangerPure: "$red800",
      dangerText: "$red900",
      
      successBase: "$green000",
      successBgLight: "$green100",
      successBg: "$green200",
      successBgHover: "$green300",
      successBgActive: "$green400",
      successLine: "$green500",
      successBorder: "$green600",
      successBorderHover: "$green700",
      successPure: "$green800",
      successText: "$green900",
    }
  }
});
```

You can also create mutable token aliases by mapping an alias to a difference color in each theme.

```
const { styled, theme } = createCss({
  theme: {
    colors: {
      ...slate,
      ...blue,
      ...red,
      ...green,

      // Semantic aliases

      appBackground: 'white',
      panel: "white",
      contrast: "$slate1000",
    }
  }
});

const darkTheme = theme({
  colors: {
    ...slateDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    
    appBackground: '$slate000',
    panel: "$slate200",
    contrast: "white",
  },
});
```

=======

## Authors

- Colm Tuite ([@colmtuite](https://twitter.com/colmtuite))
- Vlad Moroz ([@vladyslavmoroz](https://twitter.com/vladyslavmoroz))
