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

  // This receives the new input task name from the add task form field
  // by resetting the state -and adds it to the array of tasks?
  handleNewTask = newTaskText => {
    const task = { text: newTaskText, done: false }

    this.setState({
      tasks: [task, ...this.state.tasks]
    })
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
    })
  }

  // This listens to changes in the form and maps TaskItems
  // to show them on the screen
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
