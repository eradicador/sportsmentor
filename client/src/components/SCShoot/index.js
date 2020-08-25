import React from 'react';
import youtubeAPI from '../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class SCShoot extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to shoot a soccerball").then(result => {
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
                            <h1>Shooting Coach</h1>
                            <p>
                                <b>Basic Key Points:</b>
                                1. Ankle Locked, toe down, use laces (you don't hit a baseball with a loose bat)
                                2. Plant foot pointed at target
                                3. Land on Kicking Foot (you do this to help generate power and help keep the ball low)

                                <b>Advanced Key Points:</b>
                                1. Generate power from thigh, not calf
                                2. Shoulders face target (don't rotate them)
                                3. Keep head down (some of the best goals you will score you barely see them go in)
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

export default SCShoot;