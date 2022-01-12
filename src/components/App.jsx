import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../Apis/youtube'
import VideoList from './Videolist'

class App extends React.Component {
  state = { videos: [] }

  onTermSubmit = async (term) => {
    const response = await youtube.get(`search`, {
      params: {
        q: term,
      },
    })
    this.setState({ videos: response.data.items }) //this is how it contains videos
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        {/* Step 1 created a videoList component exported it imported it here */}
        {/* and passed a prop of videos and make it equal to this.state.videos  which contains videos*/}
        {/* then go to Videolist.jsx */}
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App
