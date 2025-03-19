import React from "react";
import {
  IoPersonCircle,
  IoMail,
  IoCall,
  IoLogOut,
  IoLocation,
} from "react-icons/io5";
import "./ProfileView.css";

const ProfileView: React.FC = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@email.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    registeredAt: "10 March 2024",
    profilePicture: "https://via.placeholder.com/150",
  };

  const handleLogout = () => {
    alert("Logging out...");
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="profile-avatar"
        />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-location">
          <IoLocation /> {user.location}
        </p>
      </div>
      <div className="profile-info">
        <div className="profile-item">
          <IoMail className="profile-icon" />
          <span>{user.email}</span>
        </div>
        <div className="profile-item">
          <IoCall className="profile-icon" />
          <span>{user.phone}</span>
        </div>
        <div className="profile-item">
          <span className="profile-icon">📅</span>
          <span>Registered at: {user.registeredAt}</span>
        </div>
      </div>

      <button className="logout-button" onClick={handleLogout}>
        <IoLogOut className="logout-icon" />
        Logout
      </button>
    </div>
  );
};

export default ProfileView;
