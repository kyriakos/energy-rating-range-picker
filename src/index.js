import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";
import "./styles.scss";

import React, {Component} from "react";
import Rheostat from "rheostat";
import SelectionIndicator from "./RatingSelectionIndicator";
import PotentialRating from "./PotentialRating";
import FilterHelp from "enerfund-filter-help";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {min: props.min, max: props.max, potential: props.potential};
        this.valueChanged = this.valueChanged.bind(this);
    }

    setSlide(v) {
        const newState = {...this.state, min: parseInt(v.values[0]), max: parseInt(v.values[1])};
        this.setState(newState);
    }

    updatePotential(p) {
        this.setState({...this.state, potential: p});
    }

    ratingNumberToLetter(n) {
        return String.fromCharCode(n + 64);
    }

    valueChanged(v) {
        if (typeof this.props.valueChanged === 'function') {
            this.props.valueChanged(
                {
                    ...this.state, source: 'RatingPicker'
                }
            );
        }
    }

    render() {

        let inputElements = '';
        let potential = '';
        let potentialTitle = '';

        let formElements = [];

        if (this.props.includeFormElements) {
            formElements.push(
                <input type="hidden" key="min" name="energyrating_low" value={this.ratingNumberToLetter(this.state.min)}/>
            );
            formElements.push(
                <input type="hidden" key="max" name="energyrating_high" value={this.ratingNumberToLetter(this.state.max)}/>
            );

            if (this.props.hasPotential) {
                formElements.push(<input key="potential" type="hidden" name="energyrating_potential" value={this.state.potential}/>);
            }

            inputElements = <div>{formElements}</div>;
        }


        if (this.props.hasPotential) {
            potential = (<FilterHelp help="Estimated potential energy rating converted into a linear 'A to G' rating (where A is the most energy efficient and G is the least energy efficient)">
                <PotentialRating value={this.state.potential} start={this.state.min} potentialChanged={this.updatePotential.bind(this)}/>
                </FilterHelp>);

            potentialTitle = <h4>Potential Rating</h4>;
        }
        return (
            <div className="rating-picker">
                <h4>Rating</h4>
                <FilterHelp
                    help="Current energy rating converted into a linear 'A to G' rating (where A is the most energy efficient and G is the least energy efficient)">
                    <SelectionIndicator min={this.state.min} max={this.state.max}/>
                    <div className="rating-rheostat">
                        <Rheostat min={1} max={7} values={[this.state.min, this.state.max]} snap={true}
                                  onValuesUpdated={this.setSlide.bind(this)} onChange={this.valueChanged}/>
                    </div>
                </FilterHelp>
                {potentialTitle}
                {potential}

                {inputElements}
            </div>);
    }
}