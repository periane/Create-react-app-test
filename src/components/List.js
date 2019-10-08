import React from "react";
import Item from "./Item";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.appartements.map((appartement, i) => (
          <Item
            //key permet a react de se souvenir
            key={i}
            name={appartement.name}
            date={appartement.date}
            description={appartement.description}

            // synthaxe de destructuration {... appartement}
          />
        ))}
      </ul>
    );
  }
}

export default List;
