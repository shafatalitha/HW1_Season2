import React from 'react'
import Card from "../../Component/Card";

import data from "../../data/data";
const Home=()=> {
  return (
    <div className="album-card">
        {data.map((item)=>(
            <Card key={item.id} title= {item.name} artist={item.artists[0].name} img={item.album.images[0].url} />
        ))}
    </div>
  )
}

export default Home