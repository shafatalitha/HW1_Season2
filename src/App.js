import './index.css';
import Card from "./Component/card";

import data from "./data/data";
function App() {
  return (
    <div className="App">
     
      <Card img={data.album.images[0].url} title={data.name} artist={data.artists[0].name}/> 

    </div>
  );
}

export default App;
