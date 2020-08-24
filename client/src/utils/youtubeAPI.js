import axios from 'axios';
// const KEY = 'AIzaSyDrjlH9ZEfKKQVxfdesZsxa5WVWNCRUgRA'; // mention your youtube API key here
const KEY =""
export default {
    getVideos: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 5,
                key: KEY
            }
        })
    },
    searchVideo: function(searchTerm) {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: searchTerm,
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    }
}
  
  
