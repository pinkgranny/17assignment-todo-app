import React from "react"
import "./style.css"

export default class TaskItem extends React.Component {

  // This listens to the changes in the done checkbox
  handleCheckBoxChange = () => {
    this.props.onChange(this.props.id)
  }

  // And this shows to the end user
  // whether the item is checked done or not by using boolean
  render() {
    return (
      <div className="ListItem">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckBoxChange}
            checked={this.props.done} />
          {this.props.text}
        </label>
      </div>
    )
  }

}
