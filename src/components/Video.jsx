import "./Video.css";

const Video = () => {
  return (
    <div className="video">
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eGmaZC-q4Ko?autoplay=1&mute=1"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
