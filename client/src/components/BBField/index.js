import React from 'react';
import youtubeAPI from '../utils/youtubeAPI';
import VidGroup from './VidGroup';
import VidDetails from './VidDetails';

class BBField extends React.Component {
    state = {
        videos: [youtubeAPI.get('/search/learning-to-field-a-baseball')],
        selectedVideo: videos
    }


    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VidDetails video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VidGroup  videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BBField;