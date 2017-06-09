import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";
import "./styles.scss";

import React, {Component} from "react";
import Rheostat from "rheostat";
import SelectionIndicator from "./RatingSelectionIndicator";
import PotentialRating from "./PotentialRating";

export default class extends Component {

  constructor (props) {
    super(props);
    this.state = { min: props.min, max: props.max, potential: props.potential };
  }

  setSlide (v) {
    this.setState({
      min: parseInt(v.values[ 0 ]), max: parseInt(v.values[ 1 ])
    });
  }

  render () {
    return <div className="rating-picker">
      <h3>Rating</h3>
      <SelectionIndicator min={this.state.min} max={this.state.max}/>
      <Rheostat min={1} max={7} values={[ this.state.min, this.state.max ]} snap={true}
                onValuesUpdated={this.setSlide.bind(this)}/>
      <h3>Potential Rating</h3>
      <PotentialRating value={this.state.potential} start={this.state.max} />
    </div>
  }
}
