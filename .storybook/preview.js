import React from 'react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core'
import { withConsole } from '@storybook/addon-console';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: {
    viewports: 'responsive', // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
  a11y: {
    // optional selector which element to inspect
    element: '#root',
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {},
    // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    options: {},
    // optional flag to prevent the automatic check
    manual: false,
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m='4'>
        <Story />
      </Box>
    </ThemeProvider>
  )
  ,
  ((storyFn, context) => withConsole()(storyFn)(context))
]
