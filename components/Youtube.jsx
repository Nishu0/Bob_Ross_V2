import React, { useEffect } from 'react';

const YouTubePlayer = () => {
  useEffect(() => {
    const setupYouTubePlayer = () => {
      const player = new window.YT.Player('youtube-player', {
        height: '360',
        width: '640',
        videoId: process.env.YOUTUBE_API_KEY, 
      });
    };
    window.onYouTubeIframeAPIReady = setupYouTubePlayer;
  }, []);

  return <div id="youtube-player"></div>;
};

export default YouTubePlayer;
