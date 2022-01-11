import React from 'react'
class SearchBar extends React.Component {
  state = { term: '' }
  onInputChange = (event) => {
    this.setState({ term: event.target.value })
    console.log(event.target.value)
  }
  onFormSubmt = (event) => {
    event.preventDefault() //2) event argument daal kar event.preventDefault function daalte h

    //to Do:MAke sure to call Callback from parrent component
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmt} className="ui form">
          {/* 1) onSubmit m hamesha ek function dalte h and usme  */}
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
