import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }
  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }
  onFormSubmt = (event) => {
    event.preventDefault()
    this.props.onSearchSubmit(this.state.term) // term step 3 fir apan us prop ko onFormSubmit m laa ke use state k equal kar diye
    // to vo input ki value querry m chaegyi
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmt} className="ui form">
          <div className="feild">
            <label>Video Search:- </label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button>Search</button>
          </div>
        </form>
      </div>
    )
  }
}
export default SearchBar
