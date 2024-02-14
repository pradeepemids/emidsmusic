import axios from "axios";
import { async } from "q";
import { Component } from "react";
export class ApiManager {
    
   static async getSongs(searchInput)  {
        try {
          searchInput = (searchInput=="") ? "trending" : searchInput; 
        const { data } = await axios.get(
          "https://deezerdevs-deezer.p.rapidapi.com/search",
          {
            headers: {
              "X-RapidAPI-Key":
                "1f098edf05msh22b8c9bc4a1753ep17ea78jsn2ab728790b37",
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            },
            params: { q: searchInput },
          }
        );
        return data.data;
        } catch (error) {
            console.error(error);
        }
      }
    }
    export default ApiManager;