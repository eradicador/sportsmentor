import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
import { Container, SearchResults } from 'semantic-ui-react';


class BBPitch extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to pitch a baseball").then(result => {
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
                        <h1>Pitching Coach</h1>
                            <p>
                                <b>4-seam fastball:</b>
                           This pitch is the hardest of the fastballs, it rotates backwards keeping the ball straight with not much movement.
                           <br />
                                <b>Slider:</b>
                           This pitch slides at an angle towards the pitchers glove side with depth.
                           Its usually 9-12 mph slower than the 4-seam fastball.
                           <br />
                                <b>Change-up:</b>
                           Is supposed to have the same spin as a fastball.
                           8-15 mph slower than the fastball.
                           Depending on the pitcher, some will throw a change-up that has a little depth, and some just float it in there and rely on the change in speed, and the similar spin for effectiveness.

                       </p>
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
                </div>

            </>
        )
    }
}

export default BBPitch;