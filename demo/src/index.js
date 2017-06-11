import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>rating-picker Demo</h1>
      <Example min={3} max={5} potential={'F'} includeFormElements="true" />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
