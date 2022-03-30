
import React, {Component}from 'react'
import Card from "../../Component/Card";
import Search from '../../Component/Search';
import data from "../../data/data";
import Config from "../../lib/config"

class Home extends Component{

  state = {
    accessToken:'',
    isLogin: false,
  }
  
  getHashParams() {
    const hashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    let e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  componentDidMount(){
    const params = this.getHashParams();
    const {access_token:accessToken}= params;

    this.setState({accessToken, isLogin: accessToken !== undefined})
  }
  generateSpotifyLinkAuthorize(){
    console.log(process.env)
    const state = Date.now().toString()
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    return`${Config.SPOTIFY_BASE_URL}/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000&state=${state}&scope=${Config.SPOTIFY_SCOPE}`
  }
  render(){
    return(
    
            <div className="album-wrap">
              {!this.state.isLogin&&(
              <a href={ this.generateSpotifyLinkAuthorize()}>Authorize</a>)}
              <Search/>
              <div className="album-card">
                {data.map((item)=>(
                    <Card key={item.id} title= {item.name} artist={item.artists[0].name} img={item.album.images[0].url} />
                ))}
                </div>
            </div>
          )
    
  }
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