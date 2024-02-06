import React from 'react'
import "./Dashboard.css"
import { useState,useEffect } from 'react'

export default function Dashboard() {
  const [songs, setSongs] = useState([]);

  const getSongs = async() =>{
   let apiData = await fetch("https://v1.nocodeapi.com/joshni/spotify/KIENvPniYiOvnjvq/search?q=trending&type=track");
   let jsonApiData = await apiData.json();
   console.log(jsonApiData);
   setSongs(jsonApiData.tracks.items);
  }
  useEffect(() => {
    //getSongs();
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid" style={{backgroundColor:"#0A1172"}}>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{width:"900px"}}
            />
            <button className="btn btn-outline-success" type="submit" style={{color:"white"}}>
              Search
            </button>
          </form>
        </div>
      </nav>   
      <div className="main-dashboardBody">
        <div className="songs-dashboard" style={{ marginLeft: "16%", height: 100}}>
          <div className="col">
            <div className="row">
            {
            songs.map((songsdata)=>{
              return( <div key = {songsdata.id} className = "col">
                <div className="card" style={{ width: "12rem" }}>
                  <img src={songsdata.album.images[0].url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>  
              </div>);
            }
            )
          }
            </div>
          </div>
         
        </div>       
      </div>
    </>
  )
}
