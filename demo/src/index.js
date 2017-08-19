import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
    testChangedHandler(v) {
        console.log('Value Changed', v);
    }

    render() {
        return <div>
            <h1>rating-picker Demo</h1>
            <Example min={3} max={5} potential={'F'} includeFormElements="true" valueChanged={this.testChangedHandler.bind(this)}/>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
