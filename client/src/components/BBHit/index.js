import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
import { Container, SearchResults } from 'semantic-ui-react';

class BBHit extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideoBBHit().then(result => {
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
                            <h1>Batting Coach</h1>
                        </div>
                    </div>
                    <div className="row" id="para">
                        <div className="col-12">
            {/* paragraph content */}
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
}}


export default BBHit;