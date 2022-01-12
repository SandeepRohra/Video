import axios from 'axios'

const KEY = 'AIzaSyBTcLjqbP2i-OIZfL9l-k8rKlEBSpzabug'

//step 1 - installed axios from npm i --save axios
//step 2 - imported axios
//step 3 fir apan expor default m axios create k function diye
//step 4 usme baseURL dete h fir uske baad , laga k params diye
//step 5 docs s dekh k pata chala y sab part m 'snipit' dalte h tye m 'video'and max results apne hisab s daal sakte h
// step 6 fir uske baad apni api key dete h key m
//step 7 now go to app.js

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3', //last / nii include kiye
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY, //y docs m ention nii h but apan ko key dalni hote h perams m,
  },
})
