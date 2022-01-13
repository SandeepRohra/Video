import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../Apis/youtube'
import VideoList from './Videolist'

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  onTermSubmit = async (term) => {
    const response = await youtube.get(`search`, {
      params: {
        q: term,
      },
    })
    this.setState({ videos: response.data.items }) //this is how it contains videos
  }
  onVideoSelect = (video) => {
    //step 2 usko ek function pass kiye jo ki log karega video  and y video kaha s aai iske liye
    //Video list m step 3 dekh
    console.log('from the app', video)
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onSelectingVideo={this.onVideoSelect} // step 1) => sabse pahle apan app.js k video list m ek prop banaye
        />
      </div>
    )
  }
}

export default App
