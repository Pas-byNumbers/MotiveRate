import React from "react";
import UserCard from "../components/cards/UserCard";
import UserItemsContainer from "./UserItemsContainer";

const ProfileContainer = ({ currentUser, handleLogOut }) => {

  return (
    <div>
      
        <div>
          <UserCard currentUser={currentUser} handleLogOut={handleLogOut} />
      
          <UserItemsContainer currentUser={currentUser} />
        </div>
    </div>
    
  );
};

export default ProfileContainer;
