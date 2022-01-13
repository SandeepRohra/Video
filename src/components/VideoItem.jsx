import React from 'react'
import './VideoItem.css'
const VideoItem = ({ video, onSelectedVideo }) => {
  // step 5 sabse pahle aopan us videoLIst k prop ko yaha alag kiye
  return (
    <div
      className="video-item item"
      onClick={() => {
        //step 6 => fir apan usme onClick function daale arrow fnction and usme us prop ko is video k equal kardiye
        onSelectedVideo(video)
      }}
    >
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}
export default VideoItem
