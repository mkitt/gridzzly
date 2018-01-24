import React from 'react'
import renderer from 'react-test-renderer'
import Gridzzly from '../Gridzzly'

describe('<Gridzzly />', () => {
  it('shows the correct snapshot tree for the <Gridzzly> component (fixed)', () => {
    const component = (
      <Gridzzly
        columnSize={32}
        cycleKey="~"
        position="fixed"
        rowSize={64}
        toggleKey="`"
        data-stuff="stuff"
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('shows the correct snapshot tree for the <Gridzzly> component (defaults)', () => {
    const component = (
      <Gridzzly
        size={16}
        data-stuff="other-stuff"
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('shows the correct snapshot tree for the <Gridzzly> component (hidden)', () => {
    const component = (
      <Gridzzly
        autoHide
      />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
