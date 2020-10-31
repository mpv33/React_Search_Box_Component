import React, { Component } from 'react'

class Name extends Component {
  render() {
    return (
      <div class="search-result-name">
        {this.props.name}
      </div>
    )
  }
}

export default Name