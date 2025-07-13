import React from "react";
import "../VideoBackground1.css";

const VideoBackground = () => {
  return (
    <div className="video-container">

      <div className="content-section">
        <div className="text-side">
          <h1><img src="https://count.getloli.com/@mrekk?name=mrekk&theme=rule34&padding=4&offset=0&align=top&scale=1&pixelated=1&darkmode=0&num=2048" alt="pp" className="nm-img" />PP</h1>
          <p>He's the first guy who break the 2000pp barrier.</p>
        </div>
        <div className="image-side">
          <a target="_blank" href="https://osu.ppy.sh/scores/4746396766">
          <img src="/images/osu_score.png" alt="osu score" className="osu-score-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
