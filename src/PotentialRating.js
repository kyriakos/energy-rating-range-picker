import React, {Component} from "react";
import classNames from "classnames";

export default class extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selected: this.props.value
    }
  }

  render () {

    const values = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
    let selected;

    return <div className="PotentialRating">
      <ul>
        {values.map((v, i) => {

          selected = (v === this.state.selected);
          console.log(v, this.state.selected);
          return <PotentialRatingElement selected={selected} label={v} key={i} clickable={i + 1 > this.props.start}/>
        })}
      </ul>
    </div>
  }
}

class PotentialRatingElement extends Component {

  render () {
    let className = classNames({
        'enabled': this.props.clickable,
        'selected': this.props.selected
      }
    );
    return <li className={className}>{this.props.label}</li>;
  }
}