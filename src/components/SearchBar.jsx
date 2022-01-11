import React from 'react'
class SearchBar extends React.Component {
  state = { term: '' }
  onInputChange = (event) => {
    //onchange m jo function pass karte h usme hamesha event hota h function m
    this.setState({ term: event.target.value }) //And then this.setState ko event.target.value k equal karte h
    console.log(event.target.value)
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
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
