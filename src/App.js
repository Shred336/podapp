import "./podapp/podapp.css";
import React, { useState } from "react";
import { PodGrid } from "./podapp/PodGrid";

function App() {
  const [rssFeed, setRssFeed] = useState("");

  const handleLoadFeedClick = () => {
    const inputRssFeed = document.getElementById("rssFeedUrl").value;
    setRssFeed(inputRssFeed);
  };

  const checkKey = (e) => {
    if (e.keyCode === 13) {
      handleLoadFeedClick();
    }
  };
  return (
    <div className="App">
      <h1>Pod Player</h1>
      <PodGrid rssfeed={rssFeed} height="500px" width="100%"></PodGrid>
      <div id="rssInput">
        <label htmlFor="rssFeedUrl">RSS FEED URL:</label>
        <input
          id="rssFeedUrl"
          name="rssFeedUrl"
          // onChange={handleLoadFeedClick}
          onKeyUp={handleLoadFeedClick}
          onKeyDown={checkKey}
          defaultValue={rssFeed}
        />

        <button onClick={handleLoadFeedClick}>Load Feed</button>
      </div>
    </div>
  );
}

export default App;
