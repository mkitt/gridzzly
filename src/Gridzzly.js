// @flow
import React, { PureComponent } from 'react'

const isListenable = props => (
  (typeof document !== 'undefined') && (props.cycleKey != null || props.toggleKey != null)
)

const defaultSize = (wanted, size) => (
  wanted != null ? wanted : size
)

const getSizes = props => ({
  cs: defaultSize(props.columnSize, props.size),
  rs: defaultSize(props.rowSize, props.size),
})

const getColumnLineOuter = (props) => {
  const { cs, rs } = getSizes(props)
  const dx = cs - (props.strokeWidth * 0.5)
  return `<line stroke='${props.colorOuter}' stroke-dasharray='${props.dashOuter}' x1='${dx}' y1='0' x2='${dx}' y2='${rs}'/>`
}

const getColumnLineInner = (props) => {
  const { cs, rs } = getSizes(props)
  const dx = (cs * 0.5) - (props.strokeWidth * 0.5)
  return `<line stroke='${props.colorInner}' stroke-dasharray='${props.dashInner}' x1='${dx}' y1='0' x2='${dx}' y2='${rs}'/>`
}

const getRowLineOuter = (props) => {
  const { cs, rs } = getSizes(props)
  const dy = rs - (props.strokeWidth * 0.5)
  return `<line stroke='${props.colorOuter}' stroke-dasharray='${props.dashOuter}' x1='0' y1='${dy}' x2='${cs}' y2='${dy}'/>`
}

const getRowLineInner = (props) => {
  const { cs, rs } = getSizes(props)
  const dy = (rs * 0.5) - (props.strokeWidth * 0.5)
  return `<line stroke='${props.colorInner}' stroke-dasharray='${props.dashInner}' x1='0' y1='${dy}' x2='${cs}' y2='${dy}'/>`
}

const getBase64GridString = ({ cs, rs, lines }) => (
  `data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${cs}' height='${rs}' viewBox='0 0 ${cs} ${rs}'><g fill='none' stroke-miter-limit='10'>${lines}</g></svg>`
)

const getLines = props => ([
  ...(props.showColumns && props.hasInner ? [getColumnLineInner(props)] : []),
  ...(props.showColumns ? [getColumnLineOuter(props)] : []),
  ...(props.showRows && props.hasInner ? [getRowLineInner(props)] : []),
  ...(props.showRows ? [getRowLineOuter(props)] : []),
].join())

const getStyle = (props) => {
  const lines = getLines(props)
  if (props.isDisabled || !lines.length) { return { display: 'none' } }
  const { cs, rs } = getSizes(props)
  const bgi = getBase64GridString({ cs, rs, lines })
  return {
    position: props.position,
    top: props.top,
    right: props.right,
    bottom: props.bottom,
    left: props.left,
    zIndex: props.zIndex,
    opacity: props.opacity,
    backgroundImage: `url("${bgi}")`,
    backgroundSize: `${cs}px ${rs}px`,
    pointerEvents: 'none',
    ...(props.style || {}),
  }
}

type Props = {
  autoHide?: boolean,
  columnSize?: ?number,
  colorInner?: string,
  colorOuter?: string,
  cycleKey?: ?string,
  dashInner?: string,
  dashOuter?: string,
  hasInner?: boolean,
  isDisabled?: boolean,
  opacity?: number,
  rowSize?: ?number,
  size?: number,
  strokeWidth?: number,
  toggleKey?: ?string,
  position?: 'absolute' | 'fixed' | 'sticky' | 'static',
  top?: number | string,
  right?: number | string,
  bottom?: number | string,
  left?: number | string,
  zIndex?: number,
}

type State = {
  showColumns: boolean,
  showRows: boolean,
}

export default class extends PureComponent<Props, State> {
  static defaultProps = {
    autoHide: false,
    colorInner: 'rgba(255, 0, 255, 0.75)',
    colorOuter: 'rgba(255, 0, 255, 1.0)',
    cycleKey: null,
    dashInner: '2, 2',
    dashOuter: '',
    hasInner: true,
    isDisabled: false,
    opacity: 0.2,
    size: 16,
    columnSize: null,
    rowSize: null,
    strokeWidth: 1,
    toggleKey: null,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
  }

  state = {
    showColumns: !(this.props.autoHide),
    showRows: !(this.props.autoHide),
  }

  componentDidMount() {
    if (isListenable(this.props)) {
      document.addEventListener('keydown', this.onKeyDown)
    }
  }

  componentWillUnmount() {
    if (isListenable(this.props)) {
      document.removeEventListener('keydown', this.onKeyDown)
    }
  }

  onKeyDown = (e: KeyboardEvent) => {
    const { cycleKey, toggleKey } = this.props
    if (toggleKey === e.key) {
      this.toggle()
    } else if (cycleKey === e.key) {
      this.cycle()
    }
  }

  cycle = () => {
    const { showRows, showColumns } = this.state
    if (showRows && showColumns) {
      this.setState({ showRows: false, showColumns })
    } else if (!showRows && !showColumns) {
      this.setState({ showRows, showColumns: true })
    } else if (showRows && !showColumns) {
      this.setState({ showRows: false, showColumns: true })
    } else if (!showRows && showColumns) {
      this.setState({ showRows: true, showColumns: false })
    }
  }

  toggle = () => {
    const { showRows, showColumns } = this.state
    if (showRows && showColumns) {
      this.setState({ showRows: false, showColumns: false })
    } else if (!showRows && !showColumns) {
      this.setState({ showRows: true, showColumns: true })
    } else if (showRows && !showColumns) {
      this.setState({ showRows, showColumns: true })
    } else if (!showRows && showColumns) {
      this.setState({ showRows: true, showColumns })
    }
  }

  render() {
    const elementProps = Object.assign({}, this.props)
    Object.keys(this.constructor.defaultProps).forEach((key) => {
      delete elementProps[key]
    })
    return (
      <div
        style={getStyle({ ...this.props, ...this.state })}
        {...elementProps}
      />
    )
  }
}
