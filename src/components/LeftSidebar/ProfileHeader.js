import React from "react";

function ProfileHeader({ user }) {
  return (
    <>
      <div className="header">
        <img className="avatar" src={user.image} alt="" />
        <p>{user.name}</p>
      </div>
    </>
  );
}

export default ProfileHeader;