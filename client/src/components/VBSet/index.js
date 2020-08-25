import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';
// import { Container } from 'semantic-ui-react';

class VBSet extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to set a volleyball").then(result => {
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
                            <h1>Set Coach</h1>
                            <p>
                            1
Watch for the direction in which your teammate will bump the ball. If you're anxious to set the ball, it must be realistically playable for you. A skilled teammate typically bumps the ball high and in the direction of a teammate ready to set it. If your teammate sends the ball toward you, it's your cue to set the ball. If the teammate bumps the ball elsewhere on the court, it's likely for another teammate to set.
2
Estimate the trajectory of the ball and set your body square to it. It's difficult to attempt to set the ball at an awkward angle, but by squaring your body to the ball, you're ready to receive it. Bend your knees slightly and keep your weight evenly distributed between both feet to avoid being unbalanced.
3
Hold your hands a few inches above your forehead with your arms and shoulders relaxed and your elbows bent between 45 and 90 degrees. Cup your hands slightly and hold them in such a manner that your two thumbs and two index fingers are pointing toward each other. In this position, you'll form the rough shape of a triangle between your hands.
4
Straighten your legs and arms, push upward as soon as the ball comes into contact with your cupped hands, sending the ball skyward toward your side of the net. Don't stop your movement as soon as the ball leaves your hands; as is common in many sports, following through increases your chance of sending the ball where you want it to go. As you get familiar with setting, you'll discover how much force you need to correctly set it to a teammate. Much of effective setting is about repetition; the more you do it, the more you'll get comfortable with pushing the ball toward the net -- but not over it -- and passing it to meet the preferences of an attacker.  
                        
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

export default VBSet;