# Radix Chakra Colors

A fork of `@radix-ui/colors` with chakra ui's theme support.

A quick guide on using Radix Colors with Stitches.

## Documentation

For full documentation, visit [radix-ui.com/docs/colors](https://radix-ui.com/docs/colors).

## Installation

`yarn add @radix-ui/colors`

## Usage with Chakra UI

```jsx
import { extendTheme } from "@chakra-ui/react";
import { light, dark } from "radix-chakra-colors";

const theme = extendTheme({
  colors: {
    light,
    dark,
  },
});

export default theme;
```

## Using specific colors

```jsx
import { purple } from "radix-chakra-colors";
import { Text } from "@chakra-ui/react";

const MainComponent = () => {
  return (
    <>
      {/*
  Your component code */}

      <Text color="purple.purple4">hello!</Text>
    </>
  );
};
```
