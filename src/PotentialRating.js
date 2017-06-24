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
    let selected = '';
    if (selectionState) {
      selected = label;
    }
    if (typeof this.props.potentialChanged === 'function') {

      this.props.potentialChanged(selected);
    }

    this.setState({ selected: selected });
  }

  ratingToNumber(r) {
      return r.charCodeAt(0) - 65;
  }

  render () {

    const values = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
      let ratingNum = this.ratingToNumber(this.state.selected);
      let selected;

    return <div className="PotentialRating">
      <ul>
        {values.map((v, i) => {
          console.log(this.ratingToNumber(this.state.selected), i,v,this.state.selected);
          selected = (ratingNum >= i);
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