import axios from 'axios';
const KEY = 'AIzaSyDv9S7paGQVkxxGU9g9a0zaCVzSpb1P43Y'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})