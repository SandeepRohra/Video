import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../Apis/youtube' //step 8 youtube import kiye

class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get(`search`, {
      // step 9 axios tha vaha to youtube.get kiye usme apan vo string dalle and then
      params: {
        // step 10 params m term dale
        q: term, // term guide step 1 ye term is functionn ka h onTermSubmit
      },
    })
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        {/* term guide step 2 y function yaha onSearchSubmit m pass hua 
        ab sidha Searchbar vale component m jaa
         */}
      </div>
    )
  }
}

export default App
