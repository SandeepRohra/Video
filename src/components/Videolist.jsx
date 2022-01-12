import react from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  //ese b kar sakte h

  const renderList = videos.map((video) => {
    return <VideoItem video={video} />
  })
  return <div>{renderList}</div>
}

export default VideoList

//step 1 Apan ek component banaye VideoList and ek component banaye videoItem.jsx
//step 2 props ko destrucre kiye ki srif video mille
//step 3 us videos ko map kar diye aur har ek video m VideoItem ko return kar diye
//step 4// usko ek const m store kiye and then Video list k function m usko return kar diye ek div k andar us const ko
//ab sidha vide ite.jsx m jaa
