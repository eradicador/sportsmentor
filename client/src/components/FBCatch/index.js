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
                            <h1>Catching Coach</h1>
                            <p>
                                The basic rule of catching is to make a diamond-shaped window (some coaches teach
                                a triangle) by putting the thumbs and index fingers of both hands together with the
                                fingers spread out. This hand position is used when a football is coming waist high (belt
                                buckle) or above, and directly to the receiver. When a ball is thrown below the waist,
                                the hand position is the opposite: the pinkie fingers of both hands touch with thumbs
                                pointing to the outside so that the hands form a basket to catch the ball. While common
                                practice is to say waist high or above, the preferred method is to fine-tune the
                                delineation point by using the bottom of the numbers, as the location that determines
                                which hand position to use
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