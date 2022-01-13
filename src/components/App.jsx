import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../Apis/youtube'
import VideoList from './Videolist'
import VideoDetail from './VideoDetail'
class App extends React.Component {
  state = { videos: [], selectedVideo: null }
  componentDidMount() {
    this.onTermSubmit(`Tarak mheta ka ultah chasma`) // and component did mount m apan default search term rakh diyee
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get(`search`, {
      params: {
        q: term,
      },
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0], //apan bas selected video ko null rakhne ki jagha usko first video item kar diye
    })
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onSelectingVideo={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
