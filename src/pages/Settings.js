import React from "react";
import { Link } from "react-router-dom";
import "./Settings.css";
import { Input } from "web3uikit";
import pfp1 from "../images/pfp1.png";
import pfp2 from "../images/pfp2.png";
const Settings = () => {
  const pfps = [pfp1, pfp2];
  return (
    <>
      <div className="pageIdentify">Settings</div>
      <div className="settingsPage">
        <Input
          label="Name"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
        />
        <Input
          label="Bio"
          name="bioChange"
          width="100%"
          labelBgColor="#141d26"
        />
        <div className="pfp">
          Profile Image(Your NFTs)
          <div className="pfpOptions">
            {pfps.map((e, i) => {
              return (
                <>
                  <img src={e} className="pfpOptions"></img>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
