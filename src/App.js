import "./podapp/podapp.css";
import React, { useState, useEffect } from "react";
import { PodGrid } from "./podapp/PodGrid";

function App() {
  const [rssFeed, setRssFeed] = useState("");
  const [quickFilter, setQuickFilter] = useState("");
  const [inputFeedUrl, setInputFeedUrl] = useState("");
  const [feedUrls, setFeedUrls] = useState([
    {
      name: "Tuesdays with Stories!",
      url: "http://feeds.feedburner.com/TuesdaysWithStories",
    },
    {
      name: "Louder with Crowder",
      url: "https://feeds.megaphone.fm/BMDC5089297303",
    },
    {
      name: "Dan Carlin's Hardcore History",
      url: "https://feeds.feedburner.com/dancarlin/history?format=xml",
    },
    { name: "Stuff Island", url: "https://feeds.megaphone.fm/TPC5829402294" },
    {
      name: "Andrew Schulz's Flagrant with Akaash Singh",
      url: "https://feeds.soundcloud.com/users/soundcloud:users:333121814/sounds.rss",
    },
    {
      name: "Matt and Shane's Secret Podcast",
      url: "https://mattandshanessecret.libsyn.com/rss",
    },
    {
      name: "The Adam Friedland Show",
      url: "https://cum-town.blubrry.net/feed/podcast/",
    },
    {
      name: "The Tim Dillon Show",
      url: "https://audioboom.com/channels/5093219.rss",
    },
    {
      name: "Legion of Skanks",
      url: "https://mavent91%40gmail.com:510458Ff!@gasdigitalnetwork.com/gdn-rss/?showId=613",
    },
    {
      name: "The Real Ass Podcast",
      url: "https://mavent91%40gmail.com:510458Ff!@gasdigitalnetwork.com/gdn-rss/?showId=92",
    },
    {
      name: "Bein' Ian With Jordan",
      url: "https://feeds.libsyn.com/429123/rss",
    },
    { name: "lemonparty", url: "https://feeds.megaphone.fm/TPC2913664141" },
    { name: "Stavvy's World", url: "https://feeds.megaphone.fm/stavvy" },
  ]);
  const handleLoadFeedClick = () => {
    const inputRssFeed = document.getElementById("rssFeedUrl").value;
    setRssFeed(inputRssFeed);
  };
  const handleFilterChange = (event) => {
    setQuickFilter(event.target.value);
  };
  const checkKey = (e) => {
    if (e.keyCode === 13) {
      handleLoadFeedClick();
    }
  };

  let loadFeedTimeout;

  useEffect(() => {
    // this will run when inputFeedUrl changes
    clearTimeout(loadFeedTimeout);
    loadFeedTimeout = setTimeout(() => {
      console.log("should've waited");
      handleLoadFeedClick();
    }, 500);
  }, [inputFeedUrl]);

  return (
    <div className="App">
      <h1>FatDick PodPlayer</h1>
      <div>
        <label htmlFor="quickfilter">Quick Filter:</label>
        <input
          id="quickfilter"
          name="quickfilter"
          value={quickFilter}
          onChange={handleFilterChange}
        />
      </div>
      <PodGrid
        rssfeed={rssFeed}
        quickFilter={quickFilter}
        height="500px"
        width="100%"
      ></PodGrid>
      <div id="rssInput">
        <label htmlFor="rssFeedUrl">RSS FEED URL:</label>
        <input
          id="rssFeedUrl"
          name="rssFeedUrl"
          // onChange={handleLoadFeedClick}
          onKeyUp={handleLoadFeedClick}
          onKeyDown={checkKey}
          defaultValue={rssFeed}
          value={inputFeedUrl}
          onChange={(event) => setInputFeedUrl(event.target.value)}
          // onChange={handleLoadFeedClick}
        />
        <button onClick={handleLoadFeedClick}>Load Feed</button>
        <button onClick={(event) => setInputFeedUrl(event.target.value)}>
          Add to List
        </button>

        <div>
          <label htmlFor="podcasts">Choose a podcast:</label>
          <select
            name="podcasts"
            id="podcasts"
            value={inputFeedUrl}
            onChange={(event) => setInputFeedUrl(event.target.value)}
          >
            {feedUrls.map((feed) => (
              <option value={feed.url} key={feed.url}>
                {feed.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
