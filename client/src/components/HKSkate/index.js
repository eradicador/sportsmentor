import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class HKSkate extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to skate in hockey").then(result => {
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
                            <h1>Skating Coach</h1>
                            <p>
                            To be a great hockey player you first have to learn to be a great skater, this article will give you the building blocks necessary to become an amazing skater.
When you are first learning to skate it seems like a very daunting task, you are given two shoes with blades attached to them and asked to go onto a surface of ice, like it is no big deal. A lot of the trouble with learning how to skate is to get over the emotional and mental barriers first. Don’t feel embarrassed to use a chair or any other tool. In fact using a chair or pylon is the best way to learn to skate as it will allow you to gradually add weight to your skates and feel more comfortable. After learning to push off with your skates, then you just need to learn muscle memory and practice a lot.
When you lace up those skates for the first time practice standing on them in the dressing room. Get used to the feel of the blades and the way it will affect your balance. Also practice using each edge of your blade. Remember when your skates are flat, you are standing on two edges.
                        
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

export default HKSkate;