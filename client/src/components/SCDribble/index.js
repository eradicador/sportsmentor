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
                            In soccer, dribbling is the skill of moving the ball around the field by use of the feet, unassisted by other players. It has been said that the great dribblers are “born and not made,” and that dribbling is “an art and not a science,” but dribbling can and must be taught, up to and including the most advanced moves.
                            The basic concepts of dribbling include keeping the ball as close to the feet as possible in order to maintain control of the ball, using the correct part of the feet to contact the ball in order to maintain balance of the body, and trying to maximize the use of the lower part of peripheral vision to see the ball in order to keep as much of the field in sight as possible during performance of the skill.
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