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
        youtubeAPI.searchVideo("how to hit a baseball").then(result => {
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
                        <h1>Batting Coach</h1>
                            <p>
                                In baseball, batting is the act of facing the opposing pitcher and trying to produce offense for one's team. A batter or hitter is a person whose turn it is to face the pitcher. The three main goals of batters are to become a baserunner, to drive runners home or to advance runners along the bases for others to drive home, but the techniques and strategies they use to do so vary. Hitting uses a motion that is virtually unique to baseball, one that is rarely used in other sports. Hitting is unique because it involves rotating in the horizontal plane of movement, unlike most sports movements which occur in the vertical plane.
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


export default BBHit;