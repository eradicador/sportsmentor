import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class FBTackle extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to tackle in football").then(result => {
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
                            <h1>Tackle Coach</h1>
                            <p>
                                The TackleAlways keep your head up. It is tempting to drop your head, but important to keep your head up and your eye on the target.
                                Hit the player on the thigh pad with your helmet across the body. This is the ideal place to tackle the defender, right on the thigh pad.
                                Keep your back straight. Don't bend or arch your back.
                                Wrap BOTH arms around the player, preferably around their legs. This may be the most important part of tackling. If you don't "wrap up" the ball carrier may just bounce right off you and keep going.
                                Pull the player sharply towards you with your arms. Don't let them get away from you once you have them.
                                Lift and drive. As you pull the player towards you lift slightly and then drive towards them with your legs. Use your leverage and power to bring them down.
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

export default FBTackle;