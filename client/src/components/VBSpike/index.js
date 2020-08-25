import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';
import vbspike from "../../images/vbspike.gif"


class VBSpike extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    componentDidMount() {
        youtubeAPI.searchVideo("how to spike a volleyball").then(result => {
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
                            <h1>Spike Coach</h1>
                            <p>
                                <img src={vbspike} alt="Logo" />

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



export default VBSpike;