import React from 'react';
import youtubeAPI from '../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class HKShoot extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to shoot in hockey").then(result => {
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
                                <b>The Slap Shot</b>
                                The slap shot is the bread and butter of shooting. It's the hardest and quickest of the shots. The puck can reach incredible speeds of 100 mph.
                                A slap shot has four phases:
                                1. The player winds his stick, moving it backwards until it is parallel with the ground.
                                2. Next, the shooter swings the club down and forward. The end of the stick contacts the ice where the puck is. The player now shift his weight to the stick as it moves past the puck. The stick end will bend backwards as it makes contact with the puck.
                                3. The shooter then leads the stick forward while rotating the hips.
                                4. Focus on the target and use the stick to guide the puck where you want it to go.
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

export default HKShoot;