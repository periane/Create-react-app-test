import React, { Component } from "react";
import List from "../components/List";
import Form from "../components/Form";
import data from "../data.json";

class Appartement extends Component {
  constructor(props) {
    super(props); //pour reconnaitre les props

    this.state = {
      // initialise les variables utilisé en guise de props
      value: "",
      appartements: data.appartements
    };

    this.handleChange = this.handleChange.bind(this); //recupere le bon this
  }

  handleChange(ev) {
    this.setState({
      value: ev.currentTarget.value, //cible l'ev qui est dans l'input
      appartements: data.appartements.filter(
        appartement =>
          appartement.name /// filtre les appart ayant le bon nom
            .toLowerCase()
            .includes(ev.currentTarget.value.toLowerCase()) //inclus la valeur d l'input en miniscule
      )
    });
  }

  render() {
    return (
      <div>
        <h1>Ma liste d'appartements</h1>
        <Form value={this.state.value} handleChange={this.handleChange} />
        <header>
          <List appartements={this.state.appartements} />
        </header>
      </div>
    );
  }
}

export default Appartement;
