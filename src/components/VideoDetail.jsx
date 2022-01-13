import React from 'react'
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Search to see results here</div>
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}` //step 1 apan ek const banye jisme hamari video ka src hai
    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} />
          {/* step 2- fir apan usko iframe m daale and uske src ko iske equal kar diye  */}
        </div>
        <div className="ui segment">
          <h4 className="ui header"> {video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )
  }
}
export default VideoDetail
