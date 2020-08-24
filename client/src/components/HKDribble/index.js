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
                                Dribbling is the primary means of controlling the puck when you're moving on the ice. The movement requires good peripheral vision and the ability to control the puck, not only inside your base of support, but also when the puck is outside your primary area of control. That's why hockey dribbling drills are imperative for developing players with hands they can count on in several situations.

                                Retaining possession of the puck when you're off-­balance or being pushed physically by a defender ensures that you'll be able to spark an offensive scoring opportunity.

                                Begin your hockey dribbling drills by controlling the puck inside shoulder distance, maintaining a strong skating stance. Progress by controlling the puck within a wider distance, outside shoulder-width. You can amplify your range of motion by using only your top hand on the stick when pulling the puck to the backhand of the blade. Progress the movement by adding a rapid dribble at the midline of your body before pulling the puck across your body.
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