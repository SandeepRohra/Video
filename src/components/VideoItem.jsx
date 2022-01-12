import React from 'react'
const VideoItem = ({ video }) => {
  //yaha same apan props s video destrucre kar liye
  return (
    <div>
      {/* step 1 apan us video ki image property aise desplay kiye video ko log karke uske andar search kare 
    and then usko yaha display kiye */}
      <img src={video.snippet.thumbnails.medium.url} />
      {/* same for title */}
      {video.snippet.title}
    </div>
  )
}
export default VideoItem
