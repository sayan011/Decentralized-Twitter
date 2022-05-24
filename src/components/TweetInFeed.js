import React from "react";
import "./TweetInFeed.css";
import golf from "../images/golf.png";
import canoe from "../images/canoe.jpeg";
import { Icon } from "web3uikit";
import { defaultImgs } from "../defaultimgs";
const TweetInFeed = () => {
  return (
    <>
      <div className="feedTweet">
        <img src={defaultImgs[0]} className="profilePic" />
        <div className="completeTweet">
          <div className="who">
            Sayan
            <div className="accWhen">0x2434...232.1h</div>
          </div>
          <div className="tweetContent">
            Meow meow
            <img src={golf} className="tweetImg" />
            <div className="interactions"></div>
          </div>
        </div>
      </div>
      <div className="feedTweet">Hello</div>
    </>
  );
};

export default TweetInFeed;
