import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class BKDribble extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to dribble a basketball").then(result => {
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
                                Dribble the ball hard. The more time the ball spends in your hand, the more control you have of the ball. The harder you dribble, the quicker it gets back in your hand.
                                Head up at all times. Look at the rim or a spot on the wall during all practice.
                                Use your finger tips to control the ball, not your palm.
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

export default BKDribble;