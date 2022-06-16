import React from 'react'
import PropTypes from 'prop-types'

const List = (props) => {
  const arr = props.colors
  const lis = arr.map((item, index) => <li key={index}>{item.name}</li>)
  return <ul>{lis}</ul>
}

List.propTypes = {
  colors: PropTypes.array
}

class App extends React.Component {
  state = {
    colors: [{ name: 'asss' }]
  }
  render() {
    return (
      <div>
        <List colors={this.state.colors} />
      </div>
    )
  }
}

export default App
