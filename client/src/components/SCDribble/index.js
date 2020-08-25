import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';


class SCDribble extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to dribble a soccerball").then(result => {
            console.log(result);
            this.setState({ videos: result.data.items, selectedVideo: result.data.items[0] })
        }).catch(error => console.log(error))
    }


    render() {
        return (
            <>
                <div className="container font-weight-bold">
                    <div className="row"id="para">
                        <div className="col-12">
                            <h1>Dribbling Coach</h1>
                            <p>
                                The key to dribbling is to use both feet to kick the ball ever so lightly without losing control at a comfortable speed for you. You should touch the ball with the inside of your shoes, for the most part, for better control. But you can touch it with the outside of your shoe as well. The very best players in the world can dribble the ball adeptly with both feet. Most people usually favor one of their feet as the superior skilled foot to dribble the ball in close quarters, although both feet also are used.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <VidDetails video={this.state.selectedVideo} />
                    </div>
                    <div className="col-md-4">
                        <VidGroup videos={this.state.videos} />
                    </div>
                </div>

            </>
        )

    }
}

export default SCDribble;