import React from "react"
import ListItem from "components/listItem"

const tasksJson = require("components/tasks.json")

export default class List extends React.Component {

  render() {
    return (
      <div className="task-container">
        <h2>My To Do -list</h2>
        {tasksJson.tasks.map((item) => {
          return <ListItem
            key={item.id}
            name={item.name} />
        })}
      </div>
    )
  }

}
