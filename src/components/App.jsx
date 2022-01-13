import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../Apis/youtube'
import VideoList from './Videolist'
import VideoDetail from './VideoDetail'
class App extends React.Component {
  state = { videos: [], selectedVideo: null } //step 1 sabse pahle apan state m ek aur property dalle selectedVideo karke
  // n usko null diye
  onTermSubmit = async (term) => {
    const response = await youtube.get(`search`, {
      params: {
        q: term,
      },
    })
    this.setState({ videos: response.data.items })
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video }) //step 2 fir idhar apan us state ko change karke us video k equal kar diye
  }
  //guide y video kaha s aai pata ni h to previous commit dekh

  //ab sdha VideoDetail.jsx m jaa
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onSelectingVideo={this.onVideoSelect}
        />
      </div>
    )
  }
}

export default App
