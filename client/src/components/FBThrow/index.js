import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class FBThrow extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to throw a football").then(result => {
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
                            <h1>Throwing Coach</h1>
                            <p>
                                Position your fingers in between the laces. If you want to throw a spiral, the best way to hold the football is to place the ring and pinkie finger of your throwing hand in between the laces, and your thumb underneath them, on the other side of the ball. The thumb should be just underneath the white ring on the football, which you can use as a guide

                                Place your index finger near the tip. Your index finger should be over a seam, close to or on the tip of the football, with your thumb and index finger making a right angle with each other.

                                Use your fingertips to grip the ball. For the ball to spiral effectively, you'll need to spin it with your hand, which becomes very difficult if you're not gripping the ball with your fingertips. Practice grabbing the ball with the pads of your fingertips, your knuckles arched slightly off the surface of the ball
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

export default FBThrow;