import React from "react";
import BtnResult from "./BtnResult";

class Result extends React.Component {
  render() {
    return (
      <div className="result">
        <p className="result">Итого: {this.props.res}р.</p>
        <BtnResult changeStyle={this.props.changeStyle} order={this.props.order}/>
      </div>
    );
  }
}

export default Result;
