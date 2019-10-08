import React from "react";
import moment from "moment";

class Item extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        {this.props.date ? (
          <h3>
            la disponibilite : {moment(this.props.date).format("MM Do YY")}
          </h3>
        ) : null}

        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: this.props.date ? "red" : "green",
            borderRadius: "20px"
          }}
        />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Item;
