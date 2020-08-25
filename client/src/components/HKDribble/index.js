import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class HKDribble extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to dribble a hockey puck").then(result => {
            console.log(result);
            this.setState({ videos: result.data.items, selectedVideo: result.data.items[0] })
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <>
                <div className="container font-weight-bold">
                    <div className="row" id="para">
                        <div className="col-12">
                            <h1>Dribbling Coach</h1>
                            <p>
                                GRIP: Hands apart with your least favorite hand (the one you don't write with) holding the top of hockey stick. Your favorite hand grips the hockey stick about a foot below that hand.
                                Use "soft taps" when striking the puck or ball. ...
                                Bend knees.
                                Use both sides of the stick to control the ball/puck.
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

export default HKDribble;