import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../Apis/youtube'

class App extends React.Component {
  state = { videos: [] } // step 1 state initalise kiye usme ek object banaye
  //step2 usme ek key videos banye and usko empty string kar diye
  onTermSubmit = async (term) => {
    // step3 then async await activate kiye
    const response = await youtube.get(`search`, {
      //step4 youtube.get ko ek const m store kiye and usko response name diye
      params: {
        q: term,
      },
    })
    this.setState({ videos: response.data.items }) // step 5 fir this.setState karke us response ko state m daal diye
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />i got
        {this.state.videos.length} videos
        {/* step 6 fir utti videos ko utha ke luski length show kar diye */}
      </div>
    )
  }
}

export default App
