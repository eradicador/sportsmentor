import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';

class BBField extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to field a baseball").then(result => {
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
                        <h1>Fielding Coach</h1>
                            <p>
                                Early baseball was a game played without gloves. During the slow transition to gloves, a player who continued to play without one was called a barehanded catcher; this did not refer to the position of catcher, but rather to the practice of catching with bare hands. The earliest glove was not webbed and not particularly well suited for catching but was used more to swat a ball to the ground so that it could be picked up.
                            <br />
                                An 1885 glove patent
                                One of the first players believed to use a baseball glove was Doug Allison, a catcher for the Cincinnati Red Stockings, in 1870, due to an injured left hand. The first confirmed glove use was by Charlie Waitt, a St. Louis outfielder and first baseman who, in 1875, donned a pair of flesh-colored gloves. Glove use slowly caught on as more and more players began using different forms of gloves.
                            <br />
                                 Many early baseball gloves were simple leather gloves with the fingertips cut off,     supposedly to allow for the same control of a bare hand but with extra padding. First baseman Albert Spalding, originally skeptical of glove use, influenced more infielders to begin using gloves. Spalding later founded the sporting goods company Spalding, which still manufactures baseball gloves along with other sports equipment. By the mid-1890s, it was normal for players to wear gloves in the field.
                            <br />
                                A.G. Spalding and Bros. advertisement for infielder gloves, 1905
                                In 1920, Bill Doak, a pitcher for the St. Louis Cardinals, suggested that a web be placed between the first finger and the thumb in order to create a pocket. This design soon became the standard for baseball gloves. Doak patented his design and sold it to Rawlings. His design became the precursor to modern gloves and enabled Rawlings to become the preferred glove of professional players.
                            <br />
                                For many years it was customary for fielders to leave their gloves on the field when their team went in to bat. This practice was prohibited by the major leagues in 1954.
                            <br />
                                Baseball gloves have grown progressively larger since their inception. While catching in baseball had always been two-handed, eventually, gloves grew to a size that made it easier to catch the ball in the webbing of the glove, and use the off-hand to keep it from falling out. A glove is typically worn on the non-dominant hand, leaving the dominant hand for throwing the ball; for example, a right-handed player would wear a glove on the left hand.

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

export default BBField;