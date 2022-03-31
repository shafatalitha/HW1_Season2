
import React, {useEffect,useState}from 'react'
import Card from "../../Component/Card";
import Search from '../../Component/Search';
import config from '../../lib/config'

const Home=()=>{
const[accessToken, setAccessToken]=useState('');
const[isLogin, setIsLogin]=useState(false);
const[tracks,setTracks]=useState([]);
const [selectedTracksUri, setSelectedTracksUri] = useState([]);
  useEffect(()=>{
   
    const access_token= new URLSearchParams(window.location.hash).get('#access_token')
    setAccessToken(access_token) 
    setIsLogin(access_token !== null)
  },[]);

  
  const onSuccessSearch = (searchTracks) => {
   
    const selectedTracks = filterSelectedTracks();
    const searchDistincTracks = searchTracks.filter(track => !selectedTracksUri.includes(track.uri));

    setTracks([...selectedTracks, ...searchDistincTracks]);
  }
 const generateSpotifyLinkAuthorize=()=>{
    console.log(process.env)
    const state = Date.now().toString()
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    return`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000&state=${state}&scope=${config.SPOTIFY_SCOPE}`
  }
  const toggleSelect = (track) => {
    const uri = track.uri;

    if (selectedTracksUri.includes(uri)) {
      setSelectedTracksUri(selectedTracksUri.filter(item => item !== uri));
    } else {
      setSelectedTracksUri([...selectedTracksUri, uri]);
    }
  }
  const filterSelectedTracks = () => {
    return tracks.filter(track => selectedTracksUri.includes(track.uri));
  }
  
    return(
    
            <div className="album-wrap">
              {!isLogin&&(
              <a href={generateSpotifyLinkAuthorize()}>Authorize</a>)}
              <Search accessToken={accessToken} onSuccess={(tracks) => onSuccessSearch(tracks)}/>
              <div className="album-card">
                {tracks.map((item)=>(
                    <Card key={item.id} title= {item.name} artist={item.artists[0].name} img={item.album.images[0].url} toggleSelect={() => toggleSelect(item)} />
                ))}
                </div>
            </div>
          )
    
  
}





// const Home=()=> {
//   return (
//     <div className="album-card">
//         {data.map((item)=>(
//             <Card key={item.id} title= {item.name} artist={item.artists[0].name} img={item.album.images[0].url} />
//         ))}
//     </div>
//   )
// }

export default Home