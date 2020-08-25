import React from 'react';
import youtubeAPI from '../../utils/youtubeAPI';
import VidGroup from '../VidGroup';
import VidDetails from '../VidDetails';


class VBServe extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        youtubeAPI.searchVideo("how to serve a volleyball").then(result => {
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
                            <h1>Serving Coach</h1>
                            <p>
                                A player stands behind the inline and serves the ball, in an attempt to drive it into the opponent's court. The main objective is to make it land inside the court; it is also desirable to set the ball's direction, speed and acceleration so that it becomes difficult for the receiver to handle it properly. A serve is called an "ace" when the ball lands directly onto the court or travels outside the court after being touched by an opponent; when the only player on the server's team to touch the ball is the server.

                                In contemporary volleyball, many types of serves are employed:

                                Underhand: a serve in which the player strikes the ball below the waist instead of tossing it up and striking it with an overhand throwing motion. Underhand serves are considered very easy to receive and are rarely employed in high-level competitions.
                                Sky ball serve: a specific type of underhand serve occasionally used in beach volleyball, where the ball is hit so high it comes down almost in a straight line. This serve was invented and employed almost exclusively by the Brazilian team in the early 1980s and is now considered outdated. During the 2016 Olympic Games in Rio de Janeiro, however, the sky ball serve was extensively played by Italian beach volleyball player Adrian Carambula. In Brazil, this serve is called Jornada nas Estrelas (Star Trek)
                                Topspin: an overhand serve where the player tosses the ball high and hits it with a wrist snap, giving it topspin which causes it to drop faster than it would otherwise and helps maintain a straight flight path. Topspin serves are generally hit hard and aimed at a specific returner or part of the court. Standing topspin serves are rarely used above the high school level of play.
                                Float: an overhand serve where the ball is hit with no spin so that its path becomes unpredictable, akin to a knuckleball in baseball.
                                Jump serve: an overhand serve where the ball is first tossed high in the air, then the player makes a timed approach and jumps to make contact with the ball, hitting it with much pace and topspin. This is the most popular serve among college and professional teams.
                                Jump float: an overhand serve where the ball is tossed high enough that the player may jump before hitting it similarly to a standing float serve. The ball is tossed lower than a topspin jump serve, but contact is still made while in the air. This serve is becoming more popular among college and professional players because it has a certain unpredictability in its flight pattern. It is the only serve where the server's feet can go over the inline.
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

export default VBServe;