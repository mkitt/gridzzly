// @flow
import React from 'react'
import Gridzzly from '../src/Gridzzly'

export default () => (
  <Main>
    <Gridzzly
      autoHide
      cycleKey="~"
      toggleKey="`"
      position="fixed"
      size={32}
    />
    <Box>
      <h1>Hello.</h1>
      <Gridzzly
        colorOuter="green"
        columnSize={8}
        hasInner={false}
        rowSize={16}
      />
    </Box>
  </Main>
)

// -------------------------------------

const mainRule = {
  position: 'relative',
}

const Main = ({ ...props }) => (
  <div style={mainRule} {...props} />
)

const boxRule = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: 320,
  margin: 64,
  backgroundColor: '#f0f0f0',
  zIndex: 3,
}

const Box = ({ ...props }) => (
  <div style={boxRule} {...props} />
)
