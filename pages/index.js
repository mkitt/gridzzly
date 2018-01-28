// @flow
import React, { PureComponent } from 'react'
import Gridzzly from '../src/Gridzzly'

type Props = {
}

type State = {
  colorInner?: string,
  colorOuter?: string,
  columnSize?: ?number,
  dashInner?: string,
  dashOuter?: string,
  hasInner?: boolean,
  opacity?: number,
  rowSize?: ?number,
  strokeWidth?: number,
  top?: number | string,
  right?: number | string,
  bottom?: number | string,
  left?: number | string,
}

export default class extends PureComponent<Props, State> {
  state = {
    colorInner: 'purple',
    colorOuter: 'blue',
    columnSize: 32,
    dashInner: '2, 2',
    dashOuter: '',
    hasInner: false,
    opacity: 0.2,
    rowSize: 64,
    strokeWidth: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }

  handleChange = ({ currentTarget }: SyntheticInputEvent<*>) => {
    const { name, type, value } = currentTarget
    const val = type === 'checkbox' ? !this.state[name] : value
    this.setState({ [name]: val })
  }

  render() {
    return (
      <Main>
        <Gridzzly
          autoHide
          persist
          cycleKey="~"
          toggleKey="`"
          position="fixed"
          size={32}
        />
        <div className="box constrain">
          <h1>Gridzzly.</h1>
          <p>React component for aligning layouts.</p>
          <Gridzzly {...this.state} />
        </div>
        <div className="constrain">
          <Control
            name="hasInner"
            onChange={this.handleChange}
            type="checkbox"
            value="hasInner"
            checked={this.state.hasInner === true}
          />
        </div>
        <div className="controls constrain">
          { Object.keys(this.state).filter(k => k !== 'hasInner').map(name => (
            <Control
              key={name}
              name={name}
              onChange={this.handleChange}
              type="text"
              value={String(this.state[name])}
            />
          ))}
        </div>
        <div className="constrain">
          <hr />
          <p>&raquo; Use the <code>`</code> key to toggle the full page grid</p>
          <p>&raquo; Use the <code>~</code> key to cycle the full page grid</p>
          <p>&raquo; View installation, usage, options and types on <a href="https://github.com/mkitt/gridzzly">GitHub</a></p>
        </div>
      </Main>
    )
  }
}
// -------------------------------------
const Main = ({ ...props }) => (
  <div style={{ position: 'relative' }} {...props} />
)

type ControlProps = {
  name: string,
  onChange: (SyntheticInputEvent<*>) => void,
  type: string,
  value: string,
}

const Control = ({ name, onChange, type, value, ...props }: ControlProps) => (
  <label htmlFor={name}>
    <span>{name} = </span>
    <input
      aria-label={name}
      id={name}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
      {...props}
    />
  </label>
)
