import React from "react"

export default class Form extends React.Component {

  render() {
    return (
      <div className="addInput">
        <form>
          <h1>What would you want to add on your To Do -list?</h1>
          <input
            type="text"
            name="newTask" />
          <input
            type="submit"
            value="Submit" />
        </form>
      </div>
    )
  }

}
