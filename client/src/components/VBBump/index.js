import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class VBBump extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to bump a volleyball").then(result => {
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
                            <h1>Bump Coach</h1>
                            <p>
                            You’ll want to start with your knees bent, weight on your toes, and leaning forward slightly. Next, you’ll need to get your platform ready. Lock your elbows so your arms are perfectly straight. The way you hold your hands together, in the grand scheme of things, doesn’t affect much, but I personally prefer making a fist with one hand, and wrapping the other hand around it. DO NOT CROSS YOUR THUMBS! At the wrong angle, with enough power, you can break your thumbs if they’re crossed.
                        
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

export default VBBump;