import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class BKPass extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to pass a basketball").then(result => {
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
                            <h1>Passing Coach</h1>
                            <p>
                                CHEST PASS
                                The chest pass is named so because the pass originates from the chest. It is thrown by gripping the ball on the sides with the thumbs directly behind the ball. When the pass is thrown, the fingers are rotated behind the ball and the thumbs are turned down. The resulting follow through has the back of the hands facing one another with the thumbs straight down. The ball should have a nice backspin.
                                When throwing a chest pass, the players should strive to throw it to the receiver's chest level. Passes that go low to high or high to low are difficult to catch.
                                
                                BOUNCE PASS
                                The bounce pass is thrown with the same motion however it is aimed at the floor. It should be thrown far enough out that the ball bounces waist high to the receiver. Some say try to throw it 3/4 of the way to the receiver, and that may be a good reference point to start, but each player has to experiment how far to throw it so it bounces to the receiver properly. Putting a proper and consistent backspin on the pass will make the distance easier to judge.
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

export default BKPass;