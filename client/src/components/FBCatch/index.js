import React from 'react';
import youtubeAPI from '../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';
import fbcatch from "../../images/fbcatch.jpg"

class FBCatch extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to catch a football").then(result => {
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
                            <h1>Receiving Coach</h1>
                            <p>
                                The basic rule of catching is to make a diamond-shaped window (some coaches teach
                                a triangle) by putting the thumbs and index fingers of both hands together with the
                                fingers spread out. This hand position is used when a football is coming waist high (belt
                                buckle) or above, and directly to the receiver. When a ball is thrown below the waist,
                                the hand position is the opposite: the pinkie fingers of both hands touch with thumbs
                                pointing to the outside so that the hands form a basket to catch the ball. While common
                                practice is to say waist high or above, the preferred method is to fine-tune the
                                delineation point by using the bottom of the numbers, as the location that determines
                                which hand position to use.
                                <img src={fbcatch} alt="footbal catch technique" />;
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

export default FBCatch;