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
    searchVideoBBField: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to field a baseball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoBBHit: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to hit a baseball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoBBPitch: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to pitch baseball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoBKdribble: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to dribble a basketball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoBKPass: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to pass a basketball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoBKShoot: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to shoot a basketball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoFBCatch: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to catch a football",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoFBThrow: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to throw a football",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoFBTackle: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to football tackle",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoHKDribble: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to dribble a hockey puck",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoHKPass: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to pass in hockey",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoHKShoot: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to shoot a hockey puck",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoSCDribble: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to dribble a soccer ball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoSCPass: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to pass a soccer ball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoSCShoot: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to shoot a soccer ball at the goal",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoVBBump: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to properly bump a volleyball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoVBSet: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to properly set a volleyball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoVBSpike: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to spike a volleyball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    },
    searchVideoVBServe: function() {
        return axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: "how to serve a volleyball",
                chart: 'mostPopular',
                maxResults: 3,
                key: KEY
            }
        })
    }
}
  
  
