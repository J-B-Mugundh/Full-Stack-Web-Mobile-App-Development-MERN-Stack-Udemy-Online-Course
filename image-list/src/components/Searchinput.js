import React, { Component } from 'react'

class Searchinput extends Component {

  constructor(props){
    super(props)
    this.state = {entry: ''}

    // We need to bind : Method - 1
    // this.onFormSubmit = this.onFormSubmit.bind(this)
    // Method 2 - Using arrow function
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry)
  }

  render() {
    return (
      <div className = 'ui segment'>
        <form onSubmit = {this.onFormSubmit} className = 'ui form'>
            <div className = 'field'>
                <ui className = 'ui massive icon input'>
                    <input type = "text" placeholder="Search..." 
                    onChange = {(event) => this.setState({entry: event.target.value})} 
                    value={this.state.entry}/> {/* onSubmit onClick */}
                    <i className = 'search icon'></i>
                </ui>
            </div>
        </form>
      </div>
    )
  }
}

export default Searchinput
