import React, {Component} from "react";
import classNames from "classnames";

export default class extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selected: this.props.value
    }
  }

  itemSelected (label, selectionState) {
    if (selectionState) {
      this.setState({ selected: label });
    } else {
      this.setState({ selected: '' });
    }
  }

  render () {

    const values = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
    let selected;

    return <div className="PotentialRating">
      <ul>
        {values.map((v, i) => {
          selected = (v === this.state.selected);
          return <PotentialRatingElement selected={selected} label={v} key={i} clickable={i + 1 < this.props.start}
                                         itemSelected={this.itemSelected.bind(this)}/>
        })}
      </ul>
    </div>
  }
}

class PotentialRatingElement extends Component {

  ratingClicked () {
    if (typeof this.props.itemSelected === 'function') {
      this.props.itemSelected(this.props.label, !this.props.selected);
    }
  }

  render () {
    let className = classNames({
        'enabled': this.props.clickable,
        'selected': this.props.selected
      }
    );
    return <li className={className} onClick={this.ratingClicked.bind(this)}>{this.props.label}</li>;
  }
}