import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import "./Settings.css";
import { Input } from "web3uikit";
import pfp1 from "../images/pfp1.png";
import pfp2 from "../images/pfp2.png";
import { defaultImgs } from "../defaultimgs";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const Settings = () => {
  const pfps = [pfp1, pfp2];
  const { Moralis ,isAuthenticated,account} = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const [selectedPFP, setSelectedPFP] = useState();
  const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);
  const [theFile, setTheFile] = useState();
  const [userName, setUsername] = useState();
  const [bio, setBio] = useState();
  const inputFile = useRef(null);

  const onBannerClick = () => {
    inputFile.current.click();
  };
  const changeHandler = (event) => {
    const img = event.target.files[0];
    setTheFile(img);
    setSelectedFile(URL.createObjectURL(img));
  };

  const resolveLink={url}=>{
    if(!url)
  }
  useEffect(()=>{
    const fetchNFTs=async()=>{
      const options={
        chain:"mumbai",
        address:account
      }
      const mumbaiNFTs=await Web3Api.account,getNFTs(options)
    }
  },[isAuthenticated,account])

  const saveEdits = async () => {

    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();
    if (bio) {
      myDetails.set("bio", bio);
    }
    if (userName) {
      myDetails.set("userName", userName);
    }
    if (theFile) {
      const data = theFile;
      const file = new Moralis.File(data.name, data);
      await file.saveIPFS();
      myDetails.set("banner", file.ipfs());
    }
    await myDetails.save();
    window.location.reload();
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Bio"
          name="bioChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e) => setBio(e.target.value)}
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
        <div className="save" onClick={() => saveEdits()}>
          Save
        </div>
      </div>
    </>
  );
};

export default Settings;
