// @flow
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import Document, { Head, Main, NextScript } from 'next/document'

const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; }
  html {
    font: normal 400 100% / 1.5 Montserrat, -apple-system, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body { position: relative; margin: 0; overflow-x: hidden; background-color: #fff; }
  ::selection { color: #fff; text-shadow: none; background: #000; }
  h1, h2, h3, h4, h5, h6, p { margin: 0; line-height: 1.25; }
  p { font-size: 14px; }
  a { color: inherit; background-color: transparent; -webkit-text-decoration-skip: objects; }
  .box {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 32px;
    height: 320px;
    background-color: #f0f0f0;
    z-index: 3;
  }
  .controls {
    position: relative;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr;
  }
  .constrain {
    margin: 16px;
  }
  @media(min-width: 47.5em) {
    .constrain {
      margin: 32px;
    }
    .controls {
      grid-template-columns: 1fr 1fr;
    }
  @media(min-width: 63.5em) {
    .constrain {
      margin: 64px;
    }
    .controls {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <style>{globalStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
