import React from 'react'
const VideoDetail = ({ video }) => {
  // step 3 apan us video prop ko yaha laye
  if (!video) {
    //and agar vo nii h to apan uski jaha y show karenge y vo null/ khali h to
    return <div>Search to see results here</div>
  } else {
    return <div>{video.snippet.title}</div> //ni o us titkle ko show karenge
  }
}
export default VideoDetail
