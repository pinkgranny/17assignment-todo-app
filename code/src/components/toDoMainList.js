import React from "react"
import uuid from "uuid/v4"
import TaskItem from "./taskItem"
import Form from "./form"

export default class ToDoMainList extends React.Component {

// This defines the two things we need to know about each ToD-list item in an array:
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        // { id: uuid(), text: "Dishes", done: false },
        // { id: uuid(), text: "Groceries", done: true }
      ]
    }
  }

  // If something was saved earlierto the Local storage in this browser then set the state
  // with an object that is based on the string in the local storage
  componentWillMount() {
    if (localStorage.getItem("singleUserTasksToBeSaved")) {
      this.setState(JSON.parse(localStorage.getItem("singleUserTasksToBeSaved")))
    }
  }

  // This receives the new input task name from the add task form field
  // by resetting the state -and adds it to the array of tasks?
  // in this.Setstate each new item is now added to the top of the list
  handleNewTask = newTaskText => {
    const task = { text: newTaskText, done: false, id: uuid() }

    this.setState({
      tasks: [task, ...this.state.tasks]
    }, () => { localStorage.setItem("singleUserTasksToBeSaved", JSON.stringify(this.state)) }) // objects need to be stored as a string
  }

  // This checks if the universial id matches so
  // should the item be checked done or not for each task
  handleTaskDoneChange = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })

    this.setState({
      tasks: newTasks
    }, () => { localStorage.setItem("singleUserTasksToBeSaved", JSON.stringify(this.state)) }) // objects need to be stored as a string
  }
  // As JS is asyncronous, we need a function to make sure
  // that it is run only after the state of newTasks is updated,
  // as the newly updated object needs to be used

  // This listens to changes in the form and maps TaskItems
  // to show them on the screen and this will be rerendered after each time the state has changed
  render() {
    return (
      <div className="toDoMainList">
        <Form onNewItem={this.handleNewTask} />
        {this.state.tasks.map(task => (
          <TaskItem
            key={task.id}
            id={task.id}
            onChange={this.handleTaskDoneChange}
            text={task.text}
            done={task.done} />
        ))}

      </div>
    )
  }

}
