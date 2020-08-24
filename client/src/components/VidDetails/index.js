import React from "react";

const VideoDetail = ({ video }) => {
  let videoSrc = ""
  if (!video) {
    return(
      <div>No Videos Found</div>
    )
  }
  if(video && video.id) {
    videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof video);
  }
 
  
  return (
    <div>
      <div className="ui embed" id="ytube">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;