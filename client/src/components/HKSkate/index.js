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
                    <div className="row"id="para">
                        <div className="col-12">
                            <h1>Skating Coach</h1>
                            <p>
                                <b>HOW TO ICE SKATE</b>
                                To be a great hockey player you first have to learn to be a great skater, this article will give you the building blocks necessary to become an amazing skater.
                                When you are first learning to skate it seems like a very daunting task, you are given two shoes with blades attached to them and asked to go onto a surface of ice, like it is no big deal. A lot of the trouble with learning how to skate is to get over the emotional and mental barriers first. Don’t feel embarrassed to use a chair or any other tool.

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