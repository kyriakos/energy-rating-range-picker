import React, {Component} from "react";

export default class extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    const values = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];

    return <div className="RatingIndicator">
      <ul>
        {values.map((v) => {
          let cls = '';
          let i = v.charCodeAt(0) - 64;
          if ((i >= this.props.min) && (i <= this.props.max)) cls = 'active';
          return <li className={cls} key={v}>{v}</li>;
        })}
      </ul>
    </div>
  }
}
