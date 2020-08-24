import React from 'react';
// import youtubeAPI from '../utils/youtubeAPI';
// import VidGroup from './VidGroup';
// import VidDetails from './VidDetails';
// import { Container } from 'semantic-ui-react';

class BBField extends React.Component {
    // state = {
    //     videos: [youtubeAPI.get('/search/learning-to-field-a-baseball')],
    //     selectedVideo: null
    // }


    render() {
        return (
            <>
                <div className="container font-weight-bold">
                    <div className="row">
                        <div className="col-12">
                            <h1>Dribbling Coach</h1>
                            <p>
                                In basketball, dribbling is bouncing the ball on the floor continuously with one hand at a time. It is the only legal way that a player may maintain possession of the ball while walking or running.

                                James Naismith's original rules said nothing about dribbling, merely stating that passing the ball was the legal way of advancing it. Players soon developed the strategy of "passing to themselves", which Naismith himself both endorsed and admired for its ingenuity, and which evolved into the dribble as it is known today. The first known team to dribble was Yale University in 1897.

                                The dribble allows for much faster advancement and thus more opportunities for scoring. It also provides an opportunity for a crafty player on the opposing team to "steal" the ball in mid-bounce. Once a player stops dribbling the ball and holds it, the player normally must either pass it to another player or take a shot; if the player dribbles and then holds the ball in any way (either grasping it with their hands or arms, or "palming" it, i.e. holding it too much toward its underside during the act of dribbling) then continues to dribble, the referee stops the play, signals either "double dribble" or "carrying", and turns the ball over to the other team. A "double dribble" may also be called if the player tries to dribble with both hands at the same time.

                                Dribbling should be done with finger pads and the fingers should be relaxed and spread, The wrist should be pushing the basketball, and the forearm should be moving up and down. Skilled ball handlers bounce the ball low to the ground, reducing the risk of a defender reaching in to steal the ball. Adept dribblers can dribble behind their backs, between their legs and change the speed of the dribble, making the player difficult to defend, and opening up options to pass, shoot or drive with the ball.

                                The National Association of Basketball Coaches (NABC) was founded in 1927 to oppose a move to eliminate dribbling from the sport.
                        </p>
                        </div>
                    </div>
                </div>
                {/* <div className='ui container' style={{ marginTop: '1em' }}>

                    <div className='ui grid'>
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VidDetails video={this.state.selectedVideo} />
                            </div>
                            <div className="five wide column">
                                <VidGroup videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div> */}

            </>
        )

    }
}

export default BBField;