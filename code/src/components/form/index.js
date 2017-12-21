import React from "react"

export default class Form extends React.Component {

  // This starts by showing an empty form
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  // This listens to any new text input in the form
  onChange = event => {
    this.setState({ text: event.target.value })
  }

  // This listens to clicking of submit button to know
  // when to show the task in To Do list
  onSubmit = event => {
    event.preventDefault()
    console.log("To DO added", this.state.text)
    this.props.onNewItem(this.state.text)
    this.setState({ text: "" })
  }

  // This Renders the static question and text input field
  // and submit buttons on the screen
  render() {
    return (
      <div className="addInput">
        <form onSubmit={this.onSubmit}>
          <h1>What would you want to add on your To Do -list?</h1>
          <input
            type="text"
            value={this.state.text}
            onChange={this.onChange} />
          <button>Submit</button>
          <p>You added tasks called {this.state.newTaskText}</p>
        </form>
      </div>
    )
  }

}
