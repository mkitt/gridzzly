# Gridzzly.
React component for aligning layouts.

[![Travis Build Status](https://travis-ci.org/mkitt/gridzzly.svg?branch=master)](https://travis-ci.org/mkitt/gridzzly)

## Installation

```sh
npm install gridzzly --save
# or
yarn add gridzzly
```

## Usage
Gridzzly fills the parent container with a grid.

As fixed grid over the entire page:

```js
<main style={{ position: 'relative' }}>
  <Gridzzly
    autoHide
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
columnSize?: ?number,     // defaults to `size`
colorInner?: string,      // rgba(255, 0, 255, 0.5)
colorOuter?: string,      // rgba(255, 0, 255, 1.0)
cycleKey?: ?string,       // null (key to cycle rows & columns)
dashInner?: string,       // '2, 2'
dashOuter?: string,       // '' (solid line)
hasInner?: boolean,       // true
isDisabled?: boolean,     // false
opacity?: number,         // 0.2
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

## Releasing
Travis takes care of publishing to npm and to the `pages` branch on a tagged
commit. Run the following when ready for a version bump:

```sh
yarn version
git push origin master —-tags
```

Then edit the Release on GitHub.

## Todo
- [ ] Declare flowtypes
- [ ] Improve docs
