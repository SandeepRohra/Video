import axios from 'axios'

const KEY = 'AIzaSyBTcLjqbP2i-OIZfL9l-k8rKlEBSpzabug'
// added youtube api key

//1) gone to google devloper.io
//2)usedyoutube data api
//3) genrated api key from there
//4) pasted it here

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3', //last / nii include kiye
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY, //y docs m ention nii h but apan ko key dalni hote h perams m,
  },
})
