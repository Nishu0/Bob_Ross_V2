import React, { useEffect } from 'react';

const YouTubePlayer = ({ videoURL }) => {
  useEffect(() => {
    const extractYouTubeVideoId = (url) => {
      const regex = /(?:\?v=|\/embed\/|\.be\/)([-a-zA-Z0-9_]+)/;
      const match = url.match(regex);
      return match ? match[1] : null;
    };

    const setupYouTubePlayer = () => {
      if (!videoURL) {
        console.error('No YouTube URL provided');
        return;
      }

      const videoId = extractYouTubeVideoId(videoURL);

      if (!videoId) {
        console.error('Invalid YouTube URL');
        return;
      }

      const player = new window.YT.Player('youtube-player', {
        height: '360',
        width: '640',
        videoId: process.env.YOUTUBE_API_KEY,
      });
    };

    if (window.YT && window.YT.Player) {
      setupYouTubePlayer();
    } else {
      // Load the YouTube IFrame API synchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setupYouTubePlayer();
      };
    }
  }, [videoURL]);

  return <div id="youtube-player"></div>;
};

export default YouTubePlayer;
