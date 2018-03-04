<img src="https://mkitt.net/apple-touch-icon.png" width="80px" height="80px" />

# Gridzzly.
React component for aligning layouts.

View the [demo](http://mkitt.net/gridzzly/).

🐻🐼 

[![Travis Build Status](https://travis-ci.org/mkitt/gridzzly.svg?branch=master)](https://travis-ci.org/mkitt/gridzzly)

## Installation

```sh
npm install gridzzly --save
# or
yarn add gridzzly
```

## Usage
Gridzzly fills the parent container with a grid.

As a fixed grid over the entire page:

```js
<main style={{ position: 'relative' }}>
  <Gridzzly
    autoHide
    persist
    cycleKey="~"
    position="fixed"
    size={32}
    toggleKey="`"
    zIndex={666}
  />
</main>
```

Or as a grid over a contained component:

```js
<main>
  <section style={{ position: 'relative', height: 320 }}>
    <h1>Hello.</h1>
    <Gridzzly
      colorOuter="green"
      columnSize={8}
      hasInner={false}
      rowSize={16}
    />
  </section>
</main>
```

## Options, types and default values

```js
autoHide?: boolean,       // false
colorInner?: string,      // rgba(255, 0, 255, 0.5)
colorOuter?: string,      // rgba(255, 0, 255, 1.0)
columnSize?: ?number,     // defaults to `size`
cycleKey?: ?string,       // null (key to cycle rows & columns)
dashInner?: string,       // '2, 2'
dashOuter?: string,       // '' (solid line)
hasInner?: boolean,       // true
isDisabled?: boolean,     // false
opacity?: number,         // 0.2
persist: boolean          // false (store grid state in sessionStorage)
rowSize?: ?number,        // defaults to `size`
size?: number,            // 16,
strokeWidth?: number,     // 1,
toggleKey?: ?string,      // null (key to toggle grid)
position?: 'absolute' | 'fixed' | 'sticky' | 'static', // absolute
top?: number | string,    // 0
right?: number | string,  // 0
bottom?: number | string, // 0
left?: number | string,   // 0
zIndex?: number,          // 2
```

[mkitt.net][mkitt.net] | [github/mkitt][github]

[github]: https://github.com/mkitt "@mkitt"
[mkitt.net]: https://mkitt.net "🏔"
