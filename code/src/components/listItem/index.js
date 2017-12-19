import React from "react"
import "./style.css"

const tasksJson = require("./../tasks.json")

export default class ListItem extends React.Component {

  render() {
    return (
      <div className="ListItem">
        <ul>
          <li>
            <input
              type="radio"
              id={this.props.id}
              name={this.props.name} />
            <label htmlFor={this.props.id}>
              {this.props.name}
            </label>
          </li>
        </ul>
      </div>
    )
  }

}
