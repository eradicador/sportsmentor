import axios from 'axios';
const KEY = 'AIzaSyDv9S7paGQVkxxGU9g9a0zaCVzSpb1P43Y'; // mention your youtube API key here

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
    searchVideoBBField: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "learn to field a baseball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    }
}
  
  
