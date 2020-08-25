import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class BKShoot extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to shoot a basketball").then(result => {
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
                            <h1>Shooting Coach</h1>
                            <p>
                                Get your body square to the basket with equal weight on each foot and bend your knees slightly. If you are a right-handed shooter, then your right foot should be slightly – not more than five inches – in front of the left foot, facing the basket.
                                Bring the ball into the “lock and load” position. That means bringing the ball onto the fingertips of your shooting hand like a waiter holds a tray. Use your “off hand” as a guide and nothing more. Bend your knees with your head out over the ball.
                                Lock in on your target with your eyes. Some players look at the back of the rim, others concentrate on a spot just over the front of the rim. Whatever you choose, lock in on that spot. Use your other hand as a guide. It’s only there for the set-up and to help balance the ball in the proper position. Do not try to shoot the ball with both hands. If the off-hand is too far in front of the ball, it will be difficult to shoot accurately. Practice each of these steps until they become automatic.
                                With your “guidance system” in order, push the ball straight up toward the basket until your arm extends completely and your elbow locks. Follow through by snapping your wrist in a downward waving motion. Remember to keep your shooting elbow aligned with your body. That way your arm has to go straight up and down which increases your accuracy.
                                As you release the ball it should roll off your fingertips, producing back spin. Your middle finger usually has the last contact with the ball. Remember to shoot the ball with your fingertips, not the palms of your hand. Practice using these techniques close to the basket. You want to keep the follow-through the same every time. That’s why it’s important to practice at close range in the beginning. When these fundamentals become automatic, you’ll be able to bring the ball off the dribble or receive a pass from a teammate and immediately go into the basic set-up without thinking about each movement.
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

export default BKShoot;