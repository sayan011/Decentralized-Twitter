import React from "react";
import { defaultImgs } from "../defaultimgs";
import { Icon, TextArea } from "web3uikit";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="mainContent">
        <div className="profileTweet">
          <img src={defaultImgs[0]} className="profilePic"></img>
          <div className="tweetBox">
            <TextArea
              label=""
              name="tweetTxtArea"
              value="GM"
              type="text"
              width="95%"
            ></TextArea>
            <div className="imgorTweet">
              <div className="imgDiv">
                <Icon fill="#1DA1F2" size={20} svg="image"></Icon>
              </div>
              <div className="tweetOptions"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
