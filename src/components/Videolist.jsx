import react from 'react'

const VideoList = (props) => {
  // then yaha p us prop ki length co show kar diye
  return <div>{props.videos.length}</div>
}

export default VideoList
