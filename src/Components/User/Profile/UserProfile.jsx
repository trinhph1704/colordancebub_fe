import React from "react";
import { FaCheckCircle, FaShareAlt } from "react-icons/fa";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div id="UserProfile">
    <div className="user-profile-container">
      <div className="profile-header">
        <img
          className="profile-picture"
          src="public\avarta t.jfif"
          alt="User"
        />
        <div className="user-details">
          <h1 className="user-name">Võ Lê Đại Đức</h1>
          <p className="join-date">Joined Oct 2024</p>
        </div>
      </div>
      <div className="profileverichua">
      <div className="verification-status">
        <h3 className="veri-title">VERIFICATION</h3>
        <p className="verification-email">
          <FaCheckCircle className="verification-icon" /> Email
        </p>
      </div>
      <div className="bio-chua">
        <p className="bio">
        Thanks for stopping by! I'm excited to be a part of the Colordanhub
        community.
      </p>
      <button className="share-profile-button">
        <FaShareAlt className="share-icon" /> Share Profile
      </button>
      </div>
      
      </div>
      </div>
    </div>
  );
};

export default UserProfile;
