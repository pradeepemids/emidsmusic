import axios from "axios";
import users from '../Json/users.json'
export class ApiManager {

  static async getSongs(searchInput) {
    try {
      searchInput = (searchInput == "") ? "trending" : searchInput;
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

  static async validateCredentials(credentials) {
    try {
      const email = users.find(user => user.username === credentials.username && user.password === credentials.password).email;
      if (email) {
        return email;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async saveUser(user) {
    try {
      if(user)
        return true;
      else
        return false;
    } catch (error) {
      console.error(error);
    }
  }  
}
export default ApiManager;