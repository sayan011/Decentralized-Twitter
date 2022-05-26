import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import "./Settings.css";
import { Input } from "web3uikit";
import pfp1 from "../images/pfp1.png";
import pfp2 from "../images/pfp2.png";
import { defaultImgs } from "../defaultimgs";
const Settings = () => {
  const pfps = [pfp1, pfp2];
  const [selectedPFP, setSelectedPFP] = useState();
  const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);
  const inputFile = useRef(null);

  const onBannerClick = () => {
    inputFile.current.click();
  };
  const changeHandler = (event) => {
    const img = event.target.files[0];
    setSelectedFile(URL.createObjectURL(img));
  };
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
                  <img
                    src={e}
                    className={
                      selectedPFP === e ? "pfpOptionSelected" : "pfpOption"
                    }
                    onClick={() => {
                      setSelectedPFP(pfps[i]);
                    }}
                  ></img>
                </>
              );
            })}
          </div>
          <div className="pfp">
            Profile Banner
            <div className="pfpOptions">
              <img
                src={selectedFile}
                onClick={onBannerClick}
                className="banner"
              ></img>
              <input
                type="file"
                name="file"
                ref={inputFile}
                onChange={changeHandler}
                style={{ display: "none" }}
              ></input>
            </div>
          </div>
        </div>
        <div className="save">Save</div>
      </div>
    </>
  );
};

export default Settings;
