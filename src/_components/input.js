//J'importe React de la lib react
import React from 'react'
// Je déclare mon composant que j'appele LoginPage avec la lib de React.
export class Input extends React.Component {
  // Je construit ma classe
  // Avec les props qui sont les variables de mon parent
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className="form-control">
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}
