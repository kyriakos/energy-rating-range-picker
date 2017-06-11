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
    const newState = { ...this.state, min: parseInt(v.values[ 0 ]), max: parseInt(v.values[ 1 ]) };
    this.setState(newState);
  }

  updatePotential (p) {
    this.setState({ ...this.state, potential: p });
  }

  ratingNumberToLetter (n) {
    return String.fromCharCode(n + 64);
  }

  render () {

    let inputElements;
    if (this.props.includeFormElements) {
      inputElements = <div>
        <input type="hidden" name="energyrating_low" value={this.ratingNumberToLetter(this.state.min)}/>
        <input type="hidden" name="energyrating_high" value={this.ratingNumberToLetter(this.state.max)}/>
        <input type="hidden" name="energyrating_potential" value={this.state.potential}/>
      </div>;
    } else inputElements = '';

    return (
      <div className="rating-picker">
        <h3>Rating</h3>
        <SelectionIndicator min={this.state.min} max={this.state.max}/>
        <div className="rating-rheostat">
          <Rheostat min={1} max={7} values={[ this.state.min, this.state.max ]} snap={true}
                    onValuesUpdated={this.setSlide.bind(this)}/>
        </div>
        <h3>Potential Rating</h3>
        <PotentialRating value={this.state.potential} start={this.state.min}
                         potentialChanged={this.updatePotential.bind(this)}/>

        {inputElements}
      </div>);
  }
}
