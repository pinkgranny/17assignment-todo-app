import React from "react"
// import ListItem from "./listItem/index.js"
import Form from "./form/index.js"
import List from "./list/index.js"

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Form />
        <List />
        {/* <ListItem /> */}
      </div>
    )
  }

}
