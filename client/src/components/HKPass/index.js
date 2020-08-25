import React from 'react';
import youtubeAPI from '../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class HKPass extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to pass in hockey").then(result => {
            console.log(result);
            this.setState({ videos: result.data.items, selectedVideo: result.data.items[0] })
        }).catch(error => console.log(error))
    }


    render() {
        return (
            <>
                <div className="container font-weight-bold">
                    <div className="row">
                        <div className="col-12">
                            <h1>Passing Coach</h1>
                            <p>
                                Cup the puck – This keeps the puck flat on the ice
                                Have your top hand out – This allows you to cup the puck, and get more power on your pass
                                When giving the pass, roll your wrists to keep the blade closed so the puck doesn’t flip up
                                Keep the blade low (don’t lift it) and the puck should stay flat on the ice
                                Pass to where the player is going
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

export default HKPass;