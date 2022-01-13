import react from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onSelectingVideo }) => {
  // step 3=> apan sabse phle us prop ko idhar laaye
  //ese b kar sakte h

  const renderList = videos.map((video) => {
    return <VideoItem video={video} onSelectedVideo={onSelectingVideo} /> //step 4 => fir apan us prop ko video item m ek prop k jagha pass kiye
  }) //step 5 k liye videoItem.jsx m jaa
  return <div className="ui relaxed devide list">{renderList}</div>
}

export default VideoList
