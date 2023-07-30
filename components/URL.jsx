import React, { useState } from 'react';

const YouTubeURLInput = ({ onURLSubmit }) => {
  const [youTubeURL, setYouTubeURL] = useState('');

  const handleInputChange = (e) => {
    setYouTubeURL(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onURLSubmit(youTubeURL);
    setYouTubeURL('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        id="youtube-url"
        value={youTubeURL}
        onChange={handleInputChange}
        margin-top="10px"
        placeholder="Enter YouTube URL"
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 hover:bg-blue-600"
      >
        Play YouTube Video
      </button>
    </form>
  );
};

export default YouTubeURLInput;
