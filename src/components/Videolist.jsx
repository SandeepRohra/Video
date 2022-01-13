import react from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onSelectingVideo }) => {
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onSelectedVideo={onSelectingVideo}
      />
    )
  })
  return <div className="ui relaxed devide list">{renderList}</div>
}

export default VideoList
