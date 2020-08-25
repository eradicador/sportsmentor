import React from 'react';
import youtubeAPI from '../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class SCPass extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to pass a soccerball").then(result => {
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
                                Standard Pass
                                To do a standard pass, turn your hip outward, lift your leg to the side, then pass the ball with the inside of your foot.
                                Point your placefoot and body at your target. Follow through at your target.
                                Use the standard pass to pass the ball on the ground. You will use this pass often, so master proper technique.
                                Lofted Pass
                                Use the lofted pass for long passes across the field, when you need to pass over a defender’s head, and when crossing a soccer ball.
                                To do a lofted pass, put your placefoot out wide horizontally, kick the bottom of the ball with the area around the knuckle of your big toe, then follow through.
                                When you follow through your leg should be high. This step is huge. I had trouble getting enough height on my lofted passes until I learned to follow through correctly.
                                This pass should be firm, but not as strong as a shot. If your passes have too much power you aren’t kicking the bottom of the ball or are following through incorrectly.
                                Chipped Pass
                                The chipped pass is similar to a lofted pass only the ball stays longer in the air and has more backspin.
                                Use the chipped pass when passing a short distance through the air. For instance, say you are playing wingback and the winger is a short distance away. He makes a run past the opposing winger towards the corner flag. If you play a chipped pass the ball will go over the opposing winger and your teammate will get to the ball before the opposing wingback gets to it.
                                Whether you use a chipped or lofted pass depends on the situation. Sometimes both passes would be effective. However, one usually works better than the other. You will learn which pass to use as you practice them in games.
                                To perform this pass, kick the grass under the ball and follow through slightly.
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

export default SCPass;