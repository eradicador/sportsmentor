import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';

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
                                In baseball, a pitch is the act of throwing a baseball toward home plate to start a play. The term comes from the Knickerbocker Rules. Originally, the ball had to be literally "pitched" underhand, as with pitching horseshoes. Overhand throwing was not allowed until 1884.

                                The biomechanics of pitching have been studied extensively. The phases of throwing include windup, early cocking, late cocking, early acceleration, late acceleration, deceleration, and follow-through.

                                Pitchers throw a variety of pitches, each of which has a slightly different velocity, trajectory, movement, hand position, wrist position and/or arm angle. These variations are introduced to confuse the batter in various ways, and ultimately aid the defensive team in getting the batter or baserunners out. To obtain variety, and therefore enhance defensive baseball strategy, the pitcher manipulates the grip on the ball at the point of release. Variations in the grip cause the seams to "catch" the air differently, thereby changing the trajectory of the ball, making it harder for the batter to hit.

                                The selection of which pitch to use can depend on a wide variety of factors including the type of hitter who is being faced; whether there are any base runners; how many outs have been made in the inning; and the current score.
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