import React, { Component } from 'react'
import Name from './Name'

class NamesContainer extends Component {
    render() {
        if (this.props.isShow) {
            if (this.props.names.length > 0) {
                return (
                    <div class="search-result">
                        {this.props.names.map(name => <Name searchKey={this.props.searchKey} name={name} />)}
                    </div>
                )
            } else {
                return (
                    <p class="no-search">
                        Oops! Looks like no matches found
                    </p>
                )
            }
        } else {
            return ''
        }
    }
}
export default NamesContainer